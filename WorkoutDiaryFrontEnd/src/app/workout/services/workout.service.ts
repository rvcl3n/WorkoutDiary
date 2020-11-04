import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout } from 'src/app/_models/workout.model';
import { WorkoutExercise } from 'src/app/_models/workoutExercise.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) { }

  getWorkouts(): Observable<Array<Workout>> {
    return this.http.get<Array<Workout>>('http://localhost:3000/workouts');
  }

  getWorkoutExercises(): Observable<Array<WorkoutExercise>> {
    return this.http.get<Array<WorkoutExercise>>('http://localhost:3000/workoutexercises');
  }
}
