import { computed, Injectable, signal } from '@angular/core';
import * as work_queue_data from '../../../assets/mocks/dashboard/work_queue_data.json';
import { IWorkQueueItem } from '@core/models/work-queue.model';

@Injectable({
    providedIn: 'root',
})
export class WorkQueueService {
    private readonly workQueueSignal = signal<IWorkQueueItem[]>([]);
    readonly workQueue = computed(() => this.workQueueSignal());

    public loadData(): void {
        this.workQueueSignal.set((work_queue_data as any).default as IWorkQueueItem[]);
    }
}
