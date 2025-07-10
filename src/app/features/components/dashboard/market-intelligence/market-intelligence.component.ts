import { Component } from '@angular/core';

@Component({
    selector: 'app-market-intelligence',
    imports: [],
    templateUrl: './market-intelligence.component.html',
    styleUrl: './market-intelligence.component.scss',
})
export class MarketIntelligenceComponent {
    intelligenceItems = [
        {
            color: 'var(--theme-accent-red-1)',
            text: 'Rate hardening in Cyber market – +15% YoY',
        },
        {
            color: 'var(--theme-accent-yellow)',
            text: 'New capacity entering Marine market',
        },
        {
            color: 'var(--theme-accent)',
            text: 'Environmental regulatory changes in CA',
        },
    ];
}
