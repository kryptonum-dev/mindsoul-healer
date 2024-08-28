import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { markdownSchema } from 'sanity-plugin-markdown';
import { media } from 'sanity-plugin-media';
import { structureTool } from 'sanity/structure';
import { CustomMarkdown } from './components/CustomMarkdown';
import { schemaTypes } from './schema';
import { singletonActions, singletonTypes } from './structure';
import { structure } from './structure';

export default defineConfig({
  name: 'default',
  title: 'Mind&Soul Healer',
  projectId: 'dmafyhbk',
  dataset: 'production',

  plugins: [structureTool({ structure }), media(), visionTool(), markdownSchema({ input: CustomMarkdown })],

  schema: {
    types: schemaTypes,
    templates: templates => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
