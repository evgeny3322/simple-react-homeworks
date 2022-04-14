import React, {useState} from 'react'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)// show
    }
    const onMouseLeave = () => {
        setShow(false)// close
    }

    const stringTime = date?.toTimeString() || <br/>// fix with date
    const stringDate = date?.toDateString() || <br/>// fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show
                ? (<div>
                    {stringDate}
                </div>)
                : (<br/>)
            }

            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>

        </div>
    )
}

export default Clock
