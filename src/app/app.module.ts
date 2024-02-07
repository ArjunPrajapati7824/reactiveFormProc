import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskUdemyReactiveFormComponent } from './task-udemy-reactive-form/task-udemy-reactive-form.component';
import { ReactiveProcdemyComponent } from './reactive-procdemy/reactive-procdemy.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskUdemyReactiveFormComponent,
    ReactiveProcdemyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
