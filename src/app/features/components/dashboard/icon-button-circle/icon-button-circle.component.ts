import { Component, Input, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-icon-button-circle',
    imports: [MatIcon],
    templateUrl: './icon-button-circle.component.html',
    styleUrl: './icon-button-circle.component.scss',
})
export class IconButtonCircleComponent {
    @Input() public icon: string = 'icon';
    @Input() public disabled = false;
    @Input() public ariaLabel = 'icon';
    @Input() public classes = 'rounded-full';

    public buttonClickEvent = output();

    public onClick(): void {
        this.buttonClickEvent.emit();
    }
}
