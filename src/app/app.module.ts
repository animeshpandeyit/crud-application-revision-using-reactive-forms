import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './shared/material.module';
import { EmpAddComponent } from './core/components/emp-add/emp-add.component';
import { EmpEditComponent } from './core/components/emp-edit/emp-edit.component';

@NgModule({
  declarations: [AppComponent, EmpAddComponent, EmpEditComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
