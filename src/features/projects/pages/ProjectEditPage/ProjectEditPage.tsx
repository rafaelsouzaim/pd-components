import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card, Nav } from 'react-bootstrap';
import { useForm, SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import DadosDoProjetoTab from "./DadosDoProjetoTab";
import EntradasTab from "./EntradasTab";
import AnaliseCriticaTab from "./AnaliseCriticaTab";
import ValidacoesTab from "./ValidacoesTab";
import { TabItem } from "./interfaces";

export enum TipoAbertura {
  Otimizacao,
  Opcao2,
}

export enum Status {
  EmAndamento,
  Opcao2,
}

export interface ProjectDataForm {
  codigoProjeto: string,
  tipoAbertura: TipoAbertura,
  status: Status,
  usuarioVerificacao: string,
  dataAbertura: string,
  divisao: string,
  objetivoProjeto: string,
  definicaoProjeto: string,
  dataVerificacao: string,
}

const ProjectEditPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<ProjectDataForm>({
    defaultValues: {
      codigoProjeto: "TEX ABS",
      tipoAbertura: TipoAbertura.Otimizacao,
      status: Status.EmAndamento,
      dataAbertura: "2017-06-01",
      usuarioVerificacao: "Erika Guedes Santos",
      divisao: "MG2",
      definicaoProjeto: "Homologação dos novos anti-bloqueio em substituição aos materiais já homologados. Homologação dos novos anti-bloqueio em substituição aos materiais já homologados. Homologação dos novos anti-bloqueio em substituição aos materiais já homologados.",
      objetivoProjeto: "Aprovar aditivos contra tipos de anti-bloqueio em substituição aos materiais já homologados. Aprovar aditivos contra tipos de anti-bloqueio em substituição aos materiais já homologados. Aprovar aditivos contra tipos de anti-bloqueio em substituição aos materiais já homologados.",
      dataVerificacao: "2022-09-08",
    }
  });
  
  const onSubmit: SubmitHandler<ProjectDataForm> = data => console.log(data);

  const tabs: TabItem[] = [
    {
      label: 'Dados do Projeto',
      element: <DadosDoProjetoTab 
        path='dados-do-projeto' 
        register={register} />,
    },
    {
      label: 'Entradas',
      element: <EntradasTab 
        path='entradas' 
        register={register} />,
    },
    {
      label: 'Análise Crítica',
      element: <AnaliseCriticaTab 
        path='analise-critica' 
        register={register} />,
    },
    {
      label: 'Validações',
      element: <ValidacoesTab 
        path='validacoes' 
        register={register} />,
    }
  ];

  return <div className="ProjectEdit">
    <Container>
      <Card>
        <Card.Header>
          <Nav variant="tabs">
            {tabs.map(tab => <Nav.Item>
              <Nav.Link
                active={pathname.includes(`edit/${tab.element.props.path}`)}
                onClick={() => navigate(tab.element.props.path)}>{tab.label}</Nav.Link>
            </Nav.Item>)}
          </Nav>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {tabs.map(tab => tab.element)}
          </Form>
        </Card.Body>
        <Card.Footer style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}></div>
          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  </div>
}

export default ProjectEditPage;