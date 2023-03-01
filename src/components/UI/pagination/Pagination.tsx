import ReactPaginate from 'react-paginate';

import PaginationProps from 'types/props/PaginationProps';

import styles from './Pagination.module.scss';

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      className={styles.pagination}
      activeLinkClassName={styles.activeLink}
      disabledLinkClassName={styles.disabledLink}
      pageCount={pageCount}
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      previousLabel="<"
      breakLabel={null}
      nextLabel=">"
    />
  );
};

export default Pagination;
