import { CardPix } from '../../components/CardPix'
import { CardPicUser } from '../../components/CardPicUser'
import { Comment } from '../../components/Comment'
import { Profile } from '../../components/Profile'
import { NavBarItem } from '../../components/NavBarItem'


const data = [
  {
    name: 'Marcelo Melo',
    createdAt: '3h atrás',
    picProfile: 'img-profile',
    body: 'Quem fez o desafio, compartilha aqui!',
    likes: false
  },
  {
    name: 'Sérgio Campos',
    createdAt: '2h atrás',
    picProfile: 'img-profile-1',
    body: 'Tô finalizando o CSS!',
    likes: false
  },
  {
    name: 'Aline Cardoso',
    createdAt: '2h atrás',
    picProfile: 'img-profile-2',
    body: 'Já consegui terminar meu primeiro desafio! Deu trabalho mas estou feliz que consegui!',
    like: {
      isLiked: true,
      likes: 40
    }
  }
]

export const Community = () => {
  return (
    <main className='flex'>
      <div className='max-w-[380px] min-w-[280px] min-h-screen bg-slate-200  '>

        <div className='h-[72px] flex items-center justify-center'>
          <img src="/logoCodar.svg" alt="" />
        </div>

        <Profile />

        <ul className='flex flex-col mt-10'>

          <NavBarItem body='Ínicio' icon='/' />

          <NavBarItem body='Aulas' icon='aulas' />

          <NavBarItem body='Comunidade' icon='community' isLocation={true} />

          <NavBarItem body='Suporte' />

        </ul>


      </div>

      <div className='flex items-start flex-wrap h-full'>

        {
          data.map(user => (

            <Comment data={user} />


          ))
        }

      </div>


    </main>
  )
}
