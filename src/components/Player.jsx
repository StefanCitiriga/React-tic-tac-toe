import {useState} from 'react'

export default function Player({name, symbol}) {
  const [isEditing, setIsEditing] =useState(false);

  const editHandler = () =>{
    setIsEditing(true);
  }

  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && <input ></input>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>Edit</button>
    </li>
  );
}
