import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1
  },
  sidebar: {
    width: '300px'
  }
}));

export default useStyles;