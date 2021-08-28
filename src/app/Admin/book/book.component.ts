import { Component, Input, OnInit } from '@angular/core';
import { mybookingmodel } from '../../Models/mybookingmodel';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: mybookingmodel

  constructor() { 
    this.book = {id:0, Type: "", Price:0, Number:0, DateFrom: new Date(), DateTo: new Date(), Email: ''  }
  }

  ngOnInit(): void {
  }

  Delete() {}

}
