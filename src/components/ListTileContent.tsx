import { FC } from "react";

interface ListTileColumnProps {
  label: string;
  children: JSX.Element;
  width?: string | number,
}

const ListTileColumn: FC<ListTileColumnProps> = ({
  label, children, width
}) => {
  return <div className="ListTileColumn" style={{
    marginLeft: 10,
    marginRight: 10,
    width,
  }}>
    <div className="fw-bold">{label}</div>
    {children}
  </div>
}

export default ListTileColumn;