import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  likes = 0;

  constructor() {
  }

  // tslint:disable-next-line:typedef
  likeThis() {
    this.likes++;
  }

  ngOnInit(): void {
  }

}
