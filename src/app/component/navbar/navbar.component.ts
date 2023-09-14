import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  local:any

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.local = localStorage
  }

  logout(){

    localStorage.clear()
    localStorage.removeItem('token')
    localStorage.removeItem('loggedin')
    location.reload()
    this.route.navigate(['/login']);
  }
}
