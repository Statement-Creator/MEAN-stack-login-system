import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getLoginPageCall();
  }
  loginData;
  toggleVar: boolean= true;
  getLoginPageCall(){
    this.dataService.getLoginPage().subscribe(data=>{ this.loginData = data; if(data){ this.toggleVar = !this.toggleVar} })
  }

}
