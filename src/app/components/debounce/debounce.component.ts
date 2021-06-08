import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable} from 'rxjs';
import { debounceTime, map, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements OnInit {

  constructor(private http:HttpClient) { }

  @ViewChild('search') search!:ElementRef;
  
  ngOnInit(): void {
    
  }
  
  ngAfterViewInit():void{
    const searchElement = fromEvent<any>(this.search.nativeElement,'keyup').pipe(
      map(event=>{return event.target.value}),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((res)=>{
        return this.getApiData(res);
      })
    );

    searchElement.subscribe(res=>{
      console.log(res);
    });

  }

  getApiData(search:string):Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos?q=' + search);
  }
}
