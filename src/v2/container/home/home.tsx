import { ReactNode } from 'react'

interface HomeProps {
  children: ReactNode
  heading: string
  // breadcrumbList: BreadcrumbItem[]
  headerMobileTitle: string
}

export const Home = (props: HomeProps) => {
  const { children } = props
  // const dispatch = useDispatch()
  // const isOpenModalOptionAuth = useSelector((state: RootState) => state.common.isOpenModalOptionAuth)

  return (
    <>
      <div className='Auth__option-layout-body'>{children}</div>
    </>
  )
}
