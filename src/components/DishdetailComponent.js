import React from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

function RenderComments({ comments }) {
    if (comments != null) {
        const commentList = comments.map((comment) => {
            return (
                <ul key={comment.id} className="ListGroup list-unstyled">
                    <Card>
                        <CardText>{comment.comment}</CardText>
                        <CardText>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</CardText>
                    </Card>
                </ul>
            );
        });
        return commentList;
    } else {
        return (<div></div>);
    }
}

function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )

}

function DishDetail(props) {
    if (props.dish != null) {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <h4>Comments</h4>
                            <CardText>
                                <RenderComments comments={props.dish.comments} />
                            </CardText>
                        </Card>
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div></div>);
    }
}

export default DishDetail;
