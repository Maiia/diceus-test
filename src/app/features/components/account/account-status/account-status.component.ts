import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconService } from '@core/services/icon/icon.service';

@Component({
    selector: 'app-account-status',
    imports: [NgClass],
    templateUrl: './account-status.component.html',
    styleUrl: './account-status.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountStatusComponent {
    @Input() currentStatus!: string;

    public statusSteps: string[] = ['submitted', 'review', 'quote', 'bind', 'issue', 'renew'];

    constructor(
        private iconService: IconService,
        private sanitizer: DomSanitizer
    ) {}

    public isComplete(step: string): boolean {
        const currentIndex = this.statusSteps.indexOf(this.currentStatus?.toLowerCase());
        const stepIndex = this.statusSteps.indexOf(step?.toLowerCase());
        return stepIndex <= currentIndex;
    }

    public getIcon(isComplete: boolean): SafeHtml {
        const iconName = isComplete ? 'checked' : 'notChecked';
        const raw = this.iconService.getIcon(iconName);
        return this.sanitizer.bypassSecurityTrustHtml(raw);
    }

    public capitalize(value: string): string {
        if (!value) return '';
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}
