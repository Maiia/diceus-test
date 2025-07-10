import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-metric-card',
    imports: [RouterLink],
    templateUrl: './metric-card.component.html',
    styleUrl: './metric-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetricCardComponent {
    @Input() linkText!: string;
    @Input() linkUrl!: string;
}
