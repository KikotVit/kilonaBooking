export interface ISeat {
    id: string,
    number: string,
    isReserved: boolean,
}

export interface IRoutes {
    routeName: string,
    routeConnection: string,
    seats: ISeat[];

}

export const store: IRoutes[] = [
    {
        routeName: 'EX 1-2',
        routeConnection: 'Kaduwela - Matara',
        seats: [
            {
                id: '1',
                number: '1',
                isReserved: false,
            },
            {
                id: '2',
                number: '2',
                isReserved: false,
            },
            {
                id: '3',
                number: '3',
                isReserved: false,
            },
            {
                id: '4',
                number: '4',
                isReserved: false,
            },
            {
                id: '5',
                number: '5',
                isReserved: false,
            },
            {
                id: '6',
                number: '6',
                isReserved: true,
            },
            {
                id: '7',
                number: '7',
                isReserved: true,
            },
            {
                id: '8',
                number: '8',
                isReserved: true,
            },
            {
                id: '9',
                number: '9',
                isReserved: false,
            },
            {
                id: '10',
                number: '10',
                isReserved: false,
            },
            {
                id: '11',
                number: '11',
                isReserved: false,
            },
            {
                id: '12',
                number: '12',
                isReserved: false,
            },
            {
                id: '13',
                number: '13',
                isReserved: false,
            },
            {
                id: '14',
                number: '14',
                isReserved: false,
            },
            {
                id: '15',
                number: '1',
                isReserved: false,
            },
            {
                id: '16',
                number: '2',
                isReserved: false,
            },
            {
                id: '17',
                number: '3',
                isReserved: true,
            },
            {
                id: '18',
                number: '4',
                isReserved: false,
            },
            {
                id: '19',
                number: '5',
                isReserved: true,
            },
            {
                id: '20',
                number: '6',
                isReserved: false,
            },
            {
                id: '21',
                number: '7',
                isReserved: false,
            },
            {
                id: '22',
                number: '8',
                isReserved: true,
            },
            {
                id: '23',
                number: '9',
                isReserved: true,
            },
            {
                id: '24',
                number: '10',
                isReserved: true,
            },
            {
                id: '25',
                number: '11',
                isReserved: false,
            },
            {
                id: '26',
                number: '12',
                isReserved: true,
            },
            {
                id: '27',
                number: '13',
                isReserved: true,
            },
            {
                id: '28',
                number: '14',
                isReserved: false,
            },
        ],
    },
    {
        routeName: 'EX 1-25',
        routeConnection: 'Panadura - Matara',
        seats: [
            {
                id: '1',
                number: '1',
                isReserved: true,
            },
            {
                id: '2',
                number: '2',
                isReserved: false,
            },
            {
                id: '3',
                number: '3',
                isReserved: false,
            },
            {
                id: '4',
                number: '4',
                isReserved: false,
            },
            {
                id: '5',
                number: '5',
                isReserved: false,
            },
            {
                id: '6',
                number: '6',
                isReserved: false,
            },
            {
                id: '7',
                number: '7',
                isReserved: false,
            },
            {
                id: '8',
                number: '8',
                isReserved: false,
            },
            {
                id: '9',
                number: '9',
                isReserved: false,
            },
            {
                id: '10',
                number: '10',
                isReserved: false,
            },
            {
                id: '11',
                number: '11',
                isReserved: false,
            },
            {
                id: '12',
                number: '12',
                isReserved: false,
            },
            {
                id: '13',
                number: '13',
                isReserved: false,
            },
            {
                id: '14',
                number: '14',
                isReserved: false,
            },
            {
                id: '15',
                number: '1',
                isReserved: false,
            },
            {
                id: '16',
                number: '2',
                isReserved: false,
            },
            {
                id: '17',
                number: '3',
                isReserved: false,
            },
            {
                id: '18',
                number: '4',
                isReserved: false,
            },
            {
                id: '19',
                number: '5',
                isReserved: false,
            },
            {
                id: '20',
                number: '6',
                isReserved: false,
            },
            {
                id: '21',
                number: '7',
                isReserved: false,
            },
            {
                id: '22',
                number: '8',
                isReserved: false,
            },
            {
                id: '23',
                number: '9',
                isReserved: false,
            },
            {
                id: '24',
                number: '10',
                isReserved: false,
            },
            {
                id: '25',
                number: '11',
                isReserved: false,
            },
            {
                id: '26',
                number: '12',
                isReserved: false,
            },
            {
                id: '27',
                number: '13',
                isReserved: false,
            },
            {
                id: '28',
                number: '14',
                isReserved: true,
            },
        ],
    },
];