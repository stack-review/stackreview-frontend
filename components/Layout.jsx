import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Header from "./Header";
import Post from './Post'


const Layout = ({ children }) => {
  return (
    <>
      <div>
        <AppBar  color="default" position="sticky" >
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

      <Post />

      {/* <main>{children}</main> */}
    </>
  );
};

export default Layout;
