import Link from "next/link";

export default function NavLink({href, pathname, mobile = false, scroll = true, children}) {

  let className = '';
  if (pathname && mobile){
    className = pathname == href ? 'relative font-semibold pl-10 py-4 w-full'
      : 'relative font-semibold pl-10 py-4 w-full'
  } else if (pathname) {
    className = pathname == href ? 'hidden font-semibold sm:inline relative after:absolute after:ml-[-0.5rem] after:left-1/2 after:top-7 after:h-0.5 after:w-4 after:rounded-full after:bg-secondary-blue'
      : 'hidden font-semibold sm:inline relative after:absolute after:top-7 after:ml-[-0.5rem] after:left-1/2 after:h-0.5 after:w-4 after:left after:rounded-full after:bg-secondary-blue after:scale-x-0 after:transition-all hover:after:scale-x-100'
  } else {
    className = 'hidden font-semibold sm:inline relative after:absolute after:top-7 after:ml-[-0.5rem] after:left-1/2 after:h-0.5 after:w-4 after:left after:rounded-full after:bg-secondary-blue after:scale-x-0 after:transition-all hover:after:scale-x-100'
  }

  return (
    <Link href={href} scroll={scroll} className={className}>
      {children}
    </Link>
  )
}