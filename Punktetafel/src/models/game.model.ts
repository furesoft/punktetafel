import { Player } from "./Player";

export class Game
{
    constructor(public quizID: number, public player: Player[], 
        public inactiveQuestions: number[] = [])
    {
    }
}
