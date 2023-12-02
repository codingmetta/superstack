'use client';
import ImageMapper from 'react-img-mapper';
import { Fragment, useState } from 'react';
import areasJSON from '../../assets/data/areas.json';


const getCenterCoords = (areas) =>
  areas.map((area) => {
    const n = area.coords.length / 2;
    const { y: scaleY, x: scaleX } = area.coords.reduce(
      ({ y, x }, val, idx) =>
        !(idx % 2) ? { y, x: x + val / n } : { y: y + val / n, x },
      { y: 0, x: 0 }
    );
    return { ...area, center: { x: scaleX, y: scaleY } };
  });

const ImageMap = props => {
  const [extendedAreas] = useState(() => getCenterCoords(areasJSON));
  const [selectedArea, setSelectedArea] = useState("1");
  const [selectedPiercingTitle, setSelectedPiercingTitle] = useState("Tragus");

  const URL = "/images/piercings-map-bg-removed.png";
  const MAP = {
    name: 'img-mapper-img',
    areas: areasJSON
  }

  function handleSelectedArea(area) {
    setSelectedArea(area.name);
    const piercingTitle = transformString(area.id);
    setSelectedPiercingTitle(piercingTitle);
  }

  function transformString(str){
    const arr = str.split("-");
    return arr.join(' ');
  }


  return (
    <div className="flex flex-col items-center justify-around w-full h-full mb-4" >
      <div className="flex flex-row justify-start h-20 gap-4 mt-6 mb-4 translate-x-14 w-96">
        <span className="w-8 h-8 text-xl leading-8 text-center text-black border-black rounded-full bg-limone">
          {selectedArea}
        </span>
        <h3 className="text-lg tracking-widest uppercase font-climate ">{selectedPiercingTitle}</h3>
      </div>
      <div className="relative -translate-x-16 ">
        <Fragment>
          <ImageMapper
            src={URL}
            map={MAP}
            responsive={props.responsive}
            parentWidth={props.parentWidth}
            lineWidth={1}
            onClick={(area)=>handleSelectedArea(area)}
          />
          {extendedAreas.map((area) => (
            <span
              key={area.id}
              className="tooltip"
              style={{
                position: "absolute",
                top: area.center.y,
                left: area.center.x,
                zIndex: 1000
              }}
            >
              {area.title}
            </span>
          ))}
          </Fragment>
      </div>
    </div>
  );
}


export default ImageMap;