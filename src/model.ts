export interface IAction {
  data?: any;
  type: string;
}

export interface IAppState {
  company: ICompanyState;
  stock: IStockState;
}

export interface ICompanyState {
  listOptions: any[];
}

export interface IStockState {
  stockdata: any;
}
