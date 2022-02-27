import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './components/base/base.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';



@NgModule({
  declarations: [
    BaseComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
