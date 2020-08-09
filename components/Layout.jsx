import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { AccountCircle } from "@material-ui/icons"
import { makeStyles, createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import { grey, purple, deepPurple } from "@material-ui/core/colors/"

const theme = createMuiTheme({
    palette: {
        primary: { main: deepPurple[400] },
        secondary: { main: grey[300] },
    },
    typography: { useNextVariants: true },
})

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
            <MuiThemeProvider theme={theme}>
                <div className={classes.root}>
                    <AppBar color="primary" position="static">
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                Stack Review
                            </Typography>
                            <Button color="inherit">Login</Button>
                            <Button color="inherit">Sign Up</Button>
                            <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
                                <AccountCircle />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </div>
                <main>{children}</main>
            </MuiThemeProvider>
        </>
    )
}

export default Layout
