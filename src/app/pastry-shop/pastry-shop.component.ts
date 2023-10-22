import { Component } from '@angular/core';

@Component({
  selector: 'pastry-shop',
  template: `
    <div class="flex-container">
      <header class="flex-item">
        <toolbar></toolbar>
      </header>
      <main class="flex-item main">
        <router-outlet></router-outlet>
      </main>
      <footer  class="flex-item footer" >
          <div class="footer">
            <p>&copy; {{ this.currentYear.getFullYear() }} SweeTooth</p>
          </div>
      </footer>
    </div>
  `,
  styles: [`
    .flex-container{
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100%;
      height: 100%;
      align-items: center;
      justify-content: space-between;
    }
    .flex-item{
      width:100%;
    }
    .flex-item.main{
      flex: 1 1 auto;
    }
    .flex-item.footer{
      text-align: center;
    }
 ` ]
})
export class PastryShopComponent {
  currentYear: Date = new Date()
}
