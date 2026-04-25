import type { Column } from "../types";

interface Props {
  column: Column;
}

export default function ColumnContainer(props: Props) {
  const {column} = props;
  return <div>{column.title}</div>
}