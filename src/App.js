import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './store/Catalog/actions';
import { isEmptyObject } from './utils/validations';
import HeaderStore from './components/Header';
import { ContentCards, Rodape } from './components';

function App() {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products)

  console.log(products)
  useEffect(() => {
    if (isEmptyObject(products)) {
      dispatch(getProducts());
    }
  }, [])

  return (
    <>
    <HeaderStore/>
    <ContentCards/>
    </>
  );
}

export default App;
