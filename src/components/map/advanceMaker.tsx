
 "use client"
import { APIProvider, Map, Pin, AdvancedMarker, MapCameraChangedEvent, } from '@vis.gl/react-google-maps';


type Poi = { key: string, location: google.maps.LatLngLiteral }

export const locations: Poi[] = [
  {key: 'MK INT SDA CH', location: { lat:  52.009488 , lng:  -0.728179}}
];


const PoiMarkers = (props: {pois: Poi[]}) => {
  return (
    <>
      {props.pois.map( (poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}>
        <Pin background={'#FF0000'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
};

export  default PoiMarkers