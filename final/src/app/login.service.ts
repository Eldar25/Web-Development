import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  loggedStatus: 'user' | 'admin' | 'unknown' = 'unknown';
  logged: boolean = false;

  
}
