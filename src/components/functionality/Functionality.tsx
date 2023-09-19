import { Feature } from '../../lib/types';
import Features from './Features';

const Functionality = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: 'Track company-wide progress',
      description:
        'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
    },
    {
      id: 2,
      title: 'Advanced built-in reports',
      description:
        'Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.',
    },
    {
      id: 3,
      title: 'Everything you need in one place',
      description:
        'Stop jumping from one service to another to communicate, store files, track tasks, and share documents. Manage offers an all-in-one team productivity solution.',
    },
  ];

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
