import { modelForCards } from 'src/models/modelForCards';
import { generateDataModel } from './../models/generateDataModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateDataService {

  constructor() { }

  public initGenerate(): generateDataModel{
    let generateDM: generateDataModel = new generateDataModel();

    //Generating data for the 4 small cards

    generateDM.cardDataArray = [{
      name: "Test Errored",
      amountOfPlus: 0,
      previousDataArray: [],
      currentNumber: "",
      arrow: false,
      lastNumber: "",
      dividerForGraph: 1,
      showGraph: true,
      color: "",
      showOutOfNumber: true
    },
    {
      name: "Problems",
      amountOfPlus: 0,
      previousDataArray: [],
      currentNumber: "",
      arrow: false,
      dividerForGraph: 1,
      lastNumber: "",
      showGraph: true,
      color: "",
      showOutOfNumber: true
    },
    {
      name: "Test Failed",
      amountOfPlus: 0,
      previousDataArray: [],
      currentNumber: "",
      arrow: false,
      dividerForGraph: 1,
      lastNumber: "",
      showGraph: true,
      color: "",
      showOutOfNumber: true
    },
    {
      name: "Errors",
      amountOfPlus: 0,
      previousDataArray: [],
      currentNumber: "",
      arrow: false,
      lastNumber: "",
      dividerForGraph: 1,
      showGraph: true,
      color: "",
      showOutOfNumber: true
    }];

    for (let index = 0; index < generateDM.cardDataArray.length; index++) {
      generateDM.cardDataArray[index].currentNumber = this.getRandomNumber(1,100).toString();
    }

    // Generate data for the top bar

    let codeCoverage: number = this.getRandomNumber(30,99);
    let files: number = this.getRandomNumber(10000,500000);
    let tests: number = this.getRandomNumber(1000000, 9999999);
    let projectQuality: string = "";
    if(codeCoverage >= 85){
      projectQuality = "Great";
    }
    else if(codeCoverage >= 60){
      projectQuality = "Good";
    }
    else{
      projectQuality = "Bad";
    }

    generateDM.topboardContent.codeCoverage = {
      name: "Code Coverage",
      amountOfPlus: 0,
      previousDataArray: [],
      currentNumber: codeCoverage.toString()+"%",
      arrow: false,
      lastNumber: "",
      dividerForGraph: 1,
      showGraph: false,
      color: "",
      showOutOfNumber: false
    };

    generateDM.topboardContent.files = {
      name: "Files",
      amountOfPlus: 0,
      previousDataArray: [],
      currentNumber: files.toLocaleString(),
      arrow: false,
      lastNumber: "",
      dividerForGraph: 1,
      showGraph: true,
      color: "",
      showOutOfNumber: false
    };

    generateDM.topboardContent.tests = {
      name: "Tests",
      amountOfPlus: 0,
      previousDataArray: [],
      currentNumber: tests.toLocaleString(),
      arrow: false,
      lastNumber: "",
      dividerForGraph: 1,
      showGraph: true,
      color: "",
      showOutOfNumber: true
    }

    generateDM.topboardContent.projectQuality = {
      name: "Project Quality",
      amountOfPlus: 0,
      previousDataArray: [],
      currentNumber: projectQuality.toString(),
      arrow: false,
      lastNumber: "",
      dividerForGraph: 1,
      showGraph: false,
      color: "",
      showOutOfNumber: false
    }


    // Generate data for the graph

    generateDM.graphData = this.getGraphArrayFromProblems(Number(generateDM.cardDataArray[1].currentNumber))

    return generateDM;
  }

  public addData(dataModel: generateDataModel){
    let currentNumber: number = 0;
    let lastNumber: number = 0;
    let amountOfPluses: number = 0;

    for (let index = 0; index < dataModel.cardDataArray.length; index++) {
      lastNumber = Number(dataModel.cardDataArray[index].currentNumber);
      currentNumber= this.getRandomNumber(1,100);

      dataModel.cardDataArray[index].lastNumber = lastNumber.toString();
      this.pushNumberinBarGraphArray(dataModel.cardDataArray[index], lastNumber);

      dataModel.cardDataArray[index].currentNumber = currentNumber.toString();

      if(currentNumber > lastNumber){
        dataModel.cardDataArray[index].arrow = true;
      }
      else{
        dataModel.cardDataArray[index].arrow = false;
      }

      if(currentNumber < 10){
        dataModel.cardDataArray[index].amountOfPlus = 2;
        amountOfPluses += 2;
      }
      else if(currentNumber < 25){
        dataModel.cardDataArray[index].amountOfPlus = 1;
        amountOfPluses++;
      }
      else{
        dataModel.cardDataArray[index].amountOfPlus = 0;
      }
    }

    dataModel.graphData = this.getGraphArrayFromProblems(Number(dataModel.cardDataArray[1].currentNumber))

    let projectQualityColor = "";
    let codeCoverage: number = this.getRandomNumber(30,99);
    let codeCoverageColor = codeCoverage > 85 ? "g" : codeCoverage > 60 ? "y" : "r";
    let files: number = this.getRandomNumber(10000,500000);
    let tests: number = this.getRandomNumber(1000000, 9999999);
    let projectQuality: string = "";
    if(codeCoverage >= 85 && amountOfPluses >= 2){
      projectQuality = "Great";
      projectQualityColor = "g";
    }
    else if(codeCoverage >= 60 && amountOfPluses >= 1||
      codeCoverage >= 85 && amountOfPluses < 2){
      projectQuality = "Good";
      projectQualityColor = "y";
    }
    else{
      projectQuality = "Bad";
      projectQualityColor = "r"
    }

    dataModel.topboardContent.codeCoverage.currentNumber = codeCoverage.toString()+"%";
    dataModel.topboardContent.codeCoverage.color = codeCoverageColor;

    lastNumber = parseInt(dataModel.topboardContent.files.currentNumber);
    this.pushNumberinBarGraphArray(dataModel.topboardContent.files, lastNumber);
    dataModel.topboardContent.files.currentNumber = files.toLocaleString();
    
    lastNumber = parseInt(dataModel.topboardContent.tests.currentNumber);
    this.pushNumberinBarGraphArray(dataModel.topboardContent.tests, lastNumber);
    dataModel.topboardContent.tests.currentNumber = tests.toLocaleString();

    dataModel.topboardContent.projectQuality.currentNumber = projectQuality;
    dataModel.topboardContent.projectQuality.color = projectQualityColor;


    return dataModel;
  }

  public getRandomNumber(min: number, max:number): number{
    return Math.round(Math.random() * (max - min) + min);
  }

  getGraphArrayFromProblems(problems: number):number[]{
    let randomNumber = 0;
    let graphData: number[] = []

    for (let index = 0; index < 3; index++) {
      randomNumber = this.getRandomNumber(0,problems/2);
      graphData.push(randomNumber);
      problems = problems-randomNumber;
    }

    graphData.push(problems);

    return graphData;
  }


  pushNumberinBarGraphArray(dataModel: modelForCards, lastNumber: number){
    if(lastNumber/ dataModel.dividerForGraph * 60 > 60){
      for (let index = 0; index < dataModel.previousDataArray.length; index++) {
        dataModel.previousDataArray[index] = dataModel.previousDataArray[index] * dataModel.dividerForGraph / lastNumber;
      }
      dataModel.previousDataArray.push(60);
      dataModel.dividerForGraph = lastNumber;
    }
    else{
      dataModel.previousDataArray.push(lastNumber /  dataModel.dividerForGraph * 60);
    }

    if(dataModel.previousDataArray.length > 8){
      dataModel.previousDataArray.shift();
    }

  }
}
