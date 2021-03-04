function identity<T>(arg: T): T {
  return arg;
}

const myIdentity: <T>(arg: T) => T = identity;

export default myIdentity;