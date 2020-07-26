import { Component } from '../framework';
import './style.scss';

class AppComponent extends Component {}

export default new AppComponent({
  selector: 'app-root',
  template: `
        <router-outlet>
        </router-outlet>   
    `,
});
