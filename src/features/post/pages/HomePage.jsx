import Header from "../../../components/Header";
import PostList from "../components/PostList";
import { usePosts } from "../hooks/usePosts";
import { Link } from 'react-router'

export default function HomePage (){
    const {posts}= usePosts()

    const totalRaised = posts.reduce((s,p)=> s + (p.amount || 0),0)
    const causes = posts.length
    const topCauses = posts.slice(0,3)

    return(
        <>
        <Header/>

        <div className="hero">
            <div className="hero-text">
                <h1>Give a little. Change a life.</h1>
                <p>Discover meaningful causes, donate securely and follow impact in real time. Every contribution helps real people in need.</p>
                <div className="hero-cta">
                    <Link to={'/create-donation'}><button className="btn-primary">Start a Cause</button></Link>
                    <Link to={'/login'}><button className="btn-ghost">Sign in</button></Link>
                </div>
            </div>
            <div className="hero-stats">
                <div className="sidebar-card" style={{textAlign:'center'}}>
                    <div className="stat-row">
                        <div>
                            <div className="big">${totalRaised.toLocaleString()}</div>
                            <div className="muted">Total raised</div>
                        </div>
                        <div>
                            <div className="big">{causes}</div>
                            <div className="muted">Causes</div>
                        </div>
                    </div>
                    <p style={{marginTop:8,color:'#6b6b6b'}}>Recent successes and heartwarming stories updated daily.</p>
                </div>
            </div>
        </div>

        <main className="main-layout">
            <section>
                <PostList posts={posts}/>
            </section>
            <aside>
                <div className="sidebar-card">
                    <h3 style={{marginTop:0}}>Top Causes</h3>
                    <div style={{display:'flex',flexDirection:'column',gap:10,marginTop:10}}>
                        {topCauses.map(post=> (
                            <Link to={`/posts/${post._id}`} state={{post}} key={post._id} style={{textDecoration:'none',color:'#222'}}>
                                <div style={{display:'flex',alignItems:'center',gap:10}}>
                                    <img src={post.image} style={{width:56,height:44,objectFit:'cover',borderRadius:8}}/>
                                    <div>
                                        <div style={{fontWeight:700}}>{post.title}</div>
                                        <div style={{color:'#6b6b6b',fontSize:12}}>{`$${post.amount} raised`}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="sidebar-card" style={{marginTop:16}}>
                    <h4 style={{marginTop:0}}>How it works</h4>
                    <ol style={{paddingLeft:18,color:'#6b6b6b'}}>
                        <li>Create a cause or pick one</li>
                        <li>Donate securely</li>
                        <li>Follow impact updates</li>
                    </ol>
                </div>
            </aside>
        </main>
        </>
    )
}