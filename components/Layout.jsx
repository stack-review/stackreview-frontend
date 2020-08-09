<<<<<<< Updated upstream
=======
import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core"
import { AccountCircle } from "@material-ui/icons"
import { makeStyles, createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import { grey, purple, deepPurple } from "@material-ui/core/colors/"
>>>>>>> Stashed changes

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <AppBar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          color="white"
          position="sticky"
        >
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Stack Review</Typography>
            <Header />
          </Toolbar>
        </AppBar>
      </div>
      <main>{children}</main>
    </>
  );
};


export default Layout;
