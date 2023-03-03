import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from 'components/features/product-card/ProductCard';
import Loader from 'components/UI/loader/Loader';
import Pagination from 'components/UI/pagination/Pagination';

import productsApi from 'api/productsApi';
import useAppSelector from 'hooks/useAppSelector';

const ITEMS_PER_PAGE = 9;

const ProductList: React.FC = () => {
  const [offset, setOffset] = useState<number>(0);
  const { categoryId } = useParams();
  const { minPriceFilter, maxPriceFilter } = useAppSelector((state) => state.products);

  const filteredProductsFetching = productsApi.useGetFilteredProductsQuery({
    min: minPriceFilter,
    max: maxPriceFilter,
    categoryId: categoryId || '',
  }).isFetching;

  const filteredProducts = productsApi.useGetFilteredProductsQuery({
    min: minPriceFilter,
    max: maxPriceFilter,
    categoryId: categoryId || '',
  }).data;

  const { data, isFetching } = productsApi.useGetAllProductsByCategoryQuery({
    id: categoryId || '',
    offset,
    limit: ITEMS_PER_PAGE,
  });

  const products = data ? data : [];

  const totalItemsAmount = productsApi.useGetAllProductsLengthByCategoryQuery(categoryId || '').data?.length || 0;
  const pageCount = Math.ceil(totalItemsAmount / ITEMS_PER_PAGE);

  const handlePageChange = (event: { selected: number }): void => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % totalItemsAmount;

    setOffset(newOffset);
  };

  if (!minPriceFilter || !maxPriceFilter) {
    return (
      <div className="flex-auto">
        <ul className="mb-[30px] grid grid-cols-3 gap-[30px]">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ul>
        {products.length > 1 && <Pagination pageCount={pageCount} onPageChange={handlePageChange} />}
      </div>
    );
  } else if (filteredProductsFetching) {
    return (
      <div className="flex-auto">
        <div className="mb-[30px] h-full grid place-items-center">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-auto">
      {isFetching ? (
        <div className="mb-[30px] h-full grid place-items-center">
          <Loader />
        </div>
      ) : (
        <ul className="mb-[30px] grid grid-cols-3 gap-[30px]">
          {filteredProducts?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
