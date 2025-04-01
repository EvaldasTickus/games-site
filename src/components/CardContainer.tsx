import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden hover:scale-102 transition ease-in-out">
      {children}
    </div>
  );
};

export default CardContainer;
