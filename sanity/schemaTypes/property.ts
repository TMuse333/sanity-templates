import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'mainSrc',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      }
      }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'address', // You can change this to another field if needed
        maxLength: 96,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'beds',
      title: 'Beds',
      type: 'string',
    }),
    defineField({
      name: 'bath',
      title: 'Baths',
      type: 'string',
    }),
    defineField({
      name: 'squareFt',
      title: 'Square Feet',
      type: 'string',
    }),
    defineField({
      name: 'propertyDescription',
      title: 'Property Description',
      type: 'text',
    }),
    defineField({
      name: 'specs',
      title: 'Specs',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Property Type',
          type: 'string',
        }),
        defineField({
          name: 'putOnMarket',
          title: 'Put on Market',
          type: 'string',
        }),
        defineField({
          name: 'priceSqFt',
          title: 'Price per SqFt',
          type: 'string',
        }),
        defineField({
          name: 'lot',
          title: 'Lot Size',
          type: 'string',
        }),
        defineField({
          name: 'yearBuilt',
          title: 'Year Built',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'highlights',
      title: 'Property Highlights',
      type: 'object',
      fields: [
        defineField({
          name: 'airConditioning',
          title: 'Air Conditioning',
          type: 'string',
        }),
        defineField({
          name: 'heating',
          title: 'Heating',
          type: 'string',
        }),
        defineField({
          name: 'foundation',
          title: 'Foundation',
          type: 'string',
        }),
        defineField({
          name: 'flooring',
          title: 'Flooring',
          type: 'string',
        }),
        defineField({
          name: 'style',
          title: 'Style',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'listingImages',
      title: 'Listing Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
});
