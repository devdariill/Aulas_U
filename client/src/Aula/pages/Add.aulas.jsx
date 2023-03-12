import { useEffect, useState } from 'react'
import { useAulas } from '../context/AulaContext'
import { useForm } from 'react-hook-form'
function AulaForm() {
  const { register, handleSubmit } = useForm()
  const customSubmit = (aula) => {
    console.log(aula)
    createAula(aula)
    // createAula(aula)
  }

  // const navigate = useNavigate()
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
    <div className='flex flex-col justify-center items-center gap-5'>
      <h2>Form Basic</h2>
      <form onSubmit={handleSubmit(customSubmit)}>
        <div className='gap-5 grid'>
          <div className='flex gap-x-5'>
            <label>Nombre</label>
            <input className='w-full' type='text' {...register('nombre')} />
          </div>
          <div className='flex gap-x-5'>
            <label>Tipo</label>
            <input className='w-full' type='number' {...register('tipo')} />
          </div>
          <button type='submit' className='w-full bg-zinc-300 text-black'>
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
export default AulaForm
