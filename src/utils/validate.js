export const checkValidData = (email,password) =>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if (!isEmailValid) return ("Email Id is not valid")
    if (!isPasswordValid) return (
        <p>
            Your password must meet the following criteria:
        <ul className='list-disc pl-8'>
            <li>At least 8 characters long</li>
            <li>Include both uppercase and lowercase letters</li>
            <li>Contain at least one numeric digit</li>
            <li>Include special characters, such as @, #, or $</li>
        </ul>
        </p>
        )
        
    return null;

}