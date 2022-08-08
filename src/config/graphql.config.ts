import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { CustomUuidScalar } from '~core/scalars/uuid.scalar';

export const graphQLConfig = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: 'schema.gql',
  installSubscriptionHandlers: true,
  resolvers: {
    UUID: CustomUuidScalar,
  },
});
