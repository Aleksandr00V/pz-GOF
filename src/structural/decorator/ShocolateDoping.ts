import { Coffee } from './Coffee';

// Декоратор шоколадної добавки - загортає будь-яку каву і додає шоколад зверху
export class ShocolateDoping implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost() + 3;
  }

  description(): string {
    return this.coffee.description() + ' + шоколадна добавка';
  }
}
