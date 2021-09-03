import React from 'react';
import './App.css';
import { StoreCards } from './components/StoreCards';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import { DiagSplit } from './components/diagSplit/DiagSplit';
import { ShoppingCartButton } from './components/ShoppingCartButton';

//import './fonts/DIN2014-Regular.ttf';

function App() {
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
    typography: {
      fontFamily: [
        'DIN2014-Regular'
      ]
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <ShoppingCartButton/>
        <DiagSplit/>
        <StoreCards/>
      </ThemeProvider>
    </div>
  );
}

export default App;
