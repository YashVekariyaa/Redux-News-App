import React from 'react'

const Contact = () => {
  return (
      <>
          <div className="container" style={{ marginTop: 20 }}>
            <h2 className="text-center mb-4">Contact Us</h2>
              <form className="row g-3">
                  <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">Firstname</label>
                      <input type="text" className="form-control" id="inputEmail4" placeholder="Enter your firstname" />
                  </div>
                  <div className="col-md-6">
                      <label htmlFor="inputPassword4" className="form-label">Lastname</label>
                      <input type="text" className="form-control" id="inputPassword4" placeholder="Enter your lastname" />
                  </div>
                  <div className="col-12">
                      <label htmlFor="inputAddress" className="form-label">Address</label>
                      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                  </div>
                  <div className="col-md-6">
                      <label htmlFor="inputCity" className="form-label">City</label>
                      <input type="text" className="form-control" id="inputCity" placeholder="Enter your city" />
                  </div>
                  <div className="col-md-4">
                      <label htmlFor="inputState" className="form-label">State</label>
                      <select id="inputState" className="form-select">
                          <option selected>Choose...</option>
                          <option>...</option>
                      </select>
                  </div>
                  <div className="col-md-2">
                      <label htmlFor="inputZip" className="form-label">Zip</label>
                      <input type="text" className="form-control" id="inputZip" placeholder="Enter zipcode" />
                  </div>
                  <div className="col-12">
                      <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
              </form>
          </div>
      </>
  )
}

export default Contact