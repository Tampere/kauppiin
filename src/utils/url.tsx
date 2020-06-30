import {RouteObjType} from "./const";

const travelmode = (isIos: boolean, travelmode: string) => {
    let mode: string;
    let url = isIos ? "&dirflg=" : "&travelmode=";
    if (travelmode === "transit"){
        mode = isIos ? "r" : "transit";
    } else {
        mode = isIos ? "d" : "driving";
    }
    return url + mode;
}

const parseParams = (routeObj: RouteObjType, isIos: boolean) => {
    let origin: string = "";
    let destination: string = "";
    let originParams: string = "";
    let destinationParams: string = "";

    if (routeObj.start === null) {
        origin = isIos ? "&saddr=" : "";
        originParams = isIos ? "My+Location" : "";
    } else {
        origin = isIos ? "&saddr=" : "&origin=";
        originParams = `${routeObj.start.lat},${routeObj.start.lon}`;
    }
    destinationParams = `${routeObj.end.lat},${routeObj.end.lon}`;

    isIos ? destination = "&daddr=" : destination = `&destination=`;

    return origin + originParams + destination + destinationParams;
}

const handlePlatform = (platform: string) => {
    if (platform === "iPhone" ||
        platform === "iPod" ||
        platform === "iPad" || 
        platform === "MacIntel"
    ) {
        return true;
    } else {
        return false;
    }
}

export function directionUrl(routeObj: RouteObjType, platform: string, travelMode: string) {
    let isIos = handlePlatform(platform);
    let baseUrl = isIos ? "maps://maps.google.com/maps/dir/?api=1" : "https://www.google.com/maps/dir/?api=1";
    let url = baseUrl + parseParams(routeObj, isIos) + travelmode(isIos, travelMode);
    return encodeURI(url);
}
