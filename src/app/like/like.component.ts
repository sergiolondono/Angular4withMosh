import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number;
  @Output('change') click = new EventEmitter();

  constructor() { }

  onClick(){
    this.isActive = !this.isActive;
    this.likesCount = this.likesCount == 0 ? 1 : 0;
    this.click.emit(this.likesCount);
  }
}

export interface LikeChangedEventArgs{
  newValue: boolean
}
