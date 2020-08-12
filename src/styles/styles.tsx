import {ROUTES} from "../utils/const";
import { createMuiTheme } from '@material-ui/core/styles';

export const THEME = createMuiTheme({
  typography: {
    h2: {
      fontFamily: `'Merriweather', bold;`,
      fontSize: "8vh"
    },
    h4: {
      fontFamily: `'Merriweather', serif;`,
      fontSize: "3.5vh"
    },
    body1: {
      fontFamily: `'Lato', sans-serif;`,
      fontSize: "2.2vh"
    },
    subtitle2: {
      fontFamily: `'Lato', sans-serif;`,
      fontSize: "2vh"
    },
    button: {
      fontFamily: `'Lato', sans-serif;`,
      fontSize: "2vh"
    },
  }
});

export const COLORS: any = {
    lightBrown: "#F5EDE0",
    green:  "#005265",
    white: "#FDFBF9",
    black: "black",
    disabled: "#CCCED3",
    textDisabled: "#919099",
    warning: "#FFE874",
    info: "#007FB9"
}

export type BackgroundColorType = "#005265"| "#fcfcfc" | "#a1a1a1"

export type TextColorType = "#005265"| "#fcfcfc" | "black" | "#737373";

export const BackgroundStyles: any = {
    [ROUTES.home]: {
       backgroundImage: "url(/images/background_splash.jpg)",
       backgroundPosition: "center"
    },
    [ROUTES.instructions]: {
        backgroundColor: COLORS.lightBrown,
        backgroundImage: "url(/images/background_instruction1.png)",
        overflow: 'hidden',
        backgroundRepeat  : 'no-repeat',
        backgroundPosition: "center"
    },
    [ROUTES.destination]: {
        backgroundColor: COLORS.lightBrown,
        backgroundImage: "url(/images/background_destination.png)",
        overflow: 'hidden',
        backgroundRepeat  : 'no-repeat',
        backgroundPosition: "center bottom"
    },
    [ROUTES.current]: {
        backgroundColor: COLORS.lightBrown,
        backgroundImage: "url(/images/background_current.png)",
        overflow: 'hidden',
        backgroundRepeat  : 'no-repeat',
        backgroundPosition: "center bottom"
    },
    [ROUTES.parking]: {
        backgroundColor: COLORS.lightBrown,
        backgroundImage: "url(/images/background_parking.png)",
        overflow: 'hidden',
        backgroundRepeat  : 'no-repeat',
        backgroundPosition: "center"
    },
    [ROUTES.navigate]: {
        backgroundColor: COLORS.lightBrown,
        backgroundImage: "url(/images/background_navigate.png)",
        overflow: 'hidden',
        backgroundRepeat  : 'no-repeat',
        backgroundPosition: "center bottom"
    },
}

