import { Component, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { IProducts } from 'src/app/shared/products';

@Component({
  selector: 'carousel',
  template: `
    <div class="carousel-container">
      <div class="carousel-wrap" #carouselWrap>
          <div class="carousel-main">
              <mat-card class="carousel-item" *ngFor="let card of cards">
                  <mat-card-header>
                      <mat-card-title>{{ card.title }}</mat-card-title>
                      <mat-card-subtitle>{{ card.subtitle }}</mat-card-subtitle>
                  </mat-card-header>
                  <div class="carousel-img">
                    <img mat-card-xl-image src="{{ card.imageUrl }}" (click)="revealContent($event)" alt="Photo of a Shiba Inu">
                  </div>
                  <mat-card-content>
                      <p>{{ card.content }}</p>
                  </mat-card-content>
              </mat-card>
          </div>
          
      </div>
      <a class="carousel-control-next" (click)="slideImages($event, 'next')" role="button" data-slide="next">
          <mat-icon> arrow_forward_ios </mat-icon>
      </a>
      <a class="carousel-control-prev" (click)="slideImages($event, 'prev')" role="button" data-slide="prev">
          <mat-icon> arrow_back_ios </mat-icon>
      </a>
</div>
  `,
  styleUrls: [`./carousel.component.css`]
})
export class CarouselComponent implements OnInit {
  @Input() cards: IProducts[] = []
  private screenSiz$: { [key: string]: string } = {}
  private carouselItems: HTMLElement[] = []


  constructor(private breakpointObserver: BreakpointObserver, private el: ElementRef) { }

  /**
   * Returns the focused carousel items.
   *
   * @param carouselItems An array of carousel item elements.
   * @returns An array of focused carousel item elements.
   */
  getFocusedCarouselItems(carouselItems: HTMLElement[]): HTMLElement[] {
    const focusedCarouselItems: HTMLElement[] = [];
    for (const carouselItem of carouselItems) {
      // Get the boundingClientRect of the carousel item.
      const boundingClientRect = carouselItem.getBoundingClientRect();

      // Check if the boundingClientRect of the carousel item is visible.
      if (
        boundingClientRect.top >= 0 &&
        boundingClientRect.left >= 0 &&
        boundingClientRect.bottom <= window.innerHeight &&
        boundingClientRect.right <= window.innerWidth
      ) {
        // Add the carousel item to the array of focused carousel items
        focusedCarouselItems.push(carouselItem);
      }
    }
    // Return the array of focused carousel items.
    return focusedCarouselItems;
  }

  @HostListener('click', ['$event'])
  slideImages(event: MouseEvent, direction: string) {
    const carouselContainer = this.el.nativeElement.querySelector('.carousel-container')
    const carouselMain = this.el.nativeElement.querySelector('.carousel-main')

    const focusedProduct = this.getFocusedCarouselItems(this.carouselItems)[0]
    const focusedProductIndex = Array.from(carouselContainer.querySelectorAll('.carousel-item')).indexOf(focusedProduct)

    switch (direction) {
      case 'next':
        carouselMain.append(this.carouselItems[0])
        break;
      case 'prev':
        carouselMain.prepend(this.carouselItems[this.carouselItems.length - 1])
        break;

      default:
        break;
    }
  }

  @HostListener('over', ['$event'])
  revealContent(event: MouseEvent) {
    // Get the image element that was clicked.
    const clickedImage: HTMLElement = event.target as HTMLElement;

    // Add clicked or remove the `active` class to the image element that was .
    if (clickedImage.classList.contains('active')) {
      clickedImage.classList.remove('active');
    } else {
      // Remove the `active` class from all image elements.
      document.querySelectorAll('.carousel-img>img').forEach(img => img.classList.remove('active'));

      //Now add it to the clicked image
      clickedImage.classList.add('active');
    }
  }

  ngOnInit(): void {

    this.carouselItems = this.el.nativeElement.getElementsByClassName('carousel-item')
  }
}