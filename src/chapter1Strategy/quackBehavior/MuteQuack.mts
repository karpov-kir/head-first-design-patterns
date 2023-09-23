import { QuackBehavior } from './QuackBehavior.mjs';

export class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log('Duck cannot quack!');
  }
}
