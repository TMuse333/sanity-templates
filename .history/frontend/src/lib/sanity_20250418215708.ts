import { createClient, type SanityClient } from 'next-sanity';

const query = groq`
  *[_type == "property" && slug.current == $slug][0] {
    mainSrc {
      asset -> {
        url
      }
    },
    address,
    price,
    location,
    beds,
    bath,
    squareFt,
    propertyDescription,
    specs,
    highlights,
    listingImages[] {
      asset -> {
        url
      },
      alt
    }
  }
`;

export const client: SanityClient = createClient({
  projectId: '8l1b1mv4', // e.g., 'e0quts4x'
  dataset: 'production',
  apiVersion: '2025-04-17', // today's date or your schema version date
  useCdn: true, // Use CDN for production
})
