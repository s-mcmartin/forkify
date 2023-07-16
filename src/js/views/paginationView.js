import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }
  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1 and other pages
    if (currentPage === 1 && numPages > 1) {
      return ` <button data-goto ='${
        currentPage + 1
      }' class="btn--inline pagination__btn--prev">
      <span>Page ${currentPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
      
    </button>`;
    }
    // Page 1 and NO other pages

    // Last Page
    if (currentPage === numPages && currentPage !== 1) {
      return `
      <button <button data-goto ='${
        currentPage - 1
      }' class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currentPage - 1}</span>
    </button> 
         
      `;
    }
    // Other Pages
    if (currentPage < numPages && currentPage !== 1) {
      return `
      <button data-goto ='${
        currentPage - 1
      }' class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currentPage - 1}</span>
    </button>
      <button data-goto ='${
        currentPage + 1
      }' class="btn--inline pagination__btn--prev">
      <span>Page ${currentPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
      
    </button> `;
    }

    return '';
  }
}

export default new PaginationView();
