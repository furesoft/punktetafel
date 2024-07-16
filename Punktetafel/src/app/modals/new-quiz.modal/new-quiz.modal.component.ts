import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.modal.component.html',
  styleUrl: './new-quiz.modal.component.scss'
})
export class NewQuizModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
