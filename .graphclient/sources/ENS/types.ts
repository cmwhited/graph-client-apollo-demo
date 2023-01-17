// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace EnsTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ENS__BigDecimal: any;
  BigInt: any;
  ENS__Bytes: any;
};

export type ENS__AbiChanged = ENS__ResolverEvent & {
  id: Scalars['ID'];
  resolver: ENS__Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
  contentType: Scalars['BigInt'];
};

export type ENS__AbiChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<ENS__Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  contentType?: InputMaybe<Scalars['BigInt']>;
  contentType_not?: InputMaybe<Scalars['BigInt']>;
  contentType_gt?: InputMaybe<Scalars['BigInt']>;
  contentType_lt?: InputMaybe<Scalars['BigInt']>;
  contentType_gte?: InputMaybe<Scalars['BigInt']>;
  contentType_lte?: InputMaybe<Scalars['BigInt']>;
  contentType_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contentType_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__AbiChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'contentType';

export type ENS__Account = {
  id: Scalars['ID'];
  domains: Array<ENS__Domain>;
  registrations?: Maybe<Array<ENS__Registration>>;
};


export type ENS__AccountdomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__Domain_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__Domain_filter>;
};


export type ENS__AccountregistrationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__Registration_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__Registration_filter>;
};

export type ENS__Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domains_?: InputMaybe<ENS__Domain_filter>;
  registrations_?: InputMaybe<ENS__Registration_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__Account_orderBy =
  | 'id'
  | 'domains'
  | 'registrations';

export type ENS__AddrChanged = ENS__ResolverEvent & {
  id: Scalars['ID'];
  resolver: ENS__Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
  addr: ENS__Account;
};

export type ENS__AddrChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<ENS__Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  addr?: InputMaybe<Scalars['String']>;
  addr_not?: InputMaybe<Scalars['String']>;
  addr_gt?: InputMaybe<Scalars['String']>;
  addr_lt?: InputMaybe<Scalars['String']>;
  addr_gte?: InputMaybe<Scalars['String']>;
  addr_lte?: InputMaybe<Scalars['String']>;
  addr_in?: InputMaybe<Array<Scalars['String']>>;
  addr_not_in?: InputMaybe<Array<Scalars['String']>>;
  addr_contains?: InputMaybe<Scalars['String']>;
  addr_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_not_contains?: InputMaybe<Scalars['String']>;
  addr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_starts_with?: InputMaybe<Scalars['String']>;
  addr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_starts_with?: InputMaybe<Scalars['String']>;
  addr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_ends_with?: InputMaybe<Scalars['String']>;
  addr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_ends_with?: InputMaybe<Scalars['String']>;
  addr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_?: InputMaybe<ENS__Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__AddrChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'addr';

export type ENS__AuthorisationChanged = ENS__ResolverEvent & {
  id: Scalars['ID'];
  resolver: ENS__Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
  owner: Scalars['ENS__Bytes'];
  target: Scalars['ENS__Bytes'];
  isAuthorized: Scalars['Boolean'];
};

export type ENS__AuthorisationChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<ENS__Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  owner?: InputMaybe<Scalars['ENS__Bytes']>;
  owner_not?: InputMaybe<Scalars['ENS__Bytes']>;
  owner_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  owner_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  owner_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  owner_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  owner_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  target?: InputMaybe<Scalars['ENS__Bytes']>;
  target_not?: InputMaybe<Scalars['ENS__Bytes']>;
  target_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  target_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  target_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  target_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  target_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  target_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  target_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  target_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  isAuthorized?: InputMaybe<Scalars['Boolean']>;
  isAuthorized_not?: InputMaybe<Scalars['Boolean']>;
  isAuthorized_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isAuthorized_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__AuthorisationChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'owner'
  | 'target'
  | 'isAuthorized';

export type ENS__BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type ENS__Block_height = {
  hash?: InputMaybe<Scalars['ENS__Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type ENS__ContenthashChanged = ENS__ResolverEvent & {
  id: Scalars['ID'];
  resolver: ENS__Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
  hash: Scalars['ENS__Bytes'];
};

export type ENS__ContenthashChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<ENS__Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  hash?: InputMaybe<Scalars['ENS__Bytes']>;
  hash_not?: InputMaybe<Scalars['ENS__Bytes']>;
  hash_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  hash_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  hash_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  hash_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  hash_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  hash_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  hash_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__ContenthashChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'hash';

export type ENS__Domain = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  labelName?: Maybe<Scalars['String']>;
  labelhash?: Maybe<Scalars['ENS__Bytes']>;
  parent?: Maybe<ENS__Domain>;
  subdomains: Array<ENS__Domain>;
  subdomainCount: Scalars['Int'];
  resolvedAddress?: Maybe<ENS__Account>;
  owner: ENS__Account;
  resolver?: Maybe<ENS__Resolver>;
  ttl?: Maybe<Scalars['BigInt']>;
  isMigrated: Scalars['Boolean'];
  createdAt: Scalars['BigInt'];
  events: Array<ENS__DomainEvent>;
};


export type ENS__DomainsubdomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__Domain_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__Domain_filter>;
};


export type ENS__DomaineventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__DomainEvent_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__DomainEvent_filter>;
};

export type ENS__DomainEvent = {
  id: Scalars['ID'];
  domain: ENS__Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
};

export type ENS__DomainEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<ENS__Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__DomainEvent_orderBy =
  | 'id'
  | 'domain'
  | 'blockNumber'
  | 'transactionID';

export type ENS__Domain_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName?: InputMaybe<Scalars['String']>;
  labelName_not?: InputMaybe<Scalars['String']>;
  labelName_gt?: InputMaybe<Scalars['String']>;
  labelName_lt?: InputMaybe<Scalars['String']>;
  labelName_gte?: InputMaybe<Scalars['String']>;
  labelName_lte?: InputMaybe<Scalars['String']>;
  labelName_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_not_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_contains?: InputMaybe<Scalars['String']>;
  labelName_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_contains?: InputMaybe<Scalars['String']>;
  labelName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_starts_with?: InputMaybe<Scalars['String']>;
  labelName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_ends_with?: InputMaybe<Scalars['String']>;
  labelName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelhash?: InputMaybe<Scalars['ENS__Bytes']>;
  labelhash_not?: InputMaybe<Scalars['ENS__Bytes']>;
  labelhash_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  labelhash_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  labelhash_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  labelhash_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  labelhash_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  labelhash_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  labelhash_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  labelhash_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  parent?: InputMaybe<Scalars['String']>;
  parent_not?: InputMaybe<Scalars['String']>;
  parent_gt?: InputMaybe<Scalars['String']>;
  parent_lt?: InputMaybe<Scalars['String']>;
  parent_gte?: InputMaybe<Scalars['String']>;
  parent_lte?: InputMaybe<Scalars['String']>;
  parent_in?: InputMaybe<Array<Scalars['String']>>;
  parent_not_in?: InputMaybe<Array<Scalars['String']>>;
  parent_contains?: InputMaybe<Scalars['String']>;
  parent_contains_nocase?: InputMaybe<Scalars['String']>;
  parent_not_contains?: InputMaybe<Scalars['String']>;
  parent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  parent_starts_with?: InputMaybe<Scalars['String']>;
  parent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parent_not_starts_with?: InputMaybe<Scalars['String']>;
  parent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parent_ends_with?: InputMaybe<Scalars['String']>;
  parent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parent_not_ends_with?: InputMaybe<Scalars['String']>;
  parent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parent_?: InputMaybe<ENS__Domain_filter>;
  subdomains_?: InputMaybe<ENS__Domain_filter>;
  subdomainCount?: InputMaybe<Scalars['Int']>;
  subdomainCount_not?: InputMaybe<Scalars['Int']>;
  subdomainCount_gt?: InputMaybe<Scalars['Int']>;
  subdomainCount_lt?: InputMaybe<Scalars['Int']>;
  subdomainCount_gte?: InputMaybe<Scalars['Int']>;
  subdomainCount_lte?: InputMaybe<Scalars['Int']>;
  subdomainCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subdomainCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  resolvedAddress?: InputMaybe<Scalars['String']>;
  resolvedAddress_not?: InputMaybe<Scalars['String']>;
  resolvedAddress_gt?: InputMaybe<Scalars['String']>;
  resolvedAddress_lt?: InputMaybe<Scalars['String']>;
  resolvedAddress_gte?: InputMaybe<Scalars['String']>;
  resolvedAddress_lte?: InputMaybe<Scalars['String']>;
  resolvedAddress_in?: InputMaybe<Array<Scalars['String']>>;
  resolvedAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolvedAddress_contains?: InputMaybe<Scalars['String']>;
  resolvedAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_contains?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_starts_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_ends_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_?: InputMaybe<ENS__Account_filter>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<ENS__Account_filter>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<ENS__Resolver_filter>;
  ttl?: InputMaybe<Scalars['BigInt']>;
  ttl_not?: InputMaybe<Scalars['BigInt']>;
  ttl_gt?: InputMaybe<Scalars['BigInt']>;
  ttl_lt?: InputMaybe<Scalars['BigInt']>;
  ttl_gte?: InputMaybe<Scalars['BigInt']>;
  ttl_lte?: InputMaybe<Scalars['BigInt']>;
  ttl_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ttl_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isMigrated?: InputMaybe<Scalars['Boolean']>;
  isMigrated_not?: InputMaybe<Scalars['Boolean']>;
  isMigrated_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isMigrated_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  events_?: InputMaybe<ENS__DomainEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__Domain_orderBy =
  | 'id'
  | 'name'
  | 'labelName'
  | 'labelhash'
  | 'parent'
  | 'subdomains'
  | 'subdomainCount'
  | 'resolvedAddress'
  | 'owner'
  | 'resolver'
  | 'ttl'
  | 'isMigrated'
  | 'createdAt'
  | 'events';

export type ENS__InterfaceChanged = ENS__ResolverEvent & {
  id: Scalars['ID'];
  resolver: ENS__Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
  interfaceID: Scalars['ENS__Bytes'];
  implementer: Scalars['ENS__Bytes'];
};

export type ENS__InterfaceChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<ENS__Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  interfaceID?: InputMaybe<Scalars['ENS__Bytes']>;
  interfaceID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  interfaceID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  interfaceID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  interfaceID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  interfaceID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  interfaceID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  interfaceID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  interfaceID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  interfaceID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  implementer?: InputMaybe<Scalars['ENS__Bytes']>;
  implementer_not?: InputMaybe<Scalars['ENS__Bytes']>;
  implementer_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  implementer_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  implementer_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  implementer_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  implementer_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  implementer_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  implementer_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  implementer_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__InterfaceChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'interfaceID'
  | 'implementer';

export type ENS__MulticoinAddrChanged = ENS__ResolverEvent & {
  id: Scalars['ID'];
  resolver: ENS__Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
  coinType: Scalars['BigInt'];
  addr: Scalars['ENS__Bytes'];
};

export type ENS__MulticoinAddrChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<ENS__Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  coinType?: InputMaybe<Scalars['BigInt']>;
  coinType_not?: InputMaybe<Scalars['BigInt']>;
  coinType_gt?: InputMaybe<Scalars['BigInt']>;
  coinType_lt?: InputMaybe<Scalars['BigInt']>;
  coinType_gte?: InputMaybe<Scalars['BigInt']>;
  coinType_lte?: InputMaybe<Scalars['BigInt']>;
  coinType_in?: InputMaybe<Array<Scalars['BigInt']>>;
  coinType_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  addr?: InputMaybe<Scalars['ENS__Bytes']>;
  addr_not?: InputMaybe<Scalars['ENS__Bytes']>;
  addr_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  addr_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  addr_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  addr_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  addr_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  addr_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  addr_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  addr_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__MulticoinAddrChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'coinType'
  | 'addr';

export type ENS__NameChanged = ENS__ResolverEvent & {
  id: Scalars['ID'];
  resolver: ENS__Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
  name: Scalars['String'];
};

export type ENS__NameChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<ENS__Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__NameChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'name';

export type ENS__NameRegistered = ENS__RegistrationEvent & {
  id: Scalars['ID'];
  registration: ENS__Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
  registrant: ENS__Account;
  expiryDate: Scalars['BigInt'];
};

export type ENS__NameRegistered_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<ENS__Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  registrant?: InputMaybe<Scalars['String']>;
  registrant_not?: InputMaybe<Scalars['String']>;
  registrant_gt?: InputMaybe<Scalars['String']>;
  registrant_lt?: InputMaybe<Scalars['String']>;
  registrant_gte?: InputMaybe<Scalars['String']>;
  registrant_lte?: InputMaybe<Scalars['String']>;
  registrant_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_not_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_contains?: InputMaybe<Scalars['String']>;
  registrant_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_contains?: InputMaybe<Scalars['String']>;
  registrant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_starts_with?: InputMaybe<Scalars['String']>;
  registrant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_ends_with?: InputMaybe<Scalars['String']>;
  registrant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_?: InputMaybe<ENS__Account_filter>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__NameRegistered_orderBy =
  | 'id'
  | 'registration'
  | 'blockNumber'
  | 'transactionID'
  | 'registrant'
  | 'expiryDate';

export type ENS__NameRenewed = ENS__RegistrationEvent & {
  id: Scalars['ID'];
  registration: ENS__Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
  expiryDate: Scalars['BigInt'];
};

export type ENS__NameRenewed_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<ENS__Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__NameRenewed_orderBy =
  | 'id'
  | 'registration'
  | 'blockNumber'
  | 'transactionID'
  | 'expiryDate';

export type ENS__NameTransferred = ENS__RegistrationEvent & {
  id: Scalars['ID'];
  registration: ENS__Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
  newOwner: ENS__Account;
};

export type ENS__NameTransferred_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<ENS__Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  newOwner?: InputMaybe<Scalars['String']>;
  newOwner_not?: InputMaybe<Scalars['String']>;
  newOwner_gt?: InputMaybe<Scalars['String']>;
  newOwner_lt?: InputMaybe<Scalars['String']>;
  newOwner_gte?: InputMaybe<Scalars['String']>;
  newOwner_lte?: InputMaybe<Scalars['String']>;
  newOwner_in?: InputMaybe<Array<Scalars['String']>>;
  newOwner_not_in?: InputMaybe<Array<Scalars['String']>>;
  newOwner_contains?: InputMaybe<Scalars['String']>;
  newOwner_contains_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_contains?: InputMaybe<Scalars['String']>;
  newOwner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  newOwner_starts_with?: InputMaybe<Scalars['String']>;
  newOwner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_starts_with?: InputMaybe<Scalars['String']>;
  newOwner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_ends_with?: InputMaybe<Scalars['String']>;
  newOwner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_ends_with?: InputMaybe<Scalars['String']>;
  newOwner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_?: InputMaybe<ENS__Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__NameTransferred_orderBy =
  | 'id'
  | 'registration'
  | 'blockNumber'
  | 'transactionID'
  | 'newOwner';

export type ENS__NewOwner = ENS__DomainEvent & {
  id: Scalars['ID'];
  parentDomain: ENS__Domain;
  domain: ENS__Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
  owner: ENS__Account;
};

export type ENS__NewOwner_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  parentDomain?: InputMaybe<Scalars['String']>;
  parentDomain_not?: InputMaybe<Scalars['String']>;
  parentDomain_gt?: InputMaybe<Scalars['String']>;
  parentDomain_lt?: InputMaybe<Scalars['String']>;
  parentDomain_gte?: InputMaybe<Scalars['String']>;
  parentDomain_lte?: InputMaybe<Scalars['String']>;
  parentDomain_in?: InputMaybe<Array<Scalars['String']>>;
  parentDomain_not_in?: InputMaybe<Array<Scalars['String']>>;
  parentDomain_contains?: InputMaybe<Scalars['String']>;
  parentDomain_contains_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_contains?: InputMaybe<Scalars['String']>;
  parentDomain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_starts_with?: InputMaybe<Scalars['String']>;
  parentDomain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_starts_with?: InputMaybe<Scalars['String']>;
  parentDomain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_ends_with?: InputMaybe<Scalars['String']>;
  parentDomain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_ends_with?: InputMaybe<Scalars['String']>;
  parentDomain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_?: InputMaybe<ENS__Domain_filter>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<ENS__Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<ENS__Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__NewOwner_orderBy =
  | 'id'
  | 'parentDomain'
  | 'domain'
  | 'blockNumber'
  | 'transactionID'
  | 'owner';

export type ENS__NewResolver = ENS__DomainEvent & {
  id: Scalars['ID'];
  domain: ENS__Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
  resolver: ENS__Resolver;
};

export type ENS__NewResolver_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<ENS__Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<ENS__Resolver_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__NewResolver_orderBy =
  | 'id'
  | 'domain'
  | 'blockNumber'
  | 'transactionID'
  | 'resolver';

export type ENS__NewTTL = ENS__DomainEvent & {
  id: Scalars['ID'];
  domain: ENS__Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
  ttl: Scalars['BigInt'];
};

export type ENS__NewTTL_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<ENS__Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  ttl?: InputMaybe<Scalars['BigInt']>;
  ttl_not?: InputMaybe<Scalars['BigInt']>;
  ttl_gt?: InputMaybe<Scalars['BigInt']>;
  ttl_lt?: InputMaybe<Scalars['BigInt']>;
  ttl_gte?: InputMaybe<Scalars['BigInt']>;
  ttl_lte?: InputMaybe<Scalars['BigInt']>;
  ttl_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ttl_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__NewTTL_orderBy =
  | 'id'
  | 'domain'
  | 'blockNumber'
  | 'transactionID'
  | 'ttl';

/** Defines the order direction, either ascending or descending */
export type ENS__OrderDirection =
  | 'asc'
  | 'desc';

export type ENS__PubkeyChanged = ENS__ResolverEvent & {
  id: Scalars['ID'];
  resolver: ENS__Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
  x: Scalars['ENS__Bytes'];
  y: Scalars['ENS__Bytes'];
};

export type ENS__PubkeyChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<ENS__Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  x?: InputMaybe<Scalars['ENS__Bytes']>;
  x_not?: InputMaybe<Scalars['ENS__Bytes']>;
  x_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  x_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  x_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  x_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  x_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  x_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  x_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  x_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  y?: InputMaybe<Scalars['ENS__Bytes']>;
  y_not?: InputMaybe<Scalars['ENS__Bytes']>;
  y_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  y_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  y_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  y_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  y_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  y_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  y_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  y_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__PubkeyChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'x'
  | 'y';

export type Query = {
  ENS__domain?: Maybe<ENS__Domain>;
  ENS__domains: Array<ENS__Domain>;
  ENS__transfer?: Maybe<ENS__Transfer>;
  ENS__transfers: Array<ENS__Transfer>;
  ENS__newOwner?: Maybe<ENS__NewOwner>;
  ENS__newOwners: Array<ENS__NewOwner>;
  ENS__newResolver?: Maybe<ENS__NewResolver>;
  ENS__newResolvers: Array<ENS__NewResolver>;
  ENS__newTTL?: Maybe<ENS__NewTTL>;
  ENS__newTTLs: Array<ENS__NewTTL>;
  ENS__account?: Maybe<ENS__Account>;
  ENS__accounts: Array<ENS__Account>;
  ENS__registration?: Maybe<ENS__Registration>;
  ENS__registrations: Array<ENS__Registration>;
  ENS__nameRegistered?: Maybe<ENS__NameRegistered>;
  ENS__nameRegistereds: Array<ENS__NameRegistered>;
  ENS__nameRenewed?: Maybe<ENS__NameRenewed>;
  ENS__nameReneweds: Array<ENS__NameRenewed>;
  ENS__nameTransferred?: Maybe<ENS__NameTransferred>;
  ENS__nameTransferreds: Array<ENS__NameTransferred>;
  ENS__resolver?: Maybe<ENS__Resolver>;
  ENS__resolvers: Array<ENS__Resolver>;
  ENS__addrChanged?: Maybe<ENS__AddrChanged>;
  ENS__addrChangeds: Array<ENS__AddrChanged>;
  ENS__multicoinAddrChanged?: Maybe<ENS__MulticoinAddrChanged>;
  ENS__multicoinAddrChangeds: Array<ENS__MulticoinAddrChanged>;
  ENS__nameChanged?: Maybe<ENS__NameChanged>;
  ENS__nameChangeds: Array<ENS__NameChanged>;
  ENS__abiChanged?: Maybe<ENS__AbiChanged>;
  ENS__abiChangeds: Array<ENS__AbiChanged>;
  ENS__pubkeyChanged?: Maybe<ENS__PubkeyChanged>;
  ENS__pubkeyChangeds: Array<ENS__PubkeyChanged>;
  ENS__textChanged?: Maybe<ENS__TextChanged>;
  ENS__textChangeds: Array<ENS__TextChanged>;
  ENS__contenthashChanged?: Maybe<ENS__ContenthashChanged>;
  ENS__contenthashChangeds: Array<ENS__ContenthashChanged>;
  ENS__interfaceChanged?: Maybe<ENS__InterfaceChanged>;
  ENS__interfaceChangeds: Array<ENS__InterfaceChanged>;
  ENS__authorisationChanged?: Maybe<ENS__AuthorisationChanged>;
  ENS__authorisationChangeds: Array<ENS__AuthorisationChanged>;
  ENS__domainEvent?: Maybe<ENS__DomainEvent>;
  ENS__domainEvents: Array<ENS__DomainEvent>;
  ENS__registrationEvent?: Maybe<ENS__RegistrationEvent>;
  ENS__registrationEvents: Array<ENS__RegistrationEvent>;
  ENS__resolverEvent?: Maybe<ENS__ResolverEvent>;
  ENS__resolverEvents: Array<ENS__ResolverEvent>;
  /** Access to subgraph metadata */
  ENS___meta?: Maybe<ENS___Meta_>;
};


export type QueryENS__domainArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__domainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__Domain_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__Domain_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__transferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__transfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__Transfer_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__Transfer_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__newOwnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__newOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__NewOwner_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__NewOwner_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__newResolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__newResolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__NewResolver_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__NewResolver_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__newTTLArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__newTTLsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__NewTTL_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__NewTTL_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__accountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__accountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__Account_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__Account_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__registrationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__registrationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__Registration_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__Registration_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__nameRegisteredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__nameRegisteredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__NameRegistered_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__NameRegistered_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__nameRenewedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__nameRenewedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__NameRenewed_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__NameRenewed_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__nameTransferredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__nameTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__NameTransferred_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__NameTransferred_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__resolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__resolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__Resolver_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__Resolver_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__addrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__addrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__AddrChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__AddrChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__multicoinAddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__multicoinAddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__MulticoinAddrChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__MulticoinAddrChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__nameChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__nameChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__NameChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__NameChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__abiChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__abiChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__AbiChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__AbiChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__pubkeyChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__pubkeyChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__PubkeyChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__PubkeyChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__textChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__textChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__TextChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__TextChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__contenthashChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__contenthashChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__ContenthashChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__ContenthashChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__interfaceChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__interfaceChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__InterfaceChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__InterfaceChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__authorisationChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__authorisationChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__AuthorisationChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__AuthorisationChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__domainEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__domainEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__DomainEvent_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__DomainEvent_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__registrationEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__registrationEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__RegistrationEvent_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__RegistrationEvent_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__resolverEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS__resolverEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__ResolverEvent_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__ResolverEvent_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type QueryENS___metaArgs = {
  block?: InputMaybe<ENS__Block_height>;
};

export type ENS__Registration = {
  id: Scalars['ID'];
  domain?: Maybe<ENS__Domain>;
  registrationDate: Scalars['BigInt'];
  expiryDate: Scalars['BigInt'];
  cost?: Maybe<Scalars['BigInt']>;
  registrant: ENS__Account;
  labelName?: Maybe<Scalars['String']>;
  events: Array<ENS__RegistrationEvent>;
};


export type ENS__RegistrationeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__RegistrationEvent_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__RegistrationEvent_filter>;
};

export type ENS__RegistrationEvent = {
  id: Scalars['ID'];
  registration: ENS__Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
};

export type ENS__RegistrationEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<ENS__Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__RegistrationEvent_orderBy =
  | 'id'
  | 'registration'
  | 'blockNumber'
  | 'transactionID';

export type ENS__Registration_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<ENS__Domain_filter>;
  registrationDate?: InputMaybe<Scalars['BigInt']>;
  registrationDate_not?: InputMaybe<Scalars['BigInt']>;
  registrationDate_gt?: InputMaybe<Scalars['BigInt']>;
  registrationDate_lt?: InputMaybe<Scalars['BigInt']>;
  registrationDate_gte?: InputMaybe<Scalars['BigInt']>;
  registrationDate_lte?: InputMaybe<Scalars['BigInt']>;
  registrationDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registrationDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cost?: InputMaybe<Scalars['BigInt']>;
  cost_not?: InputMaybe<Scalars['BigInt']>;
  cost_gt?: InputMaybe<Scalars['BigInt']>;
  cost_lt?: InputMaybe<Scalars['BigInt']>;
  cost_gte?: InputMaybe<Scalars['BigInt']>;
  cost_lte?: InputMaybe<Scalars['BigInt']>;
  cost_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cost_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registrant?: InputMaybe<Scalars['String']>;
  registrant_not?: InputMaybe<Scalars['String']>;
  registrant_gt?: InputMaybe<Scalars['String']>;
  registrant_lt?: InputMaybe<Scalars['String']>;
  registrant_gte?: InputMaybe<Scalars['String']>;
  registrant_lte?: InputMaybe<Scalars['String']>;
  registrant_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_not_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_contains?: InputMaybe<Scalars['String']>;
  registrant_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_contains?: InputMaybe<Scalars['String']>;
  registrant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_starts_with?: InputMaybe<Scalars['String']>;
  registrant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_ends_with?: InputMaybe<Scalars['String']>;
  registrant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_?: InputMaybe<ENS__Account_filter>;
  labelName?: InputMaybe<Scalars['String']>;
  labelName_not?: InputMaybe<Scalars['String']>;
  labelName_gt?: InputMaybe<Scalars['String']>;
  labelName_lt?: InputMaybe<Scalars['String']>;
  labelName_gte?: InputMaybe<Scalars['String']>;
  labelName_lte?: InputMaybe<Scalars['String']>;
  labelName_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_not_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_contains?: InputMaybe<Scalars['String']>;
  labelName_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_contains?: InputMaybe<Scalars['String']>;
  labelName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_starts_with?: InputMaybe<Scalars['String']>;
  labelName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_ends_with?: InputMaybe<Scalars['String']>;
  labelName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  events_?: InputMaybe<ENS__RegistrationEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__Registration_orderBy =
  | 'id'
  | 'domain'
  | 'registrationDate'
  | 'expiryDate'
  | 'cost'
  | 'registrant'
  | 'labelName'
  | 'events';

export type ENS__Resolver = {
  id: Scalars['ID'];
  domain?: Maybe<ENS__Domain>;
  address: Scalars['ENS__Bytes'];
  addr?: Maybe<ENS__Account>;
  contentHash?: Maybe<Scalars['ENS__Bytes']>;
  texts?: Maybe<Array<Scalars['String']>>;
  coinTypes?: Maybe<Array<Scalars['BigInt']>>;
  events: Array<ENS__ResolverEvent>;
};


export type ENS__ResolvereventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__ResolverEvent_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__ResolverEvent_filter>;
};

export type ENS__ResolverEvent = {
  id: Scalars['ID'];
  resolver: ENS__Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
};

export type ENS__ResolverEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<ENS__Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__ResolverEvent_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID';

export type ENS__Resolver_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<ENS__Domain_filter>;
  address?: InputMaybe<Scalars['ENS__Bytes']>;
  address_not?: InputMaybe<Scalars['ENS__Bytes']>;
  address_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  address_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  address_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  address_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  address_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  address_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  address_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  addr?: InputMaybe<Scalars['String']>;
  addr_not?: InputMaybe<Scalars['String']>;
  addr_gt?: InputMaybe<Scalars['String']>;
  addr_lt?: InputMaybe<Scalars['String']>;
  addr_gte?: InputMaybe<Scalars['String']>;
  addr_lte?: InputMaybe<Scalars['String']>;
  addr_in?: InputMaybe<Array<Scalars['String']>>;
  addr_not_in?: InputMaybe<Array<Scalars['String']>>;
  addr_contains?: InputMaybe<Scalars['String']>;
  addr_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_not_contains?: InputMaybe<Scalars['String']>;
  addr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_starts_with?: InputMaybe<Scalars['String']>;
  addr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_starts_with?: InputMaybe<Scalars['String']>;
  addr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_ends_with?: InputMaybe<Scalars['String']>;
  addr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_ends_with?: InputMaybe<Scalars['String']>;
  addr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_?: InputMaybe<ENS__Account_filter>;
  contentHash?: InputMaybe<Scalars['ENS__Bytes']>;
  contentHash_not?: InputMaybe<Scalars['ENS__Bytes']>;
  contentHash_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  contentHash_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  contentHash_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  contentHash_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  contentHash_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  contentHash_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  contentHash_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  contentHash_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  texts?: InputMaybe<Array<Scalars['String']>>;
  texts_not?: InputMaybe<Array<Scalars['String']>>;
  texts_contains?: InputMaybe<Array<Scalars['String']>>;
  texts_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  texts_not_contains?: InputMaybe<Array<Scalars['String']>>;
  texts_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  coinTypes?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_not?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  events_?: InputMaybe<ENS__ResolverEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__Resolver_orderBy =
  | 'id'
  | 'domain'
  | 'address'
  | 'addr'
  | 'contentHash'
  | 'texts'
  | 'coinTypes'
  | 'events';

export type Subscription = {
  ENS__domain?: Maybe<ENS__Domain>;
  ENS__domains: Array<ENS__Domain>;
  ENS__transfer?: Maybe<ENS__Transfer>;
  ENS__transfers: Array<ENS__Transfer>;
  ENS__newOwner?: Maybe<ENS__NewOwner>;
  ENS__newOwners: Array<ENS__NewOwner>;
  ENS__newResolver?: Maybe<ENS__NewResolver>;
  ENS__newResolvers: Array<ENS__NewResolver>;
  ENS__newTTL?: Maybe<ENS__NewTTL>;
  ENS__newTTLs: Array<ENS__NewTTL>;
  ENS__account?: Maybe<ENS__Account>;
  ENS__accounts: Array<ENS__Account>;
  ENS__registration?: Maybe<ENS__Registration>;
  ENS__registrations: Array<ENS__Registration>;
  ENS__nameRegistered?: Maybe<ENS__NameRegistered>;
  ENS__nameRegistereds: Array<ENS__NameRegistered>;
  ENS__nameRenewed?: Maybe<ENS__NameRenewed>;
  ENS__nameReneweds: Array<ENS__NameRenewed>;
  ENS__nameTransferred?: Maybe<ENS__NameTransferred>;
  ENS__nameTransferreds: Array<ENS__NameTransferred>;
  ENS__resolver?: Maybe<ENS__Resolver>;
  ENS__resolvers: Array<ENS__Resolver>;
  ENS__addrChanged?: Maybe<ENS__AddrChanged>;
  ENS__addrChangeds: Array<ENS__AddrChanged>;
  ENS__multicoinAddrChanged?: Maybe<ENS__MulticoinAddrChanged>;
  ENS__multicoinAddrChangeds: Array<ENS__MulticoinAddrChanged>;
  ENS__nameChanged?: Maybe<ENS__NameChanged>;
  ENS__nameChangeds: Array<ENS__NameChanged>;
  ENS__abiChanged?: Maybe<ENS__AbiChanged>;
  ENS__abiChangeds: Array<ENS__AbiChanged>;
  ENS__pubkeyChanged?: Maybe<ENS__PubkeyChanged>;
  ENS__pubkeyChangeds: Array<ENS__PubkeyChanged>;
  ENS__textChanged?: Maybe<ENS__TextChanged>;
  ENS__textChangeds: Array<ENS__TextChanged>;
  ENS__contenthashChanged?: Maybe<ENS__ContenthashChanged>;
  ENS__contenthashChangeds: Array<ENS__ContenthashChanged>;
  ENS__interfaceChanged?: Maybe<ENS__InterfaceChanged>;
  ENS__interfaceChangeds: Array<ENS__InterfaceChanged>;
  ENS__authorisationChanged?: Maybe<ENS__AuthorisationChanged>;
  ENS__authorisationChangeds: Array<ENS__AuthorisationChanged>;
  ENS__domainEvent?: Maybe<ENS__DomainEvent>;
  ENS__domainEvents: Array<ENS__DomainEvent>;
  ENS__registrationEvent?: Maybe<ENS__RegistrationEvent>;
  ENS__registrationEvents: Array<ENS__RegistrationEvent>;
  ENS__resolverEvent?: Maybe<ENS__ResolverEvent>;
  ENS__resolverEvents: Array<ENS__ResolverEvent>;
  /** Access to subgraph metadata */
  ENS___meta?: Maybe<ENS___Meta_>;
};


export type SubscriptionENS__domainArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__domainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__Domain_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__Domain_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__transferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__transfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__Transfer_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__Transfer_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__newOwnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__newOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__NewOwner_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__NewOwner_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__newResolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__newResolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__NewResolver_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__NewResolver_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__newTTLArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__newTTLsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__NewTTL_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__NewTTL_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__accountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__accountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__Account_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__Account_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__registrationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__registrationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__Registration_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__Registration_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__nameRegisteredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__nameRegisteredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__NameRegistered_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__NameRegistered_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__nameRenewedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__nameRenewedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__NameRenewed_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__NameRenewed_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__nameTransferredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__nameTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__NameTransferred_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__NameTransferred_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__resolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__resolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__Resolver_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__Resolver_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__addrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__addrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__AddrChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__AddrChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__multicoinAddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__multicoinAddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__MulticoinAddrChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__MulticoinAddrChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__nameChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__nameChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__NameChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__NameChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__abiChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__abiChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__AbiChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__AbiChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__pubkeyChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__pubkeyChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__PubkeyChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__PubkeyChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__textChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__textChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__TextChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__TextChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__contenthashChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__contenthashChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__ContenthashChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__ContenthashChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__interfaceChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__interfaceChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__InterfaceChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__InterfaceChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__authorisationChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__authorisationChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__AuthorisationChanged_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__AuthorisationChanged_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__domainEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__domainEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__DomainEvent_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__DomainEvent_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__registrationEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__registrationEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__RegistrationEvent_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__RegistrationEvent_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__resolverEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS__resolverEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS__ResolverEvent_orderBy>;
  orderDirection?: InputMaybe<ENS__OrderDirection>;
  where?: InputMaybe<ENS__ResolverEvent_filter>;
  block?: InputMaybe<ENS__Block_height>;
  subgraphError?: ENS___SubgraphErrorPolicy_;
};


export type SubscriptionENS___metaArgs = {
  block?: InputMaybe<ENS__Block_height>;
};

export type ENS__TextChanged = ENS__ResolverEvent & {
  id: Scalars['ID'];
  resolver: ENS__Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
  key: Scalars['String'];
};

export type ENS__TextChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<ENS__Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  key?: InputMaybe<Scalars['String']>;
  key_not?: InputMaybe<Scalars['String']>;
  key_gt?: InputMaybe<Scalars['String']>;
  key_lt?: InputMaybe<Scalars['String']>;
  key_gte?: InputMaybe<Scalars['String']>;
  key_lte?: InputMaybe<Scalars['String']>;
  key_in?: InputMaybe<Array<Scalars['String']>>;
  key_not_in?: InputMaybe<Array<Scalars['String']>>;
  key_contains?: InputMaybe<Scalars['String']>;
  key_contains_nocase?: InputMaybe<Scalars['String']>;
  key_not_contains?: InputMaybe<Scalars['String']>;
  key_not_contains_nocase?: InputMaybe<Scalars['String']>;
  key_starts_with?: InputMaybe<Scalars['String']>;
  key_starts_with_nocase?: InputMaybe<Scalars['String']>;
  key_not_starts_with?: InputMaybe<Scalars['String']>;
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  key_ends_with?: InputMaybe<Scalars['String']>;
  key_ends_with_nocase?: InputMaybe<Scalars['String']>;
  key_not_ends_with?: InputMaybe<Scalars['String']>;
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__TextChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'key';

export type ENS__Transfer = ENS__DomainEvent & {
  id: Scalars['ID'];
  domain: ENS__Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['ENS__Bytes'];
  owner: ENS__Account;
};

export type ENS__Transfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<ENS__Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<ENS__Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ENS__BlockChangedFilter>;
};

export type ENS__Transfer_orderBy =
  | 'id'
  | 'domain'
  | 'blockNumber'
  | 'transactionID'
  | 'owner';

export type ENS___Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['ENS__Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type ENS___Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: ENS___Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type ENS___SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  ENS__domain: InContextSdkMethod<Query['ENS__domain'], QueryENS__domainArgs, MeshContext>,
  /** null **/
  ENS__domains: InContextSdkMethod<Query['ENS__domains'], QueryENS__domainsArgs, MeshContext>,
  /** null **/
  ENS__transfer: InContextSdkMethod<Query['ENS__transfer'], QueryENS__transferArgs, MeshContext>,
  /** null **/
  ENS__transfers: InContextSdkMethod<Query['ENS__transfers'], QueryENS__transfersArgs, MeshContext>,
  /** null **/
  ENS__newOwner: InContextSdkMethod<Query['ENS__newOwner'], QueryENS__newOwnerArgs, MeshContext>,
  /** null **/
  ENS__newOwners: InContextSdkMethod<Query['ENS__newOwners'], QueryENS__newOwnersArgs, MeshContext>,
  /** null **/
  ENS__newResolver: InContextSdkMethod<Query['ENS__newResolver'], QueryENS__newResolverArgs, MeshContext>,
  /** null **/
  ENS__newResolvers: InContextSdkMethod<Query['ENS__newResolvers'], QueryENS__newResolversArgs, MeshContext>,
  /** null **/
  ENS__newTTL: InContextSdkMethod<Query['ENS__newTTL'], QueryENS__newTTLArgs, MeshContext>,
  /** null **/
  ENS__newTTLs: InContextSdkMethod<Query['ENS__newTTLs'], QueryENS__newTTLsArgs, MeshContext>,
  /** null **/
  ENS__account: InContextSdkMethod<Query['ENS__account'], QueryENS__accountArgs, MeshContext>,
  /** null **/
  ENS__accounts: InContextSdkMethod<Query['ENS__accounts'], QueryENS__accountsArgs, MeshContext>,
  /** null **/
  ENS__registration: InContextSdkMethod<Query['ENS__registration'], QueryENS__registrationArgs, MeshContext>,
  /** null **/
  ENS__registrations: InContextSdkMethod<Query['ENS__registrations'], QueryENS__registrationsArgs, MeshContext>,
  /** null **/
  ENS__nameRegistered: InContextSdkMethod<Query['ENS__nameRegistered'], QueryENS__nameRegisteredArgs, MeshContext>,
  /** null **/
  ENS__nameRegistereds: InContextSdkMethod<Query['ENS__nameRegistereds'], QueryENS__nameRegisteredsArgs, MeshContext>,
  /** null **/
  ENS__nameRenewed: InContextSdkMethod<Query['ENS__nameRenewed'], QueryENS__nameRenewedArgs, MeshContext>,
  /** null **/
  ENS__nameReneweds: InContextSdkMethod<Query['ENS__nameReneweds'], QueryENS__nameRenewedsArgs, MeshContext>,
  /** null **/
  ENS__nameTransferred: InContextSdkMethod<Query['ENS__nameTransferred'], QueryENS__nameTransferredArgs, MeshContext>,
  /** null **/
  ENS__nameTransferreds: InContextSdkMethod<Query['ENS__nameTransferreds'], QueryENS__nameTransferredsArgs, MeshContext>,
  /** null **/
  ENS__resolver: InContextSdkMethod<Query['ENS__resolver'], QueryENS__resolverArgs, MeshContext>,
  /** null **/
  ENS__resolvers: InContextSdkMethod<Query['ENS__resolvers'], QueryENS__resolversArgs, MeshContext>,
  /** null **/
  ENS__addrChanged: InContextSdkMethod<Query['ENS__addrChanged'], QueryENS__addrChangedArgs, MeshContext>,
  /** null **/
  ENS__addrChangeds: InContextSdkMethod<Query['ENS__addrChangeds'], QueryENS__addrChangedsArgs, MeshContext>,
  /** null **/
  ENS__multicoinAddrChanged: InContextSdkMethod<Query['ENS__multicoinAddrChanged'], QueryENS__multicoinAddrChangedArgs, MeshContext>,
  /** null **/
  ENS__multicoinAddrChangeds: InContextSdkMethod<Query['ENS__multicoinAddrChangeds'], QueryENS__multicoinAddrChangedsArgs, MeshContext>,
  /** null **/
  ENS__nameChanged: InContextSdkMethod<Query['ENS__nameChanged'], QueryENS__nameChangedArgs, MeshContext>,
  /** null **/
  ENS__nameChangeds: InContextSdkMethod<Query['ENS__nameChangeds'], QueryENS__nameChangedsArgs, MeshContext>,
  /** null **/
  ENS__abiChanged: InContextSdkMethod<Query['ENS__abiChanged'], QueryENS__abiChangedArgs, MeshContext>,
  /** null **/
  ENS__abiChangeds: InContextSdkMethod<Query['ENS__abiChangeds'], QueryENS__abiChangedsArgs, MeshContext>,
  /** null **/
  ENS__pubkeyChanged: InContextSdkMethod<Query['ENS__pubkeyChanged'], QueryENS__pubkeyChangedArgs, MeshContext>,
  /** null **/
  ENS__pubkeyChangeds: InContextSdkMethod<Query['ENS__pubkeyChangeds'], QueryENS__pubkeyChangedsArgs, MeshContext>,
  /** null **/
  ENS__textChanged: InContextSdkMethod<Query['ENS__textChanged'], QueryENS__textChangedArgs, MeshContext>,
  /** null **/
  ENS__textChangeds: InContextSdkMethod<Query['ENS__textChangeds'], QueryENS__textChangedsArgs, MeshContext>,
  /** null **/
  ENS__contenthashChanged: InContextSdkMethod<Query['ENS__contenthashChanged'], QueryENS__contenthashChangedArgs, MeshContext>,
  /** null **/
  ENS__contenthashChangeds: InContextSdkMethod<Query['ENS__contenthashChangeds'], QueryENS__contenthashChangedsArgs, MeshContext>,
  /** null **/
  ENS__interfaceChanged: InContextSdkMethod<Query['ENS__interfaceChanged'], QueryENS__interfaceChangedArgs, MeshContext>,
  /** null **/
  ENS__interfaceChangeds: InContextSdkMethod<Query['ENS__interfaceChangeds'], QueryENS__interfaceChangedsArgs, MeshContext>,
  /** null **/
  ENS__authorisationChanged: InContextSdkMethod<Query['ENS__authorisationChanged'], QueryENS__authorisationChangedArgs, MeshContext>,
  /** null **/
  ENS__authorisationChangeds: InContextSdkMethod<Query['ENS__authorisationChangeds'], QueryENS__authorisationChangedsArgs, MeshContext>,
  /** null **/
  ENS__domainEvent: InContextSdkMethod<Query['ENS__domainEvent'], QueryENS__domainEventArgs, MeshContext>,
  /** null **/
  ENS__domainEvents: InContextSdkMethod<Query['ENS__domainEvents'], QueryENS__domainEventsArgs, MeshContext>,
  /** null **/
  ENS__registrationEvent: InContextSdkMethod<Query['ENS__registrationEvent'], QueryENS__registrationEventArgs, MeshContext>,
  /** null **/
  ENS__registrationEvents: InContextSdkMethod<Query['ENS__registrationEvents'], QueryENS__registrationEventsArgs, MeshContext>,
  /** null **/
  ENS__resolverEvent: InContextSdkMethod<Query['ENS__resolverEvent'], QueryENS__resolverEventArgs, MeshContext>,
  /** null **/
  ENS__resolverEvents: InContextSdkMethod<Query['ENS__resolverEvents'], QueryENS__resolverEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  ENS___meta: InContextSdkMethod<Query['ENS___meta'], QueryENS___metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  ENS__domain: InContextSdkMethod<Subscription['ENS__domain'], SubscriptionENS__domainArgs, MeshContext>,
  /** null **/
  ENS__domains: InContextSdkMethod<Subscription['ENS__domains'], SubscriptionENS__domainsArgs, MeshContext>,
  /** null **/
  ENS__transfer: InContextSdkMethod<Subscription['ENS__transfer'], SubscriptionENS__transferArgs, MeshContext>,
  /** null **/
  ENS__transfers: InContextSdkMethod<Subscription['ENS__transfers'], SubscriptionENS__transfersArgs, MeshContext>,
  /** null **/
  ENS__newOwner: InContextSdkMethod<Subscription['ENS__newOwner'], SubscriptionENS__newOwnerArgs, MeshContext>,
  /** null **/
  ENS__newOwners: InContextSdkMethod<Subscription['ENS__newOwners'], SubscriptionENS__newOwnersArgs, MeshContext>,
  /** null **/
  ENS__newResolver: InContextSdkMethod<Subscription['ENS__newResolver'], SubscriptionENS__newResolverArgs, MeshContext>,
  /** null **/
  ENS__newResolvers: InContextSdkMethod<Subscription['ENS__newResolvers'], SubscriptionENS__newResolversArgs, MeshContext>,
  /** null **/
  ENS__newTTL: InContextSdkMethod<Subscription['ENS__newTTL'], SubscriptionENS__newTTLArgs, MeshContext>,
  /** null **/
  ENS__newTTLs: InContextSdkMethod<Subscription['ENS__newTTLs'], SubscriptionENS__newTTLsArgs, MeshContext>,
  /** null **/
  ENS__account: InContextSdkMethod<Subscription['ENS__account'], SubscriptionENS__accountArgs, MeshContext>,
  /** null **/
  ENS__accounts: InContextSdkMethod<Subscription['ENS__accounts'], SubscriptionENS__accountsArgs, MeshContext>,
  /** null **/
  ENS__registration: InContextSdkMethod<Subscription['ENS__registration'], SubscriptionENS__registrationArgs, MeshContext>,
  /** null **/
  ENS__registrations: InContextSdkMethod<Subscription['ENS__registrations'], SubscriptionENS__registrationsArgs, MeshContext>,
  /** null **/
  ENS__nameRegistered: InContextSdkMethod<Subscription['ENS__nameRegistered'], SubscriptionENS__nameRegisteredArgs, MeshContext>,
  /** null **/
  ENS__nameRegistereds: InContextSdkMethod<Subscription['ENS__nameRegistereds'], SubscriptionENS__nameRegisteredsArgs, MeshContext>,
  /** null **/
  ENS__nameRenewed: InContextSdkMethod<Subscription['ENS__nameRenewed'], SubscriptionENS__nameRenewedArgs, MeshContext>,
  /** null **/
  ENS__nameReneweds: InContextSdkMethod<Subscription['ENS__nameReneweds'], SubscriptionENS__nameRenewedsArgs, MeshContext>,
  /** null **/
  ENS__nameTransferred: InContextSdkMethod<Subscription['ENS__nameTransferred'], SubscriptionENS__nameTransferredArgs, MeshContext>,
  /** null **/
  ENS__nameTransferreds: InContextSdkMethod<Subscription['ENS__nameTransferreds'], SubscriptionENS__nameTransferredsArgs, MeshContext>,
  /** null **/
  ENS__resolver: InContextSdkMethod<Subscription['ENS__resolver'], SubscriptionENS__resolverArgs, MeshContext>,
  /** null **/
  ENS__resolvers: InContextSdkMethod<Subscription['ENS__resolvers'], SubscriptionENS__resolversArgs, MeshContext>,
  /** null **/
  ENS__addrChanged: InContextSdkMethod<Subscription['ENS__addrChanged'], SubscriptionENS__addrChangedArgs, MeshContext>,
  /** null **/
  ENS__addrChangeds: InContextSdkMethod<Subscription['ENS__addrChangeds'], SubscriptionENS__addrChangedsArgs, MeshContext>,
  /** null **/
  ENS__multicoinAddrChanged: InContextSdkMethod<Subscription['ENS__multicoinAddrChanged'], SubscriptionENS__multicoinAddrChangedArgs, MeshContext>,
  /** null **/
  ENS__multicoinAddrChangeds: InContextSdkMethod<Subscription['ENS__multicoinAddrChangeds'], SubscriptionENS__multicoinAddrChangedsArgs, MeshContext>,
  /** null **/
  ENS__nameChanged: InContextSdkMethod<Subscription['ENS__nameChanged'], SubscriptionENS__nameChangedArgs, MeshContext>,
  /** null **/
  ENS__nameChangeds: InContextSdkMethod<Subscription['ENS__nameChangeds'], SubscriptionENS__nameChangedsArgs, MeshContext>,
  /** null **/
  ENS__abiChanged: InContextSdkMethod<Subscription['ENS__abiChanged'], SubscriptionENS__abiChangedArgs, MeshContext>,
  /** null **/
  ENS__abiChangeds: InContextSdkMethod<Subscription['ENS__abiChangeds'], SubscriptionENS__abiChangedsArgs, MeshContext>,
  /** null **/
  ENS__pubkeyChanged: InContextSdkMethod<Subscription['ENS__pubkeyChanged'], SubscriptionENS__pubkeyChangedArgs, MeshContext>,
  /** null **/
  ENS__pubkeyChangeds: InContextSdkMethod<Subscription['ENS__pubkeyChangeds'], SubscriptionENS__pubkeyChangedsArgs, MeshContext>,
  /** null **/
  ENS__textChanged: InContextSdkMethod<Subscription['ENS__textChanged'], SubscriptionENS__textChangedArgs, MeshContext>,
  /** null **/
  ENS__textChangeds: InContextSdkMethod<Subscription['ENS__textChangeds'], SubscriptionENS__textChangedsArgs, MeshContext>,
  /** null **/
  ENS__contenthashChanged: InContextSdkMethod<Subscription['ENS__contenthashChanged'], SubscriptionENS__contenthashChangedArgs, MeshContext>,
  /** null **/
  ENS__contenthashChangeds: InContextSdkMethod<Subscription['ENS__contenthashChangeds'], SubscriptionENS__contenthashChangedsArgs, MeshContext>,
  /** null **/
  ENS__interfaceChanged: InContextSdkMethod<Subscription['ENS__interfaceChanged'], SubscriptionENS__interfaceChangedArgs, MeshContext>,
  /** null **/
  ENS__interfaceChangeds: InContextSdkMethod<Subscription['ENS__interfaceChangeds'], SubscriptionENS__interfaceChangedsArgs, MeshContext>,
  /** null **/
  ENS__authorisationChanged: InContextSdkMethod<Subscription['ENS__authorisationChanged'], SubscriptionENS__authorisationChangedArgs, MeshContext>,
  /** null **/
  ENS__authorisationChangeds: InContextSdkMethod<Subscription['ENS__authorisationChangeds'], SubscriptionENS__authorisationChangedsArgs, MeshContext>,
  /** null **/
  ENS__domainEvent: InContextSdkMethod<Subscription['ENS__domainEvent'], SubscriptionENS__domainEventArgs, MeshContext>,
  /** null **/
  ENS__domainEvents: InContextSdkMethod<Subscription['ENS__domainEvents'], SubscriptionENS__domainEventsArgs, MeshContext>,
  /** null **/
  ENS__registrationEvent: InContextSdkMethod<Subscription['ENS__registrationEvent'], SubscriptionENS__registrationEventArgs, MeshContext>,
  /** null **/
  ENS__registrationEvents: InContextSdkMethod<Subscription['ENS__registrationEvents'], SubscriptionENS__registrationEventsArgs, MeshContext>,
  /** null **/
  ENS__resolverEvent: InContextSdkMethod<Subscription['ENS__resolverEvent'], SubscriptionENS__resolverEventArgs, MeshContext>,
  /** null **/
  ENS__resolverEvents: InContextSdkMethod<Subscription['ENS__resolverEvents'], SubscriptionENS__resolverEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  ENS___meta: InContextSdkMethod<Subscription['ENS___meta'], SubscriptionENS___metaArgs, MeshContext>
  };

  export type Context = {
      ["ENS"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["ens"]: Scalars['ID']
    };
}
