import { getNonOwnerProxy } from './getNonOwnerProxy.mjs';
import { getOwnerProxy } from './getOwnerProxy.mjs';
import { RealPerson } from './person/RealPerson.mjs';

export class MatchMakingTestDrive {
  public static run(): void {
    const joe = new RealPerson('Joe Javabean', 'Male', ['Bowling'], 10);
    const joeOwnerProxy = getOwnerProxy(joe);
    const joeNonOwnerProxy = getNonOwnerProxy(joe);

    console.log('Joe is changing his interests');
    joeOwnerProxy.interests = ['Bowling', 'Go'];

    console.log(`Joe's interests are ${joeOwnerProxy.interests.join(', ')}`);
    console.log(`Joe's rating is ${joeOwnerProxy.geekRating}`);

    try {
      console.log('Joe is trying to change his geek rating');
      joeOwnerProxy.geekRating = 15;
    } catch (error) {
      console.log(`Joe could not change his geek rating: ${error}`);
    }

    console.log(`Joe's rating is still ${joeOwnerProxy.geekRating}`);

    console.log(`Someone else is trying to change Joe's rating`);

    joeNonOwnerProxy.geekRating = 15;

    console.log(`Joe's rating is now ${joeNonOwnerProxy.geekRating}`);

    console.log(`Someone else is trying to change Joe's interests`);

    try {
      joeNonOwnerProxy.interests = ['Checkers'];
    } catch (error) {
      console.log(`Joe's interests could not be changed: ${error}`);
    }

    console.log(`Joe's interests are still ${joeNonOwnerProxy.interests.join(', ')}`);
  }
}
