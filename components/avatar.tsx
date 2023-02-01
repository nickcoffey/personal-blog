// import Image from 'next/image'

type Props = {
  name: string
  picture: string
}

export const Avatar = ({ name, picture }: Props) => {
  return (
    <div className='flex items-center'>
      {/* <Image src={picture} alt={name} className='w-12 h-12 mr-4 rounded-full' fill /> */}
      <img src={picture} className='w-12 h-12 mr-4 rounded-full' alt={name} />
      <div className='text-xl font-bold'>{name}</div>
    </div>
  )
}
