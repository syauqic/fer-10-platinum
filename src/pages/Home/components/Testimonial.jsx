export const Testimonial = () => {
  return (
    <section className="mb-3" id="testimonial">
      <div className="container">
        <div className="text-center">
          <h1>Testimonial</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            eius dignissimos similique nostrum animi laudantium ex saepe autem,
            laboriosam excepturi?
          </p>
        </div>
        <div
          className="carousel slide"
          id="carouselExampleRide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card p-5">
                    <div className="d-flex flex-column justify-content-center">
                      <div className="text-center">Photo</div>
                      <div className="text-center">stars</div>
                      <div className="my-2">
                        <p className="fw-bold">
                          "Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Id dolorem totam consequuntur, molestias
                          consectetur laudantium, molestiae, magnam facilis amet
                          quos veniam ipsam. Fugit repellat delectus magnam enim
                          totam eos consequatur."
                        </p>
                      </div>
                      <div>
                        <span>John Dee 32, Bromo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card p-5">
                    <div className="d-flex flex-column justify-content-center">
                      <div className="text-center">Photo</div>
                      <div className="text-center">stars</div>
                      <div className="my-2">
                        <p className="fw-bold">
                          "Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Id dolorem totam consequuntur, molestias
                          consectetur laudantium, molestiae, magnam facilis amet
                          quos veniam ipsam. Fugit repellat delectus magnam enim
                          totam eos consequatur."
                        </p>
                      </div>
                      <div>
                        <span>John Dee 32, Bromo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card p-5">
                    <div className="d-flex flex-column justify-content-center">
                      <div className="text-center">Photo</div>
                      <div className="text-center">stars</div>
                      <div className="my-2">
                        <p className="fw-bold">
                          "Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Id dolorem totam consequuntur, molestias
                          consectetur laudantium, molestiae, magnam facilis amet
                          quos veniam ipsam. Fugit repellat delectus magnam enim
                          totam eos consequatur."
                        </p>
                      </div>
                      <div>
                        <span>John Dee 32, Bromo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 d-flex justify-content-center align-items-center gap-2">
            <button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev"
            >
              Prev
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
