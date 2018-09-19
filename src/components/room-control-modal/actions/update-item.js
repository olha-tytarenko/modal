import { UPDATE_ITEM } from '../constants';

export const updateItem = payload => ({
  type: UPDATE_ITEM,
  payload,
});
