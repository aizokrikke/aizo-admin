import { Component, OnInit } from '@angular/core';
import { User } from '../../../../aizo-app/src/models/user';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-personal-menu',
  templateUrl: './personal-menu.component.html',
  styleUrls: ['./personal-menu.component.scss']
})
export class PersonalMenuComponent implements OnInit {

  faUserCircle = faUserCircle;

  public personalMenu = false;
  public ingelogd = false;
  public user: User = {
    firstname: '',
    lastname: '',
    token: '',
    role: ''
  };

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.setInlogStatus();
  }

  private setInlogStatus(): void {
    this.loginService.status().subscribe((data) => {
      this.ingelogd = (data.authenticated);
      const stored = sessionStorage.getItem('adminuser' +
        '');
      if (stored) {
        this.user = JSON.parse(stored);
      }
    });
  }

  public showMenu(): void {
    this.personalMenu = true;
  }

  public hideMenu(): void {
    this.personalMenu = false;
  }

  public handleClick(action: string): void {
    switch (action) {
      case 'inloggen': {
        this.router.navigate(['login']);
        break;
      }
      case 'home': {
        this.router.navigate(['/admin', '']);
        break;
      }
      case 'projects': {
        this.router.navigate(['/admin', 'projects']);
        break;
      }
      case 'users': {
        this.router.navigate(['/admin', 'users']);
        break;
      }      case 'uitloggen': {
        this.loginService.logout().subscribe((data) => {
          if (data === 'success') {
            this.setInlogStatus();
            this.router.navigate(['/login']);
          }
        });

        break;
      }    }
  }
}
