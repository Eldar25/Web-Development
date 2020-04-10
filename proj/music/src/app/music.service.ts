import { Injectable } from '@angular/core';
import {musics} from './music';
import {Observable, of, from} from 'rxjs';
import{Music} from '../app/music'
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';




@Injectable({
    providedIn: 'root'
  })

  export class MusicService {

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    private musicsUrl= 'all';
    musics=musics;
    musicsRait = musics;
    constructor(
      private http: HttpClient,
      private messageService: MessageService
    ) { }
    getMusics(): Observable<Music[]> {
      return this.http.get<Music[]>(this.musicsUrl)
      .pipe(
        tap(_=>this.log('fetched musics')),
        catchError(this.handleError<Music[]>('getmusics',[]))
      );
    }
    
  
    getBestMusic(): Observable<Music[]> {
      function sortByRating(arr){
        arr.sort((a, b) => a.rating > b.rating ? 1 : -1);
      }
      sortByRating(this.musicsRait);
      this.musicsRait.reverse();
      return of(this.musicsRait)

    }
    getMusic(id:number):Observable<Music>{
      const url = `${this.musicsUrl}/${id}`;
      return this.http.get<Music>(url).pipe(
        tap(_ => this.log(`fetched music id=${id}`)),
        catchError(this.handleError<Music>(`getMusic id=${id}`))
      );
    }


    addMusic (music: Music): Observable<Music> {
      return this.http.post<Music>(this.musicsUrl, music, this.httpOptions).pipe(
        tap((newMusic: Music) => this.log(`added hero w/ id=${newMusic.id}`)),
        catchError(this.handleError<Music>('addMusic'))
      );
    }

    deleteMusic (music: Music | number): Observable<Music> {
      const id = typeof music === 'number' ? music : music.id;
      const url = `${this.musicsUrl}/${id}`;
  
      return this.http.delete<Music>(url, this.httpOptions).pipe(
        tap(_ => this.log(`deleted music id=${id}`)),
        catchError(this.handleError<Music>('deleteMusic'))
      );
    }
    
    updateMusic (music: Music): Observable<Music> {
      return this.http.put(this.musicsUrl, music, this.httpOptions).pipe(
        tap(_ => this.log(`updated music id=${music.id}`)),
        catchError(this.handleError<any>('updateMusic'))
      );
    }



    searchMusics(term: string): Observable<Music[]> {
      if (!term.trim()) {
        return of([]);
      }
      return this.http.get<Music[]>(`${this.musicsUrl}/?name=${term}`).pipe(
        tap(x => x.length ?
           this.log(`found musics matching "${term}"`) :
           this.log(`no musics matching "${term}"`)),
        catchError(this.handleError<Music[]>('searchMusics', []))
      );
    }
    




    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`MusicService: ${message}`);
  }
    
  }
  