import { SearchForm } from './components/SearchForm/SearchForm';
import { BookList } from './components/BookList/BookList';
import { IBook } from './types/types';
import { useAppSelector } from './hooks/redux';
import classes from './App.module.css'



function App() {

const { books } = useAppSelector(state => state.search)

  return (
    <div className={classes.App}>
      <SearchForm />
      <BookList books={books}/>
    </div>
  );
}

export default App;
