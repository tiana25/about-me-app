import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css']
})
export class CvItemComponent implements OnInit {


  location:string = "Kyiv, Ukraine";

  constructor() { }

  ngOnInit(): void {
  }

}
