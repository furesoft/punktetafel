import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Quiz } from '../../models/quiz.model';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss'
})
export class PlayComponent {

  selectedQuiz: Quiz | undefined;

  constructor(public game: GameService, route: ActivatedRoute, session: SessionService) {
    route.params.subscribe(p => {
      this.selectedQuiz = session.getQuizById(p["id"]);
    })
  }
}
