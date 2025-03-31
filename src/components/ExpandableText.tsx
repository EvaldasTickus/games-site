import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length <= limit) return <p>{children}</p>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <div>
      {summary}
      <button
        className="font-semibold text-xs py-1 border cursor-pointer hover:opacity-70 transition px-2 ml-2 rounded-xl"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default ExpandableText;
