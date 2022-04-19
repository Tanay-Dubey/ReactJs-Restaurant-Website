import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom';


function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <Card>
                <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

function RenderComments({comments}) {
    let c = [];
    if (comments != null) {
        c = comments.map((element) => {
            return (
                <li key={element.id}>
                    <p>{element.comment}</p>
                    <p>-- {element.author}, {new Date(element.date).toLocaleDateString("en-us", { year: "numeric", month: "short", day: "2-digit" })}</p>
                </li>

            )
        });
    }

    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {c}
            </ul>
        </div>
    )
}

const Dishdetail = (props) => {
    return (
        <div className="container">
            <div className="row">   
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr></hr>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-xs-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>

            </div>
        </div>

    )
}


export default Dishdetail;