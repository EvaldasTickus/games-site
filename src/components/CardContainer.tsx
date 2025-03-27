import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const CardContainer = ({children}: Props) => {
  return (
    <div className="rounded-xl overflow-hidden">
      {children}
    </div>
  )
}

export default CardContainer