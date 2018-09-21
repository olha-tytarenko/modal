import red from '@material-ui/core/colors/red';

export const styles = () => ({
  closeIcon: {
    color: red[600],
  },
  deleteButton: {
    backgroundColor: red[50],
    padding: 0,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: red[100],
    },
  },
  listItem: {
    padding: 0,
    maxWidth: '160px',
    justifyContent: 'space-between',
    marginLeft: '16px',
    paddingTop: '8px',
  },
  addButton: {
    marginLeft: '16px',
    paddingLeft: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});
