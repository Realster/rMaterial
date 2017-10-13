import { NgModule } from '@angular/core';
import { 
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class MaterialModule { }
