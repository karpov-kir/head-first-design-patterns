import { Icon } from './Icon.mjs';

export class ImageIcon implements Icon {
  #width = 100;
  #height = 100;

  public get width() {
    return this.#width;
  }

  public get height() {
    return this.#height;
  }

  constructor(private url: string) {}

  public paintIcon(): void {
    console.log(`Image icon ${this.width}x${this.height} (${this.url}) is being printed`);
  }
}
