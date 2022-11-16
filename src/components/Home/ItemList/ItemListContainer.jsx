import gif from './../../../assets/animations/cargando.gif';
import { useFetch } from '../../../hooks';
import { ItemList } from './';

export const ItemListContainer = () => {
  const { datos, loading } = useFetch();

  return loading ? (
    <div className='spinner-border text-info' role='status' />
  ) : (
    <ItemList datos={datos} />
  );
};
