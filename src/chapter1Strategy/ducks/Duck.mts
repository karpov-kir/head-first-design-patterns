import { FlyBehavior } from '../flyBehavior/FlyBehavior.mjs';
import { QuackBehavior } from '../quackBehavior/QuackBehavior.mjs';

export abstract class Duck {
  public constructor(
    protected flyBehavior: FlyBehavior,
    protected quackBehavior: QuackBehavior,
  ) {}

  public abstract display(): void;

  public swim(): void {
    // All ducks float, even decoys!
    console.log('Duck is swimming');
  }

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public setFlyBehavior(flyBehavior: FlyBehavior): void {
    this.flyBehavior = flyBehavior;
  }

  public setQuackBehavior(quackBehavior: QuackBehavior): void {
    this.quackBehavior = quackBehavior;
  }
}
