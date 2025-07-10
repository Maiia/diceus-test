import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NAVIGATION_ROUTES } from '@core/config/navigation.routes';
import { IconService } from '@core/services/icon/icon.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconButtonCircleComponent } from '@features/components/dashboard/icon-button-circle/icon-button-circle.component';

@Component({
    selector: 'app-navigation',
    imports: [CdkScrollable, RouterLink, IconButtonCircleComponent, RouterLinkActive],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
    public readonly navigationRoutes = NAVIGATION_ROUTES;
    private readonly sanitizer = inject(DomSanitizer);
    public readonly iconService = inject(IconService);

    @ViewChild('scrollContainer', { read: ElementRef }) scrollContainer!: ElementRef;

    public getIcon(name: string): SafeHtml {
        const raw = this.iconService.getIcon(name);
        return this.sanitizer.bypassSecurityTrustHtml(raw);
    }

    public scrollLeft() {
        this.scrollContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
    }

    public scrollRight() {
        this.scrollContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
    }
}
