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
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

        return (
            <PageTitle {...props}>
                <Component />
            </PageTitle>
        );
    }
}

export default Page;
