import { Question } from "./question.model";

export class Quiz
{
    constructor(public title: string, public questions: Question[])
    {

    }
}