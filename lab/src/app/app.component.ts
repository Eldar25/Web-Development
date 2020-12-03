import {Component, OnInit} from '@angular/core';
import {ModelsService} from './shared/models.service';
import {interval} from 'rxjs';
import {Toast} from './shared/toast';
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
import { TOAST_ITEM_TRIGGER } from './toasts/toast.animation';
import { HostBinding } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [TOAST_ITEM_TRIGGER],
})
export class AppComponent implements OnInit {
  title = 'angular-toasts1';
  top: number;
  left: number;
  public toasts: Toast[];

  constructor(private service: ModelsService) {
  }

  ngOnInit(): void {
    this.toasts = this.service.toasts;

    interval(1000).subscribe(next => {
      if (this.service.toasts.length > 0){
        const last = this.service.toasts[this.service.toasts.length - 1];
        this.calculate(last.top, last.left);
      }
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.service.toasts.length; i++) {
        this.service.toasts[i].duration--;
      }
      this.service.updateToast();
      this.toasts = this.service.toasts;
    });
  }
    //@HostBinding('@flyInOut')
   // state: 'enter'| 'leave' = 'enter';

    //leave = false;

  delete(index: number): void{
    this.service.deleteToast(index);
    //this.leave = true;
   // this.state ='leave';
  }

  calculate(top: string, left: string): void {
    let _top: number;
    let _left: number;
    if (top === 'top') {
      _top = 0;
    } else if (top === 'center') {
      _top = window.innerHeight / 2 - 100;
    } else {
      _top = window.innerHeight - 100;
    }
    if (left === 'top') {
      _left = 0;
    } else if (left === 'center') {
      _left = window.innerWidth / 2 - 100;
    } else {
      _left = window.innerWidth - 200;
    }
    this.top = _top;
    this.left = _left;
  }

}
