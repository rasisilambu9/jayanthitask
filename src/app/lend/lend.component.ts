import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-lend',
  templateUrl: './lend.component.html',
  styleUrls: ['./lend.component.css']
})
export class LendComponent implements OnInit {
  foods: Food[] = [
    {value: '', viewValue: 'C-Programming'},
    {value: 'pizza-1', viewValue: 'Java'},
    {value: 'tacos-2', viewValue: 'OS'},
    {value: 'tacos-2', viewValue: 'Physics'},
    {value: 'tacos-2', viewValue: 'Maths'},
    {value: 'tacos-2', viewValue: 'Angular JS'},
    {value: 'tacos-2', viewValue: 'React JS'},
    {value: 'tacos-2', viewValue: 'Web Development'},
    {value: 'tacos-2', viewValue: 'Cyber Security'},
    {value: 'tacos-2', viewValue: 'AWS'},
  ];
  constructor() { }

  ngOnInit(): void {
    $('.lendbutton').click(function(){
      var username = $('.name').val();
      if(username==""){
        alert('please fill required fields');
      }else{
      alert("Book Successfully lend to "+username);}
    });
  }

}
