import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import './App.css';

import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e1667',
    },
    secondary: {
      main: '#c7d8ed',
    },
  },
  typography: {
    fontFamily: ['Roboto'],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <Grid
          icon={
            <SecurityIcon
              style={{ fill: '#4360A6', height: '125', width: '125' }}
            />
          }
          title="Secure"
          btnTitle="Show Me More"
        />
        <Grid
          icon={
            <EventNoteIcon
              style={{ fill: '#448A76', height: '125', width: '125' }}
            />
          }
          title="Performant"
          btnTitle="Show Me More"
        />
        <Grid
          icon={
            <SecurityIcon
              style={{ fill: '#D05B2D', height: '125', width: '125' }}
            />
          }
          title="Reliable"
          btnTitle="Show Me More"
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
