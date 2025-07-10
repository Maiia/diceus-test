import { TemplateRef } from '@angular/core';

export interface TableColumnConfig {
    key: string;
    label: string;
    type?:
        | 'text'
        | 'status'
        | 'percent'
        | 'date'
        | 'title-subtitle'
        | 'money'
        | 'money-short'
        | 'actions'
        | 'custom';
    imageField?: string;
    statusMap?: Record<string, string>;
    dateFormat?: string;
    align?: 'start' | 'center' | 'end';
    customTemplate?: TemplateRef<any>;
    formatFn?: (value: any, row: any) => any;
    classFn?: (value: any, row: any) => string;
    showFooter?: boolean;
    footerFn?: (data: any[]) => string | number | TemplateRef<any>;
    footerCustomTemplate?: TemplateRef<any>;
}
