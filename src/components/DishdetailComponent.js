import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Media, Modal, ModalHeader,Row,
    Label, ModalBody, Nav, Button, NavItem, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const minLength = (len) => (val) => (val) && (val.length >= len);
const maxLength = (len) => (val) => !val || (val.length <= len);

    class CommentForm extends Component {
        constructor(props){
            super(props);
            this.state={
                isModal: false,
            };
            this.toggleModal = this.toggleModal.bind(this);
        }
        toggleModal(){
            this.setState({isModal: !this.state.isModal});
        }
        handleSubmitComment(values){
            // this.toggleModal();
            // alert("Rating: " + this.rating.value + "Your name: " + this.yourname.value + "Comment: " + this.comment.value);
            alert("Current state is: " + JSON.stringify(values));
            // event.preventDefault();
        }
        // validate(yourname){
        //     const errors = {
        //         yourname:''
        //     };
        //     if(this.state.yourname && yourname.length < 3){
        //         errors.yourname = 'Your name should be greater than 3 characters';
        //     } else if(this.state.yourname && yourname.length > 15){
        //         errors.yourname = 'Your name should be less than 15 characters';
        //     }
        //     return errors;
        // }
        render(){
            // const errors = this.validate(this.state.yourname);
            return(
                <div className="container">
                    <Nav navbar>
                        <NavItem>
                            <Button outline onClick={this.toggleModal}>
                                <span className="fa fa-sign-in fa-lg"></span>Submit Comment
                            </Button>
                        </NavItem>
                    </Nav>
                <Modal isOpen={this.state.isModal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        {/* <Form onSubmit={this.handleSubmitComment}>
                            <FormGroup>
                                    <Label htmlFor="rating">Rating</Label>
                                    <Input type="select" name="rating"
                                    innerRef={(input) => this.rating = input}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="yourname">Your Name</Label>
                                <Input type="text" id="yourname" name="yourname"
                                placeholder="Your Name"
                                innerRef={(input) => this.yourname = input}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="message">Comment</Label>
                                    <Input type="textarea" id="message" name="message"
                                    rows="15"
                                    innerRef={(input) => this.message = input}
                                    />
                            </FormGroup>
                            <FormGroup>
                                    <Button type="submit" value="submit" className="primary">Submit</Button>
                            </FormGroup>
                        </Form> */}
                        <LocalForm onSubmit={(values) => this.handleSubmitComment(values)}>
                            <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating"
                                className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            <Label htmlFor="yourname">Your Name</Label>
                                <Control.text model=".yourname" id="yourname"
                                name="yourname" placeholder="Your Name" className="form-control"
                                validators={{required, minLength: minLength(3), maxLength: maxLength(14)}}/>
                                <Errors className="text-danger" model=".yourname"
                                show="touched" messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}/>
                            <Label htmlFor="message">Comment</Label>
                                <Control.textarea model=".message" id="message"
                                name="message" rows="15" className="form-control"/>
                            <Button type="submit" color="primary" md={2}>
                                Submit
                            </Button>
                        </LocalForm>
                    </ModalBody>
            </Modal>
            </div>
            );
        }
    }
    function RenderDish({dish}) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    function RenderComments({comments}) {
        if (comments != null)
            return (
                <div>
                    <h4>Comments</h4>
                    <ul>{comments.map((comment) => {
                        return (
                            <div className="col-12 m-1" key={comment.id}>
                                    <Media tag="li">
                                        <div>
                                            <p>{comment.comment}</p>
                                            <p> --{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                        </div>
                                    </Media>
                            </div>
                        );
                    })}
                    </ul>
                    <CommentForm/>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    const DishDetail = (props) => {
        return (
            <div className="row">
                    <Breadcrumb>
                        {/* <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem> */}
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments}/>
                </div>
            </div>
        );
    }


export default DishDetail;