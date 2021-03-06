import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './HW6.module.css'
import AlternativeSuperEditableSpan from "./common/c4-SuperEditableSpan/AlternativeSuperEditableSpan";


function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        const restoreSpan = restoreState<string>('editable-span-value', "")
        setValue(restoreSpan)
    }

    return (
        <div className={s.contentBody}>
            <hr/>
            <h3 className={s.titleHome}>Homeworks #6</h3>
            {/*should work (должно работать)*/}
            <div>
                ✏️
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <div className={s.buttons}>
                <SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
        </div>
    )
}

export default HW6
