import { UnprocessableEntityException } from '@nestjs/common';
import { GraphQLScalarType } from 'graphql';

const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function validate(uuid: unknown): string | never {
  if (typeof uuid !== 'string' || !regex.test(uuid)) {
    throw new UnprocessableEntityException('The id must be a uuid string');
  }
  return uuid;
}

export const CustomUuidScalar = new GraphQLScalarType({
  name: 'UUID',
  description: 'A simple UUID parser',
  serialize: (ast: any) => validate(ast),
  parseValue: (ast: any) => validate(ast),
  parseLiteral: (ast: any) => validate(ast.value),
});
