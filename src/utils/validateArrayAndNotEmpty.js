export const validateArrayAndNotEmpty = (data) =>{

    if(!Array.isArray(data)){ throw new Error('The param must be a array') }
    if(data.length === 0 ){ throw new Error('The param cant be empty')}

}