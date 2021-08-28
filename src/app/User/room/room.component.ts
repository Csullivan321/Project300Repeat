import { Component, Input, OnInit } from '@angular/core';
import { myRoommodel } from '../../Models/myRoommodel';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() room: myRoommodel 

  constructor() {
    this.room = {Type :"", Price: 0, Number: 0}
   }

  ngOnInit(): void {
  }

}
