import React, {useState} from 'react';
import {requestApi} from "./RequestsAPI";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export const Request = () => {

    const [auth, setAuth] = useState<boolean>(false)
    const [response,setresponse]=useState('')

    const checkBoxCallback = (checkBoxStatus: boolean) => {
        setAuth(checkBoxStatus)
    }
    const sendRequest = ()=> {
        requestApi.post('',{success: auth})
            .then(res=>
                setresponse(res.data.errorText)
            )
            .catch(err=>
                setresponse(err.message)
            )
            .finally(()=>{
                console.trace();
                setTimeout(()=>setresponse(''), 10500)
                console.trace();
            })
    }
    return (
        <div>
            <span>Автризован?</span><SuperCheckbox checked={auth} onChangeChecked={checkBoxCallback}/>
            <br/>
            <SuperButton onClick={sendRequest}>Axios</SuperButton>

            {response&&<span>Ответ с сервера: {response}</span>}
        </div>
    );
};