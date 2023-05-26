'use client'
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import {FiMenu} from "react-icons/fi";
import {IoClose} from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";

import NavLink from "./NavLink";
import Button from "./Button";
import Logo from '/public/logo.svg';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Contacto', href: '#contacto'}
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (openMenu) {
      setOpenMenu(!openMenu)
    }
  }, [pathname])

  return(
    <>
      <header className='w-full h-24 md:pr-0 flex justify-between md:justify-between items-center backdrop-blur-xl fixed z-20 font-karla text-secondary-blue'>
        <div className='flex justify-around md:justify-between items-center pl-4 md:px-12 md:justify-between w-2/3 md:w-full'>
          <div className='pt-0.5 block md:hidden'>
            <FiMenu onClick={() => setOpenMenu(openMenu => !openMenu)} size={25} />
          </div>
          <Link className='transition-all pl-4 sm:pl-0 hover:scale-105 flex items-center' href='/'>
            <Image width={170} src={Logo} alt='Logo del sitio' priority/>
          </Link>
          <nav className='hidden md:flex justify-around items-center w-52 md:w-96'>
            {navigation.map((item, index) => <NavLink key={index} scroll={index === 0} href={item.href} pathname={pathname}>{item.name}</NavLink>)}
          </nav>
        </div>
        {/*<div className='w-1/4 h-full bg-slate-800 md:w-44 flex justify-center items-center'>*/}
        {/*  <p className='text-slate-50'>Contacto</p>*/}
        {/*  /!*<Button scroll={false} href='#contacto'>Regístrate</Button>*!/*/}
        {/*</div>*/}
      </header>
      <div className={openMenu ? 'block fixed overflow-y-clip z-20 w-full h-full flex flex-col bg-rainforest'
        : 'hidden'}>
        <div className='h-24 w-full flex items-center justify-start pt-1 pl-4'>
          <IoClose onClick={() => setOpenMenu(menu => !menu)} size={30} />
        </div>
        <div className='flex flex-col md:hidden justify-around text-lg items-center pt-10 w-full'>
          {navigation.map((item, index) => <NavLink mobile={true} key={index} href={item.href} pathname={pathname}>{item.name}</NavLink>)}
          <div className='w-5/6 pt-16 h-52 flex flex-col justify-around'>
            {/*<Button size='medium' color='white' variant='outline' href='/registro'>Inicia Sesión</Button>*/}
            <Button size='medium' color='up-forest-green' scroll={false} href='#contacto'>Registrate</Button>
          </div>
        </div>
      </div>
    </>
  )
}