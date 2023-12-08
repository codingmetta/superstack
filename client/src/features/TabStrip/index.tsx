'use client';
import Tabs from './Tabs'
import ImageMap from './ImageMap'
import './index.css'
import { motion } from 'framer-motion'


function TabPane({ children, ...rest }) {
    return (
        <motion.article
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className="relative flex flex-col justify-around gap-6 p-6 mt-8 overflow-hidden lg:pb-12 lg:min-h-96 lg:px-16 lg:flex-row lg:justify-start active-panel">
            {children}
        </motion.article>
    )
}

function TabStrip() {
    return (
        <div className='w-full min-w-[370px] lg:p-20 h-full px-4 py-14 bg-lila'>
            <Tabs>
                <TabPane title="Piercing">
                    <div className='flex flex-col justify-between gap-6 lg:justify-start lg:gap-8 lg:mt-8 lg:items-start'>
                        <h3 className="text-2xl lg:text-3xl lg:w-2/3 leading-[1.5rem] tracking-widest  font-climate">
                            So... what's it gonna be?
                        </h3>
                        <p className="text-sm font-semibold tracking-wide lg:text-base lg:w-5/6">
                            Ein bisschen überfordert, wenn es um Piercings geht?
                            Kein Problem. Wir stelllen dir die verschiedenen Piercingarten
                            im Ohr vor und geben dir hilfreiche Tipps zum Wechseln des Schmucks.
                        </p>
                        <button className="p-2 pl-6 pr-6 ml-4 text-sm font-bold text-black uppercase border border-black rounded-full whitespace-nowrap lg:text-base lg:ml-0 w-44 bg-limone">
                            Piercing Guide
                        </button>
                    </div>
                    <div className="">
                        <ImageMap
                            responsive={true}
                            parentWidth={360}
                            active={true}
                        />
                    </div>
                </TabPane>
                <TabPane title="Pflege">
                    <div className='flex flex-col justify-between gap-6 lg:justify-start lg:gap-8 lg:mt-8 lg:items-start'>
                        <h3 className="text-2xl lg:text-3xl lg:w-2/3 leading-[1.5rem] tracking-widest  font-climate">
                            Not for people with Commitment issues
                        </h3>
                        <p className="text-sm font-semibold tracking-wide lg:text-base lg:w-5/6">
                            Eine solide Nachsorgeroutine ist wichtig, um dir ein gutes Gefühl
                            mit deinem neu gestochenen Piercing zu geben. In diesem Care Guide
                            findest du Empfehlungen um dein neu gestochenes Piercing ideal zu pflegen,
                            sowie den Heilungsprozess zu beschleunigen.
                        </p>
                        <button className="p-2 pl-6 pr-6 ml-4 text-sm font-bold text-black uppercase border border-black rounded-full whitespace-nowrap lg:text-base lg:ml-0 w-44 bg-limone">
                            Pflege Guide
                        </button>
                    </div>
                    <img
                        className="self-center object-cover mt-20 mb-16 border border-white rounded-full lg:m-0 lg:w-80 lg:h-80 w-72 h-72"
                        src="/images/tabstrip-2.webp"
                        alt="Pierced white man with pink hair sitting on chair"
                    />
                </TabPane>
                <TabPane title="Stacking">
                    <div className='flex flex-col justify-between gap-6 lg:justify-start lg:gap-8 lg:mt-8 lg:items-start'>
                        <h3 className="text-2xl lg:text-3xl lg:w-2/3 leading-[1.5rem] tracking-widest  font-climate">
                            How to stack it like it's hot
                        </h3>
                        <p className="text-sm font-semibold tracking-wide lg:text-base lg:w-5/6">
                            Jedes Ohr ist unterschiedlich geformt und nicht alle Piercings eignen
                            sich gleich gut für die verschiedenen Stellen am Ohr.
                            <br /> <br />
                            Wir glauben, dass jede mögliche Zusammenstellung und Kombination SUPER aussehen kann,
                            und die Entscheidung ist natürlich dir überlassen! Wir geben dir im folgenden ein paar
                            Tipps wie du das Stacking Game perfektionierts.
                        </p>
                        <button className="p-2 pl-6 pr-6 ml-4 text-sm font-bold text-black uppercase border border-black rounded-full whitespace-nowrap lg:text-base lg:ml-0 w-44 bg-limone">
                            Stacking Guide
                        </button>
                    </div>
                    <img className="object-contain translate-y-12 h-96 lg:translate-y-12 lg:-translate-x-6 lg:h-[33rem] " src="/images/woman-standing-removebg-preview.png" alt="Brown haired white woman standing bend forward with a light smile" />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default TabStrip