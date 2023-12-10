'use client';
import { useState } from 'react';
import TabTitle from './TabTitle';


function Tabs(props) {
    const { children, preSelectedTabIndex } = props;

    // First tab is shown by default
    const [selectedTabIndex, setSelectedTabIndex] = useState(
        preSelectedTabIndex || 0
    );

    return (
        <section className="flex flex-col w-full h-full p-0 m-0 text-white bg-lila ">
            <ul className="flex flex-row w-full h-12 p-0 m-0 ">
                {children.map((item, index) => (
                    <TabTitle
                        key={item.props.title}
                        title={item.props.title}
                        index={index}
                        isActive={index === selectedTabIndex}
                        setSelectedTab={setSelectedTabIndex}
                    />
                ))}
            </ul>
            <div className="w-full h-full p-0 m-0 border-b-2 border-l-2 border-r-2 border-white rounded-b-2xl">
                {/* show selcted tab by index*/}
                {children[selectedTabIndex]}
            </div>
        </section>
    );
}

export default Tabs