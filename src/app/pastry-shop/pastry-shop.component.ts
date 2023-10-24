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
      <footer fxLayout="row" fxLayoutAlign="center center">
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
    }
    .flex-item.footer{
      text-align: center;
    }
 ` ]
})
export class PastryShopComponent {
  currentYear: Date = new Date()
}
