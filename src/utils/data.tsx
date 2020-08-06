import { ROUTES } from "./const";

export const InstructionData = [
    {
        header: "Hiilineutraalimpi tapa liikkua.",
        paragraph: [ "Tänään me autamme sinua siirtymään liityntäpysäköintiin ja sieltä määränpäähän." ]
    },
    {
        header: "Matkalla? Tämä on sinua varten.",
        paragraph: [ 
            "Etkö ole koskaan käyttänyt liityntäpysäköintejä? Tai onko reitti vaikea navigoida liityntäpysäköinnin kautta?", 
            "Ei hätää, me teemme siitä helpompaa." 
        ]
    },
    {
        header: "Tämä on hyväksi ympäristölle",
        paragraph: 
            [
                "Vaihtoehtojen miettiminen tarkoittaa, että olet oikealla polulla.",
                "Autamme sinua vähentämään hiilipäästöjä valitsemalla sopivimman liityntäparkin.",
            ],
    }
]

export const DestinationData = {
    TAYS: {
        header: "TAYS Pääovi",
        description: ["Elämänaukio, Kuntokatu 2, 33520 Tampere"],
        location: {
            lat: 61.505032,
            lon: 23.814340
        }
    },
    Ensihoito: {
        header: "TAYS Ensiapu Acuta",
        description: ["Teiskonotie 35, 33520 Tampere"],
        location: {
            lat: 61.504953,
            lon: 23.813660
        }
    },
    MEDI1: {
        header: "Finn-Medi 1",
        description: ["Biokatu 6, 33520 Tampere"],
        location: {
            lat: 61.506493,
            lon: 23.812425
        }
    },
    MEDI5: {
        header: "Finn-Medi 5",
        description: ["Biokatu 12, 33520 Tampere"],
        location: {
            lat: 61.506792,
            lon: 23.814942
        }
    },
    POTILASHOTELLI: {
        header: "Potilashotelli Norlandia Tampere",
        description: ["Biokatu 14, 33520 Tampere"],
        location: {
            lat: 61.508182,
            lon: 23.814202
        }
    },
    ARVO: {
        header: "Arvo BioMediTech",
        description: ["Medisiinarinkatu 3, 33520 Tampere"],
        location: {
            lat: 61.507593,
            lon: 23.823047
        }
    },
    TAMK: {
        header: "Tampereen ammattikorkeakoulu (TAMK)",
        description: ["Kuntokatu 3, 33520 Tampere"],
        location: {
            lat: 61.504330,
            lon: 23.809335
        }
    }
}

export const ParkingData = {
    NIIHAMA: {
        header: "Niihama",
        description: [
            "",
            "Niihamankatu 6, Tampere",
            "Pysäköintipaikkoja: 70",
            "Bussimatka: 20min",
            "CO2 säästö: 517.72g"
        ],
        location: {
            lat: 61.500488,
            lon: 23.877928
        }
    },
    TURTOLA: {
        header: "Turtola",
        description: [
            "",
            "Turtolan kauppakeskus, Tampere",
            "Pysäköintipaikkoja: 36",
            "Bussimatka: 36min",
            "CO2 säästö: 565.88g"
        ],
        location: {
            lat: 61.477595,
            lon: 23.841099
        }
    },
    KOVISTONKYLA: {
        header: "Koivistonkylä",
        description: [
            "",
            "Prisma Koivistonkylä",
            "Pysäköintipaikkoja: 34",
            "Bussimatka: 50min",
            "CO2 säästö: 1083.6g"
        ],
        location: {
            lat: 61.468466,
            lon: 23.777729
        }
    },
    IKEA: {
        header: "IKEA",
        description: [
            "",
            "Ikea, Tampere",
            "Pysäköintipaikkoja: 70",
            "Bussimatka: 45min",
            "CO2 säästö: 794.64g"
        ],
        location: {
            lat: 61.453240,
            lon: 23.770681
        }
    },
    KAUKAJARVI: {
        header: "Kaukajärvi",
        description: [
            "",
            "Hyllilänkatu, Tampere",
            "Pysäköintipaikkoja: 96",
            "Bussimatka: 30min",
            "CO2 säästö: 794,64g"
        ],
        location: {
            lat: 61.479118,
            lon: 23.897316
        }
    }
}

export const CurrentDestinationData = {
    CURRENT: {
        header: "Tämänhetkinen sijainti",
        icon: "my_location"
    },
    // OTHER: {
    //     header: "Jokin toinen paikka",
    //     icon: "create"
    // }
}

export const NavbarContent = {
    [ROUTES.destination]: "Mihin olet menossa?",
    [ROUTES.parking]: "Valitse liityntäparkki",
    [ROUTES.current]: "Mistä lähdet matkaan?",
    [ROUTES.navigate]: "Olet melkein perillä"
}

export const NotificationContent = {
    Cookies: "Käytämme evästeitä käyttökokemuksen parantamiseksi. ",
    Location: "Tarkista asetuksista, että olet antanut selaimelle luvan käyttää puhelimesi sijaintitietoja.",
    Safari: "Sovellus ei tue toistaiseksi käytetyn selaimen paikannusta"
}