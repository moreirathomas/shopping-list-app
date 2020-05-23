// model for the observable <User>
export class User {
  username: string;
  password: string;
  token?: string;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
