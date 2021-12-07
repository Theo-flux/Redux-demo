// create state
const initialState = {
	loading: true,
	users: [],
	error: ''
}

// create actions
const FETCH_USER_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USERS_FAILURE'


// create action creator for FETCH_USER_REQUEST
function fetchUserRequest(){
	return {
		type: FETCH_USER_REQUEST,
		info: 'fetch users from api and returns loading to false'
	}
}


// create action creator for FETCH_USER_SUCCESS
function fetchUserSuccess(users){
	return {
		type: FETCH_USER_SUCCESS,
		info: 'updates the user array in state',
		payload: {
			users
		}
	}
}


// create action creator for FETCH_USER_FAILURE
function fetchUserFailure(error){
	return {
		type: FETCH_USER_FAILURE,
		info: 'returns loading to true if error occurs',
		payload: {
			error
		}
	}
}

module.exports = { 
	
	initialState, 
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
	fetchUserRequest,
	fetchUserSuccess,
	fetchUserFailure

}
