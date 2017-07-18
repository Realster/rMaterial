import { NgModule } from '@angular/core';
import { 
  MdCardModule,
  MdButtonModule,
  MdDialogModule,
  MdIconModule
} from '@angular/material';

@NgModule({
  exports: [
    MdCardModule,
    MdButtonModule,
    MdDialogModule,
    MdIconModule
  ]
})
export class MaterialModule { }
