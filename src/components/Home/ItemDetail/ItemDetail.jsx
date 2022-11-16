import { CartBox } from '../../Cart';
import { Item } from './';

export const ItemDetail = ({ item }) => {
  const {
    id,
    nombre,
    origen,
    finca,
    altura,
    proceso,
    varietal,
    marca,
    imagen,
    precio,
  } = item;

  return (
    <div>
      <h1>{nombre}</h1>
      <h3>{marca}</h3>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col'>
            <img src={imagen} alt={nombre} />
          </div>
          <div className='col align-self-center'>
            <div className='text-start'>
              <h4>Descripción del producto:</h4>
              <p style={{ textAlign: 'justify' }}>
                <span className='fw-bold'>Origen: </span>
                {origen}
              </p>
              <p style={{ textAlign: 'justify' }}>
                <span className='fw-bold'>Finca: </span>
                {finca}
              </p>
              <p style={{ textAlign: 'justify' }}>
                <span className='fw-bold'>Altura: </span>
                {altura}
              </p>
              <p style={{ textAlign: 'justify' }}>
                <span className='fw-bold'>Proceso: </span>
                {proceso}
              </p>
              <p style={{ textAlign: 'justify' }}>
                <span className='fw-bold'>Varietal: </span>
                {varietal}
              </p>
              <br />

              <h6>Id del producto:</h6>
              <small>{id.substring(0, 25)}</small>
              <br />
              <br />
                            
              <Item />
              <hr />
              <CartBox item={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
