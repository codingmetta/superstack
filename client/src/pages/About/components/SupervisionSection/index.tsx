'use client';
import FolderTemplate from '../../../../components/FolderTemplate'

function SuperVisionSection() {
    return (
        <section className="relative flex flex-col items-center justify-between w-full py-12 bg-white ">
            <h4 className="text-lg tracking-widest uppercase font-climate">Super vision</h4>
            <div className='flex mt-20 items-center justify-center flex-row flex-wrap max-w-[90vw] gap-16 '>
                <FolderTemplate>
                    <p className='text-md font-climate'>
                        We only use hypoaller-genic materials for sensitive ears.
                    </p>
                </FolderTemplate>

                <FolderTemplate>
                    <p className='text-md font-climate'>
                        We want to create hygenic feel-good piercing places.
                    </p>

                </FolderTemplate>

                <FolderTemplate>
                    <p className='text-md font-climate'>
                        We use sanitary packaging.
                    </p>

                </FolderTemplate>

                <FolderTemplate>
                    <p className='text-md font-climate'>
                        We only work with re-sponsible production partners.
                    </p>

                </FolderTemplate>

                <FolderTemplate>
                    <p className='text-md font-climate'>
                        Our piercings are comfy to wear 24/7.
                    </p>

                </FolderTemplate>
            </div>
            <img
                className='absolute translate-x-32 translate-y-60 max-h-80'
                src="/images/brunette-white-woman-squatting-bg-removed.webp"
                alt="Brunette, white woman squatting"
            />
        </section>
    )
}

export default SuperVisionSection