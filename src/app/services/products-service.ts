import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  poster: string;
  title: string;
  developer: string;
  publisher: string;
  released: number;
  description: string;
  tags: string[];
  reviews: string;
  price: string;
} 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
  {
    id: 1,
    poster: "https://i.ytimg.com/vi/58zeu7HA4cA/maxresdefault.jpg",
    title: "Raft",
    developer: "Redbeet Interactive",
    publisher: "Axolot Games",
    released: 2022,
    description: "Raft™ throws you and your friends into an epic oceanic adventure! Alone or together, players battle to survive a perilous voyage across a vast sea! Gather debris, scavenge reefs and build your own floating home, but be wary of the man-eating sharks!",
    tags: ["Survival", "Multiplayer", "Co-op"],
    reviews: "Very Positive (93% of 124,131)",
    price: "6.67$", 
  }
];

getProducts(): Observable<Product[]>{
  return of (this.products);
}

}
