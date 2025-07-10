import { computed, Injectable, signal } from '@angular/core';
import { IAIRecommendation } from '@core/models/recommendation.model';
import * as recommendation from '../../../assets/mocks/account/ai-recommendations.json';

@Injectable({
    providedIn: 'root',
})
export class RecommendationService {
    private readonly aiRecommendationsSignal = signal<IAIRecommendation[] | null>(null);
    readonly aiRecommendations = computed(() => this.aiRecommendationsSignal());

    getAIRecommendations(): void {
        this.aiRecommendationsSignal.set((recommendation as any).default as IAIRecommendation[]);
    }
}
