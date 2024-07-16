import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private session: SessionService) {}

  play(quiz: Quiz)
  {
    this.session.activeGames.push({
      quizID: quiz.id,
      player: [],
      inactiveQuestions: []
    })
    this.session.save();
    console.log(this.session.activeGames)

    window.open(location.href + "play/" + quiz.id, "_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=4000,height=4000");
  }

  edit(quiz: Quiz)
  {
    
  }

  delete(quiz: Quiz)
  {
    this.session.quizzes.splice(this.session.quizzes.findIndex(x => x.id == quiz.id), 1);

    let gameIndex = this.session.activeGames.findIndex(x => x.quizID == quiz.id);

    if (gameIndex != -1)
    {
      this.session.activeGames.splice(gameIndex, 1);
    }

    this.session.save();
  }

  isGameActive(quiz: Quiz)
  {
    return this.session.activeGames.find(x => x.quizID == quiz.id);
  }
}
