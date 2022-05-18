import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const getStateForTheme = (state: AppStoreType) => state.theme;

    const theme = useSelector<AppStoreType, string>(getStateForTheme); // useSelector

    const dispatch = useDispatch();

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeAC(theme));
    }


    const divStyle = {
        textAlign: 'center'
    };


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s.titleHW}>
                Homeworks #12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect
                className={s.themeDiv}
                value={theme}
                options={themes}
                onChangeOption={onChangeCallback}
            />

            <hr/>
        </div>
    );
}

export default HW12;
