
const chefs = new Map([
    ['Виктор', 'Пицца'],
    ['Ольга', 'Суши'],
    ['Дмитрий', 'Десерты']
  ]);
  
  const dishes = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий']
  ]);
  
  const orders = new Map();

  function addOrder(client, ...orderedDishes) {
    orders.set(client, orderedDishes);
  }
  
  const alexey = { name: 'Алексей' };
  const maria = { name: 'Мария' };
  const irina = { name: 'Ирина' };
  
  addOrder(alexey, 'Пицца "Пепперони"', 'Тирамису');
  addOrder(maria, 'Суши "Калифорния"', 'Пицца "Маргарита"');
  addOrder(irina, 'Чизкейк');
  
  function printOrderInfo(client) {
    console.log(`Заказ для ${client.name}:`);
    const clientOrder = orders.get(client);
    clientOrder.forEach(dish => {
      const chef = dishes.get(dish);
      console.log(`- ${dish} (готовит ${chef})`);
    });
    console.log('---');
  }
  
  orders.forEach((order, client) => {
    printOrderInfo(client);
  });