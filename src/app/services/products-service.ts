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
  },
  {
    id: 2,
    poster: "https://monstervine.com/wp-content/uploads/2025/06/Dispatch-Logo.jpg",
    title: "Dispatch",
    developer: "AdHoc Studio",
    publisher: "AdHoc Studio",
    released: 2025,
    description: "Dispatch is a superhero workplace comedy where your choices matter. Manage a team of troubled heroes and decide who to dispatch to emergency calls across the city while balancing office politics, personal",
    tags: ["Decisions with consequences", "Strategy"],
    reviews: "Very Positive (92% of 634)",
    price: "14.27$", 
  }
  
];

getProducts(): Observable<Product[]>{
  return of (this.products);
}

}
