import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, first, tap } from "rxjs/operators";
import { CourseEdition, CourseEditionFull } from "./DTOs/editions";
import { Teacher } from "./DTOs/teachers";
@Injectable({
      providedIn: 'root'
})
export class DidactisService {
      private baseUrl = 'https://localhost:44331/api/';
      private courseEditionUrl = this.baseUrl + 'courseEdition';

      constructor(private http: HttpClient) {
            this.http = http;
      }

      //#region CourseEdition

      // ritorna tutte le edizioni presenti sul db
      getAllEditions(): Observable<CourseEditionFull[]> {
            return this.http.get<CourseEditionFull[]>(`${this.courseEditionUrl}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      // dato l'id dell'edizione mi restituisce l'edizione
      getEditionById(id:number): Observable<CourseEditionFull[]> {
            return this.http.get<CourseEditionFull[]>(`${this.courseEditionUrl}?id=${id}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      // data la data di inizio mi restituisce le edizioni corso
      getEditionsByStartDate(start: string): Observable<CourseEditionFull[]> {
            return this.http.get<CourseEditionFull[]>(`${this.courseEditionUrl}?startDate=${start}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      //data la data di fine mi restituisce le edizioni corso
      getEditionsByFinishDate(end: string): Observable<CourseEditionFull[]> {
            return this.http.get<CourseEditionFull[]>(`${this.courseEditionUrl}?endDate=${end}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      // dato un intervallo di tempo mi restituisce le edizioni dentro all'intervallo
      getEditionsByIntervall(end: string, start: string): Observable<CourseEditionFull[]> {
            return this.http.get<CourseEditionFull[]>(`${this.courseEditionUrl}?startDate=${start}&?endDate=${end}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }
      //dato un prezzo minimo mi restituisce le edizioni con prezzo maggiore o uguale alla cifra
      getEditionByMinPrice(minPrice: number): Observable<CourseEditionFull[]> {
            return this.http.get<CourseEditionFull[]>(`${this.courseEditionUrl}?minPrice=${minPrice}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      //dato un prezzo massimo mi restituisce le edizioni con prezzo minore o uguale alla cifra
      getEditionByMaxPrice(maxPrice: number): Observable<CourseEditionFull[]> {
            return this.http.get<CourseEditionFull[]>(`${this.courseEditionUrl}?maxPrice=${maxPrice}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      // dato un intervallo di prezzo mi restituisce le edizioni con prezzo compreso in quell'intervallo
      getEditionByPriceIntervall(maxPrice: number, minPrice: number): Observable<CourseEditionFull[]> {
            return this.http.get<CourseEditionFull[]>(`${this.courseEditionUrl}?minPrice=${minPrice}&maxPrice=${maxPrice}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      // dato l'id del corso mi restituisce le edizioni
      getEditionsByCourseId(id: number): Observable<CourseEditionFull[]> {
            return this.http.get<CourseEditionFull[]>(`${this.courseEditionUrl}?courseId=${id}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      // dato un booleano mi restituisce tutte le edizioni nel futuro
      getEditionInTheFuture(bool: boolean): Observable<CourseEditionFull[]> {
            return this.http.get<CourseEditionFull[]>(`${this.courseEditionUrl}?inTheFuture=${bool}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      //dato un booleano mi restituisce tutte le edizioni del passato
      getEditionInThePast(bool: boolean): Observable<CourseEditionFull[]> {
            return this.http.get<CourseEditionFull[]>(`${this.courseEditionUrl}?inThePast=${bool}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      // dato il titolo del corso mi restituisce le edizioni di cui ne fa parte 
      getEditionsByCourseTitle(title: string): Observable<CourseEditionFull[]> {
            return this.http.get<CourseEditionFull[]>(`${this.courseEditionUrl}?courseTitle=${title}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      // dato l'id dell'insegnante mi restituisce le edizioni corso
      getEditionsByTeacherId(id: number): Observable<CourseEditionFull[]> {
            return this.http.get<CourseEditionFull[]>(`${this.courseEditionUrl}?instructorId=${id}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      // dato il fullname dell'istruttore restituisce le edizioni
      getEditionsByInstructorFullName(fullname: string): Observable<CourseEditionFull[]> {
            return this.http.get<CourseEditionFull[]>(`${this.courseEditionUrl}?instructorFullName=${fullname}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      // dato il FirstName dell'istruttore restituisce le edizioni
      getEditionsByInstructorFirstName(firstname: string): Observable<CourseEditionFull[]> {
            return this.http.get<CourseEditionFull[]>(`${this.courseEditionUrl}?instructorFirstName=${firstname}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      // dato il LastName dell'istruttore restituisce le edizioni
      getEditionsByInstructorLastName(lastname: string): Observable<CourseEditionFull[]> {
            return this.http.get<CourseEditionFull[]>(`${this.courseEditionUrl}?instructorLastName=${lastname}`)
                  .pipe(tap(data => console.log(JSON.stringify(data))),
                        catchError(this.handleError)
                  );
      }

      // funzione di ricerca: mette insieme tutte le query che sono state fatte, si prendono le informazioni nei filtri (js)
      // e si aggiungono all'url le relative queryString e si fa una sola domanda al back-end.
      /*
      getQueryFromSearch():Observable<CourseEdition[]>{

      }
      */
      

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