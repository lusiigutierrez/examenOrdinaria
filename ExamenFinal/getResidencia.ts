export type PaisFromAPi = {
    country: string
};


export const getPais = async (tlf:string): Promise<PaisFromAPi> => {
    const BASE_URL = "https://api.api-ninjas.com/v1/validatephone?number=" + tlf; 
    const API_KEY = 'UUqo85uJHByTkCfial7+IA==96CHYx6HngVy6Ls7';
    try{
        const response = await fetch (BASE_URL, {
            headers: {
                'X-Api-Key': API_KEY,},},);
                
        if (!response.ok){
            throw new Error ('Numero de telefono incorrecto'); 
        }
        const data = await response.json(); 
        return {
            country: data.country

        }
        
    }catch(error){
        throw new Error (error); 
    }
    
};

export default getPais;