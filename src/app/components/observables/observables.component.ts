import { Component, OnInit } from '@angular/core';
import { tap, pluck, retry, retryWhen,delay,scan } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').pipe(
      retryWhen(err=>err.pipe(
        delay(1000),
        scan((retryCount)=>{
          if(retryCount >= 5){
            throw err;
          }else{
            retryCount++;
            console.log("Retrying: "+retryCount);
            return retryCount;
          }
        },0)
      ))
    ).subscribe((res)=>{
      console.log(res);
    },(err)=>{
      console.log("error in subscriber",err);
    });
  }

}
