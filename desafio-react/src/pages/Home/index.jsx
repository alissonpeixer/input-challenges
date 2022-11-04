import { CardPix } from '../../components/CardPix'
import { CardPicUser } from '../../components/CardPicUser'

import { Profile } from '../../components/Profile'
import { NavBarItem } from '../../components/NavBarItem'


const infoUsers = [
  {
    id: 1,
    name: 'Lynsey Searle',
    createdAt: '1 dia atrás',
    foto: 'pic-1',
    viwes: '77',
    whatch: '4k',
    picture: 'img'
  },
  {
    id: 2,
    name: 'Brady Combs ',
    createdAt: '3 dias atrás',
    foto: 'pic-3',
    viwes: '447',
    whatch: '455',
    picture: 'img-1'
  },
  {
    id: 3,
    name: 'Taya Bates',
    createdAt: '2 dias atrás ',
    foto: 'pic-2',
    viwes: '74',
    whatch: '10k',
    picture: 'img-2'
  }
]
export const Home = () => {
  return (
    <main className='flex'>
      <div className='max-w-[280px] min-w-[200px] min-h-screen bg-slate-200 '>

        <div className='h-[72px] flex items-center justify-center'>
          <img src="/logoCodar.svg" alt="" />
        </div>

        <Profile />

        <ul className='flex flex-col mt-10'>

          <NavBarItem body='Ínicio' icon='/' isLocation={true} />

          <NavBarItem body='Aulas' icon='aulas' />

          <NavBarItem body='Comunidade' icon='community' />

          <NavBarItem body='Suporte' />

        </ul>


      </div>

      <div className='p-4  flex  items-start flex-wrap justify-center'>

        {
          infoUsers.map(data => (
            <CardPicUser key={data.id} data={data} />
          ))
        }

      </div>


    </main>
  )
}
