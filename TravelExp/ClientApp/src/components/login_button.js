function LoginButton(){

    const styles = {
        backgroundColor: '#1e90ff ',
        color: '#ffffff',
        width: '20%',
        fontSize: "20px",
        marginTop: "1%",
        borderRadius: "12px",
        border: "none"
    }

    return <div style={{
        width: '100%',
        textAlign: 'center'
    }}><button style={styles}>LOG IN</button></div>;
}

export default LoginButton;