import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Logout from "./Logout";
import AvatarIcon from "./Avatar";
import AddPost from "./AddPostNav"

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end",  }}>
      {!isAuthenticated ? (
        <>
          {" "}
          <AddPost/> <Logout /> <AvatarIcon />
        </>
      ) : (
          <>
            <Login />
          </>
      )}
    </div>
  );
};

export default Header;
