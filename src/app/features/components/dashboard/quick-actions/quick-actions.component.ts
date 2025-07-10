import { Component } from '@angular/core';

@Component({
    selector: 'app-quick-actions',
    imports: [],
    templateUrl: './quick-actions.component.html',
    styleUrl: './quick-actions.component.scss',
})
export class QuickActionsComponent {
    actions = ['New Submission', 'Quote Builder', 'Risks Models', 'Documents Upload'];
}
