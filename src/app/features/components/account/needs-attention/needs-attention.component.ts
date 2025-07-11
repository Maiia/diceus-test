import { ChangeDetectionStrategy, Component, input, Input, OnInit } from '@angular/core';
import { IAccountNeedsAttention, IAccountSummaryEventView } from '@core/models/account.model';
import { mapNeedsAttentionToViewModel } from '@core/mappers/account.mapper';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-needs-attention',
    imports: [RouterLink, MatIcon],
    templateUrl: './needs-attention.component.html',
    styleUrl: './needs-attention.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeedsAttentionComponent implements OnInit {
    public needsAttention = input<IAccountNeedsAttention[]>();
    @Input() accountId!: string;
    @Input() accountName!: string;

    public mappedEvents: IAccountSummaryEventView[] = [];

    ngOnInit(): void {
        if (!this.needsAttention()?.length) {
            return;
        }
        this.mappedEvents = this.needsAttention()!.map(event =>
            mapNeedsAttentionToViewModel(event, this.accountId, this.accountName)
        );
    }
}
