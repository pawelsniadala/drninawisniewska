import { Helmet } from "react-helmet-async";

const SITE_NAME = "Dermatologia i Medycyna Estetyczna dr Nina Wiśniewska";

const SITE_URL = "https://drninawisniewska.pl";

function Seo({
  title,
  description,
  path,
  image,
  imageAlt,
  noIndex = false,
  appendBrand = true,
}) {
  const fullTitle = appendBrand ? `${title} | ${SITE_NAME}` : title;

  const canonicalUrl = new URL(path, `${SITE_URL}/`).toString();

  const imageUrl = image ? new URL(image, `${SITE_URL}/`).toString() : null;

  return (
    <Helmet>
      <html lang="pl" />

      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={canonicalUrl} />

      {noIndex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:locale" content="pl_PL" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />

      {imageUrl && <meta property="og:image" content={imageUrl} />}

      {imageUrl && imageAlt && (
        <meta property="og:image:alt" content={imageAlt} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {imageUrl && imageAlt && (
        <meta name="twitter:image:alt" content={imageAlt} />
      )}
    </Helmet>
  );
}

export default Seo;
