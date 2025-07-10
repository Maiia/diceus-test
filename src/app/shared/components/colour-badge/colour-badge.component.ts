import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-colour-badge',
    imports: [NgClass],
    templateUrl: './colour-badge.component.html',
    styleUrl: './colour-badge.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColourBadgeComponent {
    @Input({ required: true }) value!: number;

    public getBadgeClass(): string {
        if (this.value < 35) {
            return 'bg-[var(--theme-accent-green)] text-white';
        }
        if (this.value < 65) {
            return 'bg-[var(--theme-accent-yellow)] text-[var(--theme-bg-5)]';
        }
        return 'bg-[var(--theme-accent-red)] text-white';
    }
}
