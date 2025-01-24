import { toast } from 'react-toastify'
import HandleSaveEmail from 'src/utils/HandleSaveEmail'
import AdminServicesAPI from 'src/api/services/AdminServicesAPI'
import { ADMINPATH } from 'src/api/pathApi'
import { ForgotPasswordForm, ForgotPasswordFormValues } from 'src/components/Forms'

const ForgotPassword = () => {
  const { mutateAsync: sendMail } = AdminServicesAPI.useAdd(`${ADMINPATH.auth.forgotPass}`)
  // Handle send OTP to your mail
  const handleSubmit = async (values: ForgotPasswordFormValues) => {
    try {
      await sendMail({
        email: values.email
      })

      HandleSaveEmail.setEmail('EMAIL', values.email)
      toast.success('Please check mail to get OTP')
    } catch (error) {
      console.log('error', error)
      toast.error('Failed to send mail')
    }
  }

  return (
    <div className='mt-20 flex justify-center'>
      <div className='w-[90%] lg:w-3/5'>
        <ForgotPasswordForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default ForgotPassword
