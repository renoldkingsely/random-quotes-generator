import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'quote-generator';
  qouteJson: any;
  qouteToShow:any
  qouteIndex=0
  authorName:any
  
  constructor(private http: HttpClient) {
    this.getQuote()
   }

   getQuote() {
    
    this.http.get("https://type.fit/api/quotes").subscribe(data=>{
      this.qouteJson=data 
      this.qouteToShow=this.qouteJson[this.qouteIndex].text
      this.authorName=this.qouteJson[this.qouteIndex].author
      this.qouteIndex+=1
    })

   }

}
