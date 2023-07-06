import { type SchemaTypeDefinition } from 'sanity';
import { products } from './product';
import { category } from './categorys';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, category],
};
