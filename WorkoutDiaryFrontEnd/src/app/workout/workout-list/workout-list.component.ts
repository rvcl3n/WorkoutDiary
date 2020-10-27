import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/_models/workout.model';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {

  constructor() { }

  public workouts : Workout[] = 
  [
     {id : '1', dateTime : '25/10/2020', description :'Progressive workout', workoutType: "Calisthenics"},
     {id : '2', dateTime : '23/10/2020', description :'Short workout', workoutType: "Calisthenics"},
     {id : '3', dateTime : '18/10/2020', description :'New training program', workoutType: "Gym"}
  ]

  ngOnInit(): void {
  }

}
