import { ModalContainer } from '@/container'
import { LayoutProps } from '@/models'
import { App } from './app'

export const LoginLayout = ({ children }: LayoutProps) => {
  // const dispatch = useDispatch()

  return (
    <App>
      <section className='main__layout'>
        <main>{children}</main>
        <ModalContainer />
      </section>
    </App>
  )
}
