export const createUserApi = async (user: any) => {
    const response = await fetch('http://localhost:8080/api/user/createUser', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        // Send your data in the request body as JSON
        body: JSON.stringify({
            "email": "stringsdwas",
            "note": "string",
            "phoneNumber": 212,
            "userId": 0,
            "userName": "string",
            "userRole": 0,
            "userUid": "stringwasw"
          })
    })
    return response.ok
}
