import { ChangeDetectionStrategy, Component, Input, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-filter-button',
    imports: [NgClass],
    templateUrl: './filter-button.component.html',
    styleUrl: './filter-button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterButtonComponent {
    @Input() label = '';
    @Input() filterKey = '';
    @Input() count = 0;
    @Input() isActive = false;

    public selectEvent = output<string>();

    public onClick(): void {
        this.selectEvent.emit(this.filterKey);
    }
}
