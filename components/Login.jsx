import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Button  variant="contained" color="primary" onClick={() => loginWithRedirect()}>
        {" "}
        Login
      </Button>
    </div>
  );
};

export default Login;
