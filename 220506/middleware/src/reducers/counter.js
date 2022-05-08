const initialState = {
    number: 0,
    loading: false,
    error: null
}

const UP = 'COUNTER/UP_REQUEST'
const DOWN = 'COUNTER/DOWN_REQUEST'

export const up = (payload) => ({type: UP, payload})
export const down = (payload) => ({type: DOWN, payload})

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'COUNTER/UP_REQUEST' :
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'COUNTER/UP_SUCCESS' :
            return {
                ...state,
                loading: false,
                number: state.number + 1
            }
        case 'COUNTER/UP_FAILURE' :
            return {
                ...state,
                loading: false,
                error: '에러 발생'
            }
        case 'COUNTER/DOWN_REQUEST' :
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'COUNTER/DOWN_SUCCESS' :
            return {
                ...state,
                loading: false,
                number: state.number - 1
            }
        case 'COUNTER/DOWN_FAILURE' :
            return {
                ...state,
                loading: false,
                error: '에러 발생'
            }
        default :
            return state
    }
}

export default counter;