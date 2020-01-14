import React,{Component} from 'react';
import './Content.css';

class Home extends Component{
    render(){
        return(
            <div className="row tc w-100 Landing ma0">
                <div className="col-7 mt6 tl ph6 white  ">
                    <h5>NOVEL WRITING SOFTWARE</h5>
                </div>
                <div className="col-4 mv4 bg-white pa4 br3">
                    <h3>SIGN IN</h3>
                    <div className="pv2">
                        <button className="btn btn-primary mh2"><span><i className="fa fa-facebook-f"></i> Sign in with Facebook</span></button>
                        <button className="btn btn-danger mh2"><span><i className="fa fa-google-plus"></i> Sign in with Google+</span></button>
                    </div>
                    <p>or</p>
                    <form className="tc pa3">
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>

                        <button class="mv2 btn btn-success btn-block" type="submit"><i class="fas fa-sign-in-alt"></i> Sign in</button>
                        <p className="blue tl">Forgot password?</p>
                        <hr/>
                        <button class="btn btn-primary btn-block" type="button" id="btn-signup"><i class="fa fa-user-plus"></i> Sign up New Account</button>

                    </form>
                </div>
            </div>
        );
    }
}

export default Home;