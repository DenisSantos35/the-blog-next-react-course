import clsx from 'clsx';
import ReactMarkDown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div
      className={clsx(
        'prose prose-slate',
        'w-full max-w-none',
        'overflow-hidden',
        'prose-a:transition',
        'prose-a:no-underline',
        'prose-a:text-blue-500',
        'prose-a:hover:text-blue-700',
        'prose-a:hover:hunderline',
        'prose-img:mx-auto',
        'lg:prose-lg',
      )}
    >
      <ReactMarkDown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkDown>
    </div>
  );
}
