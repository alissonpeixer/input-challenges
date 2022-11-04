export const Profile = () => {
    return (

        <button className='flex p-5  bg-slate-200 space-x-5 items-center  transition-all w-full border border-gray-600/[0.2]'>
            <div>
                <img src="/profile.svg" alt="" />
            </div>

            <div className='flex flex-col text-start'>
                <span className='font-bold text-xs lg:text-base' >Alisson Peixer</span>
                <span className="text-xs" >Input: Do zero ao mercado</span>
            </div>
        </button>
    )
}
