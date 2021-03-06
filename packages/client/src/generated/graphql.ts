import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Source": [
      "DatabaseSource",
      "VirtualSource"
    ]
  }
};
      export default result;
    
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Clip = {
  __typename?: 'Clip';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  results: ResultConnection;
  sourceId: Scalars['ID'];
  sql: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


export type ClipResultsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ordering>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ClipConnection = {
  __typename?: 'ClipConnection';
  edges?: Maybe<Array<ClipEdge>>;
  nodes?: Maybe<Array<Clip>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ClipEdge = {
  __typename?: 'ClipEdge';
  cursor: Scalars['String'];
  node: Clip;
};

export type CreateClipInput = {
  name: Scalars['String'];
  sourceId?: InputMaybe<Scalars['ID']>;
  sql: Scalars['String'];
};

export type CreateDatabaseSourceInput = {
  database?: InputMaybe<Scalars['String']>;
  host: Scalars['String'];
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  port?: InputMaybe<Scalars['Int']>;
  type: SourceType;
  username: Scalars['String'];
};

export type CreateProjectInput = {
  name: Scalars['String'];
};

export type CreateVirtualSourceInput = {
  name: Scalars['String'];
  tables: Array<CreateVirtualSourceTableInput>;
};

export type CreateVirtualSourceTableInput = {
  clipId: Scalars['ID'];
  name: Scalars['String'];
};

export type DatabaseSource = {
  __typename?: 'DatabaseSource';
  createdAt: Scalars['DateTime'];
  database?: Maybe<Scalars['String']>;
  host: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['Int']>;
  type: DatabaseType;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export enum DatabaseType {
  MYSQL = 'MYSQL',
  POSTGRESQL = 'POSTGRESQL'
}

export type Mutation = {
  __typename?: 'Mutation';
  createClip: Clip;
  createDatabaseSource: DatabaseSource;
  createProject: Project;
  createVirtualSource: VirtualSource;
  deleteClip: Scalars['ID'];
  deleteProject: Scalars['ID'];
  deleteSource: Scalars['ID'];
  updateClip: Clip;
  updateDatabaseSource: DatabaseSource;
  updateProject: Project;
  updateVirtualSource: VirtualSource;
};


export type MutationCreateClipArgs = {
  input: CreateClipInput;
};


export type MutationCreateDatabaseSourceArgs = {
  input: CreateDatabaseSourceInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateVirtualSourceArgs = {
  input: CreateVirtualSourceInput;
};


export type MutationDeleteClipArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSourceArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateClipArgs = {
  id: Scalars['ID'];
  input: UpdateClipInput;
};


export type MutationUpdateDatabaseSourceArgs = {
  id: Scalars['ID'];
  input: UpdateDatabaseSourceInput;
};


export type MutationUpdateProjectArgs = {
  id: Scalars['ID'];
  input: UpdateProjectInput;
};


export type MutationUpdateVirtualSourceArgs = {
  id: Scalars['ID'];
  input: UpdateVirtualSourceInput;
};

export enum OrderDirection {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type Ordering = {
  direction: OrderDirection;
  field: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  edges?: Maybe<Array<ProjectEdge>>;
  nodes?: Maybe<Array<Project>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  cursor: Scalars['String'];
  node: Project;
};

export type Query = {
  __typename?: 'Query';
  clip: Clip;
  clips: ClipConnection;
  project: Project;
  projects: ProjectConnection;
  source: Source;
  sources: SourceConnection;
};


export type QueryClipArgs = {
  id: Scalars['ID'];
};


export type QueryClipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ordering>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ordering>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};


export type QuerySourceArgs = {
  id: Scalars['ID'];
};


export type QuerySourcesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ordering>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type Result = {
  __typename?: 'Result';
  createdAt: Scalars['DateTime'];
  duration: Scalars['Int'];
  error?: Maybe<Scalars['String']>;
  fields: Array<Scalars['String']>;
  finishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  startedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  values: Array<Array<Scalars['String']>>;
};

export type ResultConnection = {
  __typename?: 'ResultConnection';
  edges?: Maybe<Array<ResultEdge>>;
  nodes?: Maybe<Array<Result>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ResultEdge = {
  __typename?: 'ResultEdge';
  cursor: Scalars['String'];
  node: Result;
};

export type Source = DatabaseSource | VirtualSource;

export type SourceConnection = {
  __typename?: 'SourceConnection';
  edges?: Maybe<Array<SourceEdge>>;
  nodes?: Maybe<Array<Source>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SourceEdge = {
  __typename?: 'SourceEdge';
  cursor: Scalars['String'];
  node: Source;
};

export enum SourceType {
  MYSQL = 'MYSQL',
  POSTGRESQL = 'POSTGRESQL',
  VIRTUAL = 'VIRTUAL'
}

export type UpdateClipInput = {
  name?: InputMaybe<Scalars['String']>;
  sourceId?: InputMaybe<Scalars['ID']>;
  sql?: InputMaybe<Scalars['String']>;
};

export type UpdateDatabaseSourceInput = {
  database?: InputMaybe<Scalars['String']>;
  host?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  port?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<SourceType>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectInput = {
  name: Scalars['String'];
};

export type UpdateVirtualSourceInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type VirtualSource = {
  __typename?: 'VirtualSource';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  tables: Array<VirtualSourceTable>;
  updatedAt: Scalars['DateTime'];
};

export type VirtualSourceTable = {
  __typename?: 'VirtualSourceTable';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ClipFragment = { __typename?: 'Clip', id: string, name: string, token?: string | null, sql: string, sourceId: string, createdAt: any, updatedAt: any };

export type ResultFragment = { __typename?: 'Result', id: string, name: string, error?: string | null, fields: Array<string>, values: Array<Array<string>>, duration: number, startedAt?: any | null, finishedAt?: any | null };

export type CreateClipMutationVariables = Exact<{
  input: CreateClipInput;
}>;


export type CreateClipMutation = { __typename?: 'Mutation', createClip: { __typename?: 'Clip', id: string, name: string, token?: string | null, sql: string, sourceId: string, createdAt: any, updatedAt: any } };

export type UpdateClipMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateClipInput;
}>;


export type UpdateClipMutation = { __typename?: 'Mutation', updateClip: { __typename?: 'Clip', id: string, name: string, token?: string | null, sql: string, sourceId: string, createdAt: any, updatedAt: any } };

export type ClipQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ClipQuery = { __typename?: 'Query', clip: { __typename?: 'Clip', id: string, name: string, token?: string | null, sql: string, sourceId: string, createdAt: any, updatedAt: any } };

export type SourceConnectionQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Ordering>;
}>;


export type SourceConnectionQuery = { __typename?: 'Query', sourceConnection: { __typename?: 'SourceConnection', totalCount?: number | null, edges?: Array<{ __typename?: 'SourceEdge', node: { __typename: 'DatabaseSource', id: string, name: string } | { __typename: 'VirtualSource', id: string, name: string } }> | null, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } };

export const ClipFragmentDoc = gql`
    fragment Clip on Clip {
  id
  name
  token
  sql
  sourceId
  createdAt
  updatedAt
}
    `;
export const ResultFragmentDoc = gql`
    fragment Result on Result {
  id
  name
  error
  fields
  values
  duration
  startedAt
  finishedAt
}
    `;
export const CreateClipDocument = gql`
    mutation CreateClip($input: CreateClipInput!) {
  createClip(input: $input) {
    ...Clip
  }
}
    ${ClipFragmentDoc}`;
export type CreateClipMutationFn = Apollo.MutationFunction<CreateClipMutation, CreateClipMutationVariables>;

/**
 * __useCreateClipMutation__
 *
 * To run a mutation, you first call `useCreateClipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClipMutation, { data, loading, error }] = useCreateClipMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateClipMutation(baseOptions?: Apollo.MutationHookOptions<CreateClipMutation, CreateClipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateClipMutation, CreateClipMutationVariables>(CreateClipDocument, options);
      }
export type CreateClipMutationHookResult = ReturnType<typeof useCreateClipMutation>;
export type CreateClipMutationResult = Apollo.MutationResult<CreateClipMutation>;
export type CreateClipMutationOptions = Apollo.BaseMutationOptions<CreateClipMutation, CreateClipMutationVariables>;
export const UpdateClipDocument = gql`
    mutation UpdateClip($id: ID!, $input: UpdateClipInput!) {
  updateClip(id: $id, input: $input) {
    ...Clip
  }
}
    ${ClipFragmentDoc}`;
export type UpdateClipMutationFn = Apollo.MutationFunction<UpdateClipMutation, UpdateClipMutationVariables>;

/**
 * __useUpdateClipMutation__
 *
 * To run a mutation, you first call `useUpdateClipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClipMutation, { data, loading, error }] = useUpdateClipMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateClipMutation(baseOptions?: Apollo.MutationHookOptions<UpdateClipMutation, UpdateClipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateClipMutation, UpdateClipMutationVariables>(UpdateClipDocument, options);
      }
export type UpdateClipMutationHookResult = ReturnType<typeof useUpdateClipMutation>;
export type UpdateClipMutationResult = Apollo.MutationResult<UpdateClipMutation>;
export type UpdateClipMutationOptions = Apollo.BaseMutationOptions<UpdateClipMutation, UpdateClipMutationVariables>;
export const ClipDocument = gql`
    query Clip($id: ID!) {
  clip(id: $id) {
    ...Clip
  }
}
    ${ClipFragmentDoc}`;

/**
 * __useClipQuery__
 *
 * To run a query within a React component, call `useClipQuery` and pass it any options that fit your needs.
 * When your component renders, `useClipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClipQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useClipQuery(baseOptions: Apollo.QueryHookOptions<ClipQuery, ClipQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ClipQuery, ClipQueryVariables>(ClipDocument, options);
      }
export function useClipLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ClipQuery, ClipQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ClipQuery, ClipQueryVariables>(ClipDocument, options);
        }
export type ClipQueryHookResult = ReturnType<typeof useClipQuery>;
export type ClipLazyQueryHookResult = ReturnType<typeof useClipLazyQuery>;
export type ClipQueryResult = Apollo.QueryResult<ClipQuery, ClipQueryVariables>;
export const SourceConnectionDocument = gql`
    query SourceConnection($first: Int, $last: Int, $before: String, $after: String, $query: String, $orderBy: Ordering) {
  sourceConnection: sources(
    first: $first
    last: $last
    before: $before
    after: $after
    query: $query
    orderBy: $orderBy
  ) {
    edges {
      node {
        __typename
        ... on DatabaseSource {
          id
          name
        }
        ... on VirtualSource {
          id
          name
        }
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    totalCount
  }
}
    `;

/**
 * __useSourceConnectionQuery__
 *
 * To run a query within a React component, call `useSourceConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSourceConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSourceConnectionQuery({
 *   variables: {
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *      query: // value for 'query'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useSourceConnectionQuery(baseOptions?: Apollo.QueryHookOptions<SourceConnectionQuery, SourceConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SourceConnectionQuery, SourceConnectionQueryVariables>(SourceConnectionDocument, options);
      }
export function useSourceConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SourceConnectionQuery, SourceConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SourceConnectionQuery, SourceConnectionQueryVariables>(SourceConnectionDocument, options);
        }
export type SourceConnectionQueryHookResult = ReturnType<typeof useSourceConnectionQuery>;
export type SourceConnectionLazyQueryHookResult = ReturnType<typeof useSourceConnectionLazyQuery>;
export type SourceConnectionQueryResult = Apollo.QueryResult<SourceConnectionQuery, SourceConnectionQueryVariables>;