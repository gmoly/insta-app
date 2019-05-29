import L from 'leaflet';
import './icon.css'

const iconInstagram = (number) => new L.divIcon({
    iconSize: new L.Point(25, 25),
    shadowSize: [20, 20],
    className: "number-icon",
    html: number
});

export { iconInstagram };