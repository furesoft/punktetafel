import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public quizzes: Quiz[] = [];

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
