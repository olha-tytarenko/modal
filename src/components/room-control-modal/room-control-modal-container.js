import { connect } from 'react-redux';
import RoomControlModal from './room-control-modal';
import {
  createItem,
  deleteItem,
  updateItem,
} from './actions';

const mapStateToProps = ({ rooms }) => ({
  rooms,
});

const mapDispatchToProps = {
  createItem,
  deleteItem,
  updateItem,
};

export const RoomControlModalContainer = connect(mapStateToProps, mapDispatchToProps)(RoomControlModal);
