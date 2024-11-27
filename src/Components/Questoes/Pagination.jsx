import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  console.log('paginacao');
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      console.log('eai');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <div className={styles.pagination}>
      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        className={styles.paginationButton}
      >
        Anterior
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className={styles.paginationButton}
      >
        Próxima
      </button>
    </div>
  );
};
export default Pagination;
