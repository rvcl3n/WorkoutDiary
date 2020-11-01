import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-exercise',
  templateUrl: './workout-exercise.component.html',
  styleUrls: ['./workout-exercise.component.scss']
})
export class WorkoutExerciseComponent implements OnInit {

  @Input() description: string;

  @Input() name: string;

  @Input() reps: number;

  constructor() { }

  ngOnInit(): void {
  }

}
