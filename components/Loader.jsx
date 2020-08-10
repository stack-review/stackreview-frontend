import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        '& > * + *': {
            marginLeft: theme.spacing(2)
        },
        marginTop: 50,
    }
}))

export const Loader = () => {
    const classes = useStyles()
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        function tick() {
            // reset when reaching 100%
            setProgress(oldProgress =>
                oldProgress >= 100 ? 0 : oldProgress + 1
            )
        }

        const timer = setInterval(tick, 20)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className={classes.root}>
            <CircularProgress variant="determinate" value={progress} />
        </div>
    )
}

export default Loader
