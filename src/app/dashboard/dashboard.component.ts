import { generateDataModel } from './../../models/generateDataModel';

import { Component, OnInit } from '@angular/core';
import { modelForCards } from 'src/models/modelForCards';
import { GenerateDataService } from 'src/services/generate-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public dataArray: generateDataModel = new generateDataModel();

  constructor(private generateDataService: GenerateDataService) {
    
   }

  ngOnInit(): void {
    this.dataArray = this.generateDataService.initGenerate();
    for (let index = 0; index < 5; index++) {
      this.addData();
    }
  }

  addData(): void{
    this.dataArray = this.generateDataService.addData(this.dataArray)
  }

}
