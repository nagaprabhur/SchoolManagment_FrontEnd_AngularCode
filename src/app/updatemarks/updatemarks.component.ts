import { Component, OnInit } from '@angular/core';
import {ResponseVo} from '../response-vo';
import {UpdatemarksService} from './updatemarks.service';

@Component({
  selector: 'app-updatemarks',
  templateUrl: './updatemarks.component.html',
  styleUrls: ['./updatemarks.component.css']
})
export class UpdatemarksComponent implements OnInit {


  sID:Number;
  sName:string;
  english:Number;
  maths:Number;
  firstlanguage:Number;
  science:Number;
  social:Number;
  phycis:Number;
  //total:Number;
  marksType:string;
  //grade:string;
  //percentage:string;

  responseVo:ResponseVo;
  mesg:string;
  errorMesg:string;

  constructor(private updatemarksService:UpdatemarksService) { }

  ngOnInit() {
  }

  updateStudentMarks(){

    const details ={studentID:this.sID,studentName:this.sName,marksType:this.marksType,
      english:this.english,maths:this.maths,phycis:this.phycis,social:this.social,
      science:this.science,firstLanguage:this.firstlanguage};
    
          var body =JSON.stringify(details);
    
          this.updatemarksService.updateStudentmMarksDetails(body).subscribe((reponseData)=>{this.responseVo=reponseData,
            console.log('updateStudentMarks....'+this.responseVo)
            if(this.responseVo.success == 'success'){
                this.mesg='Student marks are successfully updated......';
          
            }
    
          },(error)=>{
              this.errorMesg=error;
          });
  }
}
