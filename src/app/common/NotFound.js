import { Component } from '../../framework';

class NotFound extends Component { }

const NotFoundPage = new NotFound({
  selector: 'app-not-found',
  template: `
        <div style="display: flex; justify-content: center; align-items: center">
            <div>
                <h2 class="red">Страница не найдена</h2>
                <a href="/">Перейти на главную</a>
            </div>
        </div>
    `,
});

export default NotFoundPage;
