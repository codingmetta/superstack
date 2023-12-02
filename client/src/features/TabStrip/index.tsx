'use client';
import Tabs from './Tabs'
import TabPane from './TabPane'
import ImageMap from './ImageMap'
import './TabStrip.css'

function TabStrip() {
    return (
        <div className='w-full min-w-[370px] h-full p-4 pt-12 pb-12 bg-lila'>
            <Tabs>
                <TabPane title="Piercing">
                    <h3 className="text-2xl leading-[1.5rem] tracking-widest  font-climate">
                        So... what's it gonna be?
                    </h3>
                    <p className="text-sm font-semibold tracking-wide ">
                        Ein bisschen überfordert, wenn es um Piercings geht?
                        Kein Problem. Wir stelllen dir die verschiedenen Piercingarten
                        im Ohr vor und geben dir hilfreiche Tipps zum Wechseln des Schmucks.
                    </p>
                    <button className="p-2 pl-6 pr-6 ml-4 text-sm font-bold text-black uppercase border border-black rounded-full w-44 bg-limone">
                        Piercing Guide
                    </button>
                
                    <div className="">
                        <ImageMap 
                            responsive={true}
                            parentWidth={360}
                            active={true}
                            />
                    </div>
                </TabPane>
                <TabPane title="Pflege">
                    <h3 className=" text-2xl leading-[1.5rem] tracking-widest uppercase font-climate">
                        Not for people with Commitment issues
                    </h3>
                    <p className="text-sm font-semibold tracking-wide ">
                        Eine solide Nachsorgeroutine ist wichtig, um dir ein gutes Gefühl
                        mit deinem neu gestochenen Piercing zu geben. In diesem Care Guide
                        findest du Empfehlungen um dein neu gestochenes Piercing ideal zu pflegen,
                        sowie den Heilungsprozess zu beschleunigen.
                    </p>
                    <button className="p-2 pl-6 pr-6 ml-4 text-sm font-bold text-black uppercase border border-black rounded-full w-44 bg-limone">
                        Pflege Guide
                    </button>
                    <img
                        className="self-center object-cover mt-20 mb-16 border border-white rounded-full w-72 h-72"
                        src="/images/tabstrip-2.webp"
                        alt="Pierced Woman with blonde hair" />
                </TabPane>
                <TabPane title="Stacking">
                    <h3 className=" text-2xl leading-[1.5rem] tracking-widest uppercase font-climate">
                        How to stack it like it's hot
                    </h3>
                    <p className="text-sm font-semibold tracking-wide ">
                        Jedes Ohr ist unterschiedlich geformt und nicht alle Piercings eignen
                        sich gleich gut für die verschiedenen Stellen am Ohr.
                        <br /> <br />
                        Wir glauben, dass jede mögliche Zusammenstellung und Kombination SUPER aussehen kann,
                        und die Entscheidung ist natürlich dir überlassen! Wir geben dir im folgenden ein paar
                        Tipps wie du das Stacking Game perfektionierts.
                    </p>
                    <button className="p-2 pl-6 pr-6 ml-4 text-sm font-bold text-black uppercase border border-black rounded-full w-44 bg-limone">
                        Stacking Guide
                    </button>
                    <img className="object-contain translate-y-6 h-96 " src="/images/woman-standing-removebg-preview.png" alt="Brown haired white woman standig bend forward with a light smile" />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default TabStrip