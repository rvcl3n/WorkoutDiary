import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout } from 'src/app/_models/workout.model';
import { WorkoutExercise } from 'src/app/_models/workoutExercise.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private serverUrl = environment.urlAddress;

  constructor(private http: HttpClient) { }

  getWorkouts(): Observable<Array<Workout>> {
    return this.http.get<Array<Workout>>(`${this.serverUrl}/workouts`);
  }

  getWorkoutExercises(): Observable<Array<WorkoutExercise>> {
    return this.http.get<Array<WorkoutExercise>>(`${this.serverUrl}/workoutexercises`);
  }

  addWorkoutExercise(exercise: WorkoutExercise): Observable<WorkoutExercise> {
    return this.http.post<WorkoutExercise>(`${this.serverUrl}/workoutexercises`, exercise);
  }
}
