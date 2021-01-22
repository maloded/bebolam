import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";
import classes from "./Login.module.css"
import {login} from "../../redux/auth_reducer";
import {connect} from "react-redux";

const maxLength = maxLengthCreator(20)

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div >
                    <Field name={'Email'} component={Input} placeholder={'Email'} validate={[required, maxLength]}/>
                </div>
                <div>
                    <Field name={'Password'} component={Input} placeholder={'Password'}  type='password' validate={[required, maxLength]}/>
                </div>
                <div>
                    <Field name={'rememberMe'} component={Input} type={'checkbox'} /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
};

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)



const Login= (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe )
    }
    return (
        <div className={classes.formBox}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};


export default connect(null,{login})(Login);