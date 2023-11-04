import { ImageComponent } from '../ImageComponent.mjs';

export interface Icon {
  width: number;
  height: number;
  paintIcon(imageComponent: ImageComponent): void;
}
