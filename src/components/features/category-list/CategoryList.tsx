import CategoryCard from 'components/features/category-card/CategoryCard';
import Loader from 'components/UI/loader/Loader';

import productsApi from 'api/productsApi';

const CategoryList: React.FC = () => {
  const { data, isFetching } = productsApi.useGetAllCategoriesQuery(null);

  if (isFetching) {
    return (
      <div className="absolute t-1/2 left-1/2 translate-x-[-50%]">
        <Loader />
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-4 gap-[30px]">
      {data?.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </ul>
  );
};

export default CategoryList;
