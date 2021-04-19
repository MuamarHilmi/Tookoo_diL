import React from "react";
import "./Login.css"

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            email: "",
            password: ""
        }

        this.logIn = this.logIn.bind(this);
    }

    logIn() {
        const body = {
            email: this.state.email,
            password: this.state.password
        }
        fetch(
            "https://tookoodil.herokuapp.com/api/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }
        )
        .then(async (res) => {
            if(res.status == 200) {
                const body = await res.json()
                this.setState({token: body.token})
                this.props.history.push("/home")
            }
        })
        .catch((err) => {

        })
    }


    render() {
        return(
            <div>
                <body>
                    <img className="wave" src=""/>
                    <div className="container">
                        <div className="img">
                            <img/>
                        </div>
                        <div className="login-content">
                            <form>
                                <i class="far fa-user-circle fa-3x"></i>
                                <h2 className="title">Haloo</h2>

                                <div className="input-div one">
                                    <div className="i">
                                        {/* <i class="fas fa-user"></i> */}
                                    </div>

                                    <div>
                                        <input type="email" className="input" onChange={(ev) => this.setState({email: ev.target.value})}
                                        value={this.state.email} placeholder="Email"></input>
                                        
                                    </div>
                                </div>

                                <div className="input-div pass">
                                    <div className="i">
                                        {/* <i class="fas fa-lock"></i> */}
                                    </div>

                                    <div>
                                        <input type="password" className="input" onChange={(ev) => this.setState({password: ev.target.value})}
                                        value={this.state.password} placeholder="Password"></input>
                                    </div>
                                </div>

                                <a className="forgot-pw-btn" href="/forgot_password">Lupa Password Cuy?</a>
                                <input type="button" class="btn" value="Login" onClick={this.logIn}></input>
                                <div className="question">Belum punya akun TooKoo_diL?<a href="/register" className="register-btn"> daftar</a></div>
                            </form>
                        </div>
                    </div>
                </body>
            </div>
        )
    }
}