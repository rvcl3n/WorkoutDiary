import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/_models/workout.model';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {

  constructor(private workoutService: WorkoutService) { }

  public workouts : Workout[];

  ngOnInit(): void {
    this.workoutService.getWorkouts().pipe().subscribe(res => this.workouts = res);
  }

}
