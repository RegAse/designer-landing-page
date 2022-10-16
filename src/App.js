import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('scroll', function () {
  $('.box-to-slide-in-1').each(function (i, e) {
    let el = $(e);
    if (el.isInViewport()) {
      el.addClass('slide-in-1');
    }
  });

  $('.box-to-slide-in-1-left').each(function (i, e) {
    let el = $(e);
    if (el.isInViewport()) {
      el.addClass('slide-in-1-left');
    }
  });
});

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-1 navbar-fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img className='logo-spin-1' src="./images/logo.png" width="30" height="30" alt="" />
            <span className='company-name'> Mountaphics Designs</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">About us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='wrap d-flex justify-content-center align-items-center'>
        <div className='wrap-info-box'>
          <div>
            <img className='logo-spin-1' src="./images/logo.png" width="30" height="30" alt="" />
            <span className='company-name'> Mountaphics Designs</span>
          </div>
          <h1 className='huge-heading box-to-slide-in-1 slide-in-1'>We Make Graphic Designs</h1>
          <p className='col-md-10 box-to-slide-in-1 slide-in-1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis aliquet molestie metus id dictum. Nunc quis ex vulputate,
            interdum mauris vel, cursus justo. Ut sodales tempus dui eu tristique.
            Suspendisse suscipit dui eget accumsan sodales. Vestibulum dui ligula,
            ornare in lorem vitae, tincidunt vulputate purus.
          </p>
        </div>
      </div>
      {/* <div className='wrap-2 d-flex justify-content-center'>
        <div className='wrap-info-box'>
          <h1 className='huge-heading'>We Design Tunnels</h1>
        </div>
      </div> */}
      <div className='wrap-2'>
        <div className='container'>
          <div className='row box-to-slide-in-1 justify-content-center work-examples-1'>
            <div className='col-md-6'>
              <h1>Graphics And Colors</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis aliquet molestie metus id dictum. Nunc quis ex vulputate,
                interdum mauris vel, cursus justo. Ut sodales tempus dui eu tristique.
                Suspendisse suscipit dui eget accumsan sodales. Vestibulum dui ligula,
                ornare in lorem vitae, tincidunt vulputate purus.
              </p>
            </div>
            <div className='col-md-3'>
              <img className="img-fluid logo-spin-1" src="./images/graphics-example-1.png" alt="Failed loading..." />
            </div>
          </div>
          <div className='row box-to-slide-in-1 work-examples-1'>
            <div className='col-md-4'>
              <img className="img-fluid" src="./images/design-examples-1.png" alt="Failed loading..." />
            </div>
            <div className='col-md-6'>
              <h1>Website Layouts</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis aliquet molestie metus id dictum. Nunc quis ex vulputate,
                interdum mauris vel, cursus justo. Ut sodales tempus dui eu tristique.
                Suspendisse suscipit dui eget accumsan sodales. Vestibulum dui ligula,
                ornare in lorem vitae, tincidunt vulputate purus.
              </p>
            </div>
          </div>
          <div className='row justify-content-center box-to-slide-in-1 work-examples-1'>
            <div className='col-md-8'>
              <div className='row'>
                <h1 className='text-center mb-5'>Contact Us</h1>
                <form>
                  <div class="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div  className="col-sm-8">
                      <input type="email"  className="form-control" id="inputEmail3" />
                    </div>
                  </div>
                  <div  className="row mb-3">
                    <label for="input-message-1"  className="col-sm-2 col-form-label">Message</label>
                    <div className="col-sm-8">
                      <textarea id="input-message-1"></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-1 float-end">Send It!</button>
                </form>
              </div>
            </div>
          </div>
          <div className='row box-to-slide-in-1 work-examples-1'>
            <div className='col-md-6'>
              <h1>Footer</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
