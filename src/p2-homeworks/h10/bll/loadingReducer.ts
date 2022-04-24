const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): typeof initState => { // fix any
    switch (action.type) {
        case 'LOADING_TYPE': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type:'LOADING_TYPE',
    isLoading:boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return {type: 'LOADING_TYPE', isLoading}
} // fix any