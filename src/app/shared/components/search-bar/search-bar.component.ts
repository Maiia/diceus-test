import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    imports: [],
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
    @Input() addSortButton = false;
    @Input() addNewButton = false;
}
