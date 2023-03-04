import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import notFound from 'assets/not-found-404.png';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Not Found 404</title>
        <meta name="description" content="Not found page" />
      </Helmet>
      <div className="h-screen grid place-items-center">
        <div className="not-found-container">
          <div className="mb-[15px]">
            <img className="max-w-full h-[300px]" src={notFound} alt="Not found" />
          </div>
          <Link
            className="block w-full rounded-[5px] p-[12px] text-white text-xl text-center bg-[#7bbd08] transition-all hover:bg-[#94c83a]"
            to="/"
          >
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
