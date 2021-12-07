// action for buying cake
const BUY_ICECREAM = "BUY_ICECREAM"

// action creator for buying cake
function buyIceCream(){
	return{
		type:BUY_ICECREAM
	}
}

// state for cake
const initialIceCreamState = {
	numOfIceCream: 20
}

// reducer function to update cake state
const iceCreamReducer = (state=initialIceCreamState, action) => {
	switch(action.type){
		case BUY_ICECREAM:return {
			...state,
			numOfIceCream: state.numOfIceCream - 1
		}

		default: return state
	}
}

module.exports = {buyIceCream, iceCreamReducer}