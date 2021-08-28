import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { myRoommodel } from '../Models/myRoommodel';
import {mybookingmodel}from '../Models/mybookingmodel'

@Injectable({
  providedIn: 'root'
})
export class RoomlistService {
  API: string = "http://localhost:3000" 

  constructor(private http: HttpClient) { }

  ReadAllRooms(dateFrom: string, dateTo: string): Observable<myRoommodel[]>{
    return this.http.get<myRoommodel[]>(`${this.API}/routes/readallrooms?dateFrom=${dateFrom}&dateTo=${dateTo}`)
  }

  AddRoom(room: myRoommodel): Observable<myRoommodel>{
    return this.http.post<myRoommodel>(`${this.API}/routes/addRoom`, room)
  }

  ReadBookings():Observable<mybookingmodel[]>{
    return this.http.get<mybookingmodel[]>(`${this.API}/routes/readallbookings`)
  }
}
