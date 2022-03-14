import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError(false)
    }

    const addUser = () => {
        const validName = name.trim()
        if (validName) {
            addUserCallback(validName)
            alert(`Hello ${validName}`)
            setName('')
        } else {
            setError(true)
        }
    }

    const onKeyPressAddUser = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && name ? addUser() : setError(true)
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressAddUser={onKeyPressAddUser}
        />
    )
}

export default GreetingContainer