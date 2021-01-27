import { trigger, state, style, transition, animate, query } from '@angular/animations';


export const onSideNavChange = trigger('onSideNavChange', [
  state('close',
    style({
      'min-width': '50px'
    })
  ),
  state('open',
    style({
      'min-width': '200px',
      // 'margin-right':'200px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);


export const onMainContentChange = trigger('onMainContentChange', [
  state('close',
    style({
      'margin-left': '2%',
      'margin-right': '2%'
    })
  ),
  state('open',
    style({
      'margin-left': '2%',
      'margin-right': '2%'
    })
  ),
  transition('close => open', animate('250ms ease-out')),
  transition('open => close', animate('250ms ease-in')),
]);


export const animateText = trigger('animateText', [
  state('hide',
    style({
      'display': 'none',
      opacity: 0,
    })
  ),
  state('show',
    style({
      'display': 'block',
      opacity: 1,
    })
  ),
  transition('close => open', animate('350ms ease-in')),
  transition('open => close', animate('200ms ease-out')),
]);

export const fadeAnimation =
    trigger('fadeAnimation', [
      transition('* <=> *', [
        // Set a default  style for enter and leave
        query(':enter,:leave', [
          
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'scale(0) translateY(100%)',
          }),
        ], {optional: true}),
        // Animate the new page in
        query(':enter', [
          animate('400ms ease-in'),
        ], {optional: true}),
      ]),
      
]);
