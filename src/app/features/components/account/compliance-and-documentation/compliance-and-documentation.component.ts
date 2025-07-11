import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { IComplianceAndDocumentation } from '@core/models/account.model';
import { IconService } from '@core/services/icon/icon.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-compliance-and-documentation',
    imports: [NgClass],
    templateUrl: './compliance-and-documentation.component.html',
    styleUrl: './compliance-and-documentation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComplianceAndDocumentationComponent {
    private readonly iconService = inject(IconService);
    private readonly sanitizer = inject(DomSanitizer);
    public complianceAndDocumentation = input<IComplianceAndDocumentation[]>([]);

    public getIcon(completed: boolean): SafeHtml {
        const icon = completed ? 'checked' : 'notChecked';
        return this.sanitizer.bypassSecurityTrustHtml(this.iconService.getIcon(icon));
    }
}
