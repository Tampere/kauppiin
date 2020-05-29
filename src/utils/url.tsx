// TODO: Travelmode

const parseParams = (paramsStr: string) => {
    return paramsStr.replace(" ", "+");
}

const directionUrl = (input: {from: string, to: string}) => {
    return "dir/?api=1&origin=" + parseParams(input.from) + "&destination=" + parseParams(input.to);
}

const searchUrl =  (input: {from: string, to: string}) => {
    return "search/?api=1&query=" + parseParams(input.from);
}

export function browserUrl(input: {from: string, to: string}) 
{
    let baseUrl = `${window.location.protocol}//maps.google.com/maps/`;
    if(input.to !== ""){
        return baseUrl + directionUrl(input)
    }
    else {
        return baseUrl + searchUrl(input);
    }
}

// https://www.google.com/maps/dir/?api=1&origin=Google+Pyrmont+NSW&destination=QVB&destination_place_id=ChIJISz8NjyuEmsRFTQ9Iw7Ear8&travelmode=walking

