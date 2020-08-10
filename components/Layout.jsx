import { AppBar, Toolbar, Typography } from "@material-ui/core"
import Header from "./Header";

import Link from "next/link"

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
            <Link passHref href='/'>
              <a>
                <Typography variant="h6">Stack Review</Typography>
              </a>
            </Link>


            <Header />
          </Toolbar>
        </AppBar>
      </div>
      <main>{children}</main>
     </>
  );
};


export default Layout;
