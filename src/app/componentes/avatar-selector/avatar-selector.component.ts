import { Avatar } from './../../interfaces/interfaces';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss'],
})
export class AvatarSelectorComponent implements OnInit {

  @Output() avatarSel = new EventEmitter<string>();
  avatars:Avatar[]= [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
  ];

  avatarSlide={
    slidesPerView:3.5
  };

  constructor() { }

  ngOnInit() {}


  seleccionaAvatar(item:Avatar){
    this.avatars.forEach(av=>av.seleccionado=false);
    item.seleccionado=true;

    console.log(item.img);
    this.avatarSel.emit(item.img);
  }
}
