// action for buying cake
const BUY_CAKE = "BUY_CAKE"

// action creator for buying cake
function buyCake(){
	return{
		type:BUY_CAKE,
	}
}

// state for cake
const initialCakeState = {
	numOfCakes: 10
}

// reducer function to update cake state
const cakeReducer = (state=initialCakeState, action) => {
	switch(action.type){
		case BUY_CAKE:return {
			...state,
			numOfCakes: state.numOfCakes - 1
		}

		default: return state
	}
}

module.exports = {buyCake, cakeReducer}