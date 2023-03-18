import { AppAction, AppState } from "../models/context";

export const reducer = (state: AppState, action: AppAction) => {
    switch (action.type) {
        case "THEME_TOGGLE":
            return {...state, darkMode: !state.darkMode};
        default:
            return state;
    }
}