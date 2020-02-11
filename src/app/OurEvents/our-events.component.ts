import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-our-events',
  templateUrl: './our-events.component.html',
  styleUrls: ['./our-events.component.css']
})
export class OurEventsComponent {
  content: Observable<any>;

  constructor(db: AngularFireDatabase) {
    this.content = db.list('CONTENT').valueChanges().pipe(
      map((items) => items[0])
    );
  }
}
