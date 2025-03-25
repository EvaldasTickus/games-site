import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const CardContainer = ({children}: Props) => {
  return (
    <div className="w-[300px] rounded-xl overflow-hidden">
      {children}
    </div>
  )
}

export default CardContainer