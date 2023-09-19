import Features from './Features';
import { features } from '../../data/features';

const Functionality = () => {

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="row col-lg card w-50 h-50 border-0">
          <div className="card-body p-lg-5 d-flex flex-column justify-content-center">
            <h1 className="card-title fw-bold header-blue-lighter px-0">
              What's different about Manage?
            </h1>
            <p className="card-text text-blue-gray my-4 fs-xl-7 w-75 px-0">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
        </div>
        <div className="row col-lg card w-50 border-0">
          <div className="card-body d-flex flex-column justify-content-center">
            <Features features={features}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functionality;
