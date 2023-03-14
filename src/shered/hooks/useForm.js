import {useState} from "react";

const useForm = ({initialState, onSubmit})=> {
    const [state, setState] = useState({...initialState});

    const handleChange = ({ target }) => {
        setState(prevState => {
            const { name, value } = target;
            setState({[name]: value})
            return {...prevState, value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...state});
        setState({...initialState})
    }

    return {state, setState,handleChange, handleSubmit};
}

export default useForm;