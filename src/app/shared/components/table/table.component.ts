import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatFooterCell,
    MatFooterCellDef,
    MatFooterRow,
    MatFooterRowDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatTableDataSource,
} from '@angular/material/table';
import { MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuContent, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { IWorkQueueItem } from '@core/models/work-queue.model';
import {
    CurrencyPipe,
    NgClass,
    NgForOf,
    NgIf,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgTemplateOutlet,
} from '@angular/common';
import { formatDate as angularFormatDate } from '@angular/common';
import { TableColumnConfig } from '@shared/models/table-column-config.model';
import { CompactCurrencyPipe } from '@shared/pipes/compact-currency.pipe';
import { IPolicy } from '@core/models/account.model';

@Component({
    selector: 'app-table',
    imports: [
        MatCell,
        MatCellDef,
        MatColumnDef,
        MatHeaderCell,
        MatHeaderRow,
        MatHeaderRowDef,
        MatIcon,
        MatIconButton,
        MatMenu,
        MatMenuContent,
        MatMenuItem,
        MatPaginator,
        MatRow,
        MatRowDef,
        MatTable,
        MatMenuTrigger,
        MatHeaderCellDef,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        NgForOf,
        NgStyle,
        NgClass,
        NgIf,
        CompactCurrencyPipe,
        NgTemplateOutlet,
        MatFooterRow,
        MatFooterRowDef,
        MatFooterCell,
        MatFooterCellDef,
        CurrencyPipe,
    ],
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnChanges, AfterViewInit {
    @Input() columns: TableColumnConfig[] = [];
    @Input() items: any[] = [];

    public dataSource = new MatTableDataSource<any>();
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    public columnsHeaders: string[] = [];
    public columnsKeys: string[] = [];

    ngOnChanges(changes: SimpleChanges) {
        if (changes['items'] && changes['items'].currentValue) {
            this.dataSource.data = changes['items'].currentValue;
        }
        if (changes['columns'] && changes['columns'].currentValue) {
            this.columns = changes['columns'].currentValue;
            this.columnsHeaders = this.columns.map(col => col.label);
            this.columnsKeys = this.columns.map(c => c.key);
        }
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    public formatDate(value: string, format: string = 'MM/dd/yyyy'): string {
        return angularFormatDate(value, format, 'en-US');
    }

    public getStatusColor(column: TableColumnConfig, value: string): string {
        return `var(${column.statusMap?.[value] ?? '--gray-400'})`;
    }

    public getTotal(columnKey: string): number {
        return this.dataSource.data.reduce((sum, row) => {
            const val = row[columnKey];
            return typeof val === 'number' ? sum + val : sum;
        }, 0);
    }

    public onEdit(item: IWorkQueueItem) {
        console.log('Editing item:', item);
    }

    public onDelete(item: IWorkQueueItem) {
        console.log('Deleting item:', item);
    }
}
