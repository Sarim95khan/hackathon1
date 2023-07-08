import { type SchemaTypeDefinition } from 'sanity';
import { products } from './product';
import { category } from './categorys';
import { productType } from './productType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, category, productType],
};
