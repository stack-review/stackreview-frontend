import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Header from "./Header";
import Post from './Post'


import { useAuth0 } from "@auth0/auth0-react";

const Layout = ({ children }) => {
  const { isLoading, error } = useAuth0();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  
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
