import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import style from './Home.module.css'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({ posts: response.data })
            })
            .catch(error => {
                this.setState({ errorMsg: 'Error retreving data' })
            })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
                <div>
                    {
                        posts.length ?
                            posts.map(
                                post => (
                                    <div key={post.id} className={style.box}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>{post.title}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">User ID: {post.userId}Post ID: {post.id}</Card.Subtitle>
                                                <Card.Text>
                                                    {post.body}
                                                </Card.Text>
                                                <Card.Link href="#">Card Link</Card.Link>
                                                <Card.Link href="#">Another Link</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            ) :
                            null
                    }

                </div>
        )
    }
}

export default Home
