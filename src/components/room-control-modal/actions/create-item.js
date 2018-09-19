import { CREATE_ITEM } from '../constants';

export const createItem = payload => ({
  type: CREATE_ITEM,
  payload,
});
