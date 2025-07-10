import { formatDate } from '@angular/common';
import { IAccountNeedsAttention, IAccountSummaryEventView } from '../models/account.model';

export function mapNeedsAttentionToViewModel(
    event: IAccountNeedsAttention,
    accountId: string,
    accountName: string
): IAccountSummaryEventView {
    switch (event.type) {
        case 'survey':
            return {
                title: `${event.title} Survey Required`,
                subtitle: `Scheduled for ${formatDate(event.date, 'MM/dd/yyyy', 'en-US')}`,
                linkText: 'Review details link',
                linkUrl: `/accounts/${accountId}/loss-control/${event.entityId}`,
            };
        case 'loss-control':
            return {
                title: `Loss Control Complete`,
                subtitle: `Last inspection: ${formatDate(event.date, 'MM/dd/yyyy', 'en-US')}`,
                linkText: 'View report',
                linkUrl: `/accounts/${accountId}/loss-control/${event.entityId}`,
            };
        case 'claims-review':
            return {
                title: `Claims Review Required`,
                subtitle: `${event.openClaims} open claims  //  $${event.amount.toLocaleString()} TTL`,
                linkText: 'View claims',
                linkUrl: `/accounts/${accountId}/claims-review`,
            };
    }
}
