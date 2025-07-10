import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-winnability-dots',
    imports: [NgClass],
    styleUrl: './winnability-dots.component.scss',
    template: `
        <div class="flex gap-1 items-center h-full">
            @for (dot of dotsArray; track dot; let i = $index) {
                <span
                    class="w-2 h-2 rounded-full"
                    [ngClass]="i < level ? 'bg-blue-500' : 'bg-gray-500'"
                ></span>
            }
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WinnabilityDotsComponent {
    @Input() level: number = 0;

    get dotsArray(): number[] {
        return Array(4).fill(0);
    }
}
