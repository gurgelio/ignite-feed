export class Option<T extends object> {
  private value?: T;

  constructor(value: T | undefined = undefined) {
    this.value = value;
  }

  isPresent() {
    return this.value != null;
  }

  isEmpty() {
    return !this.isPresent();
  }

  map<U extends object>(fn: (value: T) => U) {
    if (this.value == null) {
      return new Option<U>();
    }
    return new Option(fn(this.value));
  }

  get() {
    if (this.value == null) {
      throw new Error("Unwrapped empty value!");
    }
    return this.value;
  }

  orElse(other: T) {
    if (this.value == null) {
      return other;
    }
    return this.value;
  }

  orElseGet(fn: () => T) {
    if (this.value == null) {
      return fn();
    }
    return this.value;
  }

  orElseThrow<X extends Error>(err: X) {
    if (this.value == null) {
      throw err;
    }
    return this.value;
  }
}
