import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addExercise(): void {
    this.exercises.push({id : '4', name: "Test", reps: 10 });
  }

  navigateToWorkoutList(): void {
    this.router.navigate(['workoutlist']);
  }

}
