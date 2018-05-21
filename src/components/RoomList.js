import React from 'react'
import './../App.css';

const RoomList = (props) => {
    let rooms = props.rooms.map((room) =>
        <li key={room} onClick={props.onRoomChange(room)}>{room}</li>);
    return rooms;
};

export default RoomList
