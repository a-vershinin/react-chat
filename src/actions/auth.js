import {
	SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
} from '../constans/index';

export function signUp(username, password) {
	return (dispatch) => {
		dispatch({
			type: SIGNUP_REQUEST,
		})


    fetch('http://localhost:8000/v1/signup', {
       method: "POST",
       body: JSON.stringify({
         username, password
       }),
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
     })
     .then(response => response.json())
     .then(json => dispatch({
				 type: SIGNUP_SUCCESS,
				 payload: json,
			 })
	 		)
     .catch(reason => dispatch({
				 type: SIGNUP_FAILURE,
				 payload: reason,
			 })
		 );
	};
}

export function login(username, password) {
	return (dispatch) => {
		dispatch({
			type: LOGIN_REQUEST,
		})
		fetch('http://localhost:8000/v1/login', {
       method: "POST",
       body: JSON.stringify({
         username, password
       }),
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
     })
     .then(response => response.json())
     .then(json => dispatch({
				 type: SIGNUP_SUCCESS,
				 payload: json,
			 })
	 		)
     .catch(reason => dispatch({
				 type: SIGNUP_FAILURE,
				 payload: reason,
			 })
		 );
	};
}

export function logout() {
	return (dispatch) => {
		dispatch({
			type: LOGOUT_REQUEST,
		})
	};
}
