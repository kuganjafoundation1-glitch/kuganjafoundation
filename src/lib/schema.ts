import { PROGRAMS, SITE_URL } from "@/lib/site";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const HERO_IMAGE_URL = `${SITE_URL}/home-hero.jpg`;

type SchemaNode = Record<string, unknown>;

type PageSchema = {
  path: string;
  type: string;
  name: string;
  description: string;
  aboutOrganization?: boolean;
  includePrograms?: boolean;
  includeEvents?: boolean;
};

const organization: SchemaNode = {
  "@type": "NGO",
  "@id": ORGANIZATION_ID,
  name: "Kuganja Foundation",
  url: SITE_URL,
  description:
    "A charity organization in Namuwongo, Kampala, uplifting vulnerable families and individuals through holistic care, spiritual nourishment, mental health advocacy, creative expression, and practical skills.",
  foundingDate: "2018",
  founder: {
    "@type": "Person",
    name: "Kasheija Martin",
    jobTitle: "Founder / Director",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Namuwongo, Kampala",
    addressCountry: "UG",
  },
  areaServed: {
    "@type": "Place",
    name: "Namuwongo, Kampala, Uganda",
  },
  telephone: "+256781500800",
  email: "Kuganjafoundation1@gmail.com",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "general inquiries",
      telephone: "+256781500800",
      email: "Kuganjafoundation1@gmail.com",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      contactType: "WhatsApp",
      telephone: "+256703264035",
      availableLanguage: "English",
    },
  ],
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/kuganja-logo.png`,
    width: 672,
    height: 787,
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=100069417340288",
    "https://www.instagram.com/kuganjafoundation",
    "https://www.tiktok.com/@kuganjafoundation",
    "https://www.youtube.com/@kuganjafoundation",
  ],
};

const website: SchemaNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Kuganja Foundation",
  url: SITE_URL,
  publisher: { "@id": ORGANIZATION_ID },
  inLanguage: "en",
};

const eventDetails = [
  {
    name: "Year End Community Outreach",
    startDate: "2026-11-04",
    description:
      "As the year comes to a close, we are stepping out to share warmth, relief, and joy with the families, children, and individuals who need it most in our community.",
  },
  {
    name: "Christmas Party — Bringing Christmas Joy to Children in the Slums",
    startDate: "2026-12-12",
    description:
      "While the holiday season is a time of abundance for many, children growing up in our local slums often experience the festive season feeling overlooked and forgotten. For a child living through daily poverty, a warm meal, a new outfit, or a simple toy can feel like a distant dream!",
  },
  {
    name: "The Moving Mobile Cinema Is Officially Rolling Out!",
    startDate: "2027-01-09",
    description:
      "We are thrilled to announce the official launch of our inspirational moving mobile cinema — a theater-on-wheels dedicated to driving mindset change, mental health awareness, healing, hope and love, and deep community connection.",
  },
  {
    name: "Mental Health & Emotional Wellbeing Initiative",
    startDate: "2027-05-02",
    description:
      "We will be launching a new initiative and expanding the mission to address mental health and emotional wellbeing. We have always committed ourselves to supporting our community's core needs.",
  },
] as const;

function buildBreadcrumb(path: string, pageName: string): SchemaNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${path}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: pageName, item: `${SITE_URL}${path}` },
    ],
  };
}

export function buildSchemaGraph(page: PageSchema): SchemaNode {
  const pageUrl = `${SITE_URL}${page.path}`;
  const pageId = `${pageUrl}#webpage`;
  const eventNodes = page.includeEvents
    ? eventDetails.map((event, index) => ({
        "@type": "Event",
        "@id": `${pageUrl}#event-${index + 1}`,
        ...event,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        organizer: { "@id": ORGANIZATION_ID },
        url: `${SITE_URL}/events`,
        image: HERO_IMAGE_URL,
        // TODO: Add the confirmed event venue as a schema.org Place when provided.
      }))
    : [];

  const programsNode: SchemaNode | undefined = page.includePrograms
    ? {
        "@type": "ItemList",
        "@id": `${pageId}#programs`,
        itemListElement: PROGRAMS.map((program, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: program.title,
        })),
      }
    : undefined;

  const pageNode: SchemaNode = {
    "@type": page.type,
    "@id": pageId,
    name: page.name,
    description: page.description,
    url: pageUrl,
    isPartOf: { "@id": WEBSITE_ID },
    primaryImageOfPage: HERO_IMAGE_URL,
    inLanguage: "en",
    ...(page.path === "/" ? {} : { breadcrumb: { "@id": `${pageUrl}#breadcrumb` } }),
    ...(page.aboutOrganization ? { about: { "@id": ORGANIZATION_ID } } : {}),
    ...(programsNode ? { mainEntity: { "@id": programsNode["@id"] } } : {}),
    ...(page.includeEvents ? { hasPart: eventNodes.map((event) => ({ "@id": event["@id"] })) } : {}),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      pageNode,
      ...(page.path === "/" ? [] : [buildBreadcrumb(page.path, page.name)]),
      ...(programsNode ? [programsNode] : []),
      ...eventNodes,
    ],
  };
}

export function jsonLdScript(graph: SchemaNode) {
  return {
    id: "kuganja-jsonld",
    type: "application/ld+json",
    children: JSON.stringify(graph).replace(/</g, "\\u003c"),
  };
}
