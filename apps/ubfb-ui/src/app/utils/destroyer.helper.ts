import { Subject } from 'rxjs';

export class Destroyer {
  protected destroy$: Subject<void> = new Subject<void>();

  protected destroyMethod(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
