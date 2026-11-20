const phone=[
    {name:"Samsung",price:"12500 Taka",camera:"12 pixel",color:"Black"},
    {name:"Apple",price:"12500 Taka",camera:"12 pixel",color:"Black"},
    {name:"Google pixel",price:"12500 Taka",camera:"12 pixel",color:"Black"},
    {name:"Redmi",price:"12500 Taka",camera:"12 pixel",color:"Black"},
    {name:"Honor",price:"12500 Taka",camera:"12 pixel",color:"Black"}
]

function getphone (phone){
    for(const mobile of phone){
        console.log(mobile);
    }
}

const cheap = getphone(phone);
