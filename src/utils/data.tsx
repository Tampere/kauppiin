import { ROUTES } from "./const";

export const InstructionData = [
    {
        header: "Löydä helpoin, nopein ja hiilivapain tapa liikkua Kaupissa.",
        paragraph: [ "Kauppi appi auttaa sinua helposti löytämään sijaintisi ja haluamasi kohteen kartalta." ]
    },
    {
        header: "Työmatkalainen tai menossa tapahtumaan, Kauppi on sinua varten.",
        paragraph: [ "Etkö ole koskaan käynyt Kaupissa? Ei hätää, se on helppoa. Voit suunnitella reitin ja kulkuvälineet etukäteen." ]
    },
    {
        header: "Kauppi on hyväksi ympäristölle",
        paragraph: 
            [
                "Me autamme sinua vähentämään hiilipäästöjä valitsemalla sopivimman  tavan siirtyä paikasta A paikkaan B, juuri sinun tarpeesi huomioon ottaen.",
                "Vaihtoehtojen miettiminen tarkoittaa, että olet oikealla polulla."
            ],
    }
]

export const DestinationData = {
    TAYS: {
        header: "TAYS Pääovi",
        description: ["Lorem ipsum"],
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.505032,
            lon: 23.814340
        }
    },
    Ensihoito: {
        header: "Ensihoito",
        description: ["Lorem ipsum"],
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.504953,
            lon: 23.813660
        }
    },
    MEDI1: {
        header: "Finmedi 1",
        description: ["Lorem ipsum"],
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.506493,
            lon: 23.812425
        }
    },
    MEDI5: {
        header: "Finmedi 5",
        description: ["Lorem ipsum"],
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.506792,
            lon: 23.814942
        }
    },
    POTILASHOTELLI: {
        header: "Potilashotelli",
        description: ["Lorem ipsum"],
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.508182,
            lon: 23.814202
        }
    },
    ARVO: {
        header: "Arvo (TUNI)",
        description: ["Lorem ipsum"],
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.507593,
            lon: 23.823047
        }
    },
    TAMK: {
        header: "TAMK",
        description: ["Lorem ipsum"],
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.504330,
            lon: 23.809335
        }
    }
}

export const ParkingData = {
    NIIHAMA: {
        header: "Niihama",
        description: [],
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.500488,
            lon: 23.877928
        }
    },
    TURTOLA: {
        header: "Turtolan K-Citymarket",
        description: [],
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.477595,
            lon: 23.841099
        }
    },
    KOVISTONKYLA: {
        header: "Koivistonkylän Prisma",
        description: [],
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.468466,
            lon: 23.777729
        }
    },
    IKEA: {
        header: "IKEA Tampere",
        description: [],
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.453240,
            lon: 23.770681
        }
    },
    KAUKAJARVI: {
        header: "Kaukajärven Hyllilänkatu",
        description: [],
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.479118,
            lon: 23.897316
        }
    }
}

export const CurrentDestinationData = {
    CURRENT: {
        header: "Käytä nykyistä lokaatiota",
        image: "my_location"
    },
    OTHER: {
        header: "Muu osoite",
        image: "create"
    }
}

export const NavbarContent = {
    [ROUTES.destination]: "Minne ollaan menossa?",
    [ROUTES.parking]: "Valitse haluamasi liityntäpysäköinti",
    [ROUTES.current]: "Missä olet nyt?",
    [ROUTES.navigate]: "Avaa karttasovellus osuudelle:"
}

export const NotificationContent = {
    Cookies: "Sivusto käyttää keksejä käyttökokemuksen parantamiseksi. Tietoja ei anneta kolmansille osapuolille. Jatkamalla sivuston käyttöä, hyväksyt keksien käytön.",
    Location: "Salli selaimen asetuksista sijaintitietojen käyttö käyttääksesi paikannustoi1mintoa"
}