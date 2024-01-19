import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLError } from "graphql";
import ContactoModel from "./schemaMongo.ts";
import ContactModel, { Contact } from "./schemaMongo.ts";

export const Mutation = {
    addContact:async (_:unknown, args: {nombreYapellidos: string; tlf:string; }): Promise<Contact> => {
        const ContactCrear = {
            nombreYapellidos: args.nombreYapellidos,
            tlf: args.tlf
        }
        const newContact = await ContactModel.create(ContactCrear); 
        const Contact: Contact = {
            id: newContact.id.toString(),
            nombreYapellidos: newContact.nombreYapellidos,
            tlf: newContact.tlf,
        
        }

        return Contact;
        
    },
    deleteContact:async (_:unknown, args: {id: string; }): Promise<Boolean> => {
        const contactEliminar = await ContactModel.findByIdAndDelete(args.id); 
        return true; 
    
    },
    updateContact:async (_:unknown, args: {id: string; nombreYapellidos:string; tlf:string;}): Promise<Contact> => {

        const contactModificar = await ContactModel.findByIdAndUpdate(
            args.id, 
            {
                nombreYapellidos: args.nombreYapellidos, tlf: args.tlf
            },
            {new: true, runValidators: true}
        ); 
        const Contact: Contact = {
            id: contactModificar.id.toString(),
            nombreYapellidos: contactModificar.nombreYapellidos,
            tlf: contactModificar.tlf
        }

        return Contact;
    },

}