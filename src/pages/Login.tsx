import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Login() {
    return (
        <>
            <Header />
            <h1 className="page-title">Login</h1>
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
                        <span className="input-group-text" id="basic-addon3">Password</span>
                    </div>
                    <input
                        className="form-control-custom form-control"
                        type="password"
                        aria-describedby="basic-addon3"
                        placeholder="Enter Password"
                        name="password"
                        id="password"
                        required
                        />                
                </div>
                <button type="submit" className="btn btn-custom btn-lg btn-block">Login</button>
            </form>
            <Footer />
        </>
    )
}