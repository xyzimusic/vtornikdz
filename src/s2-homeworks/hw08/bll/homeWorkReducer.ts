import {UserType} from '../HW8'
import {log} from 'util';

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                console.log(`up`)
                return [...state].sort((a, b) => a.name.localeCompare(b.name));
            } else if (action.payload === 'down') {
                console.log(`down`)
                return [...state].sort((a, b) => b.name.localeCompare(a.name));
            }
            break;
        }
        case 'check': {
            return state.filter((user: { age: number; }) => user.age >= action.payload);
        }
        default:
            return state
    }
}
