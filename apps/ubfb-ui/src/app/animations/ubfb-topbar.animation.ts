import {
  animate, AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export function ubfbTopbarAnimation(): AnimationTriggerMetadata {
  return trigger('scrolledNabvar', [
    state(
      'default',
      style({
        top: 0,
        minHeight: '10rem',
      })
    ),
    state(
      'scrolled',
      style({
        top: 0,
        minHeight: '6rem',
      })
    ),
    transition('default => scrolled', animate('100ms ease-in')),
    transition('scrolled => default', animate('0.1s 100ms ease-out')),
  ]);
}
