import loggingUrles from '../tools/loggingUrles';
import router from '../tools/router';

const DEFAULT_URL = '/';

export default class Module {
  constructor(config) {
    this.appComponent = config.appComponent;
    this.routes = config.routes;
    this.historyHashes = [];
    this.notFound = config.notFound;
  }

  start = () => {
    this.appComponent.render();
    if (this.routes) {
      this.initRoutes();
    }
  }

  initRoutes = () => {
    window.addEventListener('hashchange', this.renderRoute);
    this.renderRoute();
  }

  renderRoute = () => {
    const url = router.getUrl();
    const route = this.routes.find((element) => element.path === url);

    if (window.location.hash === '') {
      window.location.hash = DEFAULT_URL;
    }

    document.querySelector('router-outlet').innerHTML = route
      ? `<${route.component.selector}></${route.component.selector}>`
      : `<${this.notFound.selector}></${this.notFound.selector}>`;

    const currentComponent = route ? route.component : this.notFound;

    currentComponent.render();
    loggingUrles(this.historyHashes, url);
  }
}
