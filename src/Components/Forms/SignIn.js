import React from 'react';
import ENDPOINTS from '../../constants';

class SignInForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            errorMessage: '',
            loading: false,
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSignInSubmit = () => {
        this.setState({loading: true, errorMessage: ''});
        fetch(ENDPOINTS.BASE + ENDPOINTS.SIGNIN, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => {
            this.setState({loading: false});
            if(response.status !== 200) {
                response.json().then(data => {
                        this.setState({errorMessage: data})
                    }
                )
            }
            else {
                return response.json();
            }
        })
        .then(data => {
            if(data){
                this.props.loadUser(data.user);
                sessionStorage.setItem('accessToken', data.accessToken);
                this.props.onRouteChange('home');
            }
        })
    }

    onKeyUp = (event) => {
        if(event.key === 'Enter'){
            this.onSignInSubmit();
        }
    }

    render() {
        const {onRouteChange} = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center ba shadow-5">
                <main className='pa4 black-80'>
                    <div className='measure center br2'>
                        <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                            <legend className='f1 fw6 ph0 mh0'>Sign In</legend>
                            <div className='mt3'>
                                <label className='db fw6 lh-copy f6' htmlFor='email-address'>Email</label>
                                <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70 br2'
                                 type='email'
                                  name='email-address'
                                   id='email-address'
                                   onChange={this.onEmailChange} />
                            </div>
                            <div className='mv3'>
                                <label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
                                <input className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70 br2'
                                 type='password'
                                 name='password'
                                 id='password'
                                 onChange={this.onPasswordChange} 
                                 onKeyUp={this.onKeyUp} 
                                 />
                            </div>
                        </fieldset>
                        <div className=''>
                            <input className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br2' onClick={this.onSignInSubmit} type='submit' value='Sign in' />
                        </div>
                        <div className='lh-copy mt3'>
                            <p className='f6 link dim black db pointer' onClick={() => onRouteChange('register')}>Register</p>
                            { 
                                this.state.loading ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> : <p className='error_text'>{this.state.errorMessage}</p>
                            }
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default SignInForm;