import Link from "next/link"
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const Logout = () => {
  return (
    <Link href="/post/new">
      <Button variant="outlined" color="primary" style={{display: "flex", alignItems: "center"}}>
        <div style={{marginRight: "10px", marginTop: "5px"}}>
          {"Post"}
        </div>
        <Add />
      </Button>
    </Link>
  );
};

export default Logout;
