import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { isExternalLink } from '@/utils/is-external-link';

export const LinkRenderer = ({
  href,
  children,
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: React.ReactNode;
}) => {
  const isExternal = isExternalLink(href);
  const Element = isExternal ? 'a' : Link;

  return (
    <Element
      href={href || ''}
      className='link'
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener',
      })}
    >
      {children}
    </Element>
  );
};

export const ListRenderer = ({
  ordered,
  children,
}: React.LiHTMLAttributes<HTMLLIElement> & {
  children?: React.ReactNode;
  ordered?: boolean;
}) => (
  <li>
    {!ordered && <BulletList />}
    <span>{children}</span>
  </li>
);

type MarkdownTypes = {
  Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
  components?: Record<string, React.ReactNode>;
  children: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Markdown({ Tag, components, children, ...props }: MarkdownTypes) {
  const isSingleParagraph = children.trim().split('\n').length === 1;

  const markdown = (
    <MDXRemote
      source={children}
      components={
        isSingleParagraph && !Tag
          ? { p: ({ children }) => <p {...props}>{children}</p> }
          : {
              ...(Tag && { p: ({ children }) => <Tag {...props}>{children}</Tag> }),
              a: LinkRenderer,
              li: ListRenderer,
              ol: ({ children }) => <ol className='orderedList'>{children}</ol>,
              ul: ({ children }) => <ul className='unorderedList'>{children}</ul>,
              ...components,
            }
      }
      {...props}
    />
  );

  return Tag || isSingleParagraph ? markdown : <div {...props}>{markdown}</div>;
}

Markdown.h1 = (props: MarkdownTypes) => <Markdown Tag='h1' {...props} />;
Markdown.h2 = (props: MarkdownTypes) => <Markdown Tag='h2' {...props} />;
Markdown.h3 = (props: MarkdownTypes) => <Markdown Tag='h3' {...props} />;
Markdown.h4 = (props: MarkdownTypes) => <Markdown Tag='h4' {...props} />;
Markdown.h5 = (props: MarkdownTypes) => <Markdown Tag='h5' {...props} />;
Markdown.h6 = (props: MarkdownTypes) => <Markdown Tag='h6' {...props} />;
Markdown.span = (props: MarkdownTypes) => <Markdown Tag='span' {...props} />;
Markdown.p = (props: MarkdownTypes) => <Markdown Tag='p' {...props} />;

const BulletList = () => (
  <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12.882 16.8c-1.727 0-3.895-.489-5.324-1.576H6.41c-.565-.6-.848-1.703-.848-3.263 0-1.183.346-2.475.832-3.027.048-.016.629.032.88.032.55 0 .754-.032 1.65-.741.973-.773 1.601-1.025 2.544-1.025 1.084 0 1.963.142 2.623.41.69.284 1.24.441 1.523.52.189.047.377.142.503.236.455.032.91.064 1.366.11.723.08 1.634.19 2.278.269 1.288.157 1.838.52 1.838 1.277 0 .74-.519 1.087-1.54 1.087-.36 0-1.1-.047-1.759-.047-.502 0-.99.032-1.445.063.189.268.252.536.252.914 0 .505-.22.804-.676 1.01-.141.062-.22.125-.22.236 0 .173.157.41.157.71 0 .535-.267.913-.77 1.087-.14.047-.156.079-.156.315 0 .946-.896 1.403-2.56 1.403Zm0-.536h.629a6.533 6.533 0 0 1-1.068-.457c-.629-.331-1.163-.757-1.398-1.104a.951.951 0 0 1-.047-.315c0-.205.094-.394.204-.52-.393-.205-.739-.41-.911-.552a.878.878 0 0 1-.173-.473c-.283.095-.597.127-.958.127-.251 0-.519-.032-.707-.08v-.551c.173.047.503.063.707.063.44 0 .785-.047 1.068-.19a.898.898 0 0 1 .707-.456 1.47 1.47 0 0 1-.079-.457c0-.536.346-.994.99-.994.235 0 .47.08.722.174.079-.11.173-.237.252-.378-.346-.095-.613-.221-.723-.332l.424-.378c.189.205 1.87.52 2.513.52.424 0 .833-.268.833-.85v-.159h-.016c0-.047-.204-.173-.377-.22-.283-.08-.88-.252-1.602-.552-.581-.236-1.398-.363-2.403-.363-.817 0-1.32.205-2.2.915-.926.74-1.287.851-1.994.851-.157 0-.408-.016-.597-.032-.314.552-.55 1.545-.55 2.46 0 1.26.189 2.16.55 2.695h1.068c1.147.977 3.126 1.608 5.136 1.608Zm-7.979-.52c-1.02 0-1.303-2.223-1.303-3.673 0-1.434.298-3.689 1.303-3.689h1.178c.189 0 .314.142.314.379v.031c-.078-.094-.125-.11-.235-.11-.88 0-1.115 1.97-1.115 3.389 0 1.45.282 3.405 1.115 3.405.11 0 .173-.047.235-.158v.11c0 .174-.078.316-.314.316H4.903Zm9.786-4.635c.11-.378.565-.567 1.02-.567.283 0 .44.016.582.047.628-.031 1.398-.094 2.01-.094.676 0 1.414.047 1.76.047.753 0 .973-.158.973-.52 0-.394-.33-.552-1.35-.71a51.434 51.434 0 0 0-2.278-.268c-.283-.031-.628-.047-.99-.078v.078c0 .915-.628 1.435-1.35 1.435-.409 0-1.084-.095-1.697-.237a4.09 4.09 0 0 1-.267.442h.016c.267.094.754.3 1.57.425Zm.55 1.813c.25 0 .486-.094.895-.347.345-.22.408-.268.408-.488 0-.379-.047-.741-.346-.978-.11-.015-.204-.015-.282-.015-.597 0-.77.236-.77.646-1.02-.11-1.586-.315-2.167-.536-.393-.126-.817-.426-1.163-.378-.172.015-.408.11-.408.41 0 .126.078.33.094.378.299.236.895.615 1.916.977.613.22 1.414.331 1.822.331Zm-.252 1.75c.487 0 .88-.174.88-.615 0-.252-.063-.489-.126-.646a1.011 1.011 0 0 1-.424.079c-.361 0-1.304-.142-1.98-.363a8.919 8.919 0 0 1-1.9-.883.987.987 0 0 0-.345-.079c-.283 0-.456.253-.456.52 0 .127.047.269.11.363.299.221 1.335.757 2.026 1.025.927.362 1.618.599 2.215.599Zm-.597 1.214c.503 0 .581-.394.581-.63 0-.032 0-.064-.015-.095h-.11c-.864 0-1.65-.394-2.23-.631-.252-.11-.582-.252-.896-.41a.715.715 0 0 0-.189.394c.173.237.582.568 1.006.804.565.316.895.568 1.853.568Z'
      fill='currentColor'
    />
  </svg>
);
