import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

export interface ScrollState {
  scrollState: string;
  isScrolled: boolean
}

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private sidenavToggle$: Subject<boolean> = new Subject<boolean>;
  private scrollState$: Subject<ScrollState> = new Subject<ScrollState>;

  public get sidenavToggle(): Observable<boolean> {
    return this.sidenavToggle$.asObservable();
  }

  public get scrollState(): Observable<ScrollState> {
    return this.scrollState$.asObservable();
  }

  public toggleSidenav(isOpen: boolean): void {
    this.sidenavToggle$.next(isOpen);
  }

  public resetSidenavToggle(): void {
    this.sidenavToggle$.next(false);
  }

  public changeScrollState(scrollState: ScrollState): void {
    this.scrollState$.next(scrollState);
  }
}
