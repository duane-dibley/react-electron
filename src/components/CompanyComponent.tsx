import Button from '@material-ui/core/Button';
import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { companyAction } from '../actions/CompanyActions';

interface IProps {
  companyAction: typeof companyAction;
}

interface IState {
  sym: string;
}

export default connect(
  (state: IState) => ({}),
  (dispatch: Dispatch) => bindActionCreators({ companyAction }, dispatch)
)(
  class CompanyComponent extends Component<IProps, IState> {

    public render(): ReactNode {
      return <Button variant='contained' color='primary' onClick={this.props.companyAction}>
        Company
    </Button>;
    }

  }
);
