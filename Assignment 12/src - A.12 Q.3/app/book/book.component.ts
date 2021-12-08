import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books = ["The Design of Unix Operating System", "C++ Primer Fourth Edition", "Lerning Type Script"];
  constructor() { }

  ngOnInit(): void {
  }

}
