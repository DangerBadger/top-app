import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface ILayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export default ILayoutProps;