const initState: string = "some";

type ChangeThemeActionType = {
    type: "CHANGE-THEME",
    theme: string
}

export const themeReducer = (state = initState, action: ChangeThemeActionType): string => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return action.theme;
        }
        default:
            return state;
    }
};


export const changeThemeAC = (theme: string): ChangeThemeActionType => ({type: "CHANGE-THEME", theme}); // fix any
