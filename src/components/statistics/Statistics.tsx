import GetStartedButton from "../reusable/GetStartedButton";
import "../../styles/home.scss";

const Statistics = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="order-sm-2 order-lg-1 col-sm-12 col-lg-4 card m-5">
          <div className="card-body p-5">
            <h5 className="card-title fs-0 fw-bold header-blue-dark">
              Bring everyone together to build better products.
            </h5>
            <p className="card-text mt-3 fs-7">
              Manage makes it simple for software teams to play day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <a href="get-started">
              <GetStartedButton />
            </a>
          </div>
        </div>
        <div className="order-sm-1 order-lg-2 col-sm-12 col-lg-4 card m-5">
          <div className="card-body p-5">
            <h5 className="card-title">
              Bring Everyone together to build better products.
            </h5>
            <p className="card-text">
              Manage makes it simple for software teams to play day-to-day tasks
              while keeping the larger team goalds in view
            </p>
            <a href="get-started">
              <GetStartedButton />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
