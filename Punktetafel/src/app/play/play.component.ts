import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Quiz } from '../../models/quiz.model';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { Game } from '../../models/game.model';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss',
})
export class PlayComponent {
  selectedQuiz: Quiz | undefined;
  activeGame!: Game | undefined;

  constructor(
    public game: GameService,
    route: ActivatedRoute,
    session: SessionService
  ) {
    route.params.subscribe((p) => {
      this.selectedQuiz = session.getQuizById(p['id']);
      this.activeGame = session.getGameFor(this.selectedQuiz);
    });
  }

  startQuestion(q: Question)
  {
    let index = this.selectedQuiz?.questions.findIndex(x => x == q);

    if (!index)
    {
      return;
    }

    this.activeGame?.inactiveQuestions.push(index);
  }

  isDeactivated(q: Question)
  {
    let index = this.selectedQuiz?.questions.findIndex((x) => x == q);

    if (!index) {
      return false;
    }

    return this.activeGame?.inactiveQuestions.find(x => index) != undefined;
  }
}
