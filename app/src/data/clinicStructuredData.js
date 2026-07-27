export const SITE_URL = "https://drninawisniewska.pl";

export const CLINIC_ID = `${SITE_URL}/#medical-clinic`;

export const clinicStructuredData = {
  "@type": "MedicalClinic",
  "@id": CLINIC_ID,

  name: "Dermatologia i Medycyna Estetyczna dr Nina Wiśniewska",

  description: "Klinika dermatologii i medycyny estetycznej w Wyszkowie.",

  url: `${SITE_URL}/`,

  image: `${SITE_URL}/clinic.jpg`,

  telephone: "+48450001550",

  email: "info@drninawisniewska.pl",

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+48539968541",
      contactType: "customer service",
      availableLanguage: "pl",
    },
  ],

  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Fryderyka Chopina 13/U2A",
    postalCode: "07-200",
    addressLocality: "Wyszków",
    addressCountry: "PL",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "15:00",
    },
  ],
};

// TODO ::
