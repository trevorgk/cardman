import * as React from "react";
import * as ReactDOM from "react-dom";

import Pile from "./Pile";
import {PackOfCards, PileLayout} from "../models/cards";

export const CardTable = () => {
    const {width, height} = {width: 1000, height: 1000};
    let pack = new PackOfCards({numberOfDecks: 1, numberOfJokers: 2});

    //  hardcode number of players and their positions for now
    let hands = pack.deal(4);
    const positions = [
        {x: width/2, y: height/4},
        {x: width/4 * 3, y: height/2},
        {x: width/2, y: height/4 * 3},
        {x: width/4, y: height/2}
    ]
    return (
        <div style={{backgroundImage: 'url(static/card-table-bg.png)', position: 'relative', width: `${width}px`, height: `${height}px`}}>
            {
                hands.map((hand, index) => (
                    <div style={{position: 'absolute', left: `${positions[index].x}px`, top: `${positions[index].y}px`}}>
                        <Pile layout={'FannedRight'} cards={hand}/>
                    </div>
                ))
            }
        </div>
    )
}

