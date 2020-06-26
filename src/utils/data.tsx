import { ROUTES } from "./const";

export const InstructionData = [
    {
        header: "Löydä helpoin, nopein ja hiilineutraalein tapa liikkua kaupungissa.",
        paragraph: [ "Me autamme sinua siirtymään liityntäpysäköintiin ja sieltä määränpäähän" ]
    },
    {
        header: "Työmatkalla tai menossa liikkumaan, tämä on sinua varten.",
        paragraph: [ 
            "Etkö ole koskaan käyttänyt liityntäpysäköintejä? Tai onko reitti vaikea navigoida liityntäpysäköinnin kautta?", 
            "Ei hätää, me teemme siitä helpompaa." 
        ]
    },
    {
        header: "Tämä on hyväksi ympäristölle",
        paragraph: 
            [
                "Vaihtoehtojen miettiminen tarkoittaa, että olet oikealla polulla Matkiksen kanssa.",
                "Autamme sinua vähentämään hiilipäästöjä valitsemalla sopivimman liityntäparkin.",
            ],
    }
]

export const DestinationData = {
    TAYS: {
        header: "TAYS Pääovi",
        description: ["Tampereen yliopistollinen sairaala"],
        location: {
            lat: 61.505032,
            lon: 23.814340
        }
    },
    Ensihoito: {
        header: "Ensihoito",
        // description: ["Lorem ipsum"],
        location: {
            lat: 61.504953,
            lon: 23.813660
        }
    },
    MEDI1: {
        header: "Finmedi 1",
        description: ["Ravintola FINN-MEDI"],
        location: {
            lat: 61.506493,
            lon: 23.812425
        }
    },
    MEDI5: {
        header: "Finmedi 5",
        description: ["FINN-MEDI 5 Auditorio"],
        location: {
            lat: 61.506792,
            lon: 23.814942
        }
    },
    POTILASHOTELLI: {
        header: "Potilashotelli",
        description: ["Hotelliyöpyminen potilaalle"],
        location: {
            lat: 61.508182,
            lon: 23.814202
        }
    },
    ARVO: {
        header: "Arvo (TUNI)",
        description: ["Info, ravintola, kirjasto ja luentosalit"],
        location: {
            lat: 61.507593,
            lon: 23.823047
        }
    },
    TAMK: {
        header: "TAMK",
        description: ["Tampereen ammattikorkeakoulu"],
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
        icon: "../../icons/testImg.jpeg",
        location: {
            lat: 61.500488,
            lon: 23.877928
        }
    },
    TURTOLA: {
        header: "Turtolan K-Citymarket",
        description: [],
        icon: "../../icons/testImg.jpeg",
        location: {
            lat: 61.477595,
            lon: 23.841099
        }
    },
    KOVISTONKYLA: {
        header: "Koivistonkylän Prisma",
        description: [],
        icon: "../../icons/testImg.jpeg",
        location: {
            lat: 61.468466,
            lon: 23.777729
        }
    },
    IKEA: {
        header: "IKEA Tampere",
        description: [],
        icon: "../../icons/testImg.jpeg",
        location: {
            lat: 61.453240,
            lon: 23.770681
        }
    },
    KAUKAJARVI: {
        header: "Kaukajärven Hyllilänkatu",
        description: [],
        icon: "../../icons/testImg.jpeg",
        location: {
            lat: 61.479118,
            lon: 23.897316
        }
    }
}

export const CurrentDestinationData = {
    CURRENT: {
        header: "Käytä nykyistä lokaatiota",
        icon: "my_location"
    },
    OTHER: {
        header: "Muu osoite",
        icon: "create"
    }
}

export const NavbarContent = {
    [ROUTES.destination]: "Mihin olet menossa?",
    [ROUTES.parking]: "Valitse liityntäparkki",
    [ROUTES.current]: "Mistä lähdet matkaan?",
    [ROUTES.navigate]: "Olet melkein perillä"
}

export const NotificationContent = {
    Cookies: "Sivusto käyttää keksejä käyttökokemuksen parantamiseksi. Tietoja ei anneta kolmansille osapuolille. Jatkamalla sivuston käyttöä, hyväksyt keksien käytön.",
    Location: "Salli selaimen asetuksista sijaintitietojen käyttö käyttääksesi paikannustoimintoa"
}