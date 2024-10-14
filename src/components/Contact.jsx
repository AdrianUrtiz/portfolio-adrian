import { Whatsapp, Mail, Phone } from '../icons'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

function Contact() {
  const { translations } = useContext(LanguageContext)
  return (
    <div className='flex flex-col w-full md:flex-row justify-center items-center gap-8 text-gray-300'>
      <div className='bg-slate-900/50 hover:bg-slate-800/50 p-6 rounded-lg shadow-lg w-full hover:scale-105 transition-transform duration-300 ease-in-out'>
        <div className='flex gap-x-2 items-center mb-4'>
          <Phone className='size-4' />
          <h3 className='text-lg font-semibold'>{translations.contactPhone}</h3>
        </div>
        <a href='tel:+52 443 579 7564' className='hover:text-green-300'>
          +52 443 579 7564
        </a>
      </div>
      <div className='bg-slate-900/50 hover:bg-slate-800/50 p-6 rounded-lg shadow-lg w-full hover:scale-105 transition-transform duration-300 ease-in-out'>
        <div className='flex gap-x-2 items-center mb-4'>
          <Whatsapp className='size-4' />
          <h3 className='text-lg font-semibold'>Whatsapp</h3>
        </div>
        <a
          href='whatsapp://send?phone=+524435797564'
          className='hover:text-green-300'>
          +52 443 579 7564
        </a>
      </div>
      <div className='bg-slate-900/50 hover:bg-slate-800/50 p-6 rounded-lg shadow-lg w-full hover:scale-105 transition-transform duration-300 ease-in-out'>
        <div className='flex gap-x-2 items-center mb-4'>
          <Mail className='size-4' />
          <h3 className='text-lg font-semibold'>Email</h3>
        </div>
        <a href='mailto:aeurtiz17@gmail.com' className='hover:text-green-300'>
          aeurtiz17@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Contact
