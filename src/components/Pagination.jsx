import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
export function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null
  return (
    <div className="pagination-middle">
      <button className="btn-page" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
      <FaAngleDoubleLeft />
      </button>
      <span className="page-indicator"> Səhifə <strong>{currentPage}</strong> / {totalPages}</span>
      <button className="btn-page" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
      <FaAngleDoubleRight />
      </button>
    </div>
  );
}