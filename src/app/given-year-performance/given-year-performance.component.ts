import { Component, OnInit } from '@angular/core';
import { GivenYearService} from './given-year.service';
import { GivenYearPerformVO} from './given-year-vo';
import { ClassYearVo} from './class-year-vo';

@Component({
  selector: 'app-given-year-performance',
  templateUrl: './given-year-performance.component.html',
  styleUrls: ['./given-year-performance.component.css']
})
export class GivenYearPerformanceComponent implements OnInit {

  sID:Number;
  sYear:Number;
  givenYearPerformVO:GivenYearPerformVO;
  errorMesg:string;
  studentPerformTable:boolean;
  className:string;
  classYearVo:ClassYearVo;
  classPerformTable:boolean;
  inputForm:boolean=false;

  constructor(private givenYearService:GivenYearService) {}

  ngOnInit() {
  }

  givenYearStudentPerformance(){
    this.classPerformTable=false;

      this.givenYearService.givenYearPerformance(this.sID,this.sYear).subscribe((reponseData)=>{this.givenYearPerformVO=reponseData,
        console.log('givenYearStudentPerformance....'+this.givenYearPerformVO)
        if(this.givenYearPerformVO.exceptionMesg != null){
            this.errorMesg=this.givenYearPerformVO.exceptionMesg;
        }else{
          this.studentPerformTable=true;
        }

      },(error)=>{
          this.errorMesg=error;
      });
  }

  classYearStudentsPerformance(){
    this.studentPerformTable=false;
          this.givenYearService.classYearPerformance(this.className,this.sYear).subscribe((reponseData)=>{this.classYearVo=reponseData,
            console.log('classYearStudentsPerformance....'+this.classYearVo)
            if(this.classYearVo.exceptionMesg != null){
                this.errorMesg=this.classYearVo.exceptionMesg;
            }else{
              this.classPerformTable=true;
            }
    
          },(error)=>{
              this.errorMesg=error;
          });
      }

      studentPerformYearForm(){
        this.inputForm=true;
        this.studentPerformTable=true;
        this.classPerformTable=false;
      }

      classPerformYearForm(){
        this.inputForm=true;
        this.studentPerformTable=false;
        this.classPerformTable=true;
      }
}
