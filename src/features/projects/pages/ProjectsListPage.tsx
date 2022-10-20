import { Badge, Button, Pagination } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import ListTile from "../../../components/ListTile";
import ListTileColumn from "../../../components/ListTileContent";

const ProjectsListPage = () => {
  const navigate = useNavigate()

  return <div className="ProjectsList">
    <Container>
      <div style={{
        display: 'flex'
      }}>
        <h3>Projetos</h3>
        <div style={{ width: 20 }}></div>
        <div>
          <Button variant="primary" type="button" onClick={() => navigate('edit/dados-do-projeto')}>
            Adicionar
          </Button>
        </div>
        <div style={{ flex: 1 }}></div>
        <div>
          <Button variant="primary" type="button">
            Filtrar
          </Button>
        </div>
      </div>

      <div style={{ height: 20 }}></div>

      <h4>Listagem</h4>

      <div style={{ height: 20 }}></div>

      <ListTile>
        <ListTileColumn label="Projeto">
          <span>Tex ABS</span>
        </ListTileColumn>
        <ListTileColumn label="Definição">
          <span>Desenvolver novo produto de polietileno biorientado</span>
        </ListTileColumn>
        <ListTileColumn label="Dados de Entrada">
          <span>Desenvolvimento de novo mercado, substituição de estrutura laminada por monoestrutura.</span>
        </ListTileColumn>
        <ListTileColumn label="Data Abertura" width="17%">
          <span>15/09/2022</span>
        </ListTileColumn>
        <ListTileColumn label="Tipo de Abertura" width="17%">
          <span>Novo Produto</span>
        </ListTileColumn>
        <ListTileColumn label="Status" width="17%">
          <h5>
            <Badge bg="warning" text="dark">Em Andamento</Badge>
          </h5>
        </ListTileColumn>
      </ListTile>

      <ListTile>
        <ListTileColumn label="Projeto">
          <span>Tex ABS</span>
        </ListTileColumn>
        <ListTileColumn label="Definição">
          <span>Desenvolver novo produto de polietileno biorientado</span>
        </ListTileColumn>
        <ListTileColumn label="Dados de Entrada">
          <span>Desenvolvimento de novo mercado, substituição de estrutura laminada por monoestrutura.</span>
        </ListTileColumn>
        <ListTileColumn label="Data Abertura" width="17%">
          <span>15/09/2022</span>
        </ListTileColumn>
        <ListTileColumn label="Tipo de Abertura" width="17%">
          <span>Novo Produto</span>
        </ListTileColumn>
        <ListTileColumn label="Status" width="17%">
          <h5>
            <Badge bg="warning" text="dark">Em Andamento</Badge>
          </h5>
        </ListTileColumn>
      </ListTile>

      <ListTile>
        <ListTileColumn label="Projeto">
          <span>Tex ABS</span>
        </ListTileColumn>
        <ListTileColumn label="Definição">
          <span>Desenvolver novo produto de polietileno biorientado</span>
        </ListTileColumn>
        <ListTileColumn label="Dados de Entrada">
          <span>Desenvolvimento de novo mercado, substituição de estrutura laminada por monoestrutura.</span>
        </ListTileColumn>
        <ListTileColumn label="Data Abertura" width="17%">
          <span>15/09/2022</span>
        </ListTileColumn>
        <ListTileColumn label="Tipo de Abertura" width="17%">
          <span>Novo Produto</span>
        </ListTileColumn>
        <ListTileColumn label="Status" width="17%">
          <h5>
            <Badge bg="warning" text="dark">Em Andamento</Badge>
          </h5>
        </ListTileColumn>
      </ListTile>

      <ListTile>
        <ListTileColumn label="Projeto">
          <span>Tex ABS</span>
        </ListTileColumn>
        <ListTileColumn label="Definição">
          <span>Desenvolver novo produto de polietileno biorientado</span>
        </ListTileColumn>
        <ListTileColumn label="Dados de Entrada">
          <span>Desenvolvimento de novo mercado, substituição de estrutura laminada por monoestrutura.</span>
        </ListTileColumn>
        <ListTileColumn label="Data Abertura" width="17%">
          <span>15/09/2022</span>
        </ListTileColumn>
        <ListTileColumn label="Tipo de Abertura" width="17%">
          <span>Novo Produto</span>
        </ListTileColumn>
        <ListTileColumn label="Status" width="17%">
          <h5>
            <Badge bg="warning" text="dark">Em Andamento</Badge>
          </h5>
        </ListTileColumn>
      </ListTile>

      <div style={{
        display: 'flex',
        justifyContent: 'end',
        marginTop: 20,
      }}>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </Container>
  </div>
}

export default ProjectsListPage;