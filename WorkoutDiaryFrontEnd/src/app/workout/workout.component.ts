import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  @Input() description: string;

  @Input() workoutType: string;

  @Input() dateTime: string;

  constructor() { }

  ngOnInit(): void {
  }

}
