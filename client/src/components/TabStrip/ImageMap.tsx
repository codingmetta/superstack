'use client';
import ImageMapper from 'react-img-mapper';
import { Fragment, useState } from 'react';

const mapJSON = `[
  {
    "id": "flat-helix",
    "coords": [345, 31, 25],
    "shape": "circle",
    "fillColor": "transparent",
    "strokeColor": "transparent",
    "active": true,
    "name": 1,
    "title": "1"
  },
  {
    "id": "helix",
    "coords": [238, 115, 25],
    "shape": "circle",
    "fillColor": "transparent",
    "strokeColor": "transparent",
    "active": true,
    "name": 2,
    "title": "2"
  },
  {
    "id": "rook",
    "coords": [374, 127, 25],
    "shape": "circle",
    "fillColor": "transparent",
    "strokeColor": "transparent",
    "active": true,
    "name": 3,
    "title": "3"
  },
  {
    "id": "snug",
    "coords": [247, 190, 25],
    "shape": "circle",
    "fillColor": "transparent",
    "strokeColor": "transparent",
    "active": true,
    "name": 4,
    "title": "4"
  },
  {
    "id": "conch",
    "coords": [297, 216, 25],
    "shape": "circle",
    "fillColor": "transparent",
    "strokeColor": "transparent",
    "active": true,
    "name": 5,
    "title": "5"
  },
  {
    "id": "orbital",
    "coords": [307, 289, 25],
    "shape": "circle",
    "fillColor": "transparent",
    "strokeColor": "transparent",
    "active": true,
    "name": 6,
    "title": "6"
  },
  {
    "id": "upper-lobe",
    "coords": [335, 344, 25],
    "shape": "circle",
    "fillColor": "transparent",
    "strokeColor": "transparent",
    "active": true,
    "name": 7,
    "title": "7"
  },
  {
    "id": "lobe",
    "coords": [429, 401, 25],
    "shape": "circle",
    "fillColor": "transparent",
    "strokeColor": "transparent",
    "active": true,
    "name": 8,
    "title": "8"
  },
  {
    "id": "stacked-lobe",
    "coords": [394, 326, 25],
    "shape": "circle",
    "fillColor": "transparent",
    "strokeColor": "transparent",
    "active": true,
    "name": 9,
    "title": "9"
  },
  {
    "id": "daith",
    "coords": [382, 182, 25],
    "shape": "circle",
    "fillColor": "transparent",
    "strokeColor": "transparent",
    "active": true,
    "name": 10,
    "title": "10"
  },
  {
    "id": "forward-helix",
    "coords": [413, 75, 25],
    "shape": "circle",
    "fillColor": "transparent",
    "strokeColor": "transparent",
    "active": true,
    "name": 11,
    "title": "11"
  },
  {
    "id": "tragus",
    "coords": [440, 254, 25],
    "shape": "circle",
    "fillColor": "transparent",
    "strokeColor": "transparent",
    "active": true,
    "name": 12,
    "title": "12"
  },
  {
    "id": "anti-tragus",
    "coords": [379, 270, 25],
    "shape": "circle",
    "fillColor": "transparent",
    "strokeColor": "transparent",
    "active": true,
    "name": 13,
    "title": "13"
  }
]
`

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
  const [extendedAreas] = useState(() => getCenterCoords(JSON.parse(mapJSON)));
  const [selectedArea, setSelectedArea] = useState("1");
  const [selectedPiercingTitle, setSelectedPiercingTitle] = useState("Tragus");

  const URL = "/images/piercings-map-removebg-preview.png";
  const MAP = {
    name: 'img-mapper-img',
    areas: JSON.parse(mapJSON)
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