import { Component } from '@angular/core';

@Component({
  selector: 'pastry-shop',
  template: `
    <div fxFill fxLayout="column">
      <header class="flex-item header">
        <toolbar></toolbar>
      </header>
      <main class="flex-item main" fxFlex="80">
        <router-outlet></router-outlet>
      </main>
      <footer fxFlex fxLayout="row" fxLayoutAlign="center center">
          <div class="footer">
            <p>&copy; {{ this.currentYear.getFullYear() }} SweeTooth</p>
          </div>
      </footer>
    </div>
  `,
  styles: [`
    .flex-items{
      width:100%;
    }
    .flex-item.header{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2;
    }
    .flex-item.main{
      margin-top: 6rem;
      padding:2.1rem;
      overflow-y: auto;
      text-align:justify;
      background-image: linear-gradient(to top, #F7E1D7, #E9E9E9, #ff9dc5 );
    }
    footer{
      background-image: linear-gradient(11deg, #76c6bb, #a6abaf, #b5ad7f, transparent );
      color: white;
    }
    .flex-item.footer{
      text-align: center;
    }
 ` ]
})
export class PastryShopComponent {
  currentYear: Date = new Date()
}
