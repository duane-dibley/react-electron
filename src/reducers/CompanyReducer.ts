import { COMPANY_ACTION } from '../actions';

// interface IAction {
//   data: any;
//   type: any;
// }

// interface IState {
//   data: any;
// }

export default function company(state = { data: [] }, action = { data: [], type: '' }): any {

  switch (action.type) {

    case COMPANY_ACTION:
      console.log(COMPANY_ACTION, action);
      return state;

    default:
      return state;
  }
}
