import { Person } from './Person.mjs';

export class RealPerson implements Person {
  constructor(
    public name: string,
    public gender: string,
    public interests: string[],
    public geekRating: number,
  ) {}
}
