import { Routes } from '@angular/router';
import { PageUnderConstructionComponent } from '@features/components/page-under-construction/page-under-construction.component';
import { AccountsComponent } from '@features/containers/accounts/accounts.component';
import { DashboardComponent } from '@features/containers/dashboard/dashboard.component';
import { isAdminGuard } from '@core/guards/is-admin.guard';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'accounts',
        component: AccountsComponent,
    },
    {
        path: 'brokers',
        component: PageUnderConstructionComponent,
    },
    {
        path: 'submissions',
        component: PageUnderConstructionComponent,
    },
    {
        path: 'organizations',
        component: PageUnderConstructionComponent,
    },
    {
        path: 'goals-and-rules',
        component: PageUnderConstructionComponent,
    },
    {
        path: 'admin/sensitive-data',
        component: PageUnderConstructionComponent,
        canActivate: [isAdminGuard],
    },
    {
        path: 'admin/just-admin',
        component: PageUnderConstructionComponent,
        canActivate: [isAdminGuard],
    },
    ...Array.from({ length: 8 }).map((_, i) => ({
        path: `admin/secured${i + 1}`,
        component: PageUnderConstructionComponent,
        canActivate: [isAdminGuard],
    })),
    { path: '**', redirectTo: '/dashboard' },
];
