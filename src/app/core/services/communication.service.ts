import { computed, Injectable, signal } from '@angular/core';
import { IMessage } from '@core/models/communication.model';
import * as communication from '../../../assets/mocks/account/communication.json';

@Injectable({
    providedIn: 'root',
})
export class CommunicationService {
    private readonly messagesSignal = signal<IMessage[] | null>(null);
    readonly messages = computed(() => this.messagesSignal());

    getMessages(): void {
        this.messagesSignal.set((communication as any).default as IMessage[]);
    }
}
