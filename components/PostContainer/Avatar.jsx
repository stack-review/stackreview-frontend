import { Avatar } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    display: 'flex',
    alignItems: 'center'
  },
  avatarName: {
    paddingLeft: theme.spacing(1)
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const AuthorAvatar = ({ name, picture }) => {
  const classes = useStyles()

  return (
    <div className={classes.avatar}>
      <Avatar alt={name} src={picture} />
      <div className={classes.avatarName}>{name}</div>
    </div>
  )
}

export default AuthorAvatar
