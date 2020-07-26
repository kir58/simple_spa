import { Module } from '../framework';
import appComponent from './component';
import NotFound from './common/NotFound';
import appRoutes from './routes';

class AppModule extends Module {}

export default new AppModule({
  appComponent,
  routes: appRoutes,
  notFound: NotFound,
});
