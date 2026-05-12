import './Footer.css'
export default function Footer(){
    return (
        <footer className="app-footer">
            <div className="footer-inner">
                <div className="brand">GiveNow <span className="logo-accent">❤️</span></div>
                <div className="meta">© {new Date().getFullYear()} GiveNow — Built with ❤️</div>
            </div>
        </footer>
    )
}
