import { Component, OnInit } from '@angular/core';
import {PerformancereportService} from './performancereport.service';
import {StudentReportvo} from './student-reportvo';
@Component({
  selector: 'app-performancereport',
  templateUrl: './performancereport.component.html',
  styleUrls: ['./performancereport.component.css']
})
export class PerformancereportComponent implements OnInit {

  marksType:string;
  sID:Number;
  studentReportvo:StudentReportvo;
  mesg:string;
  errorMesg:string;
  reportTable:boolean=false;

  constructor(private performancereportService:PerformancereportService) { }

  ngOnInit() {
  }

  studentReport(){
        
              this.performancereportService.studentReportDetails(this.sID,this.marksType).subscribe((reponseData)=>{this.studentReportvo=reponseData,
                console.log('studentReport....'+this.studentReportvo)
                if(this.studentReportvo.exceptionMesg != null){
                    this.mesg=this.studentReportvo.exceptionMesg; 
                }else{
                  this.reportTable=true;
                }
        
              },(error)=>{
                  this.errorMesg=error;
              });
      }
}
