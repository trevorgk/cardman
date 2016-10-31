import * as React from "react";
import {Card} from '../models/cards';

interface PlayingCardProps {
    card:Card,
    style:Object
}
const PlayingCard = (props:PlayingCardProps) => {
    const {card, style} = props;
    const {width, height} = {width: 80, height: 112};

    return (
        <div style={{
                display: "inline-block"
            }} onClick={() => {
            console.log(card);
        }}>
            <img style={Object.assign({}, style, {width: `${width}px`, height: `${height}px`})} 
                src={card.display()} alt={card.toString()} />
        </div>
    );
}

export default PlayingCard;