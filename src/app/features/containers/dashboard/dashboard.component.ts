import { Component } from '@angular/core';
import { WorkQueueComponent } from '@features/containers/dashboard/work-queue/work-queue.component';
import { PortfolioGoalsComponent } from '@features/containers/dashboard/portfolio-goals/portfolio-goals.component';
import { QuickActionsComponent } from '@features/components/dashboard/quick-actions/quick-actions.component';
import { MarketIntelligenceComponent } from '@features/components/dashboard/market-intelligence/market-intelligence.component';
import { MyAccountsComponent } from '@features/containers/dashboard/my-accounts/my-accounts.component';

@Component({
    selector: 'app-dashboard',
    imports: [
        WorkQueueComponent,
        PortfolioGoalsComponent,
        QuickActionsComponent,
        MarketIntelligenceComponent,
        MyAccountsComponent,
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
