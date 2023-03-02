import React, { useState } from 'react';

import useAppDispatch from 'hooks/useAppDispatch';
import { setMinimumPrice, setMaximumPrice } from 'store/slices/productsSlice';

const ProductFilters: React.FC = () => {
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.currentTarget.value;

    setMinPrice(targetValue);
    localStorage.setItem('minPrice', targetValue);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.currentTarget.value;

    setMaxPrice(targetValue);
    localStorage.setItem('maxPrice', targetValue);
  };

  const handleClick = () => {
    dispatch(setMinimumPrice(minPrice));
    dispatch(setMaximumPrice(maxPrice));
  };

  return (
    <div className="p-[15px] rounded-[5px] text-white bg-[#0e1830]">
      <h2 className="mb-[20px] text-center text-3xl font-bold">Filters</h2>
      <h3 className="mb-[10px] text-xl">Price</h3>
      <div className="flex items-center gap-[10px]">
        <input
          className="px-[5px] w-[70px] h-[40px] rounded-[5px] text-black"
          type="number"
          placeholder="min"
          value={localStorage.getItem('minPrice') || minPrice}
          onChange={handleMinPriceChange}
        />
        <span className="text-lg">to</span>
        <input
          className="px-[5px] w-[70px] h-[40px] rounded-[5px] text-black"
          type="number"
          placeholder="max"
          value={localStorage.getItem('maxPrice') || maxPrice}
          onChange={handleMaxPriceChange}
        />
        <button
          className="min-h-[40px] px-[12px] rounded-[5px] bg-[#7bbd08] transition-all hover:bg-[#94c83a]"
          onClick={handleClick}
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default ProductFilters;
