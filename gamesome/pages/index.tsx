import type { NextPage } from 'next'
// import Head from 'next/head'
import Image from 'next/image'
import bg from '../public/background.png'
import hyperx from '../public/hyperx.png'
import steelseries from '../public/steelseries.png'
import razer from '../public/razer.png'
import msi from '../public/msi.png'

const Home: NextPage = () => {
  return (
    <div>
      <div className="bg- flex h-[800px] w-full justify-center bg-[black]">
        <div className="mt-72 h-full w-[1194px]">
          <h1 className="text-8xl font-black text-white">Gamesome</h1>
          <h2 className="mt-4 text-2xl text-white">
            Upgrade your gaming experience!
          </h2>
          <div className="mt-12 h-[60px] w-[200px] justify-items-start rounded-full bg-[#1D5EDD]">
            <div className="flex h-full items-center justify-center">
              <h1 className="text-2xl text-base font-bold text-white">
                Start Shopping
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-[-90px] h-[180px] w-[1194px] rounded-2xl bg-[white] drop-shadow-xl">
          <div className="mt-6 flex justify-center">
            <h1 className="text-base font-bold">Popular Brand</h1>
          </div>
          <div className="mt-6 flex w-full justify-center">
            <Image alt="hyperx" src={hyperx}></Image>
            <Image alt="steelseries" src={steelseries}></Image>
            <Image alt="razer" src={razer}></Image>
            <Image alt="msi" src={msi}></Image>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-48 flex w-[1194px] justify-center">
          <div className="w-full">
            <h1 className="text-5xl font-normal">Top Product</h1>

            <div className="flex justify-start">
              <div className="mr-4 mt-8 h-[408px] w-[220px] rounded-[10px] bg-[white] drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                <div className="h-[200px] w-full rounded-[10px] bg-[black]"></div>
                <div className="p-4">
                  <h1 className="text-base font-normal">Product Name</h1>
                  <h1 className="text-base font-bold">Rp 1.000.000</h1>
                  <h1 className="mt-24">Terjual 999+</h1>
                </div>
              </div>

              <div className="mr-4 mt-8 h-[408px] w-[220px] rounded-[10px] bg-[white] drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                <div className="h-[200px] w-full rounded-[10px] bg-[black]"></div>
                <div className="p-4">
                  <h1 className="text-base font-normal">Product Name</h1>
                  <h1 className="text-base font-bold">Rp 1.000.000</h1>
                  <h1 className="mt-24">Terjual 999+</h1>
                </div>
              </div>

              <div className="mr-4 mt-8 h-[408px] w-[220px] rounded-[10px] bg-[white] drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                <div className="h-[200px] w-full rounded-[10px] bg-[black]"></div>
                <div className="p-4">
                  <h1 className="text-base font-normal">Product Name</h1>
                  <h1 className="text-base font-bold">Rp 1.000.000</h1>
                  <h1 className="mt-24">Terjual 999+</h1>
                </div>
              </div>

              <div className="mr-4 mt-8 h-[408px] w-[220px] rounded-[10px] bg-[white] drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                <div className="h-[200px] w-full rounded-[10px] bg-[black]"></div>
                <div className="p-4">
                  <h1 className="text-base font-normal">Product Name</h1>
                  <h1 className="text-base font-bold">Rp 1.000.000</h1>
                  <h1 className="mt-24">Terjual 999+</h1>
                </div>
              </div>

              <div className="mr-4 mt-8 h-[408px] w-[220px] rounded-[10px] bg-[white] drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                <div className="h-[200px] w-full rounded-[10px] bg-[black]"></div>
                <div className="p-4">
                  <h1 className="text-base font-normal">Product Name</h1>
                  <h1 className="text-base font-bold">Rp 1.000.000</h1>
                  <h1 className="mt-24">Terjual 999+</h1>
                </div>
              </div>
            </div>

            <h1 className="mt-48 text-5xl font-normal">Featured Product</h1>

            <h1 className="mt-48 flex justify-center text-5xl font-normal">
              Need an upgrade for your
            </h1>
            <h1 className="mt-4 flex justify-center text-5xl font-normal">
              gaming experience?
            </h1>

            <div className="flex justify-center">
              <div className="mt-12 h-[60px] w-[200px] rounded-full bg-[#1D5EDD]">
                <div className="flex h-full items-center justify-center">
                  <h1 className="text-2xl text-base font-bold text-white">
                    Start Shopping
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">adsasdasd</div>
    </div>
  )
}

export default Home
