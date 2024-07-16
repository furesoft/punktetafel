import { Player } from "./Player";

export class Game
{
    constructor(public quizID: string, public player: Player[], 
        public inactiveQuestions: number[] = [])
    {
    }
}
