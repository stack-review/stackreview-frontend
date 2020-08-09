import Link from "next/link"
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const Logout = () => {
  return (
    <Link href="/post/new" as="/post/new">
      <Button style={{display: "flex", alignItems: "center", backgroundColor: "lightgrey"}}>
        <div style={{marginRight: "10px", marginTop: "5px"}}>
          {"Post Code Snippet"}
        </div>
        <Add />
      </Button>
    </Link>
  );
};

export default Logout;
