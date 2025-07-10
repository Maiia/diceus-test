import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { TableColumnConfig } from '@shared/models/table-column-config.model';
import { TableComponent } from '@shared/components/table/table.component';
import { WinnabilityBadgeComponent } from '@shared/components/winnability/winnability-badge/winnability-badge.component';
import { SearchBarComponent } from '@shared/components/search-bar/search-bar.component';
import { ColourBadgeComponent } from '@shared/components/colour-badge/colour-badge.component';
import { MyAccountsService } from '@core/services/my-accounts.service';

@Component({
    selector: 'app-my-accounts',
    imports: [TableComponent, WinnabilityBadgeComponent, SearchBarComponent, ColourBadgeComponent],
    templateUrl: './my-accounts.component.html',
    styleUrl: './my-accounts.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAccountsComponent implements OnInit, AfterViewInit {
    private readonly myAccountsService = inject(MyAccountsService);
    public dataSource = this.myAccountsService.myAccounts;
    public columns: TableColumnConfig[] = [];

    @ViewChild('winnabilityTemplate', { static: true }) winnabilityTemplate!: TemplateRef<any>;
    @ViewChild('colourBadge', { static: true }) colourBadge!: TemplateRef<any>;

    ngOnInit() {
        this.myAccountsService.getMyAccounts();
    }

    ngAfterViewInit(): void {
        this.columns = [
            {
                key: 'account',
                label: 'Account Name/Type',
                type: 'title-subtitle',
                formatFn: (value, row) => ({
                    title: row.accountName,
                    subtitle: row.accountType,
                }),
            },
            { key: 'line', label: 'Line', type: 'text' },
            { key: 'broker', label: 'Broker', type: 'text' },
            { key: 'renewalDate', label: 'Renewal Date', type: 'date' },
            {
                key: 'premium',
                label: 'Premium',
                type: 'money-short',
                align: 'end',
                classFn: () => 'text-[var(--theme-accent)]',
            },
            { key: 'ratedPremium', label: 'Rated Premium', type: 'money-short' },
            {
                key: 'lossRatio',
                label: 'Loss Ratio',
                type: 'custom',
                customTemplate: this.colourBadge,
            },
            {
                key: 'appetite',
                label: 'Appetite',
                type: 'text',
                classFn: () => 'bg-[var(--theme-bg-4)] rounded-full p-2 text-white',
            },
            { key: 'status', label: 'Status', type: 'status' },
            {
                key: 'triage',
                label: 'Triage',
                type: 'text',
                align: 'center',
                classFn: () =>
                    'border border-[var(--theme-accent)] rounded-full p-2 text-[var(--theme-accent)]',
            },
            {
                key: 'winnability',
                label: 'Winnability',
                type: 'custom',
                customTemplate: this.winnabilityTemplate,
            },
            { key: 'actions', type: 'actions', label: '' },
        ];
    }
}
