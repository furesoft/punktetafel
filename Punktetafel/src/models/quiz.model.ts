import { Question } from "./question.model";

export class Quiz
{
    constructor(public id: string, public title: string, public questions: Question[], public categories: string[] = [])
    {

    }
}