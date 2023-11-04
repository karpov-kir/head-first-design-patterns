import { Icon } from './icon/Icon.mjs';

export class ImageComponent {
  constructor(private icons: Icon[]) {}

  public repaint(): void {
    this.icons.forEach((icon) => icon.paintIcon(this));
  }
}
