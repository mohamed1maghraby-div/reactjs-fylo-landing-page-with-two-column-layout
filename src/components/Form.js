import React, {useState,useEffect} from 'react';
import validator from 'validator';
import './Form.css';

function Form(props){
    const [emailError, setEmailError] = useState('');
    const [sgemailError, showEmailError] = useState('');
    const [clemailError, classEmailError] = useState('');
    const validateEmail = (e) => {
            var email = e.target.value;
            setEmailError(email);
        }
    const handelClick = (e) =>{
        e.preventDefault();
        if(validator.isEmail(emailError)){
            showEmailError('')
            classEmailError('')
        }else{
            classEmailError('danger')
            showEmailError('Please check your email') 
        }
    }
    useEffect(()=>{

    }, []);
    return(
        <form className={props.formType}>
        <div className="form-group">
            <input className={`form-control input-lg custom-input ${clemailError}`} id="checkboxError" onChange={(e) =>validateEmail(e)} type="email"/>
            <input className="btn btn-primary input-lg btn-custom" type="submit" value="Get Started" onClick={handelClick}/>
            <br/><span className='danger-text'>{sgemailError}</span>
        </div>
        </form>
    );
}
export default Form;