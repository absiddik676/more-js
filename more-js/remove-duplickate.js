const names = ['abul', 'babul', 'chabul','kabul','tabbul', 'abul', 'babaul', 'tabul', 'gabil','babul','siddik','siddik']
function removeDuplicate(names) {
    let unique = []
    for(i= 0 ; i<names.length; i++){
        let name = names[i];
        if(unique.includes(name) == false){
            unique.push(name)
        }
        

    }
    return unique
}
const uniqueName = removeDuplicate(names);
console.log(uniqueName);