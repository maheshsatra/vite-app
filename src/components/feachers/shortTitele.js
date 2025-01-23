
export const ShortTitel = (name,num=10) => {
    let newName = name.slice(0, num).toLowerCase(); 
    let capitalizedText = newName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); 
    return `${capitalizedText}...`; 
};

export const setPrice = (price)=>{
    return `$ ${price.toFixed(2)}`
}