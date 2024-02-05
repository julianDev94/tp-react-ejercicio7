import ListGroup from "react-bootstrap/ListGroup";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = ({ empleados }) => {
  return (
    <ListGroup>
      {empleados.map((empleado, posicionEmpleado) => (
        <EmpleadoRow key={posicionEmpleado} empleado={empleado}/>
      ))}
    </ListGroup>
  );
};

export default EmpleadoList;
