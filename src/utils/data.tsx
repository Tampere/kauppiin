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
        description: "Lorem ipsum",
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.505032,
            lon: 23.814340
        }
    },
    Ensihoito: {
        header: "Ensihoito",
        description: "Lorem ipsum",
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.504953,
            lon: 23.813660
        }
    },
    MEDI1: {
        header: "Finmedi 1",
        description: "Lorem ipsum",
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.506493,
            lon: 23.812425
        }
    },
    MEDI5: {
        header: "Finmedi 5",
        description: "Lorem ipsum",
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.506792,
            lon: 23.814942
        }
    },
    POTILASHOTELLI: {
        header: "Potilashotelli",
        description: "Lorem ipsum",
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.508182,
            lon: 23.814202
        }
    },
    ARVO: {
        header: "Arvo (TUNI)",
        description: "Lorem ipsum",
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.507593,
            lon: 23.823047
        }
    },
    TAMK: {
        header: "TAMK",
        description: "Lorem ipsum",
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.504330,
            lon: 23.809335
        }
    }
}

export const ParkingData = {
    NIIHAMA: {
        header: "Niihaman liityntäpysäköinti",
        description: `
            Niihaman liityntäpysäköintipaikka sijaitsee Lahdentien ja Niihamankadun risteyksessä. 
            Parkkialueelle mahtuu 70 henkilöautoa. Läheisellä bussipysäkillä on runsas vuorotarjonta niin aamu- kuin iltaruuhkankin aikaan. 
            Kaikki pysäkin kautta liikennöivät bussit ajavat yliopistollisen sairaalan ohi. Ruuhka-aikana pysäkiltä liikennöidään muutaman minuutin välein.
        `,
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.500488,
            lon: 23.877928
        }
    },
    TURTOLA: {
        header: "Turtolan K-Citymarketin liityntäpysäköintialue",
        description: `
            Turtolaan K-Citymarketin liityntäpysäköintialueella on tilaa 36 autolle. 
            Liityntäpysäköintiin osoitetut pysäköintipaikat sijaitsevat pysäköintialueen itälaidalla, Martinpojankadun puolella, ja ne on merkitty liityntäpysäköinnistä kertovin opastusmerkein.
            Liityntäpysäköintipaikan läheisyydessä on useita bussipysäkkejä, joilta on hyvät joukkoliikenneyhteydet keskustan suuntaan. Liityntäpysäköintialue avattiin huhtikuussa 2018.
        `,
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.477595,
            lon: 23.841099
        }
    },
    KOVISTONKYLA: {
        header: "Koivistonkylän Prisman liityntäpysäköintialue",
        description: `
            Liityntäpysäköintiä varten on varattu Koivistonkylän Prisman pysäköintialueelta 34 pysäköintiruutua, 
            jotka ovat arkipäivisin klo 5–18 liityntäpysäköintiä tarvitsevien käytössä. Liityntäpysäköintipaikalta on lyhyt kävelymatka Ekankulman bussipysäkille, 
            josta liikennöivät keskustan suuntaan bussilinjat 5, 35, 50, 52 ja 53. Prisman liityntäpysäköintialue avautui 1.6.2018.
        `,
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.468466,
            lon: 23.777729
        }
    },
    IKEA: {
        header: "IKEA Tampereen liityntäpysäköintialue",
        description: `
            IKEA Tampereen liityntäpysäköintialueella on noin 70 paikkaa, jotka tunnistaa liityntäpysäköintipaikan merkistä. 
            Paikat on varattu työpäivän mittaiseen pysäköintiin ja niissä on 12h-aikarajoitus. Lähipysäkeiltä kulkevat joukkoliikenteen bussit 5, 11B ja 33. 
            Liityntäpysäköintialue avattiin 17.9.2018.
        `,
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.453240,
            lon: 23.770681
        }
    },
    KAUKAJARVI: {
        header: "Kaukajärven Hyllilänkadun liityntäpysäköintialue",
        description: `
            Hankkion Hyllilänkadun liityntäpysäköintialuella on tilaa 96 henkilöautolle, ja se palvelee erityisesti Kangasalan suunasta tulevaa työmatkaliikennettä. 
            Liityntäpysäköintialue sijaitsee Kangasalantien varressa vastapäätä Kaukajärven soutu- ja melontastadionia. 
            Läheisiltä bussipysäkeiltä liikennöivät Nysse-linjat 40, 40A, 40B, 40C ja 43 Tampereen keskustan ja Kangasalan suuntiin. 
            Lähimmät pysäkit ovat Kristilla 4052 (Kangasalan suuntaan) ja Kristilla 4053 (Tampereen suuntaan).
            
            Hyllilänkadun liityntäpysäköintialueen rakentamisessa on hyödynnetty kierrätysmateriaalia lähialueiden rakennuskohteista. Liityntäpysäköintialue avattiin 1.11.2019.
        `,
        image: "../../images/testImg.jpeg",
        location: {
            lat: 61.479118,
            lon: 23.897316
        }
    }
}