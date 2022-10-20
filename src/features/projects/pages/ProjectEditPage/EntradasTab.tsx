import { FC } from "react"
import { Card } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import HiddenSection from "../../../../components/HiddenSection"
import { ProjetoTabProps } from "./interfaces"

const EntradasTab: FC<ProjetoTabProps> = ({ register }) => {
  const { pathname } = useLocation();

  return <HiddenSection show={pathname === '/edit/entradas'}>
    <div className="EntradasTab">
      <Card.Title>Entradas</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
    </div>
  </HiddenSection>
}

export default EntradasTab;