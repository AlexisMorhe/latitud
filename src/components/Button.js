import Link from "next/link";

const baseStyles = {
  solid: 'block text-center sm:mb-0 px-4 sm:px-8 rounded-md font-semibold transition-all hover:scale-105 shadow-md',
  outline: 'block text-center sm:mb-0 px-4 sm:px-8 rounded-md font-semibold transition-all border-2 hover:scale-105'
}

const variantStyles = {
  solid: {
    rainforest: 'bg-rainforest hover:bg-caribbean-green text-clock-chimes-thirteen',
    'up-forest-green': 'bg-up-forest-green hover:bg-coach-green text-toasted-marshmallow'
  },
  outline: {
    slate: 'border-slate-900 text-slate-900 shadow-md',
    white: 'ring-slate-50 text-slate-50 shadow-md',
    blue: 'border-sky-900 text-sky-900 shadow-md',
    gray: 'border-slate-500 text-slate-500 shadow-md'
  }
}

const sizeStyles = {
  small: 'py-2.5 sm:py-3 text-base',
  medium: 'text-lg py-2.5',
  big: 'text-xl py-3 w-72'
}


export default function Button({variant = 'solid', color = 'rainforest', size = 'medium', className = '', href, onClick, scroll = true, children}) {

  className = `${baseStyles[variant]} ${variantStyles[variant][color]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return <Link href={href} scroll={scroll} className={className}>{children}</Link>
  } else if (onClick) {
    return <button onClick={onClick} className={className}>{children}</button>
  } else {
    return <button className={className}>{children}</button>
  }
}