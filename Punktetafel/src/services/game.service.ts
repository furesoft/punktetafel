import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { SessionService } from './session.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewQuizModalComponent } from '../app/modals/new-quiz.modal/new-quiz.modal.component';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private session: SessionService, private modalService: NgbModal) { }

  play(quiz: Quiz) {
    this.session.activeGames.push({
      quizID: quiz.id,
      player: [],
      inactiveQuestions: []
    })
    this.session.save();

    window.open(location.href + "play/" + quiz.id, "_blank", "toolbar=no,scrollbars=no,resizable=no,top=500,left=500,width=4000,height=4000");
  }

  edit(quiz: Quiz) {
    let modalRef = this.modalService.open(NewQuizModalComponent, { backdrop: 'static', size: 'l' });
    let modal = <NewQuizModalComponent>modalRef.componentInstance;
    
    modal.quiz = quiz;
    modal.newQuiz = false;
  }

  delete(quiz: Quiz) {
    this.session.quizzes.splice(this.session.quizzes.findIndex(x => x.id == quiz.id), 1);

    this.reset(quiz);
  }

  reset(quiz: Quiz)
  {
    let gameIndex = this.session.activeGames.findIndex(x => x.quizID == quiz.id);

    if (gameIndex != -1) {
      this.session.activeGames.splice(gameIndex, 1);
    }

    this.session.save();
  }

  isGameActive(quiz: Quiz) {
    return this.session.activeGames.find(x => x.quizID == quiz.id);
  }
}
