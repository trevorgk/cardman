import {Card, PackOfCards} from './cards'

interface Sort {
    sort: (cards: Card[]) => Card[] 
}

export const insertionSort = (pack:PackOfCards) => {
    let cards = pack.cards;
    let currPos = 1;    //  proceed from the second card
    let ticks = 0;  //  iterations to complete
    let swaps = 0;
    while (currPos < pack.cards.length){
        let comparePos = 0;
        const currCard = cards[currPos];
        while (comparePos < currPos){
            ticks++;
            const comparer = cards[comparePos];
            if (pack.compareCards(currCard, comparer) >= 0){
                break;
            }

            comparePos++;
        }
        if (comparePos != currPos){
            cards = PackOfCards.moveCard(cards, currPos, comparePos);
            swaps++;
        }

        currPos++;
    }        

    console.log('ticks', ticks);
    console.log('swaps', swaps);

    return cards;
}

export const bubbleSort = (pack:PackOfCards) => {
    let cards = pack.cards;
    let ticks = 0;  //  iterations to complete
    let swaps = 0;
    let isSorted = false;

    while (!isSorted) {
        let hasSwappedThisRound = false;
        for (let left = 0, right = 1; right < cards.length; left++, right++){
            if (pack.compareCards(cards[left], cards[right]) < 0) {
                cards = PackOfCards.swapCards(cards, left, right);
                hasSwappedThisRound = true;
                swaps++;
            }
            ticks++;
        }
        isSorted = !hasSwappedThisRound;
    }

    console.log('ticks', ticks);
    console.log('swaps', swaps);

    return cards;
}