import View from './View';
import previewView from './previewView';
import icons from '../../img/icons.svg';
import previewView from './previewView';
import View from './View';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find some great recipes to bookmark!';
  _successMessage = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join();
  }
}

export default new BookmarksView();
