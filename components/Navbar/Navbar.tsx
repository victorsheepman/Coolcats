import Link from 'next/link'
import React from 'react'
import style from './Navbar.module.css'
export const Navbar = () => {
  return (
    <header className={style.header}>
      <Link href={'/'}> 
        <figure className={style.header__logo}>
          <img src="/images/logo.png" alt="" />
        </figure>
      </Link>
     
      <h1>CoolCats</h1>
      {/*<div className={style.header__buttons}>
        <button className={style.header__button__blue}>Iniciar sesión</button>
        <button className={style.header__button__white}>Iniciar sesión</button>
      </div>*/}
    </header>
  )
}
