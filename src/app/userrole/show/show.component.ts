import { Component, OnInit } from '@angular/core';




export interface UserRoles {
  Id: any;
  Description: string;
}

const ELEMENT_DATA: UserRoles[] = [
  {Id: 1, Description: 'ForeMan'},
  {Id: 2, Description: 'Administration'},
  
];

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})


export class ShowComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Description', 'Delete'];
  data: any;

  constructor() { }

  ngOnInit(): void {
    this.data = ELEMENT_DATA;
  }

  

  
 
   
  


  
}


