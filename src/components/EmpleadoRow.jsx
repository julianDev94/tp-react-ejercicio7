import { ListGroup, Card } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ empleado }) => {
  return (
    <ListGroup.Item className="my-3 d-flex justify-content-center border-0">
      <Card className="cardEmpleado shadow-lg border-black d-flex flex-row">
        <EmpleadoAvatar empleado={empleado} />
        <Card.Body>
          <Card.Title>{empleado.fullName}</Card.Title>
          <section className="d-flex flex-row text-center">
            <Card.Text>{empleado.title}</Card.Text>
            <Card.Text className="bg-primary text-light mx-3 px-1 fw-bold">
              {empleado.department}
            </Card.Text>
          </section>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
};

{
  /* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */
}

// <Card className="my-3 w-25 text-center shadow-lg border-black">
//         <Card.Title className="mt-3">{empleado.fullName}</Card.Title>
//         <Card.Body className="d-flex justify-content-center">
//           <Card.Text className="me-3">{empleado.title}</Card.Text>
//           <Card.Text className="text-bg-primary p-1">
//             {empleado.department}
//           </Card.Text>
//         </Card.Body>
//       </Card>
export default EmpleadoRow;
