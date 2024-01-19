
export type CapitalForAPi = {
    capital: string; 
};

export const getCapital =async (country:string): Promise<CapitalForAPi> => {
    const BASE_URL = "https://api.api-ninjas.com/v1/country?name=" + country; 
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
        return {capital: data.capital}
        
    }catch(error){
        throw new Error (error); 
    }
    
};

export default getCapital;
    