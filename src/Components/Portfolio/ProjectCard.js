import {Row} from "react-bootstrap";
import "./project.css";

export const ProjectCard = ({title, description, imgUrl }) => {
return (
<Row sm={6} md={4}>
<div className="proj-imgbx">
    <img src={imgUrl} className="proj-img" alt='projectlist' />
    <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
    </div>
</div>
</Row>

)
}