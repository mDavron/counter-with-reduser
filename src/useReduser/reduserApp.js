import React, { useReducer } from "react";
import { reduser } from "./Reduser";
import {INCREMENT,DECREMENT,RESET} from './types'

const styles = {
    wrapper: {
        color:'red',
        display:'flex',
        justifyContent:'center',
        marginTop:'50px'
    },
    card_ :{
        width:'300px',
        heighn:'300px',
        padding:'30px',
        backgroundColor:'#192644e0',
        borderRadius:'4px'
    }
}

const initialState = 0;
function ReduserApp() {
  const [count, dispatch] = useReducer(reduser, initialState);
  return (
    <div className="wrapper_" style={styles.wrapper}>
      <div className="card_" style={styles.card_}>
      <button
        className="btn btn-success m-2"
        onClick={() => dispatch({ type: INCREMENT })}
      >
        Increment
      </button>
      <button
        className="btn btn-success m-2"
        onClick={() => dispatch({ type: DECREMENT })}
      >
        Increment
      </button>
      <h1> Counter:{count}</h1>
      <button  className="btn btn-success m-2" onClick={() => dispatch({ type: RESET })}>Reset</button>
      </div>
    </div>
  );
}

export default ReduserApp;
