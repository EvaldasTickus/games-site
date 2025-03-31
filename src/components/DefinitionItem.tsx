import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({term, children}: Props) => {
  return (
    <div className="mt-5">
      <dt className="font-semibold text-gray-400 text-xl mb-2">{term}</dt>
      <dd className="text-lg">{children}</dd>
    </div>
  )
}

export default DefinitionItem