import { Image } from "react-bootstrap";

const EmpleadoAvatar = ({empleado}) => {
    return (
        <Image src={empleado.pic} fluid alt={empleado.pic}/>
    );
};

export default EmpleadoAvatar;