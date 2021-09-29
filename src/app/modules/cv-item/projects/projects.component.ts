import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects=[
    {title:'ATM application', imgUrl:"../../../../assets/img/atm_proj.png", content:'Creating an ATM-like system that allows the bank user to control their accounts, replenish accounts, withdraw funds, create transfers between cards (their own and others).'},
    {title:'Avocado App', imgUrl:"../../../../assets/img/avocado_app.jpg", content:'Avocado App helps you to easily keep track of purchases, income and expenses. This is a handy to-buy list for products to shop'},
    {title:'Task Tracker', imgUrl:"../../../../assets/img/task_tracker.jpg", content:'Task tracker app is a beautifully simple, free to do list, task list and reminder app that will help keep your busy life organized everyday.'},
    {title:'Phatic Chat', imgUrl:"../../../../assets/img/bot_app.jpg", content:'Phatic bot which communication refers to trivial and obvious exchanges about the weather and time, made up of ready-made sentences or foreseeable statements. Made using AI algorithms.'}
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
