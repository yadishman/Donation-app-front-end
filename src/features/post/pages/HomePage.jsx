import Header from "../../../components/Header";
import PostList from "../components/PostList";
import { usePosts } from "../hooks/usePosts";
import { Link } from 'react-router'
import Footer from "../../../components/Footer";
import { useAuth } from "../../../context/AuthContext";
import isTokenValid from "../../../utils/tokenValidation";

const TRUST_ITEMS = [
    { icon: '🔒', label: 'Secure payments' },
    { icon: '✓', label: 'Verified organizers' },
    { icon: '📊', label: 'Track every dollar' },
    { icon: '💚', label: 'Trusted by donors' },
]

export default function HomePage() {
    const { posts } = usePosts()
    const { token } = useAuth()
    const totalRaised = posts.reduce((s, p) => s + (p.amount || 0), 0)
    const causes = posts.length
    const topCauses = posts.slice().sort((a, b) => (b.amount || 0) - (a.amount || 0)).slice(0, 3)

    return (
        <div className="page-shell">
            <Header />

            <section className="hero">
                <div className="hero-inner">
                    <span className="hero-badge">✨ Trusted crowdfunding platform</span>
                    <h1>Give a little.<br />Change a life.</h1>
                    <p>
                        Discover meaningful causes, donate securely, and follow impact in real time.
                        Every contribution helps real people in need.
                    </p>
                    <div className="hero-cta">
                        <Link to={'/create-donation'}>
                            <button type="button" className="btn-primary">Start a fundraiser</button>
                        </Link>
                        {!isTokenValid(token) && (
                            <Link to={'/login'}>
                                <button type="button" className="btn-ghost">Sign in</button>
                            </Link>
                        )}
                    </div>
                </div>

                <div className="hero-stats-card">
                    <div className="hero-stats-grid">
                        <div>
                            <div className="hero-stat-value">${totalRaised.toLocaleString()}</div>
                            <div className="hero-stat-label">Total raised</div>
                        </div>
                        <div>
                            <div className="hero-stat-value">{causes}</div>
                            <div className="hero-stat-label">Active causes</div>
                        </div>
                    </div>
                    <p className="hero-stats-note">
                        Join thousands of donors making a difference every day.
                    </p>
                </div>
            </section>

            <div className="trust-bar">
                {TRUST_ITEMS.map((item) => (
                    <div className="trust-pill" key={item.label}>
                        <span className="trust-pill-icon">{item.icon}</span>
                        {item.label}
                    </div>
                ))}
            </div>

            <main className="main-layout">
                <section>
                    <div className="section-header">
                        <h2>Trending fundraisers</h2>
                        <p>Support causes that are close to reaching their goal</p>
                    </div>
                    <PostList posts={posts} />
                </section>

                <aside>
                    <div className="sidebar-card">
                        <h3>Top causes</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {topCauses.map((post) => (
                                <Link
                                    to={`/posts/${post._id}`}
                                    state={{ post }}
                                    key={post._id}
                                    className="top-cause-item"
                                >
                                    <img src={post.image} alt="" />
                                    <div>
                                        <div className="top-cause-title">{post.title}</div>
                                        <div className="top-cause-raised">
                                            ${Number(post.amount || 0).toLocaleString()} raised
                                        </div>
                                    </div>
                                </Link>
                            ))}
                            {topCauses.length === 0 && (
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                                    No causes yet — be the first to start one.
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="sidebar-card" style={{ marginTop: 16 }}>
                        <h4>How it works</h4>
                        <ol className="how-it-works">
                            <li>Create or find a cause</li>
                            <li>Donate securely in seconds</li>
                            <li>Follow impact updates</li>
                        </ol>
                    </div>
                </aside>
            </main>
            <Footer />
        </div>
    )
}
