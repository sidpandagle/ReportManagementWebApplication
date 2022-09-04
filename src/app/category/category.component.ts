import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Category } from '../_models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  constructor(private api: ApiService) { 
    this.categories = [];
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.api.getCategories().subscribe((res:any)=>{
      this.categories = res;
    })
  }

}
