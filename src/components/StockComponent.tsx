import Button from '@material-ui/core/Button';
import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { stockAction } from '../actions/StockActions';

interface IProps {
  stockAction: any;
}

interface IState {
  sym: string;
}

export default connect(
  (state: IState) => ({}),
  (dispatch: Dispatch) => bindActionCreators({ stockAction }, dispatch)
)(
  class StockComponent extends Component<IProps, IState> {

    public render(): ReactNode {
      return <Button variant='contained' color='primary' onClick={this.props.stockAction}>
        Stock
    </Button>;
    }

  }
);
