import { formatDateTime, formatDistanceToNow } from '@/format-datetime';
import clsx from 'clsx';
import { PostHeading } from '../PostHeading';

type PostSummaryProps = {
  postHeading: 'h1' | 'h2';
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className={clsx('flex flex-col gap-4', 'sm:justify-between')}>
      <time
        className={clsx('text-slate-600 block text-sm/tight')}
        dateTime={createdAt}
        title={formatDistanceToNow(createdAt)}
      >
        {formatDateTime(createdAt)}
      </time>
      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
