import { ListGroup, Card } from "react-bootstrap";

const EmpleadoRow = ({empleado}) => {
  return (
    <ListGroup.Item className="my-3 d-flex justify-content-center border-0">
      <Card className="my-3 w-50">
        <Card.Body>
          <Card.Title className="text-center">{empleado.fullName}</Card.Title>
          <Card.Text className="text-center">
            {empleado.title} {empleado.department}
          </Card.Text>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
};

export default EmpleadoRow;
