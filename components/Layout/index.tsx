import * as React from 'react'
import { block } from 'bem-cn'
import './style.scss'

const m = block('main')
const h = block('header')
const f = block('footer')

export default ({ children }: {children: React.ReactNode}) => (
  <div className={m()}>
    <header className={h()}>Header</header>
    {children}
    <footer className={f()}>Footer</footer>
  </div>
)
