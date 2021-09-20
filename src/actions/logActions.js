import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, UPDATE_LOG, SET_CURRENT, CLEAR_CURRENT, SEARCH_LOGS } from "./types";

// export const getLogs = () => {
//     return async (dispatch) => {
//         try {
//             setLoading();

//             const response = fetch('/logs');
//             const data = await response.json();

//             dispatch({ type: GET_LOGS, payload: data });
//         } catch (error) {
//             dispatch({ type: LOGS_ERROR, payload: error.response.data });
//         }
//     }
// };

// Get logs from the server
export const getLogs = () => async dispatch => {
    try {
        setLoading();

        const response = await fetch('/logs');
        const data = await response.json();
    
        dispatch({ type: GET_LOGS, payload: data });
    } catch (error) {
        dispatch({ type: LOGS_ERROR, payload: error.TypeError });
    }
};

// Add new log
export const addLog = log => async dispatch => {
    try {
        setLoading();

        const response = await fetch('/logs', {
            method: 'POST', body: JSON.stringify(log),headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();

        dispatch({ type: ADD_LOG, payload: data });
    } catch (error) {
        dispatch({ type: LOGS_ERROR, payload: error.TypeError });
    }
};

// Delete log from the server
export const deleteLog = id => async dispatch => {
    try {
        setLoading();

        await fetch(`/logs/${id}`, { method: 'DELETE' });
    
        dispatch({ type: DELETE_LOG, payload: id });
    } catch (error) {
        dispatch({ type: LOGS_ERROR, payload: error.TypeError });
    }
};

// Update log on server
export const updateLog = log => async dispatch => {
    try {
        setLoading();

        const response = await fetch(`/logs/${log.id}`, {
            method: 'PUT' , body: JSON.stringify(log), headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();

        dispatch({ type: UPDATE_LOG, payload: data });
    } catch (error) {
        dispatch({ type: LOGS_ERROR, payload: error.TypeError });
    }
};

// Search server logs
export const searchLogs = text => async dispatch => {
    try {
        setLoading();

        const response = await fetch(`/logs?q=${text}`);
        const data = await response.json();
    
        dispatch({ type: SEARCH_LOGS, payload: data });
    } catch (error) {
        dispatch({ type: LOGS_ERROR, payload: error.TypeError });
    }
};

// Set current log
export const setCurrent = log => {
    return { type: SET_CURRENT, payload: log };
};

// Clear current log
export const clearCurrent = () => {
    return { type: CLEAR_CURRENT };
};

// Set loading to true
export const setLoading = () => {
    return { type: SET_LOADING }
};