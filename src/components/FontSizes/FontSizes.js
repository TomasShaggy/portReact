import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "p",
        subtitle2: "p",
        body1: "span",
        body2: "span",
      },
    },
  },
});

theme.typography.h1 = {
  fontSize: "6rem",
  letterSpacing: "-2px",
  fontWeight: "400",
  padding: "0.5rem 0.9rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "4.75rem",
    letterSpacing: "-1px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
    letterSpacing: "-0.25px",
  },
};

theme.typography.h2 = {
  fontSize: "5.25rem",
  letterSpacing: "-2px",
  fontWeight: "500",
  padding: "0.5rem 0.9rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "4rem",
    letterSpacing: "-0.8px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
    letterSpacing: "-0.25px",
  },
};

theme.typography.h3 = {
  fontSize: "4.5rem",
  letterSpacing: "-1.5px",
  fontWeight: "400",
  padding: "0.5rem 0.9rem",

  [theme.breakpoints.down("md")]: {
    fontSize: "3.25rem",
    letterSpacing: "-0.6px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.1rem",
    letterSpacing: "-0.25px",
  },
};

theme.typography.h4 = {
  fontSize: "3.75rem",
  letterSpacing: "-1.35px",
  fontWeight: "600",
  padding: "0.5rem 0.9rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.65rem",
    letterSpacing: "-0.5px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    letterSpacing: "-0.25px",
  },
};

theme.typography.h5 = {
  fontSize: "3.25rem",
  letterSpacing: "-1.25px",
  fontWeight: "500", //zmena
  padding: "0.5rem 0.9rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.15rem",
    letterSpacing: "-0.4px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.55rem",
    letterSpacing: "-0.25px",
    wordSpacing: "-0.5rem", //DOUPRAVIT
  },
};

theme.typography.h6 = {
  fontSize: "2.75rem",
  letterSpacing: "-1px",
  fontWeight: "400",
  padding: "0.5rem 0.9rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
    letterSpacing: "-0.3px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.35rem",
    letterSpacing: "-0.25px",
  },
};
//////////////////////
//                  //
//                  //
//                  //
//                  //
//////////////////////
//
//
//
//
//
//

theme.typography.subtitle1 = {
  fontSize: "1.5rem",
  padding: "0.5rem 1.05rem",
  lineHeight: "1.8rem",

  [theme.breakpoints.down("md")]: {
    fontSize: "1.25rem",
    lineHeight: "1.3rem",
  },
};
theme.typography.subtitle2 = {
  fontSize: "1.25rem",
  padding: "0.5rem 1.05rem",
  lineHeight: "1.4rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    lineHeight: "1.1srem",
  },
};
