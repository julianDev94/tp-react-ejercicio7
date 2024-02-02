import { ListGroup, Card } from "react-bootstrap";

const EmpleadoRow = ({ empleado }) => {
  return (
    <ListGroup.Item className="my-3 d-flex justify-content-center border-0">
      <Card className="my-3 w-50 text-center">
        <Card.Title className="mt-3">{empleado.fullName}</Card.Title>
        <Card.Body className="d-flex justify-content-center">
          <Card.Text className="me-3">{empleado.title}</Card.Text>
          <Card.Text className="text-bg-primary">
            {empleado.department}
          </Card.Text>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
};

export default EmpleadoRow;
