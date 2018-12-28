import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

export const routerTransition =
trigger('fadeAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave', stagger('10000ms',
      [style({position: 'fixed', opacity: 1 }), animate('0.3s', style({ opacity: 0 }))]),
      { optional: true }
    ),
    query(
      ':enter', stagger('2000ms',
      [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))]),
      { optional: true }
    )
  ])
]);
