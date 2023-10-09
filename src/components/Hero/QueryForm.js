import React from 'react'
import '../../Style/QueryForm.scss'
const QueryForm = () => {
  return (
    <>
       <div className="container form-div">
          <div className="col-lg-6 form-first-div">
            <div className="row">
              <h2 className="first-div-h2">
                We’d love to
                <br /> hear your
                <br /> story
              </h2>
              <p className="first-div-p">
                Lorem ipsum dolor sit amet consectetur. Lorem
                <br /> et donec leo lectus vel ullamcorper facilisis.
                <br /> Dictum eros enim enim luctus sit semper
                <br /> euismod.
              </p>
              <div className="form-mobile-div">
                <p>+1(302)-231-1293</p>
                <p>+91-78294-13575</p>
              </div>
              <p className="form-email">Info@creware.asia</p>
            </div>
          </div>
          <div className="col-lg-6 form-second-div">
            <div className="row">
              <h2 className="second-div-h2">Get in touch</h2>

              <div>
                <label className="form-lable">HI! I am</label>
                <span> </span>
                <input type="text" className="input-box"></input>
              </div>
              <div>
                <label className="form-lable">Reach me at</label>
                <span> </span>
                <input type="email" className="input-box"></input>
              </div>
              <div>
                <label className="form-lable">Country</label>
                <span> </span>
                <input type="text" className="input-box"></input>
              </div>
              <div>
                <label className="form-lable">Mobile no.</label>
                <span> </span>
                <input type="tel" className="input-box"></input>
              </div>
              <div>
                {" "}
                <label className="form-lable">Company Name</label>
                <span> </span>
                <input type="text" className="input-box"></input>
              </div>
              <div>
                {" "}
                <label className="form-lable">Message</label>
                <span> </span>
                <textarea type="text-area" className="text-area"></textarea>
              </div>
              <div className="form-check d-flex align-items-center justify-content-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-white fs-14"
                      htmlFor="flexCheckDefault"
                    >
                      Lorem ipsum dolor sit amet consectetur. Lorem et donec leo
                      lectus vel ullamcorper facilisis. Dictum eros enim enim
                      luctus sit semper euismod..
                    </label>
                  </div>
              <div className="button-div">
                <button
                  type="button"
                  id="form-button"
                  data-mdb-ripple-color="dark"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default QueryForm
