export const NotFound = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div className="h-28 flex items-center text-4xl">
        ERRO 404
      </div>
      <a className="bg-black/20 p-6 font-bold hover:bg-black/60" href='/'>GO TO HOME</a>
    </div>
  )
}
