import * as React from "react";
import PlayingCard from "./PlayingCard";
import {PackOfCards, Card, PileLayout} from "../models/cards";

interface PileProps {
    cards: Card[],
    layout?: PileLayout
}

const Pile = (props:PileProps) => {
    const {cards, layout} = props;
    let pileStyle = {};
    let cardStyle = {};
    switch(layout){
        case 'Squared':
            pileStyle = Object.assign(pileStyle, { position: "relative", width: "80px", height: "112px" });
            cardStyle = Object.assign(cardStyle, { position: "absolute" });
            break;
        case 'FannedRight':
            pileStyle = Object.assign(pileStyle, { margin: "0 5px" });
            cardStyle = Object.assign(cardStyle, { float: "left", marginLeft: "-65px" });
            break;
        case 'FannedDown':
        default:
            pileStyle = Object.assign(pileStyle, { float: "left", paddingTop: "95px" });
            cardStyle = Object.assign(cardStyle, { /*marginTop: "-95px"*/ });
            break;
    }
    return (
        <div style={pileStyle}>
            {cards && cards.map((card, pos) => (
                <PlayingCard key={pos} card={card} style={Object.assign(cardStyle, { zIndex: pos })}/>
            ))}
        </div>
    )
}

export default Pile;