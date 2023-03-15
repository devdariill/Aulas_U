import FormBasic from '../components/FormBasic'
import FormValidation from '../components/FormValidator'

function AulaForm() {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h2>Form Basic</h2>
      <FormBasic />
      <FormValidation />
    </div>
  )
}
export default AulaForm
