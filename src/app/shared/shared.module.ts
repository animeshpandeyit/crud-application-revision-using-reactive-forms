import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [MaterialModule, CommonModule],
  exports: [MaterialModule],
})
export class SharedModule {}
