import { FC, ReactNode } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { ThreeDotsVertical } from 'react-bootstrap-icons';

interface ListTileProps {
  children: ReactNode,
}

const ListTile: FC<ListTileProps> = ({ children }) => {
  return <Card>
    <Card.Body>
      <div className="ListTile" style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex' }}>
          {children}
        </div>
        <div style={{ flex: 1 }}></div>
        <div>
          <Button variant="default" type="button">
            <ThreeDotsVertical size={20} />
          </Button>
        </div>
      </div>
    </Card.Body>
  </Card>
}

export default ListTile;