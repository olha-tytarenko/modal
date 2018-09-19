import { DELETE_ITEM } from '../constants';

export const deleteItem = payload => ({
  type: DELETE_ITEM,
  payload,
});
