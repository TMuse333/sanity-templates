import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({ name: 'address', title: 'Address', type: 'string' }),
    defineField({
      name: 'mainSrc',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'address',
        maxLength: 96,
      },
    }),
    defineField({ name: 'price', title: 'Price', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'beds', title: 'Beds', type: 'string' }),
    defineField({ name: 'bath', title: 'Baths', type: 'string' }),
    defineField({ name: 'squareFt', title: 'Square Feet', type: 'string' }),
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
        defineField({ name: 'type', title: 'Property Type', type: 'string' }),
        defineField({ name: 'putOnMarket', title: 'Put on Market', type: 'string' }),
        defineField({ name: 'priceSqFt', title: 'Price per SqFt', type: 'string' }),
        defineField({ name: 'lot', title: 'Lot Size', type: 'string' }),
        defineField({ name: 'yearBuilt', title: 'Year Built', type: 'string' }),
      ],
    }),

    defineField({
      name: 'highlights',
      title: 'Property Highlights',
      type: 'object',
      fields: [
        defineField({ name: 'airConditioning', title: 'Air Conditioning', type: 'string' }),
        defineField({ name: 'heating', title: 'Heating', type: 'string' }),
        defineField({ name: 'foundation', title: 'Foundation', type: 'string' }),
        defineField({ name: 'flooring', title: 'Flooring', type: 'string' }),
        defineField({ name: 'highlightStyle', title: 'Style', type: 'string' }), // renamed here
      ],
    }),

    defineField({
      name: 'listingImages',
      title: 'Listing Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),

    // Additional root-level fields
    defineField({ name: 'status', title: 'Status', type: 'string' }),
    defineField({ name: 'mls', title: 'MLS Number', type: 'string' }),
    defineField({ name: 'style', title: 'Style (root)', type: 'string' }), // kept only once
    defineField({ name: 'age', title: 'Age', type: 'string' }),
    defineField({ name: 'squareFootageMLA', title: 'Square Footage (MLA)', type: 'string' }),
    defineField({ name: 'totalFinishedSqFtTLA', title: 'Total Finished SqFt (TLA)', type: 'string' }),
    defineField({ name: 'pid', title: 'PID', type: 'string' }),
    defineField({ name: 'fullBaths', title: 'Full Baths', type: 'string' }),
    defineField({ name: 'halfBaths', title: 'Half Baths', type: 'string' }),
    defineField({ name: 'water', title: 'Water Source', type: 'string' }),
    defineField({ name: 'sewer', title: 'Sewer Type', type: 'string' }),
    defineField({ name: 'utilities', title: 'Utilities', type: 'string' }),
  ],
});
