import grey from '@material-ui/core/colors/grey';

export const styles = theme => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'base-line',
    backgroundColor: grey[200],
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    padding: '16px 0 16px 16px',
  },
  closeButton: {
    padding: 0,
    boxShadow: 'none',
    backgroundColor: grey[200],
    '&:hover': {
      backgroundColor: grey[200],
    },
  },
});
