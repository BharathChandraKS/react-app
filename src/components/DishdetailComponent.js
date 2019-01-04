import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }

    formatDate(commentDate) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        var date = new Date(commentDate);
        var formatedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        return formatedDate;
    }

    renderComments() {
        if (this.props.dish.comments != null) {
            const comments = this.props.dish.comments.map((comment) => {
                return (
                    <ul key={comment.id} className="ListGroup list-unstyled">
                        <Card>
                            <CardText>{comment.comment}</CardText>
                            <CardText>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</CardText>
                        </Card>
                    </ul>
                );
            });
            return comments;
        } else {
            return (<div></div>);
        }
    }

    renderDish() {
        return (
            <Card>
                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
        )

    }

    render() {
        if (this.props.dish != null) {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish()}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <h4>Comments</h4>
                            <CardText>
                                {this.renderComments()}
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
}

export default Dishdetail;
