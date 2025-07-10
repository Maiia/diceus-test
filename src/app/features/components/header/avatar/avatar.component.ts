import { Component, Input } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-avatar',
    imports: [NgClass, NgOptimizedImage],
    templateUrl: './avatar.component.html',
    styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
    @Input() initials: string = '';
    @Input() imageUrl: string = '';
    @Input() size: 'small' | 'big' = 'small';
}
