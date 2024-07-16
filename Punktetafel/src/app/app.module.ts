import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { PlayComponent } from './play/play.component';
import { NewQuizModalComponent } from './modals/new-quiz.modal/new-quiz.modal.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    PlayComponent,
    NewQuizModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
