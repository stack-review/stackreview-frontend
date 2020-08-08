import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

const Layout = ({ children }) => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Stack Review
                        </Typography>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit">Sign Up</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <main>{children}</main>
        </>
    )
}

export default Layout
