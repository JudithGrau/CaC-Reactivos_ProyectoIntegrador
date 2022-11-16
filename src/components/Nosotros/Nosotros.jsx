import '../Styles/Nosotros.css' 
import imagen from '../../assets/img/nosotros.jpg'

export const Nosotros = () => {
  return (
    <>
    <h2 className="p-3">Nosotros</h2>
    <div className='contenedor'>
        <div className='parrafos'>
            <p>
              Atraídos por el particular aroma e inconfundible sabor del café
              descubrimos en él un mundo nuevo y maravilloso para nosotros. Así fue
              como poco a poco comenzamos a centrar especial atención en las
              distintas variedades y texturas, compartiendo nuestra pasión
              trasladándola a todos los hogares y oficinas del país un café de
              excelente calidad.
            </p>
            <p>
              No solo comenzamos a comercializar café, también en brindar un
              completo asesoramiento con todos los productos relacionados con él y
              la manera de poder disfrutar el ritual de tomarlo y compartir este
              momento.
            </p>
            <p>
              “Queremos que encuentre en nosotros no solo a un proveedor, sino a un
              amigo con quién sentarse, conversar y disfrutar de un rico café”.
            </p>
        </div>

        <div className='image-content'>
            <img
            className='img-fluid pic'
            src={imagen}
          />
        </div>
    </div>
    </>
  );
};
