export default interface PaginationProps {
  pageCount: number;
  onPageChange: (event: { selected: number }) => void;
}
