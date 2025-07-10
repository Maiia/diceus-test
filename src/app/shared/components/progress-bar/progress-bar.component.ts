import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-progress-bar',
    imports: [NgStyle],
    templateUrl: './progress-bar.component.html',
    styleUrl: './progress-bar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
    @Input() value: number = 0;
}
