import { toast } from 'react-toastify'
import { useNavigate, useSearchParams } from 'react-router-dom'
import AdminServicesAPI from 'src/api/services/AdminServicesAPI'
import { ADMINPATH } from 'src/api/pathApi'
import ChangePasswordForm, { ChangePasswordFormValue } from 'src/components/Forms/ChangePasswordForm'

const ResetPassword = () => {
  const [searchParams] = useSearchParams()
  const access_token = searchParams.get('access_token')
  const email = searchParams.get('email')
  const navigate = useNavigate()
  const { mutateAsync: resetPass } = AdminServicesAPI.useAdd(`${ADMINPATH.auth.resetPass}`)

  // Handle reset password
  const handleSubmit = async (values: ChangePasswordFormValue) => {
    if (access_token && email) {
      try {
        await resetPass({
          email,
          token: access_token,
          password: values.password
        })

        toast.success(`Change password successfully`)
        navigate(`/admin/auth/login`)
      } catch (error) {
        toast.error('Failed to change password')
      }
    }
  }

  return (
    <div className='mt-20 flex justify-center'>
      <div className='w-[90%] lg:w-3/5'>
        <ChangePasswordForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default ResetPassword
