import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import './app.styl';

export default class App extends React.Component {

  public render() {
    return <div>
      <AppBar position='static'>
        <Toolbar>Companies</Toolbar>
      </AppBar>
    </div>;
  }

}
