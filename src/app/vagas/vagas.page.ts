import { Component, Input, OnInit } from '@angular/core';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.page.html',
  styleUrls: ['./vagas.page.scss'],
})
export class VagasPage implements OnInit {
  @Input() listParking;
  @Input() spacesParking;
  constructor(
      public modalController: ModalController,
      private push: Push
    ) { }

  ngOnInit() {
    this.listParking =this.listParking[0]
    console.log(this.listParking);
    console.log(this.spacesParking.length);  
    const options: PushOptions = {
      android: {
        sound: 'true',
        senderID:'670456605354'
       },
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
   }
   
   const pushObject: PushObject = this.push.init(options);
   
   
   pushObject.on('notification').subscribe((notification: any) => {
     console.log('Received a notification', notification);
     this.ngOnInit();
  });
   
   pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
  }

  public closeModal () {
    this.modalController.dismiss();
  }

}