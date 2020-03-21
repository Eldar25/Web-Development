import { Component, OnInit } from '@angular/core';
import {tasks ,Task}  from '../tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  task = tasks[];
}
