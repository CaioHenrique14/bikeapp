import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeolocationOptions, Geoposition,Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController, ToastController } from '@ionic/angular';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-parking-local',
  templateUrl: './parking-local.page.html',
  styleUrls: ['./parking-local.page.scss'],
})
export class ParkingLocalPage implements OnInit {

  form: FormGroup;
  map: any;
  geocoder: any;
  options: GeolocationOptions;
  currentPos: Geoposition;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public restService : RestService,
    public geolocation: Geolocation
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      latitude: [''],
      longitude: ['']
    });
  }

  ionViewWillEnter() {
    this.getUserPosition();
  }

  getUserPosition(){
    this.options = {
    enableHighAccuracy : false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos;     

        console.log(pos);
  
        this.form.get('latitude').setValue(pos.coords.latitude)
        this.form.get('longitude').setValue(pos.coords.longitude);
    },(err : PositionError)=>{
        console.log("error : " + err.message);
    ;
    })
}

  register() {

    let body = {
      name: this.form.get('name').value,
      description: this.form.get('description').value,
      latitude: this.form.get('latitude').value,
      longitude: this.form.get('longitude').value
    };
    this.restService.postPlaces(body).then((res)=>{
      console.log(res);
      this.router.navigate(['/home'])
    }).catch((err)=>{
      console.error(err);
    });
  }

}
