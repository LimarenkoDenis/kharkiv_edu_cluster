import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content: Observable<any>;

  constructor(db: AngularFireDatabase) {
    this.content = db.list('CONTENT').valueChanges().pipe(
      map((items) => items[0])
    );
  }
}
