import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
     private route: ActivatedRoute,
     private router: Router
  ) {
  }

  public action: string | null = '';
  public available = ['projects', 'users'];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.action = params.action;
    });
  }

  public handleClick(action: string): void {
    let route = '/admin/';
    if (action) {
      route = route + action;
    }
    this.router.navigate([route]);
  }

}
