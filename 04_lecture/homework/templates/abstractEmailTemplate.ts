export interface IMainParams {
  from: string;
  to: string;
  subject: string;
}

export abstract class AbstractEmailTemplate<TEmailBodyParams extends {}> {
  protected readonly _mainParams: IMainParams;
  protected readonly _bodyParams: TEmailBodyParams;

  constructor(mainParams: IMainParams, bodyParams: TEmailBodyParams) {
    this._mainParams = mainParams;
    this._bodyParams = bodyParams;
  }

  public getMainParams(): IMainParams {
    return this._mainParams;
  }

  public getBodyParams(): TEmailBodyParams {
    return this._bodyParams;
  }
}
