import * as Yup from 'yup';

const required = 'To pole jest wymagane';
const space = 'Pole nie może zaczynać się od spacji';
const email = 'Wprowadź poprawny adres e-mail';
const fileType = 'Wybrany plik ma nieobsługiwany format';
const fileSize = 'Wybrany plik jest za duży'

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

export const careerSchema = Yup.object().shape({
    name: Yup.string().required(required).spaceTest(),
    email: Yup.string().required(required).spaceTest().email(email),
    phone: Yup.string().required(required).spaceTest(),
    application: Yup.mixed()
        .test("required", required, files => files && files.length > 0)
        .test("fileType", fileType, files => !files || files.length === 0 || Array.from(files).every(file => file.type === "application/pdf" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"))
        .test("fileSize", fileSize, files => !files || files.length === 0 || Array.from(files).every(file => file.size <= 500_000))
});
