import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-our-project',
  templateUrl: './our-project.component.html',
  styleUrls: ['./our-project.component.css']
})
export class OurProjectComponent{
  content: Observable<any>;

  constructor(db: AngularFireDatabase) {
    this.content = db.list('CONTENT').valueChanges().pipe(
      map((items) => items[3])
    );
  }
}
