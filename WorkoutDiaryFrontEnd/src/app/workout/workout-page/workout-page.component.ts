import { Component, OnInit } from '@angular/core';
import { WorkoutExercise } from 'src/app/_models/workoutExercise.model';

@Component({
  selector: 'app-workout-page',
  templateUrl: './workout-page.component.html',
  styleUrls: ['./workout-page.component.scss']
})
export class WorkoutPageComponent implements OnInit {

  public description: string = "Progressive workout";

  public workoutType: string;

  public dateTime: string;

  exercises: WorkoutExercise[] = 
  [
     {id : '1', name: "Pull ups", reps: 8, description :'Wide moves'},
     {id : '2', name: "Push ups", reps: 9},
     {id : '3', name: "Dips", reps: 10 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addExercise(): void {
    this.exercises.push({id : '4', name: "Test", reps: 10 });
  }

}
