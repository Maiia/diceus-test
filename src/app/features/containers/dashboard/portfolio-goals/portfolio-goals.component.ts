import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { DecimalPipe, NgStyle } from '@angular/common';
import { ProgressBarComponent } from '@shared/components/progress-bar/progress-bar.component';
import { GoalsService } from '@core/services/goals.service';
import { CompactCurrencyPipe } from '@shared/pipes/compact-currency.pipe';
import { SectionedBarGoalComponent } from '@features/components/dashboard/sectioned-bar-goal/sectioned-bar-goal.component';

@Component({
    selector: 'app-portfolio-goals',
    imports: [
        DecimalPipe,
        SectionedBarGoalComponent,
        ProgressBarComponent,
        NgStyle,
        CompactCurrencyPipe,
    ],
    templateUrl: './portfolio-goals.component.html',
    styleUrl: './portfolio-goals.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioGoalsComponent implements OnInit {
    private readonly goalsService = inject(GoalsService);
    public goals = this.goalsService.goals;

    ngOnInit() {
        this.goalsService.getGoals();
    }
}
