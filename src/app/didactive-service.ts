import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { CourseEdition } from "./DTOs/editions";
import { Teacher } from "./DTOs/teachers";
@Injectable({
      providedIn: 'root'
})
export class DidactisService {
      private baseUrl = 'https://localhost:44331/api/';
      private courseUrl = this.baseUrl + 'course';
      private courseEditionUrl = this.baseUrl + 'courseEdition';
      private teacherUrl = this.baseUrl + 'instructor';
      private studentUrl = this.baseUrl + 'student';
      private enrollUrl = this.baseUrl + 'enrollment';

      constructor(private http: HttpClient) {
            this.http = http;
      }

      //#region CourseEdition
      // dato l'id del corso mi restituisce le edizioni
      getEditionsByCourseId(id: number): Observable<CourseEdition[]> {
            return this.http.get<CourseEdition[]>(`${this.courseEditionUrl}/course/${id}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      // dato l'id dell'insegnante mi restituisce i corsi
      getTeachers(id: number): Observable<Teacher[]> {
            return this.http.get<Teacher[]>(`${this.courseEditionUrl}/course/${id}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      // 
      //#endregion CourseEdition
      private handleError(errorResponse: HttpErrorResponse): Observable<never> { //lancia un'eccezione
            let errorMessage = '';
            if (errorResponse.error instanceof ErrorEvent) {
                  errorMessage = 'errore di rete: ' + errorResponse.error.message;
            } else {
                  errorMessage = 'errore lato server: ' + errorResponse.status + '' + errorResponse.message;
            }
            console.log(errorMessage);
            return throwError(errorMessage);
      }



}