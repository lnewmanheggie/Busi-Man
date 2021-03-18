
function Footer() {

    const styles = {
        footer: {
            backgroundColor: '#8ecae6',
            padding: '3rem',
            color: '#023047'
        },

        push: {
            height: '50vh'
        }
    }

    return(
        <>
            <div className='push' style={styles.push}></div>
            <div style={styles.footer}>
                Busi-Man &copy; 2021 
            </div>
        </>
    )
}

export default Footer;

