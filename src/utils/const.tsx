
export const COLORS: any = {
    green: "#62d9b7",
    white:  "#fcfcfc",
    black: "black",
    disabled: "#abd4c1",
    textDisabled: "#737373"
}

export type BackgroundColorType = "#62d9b7" | "#fcfcfc" | "#a1a1a1"

export type TextColorType = "#62d9b7" | "#fcfcfc" | "black" | "#737373";

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
