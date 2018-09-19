import {
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
} from './constants';

const defaultState = {
  rooms: [],
};

export const roomControlReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_ITEM:
      return { rooms: [...state.rooms, action.payload] };
    case UPDATE_ITEM:
      return {
        rooms: state.rooms.map(room => (
          room.id === action.payload.id
            ? action.payload
            : room
        )),
      };
    case DELETE_ITEM:
      return {
        rooms: state.rooms.filter(room => room.id === action.payload),
      };
    default:
      return state;
  }
};
