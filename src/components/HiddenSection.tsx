import { FC } from "react";
import { appendClassName } from "../utils";

interface HiddenSectionProps {
  show?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: JSX.Element | JSX.Element[];
}

const HiddenSection: FC<HiddenSectionProps> = ({
  show, children, style, className
}) => {
  return <div className={appendClassName('HiddenSection', className)} style={{
    ...style,
    ...(show ? undefined : {
      height: 0,
      overflow: 'hidden',
    }),
  }}>
    {children}
  </div>
}

export default HiddenSection;