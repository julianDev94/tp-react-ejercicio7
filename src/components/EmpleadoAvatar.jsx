import { Image } from "react-bootstrap";

const EmpleadoAvatar = ({empleado}) => {
    return (
        <Image src={empleado.pic} fluid alt={empleado.pic} className="border imgEmpleado border-black" />
    );
};

export default EmpleadoAvatar;