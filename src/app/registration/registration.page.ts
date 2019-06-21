import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private router: Router) { }

  homePage(){
    this.router.navigate(['home'])
  }
  signUp(name, email){
    let route = "confirm/"+name+"/"+email+"/";
    alert(route);
    this.router.navigateByUrl('/confirm/gillis/');
  }
  ngOnInit() {
  }

}
