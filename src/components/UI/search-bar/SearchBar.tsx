import { useState } from 'react';
import { Link } from 'react-router-dom';

import productsApi from 'api/productsApi';
import useAppDispatch from 'hooks/useAppDispatch';
import { setActiveProduct } from 'store/slices/productsSlice';

import search from 'assets/search.svg';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const dispatch = useAppDispatch();

  const { data } = productsApi.useGetProductByNameQuery(searchQuery);

  const products = data ? data : [];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.currentTarget.value);
  };

  return (
    <div className="relative w-[250px] mx-auto mb-[50px]">
      <input
        className="w-full h-[40px] border border-transparent rounded-[5px] p-[16px] pr-[55px] text-black transition-all focus:border-[#7bbd08]"
        type="text"
        placeholder="Search a product"
        value={searchQuery}
        onChange={handleChange}
      />
      <div className="absolute top-0 right-0 w-[40px] h-[40px] rounded-[5px] grid place-items-center bg-[#7bbd08]">
        <img src={search} alt="Search" />
      </div>
      {products.length > 0 && searchQuery !== '' ? (
        <ul className="absolute z-20 top-full left-0 h-[200px] overflow-auto w-full rounded-[5px] bg-[#3c3c3c]">
          {products.map((product) => (
            <li key={product.id}>
              <Link
                className="block p-[10px] border-b border-[#ccc] text-white transition-all hover:bg-[#cccccc23]"
                to={`/shop/categories/${product.category.name}/products/${product.id}`}
                onClick={() => dispatch(setActiveProduct(product.id.toString()))}
              >
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SearchBar;
