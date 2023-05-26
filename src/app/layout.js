import './globals.css'
import { Inter, Cormorant_Upright, Karla } from 'next/font/google'

const inter = Inter(
  { subsets: ['latin'],
  variable: '--font-inter'}
)

const karla = Karla(
  { subsets: ['latin'],
  variable: '--font-karla'}
)

const cormorant = Cormorant_Upright(
  { subsets: ['latin'],
  variable: '--font-cormorant-upright',
  weight: ['300', '400', '500', '600', '700']}
)

export const metadata = {
  title: 'Latitud 25',
  description: 'Empresa dedicada al desarrollo inmobiliario. Inversión, adquisición, administración, diseño de proyectos, desarrollo y comercialización de propiedades residenciales y comerciales en la comarca lagunera.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${cormorant.variable} ${karla.variable}`}>{children}
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  )
}
