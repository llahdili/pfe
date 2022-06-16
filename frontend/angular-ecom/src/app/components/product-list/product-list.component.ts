import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  //templateUrl: './product-list-table.component.html',
  //templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId: number = 1;
  previuosCategoryId: number = 1;
  searchMode: boolean = false;

  // new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 10;
  totalElements: number = 0;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });

  }
  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchProducts();
    }
    else {
      this.handleListProducts();
    }

  }
  handleSearchProducts() {

   // dart had method makhdamatch
     const theKeyword = this.route.snapshot.paramMap.getAll('keyword');
    // now search products using the keyword !!
    this.productService.searchProducts(theKeyword).subscribe(
      data =>{
        this.products = data;
      }
    )
  }
  handleListProducts() {
    // check if ID exist
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      //get the id and convert to number using '+' 
      // this commande method worked too this.route.snapshot.paramMap.getAll('id');
      this.currentCategoryId = +this.route.snapshot.params['id'];

      console.log("----------", this.currentCategoryId)
    }
    else {
      // is not has ID give it defaukt ID = 1
      this.currentCategoryId = 1;
    }
    // Check if we different category than previuos... if yes we back to page 1
     if(this.previuosCategoryId != this.currentCategoryId){
      this.thePageNumber = 1;
     }
    
     this.previuosCategoryId = this.currentCategoryId
      console.log(`currentCategoryId= ${this.currentCategoryId},
                   thePageNulber= ${this.thePageNumber}`)
    // now get the product for the given id
    this.productService.getProductListPaginate(this.thePageNumber - 1,
                                               this.thePageSize,
                                               this.currentCategoryId)
                                               .subscribe(this.processResult());

                                               
  }
  processResult(){
    data =>{
      return this.thePageSize = data.number;
    }
  }
}



