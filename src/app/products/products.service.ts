import { Injectable } from '@angular/core';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    {
      id: 'p1',
      title: 'Frosted Flakes',
      imageURL: 'https://target.scene7.com/is/image/Target/GUEST_a5bb9ac6-ebfb-47fc-b1a0-7fe6f46fc874?wid=488&hei=488&fmt=pjpeg',
      ingredients: ['Frosted Flakes']
    },
    {
      id: 'p2',
      title: 'Arizona Iced Tea',
      imageURL: 'https://images.heb.com/is/image/HEBGrocery/001660037',
      ingredients: ['Arizona Iced Tea']
    }
  ];

  constructor() { }

  getAllProducts() {
    return {...this.products};
  }

  getProduct(productId: string) {
    return {...this.products.find(product =>product.id === productId)};
  }
}
