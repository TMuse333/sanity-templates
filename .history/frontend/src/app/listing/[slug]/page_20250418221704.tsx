import { groq } from 'next-sanity';
import { client } from '@/lib/sanity';
import Property from '@/components/propertyDisplay/property';

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

export default async function PropertyPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const propertyData = await client.fetch(query, { slug });

  const formattedListingImages = propertyData?.listingImages?.map((image: any) => ({
    src: image.asset?.url || '',
    alt: image.alt || 'Listing image',
  })) || [];

  return (
    <Property
      mainSrc={propertyData.mainSrc.asset.url}
      address={propertyData.address}
      price={propertyData.price}
      location={propertyData.location}
      beds={propertyData.beds}
      bath={propertyData.bath}
      squareFt={propertyData.squareFt}
      propertyDescription={propertyData.propertyDescription}
      specs={propertyData.specs}
      highlights={propertyData.highlights}
      listingImages={formattedListingImages}
    />
  );
}
