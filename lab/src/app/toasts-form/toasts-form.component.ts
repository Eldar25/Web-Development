import { Component, OnInit } from '@angular/core';
import {ModelsService} from '../shared/models.service';
import {Toast} from '../shared/toast';

@Component({
  selector: 'app-toasts-form',
  templateUrl: './toasts-form.component.html',
  styleUrls: ['./toasts-form.component.css']
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

  submit(): void{
    this.service.pushToast(new Toast(this.title, this.content, this.type, this.duration, this.duration, this.displayDuration, this.top, this.left));
  }

}
