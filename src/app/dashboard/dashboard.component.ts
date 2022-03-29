import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/models/user.model';
import { DashboardService } from './dashboard.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  favouriteMovies: string[] = [];

  userInfo?: UserModel;
  constructor(private dashboardService: DashboardService) {}
 
  ngOnInit(): void {
    this.dashboardService.getMovies().subscribe({
      next: (data) => (this.favouriteMovies = data),
    });
  }
}