import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingController, ToastController } from '@ionic/angular';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegister: FormGroup;

  constructor(
    private statusBar: StatusBar,
    private fb: FormBuilder,
    private router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public restService : RestService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formRegister = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      password: [''],
      confirm_password: [''],
    });
  }

  register() {

    let body = {
      name: this.formRegister.get('name').value,
      phone: this.formRegister.get('phone').value,
      email: this.formRegister.get('email').value,
      password: this.formRegister.get('password').value
    };
    this.restService.postUser(body).then((res)=>{
      console.log(res);
      this.router.navigate(['/login'])
    }).catch((err)=>{
      console.error(err);
    });
  }

}
