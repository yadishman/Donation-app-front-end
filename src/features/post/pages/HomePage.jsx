import Header from "../../../components/Header";
import PostList from "../components/PostList";
import { usePosts } from "../hooks/usePosts";

export default function HomePage (){
    const {posts}= usePosts()
    return(
        <>
        <Header/>
        <PostList posts={posts}/>
        </>
    )
}