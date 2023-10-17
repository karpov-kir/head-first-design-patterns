export class UnsupportedOperationError extends Error {
  constructor(message = 'Unsupported operation') {
    super(message);
  }
}
