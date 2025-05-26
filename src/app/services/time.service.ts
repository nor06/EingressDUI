import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  constructor() { }

  getCurrentTime(): Date {
    return new Date();  // Returns the current date and time
  }
}

