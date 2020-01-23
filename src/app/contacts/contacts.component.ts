import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  content: Observable<any>;

  constructor(db: AngularFireDatabase) {
    this.content = db.list('CONTENT').valueChanges().pipe(
      map((items) => items[6])
    );
  }
}
