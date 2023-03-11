import { Form, Formik } from 'formik'
import { useAulas } from '../context/ProductoContext'

function Search() {
  const { searchProductos } = useAulas()

  return (
    <div className='block self-center'>
      <Formik
        initialValues={{
          search: ''
        }}
        enableReinitialize
        onSubmit={async (values) => {
          await searchProductos(values)
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <input
              autoFocus
              type='text'
              name='search'
              placeholder='search'
              onChange={handleChange}
              value={values.search}
              className='border-2 border-gray-300 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full'
            />
            <button hidden type='submit'>
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default Search
