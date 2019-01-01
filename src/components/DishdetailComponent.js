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
                    <Card key={comment.id}>
                        <CardText>{comment.comment}</CardText>
                        <CardText>-- {comment.author}, {this.formatDate(comment.date)}</CardText>
                    </Card>
                );
            });
            return comments;
        } else {
            return (<div></div>);
        }
    }

    render() {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
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
    }
}

export default Dishdetail;
