import mongoose from "npm:mongoose@8.0.1"


export type Contact = {
  id: mongoose.ObjectId,
  nombreYapellidos: string,
  tlf: string
}


const Schema = mongoose.Schema; 

const ContactSchema = new Schema ({
  nombreYapellidos: { type: String, required: true },
  tlf: { type: String, required: true, unique: true }, // tiene que ser unico 
  },
  { timestamps: true }
);




export type ContactModelType = mongoose.Document & Omit<Contact, "id">;  
export const ContactModel = mongoose.model<ContactModelType>("Contact", ContactSchema); 
export default ContactModel; 

