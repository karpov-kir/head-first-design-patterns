import { ChocolateBoiler } from './ChocolateBoiler.mjs';

export class ChocolateFactory {
  public static run() {
    const boiler1 = ChocolateBoiler.getInstance();
    const boiler2 = ChocolateBoiler.getInstance();

    boiler1.fill();
    boiler2.fill();

    boiler1.boil();
    boiler2.boil();

    boiler1.drain();
    boiler2.drain();

    boiler1.fill();
    boiler2.fill();

    boiler1.boil();
    boiler2.boil();

    boiler1.drain();
    boiler2.drain();
  }
}
