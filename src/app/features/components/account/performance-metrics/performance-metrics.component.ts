import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MetricCardComponent } from '../metric-card/metric-card.component';
import { WinnabilityDotsComponent } from '@shared/components/winnability/winnability-dots/winnability-dots.component';
import { WinnabilityLabelPipe } from '@shared/pipes/winnability-label.pipe';
import { StatisticsGroupComponent } from '@shared/components/statistics-group/statistics-group.component';
import { CompactCurrencyPipe } from '@shared/pipes/compact-currency.pipe';
import { IPerformanceMetrics } from '@core/models/performance-metrics';

@Component({
    selector: 'app-performance-metrics',
    imports: [
        MetricCardComponent,
        WinnabilityDotsComponent,
        WinnabilityLabelPipe,
        StatisticsGroupComponent,
        CompactCurrencyPipe,
    ],
    templateUrl: './performance-metrics.component.html',
    styleUrl: './performance-metrics.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerformanceMetricsComponent {
    public data = input<IPerformanceMetrics | null>(null);
}
