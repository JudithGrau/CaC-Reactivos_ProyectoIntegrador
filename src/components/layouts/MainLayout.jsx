export const MainLayout = ({ children }) => {
    return (
        <div
            className="container d-flex align-items-center justify-content-center bg-light"
            style={ { height: 'auto', width: '100vw', marginTop: '20px', zIndex: '-1' } }
        >
            { children }
        </div>
    )
}