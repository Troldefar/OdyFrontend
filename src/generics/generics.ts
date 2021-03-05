function identity<T>(arg: T): T {
  return arg;
}

const myIdentity: <T>(arg: T) => T = identity;

export default myIdentity;

// Generic notes goes here until i get old enough to store it correctly

  // Meh
  const last = <T>(arr: Array<T>): T => {
    return arr[arr.length - 1];
  }

  const l = last([1, 2, 3]);
  const s = last<string>(['1', '2', '3']);

  // Define
  const makeArray = <X, Y = number>(x: X, y: Y): [X, Y] => {
    return [x, y];
  }

  const v = makeArray(1, 3);
  const v2 = makeArray("2", "qwd");
  const v3 = makeArray<string | null>(null, 2);

  // Extends
  const makeFullName = <T extends {firstName: string; lastName: string;}>(obj: T): T => {
    return {
      ...obj,
      fullName: obj.firstName + obj.lastName
    }
  }

  const mfn = makeFullName({firstName: 'Rasmus', lastName: 'Hansen', test: '123'});
  const mfn2 = makeFullName({firstName: 'grwef', lastName: 'qdw', test: '4213'});

  // Interface
  interface Tab<T> {
    id: string;
    position: number;
    data: T;
  }

  type NumberTab = Tab<number>;
  type StringTab = Tab<string>;