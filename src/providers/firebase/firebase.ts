import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public db: AngularFireDatabase) { }
 
  getSensor1() {
    return this.db.list('/Monitoring/Sensor1');
  }

  getSensor2() {
    return this.db.list('/Monitoring/Sensor2');
  }

  getSensor3() {
    return this.db.list('/Monitoring/Sensor3');
  }

  getSensor4() {
    return this.db.list('/Monitoring/Sensor4');
  }

  getSensor5() {
    return this.db.list('/Monitoring/Sensor5');
  }
 
  addItem(name) {
    this.db.list('/shoppingItems/').push(name);
  }
 
  removeItem(id) {
    this.db.list('/shoppingItems/').remove(id);
  }

}
