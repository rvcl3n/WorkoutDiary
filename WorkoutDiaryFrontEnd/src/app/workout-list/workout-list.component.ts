import { Component, OnInit } from '@angular/core';
import { Workout } from '../_models/workout.model';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {

  constructor() { }

  public workouts : Workout[] = 
  [
     {id : '1', dateTime : '111', description :'111111', workoutType: "Calisthenics"},
     {id : '2', dateTime : '222', description :'222222', workoutType: "Calisthenics"},
     {id : '3', dateTime : '333', description :'333333', workoutType: "Gym"}
  ]

  ngOnInit(): void {
  }

}
