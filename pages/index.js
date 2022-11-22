import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BG Agency</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div class="w-full h-screen bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
     <header>
     <nav class="px-4 lg:px-6 py-6">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" class="flex items-center">
                <Image src="/images/logo.png" class="mr-3 h-6 sm:h-12" alt="Logo" width={200} height={184}/>
            </a>
            <div class="flex items-center lg:order-2">
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link href="#" class="block py-2 pr-4 pl-3 text-white" aria-current="page">Works</Link>
                    </li>
                    <li>
                        <Link href="#" class="block py-2 pr-4 pl-3 text-gray-300 hover:text-white">About Us</Link>
                    </li>
                    <li>
                        <Link href="#" class="block py-2 pr-4 pl-3 text-gray-300 hover:text-white">Clients</Link>
                    </li>
                    <li>
                        <Link href="#" class="block py-2 pr-4 pl-3 text-gray-300 hover:text-white">Contact</Link>
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>
      </header>

      <div class="absolute inset-x-0 bottom-20 text-center text-white text-6xl uppercase">
        <h1 class="font-extralight">Creative Solutions</h1>
        <p class="font-semibold">For you</p>
      </div>
     </div>
     
      <div class="py-16 px-4 about-us text-center">
        <div class="content">
        <p>Bikin Gemes Agency is a creative service agency
with a disruptive business model.</p>
<p>Traditionally clients are bridged through Key Accounts, 
we, however, analyses your industry fields,
and find someone passionate in our team
to run your projects.</p>

<p class="mt-8">We believe in the joy of works
created by our enthusiast creatives. All these create
an enthusiastic persona of each creative works done.
</p>
        </div>
        

<p class="mt-8 uppercase text-4xl font-light">Pouring our passion into work</p>
<p class="uppercase font-bold text-4xl">Is no work at all</p>
      </div>


<div class="flex items-end w-full h-screen bg-[url('/images/portfolio/mandala.jpg')] bg-cover bg-center">
<div class="portfolio-text py-16 px-4 mx-auto text-white">
        <h2 class="text-4xl font-semibold uppercase mb-2">Mandala <br/> Finance</h2>
        <p>Developing and bringing consistency <br/>to one of Indonesia's leading multi-finance brand</p>
     
</div>
</div>


<div class="flex items-end w-full h-screen bg-[url('/images/portfolio/carsome.jpg')] bg-cover bg-center">
<div class="portfolio-text py-16 px-4 mx-auto text-white">
        <h2 class="text-4xl font-semibold uppercase mb-2">Carsome</h2>
        <p>Catchy jingle for multi-media applications,<br/>
including radio, spotify ads, and digital videos.</p>
     
</div>
</div>

<div class="flex items-end w-full h-screen bg-[url('/images/portfolio/rosty.jpg')] bg-cover bg-center">
<div class="portfolio-text py-16 px-4 mx-auto text-white">
        <h2 class="text-4xl font-semibold uppercase mb-2">Rosty</h2>
        <p>Monthly social media maintenance that includes<br/>
strategic & editorial planning, visual asset creation</p>
     
</div>
</div>

<div class="flex items-end w-full h-screen bg-[url('/images/portfolio/mana.jpg')] bg-cover bg-center">
<div class="portfolio-text py-16 px-4 mx-auto text-white">
        <h2 class="text-4xl font-semibold uppercase mb-2">House of Mana</h2>
        <p>Monthly social media maintenance that includes<br/>
strategic & editorial planning, visual asset creation</p>
     
</div>
</div>

<div class="flex items-end w-full h-screen bg-[url('/images/portfolio/cafe.jpg')] bg-cover bg-center">
<div class="portfolio-text py-16 px-4 mx-auto text-white">
        <h2 class="text-4xl font-semibold uppercase mb-2">El Cafe Resto</h2>
        <p>Monthly social media maintenance that includes<br/>
strategic & editorial planning, visual asset creation</p>
     
</div>
</div>

<div class="py-16 px-4 mx-auto bg-white">
  <h4 class="text-4xl font-semibold text-center mb-10">Clients we've worked with</h4>
  <Image class="mx-auto" src="/images/clients.jpg" width={800} height={120} />
</div>
        

      <footer class="bg-black mx-auto py-20">
      <div class="portfolio-text mx-auto grid grid-cols-3 gap-12">
  <div><Image src="/images/footer-logo.png" width={277} height={332} /></div>
  <div class="flex flex-col justify-between text-center">
    <div>
    <p class="text-gray-400">Jakarta | Indonesia</p>
    <p class="text-white mt-8">New Business</p>
    <p class="text-gray-400">Sheilla@bikingemes.com</p>
    <p class="text-white mt-8">Jobs</p>
    <p class="text-gray-400">Sheilla@bikingemes.com</p>
    </div>
    <h3 class="text-5xl text-white font-bold uppercase">BG Agency</h3>
    </div>
  <div class="flex items-end">
    <Link class="mr-4" href="#"><Image src="/images/wa.png" width={50} height={50} /></Link>
     <Link href="#"><Image src="/images/ig.png" width={50} height={50} /></Link>
  </div>
</div>
      </footer>
    </div>
  )
}
