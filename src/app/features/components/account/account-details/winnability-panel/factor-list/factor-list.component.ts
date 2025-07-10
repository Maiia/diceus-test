import {
    ChangeDetectionStrategy,
    Component,
    input,
    Input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

export interface IFactorItem {
    label: string;
    value: number;
}

@Component({
    selector: 'app-factor-list',
    imports: [NgClass, NgStyle, MatIcon],
    templateUrl: './factor-list.component.html',
    styleUrl: './factor-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FactorListComponent implements OnChanges {
    @Input() title: string = '';
    @Input() direction: 'up' | 'down' = 'up';
    @Input() primaryColor: string = 'var(--theme-accent-green)';
    @Input() gradientClass: string = '';
    public items = input<IFactorItem[]>([]);
    private gradientToColor = '';

    public getWidth(value: number): number {
        return Math.min(Math.abs(value), 100);
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['primaryColor']) {
            this.gradientToColor = `to-[${this.primaryColor}]`;
        }
    }
}
