import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-p',
  templateUrl: './search-p.component.html',
  styleUrls: ['./search-p.component.css']
})
export class SearchPComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  doSearch(value: String){
    console.log(`value =${value}`);
    this.router.navigateByUrl(`search-p/${value}`); 
  }
}
