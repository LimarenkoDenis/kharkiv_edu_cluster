import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.css']
})
export class OurPartnersComponent{
  content: Observable<any>;
  showButton: boolean;
  showAllPartners: boolean = true
  toShow: any[]
  toHidden: any[]

  constructor(db: AngularFireDatabase) {
    this.content = db.list('CONTENT').valueChanges().pipe(
      map((items) => items[4])
    );
    this.content.subscribe(data => {
      this.showButton = (data.OUR_PARTNERS.length <= 8) ? false : true
      this.toShow = data.OUR_PARTNERS.slice(0, 8)
      this.toHidden = data.OUR_PARTNERS.slice(8, 16)
    });
  }

  public showPartners(){
    this.showAllPartners = !this.showAllPartners
  }
}
