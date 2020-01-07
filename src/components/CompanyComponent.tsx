import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { companiesFetch } from '../actions/CompanyActions';

interface IProps {
  // actions: IActions;
  companiesFetch: typeof companiesFetch;
}

interface IState {
  sym: string;
}

export default connect(
  (state: IState) => ({}),
  (dispatch: Dispatch) => bindActionCreators({ companiesFetch }, dispatch)
)(
  class CompanyComponent extends Component<IProps, IState> {

    public render(): ReactNode {
      return <div>

        <FormControl>

          <InputLabel htmlFor='search'>Search</InputLabel>
          <Input id='search' />

          <Button variant='contained' color='primary' onClick={this.props.companiesFetch}>
            Search
          </Button>

        </FormControl>

      </div>;
    }

  }
);
