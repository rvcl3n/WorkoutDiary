import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutComponent } from './workout/workout.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutListComponent,
    WorkoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
