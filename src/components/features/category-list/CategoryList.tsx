import CategoryCard from 'components/features/category-card/CategoryCard';
import Loader from 'components/UI/loader/Loader';

import productsApi from 'api/productsApi';

const CategoryList: React.FC = () => {
  const { data, isFetching } = productsApi.useGetAllCategoriesQuery(null);

  const categories = data ? data : [];

  if (isFetching) {
    return (
      <div className="absolute t-1/2 left-1/2 translate-x-[-50%]">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {categories.length > 0 ? (
        <ul className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </ul>
      ) : (
        <h2 className="text-center text-white font-bold text-xl">No products yet</h2>
      )}
    </>
  );
};

export default CategoryList;
