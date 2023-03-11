import { Field, Form, Formik } from 'formik'
import { useUsuarios } from '../context/UsuariosContext'
function AddUsuariosForm() {
  const { usuario } = useUsuarios()
  return (
    <Formik
      initialValues={usuario}
      enableReinitialize
      onSubmit={async (values, actions) => {
        try {
          if (values.nivusu === '') values.nivusu = 1
          console.log(values)
        } catch (error) {
          console.log(
            '🚀 ~ file: Add.usuarios.jsx:14 ~ onSubmit={ ~ error',
            error
          )
        }
        // actions.resetForm();
      }}
    >
      {/* 1 handleChange  : cambia el estado de initialValues */}
      {/* 2 handleSunbmit : envia los datos actualues al  */}
      {/* 3 values : genera los valores iniciales despues de enviar */}
      {({ handleChange, handleSubmit, values, isSubmiting }) => (
        <Form onSubmit={handleSubmit}>
          <div className='grid gap-y-2 items-center'>
            <label className='text-center rounded-md font-bold py-1'>
              nomusu
            </label>
            <input
              onChange={handleChange}
              type='text'
              name='nomusu'
              placeholder='Usuario'
              value={values.nomusu}
            />
            <label className='text-center rounded-md font-bold py-1'>
              nitter
            </label>
            <input
              onChange={handleChange}
              type='text'
              name='nitter'
              placeholder='nitter'
              value={values.nitter}
            />
            <label className='text-center col-span-1'>nivusu</label>
            <Field
              as='select'
              name='nivusu'
              className='bg-zinc-900 py-1.5 border-solid border-2 border-zinc-400 rounded-lg'
              onChange={handleChange}
            >
              <option className='text-center' value='1'>
                1
              </option>
              <option className='text-center' value='2'>
                2
              </option>
              <option className='text-center' value='3'>
                3
              </option>
              <option className='text-center' value='4'>
                4
              </option>
              <option className='text-center' value='5'>
                5
              </option>
            </Field>
            <label className='text-center rounded-md font-bold py-1'>
              empcod
            </label>
            <input
              onChange={handleChange}
              type='text'
              name='empcod'
              placeholder='empcod'
              value={values.empcod}
            />
            <label className='text-center rounded-md font-bold py-1'>
              tokusu
            </label>
            <input
              onChange={handleChange}
              type='text'
              name='tokusu'
              placeholder='tokusu'
              value={values.tokusu}
            />
            <button
              type='submit'
              className='bg-zinc-400 text-black outline-none border-none rounded-lg py-1 mt-3 font-semibold'
              disabled={isSubmiting}
            >
              {isSubmiting ? 'Saving' : 'Guardar Usuario'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
export default AddUsuariosForm
