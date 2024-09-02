import { createSingleton } from '../utils/create-singleton';
import type { StructureResolver } from 'sanity/structure';

export const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
export const singletonTypes = new Set(['global']);

export const structure: StructureResolver = S =>
  S.list()
    .id('root')
    .title('Zawartość')
    .items([
      createSingleton(S, 'global'),
      S.divider(),
      createSingleton(S, 'Index_Page'),
      S.divider(),
      S.documentTypeListItem('Module_Collection'),
      S.documentTypeListItem('Faq_Collection'),
    ]);
