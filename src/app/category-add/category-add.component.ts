import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { CreateCategory } from '../_models/category';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  title: CreateCategory;
  
  constructor(private router: Router, private api: ApiService) { 
    this.title = new CreateCategory();  
  }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['/category'])
  }

  addCategory(){
    this.api.createCategory(this.title).subscribe(res=>{
      console.log(res)
    })
  }

}