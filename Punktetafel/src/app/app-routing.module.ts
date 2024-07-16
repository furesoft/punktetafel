import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  { path: "", component: QuizListComponent, pathMatch: "full" },
  { path: "play/:id", component: PlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
