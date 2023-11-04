import { ImageComponent } from '../ImageComponent.mjs';
import { Icon } from './Icon.mjs';
import { ImageIcon } from './ImageIcon.mjs';

export class ImageIconProxy implements Icon {
  private imageIcon?: ImageIcon;

  public get width() {
    return this.imageIcon?.width || 50;
  }

  public get height() {
    return this.imageIcon?.height || 50;
  }

  constructor(private url: string) {}

  public paintIcon(imageComponent: ImageComponent): void {
    if (this.imageIcon) {
      this.imageIcon.paintIcon();
      return;
    }

    console.log('Loading image icon...');
    console.log(`Image icon placeholder is being printed`);

    setTimeout(() => {
      console.log('Image icon has been loaded');
      this.imageIcon = new ImageIcon(this.url);
      imageComponent.repaint();
    }, 1000);
  }
}
