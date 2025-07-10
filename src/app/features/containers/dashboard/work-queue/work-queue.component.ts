import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    OnInit,
    signal,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { IWorkQueueItem } from '@core/models/work-queue.model';
import { WorkQueueService } from '@core/services/work-queue.service';
import { TableComponent } from '@shared/components/table/table.component';
import { FilterButtonComponent } from '@shared/components/table/filter-button/filter-button.component';
import { MatIcon } from '@angular/material/icon';
import { TableColumnConfig } from '@shared/models/table-column-config.model';
import { getInitials } from '@shared/helpers/user';
import { UserService } from '@core/services/user.service';
import { AvatarComponent } from '@features/components/header/avatar/avatar.component';

@Component({
    selector: 'app-work-queue',
    imports: [TableComponent, FilterButtonComponent, MatIcon, AvatarComponent],
    templateUrl: './work-queue.component.html',
    styleUrl: './work-queue.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkQueueComponent implements OnInit, AfterViewInit {
    protected readonly getInitials = getInitials;
    private readonly workQueueService = inject(WorkQueueService);
    private readonly userService = inject(UserService);

    activeFilter = signal('all');

    @ViewChild('originator', { static: true }) originator!: TemplateRef<any>;

    public columns: TableColumnConfig[] = [];

    readonly filteredItems = computed(() => {
        const items = this.workQueueService.workQueue();
        const user = this.userService.user();
        const filter = this.activeFilter();

        switch (filter) {
            case 'assigned':
                return items.filter(
                    i => i.originator.name === user?.name && i.originator.surname === user?.surname
                );
            case 'pending':
                return items.filter(i => i.status === 'Pending Review');
            case 'referrals':
                return items.filter(i => i.type.toLowerCase().includes('referral'));
            default:
                return items;
        }
    });
    readonly filters = computed(() => {
        const items = this.workQueueService.workQueue();
        const user = this.userService.user();

        return [
            { key: 'assigned', label: 'Assigned to me' },
            { key: 'pending', label: 'Pending Review' },
            { key: 'referrals', label: 'Referrals' },
        ].map(f => ({
            ...f,
            count: this.getFilterCount(f.key as any, items, user),
        }));
    });
    selectFilter(key: any) {
        this.activeFilter.set(key);
    }

    ngOnInit() {
        this.workQueueService.loadData();
    }

    ngAfterViewInit() {
        this.columns = [
            {
                key: 'originator',
                label: 'Originator',
                type: 'custom',
                customTemplate: this.originator,
            },
            {
                key: 'client',
                label: 'Client/line',
                type: 'title-subtitle',
                formatFn: (value, row) => ({
                    title: row.client,
                    subtitle: row.line,
                }),
            },
            { key: 'type', label: 'Type', type: 'text' },
            {
                key: 'status',
                label: 'Status',
                type: 'status',
                statusMap: {
                    'Pending Review': '--theme-accent-yellow',
                    New: '--theme-accent',
                    Completed: '--theme-accent-green',
                },
            },
            {
                key: 'created',
                label: 'Created',
                type: 'date',
                dateFormat: 'MM/dd/yyyy',
            },
            { key: 'actions', type: 'actions', label: '' },
        ];
    }

    getFilterCount(
        key: 'assigned' | 'pending' | 'referrals' | 'all',
        items: IWorkQueueItem[],
        currentUser: { name: string; surname: string } | null
    ): number {
        switch (key) {
            case 'assigned':
                return items.filter(
                    i =>
                        i.originator.name === currentUser?.name &&
                        i.originator.surname === currentUser?.surname
                ).length;
            case 'pending':
                return items.filter(i => i.status === 'Pending Review').length;
            case 'referrals':
                return items.filter(i => i.type.toLowerCase().includes('referral')).length;
            default:
                return items.length;
        }
    }

    resetFilters() {
        this.activeFilter.set('all');
    }
}
