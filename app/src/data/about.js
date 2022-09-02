import about1 from "../assets/about/about1.jpg";
import about2 from "../assets/about/about2.jpg";
import about3 from "../assets/about/about3.jpg";
import about4 from "../assets/about/about4.jpg";

export const about = {
    pictures: [
        {
            src: about1,
            source: about1,
            rows: 1,
            cols: 2,
            order: 1
        },
        {
            src: about2,
            source: about2,
            rows: 1,
            cols: 1,
            order: 2,
            link: `<a href="https://pl.freepik.com/darmowe-zdjecie/mloda-kobieta-lezy-z-zamknietymi-oczami-procedura-kosmetologa_7168639.htm#query=cosmetology&position=45&from_view=search">Image by ArthurHidden</a> on Freepik`
        },
        {
            src: about3,
            source: about3,
            rows: 1,
            cols: 1,
            order: 3,
            link: `<a href="https://pl.freepik.com/darmowe-zdjecie/kobieta-na-kosmetologa-dokonywanie-zabiegow-kosmetycznych_12178066.htm#query=cosmetology&position=48&from_view=search#position=48&query=cosmetology">Image by senivpetro</a> on Freepik`
        },
        {
            src: about4,
            source: about4,
            rows: 1,
            cols: 2,
            order: 4,
            link: `<a href="https://pl.freepik.com/darmowe-zdjecie/uroda-i-spa_10788319.htm#page=9&query=cosmetology&position=1&from_view=search">Image by Racool_studio</a> on Freepik`
        },
    ],
    statistics: [
        {
            title: 10,
            subtitle:'Ponad 10 lat działalności',
            suffix: '+',
        },
        {
            title: 7120,
            subtitle: '7120 wykonanych zabiegów w 2021 roku',
            suffix: '',
        },
        {
            title: 99,
            subtitle: '99% zadowolonych klientów',
            suffix: '%',
        },
    ]
};
