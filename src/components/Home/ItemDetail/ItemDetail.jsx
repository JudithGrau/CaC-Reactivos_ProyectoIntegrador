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
<<<<<<< HEAD
              <h2>{nombre}</h2>
              <span className='fw-bold'>Precio: </span> ARS$ {precio}
=======
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
>>>>>>> 683e021e6010a33920cf623fed9037fa02fcd2c6
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
