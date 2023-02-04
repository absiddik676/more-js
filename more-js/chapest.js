const phones = [
    {
        name: 'samsung',
        camera: 12,
        storage : '125gb',
        color: 'black',
        price : 36000,
    },
    {
        name: 'apple',
        camera: 24,
        storage : '128gb',
        color: 'blue',
        price : 100000,
    },
    {
        name: 'nokia',
        camera: 10,
        storage : '256gb',
        color: 'purple',
        price : 12500,
    },
    {
        name: 'walton',
        camera: 8,
        storage : '26gb',
        color: 'white',
        price : 1500,
    },
    {
        name: 'opp',
        camera: 15,
        storage : '36gb',
        color: 'black-blue',
        price : 35000,
    }
]

function cheapestPhone(phones) {
    let cheapestPhone = phones[0]
    for(i=0; i< phones.length;i++){
        const phone = phones[i];
        if (phone.price < cheapestPhone.price) {
            cheapestPhone = phone
        }
    }
    return cheapestPhone
}
const allPhone = cheapestPhone(phones)
console.log(allPhone)