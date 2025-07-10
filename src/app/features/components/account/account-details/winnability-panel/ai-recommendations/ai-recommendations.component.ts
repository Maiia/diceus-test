import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { IAIRecommendation } from '@core/models/recommendation.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconService } from '@core/services/icon/icon.service';

@Component({
    selector: 'app-ai-recommendations',
    imports: [],
    templateUrl: './ai-recommendations.component.html',
    styleUrl: './ai-recommendations.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiRecommendationsComponent {
    private readonly iconService = inject(IconService);
    private readonly sanitizer = inject(DomSanitizer);

    public aiRecommendations = input<IAIRecommendation[]>([]);

    public apply(rec: IAIRecommendation): void {
        console.log(`Applied: ${rec.id}`, rec.payload);
    }

    public getIcon(name: string): SafeHtml {
        const raw = this.iconService.getIcon(name);
        return this.sanitizer.bypassSecurityTrustHtml(raw);
    }
}
