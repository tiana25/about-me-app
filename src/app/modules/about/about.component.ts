import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  skills =[
    {skill:"HTML5, CSS3, JavaScript, JQuery", val:90},
    {skill:"Sass, Less", val:80},
    {skill:"Experience with .NET", val:60},
    {skill:"Experience with SQL database", val:70},
    {skill:"Experience with C++ and Java", val:70},
    {skill:"Algorithms and Data Structures", val:65}
  ]
  languages=[
    {lan:"English", val:90},
    {lan:"Ukrainian", val:100},
    {lan:"Russian", val:100}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
