import * as Yup from 'yup';

const required = 'To pole jest wymagane';
const space = 'Pole nie może zaczynać się od spacji';
const email = 'Wprowadź poprawny adres e-mail';

Yup.addMethod(Yup.string, 'spaceTest', function () {
    return this.test({
        name: 'spaceTest',
        message: space,
        exclusive: true,
        test: function (value) {
            return /^[^\s].*/.test(value);
        }
    });
});

export const contactSchema = Yup.object().shape({
    name: Yup.string().required(required).spaceTest(),
    email: Yup.string().required(required).spaceTest().email(email),
    phone: Yup.string().required(required).spaceTest(),
    message: Yup.string().required(required).spaceTest()
});
