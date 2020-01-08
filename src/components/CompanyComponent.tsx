import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { companiesSearch } from '../actions/CompanyActions';
import { IAppState, ICompanyState } from '../model';

interface IActions {
  companiesSearch: typeof companiesSearch;
}

interface IProps {
  actions: IActions;
  company: ICompanyState;
}

interface IState {
  company: any;
}

export default connect(
  (state: IAppState) => ({ company: state.company }),
  (dispatch: Dispatch) => ({
    actions: bindActionCreators({ companiesSearch }, dispatch)
  })
)(
  class CompanyComponent extends Component<IProps, IState> {

    public render(): ReactNode {
      const { actions, company } = this.props;

      console.log('CompanyComponent render', this);

      return <div>

        <FormControl>

          {/* <InputLabel htmlFor='search'>Search</InputLabel>
          <Input id='search' /> */}

          <Autocomplete
            // id="combo-box-demo"
            options={company.listOptions}
            getOptionLabel={option => option.title}
            // style={{ width: 300 }}
            renderInput={params => <TextField {...params} label='Combo box' variant='outlined' fullWidth />}
          />

          <Button variant='contained' color='primary' onClick={actions.companiesSearch}>
            Search
          </Button>

        </FormControl>

      </div>;
    }

  }
);
