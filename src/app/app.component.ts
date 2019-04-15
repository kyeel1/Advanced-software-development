import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'practice';
  show: boolean = false;
  log:number[];
  tracker:number =0;
  disappear()
  {
  this.show = true;
  this.tracker+=1;
  this.log.push(this.tracker);
  
}
}

