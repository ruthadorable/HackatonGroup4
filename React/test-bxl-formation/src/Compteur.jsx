import React,{useState} from 'react'
import propTypes from 'prop-types'
import {Button} from 'react-bootstrap'
const Compteur = (props) => {
    const [valeur,setValeur]=useState(0);
    const {incr} =props;
    
    const reset=()=>{setValeur(0)}
    return (
        <div>
            <center>
            <h2>Compteur : {valeur}</h2>
           <Button variant="success" onClick={()=>{setValeur(previous=>previous+incr);}}>Incrementer</Button>
            {(valeur>0)&&(<Button variant="success" onClick={reset}> Reset</Button>)}     
            </center>
        </div>
    )
}

Compteur.defaultProps=
{incr:1};
Compteur.propTypes={incr:propTypes.number};
export default Compteur
