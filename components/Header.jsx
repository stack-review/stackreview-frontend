import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Logout from "./Logout";
import AvatarIcon from "./Avatar";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {isAuthenticated ? (
        <>
          {" "}
          <Logout /> <AvatarIcon />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Header;
