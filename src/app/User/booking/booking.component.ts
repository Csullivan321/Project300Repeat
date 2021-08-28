import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { mybookingmodel } from '../../Models/mybookingmodel';
import { myRoommodel } from '../../Models/myRoommodel';
import { RoomlistService } from '../../Services/roomlist.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  rooms: myRoommodel[]= []
  @Input() booking: mybookingmodel;

  Type: string = "";
  hoveredDate: NgbDate | null = null;

  fromDate: Date;
  toDate: Date | null = null;

  constructor(calendar: NgbCalendar, private Roomservice: RoomlistService) {
    this.fromDate = new Date(calendar.getToday().year, calendar.getToday().month -1, calendar.getToday().day);
    const toDateRaw = calendar.getNext(calendar.getToday(), 'd', 10);
    this.toDate = new Date(toDateRaw.year, toDateRaw.month -1, toDateRaw.day);
    this.booking = { id: 0, Type: '', Price: 0, Number: 0, DateFrom: new Date(), DateTo: new Date(), Email: '' }
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = new Date(date.year, date.month -1, date.day);
    } else if (this.fromDate && !this.toDate && date.after(new NgbDate(this.fromDate.getFullYear(), this.fromDate.getMonth(), this.fromDate.getDay()))) {
      this.toDate = new Date(date.year, date.month -1, date.day);
    } else {
      this.toDate = null;
      this.fromDate = new Date(date.year, date.month -1, date.day);
    }
    console.log(this.fromDate.toLocaleDateString())
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(new NgbDate(this.fromDate.getFullYear(), this.fromDate.getMonth(), this.fromDate.getDay())) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(new NgbDate(this.fromDate.getFullYear(), this.fromDate.getMonth(), this.fromDate.getDay())) && date.before(new NgbDate(this.toDate.getFullYear(), this.toDate.getMonth(), this.toDate.getDay()));
  }

  isRange(date: NgbDate) {
    return date.equals(new NgbDate(this.fromDate.getFullYear(), this.fromDate.getMonth(), this.fromDate.getDay())) || (this.toDate && date.equals(new NgbDate(this.toDate.getFullYear(), this.toDate.getMonth(), this.toDate.getDay()))) || this.isInside(date) || this.isHovered(date);
  }

  setType(type:string) {
    this.Type = type;
  }

  getRooms() {
    if (this.toDate != null) {
      this.Roomservice.ReadAllRooms(this.fromDate.toISOString(), this.toDate != null ? this.toDate.toISOString() : "", this.Type).subscribe(x => {
        console.log(x)
        this.rooms = x
        
      })
    }
    else 
      console.log("Must fill out both date fields")
  }

  ngOnInit(): void {
  }

}
