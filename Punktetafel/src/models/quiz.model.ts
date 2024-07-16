import { Question } from "./question.model";

export class Quiz
{
    constructor(public id: number, public title: string, public questions: Question[])
    {

    }
}