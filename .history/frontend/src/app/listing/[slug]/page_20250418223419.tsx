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

  // Fetch property data based on the slug
  const propertyData = await client.fetch(query, { slug });

  if (!propertyData) {
    return <div>No property found.</div>;
  }

  // Format the listing images correctly
  const formattedListingImages = (propertyData.listingImages || []).map((image: { asset?: { url?: string }, alt?: string }) => ({
    src: image.asset?.url || '',
    alt: image.alt || 'Listing image',
  }));

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

// If using server-side rendering, use getServerSideProps
export async function getServerSideProps({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Fetch property data based on the slug
  const propertyData = await client.fetch(query, { slug });

  if (!propertyData) {
    return { notFound: true };  // Returns a 404 page if no property is found
  }

  // Format the listing images correctly
  const formattedListingImages = (propertyData.listingImages || []).map((image: { asset?: { url?: string }, alt?: string }) => ({
    src: image.asset?.url || '',
    alt: image.alt || 'Listing image',
  }));

  return {
    props: {
      propertyData: {
        mainSrc: propertyData.mainSrc.asset.url,
        address: propertyData.address,
        price: propertyData.price,
        location: propertyData.location,
        beds: propertyData.beds,
        bath: propertyData.bath,
        squareFt: propertyData.squareFt,
        propertyDescription: propertyData.propertyDescription,
        specs: propertyData.specs,
        highlights: propertyData.highlights,
        listingImages: formattedListingImages,
      },
    },
  };
}
