const user ={
    name: 'Dima',
    age: 18,
    city: 'Odessa'
}

function Profile (){
    return(
        <>
            <h1> My name: {user.name}</h1>
            <div>
                <ol>
                    <li>Age : {user.age}</li>
                    <li>City : {user.city}</li>
                </ol>
            </div>

        </>
    )
}
export default Profile;