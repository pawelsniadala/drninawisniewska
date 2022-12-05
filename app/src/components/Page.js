import { useEffect } from 'react';

const PageTitle = (props) => {
    const companyName = 'Dermatologia i Medycyna Estetyczna dr Nina Wiśniewska';

    useEffect(() => {
        document.title = props.main ? companyName : `${props.title} - ${companyName}`;
    }, [props.main, props.title]);

    return props.children;
};

const Page = (Component) => {
    return (props) => {
        window.scroll(0, 0);

        return (
            <PageTitle {...props}>
                <Component />
            </PageTitle>
        );
    }
}

export default Page;
