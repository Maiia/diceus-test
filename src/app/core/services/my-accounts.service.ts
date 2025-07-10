import { computed, Injectable, signal } from '@angular/core';
import { IMyAccount } from '@core/models/account.model';
import * as myAccounts from '../../../assets/mocks/dashboard/my-accounts.json';

@Injectable({
    providedIn: 'root',
})
export class MyAccountsService {
    private readonly myAccountsSignal = signal<IMyAccount[]>([]);
    readonly myAccounts = computed(() => this.myAccountsSignal());

    getMyAccounts(): void {
        this.myAccountsSignal.set((myAccounts as any).default as IMyAccount[]);
    }
}
