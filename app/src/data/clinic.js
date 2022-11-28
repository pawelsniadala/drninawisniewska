import clinic1 from '../assets/clinic/clinic1.jpg';
import clinic2 from '../assets/clinic/clinic2.jpg';
import clinic3 from '../assets/clinic/clinic3.jpg';
import clinic4 from '../assets/clinic/clinic4.jpg';

export const clinic = {
    pictures: [
        {
            designation: 'clinic1',
            src: clinic1,
            source: clinic1,
            rows: 1,
            cols: 2,
            order: 1
        },
        {
            designation: 'clinic2',
            src: clinic2,
            source: clinic2,
            rows: 1,
            cols: 1,
            order: 2
        },
        {
            designation: 'clinic3',
            src: clinic3,
            source: clinic3,
            rows: 1,
            cols: 1,
            order: 3
        },
        {
            designation: 'clinic4',
            src: clinic4,
            source: clinic4,
            rows: 1,
            cols: 2,
            order: 4
        }
    ],
    statistics: [
        {
            title: 10,
            subtitle:'Ponad 10 lat działalności',
            suffix: '+'
        },
        {
            title: 7120,
            subtitle: '7120 wykonanych zabiegów w 2021 roku',
            suffix: ''
        },
        {
            title: 99,
            subtitle: '99% zadowolonych klientów',
            suffix: '%'
        }
    ]
};
