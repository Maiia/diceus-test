import { Pipe, PipeTransform } from '@angular/core';
import { WinnabilityLabelMap, WinnabilityLevel } from '../constants/winnability';

@Pipe({
    name: 'winnabilityLabel',
    standalone: true,
})
export class WinnabilityLabelPipe implements PipeTransform {
    transform(value: WinnabilityLevel): string {
        return WinnabilityLabelMap[value] ?? 'Unknown';
    }
}
