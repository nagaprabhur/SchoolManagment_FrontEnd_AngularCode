import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {ResponseVo} from '../response-vo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class RegistrationService {

    studentRegisterServiceURL:string='http://localhost:8000/student/Register';
    employeRegisterServiceURL:string='http://localhost:8000/teacher/Register';

  constructor(private http:HttpClient) { }


  saveStudentDetails(body:string){
    const header=new HttpHeaders().set('content-type','application/json');

    return this.http.post<Observable<ResponseVo>>(this.studentRegisterServiceURL,body)
                    .catch(this.handleError);
  }

  saveEmployeDetails(body:string){
    const header=new HttpHeaders().set('content-type','application/json');

    return this.http.post<Observable<ResponseVo>>(this.employeRegisterServiceURL,body)
                    .catch(this.handleError);
  }

  handleError(error:Response){
    return Observable.throw(error);
  }

}
