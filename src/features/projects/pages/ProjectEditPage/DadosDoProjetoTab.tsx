import { FC } from "react"
import { Button, Card, Col, Form, Pagination, Row } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"
import FormControlTextArea from "../../../../components/FormControlTextArea"
import HiddenSection from "../../../../components/HiddenSection"
import ListTile from "../../../../components/ListTile"
import ListTileColumn from "../../../../components/ListTileContent"
import { ProjetoTabProps } from "./interfaces"
import { Status, TipoAbertura } from "./ProjectEditPage"

const DadosDoProjetoTab: FC<ProjetoTabProps> = ({ register }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return <div className="DadosDoProjetoTab">
    <HiddenSection show={pathname.includes('/edit/dados-do-projeto')}>
      <Card.Title>Dados do Projeto</Card.Title>
    </HiddenSection>

    <HiddenSection show={pathname === '/edit/dados-do-projeto'}>
      <>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Código do Projeto</Form.Label>
              <Form.Control {...register("codigoProjeto")} type="text" placeholder="" />
              {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tipo de Abertura</Form.Label>
              <Form.Select {...register("tipoAbertura")} aria-label="Default select example">
                {/* <option>Selecione um tipo de abertura</option> */}
                <option value={TipoAbertura.Otimizacao}>Otimização</option>
                <option value={Status.Opcao2}>Opção 2</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Status</Form.Label>
              <Form.Select {...register("status")} aria-label="Default select example">
                {/* <option>Selecione um tipo de abertura</option> */}
                <option value={Status.EmAndamento}>Em andamento</option>
                <option value={Status.Opcao2}>Opção 2</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Data de Abertura</Form.Label>
              <Form.Control {...register("dataAbertura")} type="date" disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuário verificação/Etapa</Form.Label>
              <Form.Control {...register("usuarioVerificacao")} type="text" placeholder="" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Divisão</Form.Label>
              <Form.Control {...register("divisao")} type="text" placeholder="" disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Definição do Projeto</Form.Label>
              <FormControlTextArea
                {...register("definicaoProjeto")}
                placeholder=""
                height={81} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Objetivo do Projeto</Form.Label>
              <FormControlTextArea
                {...register("objetivoProjeto")}
                placeholder=""
                height={81} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Data de Verificação</Form.Label>
              <Form.Control {...register("dataVerificacao")} type="date" />
            </Form.Group>
          </Col>
        </Row>

        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        <Button
          variant='secondary'
          type='button'
          onClick={() => navigate('dados-do-projeto/tex')}>TEX's do Projeto</Button>
      </>
    </HiddenSection>

    <HiddenSection show={pathname === '/edit/dados-do-projeto/tex'}>
      <>
        <div style={{
          display: 'flex'
        }}>
          <h3>TEX's do Projeto</h3>
          <div style={{ width: 20 }}></div>
          <div>
            <Button variant="primary" size="sm" type="button">
              Adicionar
            </Button>
          </div>
        </div>

        <ListTile>
          <ListTileColumn label="Nr. TEX">
            <span>715</span>
          </ListTileColumn>
          <ListTileColumn label="Data Abertuda">
            <span>08/10/2021</span>
          </ListTileColumn>
          <ListTileColumn label="Status">
            <span>Em andamento</span>
          </ListTileColumn>
          <ListTileColumn label="Descr. Status">
            <span>Ativo</span>
          </ListTileColumn>
          <ListTileColumn label="Definição">
            <span>Homologação do aditivo ABVT19 SC na família TSSe/TSSa</span>
          </ListTileColumn>
        </ListTile>

        <ListTile>
          <ListTileColumn label="Nr. TEX">
            <span>715</span>
          </ListTileColumn>
          <ListTileColumn label="Data Abertuda">
            <span>08/10/2021</span>
          </ListTileColumn>
          <ListTileColumn label="Status">
            <span>Em andamento</span>
          </ListTileColumn>
          <ListTileColumn label="Descr. Status">
            <span>Ativo</span>
          </ListTileColumn>
          <ListTileColumn label="Definição">
            <span>Homologação do aditivo ABVT19 SC na família TSSe/TSSa</span>
          </ListTileColumn>
        </ListTile>

        <ListTile>
          <ListTileColumn label="Nr. TEX">
            <span>715</span>
          </ListTileColumn>
          <ListTileColumn label="Data Abertuda">
            <span>08/10/2021</span>
          </ListTileColumn>
          <ListTileColumn label="Status">
            <span>Em andamento</span>
          </ListTileColumn>
          <ListTileColumn label="Descr. Status">
            <span>Ativo</span>
          </ListTileColumn>
          <ListTileColumn label="Definição">
            <span>Homologação do aditivo ABVT19 SC na família TSSe/TSSa</span>
          </ListTileColumn>
        </ListTile>

        <ListTile>
          <ListTileColumn label="Nr. TEX">
            <span>715</span>
          </ListTileColumn>
          <ListTileColumn label="Data Abertuda">
            <span>08/10/2021</span>
          </ListTileColumn>
          <ListTileColumn label="Status">
            <span>Em andamento</span>
          </ListTileColumn>
          <ListTileColumn label="Descr. Status">
            <span>Ativo</span>
          </ListTileColumn>
          <ListTileColumn label="Definição">
            <span>Homologação do aditivo ABVT19 SC na família TSSe/TSSa</span>
          </ListTileColumn>
        </ListTile>

        <div style={{
          display: 'flex',
          marginTop: 20,
        }}>
          <div>
            <Button
              variant='secondary'
              type='button'
              onClick={() => navigate('dados-do-projeto')}>Voltar</Button>
          </div>
          <div style={{ flex: 1 }}></div>
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
      </>
    </HiddenSection>
  </div>
}

export default DadosDoProjetoTab;