import { Amplifier } from './homeTheater/Amplifier.mjs';
import { CdPlayer } from './homeTheater/CdPlayer.mjs';
import { HomeTheaterFacade } from './homeTheater/HomeTheaterFacade.mjs';
import { PopcornPopper } from './homeTheater/PopcornPopper.mjs';
import { Projector } from './homeTheater/Projector.mjs';
import { Screen } from './homeTheater/Screen.mjs';
import { StreamingPlayer } from './homeTheater/StreamingPlayer.mjs';
import { TheaterLights } from './homeTheater/TheaterLights.mjs';
import { Tuner } from './homeTheater/Tuner.mjs';

export class HomeTheaterTestDrive {
  public static run(): void {
    const amplifier: Amplifier = new Amplifier('Amplifier');
    const tuner = new Tuner('AM/FM Tuner', amplifier);
    const streamingPlayer = new StreamingPlayer('Streaming player', amplifier);
    const cdPlayer = new CdPlayer('CD player', amplifier);
    const projector = new Projector('Projector', streamingPlayer);
    const lights = new TheaterLights('Theater ceiling lights');
    const screen = new Screen('Theater screen');
    const popper = new PopcornPopper('Popcorn popper');

    const homeTheaterFacade = new HomeTheaterFacade(
      amplifier,
      tuner,
      streamingPlayer,
      cdPlayer,
      projector,
      lights,
      screen,
      popper,
    );

    homeTheaterFacade.watchMovie('Raiders of the Lost Ark');
    homeTheaterFacade.endMovie();
  }
}
