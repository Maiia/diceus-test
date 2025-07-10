import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumbs.component';
import { IBreadcrumb } from '@shared/models/breadcrumbs.model';
import { AccountDetailsService } from '@core/services/account-details.service';
import { AccountSummeryComponent } from '@features/components/account/account-summery/account-summery.component';
import { NeedsAttentionComponent } from '@features/components/account/needs-attention/needs-attention.component';
import { PerformanceMetricsComponent } from '@features/components/account/performance-metrics/performance-metrics.component';
import { PoliciesShortComponent } from '@features/components/account/policies-short/policies-short.component';
import { AccountStatusComponent } from '@features/components/account/account-status/account-status.component';
import { ComplianceAndDocumentationComponent } from '@features/components/account/compliance-and-documentation/compliance-and-documentation.component';
import { AccountDetailsComponent } from '@features/containers/accounts/account-details/account-details.component';
import { CommunicationComponent } from '@features/containers/accounts/communication/communication.component';
import { PoliciesTableComponent } from '@features/containers/accounts/policies-table/policies-table.component';

@Component({
    selector: 'app-accounts',
    imports: [
        BreadcrumbsComponent,
        AccountSummeryComponent,
        NeedsAttentionComponent,
        PerformanceMetricsComponent,
        PoliciesShortComponent,
        AccountStatusComponent,
        ComplianceAndDocumentationComponent,
        AccountDetailsComponent,
        CommunicationComponent,
        PoliciesTableComponent,
    ],
    templateUrl: './accounts.component.html',
    styleUrl: './accounts.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsComponent {
    private readonly accountDetailsService = inject(AccountDetailsService);
    public breadcrumbs: IBreadcrumb[] = [
        { label: 'Dashboard', url: '/dashboard' },
        { label: 'Accounts', url: '/accounts' },
        { label: 'Maritime Logistics Corp', isCurrent: true },
    ];
    public summary = this.accountDetailsService.summery;
    public needsAttention = this.accountDetailsService.needsAttention;
    public performanceMetrics = this.accountDetailsService.performanceMetrics;
    public policies = this.accountDetailsService.policies;
    public complianceAndDocumentation = this.accountDetailsService.complianceAndDocumentation;

    accountId = 'maritime-logistics-corp'; // TODO take from routing

    constructor() {
        this.loadData();
    }

    private loadData(): void {
        this.accountDetailsService.getAccountSummary();
        this.accountDetailsService.getNeedsAttention();
        this.accountDetailsService.getPerformanceMetrics();
        this.accountDetailsService.getPolicies();
        this.accountDetailsService.getComplianceAndDocumentation();
    }
}
