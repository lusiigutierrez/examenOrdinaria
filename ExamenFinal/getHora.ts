
export type Hora = {
    datetime: string; 
};

export const getHora =async (capital:string): Promise<Hora> => {
    const BASE_URL = "https://api.api-ninjas.com/v1/worldtime?city=" + capital; 
    const API_KEY = 'UUqo85uJHByTkCfial7+IA==96CHYx6HngVy6Ls7'
    try{
        const response = await fetch (BASE_URL, {
            headers: {
                'X-Api-Key': API_KEY,
            }
        }); 
        if (!response.ok){
            throw new Error ('Error'); 
        }
        const data = await response.json(); 
        return {datetime: data.datetime}
        
    }catch(error){
        throw new Error (error); 
    }
    
};

export default getHora;
    
