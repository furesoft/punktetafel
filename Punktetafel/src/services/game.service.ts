import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  play(quiz: Quiz)
  {
    window.open(location.href + "play/" + quiz.id, "_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=4000,height=4000");
  }

  edit(quiz: Quiz)
  {
    
  }
}
