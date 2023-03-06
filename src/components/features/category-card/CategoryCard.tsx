import { Link } from 'react-router-dom';

import CategoryCardProps from 'types/props/CategoryCardProps';

import useAppDispatch from 'hooks/useAppDispatch';
import { setActiveCategory } from 'store/slices/productsSlice';

import styles from './CategoryCard.module.css';

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const dispatch = useAppDispatch();

  return (
    <li className={`${styles.categoryItem} overflow-hidden rounded-[5px]`}>
      <Link
        className="relative before:absolute before:top-0 before:z-10 before:left-0 before:w-full before:h-full before:bg-[#0000008e]"
        to={`/shop/categories/${category.id}/products`}
        onClick={() => dispatch(setActiveCategory(category.name))}
      >
        <img
          className="relative w-full h-[250px] object-cover transition-all duration-300"
          src={category.image}
          alt={category.name}
        />
        <span className="absolute z-20 top-1/2 left-1/2 block w-full text-center text-white font-semibold text-2xl translate-x-[-50%] translate-y-[-50%]">
          {category.name}
        </span>
      </Link>
    </li>
  );
};

export default CategoryCard;
