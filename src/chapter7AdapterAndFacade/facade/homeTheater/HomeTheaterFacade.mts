import { Amplifier } from './Amplifier.mjs';
import { CdPlayer } from './CdPlayer.mjs';
import { PopcornPopper } from './PopcornPopper.mjs';
import { Projector } from './Projector.mjs';
import { Screen } from './Screen.mjs';
import { StreamingPlayer } from './StreamingPlayer.mjs';
import { TheaterLights } from './TheaterLights.mjs';
import { Tuner } from './Tuner.mjs';

export class HomeTheaterFacade {
  constructor(
    private amplifier: Amplifier,
    private tuner: Tuner,
    private streamingPlayer: StreamingPlayer,
    private cdPlayer: CdPlayer,
    private projector: Projector,
    private theaterLight: TheaterLights,
    private screen: Screen,
    private popcornPopper: PopcornPopper,
  ) {}

  public watchMovie(movie: string): void {
    console.log('Get ready to watch a movie...');
    this.popcornPopper.on();
    this.popcornPopper.pop();
    this.theaterLight.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amplifier.on();
    this.amplifier.streamingPlayer = this.streamingPlayer;
    this.amplifier.setSurroundSound();
    this.amplifier.volume = 5;
    this.streamingPlayer.on();
    this.streamingPlayer.play(movie);
  }

  public endMovie(): void {
    console.log('Shutting movie theater down...');
    this.popcornPopper.off();
    this.theaterLight.on();
    this.screen.up();
    this.projector.off();
    this.amplifier.off();
    this.streamingPlayer.stop();
    this.streamingPlayer.off();
  }

  public listenToRadio(frequency: number): void {
    console.log('Tuning in the airwaves...');
    this.tuner.on();
    this.tuner.frequency = frequency;
    this.amplifier.on();
    this.amplifier.volume = 5;
    this.amplifier.tuner = this.tuner;
  }

  public endRadio(): void {
    console.log('Shutting down the tuner...');
    this.tuner.off();
    this.amplifier.off();
  }
}
