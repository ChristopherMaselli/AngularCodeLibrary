import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'], //Whichever style is last is used, nothing from previous at all is used!
  encapsulation: ViewEncapsulation.Emulated, //Emulates Shadow Dom, is default
  
  styles: [
    `
    .glyphicon {
      color: green;
    }


    .glyphicon-star {
      background: black;
    }
    `
  ]
  /*inputs: ['isFavorite']*/
})
//export class FavoriteComponent implements OnInit {
export class FavoriteComponent {
  @Input('isFavorite') isFavorite: boolean;  
  @Output('change') change = new EventEmitter();




  //constructor() { }

  //ngOnInit(): void {
  //}

  onClick() {
    this.isFavorite = !this.isFavorite;
    //this.change.emit(this.isFavorite); //Notifies others something occured
    this.change.emit({ newValue: this.isFavorite });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
