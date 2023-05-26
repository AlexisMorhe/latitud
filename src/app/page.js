import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-50">
      <Header/>
      <Hero />
      <div className='bg-slate-900 min-h-screen w-full mt-24 p-24 text-4xl'>Latitud algo...</div>
    </main>
  )
}
