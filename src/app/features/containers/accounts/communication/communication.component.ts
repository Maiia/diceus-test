import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { SearchBarComponent } from '@shared/components/search-bar/search-bar.component';
import { NgClass } from '@angular/common';
import { CommunicationService } from '@core/services/communication.service';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-communication',
    imports: [SearchBarComponent, NgClass, MatIcon],
    templateUrl: './communication.component.html',
    styleUrl: './communication.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunicationComponent implements OnInit {
    private readonly communicationService = inject(CommunicationService);

    public messages = this.communicationService.messages;

    ngOnInit() {
        this.communicationService.getMessages();
    }
}
