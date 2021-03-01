import React, { Component } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import style from './Post.module.css'

class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <Form onSubmit={this.submitHandler} className={style.forms}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="userId"
                        name='userId'
                        value={userId}
                        onChange={this.changeHandler} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Title"
                        name='title'
                        value={title}
                        onChange={this.changeHandler} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Body</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Body"
                        name='body'
                        value={body}
                        onChange={this.changeHandler} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default Post
