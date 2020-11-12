import { Injectable } from '@angular/core';
import {Toast} from './toast';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  public toasts: Toast[] = [];

  pushToast(toast: Toast): void{
    this.toasts.push(toast);
  }

  deleteToast(ind: number): void{
    this.toasts.splice(ind, 1);
  }

  updateToast(): void{
    this.toasts = this.toasts.filter(value => value.duration >= 0);
  }
  constructor() { }
}
