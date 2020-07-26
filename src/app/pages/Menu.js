import { Component } from '../../framework';

class Menu extends Component {}

const MenuPage = new Menu({
  selector: 'app-menu-page',
  template: `
            <nav class="teal teal lighten-1">
              <div class="nav-wrapper" style="margin-left: 20px">
                <a href="#" class="brand-logo superTitleS">SimpleSPA</a>
                <ul class="right hide-on-med-and-down">
                  <li><a href="#items">Items</a></li>
                  <li><a href="#about">About</a></li>
                </ul>
              </div>
          </nav>`,
});

export default MenuPage;
