import React from 'react'
import './sign-in.styles.scss'

import  FormInput from '../form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({email:'', password:''})
    } 

    handleChange = e => {
        const { value, name } = e.target;
        
        this.setState({ [name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and passwird</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name='email'
                        value={this.state.email} 
                        required
                        handleChange={this.handleChange}
                        label='Email'
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        required
                        handleChange={this.handleChange}
                        label='Password'
                    />
                    <div className='buttons'> 
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;