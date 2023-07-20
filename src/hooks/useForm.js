import { useState } from 'react';

const useForm = ({ handleSubmit, handleInputChange , valueValidation}) => {
    const [formValues, setFormValues] = useState(null);

    const onInputValueChange = (e) => {
        const { name, value } = e.target;

        setFormValues(prevState => ({...prevState, [name]: value}))
    }

    const onFormSubmit = (e) => { 
        e.preventDefault();

    }

  return [formValues, onInputValueChange];
};

export { useForm };
