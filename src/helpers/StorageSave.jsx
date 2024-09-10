export const StorageSave = (item,element)=>{
    let elements = JSON.parse(localStorage.getItem(item))

    if(Array.isArray(elements)){
        elements.push(element)
    }else{
        elements = [element]
    }

    localStorage.setItem(item,JSON.stringify(elements))

    return elements
}