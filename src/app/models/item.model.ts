//                                                //
// Creates a model for the Item observable object //
//                                                //
export class Item {
  public _id: string;
  public name = '';
  public done = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
