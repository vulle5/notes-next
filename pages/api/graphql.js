import { ApolloServer, gql } from 'apollo-server-micro'
import { db } from 'services/firebase'

const typeDefs = gql`
  type Note {
    title: String
    content: String
    color: String
    updatedAt: String
    createdAt: String
    uid: ID
  }
  type Query {
    notes: [Note]
  }
`

const resolvers = {
  Query: {
    async notes() {
      const notes = await db
        .collection('notes')
        .where('uid', '==', 'feQdzz0TPFVMkvrYisVcKkU5ZcZ2')
        .orderBy('createdAt', 'desc')
        .get()
      return notes.docs.map(doc => {
        const { createdAt, updatedAt, ...rest } = doc.data()
        return {
          id: doc.id,
          createdAt: createdAt.toDate(),
          updatedAt: updatedAt.toDate(),
          ...rest
        }
      })
    }
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false
  }
}

export default apolloServer.createHandler({ path: '/api/graphql' })
