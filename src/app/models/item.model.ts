// model for the observable <Item>
export class Item {
  public id: string;
  public name = '';
  public done = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
