import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user:User=new User();
  constructor(private service:ServiceService,private router:Router){}

  RegisterUser(){
    this.service.registeruser(this.user).subscribe({
      next: (res) =>{
        console.log(res);
         this.router.navigate(['/','login'])
      },
      error: (error) => console.error(error),
      complete: () => console.info('complete') 

  })
  }




  onSubmit(){
    console.log(this.user)
    this.RegisterUser();
  }


}
