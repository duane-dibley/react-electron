import { STOCK_ACTION } from '../actions';

// interface IAction {
//   data: any;
//   type: any;
// }

// interface IState {
//   data: any;
// }

export default function stock(state = { data: [] }, action = { data: [], type: '' }): any {

  switch (action.type) {

    case STOCK_ACTION:
      console.log(STOCK_ACTION, action);
      return state;

    default:
      return state;
  }
}
