// form auto complete done v 0.2
import { Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAulas } from '../context/ProductoContext'
import { deleteProductoRequest } from '../api/aulas.api'
// TODO : CAMPOS AUTOMATICOS NO ENVIARLOS
function ProductoForm() {
  const params = useParams()
  // console.log(params);
  const navigate = useNavigate()
  const { getProducto, updateProducto } = useAulas()
  const today = new Date().toJSON().slice(0, 10)
  const [producto, setProducto] = useState({
    // "diasfven": 0,
    codprod: '',
    codbar: '',
    nomprod: '',
    exiprod: '',
    tipcos: 'UC',
    venprod: '',
    fecapa: '',
    undfra: '',
    pvenfra: ''
  })
  // useEffect se ejecuta de primero
  useEffect(() => {
    const loadProducto = async () => {
      if (params.codprod) {
        const producto = await getProducto(params.codprod)
        setProducto({
          codprod: producto.codprod,
          codbar: producto.codbar,
          nomprod: producto.nomprod,
          exiprod: producto.exiprod,
          tipcos: producto.tipcos,
          venprod: producto.venprod,
          fecapa: producto.fecapa,
          undfra: producto.undfra,
          pvenfra: producto.pvenfra
        })
      }
    }
    loadProducto()
    // {!params.codprod ?  window.location.reload(false) : null}
  }, [])
  //   function renderMain (){
  //   if(productos.length > 0){
  //     return productos.map((producto) => (
  //       <ProductoCard key={producto.codprod} producto={producto} />
  //     ));
  //   } else {
  //     return <p>No hay productos</p>
  //   }
  // }
  // }, [codProd === -1 ]);
  // if ( producto. === undefined ) {
  if (params.codprod && producto.codprod === '') {
    // center text in div
    return (
      <div className='grid h-screen place-items-center '>
        <p className='text-2xl'>Producto no encontrado</p>
      </div>
    )
  }
  // } else {
  //   if (codProd === -1) {
  //     return <div>Cargando...</div>;
  //   }
  // }
  return (
    <>
      <div className='flex justify-between items-center mb-2'>
        <h2>Editar Producto</h2>
        {params.codprod && (
          <button
            className='py3 px-4 bg-red-900 text-white rounded'
            onClick={() => {
              // eslint-disable-next-line no-unused-expressions
              window.confirm('Delete the item?', false) &&
                (deleteProductoRequest(producto.codprod),
                navigate('/productos'))
            }}
          >
            Delete
          </button>
        )}
        {
          <>
            {/* TODO: promp Search  */}
            {/* <button onClick={() =>window.prompt("Do you really want to leave?")}>Exit</button> */}
            {/* <button
              onClick={() => {
                if (window.confirm("Delete the item?")) {
                  deleteProductoRequest(producto.codprod);
                }
              }}
            >
              Sup
            </button> */}
          </>
        }
      </div>
      <hr className='mb-5' />
      <Formik
        initialValues={producto}
        // initialValues={
        //   params.codprod
        //     ? producto
        //     : {
        //         codprod: codProd,
        //         codbar: codProd,
        //         nomprod: "",
        //         exiprod: "",
        //         pvconi: "",
        //         fecapa: today,
        // //         undfra: 1,
        // //         pvenfra: 0,
        //       }
        // }
        enableReinitialize
        onSubmit={async (values, actions) => {
          if (params.codprod) {
            values.fecapa = today
            // updateProducto(params.codprod,values).then((res) => console.log(res));
            await updateProducto(params.codprod, values)
          }
          actions.resetForm()
          navigate('/productos')
          // refresca los campos  despues de enviar
          // setProducto({
          //   codprod: "",
          //   codbar: "",
          //   nomprod: "",
          //   exiprod: "",
          // })
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          // console.log(values),
          // values.codprod = codProd,
          <Form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 sm:grid-cols-5 gap-y-2 items-center'>
              {/* values.x establece valores desde initialValues */}
              {/* {params.codprod
                ? null
                : codProd === values.codbar
                ? null
                : window.location.reload(false)} */}
              {/* {!params.codprod ?( codProd===values.codbar ? null: window.location.reload(false)) : null} */}
              <label>codprod</label>
              <input
                onChange={(e) => {
                  handleChange(e)
                }}
                type='number'
                name='codprod'
                placeholder='codprod'
                className='col-span-4 pl-2'
                required
                value={values.codprod}
                // value={codProd}
              />
              <label>codbar</label>
              <input
                onChange={handleChange}
                type='number'
                name='codbar'
                placeholder={values.codprod}
                className='col-span-4 pl-2'
                value={values.codbar}
                // value={values.codbar*1000}
              />
              <label>nomprod</label>
              <input
                value={values.nomprod}
                onChange={handleChange}
                type='text'
                name='nomprod'
                required
                placeholder='nomprod'
                className='col-span-4 pl-2'
                autoFocus
              />
              <label>exiprod</label>
              <input
                value={values.exiprod}
                onChange={handleChange}
                type='number'
                name='exiprod'
                required
                placeholder='exiprod'
                className='col-span-4 pl-2'
              />
              <label>venprod</label>
              <input
                value={values.venprod}
                onChange={handleChange}
                type='number'
                name='venprod'
                required
                placeholder='1000'
                className='col-span-4 pl-2'
              />
              <label>undfra</label>
              <input
                value={values.undfra}
                onChange={handleChange}
                type='number'
                name='undfra'
                placeholder='0'
                className='col-span-4 pl-2'
              />
              <label>pvenfra</label>
              <input
                value={values.pvenfra}
                onChange={handleChange}
                type='number'
                name='pvenfra'
                placeholder='0'
                className='col-span-4 pl-2'
                required
              />
            </div>
            <button
              type='submit'
              className='bg-zinc-700 w-full mt-3'
              disabled={isSubmitting}
              // onClick={() => window.location.reload(false)}
            >
              {isSubmitting ? 'Cargando...' : 'Editar Producto'}
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}
export default ProductoForm
