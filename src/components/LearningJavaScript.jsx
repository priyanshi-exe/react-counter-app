const person = {
    name: 'Priyanshi',
    university: 'IIEST, Shibpur',
    address: {
        line1: 'LT Williams Hall of Residence',
        city:'Howrah',
        state: 'West Bengal',
        country: 'India'
    },
    profiles: ['LinkedIn', 'GitHub', 'Twitter', 'Instagram'],
    printProfile: () => { // function in an object
        person.profiles.map( // to print all the profiles in console
            (profile) => {
                console.log(profile)
            }
        )
        // console.log(person.profiles[1])
    }
}

export default function LearningJavaScript(){
    return(
        <div>
        <div>{person.name}</div>
        <div>{person.university}</div>
        <div>{person.address.city}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()}</div>
        </div>
    )
}