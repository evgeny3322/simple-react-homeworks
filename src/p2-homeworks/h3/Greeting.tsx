import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
    onKeyPressAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressAddUser}
) => {
    const inputClass = error ? s.error : s.trueClass

    return (
        <div className={s.inputClass}>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyPress={onKeyPressAddUser}
                   className={inputClass}/>
            <button disabled={error}
                    onClick={addUser}
                    className={s.button}>
                add
            </button>
            <span className={s.spanClass}>
                {totalUsers}
            </span>
            <div className={s.textError}>
                {error && 'error: uncorrected name'}
            </div>
        </div>
    )
}

export default Greeting