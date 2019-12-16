import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React, { ChangeEvent, Component, ReactNode } from 'react';
import './app.styl';
import CompanyComponent from './components/CompanyComponent';
import StockComponent from './components/StockComponent';

interface IState {
  activeTab: number;
}

interface ITabPanelProps {
  active: number;
  children?: React.ReactNode;
  value: number;
}

export default class App extends Component<{}> {

  public state: IState = {
    activeTab: 0
  };

  public render(): ReactNode {
    return <div>
      <AppBar position='static'>
        <Tabs value={this.state.activeTab} onChange={this.handleChange.bind(this)}>
          <Tab label='Company'></Tab>
          <Tab label='Stock'></Tab>
        </Tabs>
      </AppBar>
      <TabPanel active={this.state.activeTab} value={0}>
        <CompanyComponent />
      </TabPanel>
      <TabPanel active={this.state.activeTab} value={1}>
        <StockComponent />
      </TabPanel>
    </div>;
  }

  private handleChange(evt: ChangeEvent<{}>, val: number): void {
    this.setState({
      activeTab: val
    });
  }

}

function TabPanel(props: ITabPanelProps): any {
  const { active, children, value, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={active !== value}
    // id={`simple-tabpanel-${index}`}
    // aria-labelledby={`simple-tab-${index}`}
    // {...other}
    >
      {active === value && <Box p={3}>{children}</Box>}
    </Typography>
  );
}
