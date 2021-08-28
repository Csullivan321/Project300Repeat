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

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  constructor(calendar: NgbCalendar, private Roomservice: RoomlistService) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    this.booking = { id: 0, Type: '', Price: 0, Number: 0, DateFrom: new Date(), DateTo: new Date() }
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  getRooms(){
    this.Roomservice.ReadAllRooms().subscribe(x => {
      console.log(x)
      this.rooms = x
      
    })
  }

  ngOnInit(): void {
  }

}
