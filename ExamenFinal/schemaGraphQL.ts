// The GraphQL schema
export const typeDefs = `#graphql
 #String, Float, ID ..
 type Contact{
  id: ID!
  nombreYapellidos: String!
  tlf: String!
  pais: String
  hora: String
 }

 type Query {
   getContact(id: ID!): Contact!
   getContacts: [Contact!]!


 }

 type Mutation {

   addContact(nombreYapellidos: String!, tlf: String!): Contact!
   deleteContact(id: ID!): Boolean!
   updateContact(id: ID!, nombreYapellidos: String, tlf: String): Contact!
  
 }



`;