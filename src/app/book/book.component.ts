import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'C Programming', weight: 'Reema', symbol: 'H'},
  {position: 2, name: 'Java', weight: 'Ramsri', symbol: 'He'},
  {position: 3, name: 'OS', weight: 'Govind', symbol: 'Li'},
  {position: 4, name: 'Maths', weight: 'Ramesh', symbol: 'Be'},
  {position: 5, name: 'Physics', weight: 'Prakhar', symbol: 'B'},
  {position: 6, name: 'Angular JS', weight: 'Mugunthan', symbol: 'C'},
  {position: 7, name: 'React JS', weight: 'Kunal', symbol: 'N'},
  {position: 8, name: 'Web development', weight: 'savita', symbol: 'O'},
  {position: 9, name: 'Cyber Security', weight: 'sathya', symbol: 'F'},
  {position: 10, name: 'AWS', weight:'Sanya', symbol: 'Ne'},
];


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}
