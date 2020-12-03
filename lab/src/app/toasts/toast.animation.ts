import {
    animate,
    keyframes,
    state,
    style,
    transition,
    trigger,
    group,
    sequence,
    animation,
} from '@angular/animations';
import { templateJitUrl } from '@angular/compiler';

export const TOAST_ITEM_ANIMATION_STATE = [
    state('enter' , style({})),
    state('leave', style({})),
    
    
]

export const TOAST_ITEM_TRANSITION = [
    //state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
        animate(1000, keyframes([
            style({ transform: 'translateX(100%) ',opacity: 0 }),
            style({ transform: 'translateX(0%)', opacity: 1})
        ]) )
    ]),
    transition('* => void', [
        animate(1000, keyframes([
            style({ transform: 'translateX(-100%) ',opacity: 1 }),
            style({ transform: 'translateX(0%)', opacity: 0})
        ]) )
    ]),
    //transition(':leave', [
    //    animate(1000, style({ transform: 'translateX(-100%)' })),
    //]),
    
    //transition(':leave', [
    //    animate(1000,style({ opacity: 0, overflow: 'hidden', height: 0 })),
    //]),
    
];  

  export const  TOAST_ITEM_TRIGGER = trigger('flyInOut',[
      ...TOAST_ITEM_TRANSITION,
      ...TOAST_ITEM_ANIMATION_STATE,
    ])