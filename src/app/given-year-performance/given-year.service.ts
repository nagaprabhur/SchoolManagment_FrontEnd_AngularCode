import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { GivenYearPerformVO} from './given-year-vo';
import {ClassYearVo} from './class-year-vo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class GivenYearService {

  givenYearServiceURL:string='http://localhost:8000/teacher/fetchStudentPerformanceReportForGivenYear';
  givenYearClassServiceURL:string='http://localhost:8000/teacher/fetchClassPerformanceReportForGivenYear';

constructor(private http:HttpClient) { }


givenYearPerformance(id:Number,year:Number){
  const header=new HttpHeaders().set('content-type','application/json');
  var givenYearServiceURLWithParams=this.givenYearServiceURL+'/'+id+'/'+year;
  return this.http.get<Observable<GivenYearPerformVO>>(givenYearServiceURLWithParams)
                  .catch(this.handleError);
}

classYearPerformance(className:string,year:Number){
  const header=new HttpHeaders().set('content-type','application/json');
  var classYearServiceURLWithParams=this.givenYearClassServiceURL+'/'+className+'/'+year;
  return this.http.get<Observable<GivenYearPerformVO>>(classYearServiceURLWithParams)
                  .catch(this.handleError);
}

handleError(error:Response){
  return Observable.throw(error);
}
}
