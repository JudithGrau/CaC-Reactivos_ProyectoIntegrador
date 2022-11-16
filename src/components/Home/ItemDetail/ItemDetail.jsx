import { CartBox } from '../../Cart';
import '../../Styles/ItemDetail.css' 

export const ItemDetail = ({ item }) => {
  const {
    id,
    nombre,
    origen,
    finca,
    proceso,
    varietal,
    imagen,
    precio,
  } = item;

  return (
    <div>
      
      <div className='container mt-2'>
        <div className='detail'>
          <div className='image'>
            <img src={imagen} alt={nombre} />
          </div>
          <div className='item'>
            <div className='text-start'>
              <h2>{nombre}</h2>
              <span className='fw-bold'>Precio: </span> ARS$ {precio}
              <hr />
              <CartBox item={item} />
              <hr />
              <div className="descripcion">
                <h6 className='fw-bold'>Descripción:</h6>
                <div>
                  <span className='fw-bold'>Codigo del Producto: </span> {id.substring(0, 25)}
                </div>
                <div>
                  <span className='fw-bold'>Origen: </span> {origen}
                </div>
                <div>
                  <span className='fw-bold'>Finca: </span> {finca}
                </div>
                <div>
                  <span className='fw-bold'>Proceso: </span> {proceso}
                </div>
                <div>
                  <span className='fw-bold'>Varietal: </span> {varietal}
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
