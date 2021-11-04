var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoic2hha2VzdHpkIiwiYSI6ImNrdmw3a3RsaGJnc3oydW9mejM4ZTBiaTkifQ.K50tZ76g15V_MN-PQuIOQQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Remittances In the Northern Triangle',
    subtitle: 'Remittances Are a Vital Source of Income for the Countries in the Northern Triangle',
    byline: 'By Thandolwethu Dlamini',
    footer: "Source: Ng, J. J. L., Salgado, G. J. C., Espinosa, L. A., &amp; Serrano, C. (2020, October 7). Yearbook of migration and remittances Mexico 2020. BBVA Research. Retrieved November 4, 2021, from https://www.bbvaresearch.com/en/publicaciones/yearbook-of-migration-and-remittances-mexico-2020/. ",
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'The Northern Triangle',
            image: './images/NT_emigrants.png',
            description: "According to BBVA Research, there were 4.4 million emigrants from Central America (CA) in 2017, equivalent to 9% of the region's total population. A majority of CA emigrants reside in the United States. The data shows economic factors as primary reasons people migrate, and emigrants from CA send remittances to their home countries to support those left behind and pay back loans for migrating. Remittances are vital for the countries' economies in CA, particularly the countries in the Northern Triangle.",
            location: {
                center: [-88.76811, 15.41230],
                zoom: 6.5,
                pitch: 45,
                bearing:0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ESD-identifier',
            alignment: 'right',
            hidden: false,
            title: 'El Salvador',
            image: './images/Coat_of_arms_of_El_Salvador.png',
            description: 'In El Salvador, Remitances equate to 21.4% of GDP',
            location: {
                center: [-88.95883, 13.73640],
                zoom: 8,
                pitch: 0,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'GTN-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Guatemala',
            image: './images/Coat_of_arms_of_Guatemala.png',
            description: 'In Guatemala, remitances equate to 12.0% of GDP.',
            location: {
                center: [-90.38360, 15.31155],
                zoom: 6.5,
                pitch: 0,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'HND-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Honduras',
            image: './images/Coat_of_arms_of_Honduras.png',
            description: 'In Honduras, remitances equate to 20.0% of GDP.',
            location: {
                center: [-87.03591, 14.69909],
                zoom: 7,
                pitch: 0,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        ,
        {
            id: 'HND1-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Income from remittances in Honduras, 2010-2018 (million USD)',
            image: './images/HNDremitIncome.png',
            description: 'Since 2010, the remittances sent by Honduran imigrants has been increasing gradually. In 2018 remittances were 82% higher than what they were in 2010',
            location: {
                center: [-87.03591, 14.69909],
                zoom: 7,
                pitch: 0,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        ,
        {
            id: 'HND2-identifier',
            alignment: 'right',
            hidden: false,
            title: "Percentage distribution of beneficiaries of remittances by relationship, 2019",
            image: './images/HNDremitBenft.png',
            description: "Of all of the people sending remittances, 34.9% said that their mother is the recipient of the money, with the next most common recipient being their brother or sister (18.8%)",
            location: {
                center: [-87.03591, 14.69909],
                zoom: 7,
                pitch: 0,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ESD1-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Income from remittances in El Salvador, 2010-2018 (million USD)',
            image: './images/ESDremitIncome.png',
            description: 'Remittances are very important in El Salvador, and totaled 5.4 billion of US dollars in 2018',
            location: {
                center: [-88.95883, 13.73640],
                zoom: 8,
                pitch: 0,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        ,
        {
            id: 'ESD2-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Immigration status in the United States of Salvadorans who send remittances, 2018 (%)',
            image: './images/ESDimStat.png',
            description: 'More than half of sending-remittances Salvadorians were without documents in the United States',
            location: {
                center: [-88.95883, 13.73640],
                zoom: 8,
                pitch: 0,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        ,
        {
            id: 'GTN1-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Income from remittances in Guatemala, 2010-2018 (million USD)',
            image: './images/GTNremitIncome.png',
            location: {
                center: [-90.38360, 15.31155],
                zoom: 6.5,
                pitch: 0,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        ,
        {
            id: 'GTN2-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Percentage distribution of the population receiving remittances by sex and age group in Guatemala, 2014',
            image: './images/GTNremitBnftDist.png',
            description:"Guatemala received 9,288 million of US dollars in remittances in 2018, 68.6% of which was sent to women, most of whom were under the age of 40.",
            location: {
                center: [-90.38360, 15.31155],
                zoom: 6.5,
                pitch: 0,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
