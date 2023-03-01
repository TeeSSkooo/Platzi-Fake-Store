import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from 'components/features/product-card/ProductCard';
import Loader from 'components/UI/loader/Loader';
import Pagination from 'components/UI/pagination/Pagination';

import productsApi from 'api/productsApi';

const ProductList: React.FC = () => {
  const [offset, setOffset] = useState<number>(0);
  const { categoryId } = useParams();

  const itemsPerPage: number = 8;

  const { data, isFetching } = productsApi.useGetAllProductsByCategoryQuery({
    id: categoryId || '',
    offset,
    limit: itemsPerPage,
  });

  const totalItemsAmount = productsApi.useGetAllProductsLengthByCategoryQuery(categoryId || '').data?.length || 0;
  const pageCount: number = Math.ceil(totalItemsAmount / itemsPerPage);

  const handlePageChange = (event: { selected: number }): void => {
    const newOffset: number = (event.selected * itemsPerPage) % totalItemsAmount;

    setOffset(newOffset);
  };

  return (
    <>
      {isFetching ? (
        <div className="mb-[30px] h-full grid place-items-center">
          <Loader />
        </div>
      ) : (
        <ul className="mb-[30px] grid grid-cols-4 gap-[30px]">
          {data?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ul>
      )}
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </>
  );
};

export default ProductList;
