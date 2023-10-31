import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() products = PRODUCTS

  constructor() { }

  ngOnInit(): void {
  }
}

const PRODUCTS = [
  {
    title: 'Pink Sprinkle Cupcakes',
    subtitle: 'Indulge in the sweetness and fun.',
    imageUrl: 'https://mouradabla.github.io/MunamiiCakery/images/pink-cupcake.jpg',
    content: `The moist and fluffy cake is topped with a generous swirl of sweet and creamy pink frosting and plenty of pink sprinkles. It's the perfect treat for any occasion, especially birthdays, Valentine's Day, and baby showers!`
  },
  {
    title: 'Red Velvet Cupcake',
    subtitle: 'Indulge in the classic flavor of a red velvet cupcake.',
    imageUrl: 'https://mouradabla.github.io/MunamiiCakery/images/redvelvet-cupcake.jpg',
    content: `Our cupcakes are made with the freshest ingredients and baked to perfection. Enjoy one today and experience the
    deliciousness for yourself!`
  },
  {
    title: 'Chocolate Cupcake',
    subtitle: 'Satisfy your sweet tooth with our delicious chocolate cupcake.',
    imageUrl: 'https://mouradabla.github.io/MunamiiCakery/images/chocolate-cupcake.jpg',
    content: `The moist and fluffy cake is topped with a generous
    swirl of sweet and creamy frosting and a fresh ingredients. It's the perfect treat for any occasion!`
  },
  {
    title: 'Fluffy White Icing Cupcakes',
    subtitle: 'Indulge in the light and fluffy goodness of our white icing cupcakes.',
    imageUrl: 'https://images.unsplash.com/photo-1615837136007-701de6015cfb?auto=format&fit=crop&q=80&w=2187&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `These cupcakes are made with
    the freshest ingredients and baked to perfection. The moist and fluffy cake is topped with a generous swirl of sweet and
    creamy white icing. It's the perfect treat for any occasion!`
  },
  {
    title: 'Card 5',
    subtitle: 'This is the fifth card.',
    imageUrl: 'https://images.unsplash.com/photo-1593187623747-7ea827ad1013?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: 'This is the content of the fifth card.'
  },
  {
    title: 'Card 6',
    subtitle: 'This is the fifth card.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1678310877551-396c3953c79e?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: 'This is the content of the fifth card.'
  },
  {
    title: 'Card 7',
    subtitle: 'This is the fifth card.',
    imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: 'This is the content of the fifth card.'
  },
];