import { Person } from './person/Person.mjs';

export const getOwnerProxy = (person: Person): Person => {
  return new Proxy(person, {
    get: (target, property, receiver) => {
      // Everything is allowed for the owner
      return Reflect.get(target, property, receiver);
    },
    set: (target, property, _value, _receiver) => {
      if (property === 'geekRating') {
        // Only others can set the `geekRating`
        throw new Error('Not allowed');
      }

      return Reflect.set(target, property, _value, _receiver);
    },
  });
};
