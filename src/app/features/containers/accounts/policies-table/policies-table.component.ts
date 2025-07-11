import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { IPolicy } from '@core/models/account.model';
import { TableColumnConfig } from '@shared/models/table-column-config.model';
import { TableComponent } from '@shared/components/table/table.component';
import { ICON_COLOR_MAP } from '@core/services/icon/icon-color.utils';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconService } from '@core/services/icon/icon.service';
import { ColourBadgeComponent } from '@shared/components/colour-badge/colour-badge.component';
import { SearchBarComponent } from '@shared/components/search-bar/search-bar.component';

@Component({
    selector: 'app-policies-table',
    imports: [TableComponent, ColourBadgeComponent, SearchBarComponent],
    templateUrl: './policies-table.component.html',
    styleUrl: './policies-table.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PoliciesTableComponent implements AfterViewInit {
    private readonly sanitizer = inject(DomSanitizer);
    private readonly iconService = inject(IconService);
    public policies = input<IPolicy[]>([]);

    public columns: TableColumnConfig[] = [];
    @ViewChild('lineTemplate', { static: true }) lineTemplate!: TemplateRef<any>;
    @ViewChild('colourBadge', { static: true }) colourBadge!: TemplateRef<any>;

    ngAfterViewInit(): void {
        this.columns = [
            {
                key: 'name',
                label: 'Line',
                type: 'custom',
                customTemplate: this.lineTemplate,
            },
            {
                key: 'effectiveDate',
                label: 'Effective Date',
                type: 'text',
                formatFn: (value, row) => {
                    if (row.status === 'Pending') {
                        return 'Pending';
                    }
                    const d = new Date(row.effectiveDate);
                    return d.toLocaleDateString('en-US', {
                        month: 'numeric',
                        day: 'numeric',
                        year: 'numeric',
                    });
                },
            },
            {
                key: 'status',
                label: 'Status',
                type: 'status',
                statusMap: {
                    Active: '--theme-accent-green',
                    Pending: '--theme-accent-yellow',
                },
                showFooter: true,
                footerFn: data => `TOTAL (${data.length})`,
            },
            {
                key: 'expiringTech',
                label: 'Expiring Tech',
                type: 'money',
                showFooter: true,
            },
            {
                key: 'expiringPremium',
                label: 'Expiring Premium',
                type: 'money',
                showFooter: true,
            },
            {
                key: 'renewalToTech',
                label: 'Renewal To Tech',
                type: 'money',
                showFooter: true,
            },
            {
                key: 'renewalTech',
                label: 'Renewal Tech',
                type: 'money',
                showFooter: true,
            },
            {
                key: 'renewalPremium',
                label: 'Renewal Premium',
                type: 'money',
                showFooter: true,
            },
            {
                key: 'rateChange',
                label: 'Rate Change',
                type: 'text',
                formatFn: (value: number) => {
                    return value || 'N/A';
                },
                classFn: (value: number, row: any) => {
                    if (!value) return '';
                    return row.isRateChangeNegative
                        ? 'text-[var(--theme-accent-red)]'
                        : 'text-white';
                },
                showFooter: true,
                footerFn: data => {
                    const numeric = data.map(d => d.rateChange).filter(v => typeof v === 'number');

                    const total = numeric.reduce((sum, v) => sum + v, 0);
                    const avg = numeric.length ? total / numeric.length : 0;

                    return avg.toFixed(1) + '%';
                },
            },
            {
                key: 'lossRatio',
                label: 'Loss Ratio',
                type: 'custom',
                customTemplate: this.colourBadge,
                showFooter: true,
                footerFn: data => {
                    const valid = data.filter(d => typeof d.lossRatio === 'number');
                    const avg = valid.reduce((sum, curr) => sum + curr.lossRatio, 0) / valid.length;
                    return avg.toFixed(1);
                },
                footerCustomTemplate: this.colourBadge,
            },
            { key: 'actions', type: 'actions', label: '' },
        ];
    }

    public getIconClass(icon: string): string {
        return `${ICON_COLOR_MAP[icon]}` || `bg-[${ICON_COLOR_MAP['default']}]`;
    }

    public getIcon(name: string): SafeHtml {
        const raw = this.iconService.getIcon(name);
        return this.sanitizer.bypassSecurityTrustHtml(raw);
    }
}
