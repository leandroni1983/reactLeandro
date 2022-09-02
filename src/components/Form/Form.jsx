import React from 'react'


const Form = () => ({
    render: function () {
        return (
            <div>
                <div className="main">
                    <p className="sign" align="center">Sign in</p>
                    <form className="form1">
                        <input className="un " type="text" align="center" placeholder="Username" />
                        <input className="pass" type="password" align="center" placeholder="Password" />
                        <a className="submit" align="center">Sign in</a>
                        <p className="forgot" align="center"><a href="#">Forgot Password?</a></p><a href="#">
                        </a></form></div><a href="#">
                </a></div>
        );
    }
});


export default Form;