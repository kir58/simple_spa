import { Component } from '../../framework';

class About extends Component {}

const AboutPage = new About({
  selector: 'app-about-page',
  template: `
        <div style="padding: 20px;">
        <div style="display: flex; align-items: center;" >
            <a href="/"><-goBack</a>
            <h1 style="margin-left: 30px">About</h1>
        </div>
        <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Title</span>
              <p>Any static text.</p>
            </div>
            <div class="card-action">
              <a href="#">go to menu</a>
              <a href="#">go to menu</a>
            </div>
          </div>
        </div>
      </div>
        </div>
        </div>`,
});

export default AboutPage;
