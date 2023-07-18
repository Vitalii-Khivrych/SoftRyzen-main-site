import { FC } from 'react';
import cn from 'classnames';

import { ParagraphProps } from './Paragraph.props';

export const Paragraph: FC<ParagraphProps> = ({
  variant = 'dark',
  variantFontSize,
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        'font-light',
        {
          ['text-dark']: variant == 'dark',
          ['text-white_light']: variant == 'white',
          ['text-xl']: variantFontSize == 'lg_20',
          ['text-base']: variantFontSize == 'sm_16',
        },
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
