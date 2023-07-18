import { FC } from 'react';

import { AuthorCard } from '../AuthorCard';
import { Paragraph } from '@/components/typography/Paragraph';

import { FeedbackTextCardProps } from './FeedbackTextCard.props';

export const FeedbackTextCard: FC<FeedbackTextCardProps> = ({
  feedback,
  defaultValue,
  ...props
}) => {
  const { review, author } = feedback;

  return (
    <li {...props}>
      <Paragraph className="line-clamp-[14] text-sm xl:line-clamp-[12] xl:text-base">
        {review}
      </Paragraph>
      <AuthorCard author={author} defaultValue={defaultValue} />
    </li>
  );
};
