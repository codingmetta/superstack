'use client';

import ImageMapper from 'react-img-mapper';
import { Fragment, useState } from 'react';

const mapJSON = ` [
  {
    "id": "flat-helix",
    "coords": [345, 31, 16],
    "shape": "circle",
    "fillColor": "#ffffff",
    "strokeColor": "black",
    "active": true,
    "name": 1,
    "title": "1"
  },
  {
    "id": "helix",
    "coords": [238, 115, 16],
    "shape": "circle",
    "fillColor": "#ffffff",
    "strokeColor": "black",
    "active": true,
    "name": 2,
    "title": "2"
  },
  {
    "id": "rook",
    "coords": [374, 127, 16],
    "shape": "circle",
    "fillColor": "#ffffff",
    "strokeColor": "black",
    "active": true,
    "name": 3,
    "title": "3"
  },
  {
    "id": "snug",
    "coords": [247, 190, 16],
    "shape": "circle",
    "fillColor": "#ffffff",
    "strokeColor": "black",
    "active": true,
    "name": 4,
    "title": "4"
  },
  {
    "id": "conch",
    "coords": [297, 216, 16],
    "shape": "circle",
    "fillColor": "#ffffff",
    "strokeColor": "black",
    "active": true,
    "name": 5,
    "title": "5"
  },
  {
    "id": "orbital",
    "coords": [307, 289, 16],
    "shape": "circle",
    "fillColor": "#ffffff",
    "strokeColor": "black",
    "active": true,
    "name": 6,
    "title": "6"
  },
  {
    "id": "upper-lobe",
    "coords": [335, 344, 16],
    "shape": "circle",
    "fillColor": "#ffffff",
    "strokeColor": "black",
    "active": true,
    "name": 7,
    "title": "7"
  },
  {
    "id": "lobe",
    "coords": [429, 401, 16],
    "shape": "circle",
    "fillColor": "#ffffff",
    "strokeColor": "black",
    "active": true,
    "name": 8,   
     "title": "8"
  },
  {
    "id": "stacked-lobe",
    "coords": [394, 326, 16],
    "shape": "circle",
    "fillColor": "#ffffff",
    "strokeColor": "black",
    "active": true,
    "name": 9,
    "title": "9"
  },
  {
    "id": "daith",
    "coords": [382, 182, 16],
    "shape": "circle",
    "fillColor": "#ffffff",
    "strokeColor": "black",
    "active": true,
    "name": 10,
    "title": "10"
  },
  {
    "id": "forward-helix",
    "coords": [413, 75, 16],
    "shape": "circle",
    "fillColor": "#ffffff",
    "strokeColor": "black",
    "active": true,
    "name": 11,
    "title": "11"
  },
  {
    "id": "tragus",
    "coords": [440, 254, 16],
    "shape": "circle",
    "fillColor": "#ffffff",
    "strokeColor": "black",
    "active": true,
    "name": 12,
    "title": "12"
  },
  {
    "id": "anti-tragus",
    "coords": [379, 270, 16],
    "shape": "circle",
    "fillColor": "#ffffff",
    "strokeColor": "black",
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

  const URL = "/images/piercings-map-removebg-preview.png";
  const MAP = {
    name: 'img-mapper-img',
    areas: JSON.parse(mapJSON)
  };



  return (
    <Fragment>
      <ImageMapper
        src={URL}
        map={MAP}
        responsive={props.responsive}
        parentWidth={props.parentWidth}
        lineWidth={2}
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
  );
}


export default ImageMap;