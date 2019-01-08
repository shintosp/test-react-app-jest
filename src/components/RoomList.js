import React from 'react'
import './../App.css';
import {Button} from "react-bootstrap";

const RoomList = (props) => {
    let rooms = props.rooms.map((room) => {
        let style = {
            fontWeight: room === props.activeRoom ? "bold" : "normal",
            color: room === props.activeRoom ? "#55AFDC" : "black",
            paddingRight: "10px",
            paddingLeft: "10px"
        };
        return  <li className="unselectable"
                   key={room}
                   style={style}
                   onClick={() => {props.onRoomChange(room)}}>
                    <p>{room}
                        {room !== 'room0' ?
                        <Button bsStyle="link"
                                bsSize="xsmall"
                                type="submit"
                                onClick={() => {props.onDeleteRoom(props.url, room)}}
                                style={{float: 'right', color: 'red'}}>x
                        </Button> :
                        <Button bsStyle="link"
                                bsSize="xsmall"
                                type="submit"
                                onClick={() => {props.onDeleteRoom(props.url, room)}}
                                disabled="true"
                                style={{float: 'right', color: 'grey'}}>x
                        </Button>}
                    </p>
                </li>;
    });
    return rooms;
};

export default RoomList
