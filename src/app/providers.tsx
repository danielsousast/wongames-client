import { GlobalStyles } from '@/styles/global'
import React, { Fragment, PropsWithChildren } from 'react'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <GlobalStyles />
      {children}
    </Fragment>
  )
}
