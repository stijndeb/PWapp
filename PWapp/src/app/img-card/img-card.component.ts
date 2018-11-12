import { Component, OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  private api: string = 'https://dog.ceo/api/breeds/image/random';  

  public src: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.generateSrc();
  }

  generateSrc(): void {
    this.getPic().subscribe((data: any) => {
      // console.log(data);
      this.src = data.message;
     });

  }

  getPic(){
    return this.http.get(this.api);
  }

  

}
