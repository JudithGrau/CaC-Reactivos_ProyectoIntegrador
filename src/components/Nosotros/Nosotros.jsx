import '../Styles/Nosotros.css' 
import imagen from '../../assets/img/nosotros.jpg'

export const Nosotros = () => {
  return (
<<<<<<< HEAD
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
=======
    <section className='container d-flex justify-content-center align-items-center pt-5'>
      <div className='d-flex flex-column m-5'>

        <h2 className='p-3'>Nosotros</h2>

        

        <p className='text-start'>
          Atraídos por el particular aroma e inconfundible sabor del café
          descubrimos en él un mundo nuevo y maravilloso para nosotros. Así fue
          como poco a poco comenzamos a centrar especial atención en las
          distintas variedades y texturas, compartiendo nuestra pasión
          trasladándola a todos los hogares y oficinas del país un café de
          excelente calidad.
        </p>
        <p className='text-start'>
          No solo comenzamos a comercializar café, también en brindar un
          completo asesoramiento con todos los productos relacionados con él y
          la manera de poder disfrutar el ritual de tomarlo y compartir este
          momento.
        </p>
        <p className='text-start'>
          “Queremos que encuentre en nosotros no solo a un proveedor, sino a un
          amigo con quién sentarse, conversar y disfrutar de un rico café”.
        </p>
      </div>
      <aside className='d-flex align-items-center'>
        <img
          src='https://cdn.pixabay.com/photo/2017/07/31/19/27/coffee-2560260_640.jpg'
          className='rounded'
        />
      </aside>
    </section>
>>>>>>> 683e021e6010a33920cf623fed9037fa02fcd2c6
  );
};
