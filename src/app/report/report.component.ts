import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Category } from '../_models/category';
import { Report } from '../_models/report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  reports:Report[];
  

  constructor(private api: ApiService) { 
    this.reports = [];
  }

  ngOnInit(): void {
  }

  getReports(){
    this.api.getReports().subscribe(res=>{
      this.reports = res;
    })
  }
}
