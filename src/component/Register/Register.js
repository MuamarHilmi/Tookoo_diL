import React from "react";
import "./Register.css";

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            isLoading: false
        }

        this.signUp = this.signUp.bind(this);
    }

    signUp() {
        this.setState(
            {isLoading: true},
            () => {
                const data = new FormData();
                data.append("name", this.state.name);
                data.append("email", this.state.email);
                data.append("password", this.state.password);
                data.append("password_confirmation", this.state.password_confirmation);

                fetch(
                    "https://tookoodil.herokuapp.com/api/register",
                    {
                        method: "POST",
                        body: data
                    }
                )
                .then(async (resp) => {
                    const body = await resp.json()
                    if(resp.status == 201) {
                        setTimeout(() => {
                            alert("Berhasil")
                        }, 3000);
                        this.props.history.push("/login")
                    }
                })
            }
        )
    }

    render() {
        return(
            <div>
                <body>
                    <div className="split-screen">
                        <div className="left">
                            <section className="copy">
                                <h1>hahahaha</h1>
                                <p>pusing gw nih</p>
                            </section>                 
                        </div>
                        <div className="right">
                            <form>
                                <section className="copy">
                                    <h2>Register</h2>
                                    <div className="login-container">
                                        <p>Udah punya akun? <a href="/login">
                                        <strong>Login</strong></a></p>
                                    </div>
                                </section>

                                <div className="input-container name">
                                    <label>Nama lengkap</label>
                                    <input type="text"
                                    onChange={(ev) => this.setState({name: ev.target.value})}
                                    value={this.state.name}></input>
                                </div>

                                <div className="input-container email">
                                    <label>Email</label>
                                    <input type="email"
                                    onChange={(ev) => this.setState({email: ev.target.value})}
                                    value={this.state.email}></input>
                                </div>

                                <div className="input-container password">
                                    <label>Password</label>
                                    <input type="password"
                                    placeholder="password must be at least 6 characters"
                                    onChange={(ev) => this.setState({password: ev.target.value})}
                                    value={this.state.password}></input>
                                </div>

                                <div className="input-container password">
                                    <label>Konfirmasi Password</label>
                                    <input type="password"
                                    placeholder="password must be at least 6 characters"
                                    onChange={(ev) => this.setState({password_confirmation: ev.target.value})}
                                    value={this.state.password_confirmation}></input>
                                    {/* <i class="far fa-eye-slash"></i> */}
                                </div>
                                {/* <div className="input-container cta">
                                    <label className="checkbox-container">
                                        <input type="checkbox"></input>
                                        <span className="checkmark"></span>
                                        Sign Up
                                    </label>
                                </div> */}
                                <button className="signup-btn" type="button" onClick={this.signUp}>Sign Up
                                </button>
                                <section className="copy legal">
                                    <p><span className="small">By continuing,
                                     you agree to accept our<br/>
                                      <a href="#">Privacy Policy</a> &amp; <a href="#">Terms of Service</a>.</span></p>
                                </section>
                            </form>
                        </div>
                    </div>
                </body>
            </div>
        )
    }
}