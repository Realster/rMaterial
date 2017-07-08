import { NgModule } from '@angular/core';
import { MdCardModule, MdButtonModule } from '@angular/material';

@NgModule({
  exports: [
    MdCardModule,
    MdButtonModule
  ]
})
export class MaterialModule { }
