export class SetFilter {
  static readonly type = '[SET] filter';

  constructor(public payload: string) {
  }
}
