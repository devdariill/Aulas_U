// form auto complete done v 0.2
import { Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAulas } from '../context/AulaContext'
function AulaForm() {
  const navigate = useNavigate()
  const { createAula } = useAulas()
  const today = new Date().toJSON().slice(0, 10)
  const [aula, setAula] = useState({
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
    const loadAula = async () => {
      setAula({
        ...aula,
        codprod: '',
        tipcos: 'UC',
        fecapa: today,
        undfra: 0,
        pvenfra: 0
      })
    }
    loadAula()
  }, [])
  //   function renderMain (){
  //   if(Aulas.length > 0){
  //     return Aulas.map((Aula) => (
  //       <AulaCard key={Aula.codprod} Aula={Aula} />
  //     ));
  //   } else {
  //     return <p>No hay Aulas</p>
  //   }
  // }
  // }, [codProd === -1 ]);
  // if ( Aula. === undefined ) {
  // } else {
  //   if (codProd === -1) {
  //     return <div>Cargando...</div>;
  //   }
  // }
  return (
    <>
      <div className='flex justify-between items-center mb-2'>
        <h2>Crear Aula</h2>
      </div>
      <hr className='mb-5' />
      <Formik
        initialValues={aula}
        enableReinitialize
        onSubmit={async (values, actions) => {
          try {
            // # se envian datos pero al navigate se demora en actualizar y ya se tienen los ultimos Aulas en el array
            await createAula(values)
            actions.resetForm()
            navigate('/aulas')
          } catch (error) {
            console.log(
              '🚀 ~ file: Add.aulas.jsx:68 ~ onSubmit={ ~ error:',
              error
            )
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          // console.log(values),
          // values.codprod = codProd,
          <Form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 sm:grid-cols-5 gap-y-2 items-center'>
              {/* values.x establece valores desde initialValues */}
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
              {isSubmitting ? 'Cargando...' : 'Crear Aula'}
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}
export default AulaForm
