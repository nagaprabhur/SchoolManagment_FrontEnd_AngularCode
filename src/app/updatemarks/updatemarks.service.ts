import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {ResponseVo} from '../response-vo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class UpdatemarksService {

  studentMarksUpdateServiceURL:string='http://localhost:8000/teacher/updateStudentMarks';
 

constructor(private http:HttpClient) { }


updateStudentmMarksDetails(body:string){
  const header=new HttpHeaders().set('content-type','application/json');

  return this.http.post<Observable<ResponseVo>>(this.studentMarksUpdateServiceURL,body)
                  .catch(this.handleError);
}

handleError(error:Response){
  return Observable.throw(error);
}
}
