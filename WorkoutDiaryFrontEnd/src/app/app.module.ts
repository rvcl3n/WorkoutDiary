import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutComponent } from './workout/workout.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { WorkoutModule } from './workout/workout.module';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutListComponent,
    WorkoutComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    //WorkoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
