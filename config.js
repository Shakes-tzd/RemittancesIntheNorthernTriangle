var config = {
    style: 'mapbox://styles/shakestzd/ckvlk0tjb3wga14lc0n7o8ne2',
    accessToken: 'pk.eyJ1Ijoic2hha2VzdHpkIiwiYSI6ImNrdmtlNjIxNDA5dWsydXFuMzRzeTBnd24ifQ.ospot06FpBdtj5fgqGRTAw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Remittances In the Northern Triangle',
    subtitle: 'Remittances Are a Vital Source of Income for the Countries in the Northern Triangle',
    byline: 'By Thandolwethu Dlamini',
    footer: "Source: Ng, J. J. L., Salgado, G. J. C., Espinosa, L. A., &amp; Serrano, C. (2020, October 7). Yearbook of migration and remittances Mexico 2020. BBVA Research. Retrieved November 4, 2021, from https://www.bbvaresearch.com/en/publicaciones/yearbook-of-migration-and-remittances-mexico-2020/.",
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'center',
            hidden: false,
            title: 'The Northern Triangle',
            image: './images/NT_emigrants.png',
            imageCredit: '<a href="https://www.csis.org/analysis/new-social-contract-northern-triangle">Center for Strategic and International Studies (CSIS)</a>',
            description: "According to BBVA Research, there were 4.4 million emigrants from Central America (CA) in 2017, equivalent to 9% of the region's total population. A majority of CA emigrants reside in the United States. The data shows economic factors as primary reasons people migrate, and emigrants from CA send remittances to their home countries to support those left behind and pay back loans for migrating. Remittances are vital for the countries' economies in CA, particularly the countries in the Northern Triangle.",
            location: {
                center: [-88.76811, 15.41230],
                zoom: 6,
                pitch: 45,
                bearing:0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'northen_triangle',
                    opacity: 0.5,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'northen_triangle',
                    opacity: 0,
                    duration: 500
                }
            ]
        },
        {
            id: 'ESD-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Value of Remittances El Salvador',
            image: './images/Coat_of_arms_of_El_Salvador.png',
            imageCredit: '<a href="https://en.wikipedia.org/wiki/El_Salvador">Wikipedia</a>',
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
            onChapterEnter: [
                {
                    layer: 'elsalvado',
                    opacity: 0.8,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'elsalvado',
                    opacity: 0,
                    duration: 50
                }
            ]
        },
        {
            id: 'GTN-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Value of Remittances in Guatemala',
            image: './images/Coat_of_arms_of_Guatemala.png',
            imageCredit: '<a href="https://en.wikipedia.org/wiki/Guatemala">Wikipedia</a>',
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
            onChapterEnter: [
                {
                    layer: 'guatemala',
                    opacity: 0.8,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'guatemala',
                    opacity: 0,
                    duration: 50
                }
            ]
        },
        {
            id: 'HND-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Value of Remittances in Honduras',
            image: './images/Coat_of_arms_of_Honduras.png',
            imageCredit: '<a href="https://en.wikipedia.org/wiki/Honduras">Wikipedia</a>',
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
            onChapterEnter: [
                {
                    layer: 'honduras',
                    opacity: 0.5,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'honduras',
                    opacity: 0,
                    duration: 50
                }
            ]
        }
        ,
        {
            id: 'HND1-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Income from remittances in Honduras, 2010-2018 (million USD)',
            image: './images/HNDremitIncome.png',
            imageCredit: '<a href="https://www.bbvaresearch.com/en/publicaciones/yearbook-of-migration-and-remittances-mexico-2020/">BBVA Reaserch</a>',
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
            onChapterEnter: [
                {
                    layer: 'honduras',
                    opacity: 0.5,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'honduras',
                    opacity: 0.5,
                    duration: 50
                }
            ]
        }
        ,
        {
            id: 'HND2-identifier',
            alignment: 'left',
            hidden: false,
            title: "Percentage distribution of beneficiaries of remittances by relationship, 2019",
            image: './images/HNDremitBenft.png',
            imageCredit: '<a href="https://www.bbvaresearch.com/en/publicaciones/yearbook-of-migration-and-remittances-mexico-2020/">BBVA Reaserch</a>',
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
            onChapterEnter: [
                {
                    layer: 'honduras',
                    opacity: 0.5,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'honduras',
                    opacity: 0,
                    duration: 50
                }
            ]
        },
        {
            id: 'ESD1-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Income from remittances in El Salvador, 2010-2018 (million USD)',
            image: './images/ESDremitIncome.png',
            imageCredit: '<a href="https://www.bbvaresearch.com/en/publicaciones/yearbook-of-migration-and-remittances-mexico-2020/">BBVA Reaserch</a>',
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
            onChapterEnter: [
                {
                    layer: 'elsalvado',
                    opacity: 0.5,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'elsalvado',
                    opacity: 0.5,
                    duration: 50
                }
            ]
        }
        ,
        {
            id: 'ESD2-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Immigration status in the United States of Salvadorans who send remittances, 2018 (%)',
            image: './images/ESDimStat.png',
            imageCredit: '<a href="https://www.bbvaresearch.com/en/publicaciones/yearbook-of-migration-and-remittances-mexico-2020/">BBVA Reaserch</a>',
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
            onChapterEnter: [
                {
                    layer: 'elsalvado',
                    opacity: 0.5,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'elsalvado',
                    opacity: 0,
                    duration: 50
                }
            ]
        }
        ,
        {
            id: 'GTN1-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Income from remittances in Guatemala, 2010-2018 (million USD)',
            image: './images/GTNremitIncome.png',
            imageCredit: '<a href="https://www.bbvaresearch.com/en/publicaciones/yearbook-of-migration-and-remittances-mexico-2020/">BBVA Reaserch</a>',
            location: {
                center: [-90.38360, 15.31155],
                zoom: 6.5,
                pitch: 0,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'guatemala',
                    opacity: 0.8,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'guatemala',
                    opacity: 0.8,
                    duration: 50
                }
            ]
        },
        ,
        {
            id: 'GTN2-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Percentage distribution of the population receiving remittances by sex and age group in Guatemala, 2014',
            image: './images/GTNremitBnftDist.png',
            imageCredit: '<a href="https://www.bbvaresearch.com/en/publicaciones/yearbook-of-migration-and-remittances-mexico-2020/">BBVA Reaserch</a>',
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
            onChapterEnter: [
                {
                    layer: 'guatemala',
                    opacity: 0.8,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'guatemala',
                    opacity: 0,
                    duration: 50
                }
            ]
        },
        {
            id: 'conclusion',
            alignment: 'center',
            hidden: false,
            title: 'Conclusion',
            description: "Remittances are critical in porverty reduction because they help millions of families that receive them acquire food, \
            clothing, education, housing and health care ",
            location: {
                center: [-88.76811, 15.41230],
                zoom: 6,
                pitch: 45,
                bearing:0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'northen_triangle',
                    opacity: 0.5,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'northen_triangle',
                    opacity: 0,
                    duration: 500
                }
            ]
        },
    ]
};
