import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Register() {
    return (
        <>
            <Header />
            <h1 className="page-title">Register</h1>
            <form className="form-container">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">User</span>
                    </div>
                    <input
                        type="text"
                        className="form-control-custom form-control"
                        placeholder="Enter Username"
                        aria-label="Username"
                        name="username"
                        autoComplete="username"
                        required
                        />                
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Email</span>
                    </div>
                    <input
                        type="email"
                        className="form-control-custom form-control"
                        placeholder="Enter Email"
                        aria-label="Email"
                        name="email"
                        autoComplete="email"
                        required
                    />
                </div>
        
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">Password</span>
                    </div>
                    <input
                        className="form-control-custom form-control"
                        type="password"
                        aria-describedby="basic-addon3"
                        placeholder="Enter Password"
                        name="password"
                        id="password"
                        />                
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">Confirm Password</span>
                    </div>
                    <input
                        className="form-control-custom form-control"
                        type="password"
                        aria-describedby="basic-addon3"
                        placeholder="Confirm Password"
                        name="confirm_password"
                        id="confirm_password"
                        />                
                </div>
                <button type="submit" className="btn btn-custom btn-lg btn-block">Register</button>
            </form>
            <Footer />
        </>
    )
}