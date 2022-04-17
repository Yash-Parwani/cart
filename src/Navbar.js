import React from "react"


// for every functional component react passes props as a default argument so we include it , we will see in later cases how we can use these props
const Navbar = (props) => {

    return (
        <div className="navbar" style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img alt="cart-icon" src="https://cdn-icons-png.flaticon.com/512/833/833314.png" style={styles.cartIcon} />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )

}
const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
};

export default Navbar