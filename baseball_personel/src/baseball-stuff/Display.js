import React from 'react'


export default function Display(props) {

    return(
        <div>

            <h1>{`# of strikes: ${props.strikes}`}</h1>
            <h1>{`# of balls: ${props.balls}`}</h1>
            <h1>{`# of fouls: ${props.fouls}`}</h1>
            <h1>{`Hit? : ${props.hits}`}</h1>
        </div>
    )
}