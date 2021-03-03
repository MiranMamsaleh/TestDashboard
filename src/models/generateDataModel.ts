import { modelForCards } from './modelForCards';
export class generateDataModel{
  cardDataArray: modelForCards[];
  topboardContent: topBoardContent;
  graphData: number[];

  constructor(){
    this.cardDataArray = new Array<modelForCards>();
    this.topboardContent = new topBoardContent();
    this.graphData = [];
  }
}

export class topBoardContent{
    codeCoverage: modelForCards;
    files: modelForCards;
    tests: modelForCards;
    projectQuality: modelForCards;

    constructor(){
      this.codeCoverage = new modelForCards();
      this.files = new modelForCards();
      this.tests = new modelForCards();
      this.projectQuality = new modelForCards();
    }
}
