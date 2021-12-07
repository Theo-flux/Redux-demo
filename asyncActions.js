const redux = require('redux')
const { 

	initialState, 
	FETCH_USER_REQUEST, 
	FETCH_USER_SUCCESS, 
	FETCH_USER_FAILURE,
	fetchUserRequest,
	fetchUserSuccess,
	fetchUserFailure

} = require('./user')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware


// reducer function to execute actions
const reducer = (state = initialState, action) => {
	const {payload} = action
	switch(action.type){
		case FETCH_USER_REQUEST:
			return {
				...state,
				loading: false
			}

		case FETCH_USER_SUCCESS:
			return {
				loading: false,
				users: payload.users,
				error: ''
			}

		case FETCH_USER_FAILURE:
			return {
				loading: false,
				users: [],
				error: payload.error
			}
	}

}

const url = 'http://jsonplaceholder.typicode.com/users'

// define async action creator
function fetchUsers() {
	return function(dispatch){
		dispatch(fetchUserRequest())
		axios.get(url)
			.then(request => {
				// request.data
				users = request.data.map(user => user.name)
				dispatch(fetchUserSuccess(users))
			})
			.catch(error => {
				// error.message
				message = error.message
				dispatch(fetchUserFailure(message))
			})
	}
}


const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())