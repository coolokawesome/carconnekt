import Tesla from './imgs/cars/tesla.png'
import {RecoilRoot, atom, selector, useRecoilValue, useRecoilState} from 'recoil';
export const allCarsAvailable = atom(
    {
        key: "allCarsAvailable",
        default:[
            {
                id: 1,
                make: "Tesla",
                model: "Model 3",
                year: 2022,
                transmission: "automatic",
                doors: 4,
                img: './imgs/cars/tesla.png',
                location:{
                    address: "33 King St. Toronto, ON",
                    distance: 0.3
                }
            },
            {
                id: 2,
                make: "Honda",
                model: "Accord",
                year: 2021,
                transmission: "automatic",
                doors: 4,
                img: "Honda Accord",
                location: {
                  address: "55 Queen St. Toronto, ON",
                  distance: 0.5
                }
            },
            {
                id: 3,
                make: "Jeep",
                model: "Wrangler",
                year: 2022,
                transmission: "automatic",
                doors: 4,
                img: "Jeep Wrangler",
                location: {
                  address: "77 Main St. Toronto, ON",
                  distance: 0.4
                }
            },
            {
                id: 4,
                make: "Ford",
                model: "F-350",
                year: 2022,
                transmission: "automatic",
                doors: 4,
                img: "Ford F-350",
                location: {
                  address: "99 Market St. Toronto, ON",
                  distance: 0.6
                }
            },
            {
                id: 5,
                make: "Mini",
                model: "Cooper S",
                year: 2020,
                transmission: "manual",
                doors: 2,
                img: "Mini Cooper S",
                location: {
                  address: "11 Grove St. Toronto, ON",
                  distance: 0.2
                }
            },
            {
            id: 6,
            make: "Nissan",
            model: "Sentra",
            year: 2020,
            transmission: "automatic",
            doors: 4,
            img: "Nissan Sentra",
            location: {
                address: "22 Oak St. Toronto, ON",
                distance: 0.4
            }
            },
            {
            id: 7,
            make: "Volkswagen",
            model: "Golf",
            year: 2022,
            transmission: "automatic",
            doors: 4,
            img: "Volkswagen Golf",
            location: {
                address: "44 Elm St. Toronto, ON",
                distance: 0.7
            }
            },
            {
            id: 8,
            make: "Audi",
            model: "Etron",
            year: 2023,
            transmission: "automatic",
            doors: 4,
            img: "Audi Etron",
            location: {
                address: "66 Maple St. Toronto, ON",
                distance: 0.9
            }
            } 
        ]
    }
)

export const selectedCar = selector(
    {
        key: "selectedCar",
        get: ({get}) => get(allCarsAvailable)
    }
)