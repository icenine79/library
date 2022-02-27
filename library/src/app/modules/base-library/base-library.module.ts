import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './components/base/base.component';
import { LeftComponent } from './components/left/left.component';



@NgModule({
  declarations: [
    BaseComponent,
    LeftComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BaseLibraryModule { }
