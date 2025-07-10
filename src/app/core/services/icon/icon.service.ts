import { Injectable } from '@angular/core';
import { IIconStrategy } from '@core/models/icon-strategy.model';

@Injectable({
    providedIn: 'root',
})
export class IconService {
    private strategy: IIconStrategy | null = null;

    constructor() {}

    getIcon(name: string): string {
        return this.strategy!.getIcon(name);
    }

    setStrategy(strategy: IIconStrategy): void {
        this.strategy = strategy;
    }
}
