'use client'
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import PoiMarkers,{locations} from './advanceMaker'; 

const MapContainer = ({ apiKey = '', mapId='' }: {
  apiKey: string, 
  mapId: string
}) => {

  return (
 <APIProvider apiKey={apiKey  } >
   <Map
      defaultZoom={13}
        defaultCenter={{ lat: 52.009988, lng: -0.728179 }}
        mapId={mapId}
      >
      <PoiMarkers pois={locations}/>
  </Map>
 </APIProvider>
  );
};

export default MapContainer;
