import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent{
  content: Observable<any>;

  constructor(db: AngularFireDatabase) {
    this.content = db.list('CONTENT').valueChanges().pipe(
      map((items) => items[5])
    );
  }
}
