import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  Description: any;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  userRoleForm  = this.formBuilder.group({
    Description: ['']
  })

}
