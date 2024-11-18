import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import * as ProductList from  "../../src/JsonFiles/product-list.json";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  productList :any[]=[];
  // 10 sample cards
  // cards = Array.from({ length: 10 }, (_, i) => ({
  //   title: `Card ${i + 1}`,
  //   image: `https://via.placeholder.com/150?text=Image+${i + 1}`, // Placeholder images
  //   description: `This is the description for card ${i + 1}.`,
  // }));
  cards = [
    {
      "skuId": "MUS-SIN-S-1",
      "commonName": "Yellow Mustard Powder",
      "route":"Mustard_Seed_Extract",
      "shortDescription": "It is used for its antimicrobial and anti-inflammatory properties.",
      "smallImageURL": "../../../../assets/Images/Yellow Mustard powder.png",
      "subCategory" : "S002",
      "category" : "C002",
      "color" :"#009DC4"
    },
    {
      "skuId": "CRA-VAC-F-1",
      "commonName": "Cranberry Extract",
      "route":"Cranberry_Extracts",
      "shortDescription": "These are used for urinary tract health and to prevent urinary tract infections (UTIs).",
      "smallImageURL": "../../../../assets/Images/cranb.png",
      "subCategory" : "S001",
      "category" : "C002",
      "isDisplay": "true",
      "color": "#AD804B"
    },
    {
      "skuId": "HEM-CAN-S-1",
      "commonName": "Hemp Seed Oil",
      "shortDescription": "It is moisturizing and rich in essential fatty acids.",
      "smallImageURL": "../../../../assets/Images/hempseed_oil.png",
      "subCategory" : "S005",
      "category" : "C002",
      "color" :"#009DC4"
  },
  {
      "skuId": "HIB-HIB-F-1",
      "commonName": "Hibiscus Flower Extract",
      "shortDescription": "It is used for its antioxidant and skin-nourishing benefits.",
      "smallImageURL": "../../../../assets/Images/HibiscusFlowers.png",
      "subCategory" : "S002",
      "category" : "C002",
      "color" :"#009DC4"
    },
    {
      "skuId": "JOJ-SIM-S-1",
      "commonName": "Jojoba Oil",
      "shortDescription": "It is used for its moisturizing and skin-protecting properties.",
      "smallImageURL": "../../../../assets/Images/JOJOBA.png",
      "subCategory" : "S005",
      "category" : "C002",
      "color" :"#009DC4"
  },
  {
      "skuId": "PUS-INU-R-1",
      "commonName": "Pushkarmool Extract",
      "route":"Pushkarmool_Extract",
      "shortDescription": "It is known for its anti-inflammatory and respiratory benefits.",
      "smallImageURL": "../../../../assets/Images/pushkarmool.png",
      "subCategory" : "S002",
      "category" : "C002",
      "color" :"#009DC4"
    },
    {
      "skuId": "RAS-RUB-F-1",
      "commonName": "Raspberry Extract",
      "shortDescription": "It is rich in antioxidants and used for its health benefits.",
      "smallImageURL": "../../../../assets/Images/RAS.png",
      "subCategory" : "S001",
      "category" : "C002",
      "color":"#009DC4"
    },
    {
      "skuId": "XYL-TRI-REE-902",
      "commonName": "Xylanase",
      "shortDescription": "It is an enzyme used in baking, animal feed, and paper production.",
      "smallImageURL": "../../../../assets/Images/XYLANASE.png",
      "subCategory" : "S021",
      "category" : "C001",
      "color" :"#009DC4"
    },
  ]
  constructor(){
    this.productList = ProductList
  }
//  console.log(this.productList);
  // Swiper configuration for multiple slides
  swiperConfig = {
    slidesPerView: 4, // Number of cards visible at a time
    spaceBetween: 40,
    loop: false,
    pagination: { clickable: true },
    navigation: true,
  };
}
