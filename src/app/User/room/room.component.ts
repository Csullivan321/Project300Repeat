import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomlistService } from 'src/app/Services/roomlist.service';
import { myRoommodel } from '../../Models/myRoommodel';
import { mybookingmodel } from '../../Models/mybookingmodel';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() room: myRoommodel 
  @Input() dateFrom: Date
  @Input() dateTo: Date | null
  @Output() SearchAgain = new EventEmitter()

  constructor(private Roomservice: RoomlistService) {
    this.room = {Type :"", Price: 0, Number: 0}
    this.dateFrom = new Date()
    this.dateTo = new Date()
  }

  ngOnInit(): void {
  }
  
  Reserve(email: string) {
    const book: mybookingmodel = {
      id: Math.floor((Math.random() * 1000000000) + 1),
      DateFrom: this.dateFrom,
      DateTo: this.dateTo != null ? this.dateTo : new Date(),
      Number: this.room.Number,
      Type: this.room.Type,
      Price: this.room.Price,
      Email: email
    }
    this.Roomservice.ReserveRoom(book).subscribe(x => {
      this.SearchAgain.emit()
    })
  }

}
