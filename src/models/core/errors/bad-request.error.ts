export class BadRequestError extends Error {
  constructor() {
    super("Bad request error.")
    this.name = "BadRequestError"
  }
}
