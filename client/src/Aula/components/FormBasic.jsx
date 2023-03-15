import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAulas } from '../context/AulaContext'

const FormBasic = () => {
  const { createAula } = useAulas()
  const [aula, setAula] = useState({
    tipo: '',
    nombre: ''
  })
  useEffect(() => {
    // const today = new Date().toJSON().slice(0, 10)
    const loadAula = async () => {
      setAula({
        tipo: 1,
        nombre: 100
      })
    }
    loadAula()
    console.log(aula)
  }, [])
  const { register, handleSubmit, reset } = useForm({ defaultValues: aula })
  const customSubmit = (data) => {
    console.log(data)
    createAula(aula)
  }
  useEffect(() => {
    reset(aula)
  }, [])
  return (
    <>
      <form onSubmit={handleSubmit(customSubmit)} className='form-react'>
        <div className='form-control'>
          <label>tipo</label>
          <input type='number' {...register('tipo')} />
        </div>
        <div className='form-control'>
          <label>nombre</label>
          <input type='text' {...register('nombre')} />
        </div>
        <button type='submit'>Send</button>
        <button type='button' onClick={() => reset()}>Reset</button>
      </form>
    </>
  )
}

export default FormBasic
