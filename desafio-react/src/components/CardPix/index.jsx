import { LogoPix } from '../PixLogo'


export const CardPix = () => {
  return (
    <button className='transition-all p-7 bg-slate-200  h-full rounded-3xl drop-shadow-xl hover:bg-black hover:text-white stroke-black hover:stroke-white'>

      <div className='space-y-3 min-w-52 max-w-[200px]  text-start'>

        <div className='h-16'>
          <LogoPix />
        </div>

        <div className='text-xl '>
          Transferências via Pix
        </div>


        <div className='font-bold text-4xl '>
          R$ 150,00
        </div>

      </div>

    </button>
  )
}
