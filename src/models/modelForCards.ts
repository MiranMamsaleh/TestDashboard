export class modelForCards{
    name: string;
    amountOfPlus: number;
    previousDataArray: Array<number>;
    currentNumber: string;
    lastNumber: string;
    arrow: boolean;
    dividerForGraph: number;
    showGraph: boolean;
    showOutOfNumber: boolean;
    color: string;

    constructor(){
        this.name = "";
        this.amountOfPlus = 0;
        this.previousDataArray = [];
        this.currentNumber = "";
        this.dividerForGraph = 1;
        this.lastNumber = "";
        this.arrow = false;
        this.showGraph = false;
        this.showOutOfNumber = false;
        this.color = "";
    }
}