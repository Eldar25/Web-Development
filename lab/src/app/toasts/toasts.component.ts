import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  OnInit,
  Output,
  Input,
} from '@angular/core';
import {Toast} from '../shared/toast';
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
import { TOAST_ITEM_TRIGGER } from './toast.animation';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css'],
  animations: [TOAST_ITEM_TRIGGER]
})
export class ToastsComponent implements OnInit {

  @Input() toast: Toast;
  @Input() index: number;
  @Input() top: number;
  @Input() left: number;
  @Input() initialDuration: number;
  

  constructor() { }
  @HostBinding('@flyInOut')
  state: 'enter'| 'leave' = 'enter';

  leave = false;

  
  @Output() delete = new EventEmitter<number>();
  removeHandler() {
    this.delete.emit();
    this.leave = true;
    this.state ='leave';
}

  ngOnInit(): void {
  }

}
