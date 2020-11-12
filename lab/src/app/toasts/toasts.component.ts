import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Toast} from '../shared/toast';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css']
})
export class ToastsComponent implements OnInit {

  @Input() toast: Toast;
  @Input() index: number;
  @Input() top: number;
  @Input() left: number;
  @Input() initialDuration: number;
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
