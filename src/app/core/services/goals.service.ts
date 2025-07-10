import { computed, Injectable, signal } from '@angular/core';
import { IGoals } from '@core/models/goals.model';
import * as goals from '../../../assets/mocks/dashboard/goals.json';

@Injectable({
    providedIn: 'root',
})
export class GoalsService {
    private readonly goalsSignal = signal<IGoals | null>(null);
    readonly goals = computed(() => this.goalsSignal());

    getGoals(): void {
        this.goalsSignal.set((goals as any).default as IGoals);
    }
}
