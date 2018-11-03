import { Component } from '@angular/core';
import {MarvelService} from './services/marvel.service';
import { Comic } from './models/comic.model';
import { MarvelResponse} from './models/marvel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'comics';
  attribution: string;
  comics: Comic[] = [];
  shown: number = 10;
  total: number = null;
  filter: string = "thor";
  likes: number = 0;

  constructor(private _marvelService: MarvelService){}
  async ngOnInit(){
    await this.refreshList();
  }
  async refreshList(){
    let response: MarvelResponse<Comic> = await this._marvelService.getComics(this.shown, this.filter);
    this.comics = response.data.results;
    this.total = response.data.total;
    this.attribution = response.attributionHTML;
  }

  async addLike(){
    this.likes++;
    

  }

  async subLike(){
    this.likes--;
  }
}
