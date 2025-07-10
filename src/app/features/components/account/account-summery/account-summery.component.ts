import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IAccountSummary } from '@core/models/account.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-account-summery',
    imports: [NgOptimizedImage],
    templateUrl: './account-summery.component.html',
    styleUrl: './account-summery.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSummeryComponent {
    summary = input<IAccountSummary | null>();

    public readonly infoBlocks = computed(() => [
        {
            label: 'Existing Account',
            value: this.summary()?.accountNumber,
        },
        {
            label: 'Broker',
            value: this.summary()?.broker,
        },
        {
            label: 'Underwriter',
            value: this.summary()?.underwriter,
        },
    ]);
}
