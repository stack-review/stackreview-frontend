import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

const Logout = () => {
  const { logout } = useAuth0();
  return (
    <div >
      <Button variant="contained" color="secondary" style={{marginLeft:"5px"}} onClick={() => logout()}>
        {" "}
        Logout
      </Button>
    </div>
  );
};

export default Logout;
