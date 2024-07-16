import { Component } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.scss'
})
export class QuizListComponent {
  constructor(public session: SessionService) {}
}
