import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { IPolicy } from '@core/models/account.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconService } from '@core/services/icon/icon.service';
import { NgClass } from '@angular/common';
import { ICON_COLOR_MAP } from '@core/services/icon/icon-color.utils';

@Component({
    selector: 'app-policies-short',
    imports: [NgClass],
    templateUrl: './policies-short.component.html',
    styleUrl: './policies-short.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PoliciesShortComponent {
    private readonly sanitizer = inject(DomSanitizer);
    private readonly iconService = inject(IconService);
    public policies = input<IPolicy[]>([]);

    public getIcon(name: string): SafeHtml {
        const raw = this.iconService.getIcon(name);
        return this.sanitizer.bypassSecurityTrustHtml(raw);
    }

    public formatDate(date: string | null | undefined): string {
        if (!date) return '— — —';
        const d = new Date(date);
        return d.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
    }

    public formatPremium(value: number | null | undefined): string {
        return value != null ? `$${value.toLocaleString('en-US')}` : '— — —';
    }

    public getIconClass(icon: string): string {
        return `text-[${ICON_COLOR_MAP[icon]}]` || `text-[${ICON_COLOR_MAP['default']}]`;
    }
}
