"use client";
"allowImportingTsExtensions";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import MainAppBar from 'components/MainAppBar';
import MainPage from 'pages/main';

function Home() {
  const Palette = {
    primary: "red",
  };
  const theme = createTheme({
    palette: {
      primary: purple,
      secondary: {
        main: '#B60046',
        light: '#B60046',
        dark: '#B60046',
        contrastText: '#47008F',
      },
    },
  });
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <MainPage />
      </MuiThemeProvider>
    </>
  );
}

export default Home;

