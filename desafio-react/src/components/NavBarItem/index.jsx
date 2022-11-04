import * as HeroIcon from "@heroicons/react/24/outline"



export const NavBarItem = ({ body, icon, isLocation }) => {




  const Icon = () => {

    const IconSelect =
      icon === '/' ? HeroIcon.HomeIcon
        : icon === 'aulas' ? HeroIcon.VideoCameraIcon
          : icon === 'community' ? HeroIcon.ChatBubbleBottomCenterIcon
            : HeroIcon.ExclamationCircleIcon

    return (
      <IconSelect className="transition-all w-6 md:w-10 max-w-[40px]" />
    )
  }

  return (
    <a className=
      {
        isLocation

          ? 'transition-all bg-slate-300 flex items-center gap-4 rounded-xl p-5 border  my-1 cursor-pointer hover:border-gray-500/[0.4]'
          : 'transition-all flex items-center gap-4 rounded-xl p-5 border  my-1 cursor-pointer hover:border-gray-500/[0.4]'

      }

      href={icon === '/' ? `/` : `/${icon}`}
    >

      <Icon />


      <span className='font'>{body}</span>
    </a>
  )
}
