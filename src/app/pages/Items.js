import { Component } from '../../framework';

class Items extends Component {}

const itemsInfo = {
  items: {
    1: { name: 'item1', quantity: 1, price: 20 },
    2: { name: 'item2', quantity: 5, price: 5 },
    3: { name: 'item3', quantity: 3, price: 30 },
  },
  total: 3,
};

const itemsHtml = Object.keys(itemsInfo.items).map((key) => {
  const { name, quantity, price } = itemsInfo.items[key];

  return ` 
        <div class="card blue-grey darken-1" style="width: 300px">
          <div class="card-content white-text">
            <span class="card-title">${name}</span>
            <p>${quantity}</p>
          </div>
          <div class="card-action">
            <a href="#">${price}</a>
          </div>
      </div>`;
}).join('');

const ItemsPage = new Items({
  selector: 'app-items-page',
  template: `
    <div style="padding: 20px;">
    <div style="display: flex; align-items: center;" >
        <a href="/"><-goBack</a>
        <h1 style="margin-left: 30px">Items</h1>
    </div>
    <div>Total items: ${itemsInfo.total}</div>
    <div style="display: flex; justify-content: space-between;">${itemsHtml}</div>
    </div>`,
});

export default ItemsPage;
