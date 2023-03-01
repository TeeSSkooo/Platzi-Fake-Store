import { useParams } from 'react-router-dom';

import ProductCard from 'components/features/product-card/ProductCard';

import productsApi from 'api/productsApi';

const ProductList: React.FC = () => {
  const { categoryId } = useParams();

  const { data } = productsApi.useGetAllProductsByCategoryQuery(categoryId!);

  return (
    <ul className="grid grid-cols-4 gap-[30px]">
      {data?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ul>
  );
};

export default ProductList;
