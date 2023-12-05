function RegisterButton(){

    const styles = {
        backgroundColor: '#1e90ff ',
        color: '#ffffff',
        width: '20%',
        fontSize: "20px",
        borderRadius: "12px",
        border: "none"
    }

    return <div style={{
        width: '100%',
        textAlign: 'center'
    }}><button style={styles}>REGISTER</button></div>;
}

export default RegisterButton;