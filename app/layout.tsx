import type { Metadata } from 'next'; import './globals.css';
export const metadata:Metadata={title:'Maison Prisca Admin | Atelier dashboard',description:'Private admin dashboard for Maison Prisca Atelier, Festac, Lagos.',metadataBase:new URL(process.env.NEXT_PUBLIC_ADMIN_SITE_URL||'https://maison-prisca-admin.netlify.app'),icons:{icon:'/icon.png',apple:'/icon.png'},robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
