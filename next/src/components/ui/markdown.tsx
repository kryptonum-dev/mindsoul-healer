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
  <svg width={24} height={24} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 25 24'>
    <path d='M20 12H4.5m13-3 3 3-3 3' stroke='#A7B4BC' strokeLinejoin='round' strokeWidth='1.001' />
  </svg>
);
