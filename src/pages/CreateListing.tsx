import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/layout/form.css"

export default function CreateListing() {
    return (
        <>
            <Header />
            <h1 className="page-title">Create Listing</h1>
            <form className="form-container">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Title</span>
                    </div>
                    <input type="text" className="form-control-custom" placeholder="Enter product title" aria-label="Username" name="title" />
                </div>


                <div className="input-group-custom">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Description</span>
                    </div>
                    <textarea className="form-control-custom" rows={2} aria-label="With textarea" name="description" placeholder="Describe your product"></textarea>
                </div>
        
        
                <div className="input-group mb-3">
                    <div className="input-group-prepend d-flex">
                        <span className="input-group-text">BID</span>
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="number" className="form-control form-control-custom" aria-label="Amount (to the nearest dollar)" name="bidstart" placeholder="R$" />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">Image URL</span>
                    </div>
                    <input type="text" className=" form-control-custom form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="https://..." name="urlImage" />
                </div>

                <div className="input-group-custom mb-3">
                    <div className="input-group-prepend">
                        <select className="form-control-custom custom-select input-group-custom" id="inputGroupSelect01" name="category">
                            <option value="">Select a category</option>
                            <option value="">Mulher</option>
                        </select>
                    </div>
                </div>

                <button type="submit" className="btn btn-custom btn-lg btn-block">Create Listing</button>
            </form>
            <Footer />
        </>
    )
}