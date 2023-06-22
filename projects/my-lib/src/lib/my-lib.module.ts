import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { Component1Component } from './component1/component1.component';



@NgModule({
  declarations: [
    MyLibComponent,
    Component1Component
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    Component1Component
  ]
})
export class MyLibModule { }
