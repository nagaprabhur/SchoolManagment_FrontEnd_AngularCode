import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {StudentReportvo} from './student-reportvo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class PerformancereportService {

  studentReportServiceURL:string='http://localhost:8000/teacher//teacher/fetchStudentPerformanceReport';
  
 
 constructor(private http:HttpClient) { }
 
 
 studentReportDetails(id:Number,markType:string){
   const header=new HttpHeaders().set('content-type','application/json');

  var studentReportServiceURLWithParams=this.studentReportServiceURL+'/'+id+'/'+markType;

   return this.http.get<Observable<StudentReportvo>>(studentReportServiceURLWithParams)
                   .catch(this.handleError);
 }
 
 handleError(error:Response){
   return Observable.throw(error);
 }

}
