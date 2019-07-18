import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sensor1: FirebaseListObservable<any[]>;
  sensor2: FirebaseListObservable<any[]>;
  sensor3: FirebaseListObservable<any[]>;
  sensor4: FirebaseListObservable<any[]>;
  sensor5: FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.sensor1 = this.firebaseProvider.getSensor1();
    this.sensor2 = this.firebaseProvider.getSensor2();
    this.sensor3 = this.firebaseProvider.getSensor3();
    this.sensor4 = this.firebaseProvider.getSensor4();
    this.sensor5 = this.firebaseProvider.getSensor5();
  }

  ngOnInit() {
  }
 
  addItem() {
    this.firebaseProvider.addItem("");
  }
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

}
