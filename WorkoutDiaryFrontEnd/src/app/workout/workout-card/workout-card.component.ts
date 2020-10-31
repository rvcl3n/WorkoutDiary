import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss']
})
export class WorkoutCardComponent implements OnInit {

  @Input() description: string;

  @Input() workoutType: string;

  @Input() dateTime: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToWorkout(): void {
    this.router.navigate(['workout']);
  }
}
