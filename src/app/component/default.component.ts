import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  template: '<div><h3> This is {{title}} </h3></div>',
  styleUrls: []
})
export class DefaultComponent implements OnInit {
  isLoading: boolean  
  title = 'My-first-angular-app Default Page';
  ngOnInit(){
      console.log('Inside default component');
      this.isLoading = false;
  }
}