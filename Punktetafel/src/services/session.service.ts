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
    this.quizzes = [
      {
        id: 0,
        title: "Test",
        questions: [
          {
            title: "Test Title",
            content: "What is right?",
            points: 100
          }
        ]
      }
    ]

    this.activeGames = [
      {
        quizID: 0,
        inactiveQuestions: [],
        player: [
          {
            name: "Player 1",
            points: 0
          }
        ]
      }
    ]

    this.save();

    this.load();
  }

  load()
  {
    let session = localStorage.getItem('quizzes');

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

  getQuizById(id: number): Quiz | undefined {
    return this.quizzes.find(q => q.id == id);
  }
}
