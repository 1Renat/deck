import OTHERS, {DECK, CARD} from './../constants/constants.js';

export const deck = {
 addDeck: (name) => ({type: DECK.ADD_DECK, name}),
 showAddDeck: () => ({type: DECK.SHOW_ADD_DECK}),
 hideAddDeck: () => ({type: DECK.HIDE_ADD_DECK})
}

export const card = {
 //приходит объект карточки
 addCard: (card) => ({type: CARD.ADD_CARD, data: card})
 updateCard: (card) => ({type: CARD.UPDATE_CARD, data: card})
 deleteCard: (cardId) => ({type: CARD.DELETE_CARD, data: dardId})
}

export default others = {
 filterCards: (query) => ({type: OTHERS.FILTER_CARDS, data: query}),
 setShowBack: back => ({type: OTHERS.SET_SHOW_BACK, data: query})
 recieveData: (data) => ({type: OTHERS.RECIEVE_DATA, data: data})
}