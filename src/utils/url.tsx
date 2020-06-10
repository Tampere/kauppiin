type RouteObj = {destination: {lat: number, lon: number}, parking: {lat: number, lon: number}};

const travelmode = (isIos: boolean) => {
    return isIos ? "&dirflg=r" : "&travelmode=transit";
}

const parseParams = (routeObj: RouteObj, isIos: boolean) => {
    let origin: string = "";
    let destination: string = "";
    let originParams = `${routeObj.parking.lat},${routeObj.parking.lon}`
    let destinationParams = `${routeObj.destination.lat},${routeObj.destination.lon}`

    isIos ? origin = "&saddr=" : origin = "&origin=";
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

export function directionUrl(routeObj: RouteObj, platform: string) {
    let isIos = handlePlatform(platform);
    let baseUrl = `maps://maps.google.com/maps/dir/?api=1`;
    let url = baseUrl + parseParams(routeObj, isIos) + travelmode(isIos);
    return url;
}
