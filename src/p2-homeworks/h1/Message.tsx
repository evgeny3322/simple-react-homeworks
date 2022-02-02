import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.speech__wrapper}>
            <div className={s.speech__block}>
                <img className={s.img} src={props.avatar} alt=""/>
            </div>
            <div className={s.bubble}>
                <div className={s.txt}>
                    <p className={s.name}>{props.name}</p>
                    <p className={s.message}>{props.message}</p>
                    <span className={s.timestamp}>{props.time}</span>
                </div>
                <div className={s.bubble__arrow}></div>
            </div>
        </div>
    )
}

export default Message

