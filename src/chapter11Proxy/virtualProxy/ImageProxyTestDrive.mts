import { Icon } from './icon/Icon.mjs';
import { ImageIconProxy } from './icon/ImageIconProxy.mjs';
import { ImageComponent } from './ImageComponent.mjs';

export class ImageProxyTestDrive {
  public static run(): void {
    const icon: Icon = new ImageIconProxy('https://example.com/image.png');
    const imageComponent = new ImageComponent([icon]);

    imageComponent.repaint();
  }
}
