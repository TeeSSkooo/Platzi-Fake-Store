import ReactStars from 'react-stars';

import man from 'assets/man.jpg';

const Review: React.FC = () => {
  return (
    <div className="flex gap-[25px] p-[5px] rounded-[5px] bg-[#f9f9f90d]">
      <div className="hidden rounded-[5px] overflow-hidden sm:block">
        <img className="h-full w-[400px] object-cover" src={man} alt="Mr. Joe Ambrose" />
      </div>
      <div className="flex-grow-0">
        <div className="mb-[10px] text-xl text-white">Mr. Jone Ambrose</div>
        <div className="mb-[10px] text-[#bababa]">20 - 07 - 21</div>
        <q className="mb-[15px] text-[#bababa]">
          “Lorem Ipsum has been the industry by standard dummy text ever to since the 1500s, it’s type and scrambled it
          to make a type specimen book. It’s has survived not only five.”
        </q>
        <ReactStars count={5} value={5} size={20} edit={false} color2={'#ffd700'} />
      </div>
    </div>
  );
};

export default Review;
