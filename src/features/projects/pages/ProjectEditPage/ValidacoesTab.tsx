import { FC } from "react"
import { Card } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import HiddenSection from "../../../../components/HiddenSection"
import { ProjetoTabProps } from "./interfaces"

const ValidacoesTab: FC<ProjetoTabProps> = ({ register }) => {
  const { pathname } = useLocation();

  return <HiddenSection show={pathname === '/edit/validacoes'}>
    <Card.Title>Validações</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </HiddenSection>
}

export default ValidacoesTab;