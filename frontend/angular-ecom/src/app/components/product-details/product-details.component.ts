import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   
  product: Product = new Product();
  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.handleProductDetails();
    })
    
    
  }
  handleProductDetails() {
   
    // get the id param String and convert to number
    
    // this getAll is suss && in other way has('id') call always the first id
   
      //this.route.snapshot.paramMap.getAll('id');
     const theProductId = +this.route.snapshot.paramMap.has('id');
    
     this.productService.getProduct(theProductId).subscribe(
        data =>{
          this.product = data;
          console.log(this.product.name + "--------------------------")
        }
      )
  }

}
