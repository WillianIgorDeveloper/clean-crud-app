export class UnauthorizedError extends Error {
  constructor() {
    super("You are not authorized to access this resource.")
    this.name = "UnauthorizedError"
  }
}
