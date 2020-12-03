import { Component, OnInit,HostBinding} from '@angular/core';
import {ModelsService} from '../shared/models.service';
import {Toast} from '../shared/toast';
import { TOAST_ITEM_TRIGGER } from '../toasts/toast.animation';
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


@Component({
  selector: 'app-toasts-form',
  templateUrl: './toasts-form.component.html',
  styleUrls: ['./toasts-form.component.css'],
  animations: [TOAST_ITEM_TRIGGER],
})
export class ToastsFormComponent implements OnInit {
  public title: string;
  public content: string;
  public type: string;
  public duration: number;
  public displayDuration: boolean;
  public top: string;
  public left: string;
  constructor(private service: ModelsService) { }

  ngOnInit(): void {
  }
 // @HostBinding('@listItemHover')
  //state: 'default' |'enter' = 'default';


  submit(): void{
    
    this.service.pushToast(new Toast(this.title, this.content, this.type, this.duration, this.duration, this.displayDuration, this.top, this.left));
  }

}
