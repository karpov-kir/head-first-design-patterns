import { Person } from './person/Person.mjs';

export const getNonOwnerProxy = (person: Person): Person => {
  return new Proxy(person, {
    get: (target, property, receiver) => {
      // Everything is allowed for the others
      return Reflect.get(target, property, receiver);
    },
    set: (target, property, _value, _receiver) => {
      // Others are only allowed to set the `geekRating`
      if (property === 'geekRating') {
        return Reflect.set(target, property, _value, _receiver);
      }

      throw new Error('Not allowed');
    },
  });
};
