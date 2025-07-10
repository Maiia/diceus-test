import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'compactCurrency',
})
export class CompactCurrencyPipe implements PipeTransform {
    transform(value: number, currency: string = '$', digits: number = 1): string {
        if (value == null) return '';
        const suffixes = [
            { value: 1000000000, symbol: 'B' },
            { value: 1000000, symbol: 'M' },
            { value: 1000, symbol: 'K' },
        ];

        for (const s of suffixes) {
            if (value >= s.value) {
                const num = value / s.value;
                const formatted = Number.isInteger(num) ? num : parseFloat(num.toFixed(digits));
                return `${currency}${formatted}${s.symbol}`;
            }
        }

        return `${currency}${value}`;
    }
}
