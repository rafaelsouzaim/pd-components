import { FC } from "react"
import { Card } from "react-bootstrap"
import { UseFormRegister } from "react-hook-form"
import { useLocation } from "react-router-dom"
import HiddenSection from "../../../../components/HiddenSection"
import { ProjetoTabProps } from "./interfaces"

const AnaliseCriticaTab: FC<ProjetoTabProps> = ({ register }) => {
  const { pathname } = useLocation();

  return <HiddenSection show={pathname === '/edit/analise-critica'}>
    <div className="AnaliseCriticaTab">
      <Card.Title>Análise Crítica</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
    </div>
  </HiddenSection>
}

export default AnaliseCriticaTab;