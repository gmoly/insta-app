import L from 'leaflet';
import './icon.css'

const iconInstagram = (number) => new L.divIcon({
    iconSize: new L.Point(50, 50),
    shadowSize: [55, 55],
    className: "number-icon",
    html: number
}); 

export { iconInstagram };