import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RulelistModule {
constructor(S){
  this.item = S;
}
item:string = "";
}
