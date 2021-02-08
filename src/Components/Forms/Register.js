import React from 'react';
import ENDPOINTS from '../../constants';

class RegisterForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            registerName: '',
            registerEmail: '',
            registerPassword: '',
            errorMessage: '',
            loading: false,
        }
    }

    onNameChange = (event) => {
        this.setState({registerName: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({registerEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({registerPassword: event.target.value})
    }

    onSubmitRegister = () => {
        this.setState({loading: true, errorMessage: ''});
        fetch(ENDPOINTS.BASE + ENDPOINTS.REGISTER, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.registerName,
                email: this.state.registerEmail,
                password: this.state.registerPassword,
            })
        })
        .then(response => {
            this.setState({loading: false, errorMessage: ''});
            return response.json();
        })
        .then(data => {
            if(data === 'success'){
                this.props.loadUser({
                    name: this.state.registerName,
                    email: this.state.registerEmail,
                    entries: 0,
                    faces_detected: 0,
                    joined: new Date(),
                  });
                this.props.onRouteChange('signin');
            }
            else {
                this.setState({errorMessage: data});
            }
        })
    }

    onKeyUp = (event) => {
        if(event.key === 'Enter'){
            this.onSubmitRegister();
        }
    }

    
    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center ba shadow-5">
                <main className='pa4 black-80'>
                    <div className='measure center br2'>
                        <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                            <legend className='f1 fw6 ph0 mh0'>Register</legend>
                            <div className='mt3'>
                                <label className='db fw6 lh-copy f6' htmlFor='email-address'>Name</label>
                                <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70 br2' onChange={this.onNameChange} type='text' name='name' id='name' />
                            </div>
                            <div className='mt3'>
                                <label className='db fw6 lh-copy f6' htmlFor='email-address'>Email</label>
                                <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70 br2' onChange={this.onEmailChange} type='email' name='email-address' id='email-address' />
                            </div>
                            <div className='mv3'>
                                <label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
                                <input className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70 br2' onKeyUp={this.onKeyUp} onChange={this.onPasswordChange} type='password' name='password' id='password' />
                            </div>
                        </fieldset>
                        <div>
                            <input className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br2' onClick={this.onSubmitRegister} type='submit' value='Register' />
                            { 
                                this.state.loading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> : <p className='error_text'>{this.state.errorMessage}</p>
                            }
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default RegisterForm;