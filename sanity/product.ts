import { category } from './categorys';
import { productType } from './productType';

export const products = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
    },
    {
      name: 'description',
      type: 'array',
      title: 'Product Description',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'productType',
      type: 'reference',
      title: 'Product Type',
      to: [
        {
          type: 'productType',
        },
      ],
    },

    {
      name: 'productCategory',
      type: 'reference',
      title: 'Product Category',
      to: [
        {
          type: 'category',
        },
      ],
    },
    {
      name: 'image',
      type: 'array',
      title: 'Product Image',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
    },
    {
      name: 'quantity',
      type: 'string',
      title: 'Quantity',
    },
    {
      name: 'size',
      type: 'array',
      title: 'Size',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
};
