import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { WinnabilityBadgeComponent } from '@shared/components/winnability/winnability-badge/winnability-badge.component';
import { StatisticsGroupComponent } from '@shared/components/statistics-group/statistics-group.component';
import { IAIRecommendation } from '@core/models/recommendation.model';
import { IWinnabilityData } from '@core/models/winnability';
import { LineChartComponent } from '@features/components/account/account-details/winnability-panel/line-chart/line-chart.component';
import { FactorListComponent } from '@features/components/account/account-details/winnability-panel/factor-list/factor-list.component';
import { AiRecommendationsComponent } from '@features/components/account/account-details/winnability-panel/ai-recommendations/ai-recommendations.component';

@Component({
    selector: 'app-winnability-panel',
    imports: [
        WinnabilityBadgeComponent,
        LineChartComponent,
        StatisticsGroupComponent,
        FactorListComponent,
        AiRecommendationsComponent,
    ],
    templateUrl: './winnability-panel.component.html',
    styleUrl: './winnability-panel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WinnabilityPanelComponent {
    public winnabilityData = input<IWinnabilityData | null>(null);
    public aiRecommendations = input<IAIRecommendation[]>([]);
}
