import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public quizzes: Quiz[] = [];
  public activeGames: Game[] = []

  constructor()
  {
    this.load();
  }

  load()
  {
    let session = localStorage.getItem('session');

    if (session)
    {
      let deserialized = <SessionService>JSON.parse(session);

      this.quizzes = deserialized.quizzes;
      this.activeGames = deserialized.activeGames;
    }
  }

  save()
  {
    let serialized = JSON.stringify(this);
    localStorage.setItem('session', serialized);
  }

  getQuizById(id: string): Quiz | undefined {
    return this.quizzes.find(q => q.id == id);
  }

  getGameFor(quiz: Quiz | undefined): Game | undefined {
    if (!quiz) return;

    return this.activeGames.find(g => g.quizID == quiz.id);
  }
}
