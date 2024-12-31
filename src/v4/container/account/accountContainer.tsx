import { ReactNode } from 'react'

interface AccountContainerProps {
  children: ReactNode
  heading: string
  // breadcrumbList: BreadcrumbItem[]
  headerMobileTitle: string
}

export const AccountContainer = (props: AccountContainerProps) => {
  const { children } = props
  // const dispatch = useDispatch()
  // const isOpenModalOptionAccount = useSelector((state: RootState) => state.common.isOpenModalOptionAccount)

  return (
    <>
      <div className='account__option-layout-body'>{children}</div>
    </>
  )
}
