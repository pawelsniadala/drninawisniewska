import clinic1Thumbnail from '../assets/clinic/clinic1Thumbnail.jpg';
import clinic1Original from '../assets/clinic/clinic1Original.jpg';
import clinic2Thumbnail from '../assets/clinic/clinic2Thumbnail.jpg';
import clinic2Original from '../assets/clinic/clinic2Original.jpg';
import clinic3Thumbnail from '../assets/clinic/clinic3Thumbnail.jpg';
import clinic3Original from '../assets/clinic/clinic3Original.jpg';
import clinic4Thumbnail from '../assets/clinic/clinic4Thumbnail.jpg';
import clinic4Original from '../assets/clinic/clinic4Original.jpg';

import clinic5Original from '../assets/clinic/clinic5Original.jpg';
import clinic5Thumbnail from '../assets/clinic/clinic5Thumbnail.jpg';
import clinic6Original from '../assets/clinic/clinic6Original.jpg';
import clinic6Thumbnail from '../assets/clinic/clinic6Thumbnail.jpg';

export const clinic = {
    pictures: [
        {
            designation: 'clinic1',
            srcThumbnail: clinic1Thumbnail,
            srcOriginal: clinic1Original,
            author: "Karol Dądera",
            rows: 1,
            cols: 2,
            order: 1
        },
        {
            designation: 'clinic2',
            srcThumbnail: clinic2Thumbnail,
            srcOriginal: clinic2Original,
            author: "Karol Dądera",
            rows: 1,
            cols: 1,
            order: 2
        },
        {
            designation: 'clinic3',
            srcThumbnail: clinic5Thumbnail,
            srcOriginal: clinic5Original,
            author: "Karol Dądera",
            rows: 1,
            cols: 1,
            order: 3
        },
        {
            designation: 'clinic4',
            srcThumbnail: clinic4Thumbnail,
            srcOriginal: clinic4Original,
            author: "Karol Dądera",
            rows: 1,
            cols: 2,
            order: 4
        },
        {
            designation: 'clinic5',
            srcThumbnail: clinic3Thumbnail,
            srcOriginal: clinic3Original,
            author: "Karol Dądera",
            rows: 1,
            cols: 2,
            order: 4
        },
        {
            designation: 'clinic6',
            srcThumbnail: clinic6Thumbnail,
            srcOriginal: clinic6Original,
            author: "Karol Dądera",
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
            title: 7125,
            subtitle: '7125 wykonanych zabiegów w 2022 roku',
            suffix: ''
        },
        {
            title: 99,
            subtitle: '99% zadowolonych klientów',
            suffix: '%'
        }
    ]
};
