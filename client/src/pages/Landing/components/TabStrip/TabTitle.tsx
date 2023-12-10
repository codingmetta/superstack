import { useCallback } from 'react'

function TabTitle(props) {
    const { title, setSelectedTab, index, isActive } = props;

    const handleOnClick = useCallback(() => {
      setSelectedTab(index);
    }, [setSelectedTab, index]);
  
    return (
      <li className="w-full h-full p-0 m-0 focus:font-bold hover:font-bold" onClick={handleOnClick}>
        <span className={` bg-lila inline-block text-center w-full  text-white border-white ${isActive ? " active" : " inactive"}`}>
          {title}
        </span>
      </li>
    );
}

export default TabTitle