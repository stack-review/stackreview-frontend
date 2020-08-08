import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from '@material-ui/core';


export default function AvatarIcon() {
    const { user, isAuthenticated, } = useAuth0();

    return isAuthenticated &&  (
        <div className="avatar" style={{ marginLeft:"10px"}}>
            <Avatar alt={user.name} src={user.picture} />
        </div>
    )
}