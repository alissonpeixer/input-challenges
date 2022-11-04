export const Comment = ({ data }) => {

  return (

    <button className='m-3 flex flex-col min-w-[290px] shadow-2xl bg-slate-100 rounded-3xl transition-all max-w-[500px]'>

      <div className="flex items-center text-start space-x-5 p-5 w-full">
        <img src={`/assets/${data.picProfile}.png`} alt="" />

        <div className='flex flex-col'>
          <span className='font-bold'>{data.name}<span className='text-gray-500'> • {data.createdAt}</span></span>
          <span>{data.body}</span>
        </div>
      </div>
      {data.like &&
        <div className="flex gap-4 text-start bg-slate-400/[0.4] p-5 rounded-b-3xl">

          <img src="/assets/likes.svg" alt="Likes" />


          <span>
            {data.like?.isLiked ? <strong>Você e mais</strong> : 'Mais de'}
            <strong> {data.like?.likes} pessoas</strong> curtiram esse comentário
          </span>
        </div>
      }


    </button>

  )
}
