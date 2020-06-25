
export const COLORS: any = {
    green: "#62d9b7",
    white:  "#fcfcfc",
    black: "black",
    disabled: "#abd4c1",
    textDisabled: "#737373",
    warning: "#fc7777"
}

export type BackgroundColorType = "#62d9b7" | "#fcfcfc" | "#a1a1a1"

export type TextColorType = "#62d9b7" | "#fcfcfc" | "black" | "#737373";

export type DirectionDataType = {
  [index: string]: object 
}
export type AnyType = {
  [index: string]: any 
}

type LatLon = {lat: number, lon: number};

export type RouteObjType = {start: LatLon | null, end: {lat: number, lon: number}};

export type InstructionDataType = { 
    header: string; 
    paragraph: string[]; 
}[];

export const ROUTES = {
    home: "/",
    instructions: "/instructions",
    direction: "/directions",
    destination: "/directions/destination",
    parking: "/directions/parking",
    current: "/directions/current",
    navigate: "/navigate",
}

export const DirectionPageList = ["destination","current", "parking"]


// Haversine formula for counting distance between two points
export function calculateDistance(fLocation: any, sLocation: any) {
  var R = 6371; 
  var dLat = toRad(sLocation.lat-fLocation.lat);
  var dLon = toRad(sLocation.lon-fLocation.lon); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(toRad(fLocation.lat)) * Math.cos(toRad(sLocation.lat)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return Math.round(d * 10) / 10;
}

function toRad(deg: number) {
  return deg * (Math.PI/180)
}