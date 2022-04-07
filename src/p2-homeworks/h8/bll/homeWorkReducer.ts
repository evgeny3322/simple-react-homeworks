import { UserType } from "../HW8"

type SortUpAT = {
    type: 'sort',
    payload: 'up'
}
type SortDownAT = {
    type: 'sort',
    payload: 'down'
}
type CheckAge18AT = {
    type: 'check',
    payload: 18
}
type ActionsType = SortUpAT | SortDownAT | CheckAge18AT

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state]
            action.payload === 'up'
                ?
                newState.sort((a: UserType, b: UserType) => a.name > b.name ? 1 : -1)
                :
                newState.sort((a: UserType, b: UserType) => a.name < b.name ? 1 : -1)
            return newState
        }
        case 'check': {
            return [...state].filter((el: UserType) => el.age > action.payload)
        }
        default:
            return state
    }
}