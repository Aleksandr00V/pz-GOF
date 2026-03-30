// Без декоратора - окремий клас для кожної комбінації
// 2 добавки = 4 класи. 3 добавки = 8 класів. і так далі...

class SimpleCoffee {
  cost(): number { return 10; }
  description(): string { return 'Проста кава'; }
}

class CoffeeWithMilk {
  cost(): number { return 13; }
  description(): string { return 'Проста кава + молоко'; }
}

class CoffeeWithSugar {
  cost(): number { return 11; }
  description(): string { return 'Проста кава + цукор'; }
}

class CoffeeWithMilkAndSugar {
  cost(): number { return 14; }
  description(): string { return 'Проста кава + молоко + цукор'; }
}


const coffee1 = new SimpleCoffee();
console.log(`${coffee1.description()} — ${coffee1.cost()} грн`);

const coffee2 = new CoffeeWithMilk();
console.log(`${coffee2.description()} — ${coffee2.cost()} грн`);

const coffee3 = new CoffeeWithMilkAndSugar();
console.log(`${coffee3.description()} — ${coffee3.cost()} грн`);