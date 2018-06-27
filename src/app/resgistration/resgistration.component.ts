import { Component, OnInit } from '@angular/core';
import {RegistrationService} from './registration.service';
import {ResponseVo} from '../response-vo';

@Component({
  selector: 'app-resgistration',
  templateUrl: './resgistration.component.html',
  styleUrls: ['./resgistration.component.css']
})
export class ResgistrationComponent implements OnInit {

  sName:string;
  sAge:string;
  sClass:string;

  eName:string;
  eAge:string;
  eClass:string;
  eAddress:string;
  salary:string;
  subject:string;
  sYear:string;

 StudentformOpen:boolean=false;
 TeacherformOpen:boolean=false;

  responseVo:ResponseVo;
  errorMesg:string;
  mesg:String;

  constructor(private registrationService:RegistrationService) { }

  ngOnInit() {
  }


  saveStudent(){
    const details ={studentID:'',studentName:this.sName,
                studentAge:this.sClass,className:this.sClass,year:this.sYear};

      var body =JSON.stringify(details);

      this.registrationService.saveStudentDetails(body).subscribe((reponseData)=>{this.responseVo=reponseData,
        console.log('saveStudent....'+this.responseVo)
        if(this.responseVo.success == 'success'){
            this.mesg='Student Details are successfully added......';
        }

      },(error)=>{
          this.errorMesg=error;
      });
  }

  saveEmployee(){
    const details ={empID:'',empName:this.eName,empAge:this.eAge,className:this.eClass,empAddress:this.eAddress,salary:this.salary,subject:this.subject};

      var body =JSON.stringify(details);

      this.registrationService.saveEmployeDetails(body).subscribe((reponseData)=>{this.responseVo=reponseData,
        console.log('saveEmployee....'+this.responseVo)
        if(this.responseVo.success == 'success'){
            this.mesg='Employee Details are successfully added......';
            this.StudentformOpen=false;
        }

      },(error)=>{
          this.errorMesg=error;
      });
  }

  studentRegisterForm(){
    this.StudentformOpen=true;
    this.TeacherformOpen=false;
  }

  teacherRegisterForm(){
    this.StudentformOpen=false;
    this.TeacherformOpen=true;
  }
}
