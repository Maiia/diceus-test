import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { ISectionedBarGoal, SectionLabel } from '@core/models/goals.model';

@Component({
    selector: 'app-sectioned-bar-goal',
    imports: [CommonModule, MatIcon],
    templateUrl: './sectioned-bar-goal.component.html',
    styleUrl: './sectioned-bar-goal.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionedBarGoalComponent {
    @Input() goal!: ISectionedBarGoal;

    public labelColors: Record<SectionLabel, string> = {
        good: 'var(--theme-accent-green)',
        normal: 'var(--theme-accent-yellow)',
        bad: 'var(--theme-accent-red-1)',
    };

    public isRangeTarget(): boolean {
        return Array.isArray(this.goal.target);
    }

    public getTargetText(): string {
        if (this.isRangeTarget()) {
            const [min, max] = this.goal.target as [number, number];
            return `TG: ${min}%–${max}%`;
        }
        return `TG: ${this.goal.target}%`;
    }

    public getIndicator(): { label: string; direction?: 'up' | 'down'; color: string } {
        const label = this.getCurrentSectionLabel();
        const color = this.labelColors[label];

        if (!this.isRangeTarget()) {
            const target = this.goal.target as number;
            const diff = parseFloat((this.goal.current - target).toFixed(1));
            const direction = diff > 0 ? 'up' : 'down';
            return {
                label: `${diff > 0 ? '+' : ''}${diff}% (${label.toUpperCase()})`,
                direction,
                color,
            };
        }

        return {
            label: 'ON TARGET',
            color,
        };
    }

    public getBarWidth(section: { from: number; to: number }): string {
        return `${section.to - section.from}%`;
    }

    public getTargetPosition(): string | null {
        const target = this.goal.target;

        if (this.isRangeTarget()) {
            const [min, max] = target as [number, number];
            return `${(max + min) / 2}%`;
        }

        if (typeof target === 'number') {
            return `${target}%`;
        }

        return null;
    }

    public getCurrentPosition(): string {
        return `${this.goal.current}%`;
    }

    private getCurrentSectionLabel(): SectionLabel {
        return (
            this.goal.sections.find(s => this.goal.current >= s.from && this.goal.current <= s.to)
                ?.label ?? 'normal'
        );
    }
}
