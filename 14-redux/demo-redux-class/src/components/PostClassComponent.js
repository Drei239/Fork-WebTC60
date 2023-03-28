import { Component } from "react";
import { connect } from 'react-redux';
import {fetchPosts} from "../actions";

class PostClassComponent extends Component {
    componentDidMount() {
        // call API de lay ve danh sach cac bai post.
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props.postsGetFromStore);
        return (
            <>
                <h1>Hien thi danh sach cac bai posts tu API tai day</h1>
                {this.props.postsGetFromStore?.map((post) => {
                    return (
                        <div key={post.id}>
                            <span>Title: {post?.title}</span><br />
                            <span>Body: {post?.body}</span><br />
                            <span>-------------------------------</span><br />
                        </div>
                    )
                })}
            </>
        )
    }
}

// mapStateToProps - lay du lieu tu store ve ba bien store day thanh props cua component
const mapStateToProps = (state) => {
    return {
        postsGetFromStore: state.posts
    }
}

// mapDispatchToProps

export default connect(mapStateToProps, { fetchPosts })(PostClassComponent);