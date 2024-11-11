import {bg_image} from "./components/background_image.ts";

function App() {

const primary_text:string = "text-primary fw-bold"
  return (
      <>
          <div className={"d-flex justify-content-between p-3 bg-light"}>
              <div>
                  <span className={primary_text}>Tess Cleaning Services</span>
              </div>
              <div>
                  <a href={"tel:+263771692396"}>
                      <button className={"btn btn-primary"}>
                          Call Us
                      </button>
                  </a>
              </div>
          </div>
          <div className={"container"}>
              <div style={bg_image("")}
                   className={"min-vh-100 text-center d-flex align-items-center justify-content-center"}>
                  <div>
                      <h1>Welcome To <br/> <b className={"text-primary"}>Tess Cleaning Services</b></h1>
                      <p><i>Your Trusted Partner in Cleaning and Laundry Services</i></p>
                      <button className={"btn btn-primary"}>Get In Touch</button>

                  </div>
              </div>
              <div className={"row min-vh-100 mb-5  d-flex justify-content-center align-items-center"}>
                  <div className={"col-sm mb-3"}>
                      <h3 className={primary_text}>About Us</h3>
                      <p>
                          Tess Cleaning Service provides expert cleaning and laundry services to both residential and
                          commercial clients. Our team is committed to transforming every space we touch, ensuring
                          cleanliness, comfort, and a welcoming environment. We believe a clean space enhances quality
                          of
                          life, and we’re dedicated to delivering reliable, professional services tailored to each
                          client's needs
                      </p>
                  </div>
                  <div className={"col-sm mb-3"}>
                      <img src={"https://ngratesc.sirv.com/Tessany/close-up-hands-holding-cleaning-supplies.jpg"} className={"img-fluid"}/>
                  </div>
                  <div className={"text-center"}>
                      <h3 className={primary_text}>Our Services</h3>
                  </div>
              </div>
              <div className={"row gap-3 " }>
                  <div className={"col-sm mb-5"}>
                      <h1 className={primary_text}><i className="bi bi-house"></i></h1>
                      <h5 className={primary_text}>Residential Cleaning</h5>
                      <p>
                          From regular maintenance to deep cleaning, we keep homes sparkling.
                      </p>
                  </div>
                  <div className={"col-sm mb-5"}>
                      <h1 className={primary_text}><i className="bi bi-building"></i></h1>
                      <h5 className={primary_text}>Commercial Cleaning</h5>
                      <p>
                          Professional cleaning for offices, retail spaces, and other commercial settings.
                      </p>
                  </div>
                  <div className={"col-sm mb-5"}>
                      <h1 className={primary_text}><i className="bi bi-basket2"></i></h1>
                      <h5 className={primary_text}>Laundry Services</h5>
                      <p>
                          Comprehensive laundry care, including washing, drying, folding, and ironing.
                      </p>
                  </div>

              </div>


              <div className="container my-5">
                  <div className={"text-center"}>
                      <h3 className={primary_text}>Service Packages</h3>
                  </div>
                  <div className="row">
                      {/* One-Time Cleaning Package */}
                      <div className="col-sm-6 col-md-4 mb-4">
                          <div className="card h-100">
                              <div className="card-body">
                                  <h5 className={primary_text}>One-Time Cleaning</h5>
                                  <p className="card-text">
                                      Perfect for special events or a thorough one-time clean. Ideal
                                      when you need a spotless space for an occasion or after a
                                      renovation.
                                  </p>
                              </div>
                          </div>
                      </div>

                      {/* Weekly & Bi-Weekly Cleaning Package */}
                      <div className="col-sm-6 col-md-4 mb-4">
                          <div className="card h-100">
                              <div className="card-body">
                                  <h5 className={primary_text}>Weekly & Bi-Weekly Cleaning</h5>
                                  <p className="card-text">
                                      Our regular cleaning schedules maintain your space consistently
                                      clean. Choose weekly or bi-weekly visits for a spotless
                                      environment.
                                  </p>
                              </div>
                          </div>
                      </div>

                      {/* Monthly Cleaning Package */}
                      <div className="col-sm-6 col-md-4 mb-4">
                          <div className="card h-100">
                              <div className="card-body">
                                  <h5 className={primary_text}>Monthly Packages</h5>
                                  <p className="card-text">
                                      For clients who prefer a lighter, recurring service. Ideal for
                                      routine upkeep without frequent visits.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className={"col-sm"}></div>
                      {/* Custom Cleaning Package */}
                      <div className="col-sm-6 col-md-4 mb-4">
                          <div className="card h-100">
                              <div className="card-body">
                                  <h5 className={primary_text}>Custom Packages</h5>
                                  <p className="card-text">
                                      Create a personalized plan to meet your specific cleaning
                                      needs. Tailored solutions for your unique requirements.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className={"col-sm"}></div>

                  </div>
              </div>
              <div className={"row gap-3 d-flex align-items-center"}>
                  <div className={"col-sm mb-3"}>
                      <h5 className={primary_text}>How We Work</h5>
                      <p>Our process is simple, efficient, and thorough, ensuring high standards of cleanliness every
                          time:

                      </p>
                      <ol>
                          <li>Consultation: We begin with a free consultation to understand your specific needs.</li>
                          <li>Customized Plan: We design a cleaning plan that fits your schedule and preferences.</li>
                          <li>Professional Execution: Our team delivers top-quality service using professional methods
                              and equipment.
                          </li>
                          <li>Quality Check: Every job is inspected to ensure it meets our high standards before
                              completion.
                          </li>
                      </ol>
                  </div>
                  <div className={"col-sm mb-3"}>
                      <img src={"https://ngratesc.sirv.com/Tessany/2150379209.jpg"} className={"img-fluid"}/>

                  </div>

              </div>
              <div className={"row gap-3 d-flex align-items-center"}>
              <div className={"col-sm mb-3"}>
                      <h5 className={primary_text}>Our Commitment to Sustainability</h5>
                      <p>At Tess Cleaning Service, we’re committed to protecting the environment. We use certified green
                          cleaning products, conserve water and energy, and practice waste reduction to ensure a
                          sustainable service.</p>
                  </div>
                  <div className={"col-sm mb-3" }>
                      <img src={"https://ngratesc.sirv.com/Tessany/135154.jpg"} className={"img-fluid"}/>
                  </div>
              </div>
          </div>
          <div className={"p-3 bg-light text-center"}>
              <h5 className={primary_text}>Get In Touch</h5>

              <div>
                  <p>
                      Number 8 Baines Avenue
                      <br/>
                      Corner Baines & Harare Street
                      <br/>
                      Harare
                      <br/>
                      Zimbabwe
                  </p>
                  <a href={"mailto:info@tcs.co.zw"}>info@tcs.co.zw</a>
                  <br/>
                  <a href={"tel:+263771692396"}>+263 77 169 2396</a>
              </div>
          </div>

      </>
  )
}

export default App
