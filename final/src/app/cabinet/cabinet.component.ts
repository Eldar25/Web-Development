import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service'


@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {

  constructor() { }

  loggedStatus: 'user' | 'admin' | 'unknown' = 'unknown';
  logged: boolean = false;

  hide = true;
  ngOnInit(): void {
  }

}
