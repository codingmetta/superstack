'use client';
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div className='flex flex-col w-full gap-4'>
            <div className='flex flex-row items-center justify-between w-full'>
                <h2 className='text-2xl font-semibold'>Kontakt</h2>
                <span className='flex flex-row gap-1 '>
                    <p className='text-sm text-gray-700'>Hast du ein Konto?</p>
                    <Link
                        to="/"
                        className='text-sm underline text-footer-mauve'
                    >
                        Anmelden
                    </Link>
                </span>
            </div>

            <input
                type="text"
                placeholder='E-Mail oder Mobiltelefonnummer'
                className='w-full h-12 text-sm border border-gray-400 rounded appearance-none'
            />

            <span className='flex flex-row items-center justify-between w-full'>
                <input
                    type="checkbox"
                    className='w-5 h-5 border border-gray-400 rounded appearance-none '
                />
                <p className='text-sm text-gray-700' >Neuigkeiten und Angebote via E-Mail erhalten</p>
            </span>
        </div>
    )
}

export default Contact