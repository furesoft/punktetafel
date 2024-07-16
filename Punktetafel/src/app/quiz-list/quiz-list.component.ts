import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { GameService } from '../../services/game.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewQuizModalComponent } from '../modals/new-quiz.modal/new-quiz.modal.component';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.scss'
})
export class QuizListComponent {
  constructor(public session: SessionService, public game: GameService, private modalService: NgbModal) { }

  newQuiz() {
    let modal = this.modalService.open(NewQuizModalComponent, {
      centered: true, backdrop: 'static', size: "l"
    });

  }
}
