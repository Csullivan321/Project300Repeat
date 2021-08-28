import { Component, OnInit } from '@angular/core';
import { mybookingmodel } from '../../Models/mybookingmodel';
import { RoomlistService } from '../../Services/roomlist.service';

@Component({
  selector: 'app-managebookings',
  templateUrl: './managebookings.component.html',
  styleUrls: ['./managebookings.component.css']
})
export class ManagebookingsComponent implements OnInit {
  bookings: mybookingmodel[] = []

  constructor(private bookingservice: RoomlistService) { }

  getBookings(){
    this.bookingservice.ReadBookings().subscribe(x => {
      console.log(x)
      this.bookings = x
      
    })
  }

  ngOnInit(): void {
  }

}
