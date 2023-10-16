import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/Booking';



@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _url = "http://localhost:8080/booking/";

  constructor(private http: HttpClient) { }

  getBooking(): Observable<BookingService[]> {
    return this.http.get<BookingService[]>(this._url + 'getall');
  }

  getBookingById(bookingID:any): Observable<any[]> {
    return this.http.get<any[]>( this._url + bookingID);
  }

  createBooking(booking: any): Observable<BookingService> {
    return this.http.post<BookingService>(this._url + 'create', booking);
  }

  updateBooking(booking: any): Observable<BookingService> {
    return this.http.post<BookingService>(this._url + 'update', booking);
  }
}
