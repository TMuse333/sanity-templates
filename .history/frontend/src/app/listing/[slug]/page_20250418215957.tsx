import { groq } from 'next-sanity';
import { client } from '@/lib/sanity'; // Assuming you have your sanityClient setup
import Property from '@/components/propertyDisplay/property';// Your Property component

// Query Sanity data using the slug
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


interface PropertyPageProps {
  params: { slug: string };
}

const PropertyPage = async ({ params }: PropertyPageProps) => {
  const { slug } = params;

  // Fetch the property data using the slug
  const propertyData = await client.fetch<Prop(query, { slug });

  console.log(query)

  const formattedListingImages = (propertyData.listingImages || []).map((image: { asset?: { url?: string }, alt?: string }) => ({
    src: image.asset?.url || '',
    alt: image.alt || 'Listing image',
  }));
  
  
  // Pass this to your component

  

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
};

export default PropertyPage;
