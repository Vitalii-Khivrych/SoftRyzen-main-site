import { AuthorProps } from '../AuthorCard/AuthorCard.props';

export interface FeedbackTextCardProps {
  className?: string;
  feedback: {
    review: string;
    author: AuthorProps;
  };
  defaultValue: string;
}
