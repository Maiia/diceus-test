import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WinnabilityDotsComponent } from '@shared/components/winnability/winnability-dots/winnability-dots.component';
import { WinnabilityLabelMap, WinnabilityLevel } from '@shared/constants/winnability';

@Component({
    selector: 'app-winnability-badge',
    imports: [WinnabilityDotsComponent],
    styleUrl: './winnability-badge.component.scss',
    template: `
        <div
            class="text-nowrap flex items-center gap-2 px-3 py-1 border border-blue-500 text-blue-500 rounded-full"
        >
            <app-winnability-dots [level]="level" />
            <span class="text-sm font-medium">{{ label }}</span>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WinnabilityBadgeComponent {
    @Input() level: WinnabilityLevel = WinnabilityLevel.Unknown;

    get label(): string {
        return WinnabilityLabelMap[this.level] || 'Unknown';
    }
}
