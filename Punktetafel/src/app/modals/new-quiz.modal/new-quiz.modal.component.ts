import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Quiz } from '../../../models/quiz.model';
import  * as short from "short-uuid";
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.modal.component.html',
  styleUrl: './new-quiz.modal.component.scss',
})
export class NewQuizModalComponent {
  quiz: Quiz = {
    id: short.generate().substring(0, 6),
    title: '',
    questions: [],
    categories: [],
  };
  newQuiz: boolean = true;
  categories: Category[] = [];

  constructor(public activeModal: NgbActiveModal) {}

  submit() {
    this.activeModal.close(this.quiz);
  }

  addCategory() {
    this.categories.push({name: ""});
  }
}
