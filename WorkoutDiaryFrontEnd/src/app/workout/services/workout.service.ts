import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout } from 'src/app/_models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) { }

  getWorkouts(): Observable<Array<Workout>> {
    return this.http.get<Array<Workout>>('http://localhost:3000/workouts');
  }
}
