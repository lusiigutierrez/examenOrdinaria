import { GraphQLError } from "graphql";
import ContactModel from "./schemaMongo.ts";
import { Contact } from "./schemaMongo.ts";
import getHora from "./getHora.ts";
import getPais from "./getResidencia.ts";
import getCapital from "./getCapital.ts";
import mongoose from "npm:mongoose@8.0.1"

export type ContactoApi = {
  id: mongoose.ObjectId,
  nombreYapellidos: string,
  tlf: string,
  pais: string,
  //hora: string
}
 
export const Query= {
  getContact:async (_: unknown, args: {id:string}): Promise<ContactoApi> => {
    const contactBuscar = await ContactModel.findById(args.id); 
    const {country} = await getPais (contactBuscar.tlf); 
    //const {capital} = await getCapital (country); 
    //const {datetime} = await getHora(capital); 

    const contacto: ContactoApi = {
      id: contactBuscar.id.toString(),
      nombreYapellidos: contactBuscar.nombreYapellidos,
      tlf:contactBuscar.tlf,
      pais: country,
      //hora: datetime
    }
    return contacto; 
  },
  getContacts:async (_: unknown): Promise<ContactoApi[]> => {
    const contactBuscar = await ContactModel.find().exec(); 
   // const {country} = await getPais (contactBuscar.tlf); 
   // const {capital} = await getCapital (country); 
    //const {datetime} = await getHora(capital); 

    const Contacts = contactBuscar.map ((Contact) => ({id:Contact.id.toString(), nombreYapellidos: Contact.nombreYapellidos, Contact:contactBuscar.tlf
     // ,pais: country, //hora: datetime
    }));
    
    return Contacts; 

  }
  

};