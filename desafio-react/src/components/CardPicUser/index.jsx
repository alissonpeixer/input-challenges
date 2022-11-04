import { ChatBubbleBottomCenterIcon, EyeIcon } from "@heroicons/react/24/outline"

export const CardPicUser = ({ data }) => {

  return (
    <div className="shadow-xl hover:shadow-2xl m-2  rounded-3xl bg-slate-100 transition-all">


      <img src={`/assets/${data.picture}.png`} alt="" className='w-64' />

      <div className='text-start  w-64 px-4 py-7 space-y-5  rounded-b-2xl'>
        <span className='font-bold text-2xl'>Escolha do dia - Natureza</span>

        <div className='flex items-center space-x-2'>
          <img src={`/assets/${data.foto}.png`} alt="" />
          <span className='text-sm'>{data.name} • {data.createdAt}</span>
        </div>

        <div className='flex justify-between'>

          <div className='w-3/6 flex gap-2'>
            <ChatBubbleBottomCenterIcon className="w-5" />
            <span>{data.viwes}</span>
          </div>

          <button className='flex gap-2'>
            <EyeIcon className="w-5" />
            <span>{data.whatch}</span>
          </button>

        </div>

      </div>
    </div>
  )
}
