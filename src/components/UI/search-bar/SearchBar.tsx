import search from 'assets/search.svg';

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-[317px] mx-auto mb-[50px]">
      <input
        className="w-full h-[50px] border border-transparent rounded-[5px] p-[16px] pr-[55px] text-xl text-black transition-all focus:border-[#7bbd08]"
        type="text"
        placeholder="Search a product"
      />
      <div className="absolute top-0 right-0 w-[50px] h-[50px] rounded-[5px] grid place-items-center bg-[#7bbd08]">
        <img src={search} alt="Search" />
      </div>
    </div>
  );
};

export default SearchBar;
