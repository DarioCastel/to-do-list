import { useState } from "react"

export const useForm = (initialFrom={})=>{
    const [formState, setFormState] = useState(initialFrom)

    const inputChange = (e)=>{
        const name=e.target.name
        const value=e.target.value
        setFormState(
            {...formState,[name]:value}
        )
    }

    const resetForm =()=>{
        setFormState(
            initialFrom
        )
    }
    return{
        ...formState,
        inputChange,
        resetForm,
        formState,
    }
        
    
}