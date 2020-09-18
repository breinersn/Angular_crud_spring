import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonesComponent } from './botones/botones.component';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [BotonesComponent, ToolbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ], exports: [ BotonesComponent, ToolbarComponent]
})
export class DemoModule { }
