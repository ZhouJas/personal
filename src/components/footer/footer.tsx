import './footer.scss'

export default function Footer() {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <div className="footer">
            <div className="description">
            Made with 💚 by Jason Zhou &copy; 2021-{currentYear}
            </div>
        </div>
    )
}
