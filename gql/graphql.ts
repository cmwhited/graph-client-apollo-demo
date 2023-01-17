/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  ANALYTICS__BigDecimal: string;
  ANALYTICS__Bytes: string;
  BILLING__BigDecimal: string;
  BILLING__Bytes: string;
  BigInt: BigInt;
  ENS__BigDecimal: string;
  ENS__Bytes: string;
  NETWORK__BigDecimal: string;
  NETWORK__Bytes: string;
};

/** A state channel Allocation representing a single Indexer-SubgraphDeployment stake */
export type Analytics__Allocation = {
  __typename?: 'ANALYTICS__Allocation';
  /** If the Allocation is active it shows the indexer. If closed, it is null */
  activeForIndexer?: Maybe<Analytics__Indexer>;
  /** Tokens allocation in this allocation */
  allocatedTokens: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Yearly annualzied return */
  annualizedReturn: Scalars['ANALYTICS__BigDecimal'];
  /** Block hash at which this allocation was closed */
  closedAtBlockHash?: Maybe<Scalars['ANALYTICS__Bytes']>;
  /** Block number at which this allocation was closed */
  closedAtBlockNumber?: Maybe<Scalars['Int']>;
  /** Epoch this allocation was closed in */
  closedAtEpoch: Scalars['Int'];
  /** Timestamp this allocation was created at */
  createdAt: Scalars['Int'];
  /** Block at which this allocation was created */
  createdAtBlockHash: Scalars['ANALYTICS__Bytes'];
  /** Epoch this allocation was created */
  createdAtEpoch: Scalars['Int'];
  /** Creator of the allocation - can be the operator or the indexer */
  creator: Scalars['ANALYTICS__Bytes'];
  /** Curator rewards deposited to the curating bonding curve */
  curatorRewards: Scalars['BigInt'];
  /** Fees paid out to delegators */
  delegationFees: Scalars['BigInt'];
  /** Effective allocation that is realized upon closing */
  effectiveAllocation: Scalars['BigInt'];
  /** Channel Address */
  id: Scalars['ID'];
  /** Indexer of this allocation */
  indexer: Analytics__Indexer;
  /** Indexing rewards earned by this allocation by delegators */
  indexingDelegatorRewards: Scalars['BigInt'];
  /** Indexing rewards earned by this allocation by indexers */
  indexingIndexerRewards: Scalars['BigInt'];
  /** Indexing rewards earned by this allocation. Includes delegator and indexer rewards */
  indexingRewards: Scalars['BigInt'];
  /** POI submitted with a closed allocation */
  poi?: Maybe<Scalars['ANALYTICS__Bytes']>;
  /** Pool in which this allocation was closed */
  poolClosedIn?: Maybe<Analytics__Pool>;
  /** Query fee rebate amount claimed from the protocol through cobbs douglas. Does not include portion given to delegators */
  queryFeeRebates: Scalars['BigInt'];
  /** Fees this allocation collected from query fees upon closing. Excludes curator reward and protocol tax */
  queryFeesCollected: Scalars['BigInt'];
  /** Status of the allocation */
  status: Analytics__AllocationStatus;
  /** Subgraph deployment that is being allocated to */
  subgraphDeployment: Analytics__SubgraphDeployment;
  /** NOT IMPLEMENTED - Return for this allocation */
  totalReturn: Scalars['ANALYTICS__BigDecimal'];
};

export enum Analytics__AllocationStatus {
  Active = 'Active',
  Claimed = 'Claimed',
  Closed = 'Closed',
  Finalized = 'Finalized',
  Null = 'Null'
}

export type Analytics__Allocation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  activeForIndexer?: InputMaybe<Scalars['String']>;
  activeForIndexer_?: InputMaybe<Analytics__Indexer_Filter>;
  activeForIndexer_contains?: InputMaybe<Scalars['String']>;
  activeForIndexer_contains_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_ends_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_gt?: InputMaybe<Scalars['String']>;
  activeForIndexer_gte?: InputMaybe<Scalars['String']>;
  activeForIndexer_in?: InputMaybe<Array<Scalars['String']>>;
  activeForIndexer_lt?: InputMaybe<Scalars['String']>;
  activeForIndexer_lte?: InputMaybe<Scalars['String']>;
  activeForIndexer_not?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_contains?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_ends_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  activeForIndexer_not_starts_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_starts_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  allocatedTokens?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  annualizedReturn?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  annualizedReturn_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  closedAtBlockHash?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtBlockHash_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtBlockHash_gt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtBlockHash_gte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtBlockHash_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  closedAtBlockHash_lt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtBlockHash_lte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtBlockHash_not?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtBlockHash_not_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtBlockHash_not_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  closedAtBlockNumber?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_gt?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_gte?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtBlockNumber_lt?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_lte?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_not?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtEpoch?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_gt?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_gte?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtEpoch_lt?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_lte?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_not?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAtBlockHash?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  createdAtBlockHash_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  createdAtBlockHash_gt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  createdAtBlockHash_gte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  createdAtBlockHash_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  createdAtBlockHash_lt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  createdAtBlockHash_lte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  createdAtBlockHash_not?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  createdAtBlockHash_not_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  createdAtBlockHash_not_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  createdAtEpoch?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_gt?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_gte?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtEpoch_lt?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_lte?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_not?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  creator?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creator_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creator_gt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creator_gte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creator_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  creator_lt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creator_lte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creator_not?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creator_not_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creator_not_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  curatorRewards?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationFees?: InputMaybe<Scalars['BigInt']>;
  delegationFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegationFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegationFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegationFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegationFees_not?: InputMaybe<Scalars['BigInt']>;
  delegationFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  effectiveAllocation?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_gt?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_gte?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  effectiveAllocation_lt?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_lte?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_not?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<Analytics__Indexer_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexingDelegatorRewards?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewards?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewards?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poi?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  poi_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  poi_gt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  poi_gte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  poi_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  poi_lt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  poi_lte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  poi_not?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  poi_not_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  poi_not_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  poolClosedIn?: InputMaybe<Scalars['String']>;
  poolClosedIn_?: InputMaybe<Analytics__Pool_Filter>;
  poolClosedIn_contains?: InputMaybe<Scalars['String']>;
  poolClosedIn_contains_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_ends_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_gt?: InputMaybe<Scalars['String']>;
  poolClosedIn_gte?: InputMaybe<Scalars['String']>;
  poolClosedIn_in?: InputMaybe<Array<Scalars['String']>>;
  poolClosedIn_lt?: InputMaybe<Scalars['String']>;
  poolClosedIn_lte?: InputMaybe<Scalars['String']>;
  poolClosedIn_not?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_contains?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_ends_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolClosedIn_not_starts_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_starts_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_starts_with_nocase?: InputMaybe<Scalars['String']>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<Analytics__AllocationStatus>;
  status_in?: InputMaybe<Array<Analytics__AllocationStatus>>;
  status_not?: InputMaybe<Analytics__AllocationStatus>;
  status_not_in?: InputMaybe<Array<Analytics__AllocationStatus>>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<Analytics__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalReturn?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalReturn_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
};

export enum Analytics__Allocation_OrderBy {
  ActiveForIndexer = 'activeForIndexer',
  AllocatedTokens = 'allocatedTokens',
  AnnualizedReturn = 'annualizedReturn',
  ClosedAtBlockHash = 'closedAtBlockHash',
  ClosedAtBlockNumber = 'closedAtBlockNumber',
  ClosedAtEpoch = 'closedAtEpoch',
  CreatedAt = 'createdAt',
  CreatedAtBlockHash = 'createdAtBlockHash',
  CreatedAtEpoch = 'createdAtEpoch',
  Creator = 'creator',
  CuratorRewards = 'curatorRewards',
  DelegationFees = 'delegationFees',
  EffectiveAllocation = 'effectiveAllocation',
  Id = 'id',
  Indexer = 'indexer',
  IndexingDelegatorRewards = 'indexingDelegatorRewards',
  IndexingIndexerRewards = 'indexingIndexerRewards',
  IndexingRewards = 'indexingRewards',
  Poi = 'poi',
  PoolClosedIn = 'poolClosedIn',
  QueryFeeRebates = 'queryFeeRebates',
  QueryFeesCollected = 'queryFeesCollected',
  Status = 'status',
  SubgraphDeployment = 'subgraphDeployment',
  TotalReturn = 'totalReturn'
}

export type Analytics__BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Analytics__Block_Height = {
  hash?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/** Curator with all Signals and metrics */
export type Analytics__Curator = {
  __typename?: 'ANALYTICS__Curator';
  /** NOT IMPLEMENTED - Annualized rate of return on curator signal */
  annualizedReturn: Scalars['ANALYTICS__BigDecimal'];
  /** Time this curator was created */
  createdAt: Scalars['Int'];
  /** Eth address of the Curator */
  id: Scalars['ID'];
  /** Subgraphs the curator is curating */
  nameSignals: Array<Analytics__NameSignal>;
  /** NOT IMPLEMENTED - Summation of realized rewards from all Signals */
  realizedRewards: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Signaling efficiency of the curator */
  signalingEfficiency: Scalars['ANALYTICS__BigDecimal'];
  /** Subgraphs the curator is curating */
  signals: Array<Analytics__Signal>;
  /** totalNameSignalCostBasis / totalNameSignal */
  totalAverageCostBasisPerNameSignal: Scalars['ANALYTICS__BigDecimal'];
  /** CURRENT summed name signal for all bonding curves */
  totalNameSignal: Scalars['ANALYTICS__BigDecimal'];
  /** Total curator cost basis of all shares purchased on all bonding curves */
  totalNameSignalAverageCostBasis: Scalars['ANALYTICS__BigDecimal'];
  /** CUMULATIVE tokens signalled on all names */
  totalNameSignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens unsignalled on all names */
  totalNameUnsignalledTokens: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Total return of the curator */
  totalReturn: Scalars['ANALYTICS__BigDecimal'];
  /** CUMULATIVE tokens signalled on all the subgraphs */
  totalSignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens unsignalled on all the subgraphs */
  totalUnsignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE withdrawn tokens from deprecated subgraphs */
  totalWithdrawnTokens: Scalars['BigInt'];
};


/** Curator with all Signals and metrics */
export type Analytics__CuratorNameSignalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__NameSignal_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__NameSignal_Filter>;
};


/** Curator with all Signals and metrics */
export type Analytics__CuratorSignalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Signal_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__Signal_Filter>;
};

export type Analytics__Curator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  annualizedReturn?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  annualizedReturn_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nameSignals_?: InputMaybe<Analytics__NameSignal_Filter>;
  realizedRewards?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalingEfficiency?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  signalingEfficiency_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  signalingEfficiency_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  signalingEfficiency_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  signalingEfficiency_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  signalingEfficiency_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  signalingEfficiency_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  signalingEfficiency_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  signals_?: InputMaybe<Analytics__Signal_Filter>;
  totalAverageCostBasisPerNameSignal?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalAverageCostBasisPerNameSignal_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalNameSignal?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignalAverageCostBasis?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignalAverageCostBasis_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignalAverageCostBasis_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalNameSignalAverageCostBasis_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignalAverageCostBasis_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignalAverageCostBasis_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalNameSignal_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignal_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignal_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalNameSignal_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignal_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignal_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignal_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalNameSignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNameSignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNameUnsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNameUnsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalReturn?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalReturn_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalSignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalWithdrawnTokens?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalWithdrawnTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Analytics__Curator_OrderBy {
  AnnualizedReturn = 'annualizedReturn',
  CreatedAt = 'createdAt',
  Id = 'id',
  NameSignals = 'nameSignals',
  RealizedRewards = 'realizedRewards',
  SignalingEfficiency = 'signalingEfficiency',
  Signals = 'signals',
  TotalAverageCostBasisPerNameSignal = 'totalAverageCostBasisPerNameSignal',
  TotalNameSignal = 'totalNameSignal',
  TotalNameSignalAverageCostBasis = 'totalNameSignalAverageCostBasis',
  TotalNameSignalledTokens = 'totalNameSignalledTokens',
  TotalNameUnsignalledTokens = 'totalNameUnsignalledTokens',
  TotalReturn = 'totalReturn',
  TotalSignalledTokens = 'totalSignalledTokens',
  TotalUnsignalledTokens = 'totalUnsignalledTokens',
  TotalWithdrawnTokens = 'totalWithdrawnTokens'
}

/** Delegator stake for a single Indexer */
export type Analytics__DelegatedStake = {
  __typename?: 'ANALYTICS__DelegatedStake';
  /** Time this delegator first delegated to an indexer */
  createdAt: Scalars['Int'];
  /** [CURRENT] Current value of the delegation shares. Should be sharesAmount * latestIndexerExchangeRate */
  currentDelegation: Scalars['ANALYTICS__BigDecimal'];
  /** Delegator */
  delegator: Analytics__Delegator;
  /** Concatenation of Delegator address and Indexer address */
  id: Scalars['ID'];
  /** Index the stake is delegated to */
  indexer: Analytics__Indexer;
  /** Last time this delegator delegated towards this indexer */
  lastDelegatedAt?: Maybe<Scalars['Int']>;
  /** Last time this delegator undelegated from this indexer */
  lastUndelegatedAt?: Maybe<Scalars['Int']>;
  /** [CURRENT] Latest known value for share exchange rate. Should reflect the same value as 'delegationExchangeRate' on the related Indexer */
  latestIndexerExchangeRate: Scalars['ANALYTICS__BigDecimal'];
  /** CURRENT tokens locked */
  lockedTokens: Scalars['BigInt'];
  /** Epoch the locked tokens get unlocked */
  lockedUntil: Scalars['Int'];
  /** [CURRENT] Original value of the delegation shares. Should be sharesAmount * personalExchangeRate */
  originalDelegation: Scalars['ANALYTICS__BigDecimal'];
  /** The rate this delegator paid for their shares (calculated using average cost basis). Used for rewards calculations */
  personalExchangeRate: Scalars['ANALYTICS__BigDecimal'];
  /** Realized rewards from undelegating and realizing a reward */
  realizedRewards: Scalars['ANALYTICS__BigDecimal'];
  /** Auxiliary entity used for batch updates */
  relation: Analytics__IndexerDelegatedStakeRelation;
  /** Shares owned in the delegator pool. Used to calculate total amount delegated */
  shareAmount: Scalars['BigInt'];
  /** [POSSIBLE DEPRECATION] CURRENT tokens staked. Old stakedTokens implementation renamed to totalStakedTokens (19/03/21) */
  stakedTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens delegated */
  totalStakedTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens undelegated */
  totalUnstakedTokens: Scalars['BigInt'];
  /** [CURRENT] Rewards not yet withdrawn, but already distributed. */
  unrealizedRewards: Scalars['ANALYTICS__BigDecimal'];
};

export type Analytics__DelegatedStakeDailyData = {
  __typename?: 'ANALYTICS__DelegatedStakeDailyData';
  /** [CURRENT] Current delegation for the delegator on this particular stake */
  currentDelegation: Scalars['ANALYTICS__BigDecimal'];
  /** Timestamp for the end of the day that this entity represents. UTC+0 */
  dayEnd: Scalars['BigInt'];
  /** Number of the day this entity represents. Day 0 is the network launch day. */
  dayNumber: Scalars['Int'];
  /** Timestamp for the start of the day that this entity represents. UTC+0 */
  dayStart: Scalars['BigInt'];
  /** Delegator entity that owns the original entity */
  delegator: Analytics__Delegator;
  /** <DELEGATOR ADDRESS>-<INDEXER ADDRESS>-<DAY NUMBER> */
  id: Scalars['ID'];
  /** Indexer entity where the delegation resides */
  indexer: Analytics__Indexer;
  /** [CURRENT] Latest delegationExchangeRate value for the indexer */
  latestIndexerExchangeRate: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Amount of locked tokens (undelegating) for this day and this indexer */
  lockedTokens: Scalars['BigInt'];
  /** [CURRENT] Original delegation for the delegator on this particular stake */
  originalDelegation: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Initial exchange rate for this delegator in this indexer at this day. It will increase as an average cost basis if the delegator adds more delegation. */
  personalExchangeRate: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Realized rewards for the delegator on this particular stake */
  realizedRewards: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Amount of shares for this day and this indexer */
  shareAmount: Scalars['BigInt'];
  /** Original entity that this daily data tracks */
  stake: Analytics__DelegatedStake;
  /** [CURRENT] Amount of staked tokens for this day and this indexer */
  stakedTokens: Scalars['BigInt'];
  /** [CURRENT] Unrealized rewards for the delegator on this particular stake */
  unrealizedRewards: Scalars['ANALYTICS__BigDecimal'];
};

export type Analytics__DelegatedStakeDailyData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  currentDelegation?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  currentDelegation_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  dayEnd?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd_lt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayNumber?: InputMaybe<Scalars['Int']>;
  dayNumber_gt?: InputMaybe<Scalars['Int']>;
  dayNumber_gte?: InputMaybe<Scalars['Int']>;
  dayNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  dayNumber_lt?: InputMaybe<Scalars['Int']>;
  dayNumber_lte?: InputMaybe<Scalars['Int']>;
  dayNumber_not?: InputMaybe<Scalars['Int']>;
  dayNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dayStart?: InputMaybe<Scalars['BigInt']>;
  dayStart_gt?: InputMaybe<Scalars['BigInt']>;
  dayStart_gte?: InputMaybe<Scalars['BigInt']>;
  dayStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayStart_lt?: InputMaybe<Scalars['BigInt']>;
  dayStart_lte?: InputMaybe<Scalars['BigInt']>;
  dayStart_not?: InputMaybe<Scalars['BigInt']>;
  dayStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<Analytics__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<Analytics__Indexer_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  latestIndexerExchangeRate?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  latestIndexerExchangeRate_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originalDelegation?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  originalDelegation_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  personalExchangeRate?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  personalExchangeRate_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  realizedRewards?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  realizedRewards_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  shareAmount?: InputMaybe<Scalars['BigInt']>;
  shareAmount_gt?: InputMaybe<Scalars['BigInt']>;
  shareAmount_gte?: InputMaybe<Scalars['BigInt']>;
  shareAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shareAmount_lt?: InputMaybe<Scalars['BigInt']>;
  shareAmount_lte?: InputMaybe<Scalars['BigInt']>;
  shareAmount_not?: InputMaybe<Scalars['BigInt']>;
  shareAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stake?: InputMaybe<Scalars['String']>;
  stake_?: InputMaybe<Analytics__DelegatedStake_Filter>;
  stake_contains?: InputMaybe<Scalars['String']>;
  stake_contains_nocase?: InputMaybe<Scalars['String']>;
  stake_ends_with?: InputMaybe<Scalars['String']>;
  stake_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stake_gt?: InputMaybe<Scalars['String']>;
  stake_gte?: InputMaybe<Scalars['String']>;
  stake_in?: InputMaybe<Array<Scalars['String']>>;
  stake_lt?: InputMaybe<Scalars['String']>;
  stake_lte?: InputMaybe<Scalars['String']>;
  stake_not?: InputMaybe<Scalars['String']>;
  stake_not_contains?: InputMaybe<Scalars['String']>;
  stake_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stake_not_ends_with?: InputMaybe<Scalars['String']>;
  stake_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stake_not_in?: InputMaybe<Array<Scalars['String']>>;
  stake_not_starts_with?: InputMaybe<Scalars['String']>;
  stake_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stake_starts_with?: InputMaybe<Scalars['String']>;
  stake_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unrealizedRewards?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  unrealizedRewards_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
};

export enum Analytics__DelegatedStakeDailyData_OrderBy {
  CurrentDelegation = 'currentDelegation',
  DayEnd = 'dayEnd',
  DayNumber = 'dayNumber',
  DayStart = 'dayStart',
  Delegator = 'delegator',
  Id = 'id',
  Indexer = 'indexer',
  LatestIndexerExchangeRate = 'latestIndexerExchangeRate',
  LockedTokens = 'lockedTokens',
  OriginalDelegation = 'originalDelegation',
  PersonalExchangeRate = 'personalExchangeRate',
  RealizedRewards = 'realizedRewards',
  ShareAmount = 'shareAmount',
  Stake = 'stake',
  StakedTokens = 'stakedTokens',
  UnrealizedRewards = 'unrealizedRewards'
}

export type Analytics__DelegatedStake_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  currentDelegation?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  currentDelegation_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<Analytics__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<Analytics__Indexer_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lastDelegatedAt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_not?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUndelegatedAt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUndelegatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_not?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  latestIndexerExchangeRate?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  latestIndexerExchangeRate_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedUntil?: InputMaybe<Scalars['Int']>;
  lockedUntil_gt?: InputMaybe<Scalars['Int']>;
  lockedUntil_gte?: InputMaybe<Scalars['Int']>;
  lockedUntil_in?: InputMaybe<Array<Scalars['Int']>>;
  lockedUntil_lt?: InputMaybe<Scalars['Int']>;
  lockedUntil_lte?: InputMaybe<Scalars['Int']>;
  lockedUntil_not?: InputMaybe<Scalars['Int']>;
  lockedUntil_not_in?: InputMaybe<Array<Scalars['Int']>>;
  originalDelegation?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  originalDelegation_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  personalExchangeRate?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  personalExchangeRate_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  realizedRewards?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  realizedRewards_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  relation?: InputMaybe<Scalars['String']>;
  relation_?: InputMaybe<Analytics__IndexerDelegatedStakeRelation_Filter>;
  relation_contains?: InputMaybe<Scalars['String']>;
  relation_contains_nocase?: InputMaybe<Scalars['String']>;
  relation_ends_with?: InputMaybe<Scalars['String']>;
  relation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  relation_gt?: InputMaybe<Scalars['String']>;
  relation_gte?: InputMaybe<Scalars['String']>;
  relation_in?: InputMaybe<Array<Scalars['String']>>;
  relation_lt?: InputMaybe<Scalars['String']>;
  relation_lte?: InputMaybe<Scalars['String']>;
  relation_not?: InputMaybe<Scalars['String']>;
  relation_not_contains?: InputMaybe<Scalars['String']>;
  relation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  relation_not_ends_with?: InputMaybe<Scalars['String']>;
  relation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  relation_not_in?: InputMaybe<Array<Scalars['String']>>;
  relation_not_starts_with?: InputMaybe<Scalars['String']>;
  relation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  relation_starts_with?: InputMaybe<Scalars['String']>;
  relation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  shareAmount?: InputMaybe<Scalars['BigInt']>;
  shareAmount_gt?: InputMaybe<Scalars['BigInt']>;
  shareAmount_gte?: InputMaybe<Scalars['BigInt']>;
  shareAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shareAmount_lt?: InputMaybe<Scalars['BigInt']>;
  shareAmount_lte?: InputMaybe<Scalars['BigInt']>;
  shareAmount_not?: InputMaybe<Scalars['BigInt']>;
  shareAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalStakedTokens?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalStakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokens?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unrealizedRewards?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  unrealizedRewards_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
};

export enum Analytics__DelegatedStake_OrderBy {
  CreatedAt = 'createdAt',
  CurrentDelegation = 'currentDelegation',
  Delegator = 'delegator',
  Id = 'id',
  Indexer = 'indexer',
  LastDelegatedAt = 'lastDelegatedAt',
  LastUndelegatedAt = 'lastUndelegatedAt',
  LatestIndexerExchangeRate = 'latestIndexerExchangeRate',
  LockedTokens = 'lockedTokens',
  LockedUntil = 'lockedUntil',
  OriginalDelegation = 'originalDelegation',
  PersonalExchangeRate = 'personalExchangeRate',
  RealizedRewards = 'realizedRewards',
  Relation = 'relation',
  ShareAmount = 'shareAmount',
  StakedTokens = 'stakedTokens',
  TotalStakedTokens = 'totalStakedTokens',
  TotalUnstakedTokens = 'totalUnstakedTokens',
  UnrealizedRewards = 'unrealizedRewards'
}

/** Delegator with all their delegated stakes towards Indexers */
export type Analytics__Delegator = {
  __typename?: 'ANALYTICS__Delegator';
  account: Analytics__GraphAccount;
  /** Active DelegatedStake entity count. Active means it still has GRT delegated */
  activeStakesCount: Scalars['Int'];
  /** Time created at */
  createdAt: Scalars['Int'];
  /** [CURRENT] Current delegation amount across all delegated stakes. This is updated based on the continuous restake from delegation */
  currentDelegation: Scalars['ANALYTICS__BigDecimal'];
  /** List of all the daily data entities that exists for this delegator */
  dailyData: Array<Analytics__DelegatorDailyData>;
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** Delegator address */
  id: Scalars['ID'];
  /** Last time this delegator delegated towards any indexer */
  lastDelegatedAt?: Maybe<Scalars['Int']>;
  /** DelegatedStake entity related to the lastDelegatedAt field */
  lastDelegation?: Maybe<Analytics__DelegatedStake>;
  /** Last time this delegator undelegated from any indexer */
  lastUndelegatedAt?: Maybe<Scalars['Int']>;
  /** DelegatedStake entity related to the lastUndelegatedAt field */
  lastUndelegation?: Maybe<Analytics__DelegatedStake>;
  /** Current amount of locked tokens (undelegating) across all DelegatedStakes */
  lockedTokens: Scalars['BigInt'];
  /** [CURRENT] Original amount delegated across all delegated stakes. */
  originalDelegation: Scalars['ANALYTICS__BigDecimal'];
  /** [POSSIBLE DEPRECATION] Current amount of staked tokens across all DelegatedStakes */
  stakedTokens: Scalars['BigInt'];
  /** Stakes of this delegator */
  stakes: Array<Analytics__DelegatedStake>;
  /** Total DelegatedStake entity count (Active and inactive) */
  stakesCount: Scalars['Int'];
  /** [CURRENT] Total realized rewards across all delegated stakes. Realized rewards are added when undelegating and realizing a profit */
  totalRealizedRewards: Scalars['ANALYTICS__BigDecimal'];
  /** CUMULATIVE staked tokens in DelegatorStakes of this Delegator */
  totalStakedTokens: Scalars['BigInt'];
  /** [CURRENT] Total unrealized rewards across all delegated stakes. */
  totalUnrealizedRewards: Scalars['ANALYTICS__BigDecimal'];
  /** CUMULATIVE unstaked tokens in DelegatorStakes of this Delegator */
  totalUnstakedTokens: Scalars['BigInt'];
};


/** Delegator with all their delegated stakes towards Indexers */
export type Analytics__DelegatorDailyDataArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__DelegatorDailyData_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__DelegatorDailyData_Filter>;
};


/** Delegator with all their delegated stakes towards Indexers */
export type Analytics__DelegatorStakesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__DelegatedStake_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__DelegatedStake_Filter>;
};

export type Analytics__DelegatorDailyData = {
  __typename?: 'ANALYTICS__DelegatorDailyData';
  /** [CURRENT] Amount of active DelegatedStake entities this Delegator had at this point in time */
  activeStakesCount: Scalars['Int'];
  /** [CURRENT] Current delegation for the delegator across all stakes */
  currentDelegation: Scalars['ANALYTICS__BigDecimal'];
  /** Timestamp for the end of the day that this entity represents. UTC+0 */
  dayEnd: Scalars['BigInt'];
  /** Number of the day this entity represents. Day 0 is the network launch day. */
  dayNumber: Scalars['Int'];
  /** Timestamp for the start of the day that this entity represents. UTC+0 */
  dayStart: Scalars['BigInt'];
  /** Original entity that this daily data tracks */
  delegator: Analytics__Delegator;
  /** <DELEGATOR ADDRESS>-<DAY NUMBER> */
  id: Scalars['ID'];
  /** [CURRENT] Amount of locked (undelegating) tokens for this day across all stakes */
  lockedTokens: Scalars['BigInt'];
  /** [CURRENT] Amount of staked tokens for this day across all stakes */
  stakedTokens: Scalars['BigInt'];
  /** [CURRENT] Total amount of DelegatedStake entities this Delegator historically had at this point in time */
  stakesCount: Scalars['Int'];
  /** [CURRENT] Aggregation of realized rewards across all stakes */
  totalRealizedRewards: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Aggregation of unrealized rewards across all stakes */
  totalUnrealizedRewards: Scalars['ANALYTICS__BigDecimal'];
};

export type Analytics__DelegatorDailyData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  activeStakesCount?: InputMaybe<Scalars['Int']>;
  activeStakesCount_gt?: InputMaybe<Scalars['Int']>;
  activeStakesCount_gte?: InputMaybe<Scalars['Int']>;
  activeStakesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeStakesCount_lt?: InputMaybe<Scalars['Int']>;
  activeStakesCount_lte?: InputMaybe<Scalars['Int']>;
  activeStakesCount_not?: InputMaybe<Scalars['Int']>;
  activeStakesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  currentDelegation?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  currentDelegation_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  dayEnd?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd_lt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayNumber?: InputMaybe<Scalars['Int']>;
  dayNumber_gt?: InputMaybe<Scalars['Int']>;
  dayNumber_gte?: InputMaybe<Scalars['Int']>;
  dayNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  dayNumber_lt?: InputMaybe<Scalars['Int']>;
  dayNumber_lte?: InputMaybe<Scalars['Int']>;
  dayNumber_not?: InputMaybe<Scalars['Int']>;
  dayNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dayStart?: InputMaybe<Scalars['BigInt']>;
  dayStart_gt?: InputMaybe<Scalars['BigInt']>;
  dayStart_gte?: InputMaybe<Scalars['BigInt']>;
  dayStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayStart_lt?: InputMaybe<Scalars['BigInt']>;
  dayStart_lte?: InputMaybe<Scalars['BigInt']>;
  dayStart_not?: InputMaybe<Scalars['BigInt']>;
  dayStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<Analytics__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakesCount?: InputMaybe<Scalars['Int']>;
  stakesCount_gt?: InputMaybe<Scalars['Int']>;
  stakesCount_gte?: InputMaybe<Scalars['Int']>;
  stakesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  stakesCount_lt?: InputMaybe<Scalars['Int']>;
  stakesCount_lte?: InputMaybe<Scalars['Int']>;
  stakesCount_not?: InputMaybe<Scalars['Int']>;
  stakesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalRealizedRewards?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalRealizedRewards_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalUnrealizedRewards?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalUnrealizedRewards_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
};

export enum Analytics__DelegatorDailyData_OrderBy {
  ActiveStakesCount = 'activeStakesCount',
  CurrentDelegation = 'currentDelegation',
  DayEnd = 'dayEnd',
  DayNumber = 'dayNumber',
  DayStart = 'dayStart',
  Delegator = 'delegator',
  Id = 'id',
  LockedTokens = 'lockedTokens',
  StakedTokens = 'stakedTokens',
  StakesCount = 'stakesCount',
  TotalRealizedRewards = 'totalRealizedRewards',
  TotalUnrealizedRewards = 'totalUnrealizedRewards'
}

export type Analytics__DelegatorDelegatedStakeDailyRelation = {
  __typename?: 'ANALYTICS__DelegatorDelegatedStakeDailyRelation';
  /** Timestamp for the end of the day that this entity represents. UTC+0 */
  dayEnd: Scalars['BigInt'];
  /** Number of the day this entity represents. Day 0 is the network launch day. */
  dayNumber: Scalars['Int'];
  /** Timestamp for the start of the day that this entity represents. UTC+0 */
  dayStart: Scalars['BigInt'];
  /** DailyData entity that tracks the DelegatedStake for this specific day */
  delegatedStakeDailyData: Analytics__DelegatedStakeDailyData;
  /** Delegator entity that forms the relation. */
  delegator: Analytics__Delegator;
  /** DailyData entity that tracks the Delegator for this specific day */
  delegatorDailyData: Analytics__DelegatorDailyData;
  /** Auxiliary entity to avoid using arrays for many-to-many relation tracking. Compounds the delegator id with an autoincremental number. */
  id: Scalars['ID'];
  /** DelegatedStake entity that forms the relation */
  stake: Analytics__DelegatedStake;
};

export type Analytics__DelegatorDelegatedStakeDailyRelation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  dayEnd?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd_lt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayNumber?: InputMaybe<Scalars['Int']>;
  dayNumber_gt?: InputMaybe<Scalars['Int']>;
  dayNumber_gte?: InputMaybe<Scalars['Int']>;
  dayNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  dayNumber_lt?: InputMaybe<Scalars['Int']>;
  dayNumber_lte?: InputMaybe<Scalars['Int']>;
  dayNumber_not?: InputMaybe<Scalars['Int']>;
  dayNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dayStart?: InputMaybe<Scalars['BigInt']>;
  dayStart_gt?: InputMaybe<Scalars['BigInt']>;
  dayStart_gte?: InputMaybe<Scalars['BigInt']>;
  dayStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayStart_lt?: InputMaybe<Scalars['BigInt']>;
  dayStart_lte?: InputMaybe<Scalars['BigInt']>;
  dayStart_not?: InputMaybe<Scalars['BigInt']>;
  dayStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedStakeDailyData?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_?: InputMaybe<Analytics__DelegatedStakeDailyData_Filter>;
  delegatedStakeDailyData_contains?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_contains_nocase?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_ends_with?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_gt?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_gte?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_in?: InputMaybe<Array<Scalars['String']>>;
  delegatedStakeDailyData_lt?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_lte?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_not?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_not_contains?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_not_ends_with?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegatedStakeDailyData_not_starts_with?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_starts_with?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator?: InputMaybe<Scalars['String']>;
  delegatorDailyData?: InputMaybe<Scalars['String']>;
  delegatorDailyData_?: InputMaybe<Analytics__DelegatorDailyData_Filter>;
  delegatorDailyData_contains?: InputMaybe<Scalars['String']>;
  delegatorDailyData_contains_nocase?: InputMaybe<Scalars['String']>;
  delegatorDailyData_ends_with?: InputMaybe<Scalars['String']>;
  delegatorDailyData_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegatorDailyData_gt?: InputMaybe<Scalars['String']>;
  delegatorDailyData_gte?: InputMaybe<Scalars['String']>;
  delegatorDailyData_in?: InputMaybe<Array<Scalars['String']>>;
  delegatorDailyData_lt?: InputMaybe<Scalars['String']>;
  delegatorDailyData_lte?: InputMaybe<Scalars['String']>;
  delegatorDailyData_not?: InputMaybe<Scalars['String']>;
  delegatorDailyData_not_contains?: InputMaybe<Scalars['String']>;
  delegatorDailyData_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegatorDailyData_not_ends_with?: InputMaybe<Scalars['String']>;
  delegatorDailyData_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegatorDailyData_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegatorDailyData_not_starts_with?: InputMaybe<Scalars['String']>;
  delegatorDailyData_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegatorDailyData_starts_with?: InputMaybe<Scalars['String']>;
  delegatorDailyData_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<Analytics__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stake?: InputMaybe<Scalars['String']>;
  stake_?: InputMaybe<Analytics__DelegatedStake_Filter>;
  stake_contains?: InputMaybe<Scalars['String']>;
  stake_contains_nocase?: InputMaybe<Scalars['String']>;
  stake_ends_with?: InputMaybe<Scalars['String']>;
  stake_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stake_gt?: InputMaybe<Scalars['String']>;
  stake_gte?: InputMaybe<Scalars['String']>;
  stake_in?: InputMaybe<Array<Scalars['String']>>;
  stake_lt?: InputMaybe<Scalars['String']>;
  stake_lte?: InputMaybe<Scalars['String']>;
  stake_not?: InputMaybe<Scalars['String']>;
  stake_not_contains?: InputMaybe<Scalars['String']>;
  stake_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stake_not_ends_with?: InputMaybe<Scalars['String']>;
  stake_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stake_not_in?: InputMaybe<Array<Scalars['String']>>;
  stake_not_starts_with?: InputMaybe<Scalars['String']>;
  stake_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stake_starts_with?: InputMaybe<Scalars['String']>;
  stake_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Analytics__DelegatorDelegatedStakeDailyRelation_OrderBy {
  DayEnd = 'dayEnd',
  DayNumber = 'dayNumber',
  DayStart = 'dayStart',
  DelegatedStakeDailyData = 'delegatedStakeDailyData',
  Delegator = 'delegator',
  DelegatorDailyData = 'delegatorDailyData',
  Id = 'id',
  Stake = 'stake'
}

export type Analytics__Delegator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Analytics__GraphAccount_Filter>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activeStakesCount?: InputMaybe<Scalars['Int']>;
  activeStakesCount_gt?: InputMaybe<Scalars['Int']>;
  activeStakesCount_gte?: InputMaybe<Scalars['Int']>;
  activeStakesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeStakesCount_lt?: InputMaybe<Scalars['Int']>;
  activeStakesCount_lte?: InputMaybe<Scalars['Int']>;
  activeStakesCount_not?: InputMaybe<Scalars['Int']>;
  activeStakesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  currentDelegation?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  currentDelegation_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  dailyData_?: InputMaybe<Analytics__DelegatorDailyData_Filter>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastDelegatedAt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_not?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegation?: InputMaybe<Scalars['String']>;
  lastDelegation_?: InputMaybe<Analytics__DelegatedStake_Filter>;
  lastDelegation_contains?: InputMaybe<Scalars['String']>;
  lastDelegation_contains_nocase?: InputMaybe<Scalars['String']>;
  lastDelegation_ends_with?: InputMaybe<Scalars['String']>;
  lastDelegation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lastDelegation_gt?: InputMaybe<Scalars['String']>;
  lastDelegation_gte?: InputMaybe<Scalars['String']>;
  lastDelegation_in?: InputMaybe<Array<Scalars['String']>>;
  lastDelegation_lt?: InputMaybe<Scalars['String']>;
  lastDelegation_lte?: InputMaybe<Scalars['String']>;
  lastDelegation_not?: InputMaybe<Scalars['String']>;
  lastDelegation_not_contains?: InputMaybe<Scalars['String']>;
  lastDelegation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lastDelegation_not_ends_with?: InputMaybe<Scalars['String']>;
  lastDelegation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lastDelegation_not_in?: InputMaybe<Array<Scalars['String']>>;
  lastDelegation_not_starts_with?: InputMaybe<Scalars['String']>;
  lastDelegation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lastDelegation_starts_with?: InputMaybe<Scalars['String']>;
  lastDelegation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lastUndelegatedAt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUndelegatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_not?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUndelegation?: InputMaybe<Scalars['String']>;
  lastUndelegation_?: InputMaybe<Analytics__DelegatedStake_Filter>;
  lastUndelegation_contains?: InputMaybe<Scalars['String']>;
  lastUndelegation_contains_nocase?: InputMaybe<Scalars['String']>;
  lastUndelegation_ends_with?: InputMaybe<Scalars['String']>;
  lastUndelegation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lastUndelegation_gt?: InputMaybe<Scalars['String']>;
  lastUndelegation_gte?: InputMaybe<Scalars['String']>;
  lastUndelegation_in?: InputMaybe<Array<Scalars['String']>>;
  lastUndelegation_lt?: InputMaybe<Scalars['String']>;
  lastUndelegation_lte?: InputMaybe<Scalars['String']>;
  lastUndelegation_not?: InputMaybe<Scalars['String']>;
  lastUndelegation_not_contains?: InputMaybe<Scalars['String']>;
  lastUndelegation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lastUndelegation_not_ends_with?: InputMaybe<Scalars['String']>;
  lastUndelegation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lastUndelegation_not_in?: InputMaybe<Array<Scalars['String']>>;
  lastUndelegation_not_starts_with?: InputMaybe<Scalars['String']>;
  lastUndelegation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lastUndelegation_starts_with?: InputMaybe<Scalars['String']>;
  lastUndelegation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lockedTokens?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originalDelegation?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  originalDelegation_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakesCount?: InputMaybe<Scalars['Int']>;
  stakesCount_gt?: InputMaybe<Scalars['Int']>;
  stakesCount_gte?: InputMaybe<Scalars['Int']>;
  stakesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  stakesCount_lt?: InputMaybe<Scalars['Int']>;
  stakesCount_lte?: InputMaybe<Scalars['Int']>;
  stakesCount_not?: InputMaybe<Scalars['Int']>;
  stakesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stakes_?: InputMaybe<Analytics__DelegatedStake_Filter>;
  totalRealizedRewards?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalRealizedRewards_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalStakedTokens?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalStakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnrealizedRewards?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalUnrealizedRewards_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalUnstakedTokens?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Analytics__Delegator_OrderBy {
  Account = 'account',
  ActiveStakesCount = 'activeStakesCount',
  CreatedAt = 'createdAt',
  CurrentDelegation = 'currentDelegation',
  DailyData = 'dailyData',
  DefaultDisplayName = 'defaultDisplayName',
  Id = 'id',
  LastDelegatedAt = 'lastDelegatedAt',
  LastDelegation = 'lastDelegation',
  LastUndelegatedAt = 'lastUndelegatedAt',
  LastUndelegation = 'lastUndelegation',
  LockedTokens = 'lockedTokens',
  OriginalDelegation = 'originalDelegation',
  StakedTokens = 'stakedTokens',
  Stakes = 'stakes',
  StakesCount = 'stakesCount',
  TotalRealizedRewards = 'totalRealizedRewards',
  TotalStakedTokens = 'totalStakedTokens',
  TotalUnrealizedRewards = 'totalUnrealizedRewards',
  TotalUnstakedTokens = 'totalUnstakedTokens'
}

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Analytics__GraphAccount = {
  __typename?: 'ANALYTICS__GraphAccount';
  /** Graph token balance */
  balance: Scalars['BigInt'];
  /** Main repository of code for the graph account */
  codeRepository?: Maybe<Scalars['String']>;
  /** Time the account was created */
  createdAt: Scalars['Int'];
  /** Amount this account has approved staking to transfer their GRT */
  curationApproval: Scalars['BigInt'];
  /** Curator fields for this GraphAccount. Null if never curated */
  curator?: Maybe<Analytics__Curator>;
  /** Default display name is the current default name. Used for filtered queries in the explorer */
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** Default name the graph account has chosen */
  defaultName?: Maybe<Analytics__GraphAccountName>;
  /** Delegator fields for this GraphAccount. Null if never delegated */
  delegator?: Maybe<Analytics__Delegator>;
  /** Description of the graph account */
  description?: Maybe<Scalars['String']>;
  /** Time that this graph account became a developer */
  developerCreatedAt?: Maybe<Scalars['Int']>;
  /** Display name. Not unique */
  displayName?: Maybe<Scalars['String']>;
  /** Amount this account has approved the GNS to transfer their GRT */
  gnsApproval: Scalars['BigInt'];
  /** Graph account ID */
  id: Scalars['ID'];
  /** Image URL */
  image?: Maybe<Scalars['String']>;
  /** Indexer fields for this GraphAccount. Null if never indexed */
  indexer?: Maybe<Analytics__Indexer>;
  /** True if it is an organization. False if it is an individual */
  isOrganization?: Maybe<Scalars['Boolean']>;
  /** IPFS hash with account metadata details */
  metadataHash?: Maybe<Scalars['ANALYTICS__Bytes']>;
  /** Name signal transactions created by this GraphAccount */
  nameSignalTransactions: Array<Analytics__NameSignalTransaction>;
  /** All names this graph account has claimed from all name systems */
  names: Array<Analytics__GraphAccountName>;
  /** Operator of other Graph Accounts */
  operatorOf: Array<Analytics__GraphAccount>;
  /** Operators of this Graph Accounts */
  operators: Array<Analytics__GraphAccount>;
  /** Amount this account has approved curation to transfer their GRT */
  stakingApproval: Scalars['BigInt'];
  /** Subgraphs the graph account owns */
  subgraphs: Array<Analytics__Subgraph>;
  /** Website URL */
  website?: Maybe<Scalars['String']>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Analytics__GraphAccountNameSignalTransactionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__NameSignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__NameSignalTransaction_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Analytics__GraphAccountNamesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__GraphAccountName_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__GraphAccountName_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Analytics__GraphAccountOperatorOfArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__GraphAccount_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__GraphAccount_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Analytics__GraphAccountOperatorsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__GraphAccount_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__GraphAccount_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Analytics__GraphAccountSubgraphsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Subgraph_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__Subgraph_Filter>;
};

/**
 * A name chosen by a Graph Account from a Name System such as ENS. This allows Graph Accounts to be
 * recognized by name, rather than just an Ethereum address
 */
export type Analytics__GraphAccountName = {
  __typename?: 'ANALYTICS__GraphAccountName';
  /** The graph account that owned the name when it was linked in the graph network */
  graphAccount?: Maybe<Analytics__GraphAccount>;
  /** Name system concatenated with the unique ID of the name system */
  id: Scalars['ID'];
  /** Name from the system */
  name: Scalars['String'];
  /** Name system for this name */
  nameSystem: Analytics__NameSystem;
};

export type Analytics__GraphAccountName_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  graphAccount?: InputMaybe<Scalars['String']>;
  graphAccount_?: InputMaybe<Analytics__GraphAccount_Filter>;
  graphAccount_contains?: InputMaybe<Scalars['String']>;
  graphAccount_contains_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_ends_with?: InputMaybe<Scalars['String']>;
  graphAccount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_gt?: InputMaybe<Scalars['String']>;
  graphAccount_gte?: InputMaybe<Scalars['String']>;
  graphAccount_in?: InputMaybe<Array<Scalars['String']>>;
  graphAccount_lt?: InputMaybe<Scalars['String']>;
  graphAccount_lte?: InputMaybe<Scalars['String']>;
  graphAccount_not?: InputMaybe<Scalars['String']>;
  graphAccount_not_contains?: InputMaybe<Scalars['String']>;
  graphAccount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_not_ends_with?: InputMaybe<Scalars['String']>;
  graphAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  graphAccount_not_starts_with?: InputMaybe<Scalars['String']>;
  graphAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_starts_with?: InputMaybe<Scalars['String']>;
  graphAccount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  nameSystem?: InputMaybe<Analytics__NameSystem>;
  nameSystem_in?: InputMaybe<Array<Analytics__NameSystem>>;
  nameSystem_not?: InputMaybe<Analytics__NameSystem>;
  nameSystem_not_in?: InputMaybe<Array<Analytics__NameSystem>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Analytics__GraphAccountName_OrderBy {
  GraphAccount = 'graphAccount',
  Id = 'id',
  Name = 'name',
  NameSystem = 'nameSystem'
}

export type Analytics__GraphAccount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  codeRepository?: InputMaybe<Scalars['String']>;
  codeRepository_contains?: InputMaybe<Scalars['String']>;
  codeRepository_contains_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_ends_with?: InputMaybe<Scalars['String']>;
  codeRepository_ends_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_gt?: InputMaybe<Scalars['String']>;
  codeRepository_gte?: InputMaybe<Scalars['String']>;
  codeRepository_in?: InputMaybe<Array<Scalars['String']>>;
  codeRepository_lt?: InputMaybe<Scalars['String']>;
  codeRepository_lte?: InputMaybe<Scalars['String']>;
  codeRepository_not?: InputMaybe<Scalars['String']>;
  codeRepository_not_contains?: InputMaybe<Scalars['String']>;
  codeRepository_not_contains_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_ends_with?: InputMaybe<Scalars['String']>;
  codeRepository_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_in?: InputMaybe<Array<Scalars['String']>>;
  codeRepository_not_starts_with?: InputMaybe<Scalars['String']>;
  codeRepository_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_starts_with?: InputMaybe<Scalars['String']>;
  codeRepository_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  curationApproval?: InputMaybe<Scalars['BigInt']>;
  curationApproval_gt?: InputMaybe<Scalars['BigInt']>;
  curationApproval_gte?: InputMaybe<Scalars['BigInt']>;
  curationApproval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curationApproval_lt?: InputMaybe<Scalars['BigInt']>;
  curationApproval_lte?: InputMaybe<Scalars['BigInt']>;
  curationApproval_not?: InputMaybe<Scalars['BigInt']>;
  curationApproval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curator?: InputMaybe<Scalars['String']>;
  curator_?: InputMaybe<Analytics__Curator_Filter>;
  curator_contains?: InputMaybe<Scalars['String']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_ends_with?: InputMaybe<Scalars['String']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_gt?: InputMaybe<Scalars['String']>;
  curator_gte?: InputMaybe<Scalars['String']>;
  curator_in?: InputMaybe<Array<Scalars['String']>>;
  curator_lt?: InputMaybe<Scalars['String']>;
  curator_lte?: InputMaybe<Scalars['String']>;
  curator_not?: InputMaybe<Scalars['String']>;
  curator_not_contains?: InputMaybe<Scalars['String']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_in?: InputMaybe<Array<Scalars['String']>>;
  curator_not_starts_with?: InputMaybe<Scalars['String']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_starts_with?: InputMaybe<Scalars['String']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName?: InputMaybe<Scalars['String']>;
  defaultName_?: InputMaybe<Analytics__GraphAccountName_Filter>;
  defaultName_contains?: InputMaybe<Scalars['String']>;
  defaultName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultName_ends_with?: InputMaybe<Scalars['String']>;
  defaultName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_gt?: InputMaybe<Scalars['String']>;
  defaultName_gte?: InputMaybe<Scalars['String']>;
  defaultName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultName_lt?: InputMaybe<Scalars['String']>;
  defaultName_lte?: InputMaybe<Scalars['String']>;
  defaultName_not?: InputMaybe<Scalars['String']>;
  defaultName_not_contains?: InputMaybe<Scalars['String']>;
  defaultName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_starts_with?: InputMaybe<Scalars['String']>;
  defaultName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<Analytics__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  developerCreatedAt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_gt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_gte?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  developerCreatedAt_lt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_lte?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_not?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  displayName?: InputMaybe<Scalars['String']>;
  displayName_contains?: InputMaybe<Scalars['String']>;
  displayName_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_ends_with?: InputMaybe<Scalars['String']>;
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_gt?: InputMaybe<Scalars['String']>;
  displayName_gte?: InputMaybe<Scalars['String']>;
  displayName_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_lt?: InputMaybe<Scalars['String']>;
  displayName_lte?: InputMaybe<Scalars['String']>;
  displayName_not?: InputMaybe<Scalars['String']>;
  displayName_not_contains?: InputMaybe<Scalars['String']>;
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_not_starts_with?: InputMaybe<Scalars['String']>;
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_starts_with?: InputMaybe<Scalars['String']>;
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  gnsApproval?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_gt?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_gte?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gnsApproval_lt?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_lte?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_not?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  image?: InputMaybe<Scalars['String']>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<Analytics__Indexer_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  isOrganization?: InputMaybe<Scalars['Boolean']>;
  isOrganization_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isOrganization_not?: InputMaybe<Scalars['Boolean']>;
  isOrganization_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  metadataHash?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  metadataHash_lt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  nameSignalTransactions_?: InputMaybe<Analytics__NameSignalTransaction_Filter>;
  names_?: InputMaybe<Analytics__GraphAccountName_Filter>;
  operatorOf_?: InputMaybe<Analytics__GraphAccount_Filter>;
  operators?: InputMaybe<Array<Scalars['String']>>;
  operators_?: InputMaybe<Analytics__GraphAccount_Filter>;
  operators_contains?: InputMaybe<Array<Scalars['String']>>;
  operators_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  operators_not?: InputMaybe<Array<Scalars['String']>>;
  operators_not_contains?: InputMaybe<Array<Scalars['String']>>;
  operators_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  stakingApproval?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_gt?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_gte?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingApproval_lt?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_lte?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_not?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphs_?: InputMaybe<Analytics__Subgraph_Filter>;
  website?: InputMaybe<Scalars['String']>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_contains_nocase?: InputMaybe<Scalars['String']>;
  website_ends_with?: InputMaybe<Scalars['String']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_gt?: InputMaybe<Scalars['String']>;
  website_gte?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<Scalars['String']>>;
  website_lt?: InputMaybe<Scalars['String']>;
  website_lte?: InputMaybe<Scalars['String']>;
  website_not?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']>;
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_starts_with?: InputMaybe<Scalars['String']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Analytics__GraphAccount_OrderBy {
  Balance = 'balance',
  CodeRepository = 'codeRepository',
  CreatedAt = 'createdAt',
  CurationApproval = 'curationApproval',
  Curator = 'curator',
  DefaultDisplayName = 'defaultDisplayName',
  DefaultName = 'defaultName',
  Delegator = 'delegator',
  Description = 'description',
  DeveloperCreatedAt = 'developerCreatedAt',
  DisplayName = 'displayName',
  GnsApproval = 'gnsApproval',
  Id = 'id',
  Image = 'image',
  Indexer = 'indexer',
  IsOrganization = 'isOrganization',
  MetadataHash = 'metadataHash',
  NameSignalTransactions = 'nameSignalTransactions',
  Names = 'names',
  OperatorOf = 'operatorOf',
  Operators = 'operators',
  StakingApproval = 'stakingApproval',
  Subgraphs = 'subgraphs',
  Website = 'website'
}

/** Graph Network global parameters and contract addresses */
export type Analytics__GraphNetwork = {
  __typename?: 'ANALYTICS__GraphNetwork';
  /** Total curators */
  curatorCount: Scalars['Int'];
  /** Default reserve ratio for all subgraphs. In parts per million */
  defaultReserveRatio: Scalars['Int'];
  /** Ratio of max staked delegation tokens to indexers stake that earns rewards */
  delegationRatio: Scalars['Int'];
  /** Total delegators */
  delegatorCount: Scalars['Int'];
  /** ID is set to 1 */
  id: Scalars['ID'];
  /** Total indexers */
  indexerCount: Scalars['Int'];
  /** Number of indexers that currently have some stake in the protocol */
  stakedIndexersCount: Scalars['Int'];
  /** Total subgraphs */
  subgraphCount: Scalars['Int'];
  /** Total subgraphs */
  subgraphDeploymentCount: Scalars['Int'];
  /** Total query fees payed to curators */
  totalCuratorQueryFees: Scalars['BigInt'];
  /** Total delegated tokens in the protocol */
  totalDelegatedTokens: Scalars['BigInt'];
  /** Total query fees rebates claimed by delegators */
  totalDelegatorQueryFeeRebates: Scalars['BigInt'];
  /** Total query fees rebates claimed by indexers */
  totalIndexerQueryFeeRebates: Scalars['BigInt'];
  /** Total query fees collected by indexers */
  totalIndexerQueryFeesCollected: Scalars['BigInt'];
  /** Total indexing rewards minted to Delegators */
  totalIndexingDelegatorRewards: Scalars['BigInt'];
  /** Total indexing rewards minted to Indexers */
  totalIndexingIndexerRewards: Scalars['BigInt'];
  /** Total indexing rewards minted */
  totalIndexingRewards: Scalars['BigInt'];
  /** Total query fees generated in the network */
  totalQueryFees: Scalars['BigInt'];
  /** Total protocol taxes applied to the query fees */
  totalTaxedQueryFees: Scalars['BigInt'];
  /** Total GRT currently in allocation */
  totalTokensAllocated: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Total tokens that are settled and waiting to be claimed */
  totalTokensClaimable: Scalars['BigInt'];
  /** The total amount of GRT signalled in the Curation contract */
  totalTokensSignalled: Scalars['BigInt'];
  /** The total amount of GRT staked in the staking contract */
  totalTokensStaked: Scalars['BigInt'];
  /** Total unclaimed rebates. Includes unclaimed rebates and rebates lost in cobbs douglas  */
  totalUnclaimedQueryFeeRebates: Scalars['BigInt'];
  /** Total tokens that are currently locked or withdrawable in the network from unstaking */
  totalUnstakedTokensLocked: Scalars['BigInt'];
};

export type Analytics__GraphNetworkDailyData = {
  __typename?: 'ANALYTICS__GraphNetworkDailyData';
  /** [CUMULATIVE] Total curators */
  curatorCount: Scalars['Int'];
  /** Timestamp for the end of the day that this entity represents. UTC+0 */
  dayEnd: Scalars['BigInt'];
  /** Number of the day this entity represents. Day 0 is the network launch day. */
  dayNumber: Scalars['Int'];
  /** Timestamp for the start of the day that this entity represents. UTC+0 */
  dayStart: Scalars['BigInt'];
  /** [CUMULATIVE] Default reserve ratio for all subgraphs. In parts per million */
  defaultReserveRatio: Scalars['Int'];
  /** [CUMULATIVE] Ratio of max staked delegation tokens to indexers stake that earns rewards */
  delegationRatio: Scalars['Int'];
  /** [CUMULATIVE] Total delegators */
  delegatorCount: Scalars['Int'];
  /** <SUBGRAPH ID>-<DAY NUMBER> */
  id: Scalars['ID'];
  /** [CUMULATIVE] Total indexers */
  indexerCount: Scalars['Int'];
  /** Original entity that the daily data entity tracks */
  network: Analytics__GraphNetwork;
  /** [CUMULATIVE] Number of indexers that currently have some stake in the protocol */
  stakedIndexersCount: Scalars['Int'];
  /** [CUMULATIVE] Total subgraphs */
  subgraphCount: Scalars['Int'];
  /** [CUMULATIVE] Total subgraphs */
  subgraphDeploymentCount: Scalars['Int'];
  /** [CUMULATIVE] Total query fees payed to curators */
  totalCuratorQueryFees: Scalars['BigInt'];
  /** [CUMULATIVE] Total delegated tokens in the protocol */
  totalDelegatedTokens: Scalars['BigInt'];
  /** [CUMULATIVE] Total query fees rebates claimed by delegators */
  totalDelegatorQueryFeeRebates: Scalars['BigInt'];
  /** [CUMULATIVE] Total query fees rebates claimed by indexers */
  totalIndexerQueryFeeRebates: Scalars['BigInt'];
  /** [CUMULATIVE] Total query fees collected by indexers */
  totalIndexerQueryFeesCollected: Scalars['BigInt'];
  /** [CUMULATIVE] Total indexing rewards minted to Delegators */
  totalIndexingDelegatorRewards: Scalars['BigInt'];
  /** [CUMULATIVE] Total indexing rewards minted to Indexers */
  totalIndexingIndexerRewards: Scalars['BigInt'];
  /** [CUMULATIVE] Total indexing rewards minted */
  totalIndexingRewards: Scalars['BigInt'];
  /** [CUMULATIVE] Total query fees generated in the network */
  totalQueryFees: Scalars['BigInt'];
  /** [CUMULATIVE] Total protocol taxes applied to the query fees */
  totalTaxedQueryFees: Scalars['BigInt'];
  /** [CUMULATIVE] Total GRT currently in allocation */
  totalTokensAllocated: Scalars['BigInt'];
  /** [CUMULATIVE] The total amount of GRT signalled in the Curation contract */
  totalTokensSignalled: Scalars['BigInt'];
  /** [CUMULATIVE] The total amount of GRT staked in the staking contract */
  totalTokensStaked: Scalars['BigInt'];
  /** [CUMULATIVE] Total unclaimed rebates. Includes unclaimed rebates and rebates lost in cobbs douglas  */
  totalUnclaimedQueryFeeRebates: Scalars['BigInt'];
  /** [CUMULATIVE] Total tokens that are currently locked or withdrawable in the network from unstaking */
  totalUnstakedTokensLocked: Scalars['BigInt'];
};

export type Analytics__GraphNetworkDailyData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  curatorCount?: InputMaybe<Scalars['Int']>;
  curatorCount_gt?: InputMaybe<Scalars['Int']>;
  curatorCount_gte?: InputMaybe<Scalars['Int']>;
  curatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  curatorCount_lt?: InputMaybe<Scalars['Int']>;
  curatorCount_lte?: InputMaybe<Scalars['Int']>;
  curatorCount_not?: InputMaybe<Scalars['Int']>;
  curatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dayEnd?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd_lt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayNumber?: InputMaybe<Scalars['Int']>;
  dayNumber_gt?: InputMaybe<Scalars['Int']>;
  dayNumber_gte?: InputMaybe<Scalars['Int']>;
  dayNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  dayNumber_lt?: InputMaybe<Scalars['Int']>;
  dayNumber_lte?: InputMaybe<Scalars['Int']>;
  dayNumber_not?: InputMaybe<Scalars['Int']>;
  dayNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dayStart?: InputMaybe<Scalars['BigInt']>;
  dayStart_gt?: InputMaybe<Scalars['BigInt']>;
  dayStart_gte?: InputMaybe<Scalars['BigInt']>;
  dayStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayStart_lt?: InputMaybe<Scalars['BigInt']>;
  dayStart_lte?: InputMaybe<Scalars['BigInt']>;
  dayStart_not?: InputMaybe<Scalars['BigInt']>;
  dayStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  defaultReserveRatio?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_gt?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_gte?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultReserveRatio_lt?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_lte?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_not?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationRatio?: InputMaybe<Scalars['Int']>;
  delegationRatio_gt?: InputMaybe<Scalars['Int']>;
  delegationRatio_gte?: InputMaybe<Scalars['Int']>;
  delegationRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationRatio_lt?: InputMaybe<Scalars['Int']>;
  delegationRatio_lte?: InputMaybe<Scalars['Int']>;
  delegationRatio_not?: InputMaybe<Scalars['Int']>;
  delegationRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorCount?: InputMaybe<Scalars['Int']>;
  delegatorCount_gt?: InputMaybe<Scalars['Int']>;
  delegatorCount_gte?: InputMaybe<Scalars['Int']>;
  delegatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorCount_lt?: InputMaybe<Scalars['Int']>;
  delegatorCount_lte?: InputMaybe<Scalars['Int']>;
  delegatorCount_not?: InputMaybe<Scalars['Int']>;
  delegatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexerCount?: InputMaybe<Scalars['Int']>;
  indexerCount_gt?: InputMaybe<Scalars['Int']>;
  indexerCount_gte?: InputMaybe<Scalars['Int']>;
  indexerCount_in?: InputMaybe<Array<Scalars['Int']>>;
  indexerCount_lt?: InputMaybe<Scalars['Int']>;
  indexerCount_lte?: InputMaybe<Scalars['Int']>;
  indexerCount_not?: InputMaybe<Scalars['Int']>;
  indexerCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  network?: InputMaybe<Scalars['String']>;
  network_?: InputMaybe<Analytics__GraphNetwork_Filter>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stakedIndexersCount?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_gt?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_gte?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_in?: InputMaybe<Array<Scalars['Int']>>;
  stakedIndexersCount_lt?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_lte?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_not?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount?: InputMaybe<Scalars['Int']>;
  subgraphCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphCount_not?: InputMaybe<Scalars['Int']>;
  subgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeploymentCount?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeploymentCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_not?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCuratorQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCuratorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokens?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingDelegatorRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingIndexerRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingIndexerRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTaxedQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTaxedQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAllocated?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAllocated_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalled?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalled_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensStaked?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensStaked_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnclaimedQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnclaimedQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokensLocked?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokensLocked_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_not?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Analytics__GraphNetworkDailyData_OrderBy {
  CuratorCount = 'curatorCount',
  DayEnd = 'dayEnd',
  DayNumber = 'dayNumber',
  DayStart = 'dayStart',
  DefaultReserveRatio = 'defaultReserveRatio',
  DelegationRatio = 'delegationRatio',
  DelegatorCount = 'delegatorCount',
  Id = 'id',
  IndexerCount = 'indexerCount',
  Network = 'network',
  StakedIndexersCount = 'stakedIndexersCount',
  SubgraphCount = 'subgraphCount',
  SubgraphDeploymentCount = 'subgraphDeploymentCount',
  TotalCuratorQueryFees = 'totalCuratorQueryFees',
  TotalDelegatedTokens = 'totalDelegatedTokens',
  TotalDelegatorQueryFeeRebates = 'totalDelegatorQueryFeeRebates',
  TotalIndexerQueryFeeRebates = 'totalIndexerQueryFeeRebates',
  TotalIndexerQueryFeesCollected = 'totalIndexerQueryFeesCollected',
  TotalIndexingDelegatorRewards = 'totalIndexingDelegatorRewards',
  TotalIndexingIndexerRewards = 'totalIndexingIndexerRewards',
  TotalIndexingRewards = 'totalIndexingRewards',
  TotalQueryFees = 'totalQueryFees',
  TotalTaxedQueryFees = 'totalTaxedQueryFees',
  TotalTokensAllocated = 'totalTokensAllocated',
  TotalTokensSignalled = 'totalTokensSignalled',
  TotalTokensStaked = 'totalTokensStaked',
  TotalUnclaimedQueryFeeRebates = 'totalUnclaimedQueryFeeRebates',
  TotalUnstakedTokensLocked = 'totalUnstakedTokensLocked'
}

export type Analytics__GraphNetwork_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  curatorCount?: InputMaybe<Scalars['Int']>;
  curatorCount_gt?: InputMaybe<Scalars['Int']>;
  curatorCount_gte?: InputMaybe<Scalars['Int']>;
  curatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  curatorCount_lt?: InputMaybe<Scalars['Int']>;
  curatorCount_lte?: InputMaybe<Scalars['Int']>;
  curatorCount_not?: InputMaybe<Scalars['Int']>;
  curatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultReserveRatio?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_gt?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_gte?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultReserveRatio_lt?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_lte?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_not?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationRatio?: InputMaybe<Scalars['Int']>;
  delegationRatio_gt?: InputMaybe<Scalars['Int']>;
  delegationRatio_gte?: InputMaybe<Scalars['Int']>;
  delegationRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationRatio_lt?: InputMaybe<Scalars['Int']>;
  delegationRatio_lte?: InputMaybe<Scalars['Int']>;
  delegationRatio_not?: InputMaybe<Scalars['Int']>;
  delegationRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorCount?: InputMaybe<Scalars['Int']>;
  delegatorCount_gt?: InputMaybe<Scalars['Int']>;
  delegatorCount_gte?: InputMaybe<Scalars['Int']>;
  delegatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorCount_lt?: InputMaybe<Scalars['Int']>;
  delegatorCount_lte?: InputMaybe<Scalars['Int']>;
  delegatorCount_not?: InputMaybe<Scalars['Int']>;
  delegatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexerCount?: InputMaybe<Scalars['Int']>;
  indexerCount_gt?: InputMaybe<Scalars['Int']>;
  indexerCount_gte?: InputMaybe<Scalars['Int']>;
  indexerCount_in?: InputMaybe<Array<Scalars['Int']>>;
  indexerCount_lt?: InputMaybe<Scalars['Int']>;
  indexerCount_lte?: InputMaybe<Scalars['Int']>;
  indexerCount_not?: InputMaybe<Scalars['Int']>;
  indexerCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stakedIndexersCount?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_gt?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_gte?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_in?: InputMaybe<Array<Scalars['Int']>>;
  stakedIndexersCount_lt?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_lte?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_not?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount?: InputMaybe<Scalars['Int']>;
  subgraphCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphCount_not?: InputMaybe<Scalars['Int']>;
  subgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeploymentCount?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeploymentCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_not?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCuratorQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCuratorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokens?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingDelegatorRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingIndexerRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingIndexerRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTaxedQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTaxedQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAllocated?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAllocated_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensClaimable?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensClaimable_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalled?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalled_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensStaked?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensStaked_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnclaimedQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnclaimedQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokensLocked?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokensLocked_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_not?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Analytics__GraphNetwork_OrderBy {
  CuratorCount = 'curatorCount',
  DefaultReserveRatio = 'defaultReserveRatio',
  DelegationRatio = 'delegationRatio',
  DelegatorCount = 'delegatorCount',
  Id = 'id',
  IndexerCount = 'indexerCount',
  StakedIndexersCount = 'stakedIndexersCount',
  SubgraphCount = 'subgraphCount',
  SubgraphDeploymentCount = 'subgraphDeploymentCount',
  TotalCuratorQueryFees = 'totalCuratorQueryFees',
  TotalDelegatedTokens = 'totalDelegatedTokens',
  TotalDelegatorQueryFeeRebates = 'totalDelegatorQueryFeeRebates',
  TotalIndexerQueryFeeRebates = 'totalIndexerQueryFeeRebates',
  TotalIndexerQueryFeesCollected = 'totalIndexerQueryFeesCollected',
  TotalIndexingDelegatorRewards = 'totalIndexingDelegatorRewards',
  TotalIndexingIndexerRewards = 'totalIndexingIndexerRewards',
  TotalIndexingRewards = 'totalIndexingRewards',
  TotalQueryFees = 'totalQueryFees',
  TotalTaxedQueryFees = 'totalTaxedQueryFees',
  TotalTokensAllocated = 'totalTokensAllocated',
  TotalTokensClaimable = 'totalTokensClaimable',
  TotalTokensSignalled = 'totalTokensSignalled',
  TotalTokensStaked = 'totalTokensStaked',
  TotalUnclaimedQueryFeeRebates = 'totalUnclaimedQueryFeeRebates',
  TotalUnstakedTokensLocked = 'totalUnstakedTokensLocked'
}

/** Metadata for the Indexer along with parameters and staking data */
export type Analytics__Indexer = {
  __typename?: 'ANALYTICS__Indexer';
  account: Analytics__GraphAccount;
  /** CURRENT  tokens allocated on all subgraphs */
  allocatedTokens: Scalars['BigInt'];
  /** Number of active allocations of stake for this Indexer */
  allocationCount: Scalars['Int'];
  /** Active allocations of stake for this Indexer */
  allocations: Array<Analytics__Allocation>;
  /** Stake available to earn rewards. tokenCapacity - allocationTokens - lockedTokens */
  availableStake: Scalars['BigInt'];
  /** Time this indexer was created */
  createdAt: Scalars['Int'];
  dailyData: Array<Analytics__IndexerDailyData>;
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** Amount of delegated tokens that can be eligible for rewards */
  delegatedCapacity: Scalars['BigInt'];
  /** Ratio between the amount of delegated stake over the total usable stake. */
  delegatedStakeRatio: Scalars['ANALYTICS__BigDecimal'];
  /** CURRENT tokens delegated to the indexer */
  delegatedTokens: Scalars['BigInt'];
  /** Exchange rate of of tokens received for each share */
  delegationExchangeRate: Scalars['ANALYTICS__BigDecimal'];
  /** The total amount of indexing rewards given to delegators */
  delegatorIndexingRewards: Scalars['BigInt'];
  /** Amount of blocks a delegator chooses for the waiting period for changing their params */
  delegatorParameterCooldown: Scalars['Int'];
  /** The total amount of query fees given to delegators */
  delegatorQueryFees: Scalars['BigInt'];
  /** Total shares of the delegator pool */
  delegatorShares: Scalars['BigInt'];
  /** Delegators to this Indexer */
  delegators: Array<Analytics__DelegatedStake>;
  delegatorsCount: Scalars['BigInt'];
  /** Count of how many times this indexer has been forced to close an allocation */
  forcedClosures: Scalars['Int'];
  /** Geohash of the indexer. Shows where their indexer is located in the world */
  geoHash?: Maybe<Scalars['String']>;
  /** Eth address of Indexer */
  id: Scalars['ID'];
  /** The total amount of indexing rewards the indexer kept */
  indexerIndexingRewards: Scalars['BigInt'];
  /** Percentage of indexers' own rewards received in relation to its own stake. 1 (100%) means that the indexer is receiving the exact amount that is generated by his own stake */
  indexerRewardsOwnGenerationRatio: Scalars['ANALYTICS__BigDecimal'];
  /** The percent of indexing rewards generated by the total stake that the Indexer keeps for itself. In parts per million */
  indexingRewardCut: Scalars['Int'];
  /** The percent of indexing rewards generated by the delegated stake that the Indexer keeps for itself */
  indexingRewardEffectiveCut: Scalars['ANALYTICS__BigDecimal'];
  /** Block number for the last time the delegator updated their parameters */
  lastDelegationParameterUpdate: Scalars['Int'];
  /** CURRENT tokens locked */
  lockedTokens: Scalars['BigInt'];
  /** The percent of reward dilution delegators experience because of overdelegation. Overdelegated stake can't be used to generate rewards but still gets accounted while distributing the generated rewards. This causes dilution of the rewards for the rest of the pool. */
  overDelegationDilution: Scalars['ANALYTICS__BigDecimal'];
  /** Ratio between the amount of the indexers own stake over the total usable stake. */
  ownStakeRatio: Scalars['ANALYTICS__BigDecimal'];
  /** The percent of query rebate rewards the Indexer keeps for itself. In parts per million */
  queryFeeCut: Scalars['Int'];
  /** The percent of query rebate rewards generated by the delegated stake that the Indexer keeps for itself */
  queryFeeEffectiveCut: Scalars['ANALYTICS__BigDecimal'];
  /** Query fee rebate amount claimed from the protocol through cobbs douglas. Does not include portion given to delegators */
  queryFeeRebates: Scalars['BigInt'];
  /** Total query fees collected. Includes the portion given to delegators */
  queryFeesCollected: Scalars['BigInt'];
  /** Total indexing rewards earned by this indexer from inflation. Including delegation rewards */
  rewardsEarned: Scalars['BigInt'];
  /** CURRENT tokens staked in the protocol. Decreases on withdraw, not on lock */
  stakedTokens: Scalars['BigInt'];
  /** Total token capacity = delegatedCapacity + stakedTokens */
  tokenCapacity: Scalars['BigInt'];
  /** The block when the Indexers tokens unlock */
  tokensLockedUntil: Scalars['Int'];
  /** All allocations for this Indexer (i.e. closed and active) */
  totalAllocationCount: Scalars['BigInt'];
  /** All allocations of stake for this Indexer (i.e. closed and active) */
  totalAllocations: Array<Analytics__Allocation>;
  /** NOT IMPLEMENTED - Tokens that have been unstaked and withdrawn */
  unstakedTokens: Scalars['BigInt'];
  /** Service registry URL for the indexer */
  url?: Maybe<Scalars['String']>;
};


/** Metadata for the Indexer along with parameters and staking data */
export type Analytics__IndexerAllocationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__Allocation_Filter>;
};


/** Metadata for the Indexer along with parameters and staking data */
export type Analytics__IndexerDailyDataArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__IndexerDailyData_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__IndexerDailyData_Filter>;
};


/** Metadata for the Indexer along with parameters and staking data */
export type Analytics__IndexerDelegatorsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__DelegatedStake_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__DelegatedStake_Filter>;
};


/** Metadata for the Indexer along with parameters and staking data */
export type Analytics__IndexerTotalAllocationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__Allocation_Filter>;
};

export type Analytics__IndexerDailyData = {
  __typename?: 'ANALYTICS__IndexerDailyData';
  /** [CURRENT] Value of allocatedTokens for that day */
  allocatedTokens: Scalars['BigInt'];
  /** [CURRENT] Value of availableStake for that day */
  availableStake: Scalars['BigInt'];
  /** Timestamp for the end of the day that this entity represents. UTC+0 */
  dayEnd: Scalars['BigInt'];
  /** Number of the day this entity represents. Day 0 is the network launch day. */
  dayNumber: Scalars['Int'];
  /** Timestamp for the start of the day that this entity represents. UTC+0 */
  dayStart: Scalars['BigInt'];
  /** [CURRENT] Value of delegatedTokens for that day */
  delegatedTokens: Scalars['BigInt'];
  /** [CURRENT] Exchange rate for shares of the delegation pool for this specific day */
  delegationExchangeRate: Scalars['ANALYTICS__BigDecimal'];
  /** [CUMULATIVE] Total amount of indexing rewards sent to the delegation pool */
  delegatorIndexingRewards: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of query fees that the delegation pool received */
  delegatorQueryFees: Scalars['BigInt'];
  delegatorsCount: Scalars['BigInt'];
  /** <INDEXER ADDRESS>-<DAY NUMBER> */
  id: Scalars['ID'];
  /** Original entity that this daily data tracks */
  indexer: Analytics__Indexer;
  /** [CUMULATIVE] Total amount of indexing rewards that the indexer kept */
  indexerIndexingRewards: Scalars['BigInt'];
  /** [CURRENT] Amount of delegated tokens moved that day. Negative means more tokens were undelegated than delegated */
  netDailyDelegatedTokens: Scalars['BigInt'];
  /** [CUMULATIVE]Total amount of query fees that the indexer got from rebates */
  queryFeeRebates: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of query fees collected by the indexer and sent to the rebate pool */
  queryFeesCollected: Scalars['BigInt'];
  /** [CURRENT] Value of stakedTokens for that day */
  stakedTokens: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of indexing rewards generated on this indexer */
  totalIndexingRewards: Scalars['BigInt'];
};

export type Analytics__IndexerDailyData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  allocatedTokens?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableStake?: InputMaybe<Scalars['BigInt']>;
  availableStake_gt?: InputMaybe<Scalars['BigInt']>;
  availableStake_gte?: InputMaybe<Scalars['BigInt']>;
  availableStake_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableStake_lt?: InputMaybe<Scalars['BigInt']>;
  availableStake_lte?: InputMaybe<Scalars['BigInt']>;
  availableStake_not?: InputMaybe<Scalars['BigInt']>;
  availableStake_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd_lt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayNumber?: InputMaybe<Scalars['Int']>;
  dayNumber_gt?: InputMaybe<Scalars['Int']>;
  dayNumber_gte?: InputMaybe<Scalars['Int']>;
  dayNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  dayNumber_lt?: InputMaybe<Scalars['Int']>;
  dayNumber_lte?: InputMaybe<Scalars['Int']>;
  dayNumber_not?: InputMaybe<Scalars['Int']>;
  dayNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dayStart?: InputMaybe<Scalars['BigInt']>;
  dayStart_gt?: InputMaybe<Scalars['BigInt']>;
  dayStart_gte?: InputMaybe<Scalars['BigInt']>;
  dayStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayStart_lt?: InputMaybe<Scalars['BigInt']>;
  dayStart_lte?: InputMaybe<Scalars['BigInt']>;
  dayStart_not?: InputMaybe<Scalars['BigInt']>;
  dayStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedTokens?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationExchangeRate?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  delegationExchangeRate_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  delegatorIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorQueryFees?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorsCount?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorsCount_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_not?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexerIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexer_?: InputMaybe<Analytics__Indexer_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  netDailyDelegatedTokens?: InputMaybe<Scalars['BigInt']>;
  netDailyDelegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  netDailyDelegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  netDailyDelegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netDailyDelegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  netDailyDelegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  netDailyDelegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  netDailyDelegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Analytics__IndexerDailyData_OrderBy {
  AllocatedTokens = 'allocatedTokens',
  AvailableStake = 'availableStake',
  DayEnd = 'dayEnd',
  DayNumber = 'dayNumber',
  DayStart = 'dayStart',
  DelegatedTokens = 'delegatedTokens',
  DelegationExchangeRate = 'delegationExchangeRate',
  DelegatorIndexingRewards = 'delegatorIndexingRewards',
  DelegatorQueryFees = 'delegatorQueryFees',
  DelegatorsCount = 'delegatorsCount',
  Id = 'id',
  Indexer = 'indexer',
  IndexerIndexingRewards = 'indexerIndexingRewards',
  NetDailyDelegatedTokens = 'netDailyDelegatedTokens',
  QueryFeeRebates = 'queryFeeRebates',
  QueryFeesCollected = 'queryFeesCollected',
  StakedTokens = 'stakedTokens',
  TotalIndexingRewards = 'totalIndexingRewards'
}

/** Analytics */
export type Analytics__IndexerDelegatedStakeRelation = {
  __typename?: 'ANALYTICS__IndexerDelegatedStakeRelation';
  /** Whether the delegation is active or not. Useful to avoid updating non-active delegations without deleting the entity. */
  active: Scalars['Boolean'];
  /** Delegator entity owner of said delegation stake */
  delegator: Analytics__Delegator;
  /** Auxiliary entity to DelegatedStake to make it easier to batch update those delegations */
  id: Scalars['ID'];
  /** Indexer entity where the delegation resides */
  indexer: Analytics__Indexer;
  /** DelegatedStake entity that represents the delegation */
  stake: Analytics__DelegatedStake;
};

export type Analytics__IndexerDelegatedStakeRelation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<Analytics__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<Analytics__Indexer_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stake?: InputMaybe<Scalars['String']>;
  stake_?: InputMaybe<Analytics__DelegatedStake_Filter>;
  stake_contains?: InputMaybe<Scalars['String']>;
  stake_contains_nocase?: InputMaybe<Scalars['String']>;
  stake_ends_with?: InputMaybe<Scalars['String']>;
  stake_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stake_gt?: InputMaybe<Scalars['String']>;
  stake_gte?: InputMaybe<Scalars['String']>;
  stake_in?: InputMaybe<Array<Scalars['String']>>;
  stake_lt?: InputMaybe<Scalars['String']>;
  stake_lte?: InputMaybe<Scalars['String']>;
  stake_not?: InputMaybe<Scalars['String']>;
  stake_not_contains?: InputMaybe<Scalars['String']>;
  stake_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stake_not_ends_with?: InputMaybe<Scalars['String']>;
  stake_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stake_not_in?: InputMaybe<Array<Scalars['String']>>;
  stake_not_starts_with?: InputMaybe<Scalars['String']>;
  stake_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stake_starts_with?: InputMaybe<Scalars['String']>;
  stake_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Analytics__IndexerDelegatedStakeRelation_OrderBy {
  Active = 'active',
  Delegator = 'delegator',
  Id = 'id',
  Indexer = 'indexer',
  Stake = 'stake'
}

export type Analytics__Indexer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Analytics__GraphAccount_Filter>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  allocatedTokens?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocationCount?: InputMaybe<Scalars['Int']>;
  allocationCount_gt?: InputMaybe<Scalars['Int']>;
  allocationCount_gte?: InputMaybe<Scalars['Int']>;
  allocationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  allocationCount_lt?: InputMaybe<Scalars['Int']>;
  allocationCount_lte?: InputMaybe<Scalars['Int']>;
  allocationCount_not?: InputMaybe<Scalars['Int']>;
  allocationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  allocations_?: InputMaybe<Analytics__Allocation_Filter>;
  availableStake?: InputMaybe<Scalars['BigInt']>;
  availableStake_gt?: InputMaybe<Scalars['BigInt']>;
  availableStake_gte?: InputMaybe<Scalars['BigInt']>;
  availableStake_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableStake_lt?: InputMaybe<Scalars['BigInt']>;
  availableStake_lte?: InputMaybe<Scalars['BigInt']>;
  availableStake_not?: InputMaybe<Scalars['BigInt']>;
  availableStake_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyData_?: InputMaybe<Analytics__IndexerDailyData_Filter>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegatedCapacity?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedCapacity_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_not?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedStakeRatio?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegatedStakeRatio_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegatedStakeRatio_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegatedStakeRatio_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  delegatedStakeRatio_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegatedStakeRatio_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegatedStakeRatio_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegatedStakeRatio_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  delegatedTokens?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationExchangeRate?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  delegationExchangeRate_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  delegatorIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorParameterCooldown?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_gt?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_gte?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorParameterCooldown_lt?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_lte?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_not?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorQueryFees?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorShares?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorShares_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_not?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorsCount?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorsCount_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_not?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegators_?: InputMaybe<Analytics__DelegatedStake_Filter>;
  forcedClosures?: InputMaybe<Scalars['Int']>;
  forcedClosures_gt?: InputMaybe<Scalars['Int']>;
  forcedClosures_gte?: InputMaybe<Scalars['Int']>;
  forcedClosures_in?: InputMaybe<Array<Scalars['Int']>>;
  forcedClosures_lt?: InputMaybe<Scalars['Int']>;
  forcedClosures_lte?: InputMaybe<Scalars['Int']>;
  forcedClosures_not?: InputMaybe<Scalars['Int']>;
  forcedClosures_not_in?: InputMaybe<Array<Scalars['Int']>>;
  geoHash?: InputMaybe<Scalars['String']>;
  geoHash_contains?: InputMaybe<Scalars['String']>;
  geoHash_contains_nocase?: InputMaybe<Scalars['String']>;
  geoHash_ends_with?: InputMaybe<Scalars['String']>;
  geoHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash_gt?: InputMaybe<Scalars['String']>;
  geoHash_gte?: InputMaybe<Scalars['String']>;
  geoHash_in?: InputMaybe<Array<Scalars['String']>>;
  geoHash_lt?: InputMaybe<Scalars['String']>;
  geoHash_lte?: InputMaybe<Scalars['String']>;
  geoHash_not?: InputMaybe<Scalars['String']>;
  geoHash_not_contains?: InputMaybe<Scalars['String']>;
  geoHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  geoHash_not_ends_with?: InputMaybe<Scalars['String']>;
  geoHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  geoHash_not_starts_with?: InputMaybe<Scalars['String']>;
  geoHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash_starts_with?: InputMaybe<Scalars['String']>;
  geoHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexerIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerRewardsOwnGenerationRatio?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  indexerRewardsOwnGenerationRatio_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  indexingRewardCut?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_gt?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_gte?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCut_lt?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_lte?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_not?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardEffectiveCut?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexingRewardEffectiveCut_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexingRewardEffectiveCut_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexingRewardEffectiveCut_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  indexingRewardEffectiveCut_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexingRewardEffectiveCut_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexingRewardEffectiveCut_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexingRewardEffectiveCut_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  lastDelegationParameterUpdate?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_gt?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_gte?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegationParameterUpdate_lt?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_lte?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_not?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  overDelegationDilution?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  overDelegationDilution_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  overDelegationDilution_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  overDelegationDilution_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  overDelegationDilution_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  overDelegationDilution_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  overDelegationDilution_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  overDelegationDilution_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  ownStakeRatio?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  ownStakeRatio_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  ownStakeRatio_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  ownStakeRatio_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  ownStakeRatio_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  ownStakeRatio_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  ownStakeRatio_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  ownStakeRatio_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  queryFeeCut?: InputMaybe<Scalars['Int']>;
  queryFeeCut_gt?: InputMaybe<Scalars['Int']>;
  queryFeeCut_gte?: InputMaybe<Scalars['Int']>;
  queryFeeCut_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeCut_lt?: InputMaybe<Scalars['Int']>;
  queryFeeCut_lte?: InputMaybe<Scalars['Int']>;
  queryFeeCut_not?: InputMaybe<Scalars['Int']>;
  queryFeeCut_not_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeEffectiveCut?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  queryFeeEffectiveCut_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  queryFeeEffectiveCut_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  queryFeeEffectiveCut_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  queryFeeEffectiveCut_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  queryFeeEffectiveCut_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  queryFeeEffectiveCut_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  queryFeeEffectiveCut_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardsEarned?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_gt?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_gte?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardsEarned_lt?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_lte?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_not?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCapacity?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_gt?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_gte?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCapacity_lt?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_lte?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_not?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensLockedUntil?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_gt?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_gte?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_in?: InputMaybe<Array<Scalars['Int']>>;
  tokensLockedUntil_lt?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_lte?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_not?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalAllocationCount?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAllocationCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_not?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAllocations_?: InputMaybe<Analytics__Allocation_Filter>;
  unstakedTokens?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_contains_nocase?: InputMaybe<Scalars['String']>;
  url_ends_with?: InputMaybe<Scalars['String']>;
  url_ends_with_nocase?: InputMaybe<Scalars['String']>;
  url_gt?: InputMaybe<Scalars['String']>;
  url_gte?: InputMaybe<Scalars['String']>;
  url_in?: InputMaybe<Array<Scalars['String']>>;
  url_lt?: InputMaybe<Scalars['String']>;
  url_lte?: InputMaybe<Scalars['String']>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_contains_nocase?: InputMaybe<Scalars['String']>;
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  url_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<Scalars['String']>>;
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  url_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  url_starts_with?: InputMaybe<Scalars['String']>;
  url_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Analytics__Indexer_OrderBy {
  Account = 'account',
  AllocatedTokens = 'allocatedTokens',
  AllocationCount = 'allocationCount',
  Allocations = 'allocations',
  AvailableStake = 'availableStake',
  CreatedAt = 'createdAt',
  DailyData = 'dailyData',
  DefaultDisplayName = 'defaultDisplayName',
  DelegatedCapacity = 'delegatedCapacity',
  DelegatedStakeRatio = 'delegatedStakeRatio',
  DelegatedTokens = 'delegatedTokens',
  DelegationExchangeRate = 'delegationExchangeRate',
  DelegatorIndexingRewards = 'delegatorIndexingRewards',
  DelegatorParameterCooldown = 'delegatorParameterCooldown',
  DelegatorQueryFees = 'delegatorQueryFees',
  DelegatorShares = 'delegatorShares',
  Delegators = 'delegators',
  DelegatorsCount = 'delegatorsCount',
  ForcedClosures = 'forcedClosures',
  GeoHash = 'geoHash',
  Id = 'id',
  IndexerIndexingRewards = 'indexerIndexingRewards',
  IndexerRewardsOwnGenerationRatio = 'indexerRewardsOwnGenerationRatio',
  IndexingRewardCut = 'indexingRewardCut',
  IndexingRewardEffectiveCut = 'indexingRewardEffectiveCut',
  LastDelegationParameterUpdate = 'lastDelegationParameterUpdate',
  LockedTokens = 'lockedTokens',
  OverDelegationDilution = 'overDelegationDilution',
  OwnStakeRatio = 'ownStakeRatio',
  QueryFeeCut = 'queryFeeCut',
  QueryFeeEffectiveCut = 'queryFeeEffectiveCut',
  QueryFeeRebates = 'queryFeeRebates',
  QueryFeesCollected = 'queryFeesCollected',
  RewardsEarned = 'rewardsEarned',
  StakedTokens = 'stakedTokens',
  TokenCapacity = 'tokenCapacity',
  TokensLockedUntil = 'tokensLockedUntil',
  TotalAllocationCount = 'totalAllocationCount',
  TotalAllocations = 'totalAllocations',
  UnstakedTokens = 'unstakedTokens',
  Url = 'url'
}

/** Curator Name Signal for a single Subgraph */
export type Analytics__NameSignal = {
  __typename?: 'ANALYTICS__NameSignal';
  /** Curator average cost basis for this name signal on this subgraph */
  averageCostBasis: Scalars['ANALYTICS__BigDecimal'];
  /** averageCostBasis / nameSignal */
  averageCostBasisPerSignal: Scalars['ANALYTICS__BigDecimal'];
  /** Eth address of the curator */
  curator: Analytics__Curator;
  entityVersion: Scalars['Int'];
  /** Eth address + subgraph ID */
  id: Scalars['ID'];
  /** Block for which the curator last entered or exited the curve */
  lastNameSignalChange: Scalars['Int'];
  linkedEntity?: Maybe<Analytics__NameSignal>;
  /** Signal that the curator has from signaling their GRT */
  nameSignal: Scalars['BigInt'];
  /** Summation of realized rewards from before the last time the curator entered the curation curve */
  realizedRewards: Scalars['BigInt'];
  /** CUMULATIVE number of tokens the curator has signalled */
  signalledTokens: Scalars['BigInt'];
  /** Subgraph being signalled */
  subgraph: Analytics__Subgraph;
  /** CUMULATIVE number of tokens the curator has unsignalled */
  unsignalledTokens: Scalars['BigInt'];
  /** Tokens the curator has withdrawn from a deprecated name curve */
  withdrawnTokens: Scalars['BigInt'];
};

/** All relevant data for a Name Signal Transaction in The Graph Network */
export type Analytics__NameSignalTransaction = Analytics__Transaction & {
  __typename?: 'ANALYTICS__NameSignalTransaction';
  blockNumber: Scalars['Int'];
  id: Scalars['ID'];
  /** Amount of name signal updated */
  nameSignal: Scalars['BigInt'];
  signer: Analytics__GraphAccount;
  /** Subgraph where name signal was updated */
  subgraph: Analytics__Subgraph;
  timestamp: Scalars['Int'];
  /** Tokens used */
  tokens: Scalars['BigInt'];
  type: Analytics__TransactionType;
  /** Amount of version signal updated */
  versionSignal: Scalars['BigInt'];
};

export type Analytics__NameSignalTransaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nameSignal?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignal_lt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_lte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_not?: InputMaybe<Scalars['BigInt']>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<Analytics__GraphAccount_Filter>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Analytics__Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  tokens?: InputMaybe<Scalars['BigInt']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens_lt?: InputMaybe<Scalars['BigInt']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']>;
  tokens_not?: InputMaybe<Scalars['BigInt']>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<Analytics__TransactionType>;
  type_in?: InputMaybe<Array<Analytics__TransactionType>>;
  type_not?: InputMaybe<Analytics__TransactionType>;
  type_not_in?: InputMaybe<Array<Analytics__TransactionType>>;
  versionSignal?: InputMaybe<Scalars['BigInt']>;
  versionSignal_gt?: InputMaybe<Scalars['BigInt']>;
  versionSignal_gte?: InputMaybe<Scalars['BigInt']>;
  versionSignal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versionSignal_lt?: InputMaybe<Scalars['BigInt']>;
  versionSignal_lte?: InputMaybe<Scalars['BigInt']>;
  versionSignal_not?: InputMaybe<Scalars['BigInt']>;
  versionSignal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Analytics__NameSignalTransaction_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  NameSignal = 'nameSignal',
  Signer = 'signer',
  Subgraph = 'subgraph',
  Timestamp = 'timestamp',
  Tokens = 'tokens',
  Type = 'type',
  VersionSignal = 'versionSignal'
}

export type Analytics__NameSignal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  averageCostBasis?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasisPerSignal?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasisPerSignal_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasisPerSignal_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  averageCostBasisPerSignal_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasisPerSignal_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasisPerSignal_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  averageCostBasis_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasis_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasis_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  averageCostBasis_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasis_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasis_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasis_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  curator?: InputMaybe<Scalars['String']>;
  curator_?: InputMaybe<Analytics__Curator_Filter>;
  curator_contains?: InputMaybe<Scalars['String']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_ends_with?: InputMaybe<Scalars['String']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_gt?: InputMaybe<Scalars['String']>;
  curator_gte?: InputMaybe<Scalars['String']>;
  curator_in?: InputMaybe<Array<Scalars['String']>>;
  curator_lt?: InputMaybe<Scalars['String']>;
  curator_lte?: InputMaybe<Scalars['String']>;
  curator_not?: InputMaybe<Scalars['String']>;
  curator_not_contains?: InputMaybe<Scalars['String']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_in?: InputMaybe<Array<Scalars['String']>>;
  curator_not_starts_with?: InputMaybe<Scalars['String']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_starts_with?: InputMaybe<Scalars['String']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entityVersion?: InputMaybe<Scalars['Int']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  entityVersion_lt?: InputMaybe<Scalars['Int']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']>;
  entityVersion_not?: InputMaybe<Scalars['Int']>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastNameSignalChange?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_gt?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_gte?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_in?: InputMaybe<Array<Scalars['Int']>>;
  lastNameSignalChange_lt?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_lte?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_not?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_not_in?: InputMaybe<Array<Scalars['Int']>>;
  linkedEntity?: InputMaybe<Scalars['String']>;
  linkedEntity_?: InputMaybe<Analytics__NameSignal_Filter>;
  linkedEntity_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_lt?: InputMaybe<Scalars['String']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']>;
  linkedEntity_not?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignal_lt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_lte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_not?: InputMaybe<Scalars['BigInt']>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Analytics__Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Analytics__NameSignal_OrderBy {
  AverageCostBasis = 'averageCostBasis',
  AverageCostBasisPerSignal = 'averageCostBasisPerSignal',
  Curator = 'curator',
  EntityVersion = 'entityVersion',
  Id = 'id',
  LastNameSignalChange = 'lastNameSignalChange',
  LinkedEntity = 'linkedEntity',
  NameSignal = 'nameSignal',
  RealizedRewards = 'realizedRewards',
  SignalledTokens = 'signalledTokens',
  Subgraph = 'subgraph',
  UnsignalledTokens = 'unsignalledTokens',
  WithdrawnTokens = 'withdrawnTokens'
}

export enum Analytics__NameSystem {
  Ens = 'ENS'
}

/** Defines the order direction, either ascending or descending */
export enum Analytics__OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

/**
 * Global pool of query fees for closed state channels. Each Epoch has a single pool,
 * hence why they share the same IDs.
 */
export type Analytics__Pool = {
  __typename?: 'ANALYTICS__Pool';
  /** Total effective allocation tokens from all allocations closed in this epoch */
  allocation: Scalars['BigInt'];
  /** Total query fees claimed in this epoch. Can be smaller than totalFees because of cobbs douglas function  */
  claimedFees: Scalars['BigInt'];
  /** Allocations that were closed during this epoch */
  closedAllocations: Array<Analytics__Allocation>;
  /** Total rewards from query fees deposited to all curator bonding curves during the epoch */
  curatorRewards: Scalars['BigInt'];
  /** Epoch number of the pool */
  id: Scalars['ID'];
  /** Total query fees collected in this epoch */
  totalQueryFees: Scalars['BigInt'];
};


/**
 * Global pool of query fees for closed state channels. Each Epoch has a single pool,
 * hence why they share the same IDs.
 */
export type Analytics__PoolClosedAllocationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__Allocation_Filter>;
};

export type Analytics__Pool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  allocation?: InputMaybe<Scalars['BigInt']>;
  allocation_gt?: InputMaybe<Scalars['BigInt']>;
  allocation_gte?: InputMaybe<Scalars['BigInt']>;
  allocation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocation_lt?: InputMaybe<Scalars['BigInt']>;
  allocation_lte?: InputMaybe<Scalars['BigInt']>;
  allocation_not?: InputMaybe<Scalars['BigInt']>;
  allocation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimedFees?: InputMaybe<Scalars['BigInt']>;
  claimedFees_gt?: InputMaybe<Scalars['BigInt']>;
  claimedFees_gte?: InputMaybe<Scalars['BigInt']>;
  claimedFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimedFees_lt?: InputMaybe<Scalars['BigInt']>;
  claimedFees_lte?: InputMaybe<Scalars['BigInt']>;
  claimedFees_not?: InputMaybe<Scalars['BigInt']>;
  claimedFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closedAllocations_?: InputMaybe<Analytics__Allocation_Filter>;
  curatorRewards?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Analytics__Pool_OrderBy {
  Allocation = 'allocation',
  ClaimedFees = 'claimedFees',
  ClosedAllocations = 'closedAllocations',
  CuratorRewards = 'curatorRewards',
  Id = 'id',
  TotalQueryFees = 'totalQueryFees'
}

/** Curator Signal for a single SubgraphDeployment */
export type Analytics__Signal = {
  __typename?: 'ANALYTICS__Signal';
  /** Eth address of the curator */
  curator: Analytics__Curator;
  /** Eth address + subgraph deployment ID */
  id: Scalars['ID'];
  /** Block for which the curator last entered or exited the curve */
  lastSignalChange: Scalars['Int'];
  /** Summation of realized rewards from before the last time the curator entered the curation curve */
  realizedRewards: Scalars['BigInt'];
  /** Signal that the curator has from signaling their GRT */
  signal: Scalars['BigInt'];
  /** CUMULATIVE number of tokens the curator has signalled */
  signalledTokens: Scalars['BigInt'];
  /** Subgraph being signalled */
  subgraphDeployment: Analytics__SubgraphDeployment;
  /** CUMULATIVE number of tokens the curator has unsignalled */
  unsignalledTokens: Scalars['BigInt'];
};

/** All relevant data for a Signal Transaction in The Graph Network */
export type Analytics__SignalTransaction = Analytics__Transaction & {
  __typename?: 'ANALYTICS__SignalTransaction';
  blockNumber: Scalars['Int'];
  id: Scalars['ID'];
  /** Amount of signal updated */
  signal: Scalars['BigInt'];
  signer: Analytics__GraphAccount;
  /** Subgraph where signal was updated */
  subgraphDeployment: Analytics__SubgraphDeployment;
  timestamp: Scalars['Int'];
  /** Tokens used */
  tokens: Scalars['BigInt'];
  type: Analytics__TransactionType;
  /** Withdrawal fees. On minting only */
  withdrawalFees: Scalars['BigInt'];
};

export type Analytics__SignalTransaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  signal?: InputMaybe<Scalars['BigInt']>;
  signal_gt?: InputMaybe<Scalars['BigInt']>;
  signal_gte?: InputMaybe<Scalars['BigInt']>;
  signal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal_lt?: InputMaybe<Scalars['BigInt']>;
  signal_lte?: InputMaybe<Scalars['BigInt']>;
  signal_not?: InputMaybe<Scalars['BigInt']>;
  signal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<Analytics__GraphAccount_Filter>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<Analytics__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  tokens?: InputMaybe<Scalars['BigInt']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens_lt?: InputMaybe<Scalars['BigInt']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']>;
  tokens_not?: InputMaybe<Scalars['BigInt']>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<Analytics__TransactionType>;
  type_in?: InputMaybe<Array<Analytics__TransactionType>>;
  type_not?: InputMaybe<Analytics__TransactionType>;
  type_not_in?: InputMaybe<Array<Analytics__TransactionType>>;
  withdrawalFees?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawalFees_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_not?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Analytics__SignalTransaction_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  Signal = 'signal',
  Signer = 'signer',
  SubgraphDeployment = 'subgraphDeployment',
  Timestamp = 'timestamp',
  Tokens = 'tokens',
  Type = 'type',
  WithdrawalFees = 'withdrawalFees'
}

export type Analytics__Signal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  curator?: InputMaybe<Scalars['String']>;
  curator_?: InputMaybe<Analytics__Curator_Filter>;
  curator_contains?: InputMaybe<Scalars['String']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_ends_with?: InputMaybe<Scalars['String']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_gt?: InputMaybe<Scalars['String']>;
  curator_gte?: InputMaybe<Scalars['String']>;
  curator_in?: InputMaybe<Array<Scalars['String']>>;
  curator_lt?: InputMaybe<Scalars['String']>;
  curator_lte?: InputMaybe<Scalars['String']>;
  curator_not?: InputMaybe<Scalars['String']>;
  curator_not_contains?: InputMaybe<Scalars['String']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_in?: InputMaybe<Array<Scalars['String']>>;
  curator_not_starts_with?: InputMaybe<Scalars['String']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_starts_with?: InputMaybe<Scalars['String']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastSignalChange?: InputMaybe<Scalars['Int']>;
  lastSignalChange_gt?: InputMaybe<Scalars['Int']>;
  lastSignalChange_gte?: InputMaybe<Scalars['Int']>;
  lastSignalChange_in?: InputMaybe<Array<Scalars['Int']>>;
  lastSignalChange_lt?: InputMaybe<Scalars['Int']>;
  lastSignalChange_lte?: InputMaybe<Scalars['Int']>;
  lastSignalChange_not?: InputMaybe<Scalars['Int']>;
  lastSignalChange_not_in?: InputMaybe<Array<Scalars['Int']>>;
  realizedRewards?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal?: InputMaybe<Scalars['BigInt']>;
  signal_gt?: InputMaybe<Scalars['BigInt']>;
  signal_gte?: InputMaybe<Scalars['BigInt']>;
  signal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal_lt?: InputMaybe<Scalars['BigInt']>;
  signal_lte?: InputMaybe<Scalars['BigInt']>;
  signal_not?: InputMaybe<Scalars['BigInt']>;
  signal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<Analytics__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Analytics__Signal_OrderBy {
  Curator = 'curator',
  Id = 'id',
  LastSignalChange = 'lastSignalChange',
  RealizedRewards = 'realizedRewards',
  Signal = 'signal',
  SignalledTokens = 'signalledTokens',
  SubgraphDeployment = 'subgraphDeployment',
  UnsignalledTokens = 'unsignalledTokens'
}

/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 */
export type Analytics__Subgraph = {
  __typename?: 'ANALYTICS__Subgraph';
  /** Whether the subgraph is active or deprecated */
  active: Scalars['Boolean'];
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** Address used to create the ID. Only available for Subgraphs created pre-migration */
  creatorAddress?: Maybe<Scalars['ANALYTICS__Bytes']>;
  /** Current version */
  currentVersion?: Maybe<Analytics__SubgraphVersion>;
  /** Version of the entity. Subgraph entities are changing the way their ID is generated when the new GNS v2 rolls out so we need to differnetiate them */
  entityVersion: Scalars['Int'];
  /** Subgraph ID - which is derived from the Organization/Individual graph accountID */
  id: Scalars['ID'];
  /** Auxiliary field to denote whether the subgraph is handling the initialization order on V2 events. Doesn't matter for V1 events. */
  initializing: Scalars['Boolean'];
  /** Subgraph entities might have 'duplicate' entities so that old IDs can be persisted and still queried properly. If that happens we have to link both duplicate entities to be able to update them properly. */
  linkedEntity?: Maybe<Analytics__Subgraph>;
  /** Subgraph metadata */
  metadataHash?: Maybe<Scalars['ANALYTICS__Bytes']>;
  /** Whether the subgraph has been migrated to the NFT implementation */
  migrated: Scalars['Boolean'];
  /** The CURRENT name signal amount for this subgraph */
  nameSignalAmount: Scalars['BigInt'];
  /** Curators of this subgraph deployment */
  nameSignals: Array<Analytics__NameSignal>;
  /** The actual ID of the subgraph on the contracts subgraph NFT implementation. BigInt represented as a String. It's only actually valid once the subgraph is migrated (migrated == true) */
  nftID: Scalars['String'];
  /** ID of the subgraph that was used on the old version of this The Graph Network Subgraph. Null for Subgraphs created with the new GNS implementation */
  oldID?: Maybe<Scalars['String']>;
  /** Graph account that owns this subgraph */
  owner: Analytics__GraphAccount;
  /** [DEPRECATED] Past versions. Has the same data as 'versions' but keeps the old naming for backwards compatibility */
  pastVersions: Array<Analytics__SubgraphVersion>;
  /** Reserve ratio of the name curation curve. In parts per million */
  reserveRatio: Scalars['Int'];
  /** CUMULATIVE signaled tokens on this subgraph all time */
  signalledTokens: Scalars['BigInt'];
  /** Subgraph number used to create the ID. Only available for Subgraphs created pre-migration */
  subgraphNumber?: Maybe<Scalars['BigInt']>;
  /** CUMULATIVE unsignalled tokens on this subgraph all time */
  unsignalledTokens: Scalars['BigInt'];
  /** Updated timestamp */
  updatedAt: Scalars['Int'];
  /** Version counter */
  versionCount: Scalars['BigInt'];
  /** List of all the subgraph versions included the current one */
  versions: Array<Analytics__SubgraphVersion>;
  /** Tokens that can be withdrawn once the Subgraph is deprecated */
  withdrawableTokens: Scalars['BigInt'];
  /** Tokens the curators have withdrawn from the deprecated Subgraph */
  withdrawnTokens: Scalars['BigInt'];
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 */
export type Analytics__SubgraphNameSignalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__NameSignal_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__NameSignal_Filter>;
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 */
export type Analytics__SubgraphPastVersionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__SubgraphVersion_Filter>;
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 */
export type Analytics__SubgraphVersionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__SubgraphVersion_Filter>;
};

/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 */
export type Analytics__SubgraphDeployment = {
  __typename?: 'ANALYTICS__SubgraphDeployment';
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** Total curator rewards from fees */
  curatorFeeRewards: Scalars['BigInt'];
  /** Curators of this subgraph deployment */
  curatorSignals: Array<Analytics__Signal>;
  dailyData: Array<Analytics__SubgraphDeploymentDailyData>;
  /** Total query fee rebates for delegators earned from the protocol, through the cobbs douglas formula. */
  delegatorQueryFees: Scalars['BigInt'];
  /** The block at which this deployment was denied for rewards. Null if not denied */
  deniedAt: Scalars['Int'];
  /** Subgraph Deployment ID. The IPFS hash with Qm removed to fit into 32 bytes */
  id: Scalars['ID'];
  /** Allocations created by indexers for this Subgraph */
  indexerAllocations: Array<Analytics__Allocation>;
  /** Total rewards accrued all time by delegators */
  indexingDelegatorRewardAmount: Scalars['BigInt'];
  /** Total rewards accrued all time by indexers */
  indexingIndexerRewardAmount: Scalars['BigInt'];
  /** Total rewards accrued all time by this Subgraph Deployment. Includes delegator and indexer rewards */
  indexingRewardAmount: Scalars['BigInt'];
  /** signalledTokens / signalAmount */
  pricePerShare: Scalars['ANALYTICS__BigDecimal'];
  /** Total query fee rebates for indexers earned from the protocol, through the cobbs douglas formula. */
  queryFeeRebates: Scalars['BigInt'];
  /** Total query fees earned by this Subgraph Deployment, without curator query fees */
  queryFeesAmount: Scalars['BigInt'];
  /** Bonding curve reserve ratio. In parts per million */
  reserveRatio: Scalars['Int'];
  /** CURRENT curation signal for this subgraph deployment */
  signalAmount: Scalars['BigInt'];
  /** CURRENT signalled tokens in the bonding curve */
  signalledTokens: Scalars['BigInt'];
  /** CURRENT total stake of all indexers on this Subgraph Deployment */
  stakedTokens: Scalars['BigInt'];
  /** NOT IMPLEMENTED - CURRENT signalled tokens in the bonding curve */
  unsignalledTokens: Scalars['BigInt'];
  /** The versions this subgraph deployment relates to */
  versions: Array<Analytics__SubgraphVersion>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 */
export type Analytics__SubgraphDeploymentCuratorSignalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Signal_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__Signal_Filter>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 */
export type Analytics__SubgraphDeploymentDailyDataArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__SubgraphDeploymentDailyData_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__SubgraphDeploymentDailyData_Filter>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 */
export type Analytics__SubgraphDeploymentIndexerAllocationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__Allocation_Filter>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 */
export type Analytics__SubgraphDeploymentVersionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Analytics__SubgraphVersion_Filter>;
};

export type Analytics__SubgraphDeploymentDailyData = {
  __typename?: 'ANALYTICS__SubgraphDeploymentDailyData';
  /** [CUMULATIVE] Total curator rewards from fees */
  curatorFeeRewards: Scalars['BigInt'];
  /** Timestamp for the end of the day that this entity represents. UTC+0 */
  dayEnd: Scalars['BigInt'];
  /** Number of the day this entity represents. Day 0 is the network launch day. */
  dayNumber: Scalars['Int'];
  /** Timestamp for the start of the day that this entity represents. UTC+0 */
  dayStart: Scalars['BigInt'];
  /** [CUMULATIVE] Total query fee rebates for delegators earned from the protocol, through the cobbs douglas formula. */
  delegatorQueryFees: Scalars['BigInt'];
  /** <SUBGRAPH ID>-<DAY NUMBER> */
  id: Scalars['ID'];
  /** [CUMULATIVE] Total rewards accrued all time by delegators */
  indexingDelegatorRewardAmount: Scalars['BigInt'];
  /** [CUMULATIVE] Total rewards accrued all time by indexers */
  indexingIndexerRewardAmount: Scalars['BigInt'];
  /** [CUMULATIVE] Total rewards accrued all time by this Subgraph Deployment. Includes delegator and indexer rewards */
  indexingRewardAmount: Scalars['BigInt'];
  /** [CURRENT] Value of pricePerShare for the original entity at this specific day */
  pricePerShare: Scalars['ANALYTICS__BigDecimal'];
  /** [CUMULATIVE] Total query fee rebates for indexers earned from the protocol, through the cobbs douglas formula. */
  queryFeeRebates: Scalars['BigInt'];
  /** [CUMULATIVE] Total query fees earned by this Subgraph Deployment, without curator query fees */
  queryFeesAmount: Scalars['BigInt'];
  /** [CURRENT] Amount of signal on this deployment at this specific day */
  signalAmount: Scalars['BigInt'];
  /** [CURRENT] Amount of signalled tokens on this deployment at this specific day */
  signalledTokens: Scalars['BigInt'];
  /** [CURRENT] Amount of allocated/staked tokens on this deployment at this specific day */
  stakedTokens: Scalars['BigInt'];
  /** Original entity that the daily data entity tracks */
  subgraphDeployment: Analytics__SubgraphDeployment;
};

export type Analytics__SubgraphDeploymentDailyData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  curatorFeeRewards?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorFeeRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd_lt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayNumber?: InputMaybe<Scalars['Int']>;
  dayNumber_gt?: InputMaybe<Scalars['Int']>;
  dayNumber_gte?: InputMaybe<Scalars['Int']>;
  dayNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  dayNumber_lt?: InputMaybe<Scalars['Int']>;
  dayNumber_lte?: InputMaybe<Scalars['Int']>;
  dayNumber_not?: InputMaybe<Scalars['Int']>;
  dayNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dayStart?: InputMaybe<Scalars['BigInt']>;
  dayStart_gt?: InputMaybe<Scalars['BigInt']>;
  dayStart_gte?: InputMaybe<Scalars['BigInt']>;
  dayStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayStart_lt?: InputMaybe<Scalars['BigInt']>;
  dayStart_lte?: InputMaybe<Scalars['BigInt']>;
  dayStart_not?: InputMaybe<Scalars['BigInt']>;
  dayStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorQueryFees?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexingDelegatorRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pricePerShare?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  pricePerShare_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesAmount?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesAmount_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<Analytics__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Analytics__SubgraphDeploymentDailyData_OrderBy {
  CuratorFeeRewards = 'curatorFeeRewards',
  DayEnd = 'dayEnd',
  DayNumber = 'dayNumber',
  DayStart = 'dayStart',
  DelegatorQueryFees = 'delegatorQueryFees',
  Id = 'id',
  IndexingDelegatorRewardAmount = 'indexingDelegatorRewardAmount',
  IndexingIndexerRewardAmount = 'indexingIndexerRewardAmount',
  IndexingRewardAmount = 'indexingRewardAmount',
  PricePerShare = 'pricePerShare',
  QueryFeeRebates = 'queryFeeRebates',
  QueryFeesAmount = 'queryFeesAmount',
  SignalAmount = 'signalAmount',
  SignalledTokens = 'signalledTokens',
  StakedTokens = 'stakedTokens',
  SubgraphDeployment = 'subgraphDeployment'
}

export type Analytics__SubgraphDeployment_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  curatorFeeRewards?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorFeeRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorSignals_?: InputMaybe<Analytics__Signal_Filter>;
  dailyData_?: InputMaybe<Analytics__SubgraphDeploymentDailyData_Filter>;
  delegatorQueryFees?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deniedAt?: InputMaybe<Scalars['Int']>;
  deniedAt_gt?: InputMaybe<Scalars['Int']>;
  deniedAt_gte?: InputMaybe<Scalars['Int']>;
  deniedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  deniedAt_lt?: InputMaybe<Scalars['Int']>;
  deniedAt_lte?: InputMaybe<Scalars['Int']>;
  deniedAt_not?: InputMaybe<Scalars['Int']>;
  deniedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexerAllocations_?: InputMaybe<Analytics__Allocation_Filter>;
  indexingDelegatorRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pricePerShare?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  pricePerShare_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesAmount?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesAmount_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveRatio?: InputMaybe<Scalars['Int']>;
  reserveRatio_gt?: InputMaybe<Scalars['Int']>;
  reserveRatio_gte?: InputMaybe<Scalars['Int']>;
  reserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  reserveRatio_lt?: InputMaybe<Scalars['Int']>;
  reserveRatio_lte?: InputMaybe<Scalars['Int']>;
  reserveRatio_not?: InputMaybe<Scalars['Int']>;
  reserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signalAmount?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versions_?: InputMaybe<Analytics__SubgraphVersion_Filter>;
};

export enum Analytics__SubgraphDeployment_OrderBy {
  CreatedAt = 'createdAt',
  CuratorFeeRewards = 'curatorFeeRewards',
  CuratorSignals = 'curatorSignals',
  DailyData = 'dailyData',
  DelegatorQueryFees = 'delegatorQueryFees',
  DeniedAt = 'deniedAt',
  Id = 'id',
  IndexerAllocations = 'indexerAllocations',
  IndexingDelegatorRewardAmount = 'indexingDelegatorRewardAmount',
  IndexingIndexerRewardAmount = 'indexingIndexerRewardAmount',
  IndexingRewardAmount = 'indexingRewardAmount',
  PricePerShare = 'pricePerShare',
  QueryFeeRebates = 'queryFeeRebates',
  QueryFeesAmount = 'queryFeesAmount',
  ReserveRatio = 'reserveRatio',
  SignalAmount = 'signalAmount',
  SignalledTokens = 'signalledTokens',
  StakedTokens = 'stakedTokens',
  UnsignalledTokens = 'unsignalledTokens',
  Versions = 'versions'
}

/**
 * The SubgraphVersion entity represents a version of the Subgraph. A new SubgraphVersion is created
 * whenever there is an update to the Subgraph triggered by the owner. The new SubgraphVersion can
 * then point to a new SubgraphDeployment, thus allowing the Subgraph to resolve to a different
 * deployment, while keeping the same endpoint. The metadata and label are stored on IPFS. The label
 * is for the developer to provide a semantic version. This is different from the version, which is
 * just a counter than increases each time a new SubgraphVersion is created for a Subgraph.
 */
export type Analytics__SubgraphVersion = {
  __typename?: 'ANALYTICS__SubgraphVersion';
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  entityVersion: Scalars['Int'];
  /** Concatenation of subgraph, subgraph deployment, and version ID */
  id: Scalars['ID'];
  linkedEntity?: Maybe<Analytics__SubgraphVersion>;
  /** Subgraph version metadata content address */
  metadataHash?: Maybe<Scalars['ANALYTICS__Bytes']>;
  /** Subgraph of this version */
  subgraph: Analytics__Subgraph;
  /** Subgraph deployment of this version */
  subgraphDeployment: Analytics__SubgraphDeployment;
  /** Version number */
  version: Scalars['Int'];
};

export type Analytics__SubgraphVersion_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  entityVersion?: InputMaybe<Scalars['Int']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  entityVersion_lt?: InputMaybe<Scalars['Int']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']>;
  entityVersion_not?: InputMaybe<Scalars['Int']>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  linkedEntity?: InputMaybe<Scalars['String']>;
  linkedEntity_?: InputMaybe<Analytics__SubgraphVersion_Filter>;
  linkedEntity_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_lt?: InputMaybe<Scalars['String']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']>;
  linkedEntity_not?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  metadataHash_lt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<Analytics__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Analytics__Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Analytics__SubgraphVersion_OrderBy {
  CreatedAt = 'createdAt',
  EntityVersion = 'entityVersion',
  Id = 'id',
  LinkedEntity = 'linkedEntity',
  MetadataHash = 'metadataHash',
  Subgraph = 'subgraph',
  SubgraphDeployment = 'subgraphDeployment',
  Version = 'version'
}

export type Analytics__Subgraph_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  creatorAddress?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creatorAddress_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creatorAddress_gt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creatorAddress_gte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creatorAddress_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  creatorAddress_lt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creatorAddress_lte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creatorAddress_not?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creatorAddress_not_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creatorAddress_not_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  currentVersion?: InputMaybe<Scalars['String']>;
  currentVersion_?: InputMaybe<Analytics__SubgraphVersion_Filter>;
  currentVersion_contains?: InputMaybe<Scalars['String']>;
  currentVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_ends_with?: InputMaybe<Scalars['String']>;
  currentVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_gt?: InputMaybe<Scalars['String']>;
  currentVersion_gte?: InputMaybe<Scalars['String']>;
  currentVersion_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersion_lt?: InputMaybe<Scalars['String']>;
  currentVersion_lte?: InputMaybe<Scalars['String']>;
  currentVersion_not?: InputMaybe<Scalars['String']>;
  currentVersion_not_contains?: InputMaybe<Scalars['String']>;
  currentVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  currentVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  currentVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_starts_with?: InputMaybe<Scalars['String']>;
  currentVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entityVersion?: InputMaybe<Scalars['Int']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  entityVersion_lt?: InputMaybe<Scalars['Int']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']>;
  entityVersion_not?: InputMaybe<Scalars['Int']>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  initializing?: InputMaybe<Scalars['Boolean']>;
  initializing_in?: InputMaybe<Array<Scalars['Boolean']>>;
  initializing_not?: InputMaybe<Scalars['Boolean']>;
  initializing_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  linkedEntity?: InputMaybe<Scalars['String']>;
  linkedEntity_?: InputMaybe<Analytics__Subgraph_Filter>;
  linkedEntity_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_lt?: InputMaybe<Scalars['String']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']>;
  linkedEntity_not?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  metadataHash_lt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  migrated?: InputMaybe<Scalars['Boolean']>;
  migrated_in?: InputMaybe<Array<Scalars['Boolean']>>;
  migrated_not?: InputMaybe<Scalars['Boolean']>;
  migrated_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  nameSignalAmount?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_not?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignals_?: InputMaybe<Analytics__NameSignal_Filter>;
  nftID?: InputMaybe<Scalars['String']>;
  nftID_contains?: InputMaybe<Scalars['String']>;
  nftID_contains_nocase?: InputMaybe<Scalars['String']>;
  nftID_ends_with?: InputMaybe<Scalars['String']>;
  nftID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftID_gt?: InputMaybe<Scalars['String']>;
  nftID_gte?: InputMaybe<Scalars['String']>;
  nftID_in?: InputMaybe<Array<Scalars['String']>>;
  nftID_lt?: InputMaybe<Scalars['String']>;
  nftID_lte?: InputMaybe<Scalars['String']>;
  nftID_not?: InputMaybe<Scalars['String']>;
  nftID_not_contains?: InputMaybe<Scalars['String']>;
  nftID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nftID_not_ends_with?: InputMaybe<Scalars['String']>;
  nftID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftID_not_in?: InputMaybe<Array<Scalars['String']>>;
  nftID_not_starts_with?: InputMaybe<Scalars['String']>;
  nftID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftID_starts_with?: InputMaybe<Scalars['String']>;
  nftID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldID?: InputMaybe<Scalars['String']>;
  oldID_contains?: InputMaybe<Scalars['String']>;
  oldID_contains_nocase?: InputMaybe<Scalars['String']>;
  oldID_ends_with?: InputMaybe<Scalars['String']>;
  oldID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oldID_gt?: InputMaybe<Scalars['String']>;
  oldID_gte?: InputMaybe<Scalars['String']>;
  oldID_in?: InputMaybe<Array<Scalars['String']>>;
  oldID_lt?: InputMaybe<Scalars['String']>;
  oldID_lte?: InputMaybe<Scalars['String']>;
  oldID_not?: InputMaybe<Scalars['String']>;
  oldID_not_contains?: InputMaybe<Scalars['String']>;
  oldID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  oldID_not_ends_with?: InputMaybe<Scalars['String']>;
  oldID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oldID_not_in?: InputMaybe<Array<Scalars['String']>>;
  oldID_not_starts_with?: InputMaybe<Scalars['String']>;
  oldID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldID_starts_with?: InputMaybe<Scalars['String']>;
  oldID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Analytics__GraphAccount_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pastVersions_?: InputMaybe<Analytics__SubgraphVersion_Filter>;
  reserveRatio?: InputMaybe<Scalars['Int']>;
  reserveRatio_gt?: InputMaybe<Scalars['Int']>;
  reserveRatio_gte?: InputMaybe<Scalars['Int']>;
  reserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  reserveRatio_lt?: InputMaybe<Scalars['Int']>;
  reserveRatio_lte?: InputMaybe<Scalars['Int']>;
  reserveRatio_not?: InputMaybe<Scalars['Int']>;
  reserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphNumber?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_gt?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_gte?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphNumber_lt?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_lte?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_not?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['Int']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt_lt?: InputMaybe<Scalars['Int']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']>;
  updatedAt_not?: InputMaybe<Scalars['Int']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  versionCount?: InputMaybe<Scalars['BigInt']>;
  versionCount_gt?: InputMaybe<Scalars['BigInt']>;
  versionCount_gte?: InputMaybe<Scalars['BigInt']>;
  versionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versionCount_lt?: InputMaybe<Scalars['BigInt']>;
  versionCount_lte?: InputMaybe<Scalars['BigInt']>;
  versionCount_not?: InputMaybe<Scalars['BigInt']>;
  versionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versions_?: InputMaybe<Analytics__SubgraphVersion_Filter>;
  withdrawableTokens?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawableTokens_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_not?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Analytics__Subgraph_OrderBy {
  Active = 'active',
  CreatedAt = 'createdAt',
  CreatorAddress = 'creatorAddress',
  CurrentVersion = 'currentVersion',
  EntityVersion = 'entityVersion',
  Id = 'id',
  Initializing = 'initializing',
  LinkedEntity = 'linkedEntity',
  MetadataHash = 'metadataHash',
  Migrated = 'migrated',
  NameSignalAmount = 'nameSignalAmount',
  NameSignals = 'nameSignals',
  NftId = 'nftID',
  OldId = 'oldID',
  Owner = 'owner',
  PastVersions = 'pastVersions',
  ReserveRatio = 'reserveRatio',
  SignalledTokens = 'signalledTokens',
  SubgraphNumber = 'subgraphNumber',
  UnsignalledTokens = 'unsignalledTokens',
  UpdatedAt = 'updatedAt',
  VersionCount = 'versionCount',
  Versions = 'versions',
  WithdrawableTokens = 'withdrawableTokens',
  WithdrawnTokens = 'withdrawnTokens'
}

/** A generic transaction in The Graph Network */
export type Analytics__Transaction = {
  /** Block number for the transaction */
  blockNumber: Scalars['Int'];
  /** Transaction hash concatenated with event log index */
  id: Scalars['ID'];
  /** Signer of the transaction */
  signer: Analytics__GraphAccount;
  /** Timestamp for the transaction */
  timestamp: Scalars['Int'];
  /** Type of Graph Network transaction */
  type: Analytics__TransactionType;
};

export enum Analytics__TransactionType {
  BurnNSignal = 'BurnNSignal',
  BurnSignal = 'BurnSignal',
  MintNSignal = 'MintNSignal',
  MintSignal = 'MintSignal',
  Stake = 'Stake',
  Unstake = 'Unstake'
}

export type Analytics__Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Analytics__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<Analytics__GraphAccount_Filter>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  type?: InputMaybe<Analytics__TransactionType>;
  type_in?: InputMaybe<Array<Analytics__TransactionType>>;
  type_not?: InputMaybe<Analytics__TransactionType>;
  type_not_in?: InputMaybe<Array<Analytics__TransactionType>>;
};

export enum Analytics__Transaction_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  Signer = 'signer',
  Timestamp = 'timestamp',
  Type = 'type'
}

export type Analytics___Block_ = {
  __typename?: 'ANALYTICS___Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['ANALYTICS__Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type Analytics___Meta_ = {
  __typename?: 'ANALYTICS___Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: Analytics___Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum Analytics___SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

/** Billing holds global variables */
export type Billing__Billing = {
  __typename?: 'BILLING__Billing';
  /** Current BillingDailyData entity created */
  currentDailyDataEntity?: Maybe<Billing__BillingDailyData>;
  /** Address of the gateway */
  gateway: Scalars['BILLING__Bytes'];
  /** Address of the governor */
  governor: Scalars['BILLING__Bytes'];
  /** Set to 1 */
  id: Scalars['ID'];
  /** Previous BillingDailyData entity created */
  previousDailyDataEntity?: Maybe<Billing__BillingDailyData>;
  /** [CURRENT] Total amount of currently available balance (totalTokensAdded - totalTokensPulled - totalTokensRemoved) */
  totalCurrentBalance: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens added */
  totalTokensAdded: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens pulled */
  totalTokensPulled: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens removed/withdrawn */
  totalTokensRemoved: Scalars['BigInt'];
};

export type Billing__BillingDailyData = {
  __typename?: 'BILLING__BillingDailyData';
  /** Timestamp for the end of the day that this entity represents. UTC+0 */
  dayEnd: Scalars['BigInt'];
  /** Number of the day this entity represents. Day 0 is the network launch day. */
  dayNumber: Scalars['Int'];
  /** Timestamp for the start of the day that this entity represents. UTC+0 */
  dayStart: Scalars['BigInt'];
  /** Original entity that the daily data entity tracks */
  entity: Billing__Billing;
  /** Address of the gateway */
  gateway: Scalars['BILLING__Bytes'];
  /** Address of the governor */
  governor: Scalars['BILLING__Bytes'];
  /** <SUBGRAPH ID>-<DAY NUMBER> */
  id: Scalars['ID'];
  /** [CURRENT] Total amount of currently available balance (totalTokensAdded - totalTokensPulled - totalTokensRemoved) */
  totalCurrentBalance: Scalars['BigInt'];
  /** [DELTA] Chage in total currently available balance since the last DailyData point */
  totalCurrentBalanceDelta: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens added */
  totalTokensAdded: Scalars['BigInt'];
  /** [DELTA] Chage in total tokens added since the last DailyData point */
  totalTokensAddedDelta: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens pulled */
  totalTokensPulled: Scalars['BigInt'];
  /** [DELTA] Chage in total tokens pulled since the last DailyData point */
  totalTokensPulledDelta: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens removed/withdrawn */
  totalTokensRemoved: Scalars['BigInt'];
  /** [DELTA] Chage in total tokens removed/withdrawn since the last DailyData point */
  totalTokensRemovedDelta: Scalars['BigInt'];
};

export type Billing__BillingDailyData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Billing__BlockChangedFilter>;
  dayEnd?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd_lt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayNumber?: InputMaybe<Scalars['Int']>;
  dayNumber_gt?: InputMaybe<Scalars['Int']>;
  dayNumber_gte?: InputMaybe<Scalars['Int']>;
  dayNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  dayNumber_lt?: InputMaybe<Scalars['Int']>;
  dayNumber_lte?: InputMaybe<Scalars['Int']>;
  dayNumber_not?: InputMaybe<Scalars['Int']>;
  dayNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dayStart?: InputMaybe<Scalars['BigInt']>;
  dayStart_gt?: InputMaybe<Scalars['BigInt']>;
  dayStart_gte?: InputMaybe<Scalars['BigInt']>;
  dayStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayStart_lt?: InputMaybe<Scalars['BigInt']>;
  dayStart_lte?: InputMaybe<Scalars['BigInt']>;
  dayStart_not?: InputMaybe<Scalars['BigInt']>;
  dayStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  entity?: InputMaybe<Scalars['String']>;
  entity_?: InputMaybe<Billing__Billing_Filter>;
  entity_contains?: InputMaybe<Scalars['String']>;
  entity_contains_nocase?: InputMaybe<Scalars['String']>;
  entity_ends_with?: InputMaybe<Scalars['String']>;
  entity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  entity_gt?: InputMaybe<Scalars['String']>;
  entity_gte?: InputMaybe<Scalars['String']>;
  entity_in?: InputMaybe<Array<Scalars['String']>>;
  entity_lt?: InputMaybe<Scalars['String']>;
  entity_lte?: InputMaybe<Scalars['String']>;
  entity_not?: InputMaybe<Scalars['String']>;
  entity_not_contains?: InputMaybe<Scalars['String']>;
  entity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  entity_not_ends_with?: InputMaybe<Scalars['String']>;
  entity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  entity_not_in?: InputMaybe<Array<Scalars['String']>>;
  entity_not_starts_with?: InputMaybe<Scalars['String']>;
  entity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entity_starts_with?: InputMaybe<Scalars['String']>;
  entity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  gateway?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  gateway_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  governor?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  governor_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalCurrentBalance?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalanceDelta?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalanceDelta_gt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalanceDelta_gte?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalanceDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCurrentBalanceDelta_lt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalanceDelta_lte?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalanceDelta_not?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalanceDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCurrentBalance_gt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_gte?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCurrentBalance_lt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_lte?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_not?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAdded?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAddedDelta_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAdded_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAdded_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulledDelta_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemovedDelta_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Billing__BillingDailyData_OrderBy {
  DayEnd = 'dayEnd',
  DayNumber = 'dayNumber',
  DayStart = 'dayStart',
  Entity = 'entity',
  Gateway = 'gateway',
  Governor = 'governor',
  Id = 'id',
  TotalCurrentBalance = 'totalCurrentBalance',
  TotalCurrentBalanceDelta = 'totalCurrentBalanceDelta',
  TotalTokensAdded = 'totalTokensAdded',
  TotalTokensAddedDelta = 'totalTokensAddedDelta',
  TotalTokensPulled = 'totalTokensPulled',
  TotalTokensPulledDelta = 'totalTokensPulledDelta',
  TotalTokensRemoved = 'totalTokensRemoved',
  TotalTokensRemovedDelta = 'totalTokensRemovedDelta'
}

export type Billing__Billing_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Billing__BlockChangedFilter>;
  currentDailyDataEntity?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_?: InputMaybe<Billing__BillingDailyData_Filter>;
  currentDailyDataEntity_contains?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_ends_with?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_gt?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_gte?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_in?: InputMaybe<Array<Scalars['String']>>;
  currentDailyDataEntity_lt?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_lte?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_contains?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentDailyDataEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_starts_with?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  gateway?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  gateway_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  governor?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  governor_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  previousDailyDataEntity?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_?: InputMaybe<Billing__BillingDailyData_Filter>;
  previousDailyDataEntity_contains?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_ends_with?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_gt?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_gte?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_in?: InputMaybe<Array<Scalars['String']>>;
  previousDailyDataEntity_lt?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_lte?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_contains?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  previousDailyDataEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_starts_with?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalCurrentBalance?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_gt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_gte?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCurrentBalance_lt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_lte?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_not?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAdded?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAdded_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Billing__Billing_OrderBy {
  CurrentDailyDataEntity = 'currentDailyDataEntity',
  Gateway = 'gateway',
  Governor = 'governor',
  Id = 'id',
  PreviousDailyDataEntity = 'previousDailyDataEntity',
  TotalCurrentBalance = 'totalCurrentBalance',
  TotalTokensAdded = 'totalTokensAdded',
  TotalTokensPulled = 'totalTokensPulled',
  TotalTokensRemoved = 'totalTokensRemoved'
}

export type Billing__BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Billing__Block_Height = {
  hash?: InputMaybe<Scalars['BILLING__Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/** Defines the order direction, either ascending or descending */
export enum Billing__OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

/** TokensAdded Transaction */
export type Billing__TokensAdded = Billing__Transaction & {
  __typename?: 'BILLING__TokensAdded';
  amount: Scalars['BigInt'];
  blockNumber: Scalars['Int'];
  hash: Scalars['BILLING__Bytes'];
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  type: Billing__TransactionType;
  user: Billing__User;
};

export type Billing__TokensAdded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Billing__BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hash?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  hash_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  type?: InputMaybe<Billing__TransactionType>;
  type_in?: InputMaybe<Array<Billing__TransactionType>>;
  type_not?: InputMaybe<Billing__TransactionType>;
  type_not_in?: InputMaybe<Array<Billing__TransactionType>>;
  user?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<Billing__User_Filter>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Billing__TokensAdded_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Hash = 'hash',
  Id = 'id',
  Timestamp = 'timestamp',
  Type = 'type',
  User = 'user'
}

/** TokensPulled Transaction. Where the gateway pulls tokens from the user */
export type Billing__TokensPulled = Billing__Transaction & {
  __typename?: 'BILLING__TokensPulled';
  amount: Scalars['BigInt'];
  blockNumber: Scalars['Int'];
  hash: Scalars['BILLING__Bytes'];
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  type: Billing__TransactionType;
  user: Billing__User;
};

export type Billing__TokensPulled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Billing__BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hash?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  hash_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  type?: InputMaybe<Billing__TransactionType>;
  type_in?: InputMaybe<Array<Billing__TransactionType>>;
  type_not?: InputMaybe<Billing__TransactionType>;
  type_not_in?: InputMaybe<Array<Billing__TransactionType>>;
  user?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<Billing__User_Filter>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Billing__TokensPulled_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Hash = 'hash',
  Id = 'id',
  Timestamp = 'timestamp',
  Type = 'type',
  User = 'user'
}

/** TokensRemoved Transaction */
export type Billing__TokensRemoved = Billing__Transaction & {
  __typename?: 'BILLING__TokensRemoved';
  amount: Scalars['BigInt'];
  blockNumber: Scalars['Int'];
  hash: Scalars['BILLING__Bytes'];
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  /** User that the tokens are withdrawn to */
  to: Scalars['BILLING__Bytes'];
  type: Billing__TransactionType;
  user: Billing__User;
};

export type Billing__TokensRemoved_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Billing__BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hash?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  hash_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  to?: InputMaybe<Scalars['BILLING__Bytes']>;
  to_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  to_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  to_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  to_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  to_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  to_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  to_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  to_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  to_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  type?: InputMaybe<Billing__TransactionType>;
  type_in?: InputMaybe<Array<Billing__TransactionType>>;
  type_not?: InputMaybe<Billing__TransactionType>;
  type_not_in?: InputMaybe<Array<Billing__TransactionType>>;
  user?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<Billing__User_Filter>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Billing__TokensRemoved_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Hash = 'hash',
  Id = 'id',
  Timestamp = 'timestamp',
  To = 'to',
  Type = 'type',
  User = 'user'
}

/** A generic transaction */
export type Billing__Transaction = {
  /** Amount of tokens used in the transaction */
  amount: Scalars['BigInt'];
  /** Block number for the transaction */
  blockNumber: Scalars['Int'];
  /** Transaction hash */
  hash: Scalars['BILLING__Bytes'];
  /** Transaction hash concatenated with event log index */
  id: Scalars['ID'];
  /** Timestamp for the transaction */
  timestamp: Scalars['Int'];
  /** Type of Graph Network transaction */
  type: Billing__TransactionType;
  /** User of the transaction */
  user: Billing__User;
};

export enum Billing__TransactionType {
  TokensAdded = 'TokensAdded',
  TokensPulled = 'TokensPulled',
  TokensRemoved = 'TokensRemoved'
}

export type Billing__Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Billing__BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hash?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  hash_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  type?: InputMaybe<Billing__TransactionType>;
  type_in?: InputMaybe<Array<Billing__TransactionType>>;
  type_not?: InputMaybe<Billing__TransactionType>;
  type_not_in?: InputMaybe<Array<Billing__TransactionType>>;
  user?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<Billing__User_Filter>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Billing__Transaction_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  Hash = 'hash',
  Id = 'id',
  Timestamp = 'timestamp',
  Type = 'type',
  User = 'user'
}

/** Curator Name Signal for a single Subgraph */
export type Billing__User = {
  __typename?: 'BILLING__User';
  /** Balance of the user in the Billing contract */
  billingBalance: Scalars['BigInt'];
  /** Current UserDailyData entity created */
  currentDailyDataEntity?: Maybe<Billing__UserDailyData>;
  /** Polygon address */
  id: Scalars['ID'];
  /** [DEPRECATED] Total polygonGRT balance */
  polygonGRTBalance: Scalars['BigInt'];
  /** Previous UserDailyData entity created */
  previousDailyDataEntity?: Maybe<Billing__UserDailyData>;
  /** [CUMULATIVE] Total amount of tokens added */
  totalTokensAdded: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens pulled */
  totalTokensPulled: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens removed/withdrawn */
  totalTokensRemoved: Scalars['BigInt'];
  /** All transactions of this user */
  transactions: Array<Billing__Transaction>;
};


/** Curator Name Signal for a single Subgraph */
export type Billing__UserTransactionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__Transaction_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Billing__Transaction_Filter>;
};

export type Billing__UserDailyData = {
  __typename?: 'BILLING__UserDailyData';
  /** [CURRENT] Amount of currently available balance */
  billingBalance: Scalars['BigInt'];
  /** [DELTA] Chage in total currently available balance since the last DailyData point */
  billingBalanceDelta: Scalars['BigInt'];
  /** Timestamp for the end of the day that this entity represents. UTC+0 */
  dayEnd: Scalars['BigInt'];
  /** Number of the day this entity represents. Day 0 is the network launch day. */
  dayNumber: Scalars['Int'];
  /** Timestamp for the start of the day that this entity represents. UTC+0 */
  dayStart: Scalars['BigInt'];
  /** Original entity that the daily data entity tracks */
  entity: Billing__User;
  /** <SUBGRAPH ID>-<DAY NUMBER> */
  id: Scalars['ID'];
  /** [CUMULATIVE] Total amount of tokens added */
  totalTokensAdded: Scalars['BigInt'];
  /** [DELTA] Chage in total tokens added since the last DailyData point */
  totalTokensAddedDelta: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens pulled */
  totalTokensPulled: Scalars['BigInt'];
  /** [DELTA] Chage in total tokens pulled since the last DailyData point */
  totalTokensPulledDelta: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens removed/withdrawn */
  totalTokensRemoved: Scalars['BigInt'];
  /** [DELTA] Chage in total tokens removed/withdrawn since the last DailyData point */
  totalTokensRemovedDelta: Scalars['BigInt'];
};

export type Billing__UserDailyData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Billing__BlockChangedFilter>;
  billingBalance?: InputMaybe<Scalars['BigInt']>;
  billingBalanceDelta?: InputMaybe<Scalars['BigInt']>;
  billingBalanceDelta_gt?: InputMaybe<Scalars['BigInt']>;
  billingBalanceDelta_gte?: InputMaybe<Scalars['BigInt']>;
  billingBalanceDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  billingBalanceDelta_lt?: InputMaybe<Scalars['BigInt']>;
  billingBalanceDelta_lte?: InputMaybe<Scalars['BigInt']>;
  billingBalanceDelta_not?: InputMaybe<Scalars['BigInt']>;
  billingBalanceDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  billingBalance_gt?: InputMaybe<Scalars['BigInt']>;
  billingBalance_gte?: InputMaybe<Scalars['BigInt']>;
  billingBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  billingBalance_lt?: InputMaybe<Scalars['BigInt']>;
  billingBalance_lte?: InputMaybe<Scalars['BigInt']>;
  billingBalance_not?: InputMaybe<Scalars['BigInt']>;
  billingBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd_lt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayNumber?: InputMaybe<Scalars['Int']>;
  dayNumber_gt?: InputMaybe<Scalars['Int']>;
  dayNumber_gte?: InputMaybe<Scalars['Int']>;
  dayNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  dayNumber_lt?: InputMaybe<Scalars['Int']>;
  dayNumber_lte?: InputMaybe<Scalars['Int']>;
  dayNumber_not?: InputMaybe<Scalars['Int']>;
  dayNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dayStart?: InputMaybe<Scalars['BigInt']>;
  dayStart_gt?: InputMaybe<Scalars['BigInt']>;
  dayStart_gte?: InputMaybe<Scalars['BigInt']>;
  dayStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayStart_lt?: InputMaybe<Scalars['BigInt']>;
  dayStart_lte?: InputMaybe<Scalars['BigInt']>;
  dayStart_not?: InputMaybe<Scalars['BigInt']>;
  dayStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  entity?: InputMaybe<Scalars['String']>;
  entity_?: InputMaybe<Billing__User_Filter>;
  entity_contains?: InputMaybe<Scalars['String']>;
  entity_contains_nocase?: InputMaybe<Scalars['String']>;
  entity_ends_with?: InputMaybe<Scalars['String']>;
  entity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  entity_gt?: InputMaybe<Scalars['String']>;
  entity_gte?: InputMaybe<Scalars['String']>;
  entity_in?: InputMaybe<Array<Scalars['String']>>;
  entity_lt?: InputMaybe<Scalars['String']>;
  entity_lte?: InputMaybe<Scalars['String']>;
  entity_not?: InputMaybe<Scalars['String']>;
  entity_not_contains?: InputMaybe<Scalars['String']>;
  entity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  entity_not_ends_with?: InputMaybe<Scalars['String']>;
  entity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  entity_not_in?: InputMaybe<Array<Scalars['String']>>;
  entity_not_starts_with?: InputMaybe<Scalars['String']>;
  entity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entity_starts_with?: InputMaybe<Scalars['String']>;
  entity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalTokensAdded?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAddedDelta_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAdded_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAdded_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulledDelta_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemovedDelta_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Billing__UserDailyData_OrderBy {
  BillingBalance = 'billingBalance',
  BillingBalanceDelta = 'billingBalanceDelta',
  DayEnd = 'dayEnd',
  DayNumber = 'dayNumber',
  DayStart = 'dayStart',
  Entity = 'entity',
  Id = 'id',
  TotalTokensAdded = 'totalTokensAdded',
  TotalTokensAddedDelta = 'totalTokensAddedDelta',
  TotalTokensPulled = 'totalTokensPulled',
  TotalTokensPulledDelta = 'totalTokensPulledDelta',
  TotalTokensRemoved = 'totalTokensRemoved',
  TotalTokensRemovedDelta = 'totalTokensRemovedDelta'
}

export type Billing__User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Billing__BlockChangedFilter>;
  billingBalance?: InputMaybe<Scalars['BigInt']>;
  billingBalance_gt?: InputMaybe<Scalars['BigInt']>;
  billingBalance_gte?: InputMaybe<Scalars['BigInt']>;
  billingBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  billingBalance_lt?: InputMaybe<Scalars['BigInt']>;
  billingBalance_lte?: InputMaybe<Scalars['BigInt']>;
  billingBalance_not?: InputMaybe<Scalars['BigInt']>;
  billingBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentDailyDataEntity?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_?: InputMaybe<Billing__UserDailyData_Filter>;
  currentDailyDataEntity_contains?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_ends_with?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_gt?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_gte?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_in?: InputMaybe<Array<Scalars['String']>>;
  currentDailyDataEntity_lt?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_lte?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_contains?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentDailyDataEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_starts_with?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  polygonGRTBalance?: InputMaybe<Scalars['BigInt']>;
  polygonGRTBalance_gt?: InputMaybe<Scalars['BigInt']>;
  polygonGRTBalance_gte?: InputMaybe<Scalars['BigInt']>;
  polygonGRTBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  polygonGRTBalance_lt?: InputMaybe<Scalars['BigInt']>;
  polygonGRTBalance_lte?: InputMaybe<Scalars['BigInt']>;
  polygonGRTBalance_not?: InputMaybe<Scalars['BigInt']>;
  polygonGRTBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  previousDailyDataEntity?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_?: InputMaybe<Billing__UserDailyData_Filter>;
  previousDailyDataEntity_contains?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_ends_with?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_gt?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_gte?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_in?: InputMaybe<Array<Scalars['String']>>;
  previousDailyDataEntity_lt?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_lte?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_contains?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  previousDailyDataEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_starts_with?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalTokensAdded?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAdded_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactions_?: InputMaybe<Billing__Transaction_Filter>;
};

export enum Billing__User_OrderBy {
  BillingBalance = 'billingBalance',
  CurrentDailyDataEntity = 'currentDailyDataEntity',
  Id = 'id',
  PolygonGrtBalance = 'polygonGRTBalance',
  PreviousDailyDataEntity = 'previousDailyDataEntity',
  TotalTokensAdded = 'totalTokensAdded',
  TotalTokensPulled = 'totalTokensPulled',
  TotalTokensRemoved = 'totalTokensRemoved',
  Transactions = 'transactions'
}

export type Billing___Block_ = {
  __typename?: 'BILLING___Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['BILLING__Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type Billing___Meta_ = {
  __typename?: 'BILLING___Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: Billing___Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum Billing___SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type Ens__AbiChanged = Ens__ResolverEvent & {
  __typename?: 'ENS__AbiChanged';
  blockNumber: Scalars['Int'];
  contentType: Scalars['BigInt'];
  id: Scalars['ID'];
  resolver: Ens__Resolver;
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__AbiChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  contentType?: InputMaybe<Scalars['BigInt']>;
  contentType_gt?: InputMaybe<Scalars['BigInt']>;
  contentType_gte?: InputMaybe<Scalars['BigInt']>;
  contentType_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contentType_lt?: InputMaybe<Scalars['BigInt']>;
  contentType_lte?: InputMaybe<Scalars['BigInt']>;
  contentType_not?: InputMaybe<Scalars['BigInt']>;
  contentType_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Ens__Resolver_Filter>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__AbiChanged_OrderBy {
  BlockNumber = 'blockNumber',
  ContentType = 'contentType',
  Id = 'id',
  Resolver = 'resolver',
  TransactionId = 'transactionID'
}

export type Ens__Account = {
  __typename?: 'ENS__Account';
  domains: Array<Ens__Domain>;
  id: Scalars['ID'];
  registrations?: Maybe<Array<Ens__Registration>>;
};


export type Ens__AccountDomainsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__Domain_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ens__Domain_Filter>;
};


export type Ens__AccountRegistrationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__Registration_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ens__Registration_Filter>;
};

export type Ens__Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  domains_?: InputMaybe<Ens__Domain_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registrations_?: InputMaybe<Ens__Registration_Filter>;
};

export enum Ens__Account_OrderBy {
  Domains = 'domains',
  Id = 'id',
  Registrations = 'registrations'
}

export type Ens__AddrChanged = Ens__ResolverEvent & {
  __typename?: 'ENS__AddrChanged';
  addr: Ens__Account;
  blockNumber: Scalars['Int'];
  id: Scalars['ID'];
  resolver: Ens__Resolver;
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__AddrChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  addr?: InputMaybe<Scalars['String']>;
  addr_?: InputMaybe<Ens__Account_Filter>;
  addr_contains?: InputMaybe<Scalars['String']>;
  addr_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_ends_with?: InputMaybe<Scalars['String']>;
  addr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_gt?: InputMaybe<Scalars['String']>;
  addr_gte?: InputMaybe<Scalars['String']>;
  addr_in?: InputMaybe<Array<Scalars['String']>>;
  addr_lt?: InputMaybe<Scalars['String']>;
  addr_lte?: InputMaybe<Scalars['String']>;
  addr_not?: InputMaybe<Scalars['String']>;
  addr_not_contains?: InputMaybe<Scalars['String']>;
  addr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_not_ends_with?: InputMaybe<Scalars['String']>;
  addr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_in?: InputMaybe<Array<Scalars['String']>>;
  addr_not_starts_with?: InputMaybe<Scalars['String']>;
  addr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_starts_with?: InputMaybe<Scalars['String']>;
  addr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Ens__Resolver_Filter>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__AddrChanged_OrderBy {
  Addr = 'addr',
  BlockNumber = 'blockNumber',
  Id = 'id',
  Resolver = 'resolver',
  TransactionId = 'transactionID'
}

export type Ens__AuthorisationChanged = Ens__ResolverEvent & {
  __typename?: 'ENS__AuthorisationChanged';
  blockNumber: Scalars['Int'];
  id: Scalars['ID'];
  isAuthorized: Scalars['Boolean'];
  owner: Scalars['ENS__Bytes'];
  resolver: Ens__Resolver;
  target: Scalars['ENS__Bytes'];
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__AuthorisationChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isAuthorized?: InputMaybe<Scalars['Boolean']>;
  isAuthorized_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isAuthorized_not?: InputMaybe<Scalars['Boolean']>;
  isAuthorized_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  owner?: InputMaybe<Scalars['ENS__Bytes']>;
  owner_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  owner_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  owner_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  owner_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  owner_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  owner_not?: InputMaybe<Scalars['ENS__Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Ens__Resolver_Filter>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<Scalars['ENS__Bytes']>;
  target_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  target_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  target_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  target_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  target_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  target_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  target_not?: InputMaybe<Scalars['ENS__Bytes']>;
  target_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  target_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__AuthorisationChanged_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  IsAuthorized = 'isAuthorized',
  Owner = 'owner',
  Resolver = 'resolver',
  Target = 'target',
  TransactionId = 'transactionID'
}

export type Ens__BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Ens__Block_Height = {
  hash?: InputMaybe<Scalars['ENS__Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Ens__ContenthashChanged = Ens__ResolverEvent & {
  __typename?: 'ENS__ContenthashChanged';
  blockNumber: Scalars['Int'];
  hash: Scalars['ENS__Bytes'];
  id: Scalars['ID'];
  resolver: Ens__Resolver;
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__ContenthashChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hash?: InputMaybe<Scalars['ENS__Bytes']>;
  hash_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  hash_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  hash_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  hash_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  hash_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  hash_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  hash_not?: InputMaybe<Scalars['ENS__Bytes']>;
  hash_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  hash_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Ens__Resolver_Filter>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__ContenthashChanged_OrderBy {
  BlockNumber = 'blockNumber',
  Hash = 'hash',
  Id = 'id',
  Resolver = 'resolver',
  TransactionId = 'transactionID'
}

export type Ens__Domain = {
  __typename?: 'ENS__Domain';
  createdAt: Scalars['BigInt'];
  events: Array<Ens__DomainEvent>;
  id: Scalars['ID'];
  isMigrated: Scalars['Boolean'];
  labelName?: Maybe<Scalars['String']>;
  labelhash?: Maybe<Scalars['ENS__Bytes']>;
  name?: Maybe<Scalars['String']>;
  owner: Ens__Account;
  parent?: Maybe<Ens__Domain>;
  resolvedAddress?: Maybe<Ens__Account>;
  resolver?: Maybe<Ens__Resolver>;
  subdomainCount: Scalars['Int'];
  subdomains: Array<Ens__Domain>;
  ttl?: Maybe<Scalars['BigInt']>;
};


export type Ens__DomainEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__DomainEvent_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ens__DomainEvent_Filter>;
};


export type Ens__DomainSubdomainsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__Domain_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ens__Domain_Filter>;
};

export type Ens__DomainEvent = {
  blockNumber: Scalars['Int'];
  domain: Ens__Domain;
  id: Scalars['ID'];
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__DomainEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Ens__Domain_Filter>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__DomainEvent_OrderBy {
  BlockNumber = 'blockNumber',
  Domain = 'domain',
  Id = 'id',
  TransactionId = 'transactionID'
}

export type Ens__Domain_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  events_?: InputMaybe<Ens__DomainEvent_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isMigrated?: InputMaybe<Scalars['Boolean']>;
  isMigrated_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isMigrated_not?: InputMaybe<Scalars['Boolean']>;
  isMigrated_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  labelName?: InputMaybe<Scalars['String']>;
  labelName_contains?: InputMaybe<Scalars['String']>;
  labelName_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_ends_with?: InputMaybe<Scalars['String']>;
  labelName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_gt?: InputMaybe<Scalars['String']>;
  labelName_gte?: InputMaybe<Scalars['String']>;
  labelName_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_lt?: InputMaybe<Scalars['String']>;
  labelName_lte?: InputMaybe<Scalars['String']>;
  labelName_not?: InputMaybe<Scalars['String']>;
  labelName_not_contains?: InputMaybe<Scalars['String']>;
  labelName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_not_starts_with?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_starts_with?: InputMaybe<Scalars['String']>;
  labelName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelhash?: InputMaybe<Scalars['ENS__Bytes']>;
  labelhash_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  labelhash_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  labelhash_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  labelhash_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  labelhash_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  labelhash_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  labelhash_not?: InputMaybe<Scalars['ENS__Bytes']>;
  labelhash_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  labelhash_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Ens__Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['String']>;
  parent_?: InputMaybe<Ens__Domain_Filter>;
  parent_contains?: InputMaybe<Scalars['String']>;
  parent_contains_nocase?: InputMaybe<Scalars['String']>;
  parent_ends_with?: InputMaybe<Scalars['String']>;
  parent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parent_gt?: InputMaybe<Scalars['String']>;
  parent_gte?: InputMaybe<Scalars['String']>;
  parent_in?: InputMaybe<Array<Scalars['String']>>;
  parent_lt?: InputMaybe<Scalars['String']>;
  parent_lte?: InputMaybe<Scalars['String']>;
  parent_not?: InputMaybe<Scalars['String']>;
  parent_not_contains?: InputMaybe<Scalars['String']>;
  parent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  parent_not_ends_with?: InputMaybe<Scalars['String']>;
  parent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parent_not_in?: InputMaybe<Array<Scalars['String']>>;
  parent_not_starts_with?: InputMaybe<Scalars['String']>;
  parent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parent_starts_with?: InputMaybe<Scalars['String']>;
  parent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress?: InputMaybe<Scalars['String']>;
  resolvedAddress_?: InputMaybe<Ens__Account_Filter>;
  resolvedAddress_contains?: InputMaybe<Scalars['String']>;
  resolvedAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_ends_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_gt?: InputMaybe<Scalars['String']>;
  resolvedAddress_gte?: InputMaybe<Scalars['String']>;
  resolvedAddress_in?: InputMaybe<Array<Scalars['String']>>;
  resolvedAddress_lt?: InputMaybe<Scalars['String']>;
  resolvedAddress_lte?: InputMaybe<Scalars['String']>;
  resolvedAddress_not?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_contains?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolvedAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_starts_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Ens__Resolver_Filter>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subdomainCount?: InputMaybe<Scalars['Int']>;
  subdomainCount_gt?: InputMaybe<Scalars['Int']>;
  subdomainCount_gte?: InputMaybe<Scalars['Int']>;
  subdomainCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subdomainCount_lt?: InputMaybe<Scalars['Int']>;
  subdomainCount_lte?: InputMaybe<Scalars['Int']>;
  subdomainCount_not?: InputMaybe<Scalars['Int']>;
  subdomainCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subdomains_?: InputMaybe<Ens__Domain_Filter>;
  ttl?: InputMaybe<Scalars['BigInt']>;
  ttl_gt?: InputMaybe<Scalars['BigInt']>;
  ttl_gte?: InputMaybe<Scalars['BigInt']>;
  ttl_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ttl_lt?: InputMaybe<Scalars['BigInt']>;
  ttl_lte?: InputMaybe<Scalars['BigInt']>;
  ttl_not?: InputMaybe<Scalars['BigInt']>;
  ttl_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Ens__Domain_OrderBy {
  CreatedAt = 'createdAt',
  Events = 'events',
  Id = 'id',
  IsMigrated = 'isMigrated',
  LabelName = 'labelName',
  Labelhash = 'labelhash',
  Name = 'name',
  Owner = 'owner',
  Parent = 'parent',
  ResolvedAddress = 'resolvedAddress',
  Resolver = 'resolver',
  SubdomainCount = 'subdomainCount',
  Subdomains = 'subdomains',
  Ttl = 'ttl'
}

export type Ens__InterfaceChanged = Ens__ResolverEvent & {
  __typename?: 'ENS__InterfaceChanged';
  blockNumber: Scalars['Int'];
  id: Scalars['ID'];
  implementer: Scalars['ENS__Bytes'];
  interfaceID: Scalars['ENS__Bytes'];
  resolver: Ens__Resolver;
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__InterfaceChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  implementer?: InputMaybe<Scalars['ENS__Bytes']>;
  implementer_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  implementer_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  implementer_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  implementer_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  implementer_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  implementer_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  implementer_not?: InputMaybe<Scalars['ENS__Bytes']>;
  implementer_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  implementer_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  interfaceID?: InputMaybe<Scalars['ENS__Bytes']>;
  interfaceID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  interfaceID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  interfaceID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  interfaceID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  interfaceID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  interfaceID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  interfaceID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  interfaceID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  interfaceID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Ens__Resolver_Filter>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__InterfaceChanged_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  Implementer = 'implementer',
  InterfaceId = 'interfaceID',
  Resolver = 'resolver',
  TransactionId = 'transactionID'
}

export type Ens__MulticoinAddrChanged = Ens__ResolverEvent & {
  __typename?: 'ENS__MulticoinAddrChanged';
  addr: Scalars['ENS__Bytes'];
  blockNumber: Scalars['Int'];
  coinType: Scalars['BigInt'];
  id: Scalars['ID'];
  resolver: Ens__Resolver;
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__MulticoinAddrChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  addr?: InputMaybe<Scalars['ENS__Bytes']>;
  addr_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  addr_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  addr_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  addr_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  addr_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  addr_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  addr_not?: InputMaybe<Scalars['ENS__Bytes']>;
  addr_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  addr_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  coinType?: InputMaybe<Scalars['BigInt']>;
  coinType_gt?: InputMaybe<Scalars['BigInt']>;
  coinType_gte?: InputMaybe<Scalars['BigInt']>;
  coinType_in?: InputMaybe<Array<Scalars['BigInt']>>;
  coinType_lt?: InputMaybe<Scalars['BigInt']>;
  coinType_lte?: InputMaybe<Scalars['BigInt']>;
  coinType_not?: InputMaybe<Scalars['BigInt']>;
  coinType_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Ens__Resolver_Filter>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__MulticoinAddrChanged_OrderBy {
  Addr = 'addr',
  BlockNumber = 'blockNumber',
  CoinType = 'coinType',
  Id = 'id',
  Resolver = 'resolver',
  TransactionId = 'transactionID'
}

export type Ens__NameChanged = Ens__ResolverEvent & {
  __typename?: 'ENS__NameChanged';
  blockNumber: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  resolver: Ens__Resolver;
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__NameChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Ens__Resolver_Filter>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__NameChanged_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  Name = 'name',
  Resolver = 'resolver',
  TransactionId = 'transactionID'
}

export type Ens__NameRegistered = Ens__RegistrationEvent & {
  __typename?: 'ENS__NameRegistered';
  blockNumber: Scalars['Int'];
  expiryDate: Scalars['BigInt'];
  id: Scalars['ID'];
  registrant: Ens__Account;
  registration: Ens__Registration;
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__NameRegistered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registrant?: InputMaybe<Scalars['String']>;
  registrant_?: InputMaybe<Ens__Account_Filter>;
  registrant_contains?: InputMaybe<Scalars['String']>;
  registrant_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_ends_with?: InputMaybe<Scalars['String']>;
  registrant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_gt?: InputMaybe<Scalars['String']>;
  registrant_gte?: InputMaybe<Scalars['String']>;
  registrant_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_lt?: InputMaybe<Scalars['String']>;
  registrant_lte?: InputMaybe<Scalars['String']>;
  registrant_not?: InputMaybe<Scalars['String']>;
  registrant_not_contains?: InputMaybe<Scalars['String']>;
  registrant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_not_starts_with?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_starts_with?: InputMaybe<Scalars['String']>;
  registrant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Ens__Registration_Filter>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__NameRegistered_OrderBy {
  BlockNumber = 'blockNumber',
  ExpiryDate = 'expiryDate',
  Id = 'id',
  Registrant = 'registrant',
  Registration = 'registration',
  TransactionId = 'transactionID'
}

export type Ens__NameRenewed = Ens__RegistrationEvent & {
  __typename?: 'ENS__NameRenewed';
  blockNumber: Scalars['Int'];
  expiryDate: Scalars['BigInt'];
  id: Scalars['ID'];
  registration: Ens__Registration;
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__NameRenewed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Ens__Registration_Filter>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__NameRenewed_OrderBy {
  BlockNumber = 'blockNumber',
  ExpiryDate = 'expiryDate',
  Id = 'id',
  Registration = 'registration',
  TransactionId = 'transactionID'
}

export type Ens__NameTransferred = Ens__RegistrationEvent & {
  __typename?: 'ENS__NameTransferred';
  blockNumber: Scalars['Int'];
  id: Scalars['ID'];
  newOwner: Ens__Account;
  registration: Ens__Registration;
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__NameTransferred_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  newOwner?: InputMaybe<Scalars['String']>;
  newOwner_?: InputMaybe<Ens__Account_Filter>;
  newOwner_contains?: InputMaybe<Scalars['String']>;
  newOwner_contains_nocase?: InputMaybe<Scalars['String']>;
  newOwner_ends_with?: InputMaybe<Scalars['String']>;
  newOwner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_gt?: InputMaybe<Scalars['String']>;
  newOwner_gte?: InputMaybe<Scalars['String']>;
  newOwner_in?: InputMaybe<Array<Scalars['String']>>;
  newOwner_lt?: InputMaybe<Scalars['String']>;
  newOwner_lte?: InputMaybe<Scalars['String']>;
  newOwner_not?: InputMaybe<Scalars['String']>;
  newOwner_not_contains?: InputMaybe<Scalars['String']>;
  newOwner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_ends_with?: InputMaybe<Scalars['String']>;
  newOwner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_in?: InputMaybe<Array<Scalars['String']>>;
  newOwner_not_starts_with?: InputMaybe<Scalars['String']>;
  newOwner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_starts_with?: InputMaybe<Scalars['String']>;
  newOwner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Ens__Registration_Filter>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__NameTransferred_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  NewOwner = 'newOwner',
  Registration = 'registration',
  TransactionId = 'transactionID'
}

export type Ens__NewOwner = Ens__DomainEvent & {
  __typename?: 'ENS__NewOwner';
  blockNumber: Scalars['Int'];
  domain: Ens__Domain;
  id: Scalars['ID'];
  owner: Ens__Account;
  parentDomain: Ens__Domain;
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__NewOwner_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Ens__Domain_Filter>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Ens__Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain?: InputMaybe<Scalars['String']>;
  parentDomain_?: InputMaybe<Ens__Domain_Filter>;
  parentDomain_contains?: InputMaybe<Scalars['String']>;
  parentDomain_contains_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_ends_with?: InputMaybe<Scalars['String']>;
  parentDomain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_gt?: InputMaybe<Scalars['String']>;
  parentDomain_gte?: InputMaybe<Scalars['String']>;
  parentDomain_in?: InputMaybe<Array<Scalars['String']>>;
  parentDomain_lt?: InputMaybe<Scalars['String']>;
  parentDomain_lte?: InputMaybe<Scalars['String']>;
  parentDomain_not?: InputMaybe<Scalars['String']>;
  parentDomain_not_contains?: InputMaybe<Scalars['String']>;
  parentDomain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_ends_with?: InputMaybe<Scalars['String']>;
  parentDomain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_in?: InputMaybe<Array<Scalars['String']>>;
  parentDomain_not_starts_with?: InputMaybe<Scalars['String']>;
  parentDomain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_starts_with?: InputMaybe<Scalars['String']>;
  parentDomain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__NewOwner_OrderBy {
  BlockNumber = 'blockNumber',
  Domain = 'domain',
  Id = 'id',
  Owner = 'owner',
  ParentDomain = 'parentDomain',
  TransactionId = 'transactionID'
}

export type Ens__NewResolver = Ens__DomainEvent & {
  __typename?: 'ENS__NewResolver';
  blockNumber: Scalars['Int'];
  domain: Ens__Domain;
  id: Scalars['ID'];
  resolver: Ens__Resolver;
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__NewResolver_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Ens__Domain_Filter>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Ens__Resolver_Filter>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__NewResolver_OrderBy {
  BlockNumber = 'blockNumber',
  Domain = 'domain',
  Id = 'id',
  Resolver = 'resolver',
  TransactionId = 'transactionID'
}

export type Ens__NewTtl = Ens__DomainEvent & {
  __typename?: 'ENS__NewTTL';
  blockNumber: Scalars['Int'];
  domain: Ens__Domain;
  id: Scalars['ID'];
  transactionID: Scalars['ENS__Bytes'];
  ttl: Scalars['BigInt'];
};

export type Ens__NewTtl_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Ens__Domain_Filter>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  ttl?: InputMaybe<Scalars['BigInt']>;
  ttl_gt?: InputMaybe<Scalars['BigInt']>;
  ttl_gte?: InputMaybe<Scalars['BigInt']>;
  ttl_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ttl_lt?: InputMaybe<Scalars['BigInt']>;
  ttl_lte?: InputMaybe<Scalars['BigInt']>;
  ttl_not?: InputMaybe<Scalars['BigInt']>;
  ttl_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Ens__NewTtl_OrderBy {
  BlockNumber = 'blockNumber',
  Domain = 'domain',
  Id = 'id',
  TransactionId = 'transactionID',
  Ttl = 'ttl'
}

/** Defines the order direction, either ascending or descending */
export enum Ens__OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Ens__PubkeyChanged = Ens__ResolverEvent & {
  __typename?: 'ENS__PubkeyChanged';
  blockNumber: Scalars['Int'];
  id: Scalars['ID'];
  resolver: Ens__Resolver;
  transactionID: Scalars['ENS__Bytes'];
  x: Scalars['ENS__Bytes'];
  y: Scalars['ENS__Bytes'];
};

export type Ens__PubkeyChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Ens__Resolver_Filter>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  x?: InputMaybe<Scalars['ENS__Bytes']>;
  x_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  x_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  x_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  x_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  x_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  x_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  x_not?: InputMaybe<Scalars['ENS__Bytes']>;
  x_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  x_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  y?: InputMaybe<Scalars['ENS__Bytes']>;
  y_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  y_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  y_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  y_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  y_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  y_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  y_not?: InputMaybe<Scalars['ENS__Bytes']>;
  y_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  y_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__PubkeyChanged_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  Resolver = 'resolver',
  TransactionId = 'transactionID',
  X = 'x',
  Y = 'y'
}

export type Ens__Registration = {
  __typename?: 'ENS__Registration';
  cost?: Maybe<Scalars['BigInt']>;
  domain?: Maybe<Ens__Domain>;
  events: Array<Ens__RegistrationEvent>;
  expiryDate: Scalars['BigInt'];
  id: Scalars['ID'];
  labelName?: Maybe<Scalars['String']>;
  registrant: Ens__Account;
  registrationDate: Scalars['BigInt'];
};


export type Ens__RegistrationEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__RegistrationEvent_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ens__RegistrationEvent_Filter>;
};

export type Ens__RegistrationEvent = {
  blockNumber: Scalars['Int'];
  id: Scalars['ID'];
  registration: Ens__Registration;
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__RegistrationEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Ens__Registration_Filter>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__RegistrationEvent_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  Registration = 'registration',
  TransactionId = 'transactionID'
}

export type Ens__Registration_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  cost?: InputMaybe<Scalars['BigInt']>;
  cost_gt?: InputMaybe<Scalars['BigInt']>;
  cost_gte?: InputMaybe<Scalars['BigInt']>;
  cost_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cost_lt?: InputMaybe<Scalars['BigInt']>;
  cost_lte?: InputMaybe<Scalars['BigInt']>;
  cost_not?: InputMaybe<Scalars['BigInt']>;
  cost_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Ens__Domain_Filter>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  events_?: InputMaybe<Ens__RegistrationEvent_Filter>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  labelName?: InputMaybe<Scalars['String']>;
  labelName_contains?: InputMaybe<Scalars['String']>;
  labelName_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_ends_with?: InputMaybe<Scalars['String']>;
  labelName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_gt?: InputMaybe<Scalars['String']>;
  labelName_gte?: InputMaybe<Scalars['String']>;
  labelName_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_lt?: InputMaybe<Scalars['String']>;
  labelName_lte?: InputMaybe<Scalars['String']>;
  labelName_not?: InputMaybe<Scalars['String']>;
  labelName_not_contains?: InputMaybe<Scalars['String']>;
  labelName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_not_starts_with?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_starts_with?: InputMaybe<Scalars['String']>;
  labelName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant?: InputMaybe<Scalars['String']>;
  registrant_?: InputMaybe<Ens__Account_Filter>;
  registrant_contains?: InputMaybe<Scalars['String']>;
  registrant_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_ends_with?: InputMaybe<Scalars['String']>;
  registrant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_gt?: InputMaybe<Scalars['String']>;
  registrant_gte?: InputMaybe<Scalars['String']>;
  registrant_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_lt?: InputMaybe<Scalars['String']>;
  registrant_lte?: InputMaybe<Scalars['String']>;
  registrant_not?: InputMaybe<Scalars['String']>;
  registrant_not_contains?: InputMaybe<Scalars['String']>;
  registrant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_not_starts_with?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_starts_with?: InputMaybe<Scalars['String']>;
  registrant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrationDate?: InputMaybe<Scalars['BigInt']>;
  registrationDate_gt?: InputMaybe<Scalars['BigInt']>;
  registrationDate_gte?: InputMaybe<Scalars['BigInt']>;
  registrationDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registrationDate_lt?: InputMaybe<Scalars['BigInt']>;
  registrationDate_lte?: InputMaybe<Scalars['BigInt']>;
  registrationDate_not?: InputMaybe<Scalars['BigInt']>;
  registrationDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Ens__Registration_OrderBy {
  Cost = 'cost',
  Domain = 'domain',
  Events = 'events',
  ExpiryDate = 'expiryDate',
  Id = 'id',
  LabelName = 'labelName',
  Registrant = 'registrant',
  RegistrationDate = 'registrationDate'
}

export type Ens__Resolver = {
  __typename?: 'ENS__Resolver';
  addr?: Maybe<Ens__Account>;
  address: Scalars['ENS__Bytes'];
  coinTypes?: Maybe<Array<Scalars['BigInt']>>;
  contentHash?: Maybe<Scalars['ENS__Bytes']>;
  domain?: Maybe<Ens__Domain>;
  events: Array<Ens__ResolverEvent>;
  id: Scalars['ID'];
  texts?: Maybe<Array<Scalars['String']>>;
};


export type Ens__ResolverEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__ResolverEvent_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ens__ResolverEvent_Filter>;
};

export type Ens__ResolverEvent = {
  blockNumber: Scalars['Int'];
  id: Scalars['ID'];
  resolver: Ens__Resolver;
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__ResolverEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Ens__Resolver_Filter>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__ResolverEvent_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  Resolver = 'resolver',
  TransactionId = 'transactionID'
}

export type Ens__Resolver_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  addr?: InputMaybe<Scalars['String']>;
  addr_?: InputMaybe<Ens__Account_Filter>;
  addr_contains?: InputMaybe<Scalars['String']>;
  addr_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_ends_with?: InputMaybe<Scalars['String']>;
  addr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_gt?: InputMaybe<Scalars['String']>;
  addr_gte?: InputMaybe<Scalars['String']>;
  addr_in?: InputMaybe<Array<Scalars['String']>>;
  addr_lt?: InputMaybe<Scalars['String']>;
  addr_lte?: InputMaybe<Scalars['String']>;
  addr_not?: InputMaybe<Scalars['String']>;
  addr_not_contains?: InputMaybe<Scalars['String']>;
  addr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_not_ends_with?: InputMaybe<Scalars['String']>;
  addr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_in?: InputMaybe<Array<Scalars['String']>>;
  addr_not_starts_with?: InputMaybe<Scalars['String']>;
  addr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_starts_with?: InputMaybe<Scalars['String']>;
  addr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['ENS__Bytes']>;
  address_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  address_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  address_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  address_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  address_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  address_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  address_not?: InputMaybe<Scalars['ENS__Bytes']>;
  address_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  coinTypes?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_not?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  contentHash?: InputMaybe<Scalars['ENS__Bytes']>;
  contentHash_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  contentHash_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  contentHash_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  contentHash_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  contentHash_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  contentHash_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  contentHash_not?: InputMaybe<Scalars['ENS__Bytes']>;
  contentHash_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  contentHash_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Ens__Domain_Filter>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  events_?: InputMaybe<Ens__ResolverEvent_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  texts?: InputMaybe<Array<Scalars['String']>>;
  texts_contains?: InputMaybe<Array<Scalars['String']>>;
  texts_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  texts_not?: InputMaybe<Array<Scalars['String']>>;
  texts_not_contains?: InputMaybe<Array<Scalars['String']>>;
  texts_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
};

export enum Ens__Resolver_OrderBy {
  Addr = 'addr',
  Address = 'address',
  CoinTypes = 'coinTypes',
  ContentHash = 'contentHash',
  Domain = 'domain',
  Events = 'events',
  Id = 'id',
  Texts = 'texts'
}

export type Ens__TextChanged = Ens__ResolverEvent & {
  __typename?: 'ENS__TextChanged';
  blockNumber: Scalars['Int'];
  id: Scalars['ID'];
  key: Scalars['String'];
  resolver: Ens__Resolver;
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__TextChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  key?: InputMaybe<Scalars['String']>;
  key_contains?: InputMaybe<Scalars['String']>;
  key_contains_nocase?: InputMaybe<Scalars['String']>;
  key_ends_with?: InputMaybe<Scalars['String']>;
  key_ends_with_nocase?: InputMaybe<Scalars['String']>;
  key_gt?: InputMaybe<Scalars['String']>;
  key_gte?: InputMaybe<Scalars['String']>;
  key_in?: InputMaybe<Array<Scalars['String']>>;
  key_lt?: InputMaybe<Scalars['String']>;
  key_lte?: InputMaybe<Scalars['String']>;
  key_not?: InputMaybe<Scalars['String']>;
  key_not_contains?: InputMaybe<Scalars['String']>;
  key_not_contains_nocase?: InputMaybe<Scalars['String']>;
  key_not_ends_with?: InputMaybe<Scalars['String']>;
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  key_not_in?: InputMaybe<Array<Scalars['String']>>;
  key_not_starts_with?: InputMaybe<Scalars['String']>;
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  key_starts_with?: InputMaybe<Scalars['String']>;
  key_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Ens__Resolver_Filter>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__TextChanged_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  Key = 'key',
  Resolver = 'resolver',
  TransactionId = 'transactionID'
}

export type Ens__Transfer = Ens__DomainEvent & {
  __typename?: 'ENS__Transfer';
  blockNumber: Scalars['Int'];
  domain: Ens__Domain;
  id: Scalars['ID'];
  owner: Ens__Account;
  transactionID: Scalars['ENS__Bytes'];
};

export type Ens__Transfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Ens__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Ens__Domain_Filter>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Ens__Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionID?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
  transactionID_lt?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['ENS__Bytes']>;
  transactionID_not_in?: InputMaybe<Array<Scalars['ENS__Bytes']>>;
};

export enum Ens__Transfer_OrderBy {
  BlockNumber = 'blockNumber',
  Domain = 'domain',
  Id = 'id',
  Owner = 'owner',
  TransactionId = 'transactionID'
}

export type Ens___Block_ = {
  __typename?: 'ENS___Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['ENS__Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type Ens___Meta_ = {
  __typename?: 'ENS___Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: Ens___Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum Ens___SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

/** A state channel Allocation representing a single Indexer-SubgraphDeployment stake */
export type Network__Allocation = {
  __typename?: 'NETWORK__Allocation';
  /** If the Allocation is active it shows the indexer. If closed, it is null */
  activeForIndexer?: Maybe<Network__Indexer>;
  /** Tokens allocation in this allocation */
  allocatedTokens: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Yearly annualzied return */
  annualizedReturn: Scalars['NETWORK__BigDecimal'];
  /** Timestamp this allocation was closed at */
  closedAt?: Maybe<Scalars['Int']>;
  /** Block hash at which this allocation was closed */
  closedAtBlockHash?: Maybe<Scalars['NETWORK__Bytes']>;
  /** Block number at which this allocation was closed */
  closedAtBlockNumber?: Maybe<Scalars['Int']>;
  /** Epoch this allocation was closed in */
  closedAtEpoch?: Maybe<Scalars['Int']>;
  /** Timestamp this allocation was created at */
  createdAt: Scalars['Int'];
  /** Block at which this allocation was created */
  createdAtBlockHash: Scalars['NETWORK__Bytes'];
  /** Block number at which this allocation was created */
  createdAtBlockNumber: Scalars['Int'];
  /** Epoch this allocation was created */
  createdAtEpoch: Scalars['Int'];
  /** Creator of the allocation - can be the operator or the indexer */
  creator: Scalars['NETWORK__Bytes'];
  /** Curator rewards deposited to the curating bonding curve */
  curatorRewards: Scalars['BigInt'];
  /** Fees paid out to delegators */
  delegationFees: Scalars['BigInt'];
  /** Effective allocation that is realized upon closing */
  effectiveAllocation: Scalars['BigInt'];
  /** Channel Address */
  id: Scalars['ID'];
  /** Indexer of this allocation */
  indexer: Network__Indexer;
  /** Indexing rewards earned by this allocation by delegators */
  indexingDelegatorRewards: Scalars['BigInt'];
  /** Indexing rewards earned by this allocation by indexers */
  indexingIndexerRewards: Scalars['BigInt'];
  indexingRewardCutAtClose?: Maybe<Scalars['Int']>;
  indexingRewardCutAtStart: Scalars['Int'];
  indexingRewardEffectiveCutAtClose?: Maybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtStart: Scalars['NETWORK__BigDecimal'];
  /** Indexing rewards earned by this allocation. Includes delegator and indexer rewards */
  indexingRewards: Scalars['BigInt'];
  /** POI submitted with a closed allocation */
  poi?: Maybe<Scalars['NETWORK__Bytes']>;
  /** Pool in which this allocation was closed */
  poolClosedIn?: Maybe<Network__Pool>;
  queryFeeCutAtClose?: Maybe<Scalars['Int']>;
  queryFeeCutAtStart: Scalars['Int'];
  queryFeeEffectiveCutAtClose?: Maybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtStart: Scalars['NETWORK__BigDecimal'];
  /** Query fee rebate amount claimed from the protocol through cobbs douglas. Does not include portion given to delegators */
  queryFeeRebates: Scalars['BigInt'];
  /** Fees this allocation collected from query fees upon closing. Excludes curator reward and protocol tax */
  queryFeesCollected: Scalars['BigInt'];
  /** Status of the allocation */
  status: Network__AllocationStatus;
  /** Subgraph deployment that is being allocated to */
  subgraphDeployment: Network__SubgraphDeployment;
  /** NOT IMPLEMENTED - Return for this allocation */
  totalReturn: Scalars['NETWORK__BigDecimal'];
};

export enum Network__AllocationStatus {
  Active = 'Active',
  Claimed = 'Claimed',
  Closed = 'Closed',
  Finalized = 'Finalized',
  Null = 'Null'
}

export type Network__Allocation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  activeForIndexer?: InputMaybe<Scalars['String']>;
  activeForIndexer_?: InputMaybe<Network__Indexer_Filter>;
  activeForIndexer_contains?: InputMaybe<Scalars['String']>;
  activeForIndexer_contains_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_ends_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_gt?: InputMaybe<Scalars['String']>;
  activeForIndexer_gte?: InputMaybe<Scalars['String']>;
  activeForIndexer_in?: InputMaybe<Array<Scalars['String']>>;
  activeForIndexer_lt?: InputMaybe<Scalars['String']>;
  activeForIndexer_lte?: InputMaybe<Scalars['String']>;
  activeForIndexer_not?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_contains?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_ends_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  activeForIndexer_not_starts_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_starts_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  allocatedTokens?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  annualizedReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  annualizedReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  closedAt?: InputMaybe<Scalars['Int']>;
  closedAtBlockHash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  closedAtBlockHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  closedAtBlockHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  closedAtBlockHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  closedAtBlockHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  closedAtBlockHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  closedAtBlockHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  closedAtBlockHash_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  closedAtBlockHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  closedAtBlockHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  closedAtBlockNumber?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_gt?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_gte?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtBlockNumber_lt?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_lte?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_not?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtEpoch?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_gt?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_gte?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtEpoch_lt?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_lte?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_not?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAt_gt?: InputMaybe<Scalars['Int']>;
  closedAt_gte?: InputMaybe<Scalars['Int']>;
  closedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAt_lt?: InputMaybe<Scalars['Int']>;
  closedAt_lte?: InputMaybe<Scalars['Int']>;
  closedAt_not?: InputMaybe<Scalars['Int']>;
  closedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAtBlockHash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  createdAtBlockHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  createdAtBlockHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  createdAtBlockHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  createdAtBlockHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  createdAtBlockHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  createdAtBlockHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  createdAtBlockHash_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  createdAtBlockHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  createdAtBlockHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtEpoch?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_gt?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_gte?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtEpoch_lt?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_lte?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_not?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  creator?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creator_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creator_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creator_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creator_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  creator_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creator_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creator_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creator_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creator_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curatorRewards?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationFees?: InputMaybe<Scalars['BigInt']>;
  delegationFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegationFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegationFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegationFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegationFees_not?: InputMaybe<Scalars['BigInt']>;
  delegationFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  effectiveAllocation?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_gt?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_gte?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  effectiveAllocation_lt?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_lte?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_not?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<Network__Indexer_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexingDelegatorRewards?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewards?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewardCutAtClose?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_gt?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_gte?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCutAtClose_lt?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_lte?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_not?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCutAtStart?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_gt?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_gte?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCutAtStart_lt?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_lte?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_not?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardEffectiveCutAtClose?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtClose_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtClose_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtClose_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  indexingRewardEffectiveCutAtClose_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtClose_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtClose_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtClose_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  indexingRewardEffectiveCutAtStart?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtStart_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtStart_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtStart_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  indexingRewardEffectiveCutAtStart_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtStart_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtStart_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtStart_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  indexingRewards?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poi?: InputMaybe<Scalars['NETWORK__Bytes']>;
  poi_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  poi_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  poi_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  poi_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  poi_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  poi_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  poi_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  poi_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  poi_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  poolClosedIn?: InputMaybe<Scalars['String']>;
  poolClosedIn_?: InputMaybe<Network__Pool_Filter>;
  poolClosedIn_contains?: InputMaybe<Scalars['String']>;
  poolClosedIn_contains_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_ends_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_gt?: InputMaybe<Scalars['String']>;
  poolClosedIn_gte?: InputMaybe<Scalars['String']>;
  poolClosedIn_in?: InputMaybe<Array<Scalars['String']>>;
  poolClosedIn_lt?: InputMaybe<Scalars['String']>;
  poolClosedIn_lte?: InputMaybe<Scalars['String']>;
  poolClosedIn_not?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_contains?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_ends_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolClosedIn_not_starts_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_starts_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_starts_with_nocase?: InputMaybe<Scalars['String']>;
  queryFeeCutAtClose?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_gt?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_gte?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeCutAtClose_lt?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_lte?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_not?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_not_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeCutAtStart?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_gt?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_gte?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeCutAtStart_lt?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_lte?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_not?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_not_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeEffectiveCutAtClose?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtClose_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtClose_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtClose_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  queryFeeEffectiveCutAtClose_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtClose_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtClose_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtClose_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  queryFeeEffectiveCutAtStart?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtStart_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtStart_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtStart_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  queryFeeEffectiveCutAtStart_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtStart_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtStart_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtStart_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<Network__AllocationStatus>;
  status_in?: InputMaybe<Array<Network__AllocationStatus>>;
  status_not?: InputMaybe<Network__AllocationStatus>;
  status_not_in?: InputMaybe<Array<Network__AllocationStatus>>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<Network__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
};

export enum Network__Allocation_OrderBy {
  ActiveForIndexer = 'activeForIndexer',
  AllocatedTokens = 'allocatedTokens',
  AnnualizedReturn = 'annualizedReturn',
  ClosedAt = 'closedAt',
  ClosedAtBlockHash = 'closedAtBlockHash',
  ClosedAtBlockNumber = 'closedAtBlockNumber',
  ClosedAtEpoch = 'closedAtEpoch',
  CreatedAt = 'createdAt',
  CreatedAtBlockHash = 'createdAtBlockHash',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtEpoch = 'createdAtEpoch',
  Creator = 'creator',
  CuratorRewards = 'curatorRewards',
  DelegationFees = 'delegationFees',
  EffectiveAllocation = 'effectiveAllocation',
  Id = 'id',
  Indexer = 'indexer',
  IndexingDelegatorRewards = 'indexingDelegatorRewards',
  IndexingIndexerRewards = 'indexingIndexerRewards',
  IndexingRewardCutAtClose = 'indexingRewardCutAtClose',
  IndexingRewardCutAtStart = 'indexingRewardCutAtStart',
  IndexingRewardEffectiveCutAtClose = 'indexingRewardEffectiveCutAtClose',
  IndexingRewardEffectiveCutAtStart = 'indexingRewardEffectiveCutAtStart',
  IndexingRewards = 'indexingRewards',
  Poi = 'poi',
  PoolClosedIn = 'poolClosedIn',
  QueryFeeCutAtClose = 'queryFeeCutAtClose',
  QueryFeeCutAtStart = 'queryFeeCutAtStart',
  QueryFeeEffectiveCutAtClose = 'queryFeeEffectiveCutAtClose',
  QueryFeeEffectiveCutAtStart = 'queryFeeEffectiveCutAtStart',
  QueryFeeRebates = 'queryFeeRebates',
  QueryFeesCollected = 'queryFeesCollected',
  Status = 'status',
  SubgraphDeployment = 'subgraphDeployment',
  TotalReturn = 'totalReturn'
}

/** Attestation of a dispute */
export type Network__Attestation = {
  __typename?: 'NETWORK__Attestation';
  /** NOT IMPLEMENTED - Gas used by the attested query */
  gasUsed?: Maybe<Scalars['BigInt']>;
  /** Concatenation of the requestCID and responseCID */
  id: Scalars['ID'];
  /** R of the indexers signature */
  r: Scalars['String'];
  /** RequestCID */
  requestCID: Scalars['String'];
  /** ResponseCID */
  responseCID: Scalars['String'];
  /** NOT IMPLEMENTED - Bytes of attested query */
  responseNumBytes?: Maybe<Scalars['BigInt']>;
  /** S of the indexers signature */
  s: Scalars['String'];
  /** Subgraph deployment being disputed */
  subgraphDeployment: Network__SubgraphDeployment;
  /** V of the indexers signature */
  v: Scalars['Int'];
};

export type Network__Attestation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  r?: InputMaybe<Scalars['String']>;
  r_contains?: InputMaybe<Scalars['String']>;
  r_contains_nocase?: InputMaybe<Scalars['String']>;
  r_ends_with?: InputMaybe<Scalars['String']>;
  r_ends_with_nocase?: InputMaybe<Scalars['String']>;
  r_gt?: InputMaybe<Scalars['String']>;
  r_gte?: InputMaybe<Scalars['String']>;
  r_in?: InputMaybe<Array<Scalars['String']>>;
  r_lt?: InputMaybe<Scalars['String']>;
  r_lte?: InputMaybe<Scalars['String']>;
  r_not?: InputMaybe<Scalars['String']>;
  r_not_contains?: InputMaybe<Scalars['String']>;
  r_not_contains_nocase?: InputMaybe<Scalars['String']>;
  r_not_ends_with?: InputMaybe<Scalars['String']>;
  r_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  r_not_in?: InputMaybe<Array<Scalars['String']>>;
  r_not_starts_with?: InputMaybe<Scalars['String']>;
  r_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  r_starts_with?: InputMaybe<Scalars['String']>;
  r_starts_with_nocase?: InputMaybe<Scalars['String']>;
  requestCID?: InputMaybe<Scalars['String']>;
  requestCID_contains?: InputMaybe<Scalars['String']>;
  requestCID_contains_nocase?: InputMaybe<Scalars['String']>;
  requestCID_ends_with?: InputMaybe<Scalars['String']>;
  requestCID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  requestCID_gt?: InputMaybe<Scalars['String']>;
  requestCID_gte?: InputMaybe<Scalars['String']>;
  requestCID_in?: InputMaybe<Array<Scalars['String']>>;
  requestCID_lt?: InputMaybe<Scalars['String']>;
  requestCID_lte?: InputMaybe<Scalars['String']>;
  requestCID_not?: InputMaybe<Scalars['String']>;
  requestCID_not_contains?: InputMaybe<Scalars['String']>;
  requestCID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  requestCID_not_ends_with?: InputMaybe<Scalars['String']>;
  requestCID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  requestCID_not_in?: InputMaybe<Array<Scalars['String']>>;
  requestCID_not_starts_with?: InputMaybe<Scalars['String']>;
  requestCID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  requestCID_starts_with?: InputMaybe<Scalars['String']>;
  requestCID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  responseCID?: InputMaybe<Scalars['String']>;
  responseCID_contains?: InputMaybe<Scalars['String']>;
  responseCID_contains_nocase?: InputMaybe<Scalars['String']>;
  responseCID_ends_with?: InputMaybe<Scalars['String']>;
  responseCID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  responseCID_gt?: InputMaybe<Scalars['String']>;
  responseCID_gte?: InputMaybe<Scalars['String']>;
  responseCID_in?: InputMaybe<Array<Scalars['String']>>;
  responseCID_lt?: InputMaybe<Scalars['String']>;
  responseCID_lte?: InputMaybe<Scalars['String']>;
  responseCID_not?: InputMaybe<Scalars['String']>;
  responseCID_not_contains?: InputMaybe<Scalars['String']>;
  responseCID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  responseCID_not_ends_with?: InputMaybe<Scalars['String']>;
  responseCID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  responseCID_not_in?: InputMaybe<Array<Scalars['String']>>;
  responseCID_not_starts_with?: InputMaybe<Scalars['String']>;
  responseCID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  responseCID_starts_with?: InputMaybe<Scalars['String']>;
  responseCID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  responseNumBytes?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_gt?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_gte?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  responseNumBytes_lt?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_lte?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_not?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  s?: InputMaybe<Scalars['String']>;
  s_contains?: InputMaybe<Scalars['String']>;
  s_contains_nocase?: InputMaybe<Scalars['String']>;
  s_ends_with?: InputMaybe<Scalars['String']>;
  s_ends_with_nocase?: InputMaybe<Scalars['String']>;
  s_gt?: InputMaybe<Scalars['String']>;
  s_gte?: InputMaybe<Scalars['String']>;
  s_in?: InputMaybe<Array<Scalars['String']>>;
  s_lt?: InputMaybe<Scalars['String']>;
  s_lte?: InputMaybe<Scalars['String']>;
  s_not?: InputMaybe<Scalars['String']>;
  s_not_contains?: InputMaybe<Scalars['String']>;
  s_not_contains_nocase?: InputMaybe<Scalars['String']>;
  s_not_ends_with?: InputMaybe<Scalars['String']>;
  s_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  s_not_in?: InputMaybe<Array<Scalars['String']>>;
  s_not_starts_with?: InputMaybe<Scalars['String']>;
  s_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  s_starts_with?: InputMaybe<Scalars['String']>;
  s_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<Network__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  v?: InputMaybe<Scalars['Int']>;
  v_gt?: InputMaybe<Scalars['Int']>;
  v_gte?: InputMaybe<Scalars['Int']>;
  v_in?: InputMaybe<Array<Scalars['Int']>>;
  v_lt?: InputMaybe<Scalars['Int']>;
  v_lte?: InputMaybe<Scalars['Int']>;
  v_not?: InputMaybe<Scalars['Int']>;
  v_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Network__Attestation_OrderBy {
  GasUsed = 'gasUsed',
  Id = 'id',
  R = 'r',
  RequestCid = 'requestCID',
  ResponseCid = 'responseCID',
  ResponseNumBytes = 'responseNumBytes',
  S = 's',
  SubgraphDeployment = 'subgraphDeployment',
  V = 'v'
}

/** Authorized functions for the Manager */
export type Network__AuthorizedFunction = {
  __typename?: 'NETWORK__AuthorizedFunction';
  /** Function signature (string) */
  id: Scalars['ID'];
  /** Token lock Manager */
  manager: Network__TokenManager;
  /** Hash of the function signature */
  sigHash: Scalars['NETWORK__Bytes'];
  /** The contract address that is authorized to have this function called on itself */
  target: Scalars['NETWORK__Bytes'];
};

export type Network__AuthorizedFunction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  manager?: InputMaybe<Scalars['String']>;
  manager_?: InputMaybe<Network__TokenManager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_ends_with?: InputMaybe<Scalars['String']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_gt?: InputMaybe<Scalars['String']>;
  manager_gte?: InputMaybe<Scalars['String']>;
  manager_in?: InputMaybe<Array<Scalars['String']>>;
  manager_lt?: InputMaybe<Scalars['String']>;
  manager_lte?: InputMaybe<Scalars['String']>;
  manager_not?: InputMaybe<Scalars['String']>;
  manager_not_contains?: InputMaybe<Scalars['String']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manager_starts_with?: InputMaybe<Scalars['String']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sigHash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  sigHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  sigHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  sigHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  sigHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  sigHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  sigHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  sigHash_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  sigHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  sigHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  target?: InputMaybe<Scalars['NETWORK__Bytes']>;
  target_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  target_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  target_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  target_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  target_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  target_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  target_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  target_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  target_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
};

export enum Network__AuthorizedFunction_OrderBy {
  Id = 'id',
  Manager = 'manager',
  SigHash = 'sigHash',
  Target = 'target'
}

export type Network__BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Network__Block_Height = {
  hash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/** Curator with all Signals and metrics */
export type Network__Curator = {
  __typename?: 'NETWORK__Curator';
  /** Graph account of this curator */
  account: Network__GraphAccount;
  /** Amount of active name signals and signals for this user. signalCount + nameSignalCount */
  activeCombinedSignalCount: Scalars['Int'];
  /** Amount of active name signals for this user */
  activeNameSignalCount: Scalars['Int'];
  /** Amount of active signals for this user */
  activeSignalCount: Scalars['Int'];
  /** NOT IMPLEMENTED - Annualized rate of return on curator signal */
  annualizedReturn: Scalars['NETWORK__BigDecimal'];
  /** Total amount of name signals and signals created by this user. signalCount + nameSignalCount */
  combinedSignalCount: Scalars['Int'];
  /** Time this curator was created */
  createdAt: Scalars['Int'];
  /** Default display name is the current default name. Used for filtered queries */
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** Eth address of the Curator */
  id: Scalars['ID'];
  /** Total amount of name signals created by this user */
  nameSignalCount: Scalars['Int'];
  /** Subgraphs the curator is curating */
  nameSignals: Array<Network__NameSignal>;
  /** NOT IMPLEMENTED - Summation of realized rewards from all Signals */
  realizedRewards: Scalars['BigInt'];
  /** Total amount of signals created by this user */
  signalCount: Scalars['Int'];
  /** NOT IMPLEMENTED - Signaling efficiency of the curator */
  signalingEfficiency: Scalars['NETWORK__BigDecimal'];
  /** Subgraphs the curator is curating */
  signals: Array<Network__Signal>;
  /** totalNameSignalAverageCostBasis / totalNameSignal */
  totalAverageCostBasisPerNameSignal: Scalars['NETWORK__BigDecimal'];
  /** totalSignalAverageCostBasis / totalSignal */
  totalAverageCostBasisPerSignal: Scalars['NETWORK__BigDecimal'];
  /** CURRENT summed name signal for all bonding curves */
  totalNameSignal: Scalars['NETWORK__BigDecimal'];
  /** Total curator cost basis of all shares of name pools purchased on all bonding curves */
  totalNameSignalAverageCostBasis: Scalars['NETWORK__BigDecimal'];
  /** CUMULATIVE tokens signalled on all names */
  totalNameSignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens unsignalled on all names */
  totalNameUnsignalledTokens: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Total return of the curator */
  totalReturn: Scalars['NETWORK__BigDecimal'];
  /** CURRENT summed signal for all bonding curves */
  totalSignal: Scalars['NETWORK__BigDecimal'];
  /** Total curator cost basis of all version signal shares purchased on all bonding curves. Includes those purchased through GNS name pools */
  totalSignalAverageCostBasis: Scalars['NETWORK__BigDecimal'];
  /** CUMULATIVE tokens signalled on all the subgraphs */
  totalSignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens unsignalled on all the subgraphs */
  totalUnsignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE withdrawn tokens from deprecated subgraphs */
  totalWithdrawnTokens: Scalars['BigInt'];
};


/** Curator with all Signals and metrics */
export type Network__CuratorNameSignalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__NameSignal_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__NameSignal_Filter>;
};


/** Curator with all Signals and metrics */
export type Network__CuratorSignalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Signal_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__Signal_Filter>;
};

export type Network__Curator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Network__GraphAccount_Filter>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activeCombinedSignalCount?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_gt?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_gte?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeCombinedSignalCount_lt?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_lte?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_not?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeNameSignalCount?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_gt?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_gte?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeNameSignalCount_lt?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_lte?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_not?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSignalCount?: InputMaybe<Scalars['Int']>;
  activeSignalCount_gt?: InputMaybe<Scalars['Int']>;
  activeSignalCount_gte?: InputMaybe<Scalars['Int']>;
  activeSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSignalCount_lt?: InputMaybe<Scalars['Int']>;
  activeSignalCount_lte?: InputMaybe<Scalars['Int']>;
  activeSignalCount_not?: InputMaybe<Scalars['Int']>;
  activeSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  annualizedReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  annualizedReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  combinedSignalCount?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_gt?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_gte?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  combinedSignalCount_lt?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_lte?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_not?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nameSignalCount?: InputMaybe<Scalars['Int']>;
  nameSignalCount_gt?: InputMaybe<Scalars['Int']>;
  nameSignalCount_gte?: InputMaybe<Scalars['Int']>;
  nameSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  nameSignalCount_lt?: InputMaybe<Scalars['Int']>;
  nameSignalCount_lte?: InputMaybe<Scalars['Int']>;
  nameSignalCount_not?: InputMaybe<Scalars['Int']>;
  nameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  nameSignals_?: InputMaybe<Network__NameSignal_Filter>;
  realizedRewards?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalCount?: InputMaybe<Scalars['Int']>;
  signalCount_gt?: InputMaybe<Scalars['Int']>;
  signalCount_gte?: InputMaybe<Scalars['Int']>;
  signalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  signalCount_lt?: InputMaybe<Scalars['Int']>;
  signalCount_lte?: InputMaybe<Scalars['Int']>;
  signalCount_not?: InputMaybe<Scalars['Int']>;
  signalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signalingEfficiency?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalingEfficiency_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalingEfficiency_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalingEfficiency_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  signalingEfficiency_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalingEfficiency_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalingEfficiency_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalingEfficiency_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  signals_?: InputMaybe<Network__Signal_Filter>;
  totalAverageCostBasisPerNameSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalAverageCostBasisPerNameSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalAverageCostBasisPerSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalAverageCostBasisPerSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalNameSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignalAverageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignalAverageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignalAverageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalNameSignalAverageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignalAverageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignalAverageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalNameSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalNameSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalNameSignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNameSignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNameUnsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNameUnsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignalAverageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignalAverageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignalAverageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalSignalAverageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignalAverageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignalAverageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalSignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalWithdrawnTokens?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalWithdrawnTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Network__Curator_OrderBy {
  Account = 'account',
  ActiveCombinedSignalCount = 'activeCombinedSignalCount',
  ActiveNameSignalCount = 'activeNameSignalCount',
  ActiveSignalCount = 'activeSignalCount',
  AnnualizedReturn = 'annualizedReturn',
  CombinedSignalCount = 'combinedSignalCount',
  CreatedAt = 'createdAt',
  DefaultDisplayName = 'defaultDisplayName',
  Id = 'id',
  NameSignalCount = 'nameSignalCount',
  NameSignals = 'nameSignals',
  RealizedRewards = 'realizedRewards',
  SignalCount = 'signalCount',
  SignalingEfficiency = 'signalingEfficiency',
  Signals = 'signals',
  TotalAverageCostBasisPerNameSignal = 'totalAverageCostBasisPerNameSignal',
  TotalAverageCostBasisPerSignal = 'totalAverageCostBasisPerSignal',
  TotalNameSignal = 'totalNameSignal',
  TotalNameSignalAverageCostBasis = 'totalNameSignalAverageCostBasis',
  TotalNameSignalledTokens = 'totalNameSignalledTokens',
  TotalNameUnsignalledTokens = 'totalNameUnsignalledTokens',
  TotalReturn = 'totalReturn',
  TotalSignal = 'totalSignal',
  TotalSignalAverageCostBasis = 'totalSignalAverageCostBasis',
  TotalSignalledTokens = 'totalSignalledTokens',
  TotalUnsignalledTokens = 'totalUnsignalledTokens',
  TotalWithdrawnTokens = 'totalWithdrawnTokens'
}

export type Network__CurrentSubgraphDeploymentRelation = {
  __typename?: 'NETWORK__CurrentSubgraphDeploymentRelation';
  /** Indicates whether this relation is active. This means that the deployment is still the current deployment for the named Subgraph */
  active: Scalars['Boolean'];
  deployment: Network__SubgraphDeployment;
  /** Auxiliary entity used to batch update Subgraph entities when signalling on the deployment changes. ID replicates the deployment ID and adds a counter, to make it easy to reproduce. */
  id: Scalars['ID'];
  subgraph: Network__Subgraph;
};

export type Network__CurrentSubgraphDeploymentRelation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  deployment?: InputMaybe<Scalars['String']>;
  deployment_?: InputMaybe<Network__SubgraphDeployment_Filter>;
  deployment_contains?: InputMaybe<Scalars['String']>;
  deployment_contains_nocase?: InputMaybe<Scalars['String']>;
  deployment_ends_with?: InputMaybe<Scalars['String']>;
  deployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deployment_gt?: InputMaybe<Scalars['String']>;
  deployment_gte?: InputMaybe<Scalars['String']>;
  deployment_in?: InputMaybe<Array<Scalars['String']>>;
  deployment_lt?: InputMaybe<Scalars['String']>;
  deployment_lte?: InputMaybe<Scalars['String']>;
  deployment_not?: InputMaybe<Scalars['String']>;
  deployment_not_contains?: InputMaybe<Scalars['String']>;
  deployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  deployment_not_ends_with?: InputMaybe<Scalars['String']>;
  deployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  deployment_not_starts_with?: InputMaybe<Scalars['String']>;
  deployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  deployment_starts_with?: InputMaybe<Scalars['String']>;
  deployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Network__Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Network__CurrentSubgraphDeploymentRelation_OrderBy {
  Active = 'active',
  Deployment = 'deployment',
  Id = 'id',
  Subgraph = 'subgraph'
}

/** Delegator stake for a single Indexer */
export type Network__DelegatedStake = {
  __typename?: 'NETWORK__DelegatedStake';
  /** Time this delegator first delegated to an indexer */
  createdAt: Scalars['Int'];
  /** Delegator */
  delegator: Network__Delegator;
  /** Concatenation of Delegator address and Indexer address */
  id: Scalars['ID'];
  /** Index the stake is delegated to */
  indexer: Network__Indexer;
  /** Last time this delegator delegated towards this indexer */
  lastDelegatedAt?: Maybe<Scalars['Int']>;
  /** Last time this delegator undelegated from this indexer */
  lastUndelegatedAt?: Maybe<Scalars['Int']>;
  /** CURRENT tokens locked */
  lockedTokens: Scalars['BigInt'];
  /** Epoch the locked tokens get unlocked */
  lockedUntil: Scalars['Int'];
  /** The rate this delegator paid for their shares (calculated using average cost basis). Used for rewards calculations */
  personalExchangeRate: Scalars['NETWORK__BigDecimal'];
  /** Realized rewards from undelegating and realizing a reward */
  realizedRewards: Scalars['NETWORK__BigDecimal'];
  /** Shares owned in the delegator pool. Used to calculate total amount delegated */
  shareAmount: Scalars['BigInt'];
  /** CUMULATIVE tokens delegated */
  stakedTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens undelegated */
  unstakedTokens: Scalars['BigInt'];
};

export type Network__DelegatedStake_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<Network__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<Network__Indexer_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lastDelegatedAt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_not?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUndelegatedAt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUndelegatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_not?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedUntil?: InputMaybe<Scalars['Int']>;
  lockedUntil_gt?: InputMaybe<Scalars['Int']>;
  lockedUntil_gte?: InputMaybe<Scalars['Int']>;
  lockedUntil_in?: InputMaybe<Array<Scalars['Int']>>;
  lockedUntil_lt?: InputMaybe<Scalars['Int']>;
  lockedUntil_lte?: InputMaybe<Scalars['Int']>;
  lockedUntil_not?: InputMaybe<Scalars['Int']>;
  lockedUntil_not_in?: InputMaybe<Array<Scalars['Int']>>;
  personalExchangeRate?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  personalExchangeRate_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  personalExchangeRate_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  personalExchangeRate_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  personalExchangeRate_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  personalExchangeRate_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  personalExchangeRate_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  personalExchangeRate_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  realizedRewards?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  realizedRewards_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  realizedRewards_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  realizedRewards_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  realizedRewards_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  realizedRewards_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  shareAmount?: InputMaybe<Scalars['BigInt']>;
  shareAmount_gt?: InputMaybe<Scalars['BigInt']>;
  shareAmount_gte?: InputMaybe<Scalars['BigInt']>;
  shareAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shareAmount_lt?: InputMaybe<Scalars['BigInt']>;
  shareAmount_lte?: InputMaybe<Scalars['BigInt']>;
  shareAmount_not?: InputMaybe<Scalars['BigInt']>;
  shareAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakedTokens?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Network__DelegatedStake_OrderBy {
  CreatedAt = 'createdAt',
  Delegator = 'delegator',
  Id = 'id',
  Indexer = 'indexer',
  LastDelegatedAt = 'lastDelegatedAt',
  LastUndelegatedAt = 'lastUndelegatedAt',
  LockedTokens = 'lockedTokens',
  LockedUntil = 'lockedUntil',
  PersonalExchangeRate = 'personalExchangeRate',
  RealizedRewards = 'realizedRewards',
  ShareAmount = 'shareAmount',
  StakedTokens = 'stakedTokens',
  UnstakedTokens = 'unstakedTokens'
}

/** Delegator with all their delegated stakes towards Indexers */
export type Network__Delegator = {
  __typename?: 'NETWORK__Delegator';
  /** Graph account of the delegator */
  account: Network__GraphAccount;
  /** Active DelegatedStake entity count. Active means it still has GRT delegated */
  activeStakesCount: Scalars['Int'];
  /** Time created at */
  createdAt: Scalars['Int'];
  /** Default display name is the current default name. Used for filtered queries */
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** Delegator address */
  id: Scalars['ID'];
  /** Stakes of this delegator */
  stakes: Array<Network__DelegatedStake>;
  /** Total DelegatedStake entity count (Active and inactive) */
  stakesCount: Scalars['Int'];
  /** Total realized rewards on all delegated stakes. Realized rewards are added when undelegating and realizing a profit */
  totalRealizedRewards: Scalars['NETWORK__BigDecimal'];
  /** CUMULATIVE staked tokens in DelegatorStakes of this Delegator */
  totalStakedTokens: Scalars['BigInt'];
  /** CUMULATIVE unstaked tokens in DelegatorStakes of this Delegator */
  totalUnstakedTokens: Scalars['BigInt'];
};


/** Delegator with all their delegated stakes towards Indexers */
export type Network__DelegatorStakesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__DelegatedStake_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__DelegatedStake_Filter>;
};

export type Network__Delegator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Network__GraphAccount_Filter>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activeStakesCount?: InputMaybe<Scalars['Int']>;
  activeStakesCount_gt?: InputMaybe<Scalars['Int']>;
  activeStakesCount_gte?: InputMaybe<Scalars['Int']>;
  activeStakesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeStakesCount_lt?: InputMaybe<Scalars['Int']>;
  activeStakesCount_lte?: InputMaybe<Scalars['Int']>;
  activeStakesCount_not?: InputMaybe<Scalars['Int']>;
  activeStakesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stakesCount?: InputMaybe<Scalars['Int']>;
  stakesCount_gt?: InputMaybe<Scalars['Int']>;
  stakesCount_gte?: InputMaybe<Scalars['Int']>;
  stakesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  stakesCount_lt?: InputMaybe<Scalars['Int']>;
  stakesCount_lte?: InputMaybe<Scalars['Int']>;
  stakesCount_not?: InputMaybe<Scalars['Int']>;
  stakesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stakes_?: InputMaybe<Network__DelegatedStake_Filter>;
  totalRealizedRewards?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalRealizedRewards_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalRealizedRewards_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalRealizedRewards_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalRealizedRewards_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalRealizedRewards_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalRealizedRewards_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalRealizedRewards_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalStakedTokens?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalStakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokens?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Network__Delegator_OrderBy {
  Account = 'account',
  ActiveStakesCount = 'activeStakesCount',
  CreatedAt = 'createdAt',
  DefaultDisplayName = 'defaultDisplayName',
  Id = 'id',
  Stakes = 'stakes',
  StakesCount = 'stakesCount',
  TotalRealizedRewards = 'totalRealizedRewards',
  TotalStakedTokens = 'totalStakedTokens',
  TotalUnstakedTokens = 'totalUnstakedTokens'
}

/** Dispute of a query. Includes single query, conflicting attestation, and indexing disputes */
export type Network__Dispute = {
  __typename?: 'NETWORK__Dispute';
  /** Allocation ID. Only for Indexing Disputes */
  allocation?: Maybe<Network__Allocation>;
  /** Attestation. Only for single query and conflicting attestations */
  attestation?: Maybe<Network__Attestation>;
  /** Time dispute was closed at */
  closedAt: Scalars['Int'];
  /** Time dispute was created */
  createdAt: Scalars['Int'];
  /** Fisherman deposit */
  deposit: Scalars['BigInt'];
  /** Fisherman address */
  fisherman: Network__GraphAccount;
  /** Dispute ID */
  id: Scalars['ID'];
  /** Indexer disputed */
  indexer: Network__GraphAccount;
  /** Linked dispute of other Indexer. Only for conflicting attestation */
  linkedDispute?: Maybe<Network__Dispute>;
  /** Status of the dispute. Accepted means the Indexer was slashed */
  status: Network__DisputeStatus;
  /** Subgraph deployment being disputed */
  subgraphDeployment: Network__SubgraphDeployment;
  /** Amount of the slashed tokens that was burned */
  tokensBurned: Scalars['NETWORK__BigDecimal'];
  /** Amount of the slashed tokens that was payed as reward to the fisherman */
  tokensRewarded: Scalars['BigInt'];
  /** Total amount of tokens slashed on the dispute */
  tokensSlashed: Scalars['NETWORK__BigDecimal'];
  /** Type of dispute */
  type: Network__DisputeType;
};

export enum Network__DisputeStatus {
  Accepted = 'Accepted',
  Draw = 'Draw',
  Rejected = 'Rejected',
  Undecided = 'Undecided'
}

export enum Network__DisputeType {
  Conflicting = 'Conflicting',
  Indexing = 'Indexing',
  SingleQuery = 'SingleQuery'
}

export type Network__Dispute_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  allocation?: InputMaybe<Scalars['String']>;
  allocation_?: InputMaybe<Network__Allocation_Filter>;
  allocation_contains?: InputMaybe<Scalars['String']>;
  allocation_contains_nocase?: InputMaybe<Scalars['String']>;
  allocation_ends_with?: InputMaybe<Scalars['String']>;
  allocation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  allocation_gt?: InputMaybe<Scalars['String']>;
  allocation_gte?: InputMaybe<Scalars['String']>;
  allocation_in?: InputMaybe<Array<Scalars['String']>>;
  allocation_lt?: InputMaybe<Scalars['String']>;
  allocation_lte?: InputMaybe<Scalars['String']>;
  allocation_not?: InputMaybe<Scalars['String']>;
  allocation_not_contains?: InputMaybe<Scalars['String']>;
  allocation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  allocation_not_ends_with?: InputMaybe<Scalars['String']>;
  allocation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  allocation_not_in?: InputMaybe<Array<Scalars['String']>>;
  allocation_not_starts_with?: InputMaybe<Scalars['String']>;
  allocation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  allocation_starts_with?: InputMaybe<Scalars['String']>;
  allocation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  attestation?: InputMaybe<Scalars['String']>;
  attestation_?: InputMaybe<Network__Attestation_Filter>;
  attestation_contains?: InputMaybe<Scalars['String']>;
  attestation_contains_nocase?: InputMaybe<Scalars['String']>;
  attestation_ends_with?: InputMaybe<Scalars['String']>;
  attestation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  attestation_gt?: InputMaybe<Scalars['String']>;
  attestation_gte?: InputMaybe<Scalars['String']>;
  attestation_in?: InputMaybe<Array<Scalars['String']>>;
  attestation_lt?: InputMaybe<Scalars['String']>;
  attestation_lte?: InputMaybe<Scalars['String']>;
  attestation_not?: InputMaybe<Scalars['String']>;
  attestation_not_contains?: InputMaybe<Scalars['String']>;
  attestation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  attestation_not_ends_with?: InputMaybe<Scalars['String']>;
  attestation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  attestation_not_in?: InputMaybe<Array<Scalars['String']>>;
  attestation_not_starts_with?: InputMaybe<Scalars['String']>;
  attestation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  attestation_starts_with?: InputMaybe<Scalars['String']>;
  attestation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  closedAt?: InputMaybe<Scalars['Int']>;
  closedAt_gt?: InputMaybe<Scalars['Int']>;
  closedAt_gte?: InputMaybe<Scalars['Int']>;
  closedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAt_lt?: InputMaybe<Scalars['Int']>;
  closedAt_lte?: InputMaybe<Scalars['Int']>;
  closedAt_not?: InputMaybe<Scalars['Int']>;
  closedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fisherman?: InputMaybe<Scalars['String']>;
  fisherman_?: InputMaybe<Network__GraphAccount_Filter>;
  fisherman_contains?: InputMaybe<Scalars['String']>;
  fisherman_contains_nocase?: InputMaybe<Scalars['String']>;
  fisherman_ends_with?: InputMaybe<Scalars['String']>;
  fisherman_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fisherman_gt?: InputMaybe<Scalars['String']>;
  fisherman_gte?: InputMaybe<Scalars['String']>;
  fisherman_in?: InputMaybe<Array<Scalars['String']>>;
  fisherman_lt?: InputMaybe<Scalars['String']>;
  fisherman_lte?: InputMaybe<Scalars['String']>;
  fisherman_not?: InputMaybe<Scalars['String']>;
  fisherman_not_contains?: InputMaybe<Scalars['String']>;
  fisherman_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fisherman_not_ends_with?: InputMaybe<Scalars['String']>;
  fisherman_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fisherman_not_in?: InputMaybe<Array<Scalars['String']>>;
  fisherman_not_starts_with?: InputMaybe<Scalars['String']>;
  fisherman_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fisherman_starts_with?: InputMaybe<Scalars['String']>;
  fisherman_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<Network__GraphAccount_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute?: InputMaybe<Scalars['String']>;
  linkedDispute_?: InputMaybe<Network__Dispute_Filter>;
  linkedDispute_contains?: InputMaybe<Scalars['String']>;
  linkedDispute_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_ends_with?: InputMaybe<Scalars['String']>;
  linkedDispute_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_gt?: InputMaybe<Scalars['String']>;
  linkedDispute_gte?: InputMaybe<Scalars['String']>;
  linkedDispute_in?: InputMaybe<Array<Scalars['String']>>;
  linkedDispute_lt?: InputMaybe<Scalars['String']>;
  linkedDispute_lte?: InputMaybe<Scalars['String']>;
  linkedDispute_not?: InputMaybe<Scalars['String']>;
  linkedDispute_not_contains?: InputMaybe<Scalars['String']>;
  linkedDispute_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedDispute_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedDispute_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedDispute_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_starts_with?: InputMaybe<Scalars['String']>;
  linkedDispute_starts_with_nocase?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Network__DisputeStatus>;
  status_in?: InputMaybe<Array<Network__DisputeStatus>>;
  status_not?: InputMaybe<Network__DisputeStatus>;
  status_not_in?: InputMaybe<Array<Network__DisputeStatus>>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<Network__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokensBurned?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensBurned_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensBurned_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensBurned_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  tokensBurned_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensBurned_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensBurned_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensBurned_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  tokensRewarded?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_gt?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_gte?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensRewarded_lt?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_lte?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_not?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensSlashed?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensSlashed_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensSlashed_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensSlashed_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  tokensSlashed_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensSlashed_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensSlashed_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensSlashed_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  type?: InputMaybe<Network__DisputeType>;
  type_in?: InputMaybe<Array<Network__DisputeType>>;
  type_not?: InputMaybe<Network__DisputeType>;
  type_not_in?: InputMaybe<Array<Network__DisputeType>>;
};

export enum Network__Dispute_OrderBy {
  Allocation = 'allocation',
  Attestation = 'attestation',
  ClosedAt = 'closedAt',
  CreatedAt = 'createdAt',
  Deposit = 'deposit',
  Fisherman = 'fisherman',
  Id = 'id',
  Indexer = 'indexer',
  LinkedDispute = 'linkedDispute',
  Status = 'status',
  SubgraphDeployment = 'subgraphDeployment',
  TokensBurned = 'tokensBurned',
  TokensRewarded = 'tokensRewarded',
  TokensSlashed = 'tokensSlashed',
  Type = 'type'
}

/** Epoch aggregate data for network statistics on signaling, rewards, and query fees */
export type Network__Epoch = {
  __typename?: 'NETWORK__Epoch';
  /** Amount of query fees generated that are going to curators during this epoch */
  curatorQueryFees: Scalars['BigInt'];
  /** End block of the epoch */
  endBlock: Scalars['Int'];
  /** Epoch number */
  id: Scalars['ID'];
  /** Rebate amount claimed from the protocol through cobbs douglas during this epoch (Doesn't correlate to the queryFeesCollected for this epoch since there's a 7 day period before claiming) */
  queryFeeRebates: Scalars['BigInt'];
  /** Amount of query fees generated that are going to the rebate pool for indexers during this epoch */
  queryFeesCollected: Scalars['BigInt'];
  /** Signaled tokens during this epoch */
  signalledTokens: Scalars['BigInt'];
  /** Stake deposited during this epoch */
  stakeDeposited: Scalars['BigInt'];
  /** Start block of the epoch */
  startBlock: Scalars['Int'];
  /** Amount of query fees generated that were burnt by the 1% protocol tax during this epoch */
  taxedQueryFees: Scalars['BigInt'];
  /** Total indexing rewards earned in this epoch by delegators */
  totalDelegatorRewards: Scalars['BigInt'];
  /** Total indexing rewards earned in this epoch by indexers */
  totalIndexerRewards: Scalars['BigInt'];
  /** Total amount of query fees generated during this epoch (Includes everything) */
  totalQueryFees: Scalars['BigInt'];
  /** Total indexing rewards earned in this epoch. Includes both delegator and indexer rewards */
  totalRewards: Scalars['BigInt'];
};

export type Network__Epoch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  curatorQueryFees?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endBlock?: InputMaybe<Scalars['Int']>;
  endBlock_gt?: InputMaybe<Scalars['Int']>;
  endBlock_gte?: InputMaybe<Scalars['Int']>;
  endBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  endBlock_lt?: InputMaybe<Scalars['Int']>;
  endBlock_lte?: InputMaybe<Scalars['Int']>;
  endBlock_not?: InputMaybe<Scalars['Int']>;
  endBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeDeposited?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_gt?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_gte?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeDeposited_lt?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_lte?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_not?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startBlock?: InputMaybe<Scalars['Int']>;
  startBlock_gt?: InputMaybe<Scalars['Int']>;
  startBlock_gte?: InputMaybe<Scalars['Int']>;
  startBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  startBlock_lt?: InputMaybe<Scalars['Int']>;
  startBlock_lte?: InputMaybe<Scalars['Int']>;
  startBlock_not?: InputMaybe<Scalars['Int']>;
  startBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  taxedQueryFees?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  taxedQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorRewards?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRewards?: InputMaybe<Scalars['BigInt']>;
  totalRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Network__Epoch_OrderBy {
  CuratorQueryFees = 'curatorQueryFees',
  EndBlock = 'endBlock',
  Id = 'id',
  QueryFeeRebates = 'queryFeeRebates',
  QueryFeesCollected = 'queryFeesCollected',
  SignalledTokens = 'signalledTokens',
  StakeDeposited = 'stakeDeposited',
  StartBlock = 'startBlock',
  TaxedQueryFees = 'taxedQueryFees',
  TotalDelegatorRewards = 'totalDelegatorRewards',
  TotalIndexerRewards = 'totalIndexerRewards',
  TotalQueryFees = 'totalQueryFees',
  TotalRewards = 'totalRewards'
}

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccount = {
  __typename?: 'NETWORK__GraphAccount';
  /** Graph token balance */
  balance: Scalars['BigInt'];
  /** Main repository of code for the graph account */
  codeRepository?: Maybe<Scalars['String']>;
  /** Time the account was created */
  createdAt: Scalars['Int'];
  /** Disputes this graph account has created */
  createdDisputes: Array<Network__Dispute>;
  /** Amount this account has approved staking to transfer their GRT */
  curationApproval: Scalars['BigInt'];
  /** Curator fields for this GraphAccount. Null if never curated */
  curator?: Maybe<Network__Curator>;
  /** Default display name is the current default name. Used for filtered queries in the explorer */
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** Default name the graph account has chosen */
  defaultName?: Maybe<Network__GraphAccountName>;
  /** Delegator fields for this GraphAccount. Null if never delegated */
  delegator?: Maybe<Network__Delegator>;
  /** Description of the graph account */
  description?: Maybe<Scalars['String']>;
  /** Time that this graph account became a developer */
  developerCreatedAt?: Maybe<Scalars['Int']>;
  /** Display name. Not unique */
  displayName?: Maybe<Scalars['String']>;
  /** Disputes against this graph account */
  disputesAgainst: Array<Network__Dispute>;
  /** Amount this account has approved the GNS to transfer their GRT */
  gnsApproval: Scalars['BigInt'];
  /** Graph account ID */
  id: Scalars['ID'];
  /** Image URL */
  image?: Maybe<Scalars['String']>;
  /** Indexer fields for this GraphAccount. Null if never indexed */
  indexer?: Maybe<Network__Indexer>;
  /** True if it is an organization. False if it is an individual */
  isOrganization?: Maybe<Scalars['Boolean']>;
  /** IPFS hash with account metadata details */
  metadataHash?: Maybe<Scalars['NETWORK__Bytes']>;
  /** Name signal transactions created by this GraphAccount */
  nameSignalTransactions: Array<Network__NameSignalTransaction>;
  /** All names this graph account has claimed from all name systems */
  names: Array<Network__GraphAccountName>;
  /** Operator of other Graph Accounts */
  operatorOf: Array<Network__GraphAccount>;
  /** Operators of this Graph Accounts */
  operators: Array<Network__GraphAccount>;
  /** Amount this account has approved curation to transfer their GRT */
  stakingApproval: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Total query fees the subgraphs created by this account have accumulated in GRT */
  subgraphQueryFees: Scalars['BigInt'];
  /** Subgraphs the graph account owns */
  subgraphs: Array<Network__Subgraph>;
  tokenLockWallets: Array<Network__TokenLockWallet>;
  /** Website URL */
  website?: Maybe<Scalars['String']>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountCreatedDisputesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Dispute_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__Dispute_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountDisputesAgainstArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Dispute_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__Dispute_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountNameSignalTransactionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__NameSignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__NameSignalTransaction_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountNamesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__GraphAccountName_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__GraphAccountName_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountOperatorOfArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__GraphAccount_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__GraphAccount_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountOperatorsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__GraphAccount_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__GraphAccount_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountSubgraphsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Subgraph_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__Subgraph_Filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountTokenLockWalletsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__TokenLockWallet_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__TokenLockWallet_Filter>;
};

/**
 * A name chosen by a Graph Account from a Name System such as ENS. This allows Graph Accounts to be
 * recognized by name, rather than just an Ethereum address
 */
export type Network__GraphAccountName = {
  __typename?: 'NETWORK__GraphAccountName';
  /** The graph account that owned the name when it was linked in the graph network */
  graphAccount?: Maybe<Network__GraphAccount>;
  /** Name system concatenated with the unique ID of the name system */
  id: Scalars['ID'];
  /** Name from the system */
  name: Scalars['String'];
  /** Name system for this name */
  nameSystem: Network__NameSystem;
};

export type Network__GraphAccountName_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  graphAccount?: InputMaybe<Scalars['String']>;
  graphAccount_?: InputMaybe<Network__GraphAccount_Filter>;
  graphAccount_contains?: InputMaybe<Scalars['String']>;
  graphAccount_contains_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_ends_with?: InputMaybe<Scalars['String']>;
  graphAccount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_gt?: InputMaybe<Scalars['String']>;
  graphAccount_gte?: InputMaybe<Scalars['String']>;
  graphAccount_in?: InputMaybe<Array<Scalars['String']>>;
  graphAccount_lt?: InputMaybe<Scalars['String']>;
  graphAccount_lte?: InputMaybe<Scalars['String']>;
  graphAccount_not?: InputMaybe<Scalars['String']>;
  graphAccount_not_contains?: InputMaybe<Scalars['String']>;
  graphAccount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_not_ends_with?: InputMaybe<Scalars['String']>;
  graphAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  graphAccount_not_starts_with?: InputMaybe<Scalars['String']>;
  graphAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_starts_with?: InputMaybe<Scalars['String']>;
  graphAccount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  nameSystem?: InputMaybe<Network__NameSystem>;
  nameSystem_in?: InputMaybe<Array<Network__NameSystem>>;
  nameSystem_not?: InputMaybe<Network__NameSystem>;
  nameSystem_not_in?: InputMaybe<Array<Network__NameSystem>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Network__GraphAccountName_OrderBy {
  GraphAccount = 'graphAccount',
  Id = 'id',
  Name = 'name',
  NameSystem = 'nameSystem'
}

export type Network__GraphAccount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  codeRepository?: InputMaybe<Scalars['String']>;
  codeRepository_contains?: InputMaybe<Scalars['String']>;
  codeRepository_contains_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_ends_with?: InputMaybe<Scalars['String']>;
  codeRepository_ends_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_gt?: InputMaybe<Scalars['String']>;
  codeRepository_gte?: InputMaybe<Scalars['String']>;
  codeRepository_in?: InputMaybe<Array<Scalars['String']>>;
  codeRepository_lt?: InputMaybe<Scalars['String']>;
  codeRepository_lte?: InputMaybe<Scalars['String']>;
  codeRepository_not?: InputMaybe<Scalars['String']>;
  codeRepository_not_contains?: InputMaybe<Scalars['String']>;
  codeRepository_not_contains_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_ends_with?: InputMaybe<Scalars['String']>;
  codeRepository_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_in?: InputMaybe<Array<Scalars['String']>>;
  codeRepository_not_starts_with?: InputMaybe<Scalars['String']>;
  codeRepository_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_starts_with?: InputMaybe<Scalars['String']>;
  codeRepository_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdDisputes_?: InputMaybe<Network__Dispute_Filter>;
  curationApproval?: InputMaybe<Scalars['BigInt']>;
  curationApproval_gt?: InputMaybe<Scalars['BigInt']>;
  curationApproval_gte?: InputMaybe<Scalars['BigInt']>;
  curationApproval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curationApproval_lt?: InputMaybe<Scalars['BigInt']>;
  curationApproval_lte?: InputMaybe<Scalars['BigInt']>;
  curationApproval_not?: InputMaybe<Scalars['BigInt']>;
  curationApproval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curator?: InputMaybe<Scalars['String']>;
  curator_?: InputMaybe<Network__Curator_Filter>;
  curator_contains?: InputMaybe<Scalars['String']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_ends_with?: InputMaybe<Scalars['String']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_gt?: InputMaybe<Scalars['String']>;
  curator_gte?: InputMaybe<Scalars['String']>;
  curator_in?: InputMaybe<Array<Scalars['String']>>;
  curator_lt?: InputMaybe<Scalars['String']>;
  curator_lte?: InputMaybe<Scalars['String']>;
  curator_not?: InputMaybe<Scalars['String']>;
  curator_not_contains?: InputMaybe<Scalars['String']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_in?: InputMaybe<Array<Scalars['String']>>;
  curator_not_starts_with?: InputMaybe<Scalars['String']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_starts_with?: InputMaybe<Scalars['String']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName?: InputMaybe<Scalars['String']>;
  defaultName_?: InputMaybe<Network__GraphAccountName_Filter>;
  defaultName_contains?: InputMaybe<Scalars['String']>;
  defaultName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultName_ends_with?: InputMaybe<Scalars['String']>;
  defaultName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_gt?: InputMaybe<Scalars['String']>;
  defaultName_gte?: InputMaybe<Scalars['String']>;
  defaultName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultName_lt?: InputMaybe<Scalars['String']>;
  defaultName_lte?: InputMaybe<Scalars['String']>;
  defaultName_not?: InputMaybe<Scalars['String']>;
  defaultName_not_contains?: InputMaybe<Scalars['String']>;
  defaultName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_starts_with?: InputMaybe<Scalars['String']>;
  defaultName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<Network__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  developerCreatedAt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_gt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_gte?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  developerCreatedAt_lt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_lte?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_not?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  displayName?: InputMaybe<Scalars['String']>;
  displayName_contains?: InputMaybe<Scalars['String']>;
  displayName_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_ends_with?: InputMaybe<Scalars['String']>;
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_gt?: InputMaybe<Scalars['String']>;
  displayName_gte?: InputMaybe<Scalars['String']>;
  displayName_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_lt?: InputMaybe<Scalars['String']>;
  displayName_lte?: InputMaybe<Scalars['String']>;
  displayName_not?: InputMaybe<Scalars['String']>;
  displayName_not_contains?: InputMaybe<Scalars['String']>;
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_not_starts_with?: InputMaybe<Scalars['String']>;
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_starts_with?: InputMaybe<Scalars['String']>;
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  disputesAgainst_?: InputMaybe<Network__Dispute_Filter>;
  gnsApproval?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_gt?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_gte?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gnsApproval_lt?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_lte?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_not?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  image?: InputMaybe<Scalars['String']>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<Network__Indexer_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  isOrganization?: InputMaybe<Scalars['Boolean']>;
  isOrganization_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isOrganization_not?: InputMaybe<Scalars['Boolean']>;
  isOrganization_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  metadataHash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  metadataHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  nameSignalTransactions_?: InputMaybe<Network__NameSignalTransaction_Filter>;
  names_?: InputMaybe<Network__GraphAccountName_Filter>;
  operatorOf_?: InputMaybe<Network__GraphAccount_Filter>;
  operators?: InputMaybe<Array<Scalars['String']>>;
  operators_?: InputMaybe<Network__GraphAccount_Filter>;
  operators_contains?: InputMaybe<Array<Scalars['String']>>;
  operators_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  operators_not?: InputMaybe<Array<Scalars['String']>>;
  operators_not_contains?: InputMaybe<Array<Scalars['String']>>;
  operators_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  stakingApproval?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_gt?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_gte?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingApproval_lt?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_lte?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_not?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphQueryFees?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphs_?: InputMaybe<Network__Subgraph_Filter>;
  tokenLockWallets?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_?: InputMaybe<Network__TokenLockWallet_Filter>;
  tokenLockWallets_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_not?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_not_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  website?: InputMaybe<Scalars['String']>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_contains_nocase?: InputMaybe<Scalars['String']>;
  website_ends_with?: InputMaybe<Scalars['String']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_gt?: InputMaybe<Scalars['String']>;
  website_gte?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<Scalars['String']>>;
  website_lt?: InputMaybe<Scalars['String']>;
  website_lte?: InputMaybe<Scalars['String']>;
  website_not?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']>;
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_starts_with?: InputMaybe<Scalars['String']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Network__GraphAccount_OrderBy {
  Balance = 'balance',
  CodeRepository = 'codeRepository',
  CreatedAt = 'createdAt',
  CreatedDisputes = 'createdDisputes',
  CurationApproval = 'curationApproval',
  Curator = 'curator',
  DefaultDisplayName = 'defaultDisplayName',
  DefaultName = 'defaultName',
  Delegator = 'delegator',
  Description = 'description',
  DeveloperCreatedAt = 'developerCreatedAt',
  DisplayName = 'displayName',
  DisputesAgainst = 'disputesAgainst',
  GnsApproval = 'gnsApproval',
  Id = 'id',
  Image = 'image',
  Indexer = 'indexer',
  IsOrganization = 'isOrganization',
  MetadataHash = 'metadataHash',
  NameSignalTransactions = 'nameSignalTransactions',
  Names = 'names',
  OperatorOf = 'operatorOf',
  Operators = 'operators',
  StakingApproval = 'stakingApproval',
  SubgraphQueryFees = 'subgraphQueryFees',
  Subgraphs = 'subgraphs',
  TokenLockWallets = 'tokenLockWallets',
  Website = 'website'
}

/** Graph Network global parameters and contract addresses */
export type Network__GraphNetwork = {
  __typename?: 'NETWORK__GraphNetwork';
  /** NOT IMPLEMENTED - Price of one GRT in ETH */
  GRTinETH?: Maybe<Scalars['NETWORK__BigDecimal']>;
  /** NOT IMPLEMENTED - Price of one GRT in USD */
  GRTinUSD: Scalars['NETWORK__BigDecimal'];
  /** Total amount of curators historically */
  activeCuratorCount: Scalars['Int'];
  /** Total active delegations. Those delegations that still have GRT staked towards an indexer */
  activeDelegationCount: Scalars['Int'];
  /** Total active delegators. Those that still have at least one active delegation. */
  activeDelegatorCount: Scalars['Int'];
  /** Amount of active Subgraph entities */
  activeSubgraphCount: Scalars['Int'];
  /** Dispute arbitrator */
  arbitrator: Scalars['NETWORK__Bytes'];
  /** Asset holder for the protocol */
  assetHolders?: Maybe<Array<Scalars['NETWORK__Bytes']>>;
  /** Epochs to wait before fees can be claimed in rebate pool */
  channelDisputeEpochs: Scalars['Int'];
  /** Controller address */
  controller: Scalars['NETWORK__Bytes'];
  /** Curation address */
  curation: Scalars['NETWORK__Bytes'];
  /** Curation implementations. Last in the array is current */
  curationImplementations: Array<Scalars['NETWORK__Bytes']>;
  /** Percentage of fees going to curators. In parts per million */
  curationPercentage: Scalars['Int'];
  /** The fee charged when a curator withdraws signal. In parts per million */
  curationTaxPercentage: Scalars['Int'];
  /** Total amount of curators historically */
  curatorCount: Scalars['Int'];
  /** Current epoch the protocol is in */
  currentEpoch: Scalars['Int'];
  /** Block number for L1. Only implemented for L2 deployments to properly reflect the L1 block used for timings */
  currentL1BlockNumber?: Maybe<Scalars['BigInt']>;
  /** Default reserve ratio for all subgraphs. In parts per million */
  defaultReserveRatio: Scalars['Int'];
  /** Total amount of delegations historically */
  delegationCount: Scalars['Int'];
  /** Minimum time an Indexer must use for resetting their Delegation parameters */
  delegationParametersCooldown: Scalars['Int'];
  /** Ratio of max staked delegation tokens to indexers stake that earns rewards */
  delegationRatio: Scalars['Int'];
  /** Tax that delegators pay to deposit. In Parts per million */
  delegationTaxPercentage: Scalars['Int'];
  /** Time in epochs a delegator needs to wait to withdraw delegated stake */
  delegationUnbondingPeriod: Scalars['Int'];
  /** Total amount of delegators historically */
  delegatorCount: Scalars['Int'];
  /** Dispute manager address */
  disputeManager: Scalars['NETWORK__Bytes'];
  /** Total epochs */
  epochCount: Scalars['Int'];
  /** Epoch Length in blocks */
  epochLength: Scalars['Int'];
  /** Epoch manager address */
  epochManager: Scalars['NETWORK__Bytes'];
  /** Epoch Manager implementations. Last in the array is current */
  epochManagerImplementations: Array<Scalars['NETWORK__Bytes']>;
  /** Reward to Fisherman on successful disputes. In parts per million */
  fishermanRewardPercentage: Scalars['Int'];
  /** GNS address */
  gns: Scalars['NETWORK__Bytes'];
  /** Governor of the controller (i.e. the whole protocol) */
  governor: Scalars['NETWORK__Bytes'];
  /** Graph token address */
  graphToken: Scalars['NETWORK__Bytes'];
  /** ID is set to 1 */
  id: Scalars['ID'];
  /** Total indexers */
  indexerCount: Scalars['Int'];
  /** Penalty to Indexer on successful disputes for indexing disputes. In parts per million */
  indexingSlashingPercentage: Scalars['Int'];
  /** True if the protocol is partially paused */
  isPartialPaused: Scalars['Boolean'];
  /** True if the protocol is paused */
  isPaused: Scalars['Boolean'];
  /** Block when epoch length was last updated */
  lastLengthUpdateBlock: Scalars['Int'];
  /** Epoch when epoch length was last updated */
  lastLengthUpdateEpoch: Scalars['Int'];
  /** Epoch that was last run */
  lastRunEpoch: Scalars['Int'];
  /** Epochs to wait before delegators can settle */
  maxAllocationEpochs: Scalars['Int'];
  /** Minimum amount of tokens needed to start curating */
  minimumCurationDeposit: Scalars['BigInt'];
  /** Minimum deposit to create a dispute */
  minimumDisputeDeposit: Scalars['BigInt'];
  /** Minimum GRT an indexer must stake */
  minimumIndexerStake: Scalars['BigInt'];
  /** The issuance rate of GRT per block. To get annual rate do (networkGRTIssuance * 10^-18)^(blocksPerYear) */
  networkGRTIssuance: Scalars['BigInt'];
  /** Percentage of the GNS migration tax payed by the subgraph owner */
  ownerTaxPercentage: Scalars['Int'];
  /** Pause guardian address */
  pauseGuardian: Scalars['NETWORK__Bytes'];
  /** Percentage of fees burn as protocol fee. In parts per million */
  protocolFeePercentage: Scalars['Int'];
  /** Penalty to Indexer on successful disputes for query disputes. In parts per million */
  querySlashingPercentage: Scalars['Int'];
  /** Alpha in the cobbs douglas formula */
  rebateRatio: Scalars['NETWORK__BigDecimal'];
  /** Rewards manager address */
  rewardsManager: Scalars['NETWORK__Bytes'];
  /** Rewards Manager implementations. Last in the array is current */
  rewardsManagerImplementations: Array<Scalars['NETWORK__Bytes']>;
  /** Service registry address */
  serviceRegistry: Scalars['NETWORK__Bytes'];
  /** Contracts that have been approved to be a slasher */
  slashers?: Maybe<Array<Scalars['NETWORK__Bytes']>>;
  /** [DEPRECATED] Penalty to Indexer on successful disputes for indexing disputes. In parts per million */
  slashingPercentage: Scalars['Int'];
  /** Number of indexers that currently have some stake in the protocol */
  stakedIndexersCount: Scalars['Int'];
  /** Staking address */
  staking: Scalars['NETWORK__Bytes'];
  /** Graph token implementations. Last in the array is current */
  stakingImplementations: Array<Scalars['NETWORK__Bytes']>;
  /** Address of the availability oracle */
  subgraphAvailabilityOracle: Scalars['NETWORK__Bytes'];
  /** Total amount of Subgraph entities */
  subgraphCount: Scalars['Int'];
  /** Total amount of SubgraphDeployment entities */
  subgraphDeploymentCount: Scalars['Int'];
  /** Time in blocks needed to wait to unstake */
  thawingPeriod: Scalars['Int'];
  /** Total query fees payed to curators */
  totalCuratorQueryFees: Scalars['BigInt'];
  /** Total delegated tokens in the protocol */
  totalDelegatedTokens: Scalars['BigInt'];
  /** Total query fees rebates claimed by delegators */
  totalDelegatorQueryFeeRebates: Scalars['BigInt'];
  /** Total amount of GRT burned */
  totalGRTBurned: Scalars['BigInt'];
  /** Total amount of GRT deposited to the L1 gateway. Note that the actual amount claimed in L2 might be lower due to tickets not redeemed. */
  totalGRTDeposited: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Total amount of GRT deposited to the L1 gateway and redeemed in L2. */
  totalGRTDepositedConfirmed: Scalars['BigInt'];
  /** Total amount of GRT minted */
  totalGRTMinted: Scalars['BigInt'];
  /** Total amount of GRT withdrawn from the L2 gateway. Note that the actual amount claimed in L1 might be lower due to outbound transactions not finalized. */
  totalGRTWithdrawn: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Total amount of GRT withdrawn from the L2 gateway and claimed in L1. */
  totalGRTWithdrawnConfirmed: Scalars['BigInt'];
  /** Total query fees rebates claimed by indexers */
  totalIndexerQueryFeeRebates: Scalars['BigInt'];
  /** Total query fees collected by indexers */
  totalIndexerQueryFeesCollected: Scalars['BigInt'];
  /** Total indexing rewards minted to Delegators */
  totalIndexingDelegatorRewards: Scalars['BigInt'];
  /** Total indexing rewards minted to Indexers */
  totalIndexingIndexerRewards: Scalars['BigInt'];
  /** Total indexing rewards minted */
  totalIndexingRewards: Scalars['BigInt'];
  /** Total query fees generated in the network */
  totalQueryFees: Scalars['BigInt'];
  /** Graph Token supply */
  totalSupply: Scalars['BigInt'];
  /** Total protocol taxes applied to the query fees */
  totalTaxedQueryFees: Scalars['BigInt'];
  /** Total GRT currently in allocation */
  totalTokensAllocated: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Total tokens that are settled and waiting to be claimed */
  totalTokensClaimable: Scalars['BigInt'];
  /** The total amount of GRT signalled in the Curation contract */
  totalTokensSignalled: Scalars['BigInt'];
  /** Total GRT currently curating via the Auto-Migrate function */
  totalTokensSignalledAutoMigrate: Scalars['NETWORK__BigDecimal'];
  /** Total GRT currently curating to a specific version */
  totalTokensSignalledDirectly: Scalars['NETWORK__BigDecimal'];
  /** The total amount of GRT staked in the staking contract */
  totalTokensStaked: Scalars['BigInt'];
  /** Total unclaimed rebates. Includes unclaimed rebates, and rebates lost in cobbs douglas  */
  totalUnclaimedQueryFeeRebates: Scalars['BigInt'];
  /** Total tokens that are currently locked or withdrawable in the network from unstaking */
  totalUnstakedTokensLocked: Scalars['BigInt'];
};

export type Network__GraphNetwork_Filter = {
  GRTinETH?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinETH_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinETH_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinETH_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  GRTinETH_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinETH_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinETH_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinETH_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  GRTinUSD?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinUSD_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinUSD_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinUSD_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  GRTinUSD_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinUSD_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinUSD_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinUSD_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  activeCuratorCount?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_gt?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_gte?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeCuratorCount_lt?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_lte?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_not?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeDelegationCount?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_gt?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_gte?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeDelegationCount_lt?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_lte?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_not?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeDelegatorCount?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_gt?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_gte?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeDelegatorCount_lt?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_lte?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_not?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSubgraphCount?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_gt?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_gte?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSubgraphCount_lt?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_lte?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_not?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  arbitrator?: InputMaybe<Scalars['NETWORK__Bytes']>;
  arbitrator_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  arbitrator_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  arbitrator_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  arbitrator_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  arbitrator_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  arbitrator_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  arbitrator_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  arbitrator_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  arbitrator_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  assetHolders?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  assetHolders_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  assetHolders_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  assetHolders_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  assetHolders_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  assetHolders_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  channelDisputeEpochs?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_gt?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_gte?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_in?: InputMaybe<Array<Scalars['Int']>>;
  channelDisputeEpochs_lt?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_lte?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_not?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_not_in?: InputMaybe<Array<Scalars['Int']>>;
  controller?: InputMaybe<Scalars['NETWORK__Bytes']>;
  controller_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  controller_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  controller_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  controller_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  controller_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  controller_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  controller_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  controller_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  controller_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curation?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curationImplementations?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curationImplementations_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curationImplementations_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curationImplementations_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curationImplementations_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curationImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curationPercentage?: InputMaybe<Scalars['Int']>;
  curationPercentage_gt?: InputMaybe<Scalars['Int']>;
  curationPercentage_gte?: InputMaybe<Scalars['Int']>;
  curationPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  curationPercentage_lt?: InputMaybe<Scalars['Int']>;
  curationPercentage_lte?: InputMaybe<Scalars['Int']>;
  curationPercentage_not?: InputMaybe<Scalars['Int']>;
  curationPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  curationTaxPercentage?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_gt?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_gte?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  curationTaxPercentage_lt?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_lte?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_not?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  curation_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curation_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curation_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curation_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curation_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curation_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curation_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curation_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curation_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curatorCount?: InputMaybe<Scalars['Int']>;
  curatorCount_gt?: InputMaybe<Scalars['Int']>;
  curatorCount_gte?: InputMaybe<Scalars['Int']>;
  curatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  curatorCount_lt?: InputMaybe<Scalars['Int']>;
  curatorCount_lte?: InputMaybe<Scalars['Int']>;
  curatorCount_not?: InputMaybe<Scalars['Int']>;
  curatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  currentEpoch?: InputMaybe<Scalars['Int']>;
  currentEpoch_gt?: InputMaybe<Scalars['Int']>;
  currentEpoch_gte?: InputMaybe<Scalars['Int']>;
  currentEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  currentEpoch_lt?: InputMaybe<Scalars['Int']>;
  currentEpoch_lte?: InputMaybe<Scalars['Int']>;
  currentEpoch_not?: InputMaybe<Scalars['Int']>;
  currentEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  currentL1BlockNumber?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentL1BlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  defaultReserveRatio?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_gt?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_gte?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultReserveRatio_lt?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_lte?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_not?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationCount?: InputMaybe<Scalars['Int']>;
  delegationCount_gt?: InputMaybe<Scalars['Int']>;
  delegationCount_gte?: InputMaybe<Scalars['Int']>;
  delegationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationCount_lt?: InputMaybe<Scalars['Int']>;
  delegationCount_lte?: InputMaybe<Scalars['Int']>;
  delegationCount_not?: InputMaybe<Scalars['Int']>;
  delegationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationParametersCooldown?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_gt?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_gte?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationParametersCooldown_lt?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_lte?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_not?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationRatio?: InputMaybe<Scalars['Int']>;
  delegationRatio_gt?: InputMaybe<Scalars['Int']>;
  delegationRatio_gte?: InputMaybe<Scalars['Int']>;
  delegationRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationRatio_lt?: InputMaybe<Scalars['Int']>;
  delegationRatio_lte?: InputMaybe<Scalars['Int']>;
  delegationRatio_not?: InputMaybe<Scalars['Int']>;
  delegationRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationTaxPercentage?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_gt?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_gte?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationTaxPercentage_lt?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_lte?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_not?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationUnbondingPeriod?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_gt?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_gte?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationUnbondingPeriod_lt?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_lte?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_not?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorCount?: InputMaybe<Scalars['Int']>;
  delegatorCount_gt?: InputMaybe<Scalars['Int']>;
  delegatorCount_gte?: InputMaybe<Scalars['Int']>;
  delegatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorCount_lt?: InputMaybe<Scalars['Int']>;
  delegatorCount_lte?: InputMaybe<Scalars['Int']>;
  delegatorCount_not?: InputMaybe<Scalars['Int']>;
  delegatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  disputeManager?: InputMaybe<Scalars['NETWORK__Bytes']>;
  disputeManager_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  disputeManager_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  disputeManager_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  disputeManager_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  disputeManager_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  disputeManager_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  disputeManager_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  disputeManager_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  disputeManager_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  epochCount?: InputMaybe<Scalars['Int']>;
  epochCount_gt?: InputMaybe<Scalars['Int']>;
  epochCount_gte?: InputMaybe<Scalars['Int']>;
  epochCount_in?: InputMaybe<Array<Scalars['Int']>>;
  epochCount_lt?: InputMaybe<Scalars['Int']>;
  epochCount_lte?: InputMaybe<Scalars['Int']>;
  epochCount_not?: InputMaybe<Scalars['Int']>;
  epochCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  epochLength?: InputMaybe<Scalars['Int']>;
  epochLength_gt?: InputMaybe<Scalars['Int']>;
  epochLength_gte?: InputMaybe<Scalars['Int']>;
  epochLength_in?: InputMaybe<Array<Scalars['Int']>>;
  epochLength_lt?: InputMaybe<Scalars['Int']>;
  epochLength_lte?: InputMaybe<Scalars['Int']>;
  epochLength_not?: InputMaybe<Scalars['Int']>;
  epochLength_not_in?: InputMaybe<Array<Scalars['Int']>>;
  epochManager?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManagerImplementations?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  epochManagerImplementations_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  epochManagerImplementations_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  epochManagerImplementations_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  epochManagerImplementations_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  epochManagerImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  epochManager_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManager_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManager_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManager_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  epochManager_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManager_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManager_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManager_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManager_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  fishermanRewardPercentage?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_gt?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_gte?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  fishermanRewardPercentage_lt?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_lte?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_not?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  gns?: InputMaybe<Scalars['NETWORK__Bytes']>;
  gns_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  gns_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  gns_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  gns_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  gns_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  gns_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  gns_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  gns_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  gns_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  governor?: InputMaybe<Scalars['NETWORK__Bytes']>;
  governor_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  governor_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  governor_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  governor_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  governor_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  governor_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  governor_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  governor_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  governor_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  graphToken?: InputMaybe<Scalars['NETWORK__Bytes']>;
  graphToken_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  graphToken_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  graphToken_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  graphToken_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  graphToken_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  graphToken_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  graphToken_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  graphToken_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  graphToken_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexerCount?: InputMaybe<Scalars['Int']>;
  indexerCount_gt?: InputMaybe<Scalars['Int']>;
  indexerCount_gte?: InputMaybe<Scalars['Int']>;
  indexerCount_in?: InputMaybe<Array<Scalars['Int']>>;
  indexerCount_lt?: InputMaybe<Scalars['Int']>;
  indexerCount_lte?: InputMaybe<Scalars['Int']>;
  indexerCount_not?: InputMaybe<Scalars['Int']>;
  indexerCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingSlashingPercentage?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_gt?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_gte?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingSlashingPercentage_lt?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_lte?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_not?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  isPartialPaused?: InputMaybe<Scalars['Boolean']>;
  isPartialPaused_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPartialPaused_not?: InputMaybe<Scalars['Boolean']>;
  isPartialPaused_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPaused?: InputMaybe<Scalars['Boolean']>;
  isPaused_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPaused_not?: InputMaybe<Scalars['Boolean']>;
  isPaused_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  lastLengthUpdateBlock?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_gt?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_gte?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  lastLengthUpdateBlock_lt?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_lte?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_not?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastLengthUpdateEpoch?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_gt?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_gte?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  lastLengthUpdateEpoch_lt?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_lte?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_not?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastRunEpoch?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_gt?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_gte?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  lastRunEpoch_lt?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_lte?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_not?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  maxAllocationEpochs?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_gt?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_gte?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_in?: InputMaybe<Array<Scalars['Int']>>;
  maxAllocationEpochs_lt?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_lte?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_not?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_not_in?: InputMaybe<Array<Scalars['Int']>>;
  minimumCurationDeposit?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumCurationDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_not?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumDisputeDeposit?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumDisputeDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_not?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumIndexerStake?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_gt?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_gte?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumIndexerStake_lt?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_lte?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_not?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  networkGRTIssuance?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_gt?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_gte?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  networkGRTIssuance_lt?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_lte?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_not?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ownerTaxPercentage?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_gt?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_gte?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  ownerTaxPercentage_lt?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_lte?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_not?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pauseGuardian?: InputMaybe<Scalars['NETWORK__Bytes']>;
  pauseGuardian_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  pauseGuardian_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  pauseGuardian_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  pauseGuardian_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  pauseGuardian_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  pauseGuardian_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  pauseGuardian_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  pauseGuardian_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  pauseGuardian_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  protocolFeePercentage?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_gt?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_gte?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  protocolFeePercentage_lt?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_lte?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_not?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  querySlashingPercentage?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_gt?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_gte?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  querySlashingPercentage_lt?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_lte?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_not?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rebateRatio?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  rebateRatio_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  rebateRatio_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  rebateRatio_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  rebateRatio_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  rebateRatio_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  rebateRatio_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  rebateRatio_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  rewardsManager?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManagerImplementations?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  rewardsManagerImplementations_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  rewardsManagerImplementations_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  rewardsManagerImplementations_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  rewardsManagerImplementations_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  rewardsManagerImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  rewardsManager_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManager_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManager_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManager_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  rewardsManager_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManager_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManager_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManager_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManager_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  serviceRegistry?: InputMaybe<Scalars['NETWORK__Bytes']>;
  serviceRegistry_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  serviceRegistry_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  serviceRegistry_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  serviceRegistry_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  serviceRegistry_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  serviceRegistry_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  serviceRegistry_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  serviceRegistry_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  serviceRegistry_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  slashers?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  slashers_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  slashers_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  slashers_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  slashers_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  slashers_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  slashingPercentage?: InputMaybe<Scalars['Int']>;
  slashingPercentage_gt?: InputMaybe<Scalars['Int']>;
  slashingPercentage_gte?: InputMaybe<Scalars['Int']>;
  slashingPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  slashingPercentage_lt?: InputMaybe<Scalars['Int']>;
  slashingPercentage_lte?: InputMaybe<Scalars['Int']>;
  slashingPercentage_not?: InputMaybe<Scalars['Int']>;
  slashingPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stakedIndexersCount?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_gt?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_gte?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_in?: InputMaybe<Array<Scalars['Int']>>;
  stakedIndexersCount_lt?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_lte?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_not?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  staking?: InputMaybe<Scalars['NETWORK__Bytes']>;
  stakingImplementations?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  stakingImplementations_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  stakingImplementations_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  stakingImplementations_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  stakingImplementations_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  stakingImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  staking_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  staking_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  staking_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  staking_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  staking_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  staking_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  staking_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  staking_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  staking_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  subgraphAvailabilityOracle?: InputMaybe<Scalars['NETWORK__Bytes']>;
  subgraphAvailabilityOracle_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  subgraphAvailabilityOracle_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  subgraphAvailabilityOracle_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  subgraphAvailabilityOracle_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  subgraphAvailabilityOracle_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  subgraphAvailabilityOracle_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  subgraphAvailabilityOracle_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  subgraphAvailabilityOracle_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  subgraphAvailabilityOracle_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  subgraphCount?: InputMaybe<Scalars['Int']>;
  subgraphCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphCount_not?: InputMaybe<Scalars['Int']>;
  subgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeploymentCount?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeploymentCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_not?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  thawingPeriod?: InputMaybe<Scalars['Int']>;
  thawingPeriod_gt?: InputMaybe<Scalars['Int']>;
  thawingPeriod_gte?: InputMaybe<Scalars['Int']>;
  thawingPeriod_in?: InputMaybe<Array<Scalars['Int']>>;
  thawingPeriod_lt?: InputMaybe<Scalars['Int']>;
  thawingPeriod_lte?: InputMaybe<Scalars['Int']>;
  thawingPeriod_not?: InputMaybe<Scalars['Int']>;
  thawingPeriod_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalCuratorQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCuratorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokens?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTBurned?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTBurned_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTDeposited?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTDepositedConfirmed_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTDeposited_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTDeposited_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTMinted?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTMinted_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTWithdrawn?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTWithdrawnConfirmed_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTWithdrawn_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTWithdrawn_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingDelegatorRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingIndexerRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingIndexerRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTaxedQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTaxedQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAllocated?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAllocated_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensClaimable?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensClaimable_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalled?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalledAutoMigrate?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledAutoMigrate_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledAutoMigrate_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledAutoMigrate_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalTokensSignalledAutoMigrate_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledAutoMigrate_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledAutoMigrate_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledAutoMigrate_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalTokensSignalledDirectly?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledDirectly_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledDirectly_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledDirectly_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalTokensSignalledDirectly_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledDirectly_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledDirectly_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledDirectly_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalTokensSignalled_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalled_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensStaked?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensStaked_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnclaimedQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnclaimedQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokensLocked?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokensLocked_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_not?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Network__GraphNetwork_OrderBy {
  GrTinEth = 'GRTinETH',
  GrTinUsd = 'GRTinUSD',
  ActiveCuratorCount = 'activeCuratorCount',
  ActiveDelegationCount = 'activeDelegationCount',
  ActiveDelegatorCount = 'activeDelegatorCount',
  ActiveSubgraphCount = 'activeSubgraphCount',
  Arbitrator = 'arbitrator',
  AssetHolders = 'assetHolders',
  ChannelDisputeEpochs = 'channelDisputeEpochs',
  Controller = 'controller',
  Curation = 'curation',
  CurationImplementations = 'curationImplementations',
  CurationPercentage = 'curationPercentage',
  CurationTaxPercentage = 'curationTaxPercentage',
  CuratorCount = 'curatorCount',
  CurrentEpoch = 'currentEpoch',
  CurrentL1BlockNumber = 'currentL1BlockNumber',
  DefaultReserveRatio = 'defaultReserveRatio',
  DelegationCount = 'delegationCount',
  DelegationParametersCooldown = 'delegationParametersCooldown',
  DelegationRatio = 'delegationRatio',
  DelegationTaxPercentage = 'delegationTaxPercentage',
  DelegationUnbondingPeriod = 'delegationUnbondingPeriod',
  DelegatorCount = 'delegatorCount',
  DisputeManager = 'disputeManager',
  EpochCount = 'epochCount',
  EpochLength = 'epochLength',
  EpochManager = 'epochManager',
  EpochManagerImplementations = 'epochManagerImplementations',
  FishermanRewardPercentage = 'fishermanRewardPercentage',
  Gns = 'gns',
  Governor = 'governor',
  GraphToken = 'graphToken',
  Id = 'id',
  IndexerCount = 'indexerCount',
  IndexingSlashingPercentage = 'indexingSlashingPercentage',
  IsPartialPaused = 'isPartialPaused',
  IsPaused = 'isPaused',
  LastLengthUpdateBlock = 'lastLengthUpdateBlock',
  LastLengthUpdateEpoch = 'lastLengthUpdateEpoch',
  LastRunEpoch = 'lastRunEpoch',
  MaxAllocationEpochs = 'maxAllocationEpochs',
  MinimumCurationDeposit = 'minimumCurationDeposit',
  MinimumDisputeDeposit = 'minimumDisputeDeposit',
  MinimumIndexerStake = 'minimumIndexerStake',
  NetworkGrtIssuance = 'networkGRTIssuance',
  OwnerTaxPercentage = 'ownerTaxPercentage',
  PauseGuardian = 'pauseGuardian',
  ProtocolFeePercentage = 'protocolFeePercentage',
  QuerySlashingPercentage = 'querySlashingPercentage',
  RebateRatio = 'rebateRatio',
  RewardsManager = 'rewardsManager',
  RewardsManagerImplementations = 'rewardsManagerImplementations',
  ServiceRegistry = 'serviceRegistry',
  Slashers = 'slashers',
  SlashingPercentage = 'slashingPercentage',
  StakedIndexersCount = 'stakedIndexersCount',
  Staking = 'staking',
  StakingImplementations = 'stakingImplementations',
  SubgraphAvailabilityOracle = 'subgraphAvailabilityOracle',
  SubgraphCount = 'subgraphCount',
  SubgraphDeploymentCount = 'subgraphDeploymentCount',
  ThawingPeriod = 'thawingPeriod',
  TotalCuratorQueryFees = 'totalCuratorQueryFees',
  TotalDelegatedTokens = 'totalDelegatedTokens',
  TotalDelegatorQueryFeeRebates = 'totalDelegatorQueryFeeRebates',
  TotalGrtBurned = 'totalGRTBurned',
  TotalGrtDeposited = 'totalGRTDeposited',
  TotalGrtDepositedConfirmed = 'totalGRTDepositedConfirmed',
  TotalGrtMinted = 'totalGRTMinted',
  TotalGrtWithdrawn = 'totalGRTWithdrawn',
  TotalGrtWithdrawnConfirmed = 'totalGRTWithdrawnConfirmed',
  TotalIndexerQueryFeeRebates = 'totalIndexerQueryFeeRebates',
  TotalIndexerQueryFeesCollected = 'totalIndexerQueryFeesCollected',
  TotalIndexingDelegatorRewards = 'totalIndexingDelegatorRewards',
  TotalIndexingIndexerRewards = 'totalIndexingIndexerRewards',
  TotalIndexingRewards = 'totalIndexingRewards',
  TotalQueryFees = 'totalQueryFees',
  TotalSupply = 'totalSupply',
  TotalTaxedQueryFees = 'totalTaxedQueryFees',
  TotalTokensAllocated = 'totalTokensAllocated',
  TotalTokensClaimable = 'totalTokensClaimable',
  TotalTokensSignalled = 'totalTokensSignalled',
  TotalTokensSignalledAutoMigrate = 'totalTokensSignalledAutoMigrate',
  TotalTokensSignalledDirectly = 'totalTokensSignalledDirectly',
  TotalTokensStaked = 'totalTokensStaked',
  TotalUnclaimedQueryFeeRebates = 'totalUnclaimedQueryFeeRebates',
  TotalUnstakedTokensLocked = 'totalUnstakedTokensLocked'
}

/** Metadata for the Indexer along with parameters and staking data */
export type Network__Indexer = {
  __typename?: 'NETWORK__Indexer';
  /** Graph account of this indexer */
  account: Network__GraphAccount;
  /** CURRENT  tokens allocated on all subgraphs */
  allocatedTokens: Scalars['BigInt'];
  /** Number of active allocations of stake for this Indexer */
  allocationCount: Scalars['Int'];
  /** Active allocations of stake for this Indexer */
  allocations: Array<Network__Allocation>;
  /** NOT IMPLEMENTED - Annualized rate of return for the indexer */
  annualizedReturn: Scalars['NETWORK__BigDecimal'];
  /** Stake available to earn rewards. tokenCapacity - allocationTokens - lockedTokens */
  availableStake: Scalars['BigInt'];
  /** Time this indexer was created */
  createdAt: Scalars['Int'];
  /** Default display name is the current default name. Used for filtered queries */
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** Amount of delegated tokens that can be eligible for rewards */
  delegatedCapacity: Scalars['BigInt'];
  /** Ratio between the amount of delegated stake over the total usable stake. */
  delegatedStakeRatio: Scalars['NETWORK__BigDecimal'];
  /** CURRENT tokens delegated to the indexer */
  delegatedTokens: Scalars['BigInt'];
  /** Exchange rate of of tokens received for each share */
  delegationExchangeRate: Scalars['NETWORK__BigDecimal'];
  /** The total amount of indexing rewards given to delegators */
  delegatorIndexingRewards: Scalars['BigInt'];
  /** Amount of blocks a delegator chooses for the waiting period for changing their params */
  delegatorParameterCooldown: Scalars['Int'];
  /** The total amount of query fees given to delegators */
  delegatorQueryFees: Scalars['BigInt'];
  /** Total shares of the delegator pool */
  delegatorShares: Scalars['BigInt'];
  /** Delegators to this Indexer */
  delegators: Array<Network__DelegatedStake>;
  /** Count of how many times this indexer has been forced to close an allocation */
  forcedClosures: Scalars['Int'];
  /** Geohash of the indexer. Shows where their indexer is located in the world */
  geoHash?: Maybe<Scalars['String']>;
  /** Eth address of Indexer */
  id: Scalars['ID'];
  /** The total amount of indexing rewards the indexer kept */
  indexerIndexingRewards: Scalars['BigInt'];
  /** Percentage of indexers' own rewards received in relation to its own stake. 1 (100%) means that the indexer is receiving the exact amount that is generated by his own stake */
  indexerRewardsOwnGenerationRatio: Scalars['NETWORK__BigDecimal'];
  /** The percent of indexing rewards generated by the total stake that the Indexer keeps for itself. In parts per million */
  indexingRewardCut: Scalars['Int'];
  /** The percent of indexing rewards generated by the delegated stake that the Indexer keeps for itself */
  indexingRewardEffectiveCut: Scalars['NETWORK__BigDecimal'];
  /** Block number for the last time the delegator updated their parameters */
  lastDelegationParameterUpdate: Scalars['Int'];
  /** CURRENT tokens locked */
  lockedTokens: Scalars['BigInt'];
  /** The percent of reward dilution delegators experience because of overdelegation. Overdelegated stake can't be used to generate rewards but still gets accounted while distributing the generated rewards. This causes dilution of the rewards for the rest of the pool. */
  overDelegationDilution: Scalars['NETWORK__BigDecimal'];
  /** Ratio between the amount of the indexers own stake over the total usable stake. */
  ownStakeRatio: Scalars['NETWORK__BigDecimal'];
  /** The percent of query rebate rewards the Indexer keeps for itself. In parts per million */
  queryFeeCut: Scalars['Int'];
  /** The percent of query rebate rewards generated by the delegated stake that the Indexer keeps for itself */
  queryFeeEffectiveCut: Scalars['NETWORK__BigDecimal'];
  /** Query fee rebate amount claimed from the protocol through cobbs douglas. Does not include portion given to delegators */
  queryFeeRebates: Scalars['BigInt'];
  /** Total query fees collected. Includes the portion given to delegators */
  queryFeesCollected: Scalars['BigInt'];
  /** Total indexing rewards earned by this indexer from inflation. Including delegation rewards */
  rewardsEarned: Scalars['BigInt'];
  /** CURRENT tokens staked in the protocol. Decreases on withdraw, not on lock */
  stakedTokens: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Staking efficiency of the indexer */
  stakingEfficiency: Scalars['NETWORK__BigDecimal'];
  /** Total token capacity = delegatedCapacity + stakedTokens */
  tokenCapacity: Scalars['BigInt'];
  /** The block when the Indexers tokens unlock */
  tokensLockedUntil: Scalars['Int'];
  /** All allocations for this Indexer (i.e. closed and active) */
  totalAllocationCount: Scalars['BigInt'];
  /** All allocations of stake for this Indexer (i.e. closed and active) */
  totalAllocations: Array<Network__Allocation>;
  /** NOT IMPLEMENTED - Total return this indexer has earned */
  totalReturn: Scalars['NETWORK__BigDecimal'];
  /** NOT IMPLEMENTED - Tokens that have been unstaked and withdrawn */
  unstakedTokens: Scalars['BigInt'];
  /** Service registry URL for the indexer */
  url?: Maybe<Scalars['String']>;
};


/** Metadata for the Indexer along with parameters and staking data */
export type Network__IndexerAllocationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__Allocation_Filter>;
};


/** Metadata for the Indexer along with parameters and staking data */
export type Network__IndexerDelegatorsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__DelegatedStake_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__DelegatedStake_Filter>;
};


/** Metadata for the Indexer along with parameters and staking data */
export type Network__IndexerTotalAllocationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__Allocation_Filter>;
};

export type Network__Indexer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Network__GraphAccount_Filter>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  allocatedTokens?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocationCount?: InputMaybe<Scalars['Int']>;
  allocationCount_gt?: InputMaybe<Scalars['Int']>;
  allocationCount_gte?: InputMaybe<Scalars['Int']>;
  allocationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  allocationCount_lt?: InputMaybe<Scalars['Int']>;
  allocationCount_lte?: InputMaybe<Scalars['Int']>;
  allocationCount_not?: InputMaybe<Scalars['Int']>;
  allocationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  allocations_?: InputMaybe<Network__Allocation_Filter>;
  annualizedReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  annualizedReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  availableStake?: InputMaybe<Scalars['BigInt']>;
  availableStake_gt?: InputMaybe<Scalars['BigInt']>;
  availableStake_gte?: InputMaybe<Scalars['BigInt']>;
  availableStake_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableStake_lt?: InputMaybe<Scalars['BigInt']>;
  availableStake_lte?: InputMaybe<Scalars['BigInt']>;
  availableStake_not?: InputMaybe<Scalars['BigInt']>;
  availableStake_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegatedCapacity?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedCapacity_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_not?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedStakeRatio?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegatedStakeRatio_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegatedStakeRatio_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegatedStakeRatio_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  delegatedStakeRatio_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegatedStakeRatio_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegatedStakeRatio_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegatedStakeRatio_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  delegatedTokens?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationExchangeRate?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegationExchangeRate_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegationExchangeRate_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegationExchangeRate_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  delegationExchangeRate_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegationExchangeRate_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegationExchangeRate_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegationExchangeRate_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  delegatorIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorParameterCooldown?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_gt?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_gte?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorParameterCooldown_lt?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_lte?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_not?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorQueryFees?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorShares?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorShares_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_not?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegators_?: InputMaybe<Network__DelegatedStake_Filter>;
  forcedClosures?: InputMaybe<Scalars['Int']>;
  forcedClosures_gt?: InputMaybe<Scalars['Int']>;
  forcedClosures_gte?: InputMaybe<Scalars['Int']>;
  forcedClosures_in?: InputMaybe<Array<Scalars['Int']>>;
  forcedClosures_lt?: InputMaybe<Scalars['Int']>;
  forcedClosures_lte?: InputMaybe<Scalars['Int']>;
  forcedClosures_not?: InputMaybe<Scalars['Int']>;
  forcedClosures_not_in?: InputMaybe<Array<Scalars['Int']>>;
  geoHash?: InputMaybe<Scalars['String']>;
  geoHash_contains?: InputMaybe<Scalars['String']>;
  geoHash_contains_nocase?: InputMaybe<Scalars['String']>;
  geoHash_ends_with?: InputMaybe<Scalars['String']>;
  geoHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash_gt?: InputMaybe<Scalars['String']>;
  geoHash_gte?: InputMaybe<Scalars['String']>;
  geoHash_in?: InputMaybe<Array<Scalars['String']>>;
  geoHash_lt?: InputMaybe<Scalars['String']>;
  geoHash_lte?: InputMaybe<Scalars['String']>;
  geoHash_not?: InputMaybe<Scalars['String']>;
  geoHash_not_contains?: InputMaybe<Scalars['String']>;
  geoHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  geoHash_not_ends_with?: InputMaybe<Scalars['String']>;
  geoHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  geoHash_not_starts_with?: InputMaybe<Scalars['String']>;
  geoHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash_starts_with?: InputMaybe<Scalars['String']>;
  geoHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexerIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerRewardsOwnGenerationRatio?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  indexerRewardsOwnGenerationRatio_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  indexingRewardCut?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_gt?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_gte?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCut_lt?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_lte?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_not?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardEffectiveCut?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCut_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCut_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCut_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  indexingRewardEffectiveCut_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCut_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCut_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCut_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  lastDelegationParameterUpdate?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_gt?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_gte?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegationParameterUpdate_lt?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_lte?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_not?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  overDelegationDilution?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  overDelegationDilution_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  overDelegationDilution_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  overDelegationDilution_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  overDelegationDilution_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  overDelegationDilution_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  overDelegationDilution_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  overDelegationDilution_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  ownStakeRatio?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  ownStakeRatio_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  ownStakeRatio_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  ownStakeRatio_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  ownStakeRatio_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  ownStakeRatio_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  ownStakeRatio_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  ownStakeRatio_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  queryFeeCut?: InputMaybe<Scalars['Int']>;
  queryFeeCut_gt?: InputMaybe<Scalars['Int']>;
  queryFeeCut_gte?: InputMaybe<Scalars['Int']>;
  queryFeeCut_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeCut_lt?: InputMaybe<Scalars['Int']>;
  queryFeeCut_lte?: InputMaybe<Scalars['Int']>;
  queryFeeCut_not?: InputMaybe<Scalars['Int']>;
  queryFeeCut_not_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeEffectiveCut?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCut_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCut_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCut_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  queryFeeEffectiveCut_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCut_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCut_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCut_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardsEarned?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_gt?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_gte?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardsEarned_lt?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_lte?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_not?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingEfficiency?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  stakingEfficiency_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  stakingEfficiency_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  stakingEfficiency_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  stakingEfficiency_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  stakingEfficiency_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  stakingEfficiency_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  stakingEfficiency_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  tokenCapacity?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_gt?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_gte?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCapacity_lt?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_lte?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_not?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensLockedUntil?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_gt?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_gte?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_in?: InputMaybe<Array<Scalars['Int']>>;
  tokensLockedUntil_lt?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_lte?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_not?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalAllocationCount?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAllocationCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_not?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAllocations_?: InputMaybe<Network__Allocation_Filter>;
  totalReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  unstakedTokens?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_contains_nocase?: InputMaybe<Scalars['String']>;
  url_ends_with?: InputMaybe<Scalars['String']>;
  url_ends_with_nocase?: InputMaybe<Scalars['String']>;
  url_gt?: InputMaybe<Scalars['String']>;
  url_gte?: InputMaybe<Scalars['String']>;
  url_in?: InputMaybe<Array<Scalars['String']>>;
  url_lt?: InputMaybe<Scalars['String']>;
  url_lte?: InputMaybe<Scalars['String']>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_contains_nocase?: InputMaybe<Scalars['String']>;
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  url_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<Scalars['String']>>;
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  url_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  url_starts_with?: InputMaybe<Scalars['String']>;
  url_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Network__Indexer_OrderBy {
  Account = 'account',
  AllocatedTokens = 'allocatedTokens',
  AllocationCount = 'allocationCount',
  Allocations = 'allocations',
  AnnualizedReturn = 'annualizedReturn',
  AvailableStake = 'availableStake',
  CreatedAt = 'createdAt',
  DefaultDisplayName = 'defaultDisplayName',
  DelegatedCapacity = 'delegatedCapacity',
  DelegatedStakeRatio = 'delegatedStakeRatio',
  DelegatedTokens = 'delegatedTokens',
  DelegationExchangeRate = 'delegationExchangeRate',
  DelegatorIndexingRewards = 'delegatorIndexingRewards',
  DelegatorParameterCooldown = 'delegatorParameterCooldown',
  DelegatorQueryFees = 'delegatorQueryFees',
  DelegatorShares = 'delegatorShares',
  Delegators = 'delegators',
  ForcedClosures = 'forcedClosures',
  GeoHash = 'geoHash',
  Id = 'id',
  IndexerIndexingRewards = 'indexerIndexingRewards',
  IndexerRewardsOwnGenerationRatio = 'indexerRewardsOwnGenerationRatio',
  IndexingRewardCut = 'indexingRewardCut',
  IndexingRewardEffectiveCut = 'indexingRewardEffectiveCut',
  LastDelegationParameterUpdate = 'lastDelegationParameterUpdate',
  LockedTokens = 'lockedTokens',
  OverDelegationDilution = 'overDelegationDilution',
  OwnStakeRatio = 'ownStakeRatio',
  QueryFeeCut = 'queryFeeCut',
  QueryFeeEffectiveCut = 'queryFeeEffectiveCut',
  QueryFeeRebates = 'queryFeeRebates',
  QueryFeesCollected = 'queryFeesCollected',
  RewardsEarned = 'rewardsEarned',
  StakedTokens = 'stakedTokens',
  StakingEfficiency = 'stakingEfficiency',
  TokenCapacity = 'tokenCapacity',
  TokensLockedUntil = 'tokensLockedUntil',
  TotalAllocationCount = 'totalAllocationCount',
  TotalAllocations = 'totalAllocations',
  TotalReturn = 'totalReturn',
  UnstakedTokens = 'unstakedTokens',
  Url = 'url'
}

/** Curator Name Signal for a single Subgraph */
export type Network__NameSignal = {
  __typename?: 'NETWORK__NameSignal';
  /** [DEPRECATED] Curator average cost basis for this name signal on this subgraph. New field for further versions will be nameSignalAverageCostBasis */
  averageCostBasis: Scalars['NETWORK__BigDecimal'];
  /** [DEPRECATED] nameSignalAverageCostBasis / nameSignal. New field for further versions will be nameSignalAverageCostBasisPerSignal */
  averageCostBasisPerSignal: Scalars['NETWORK__BigDecimal'];
  /** Eth address of the curator */
  curator: Network__Curator;
  entityVersion: Scalars['Int'];
  /** Eth address + subgraph ID */
  id: Scalars['ID'];
  /** Block for which the curator last entered or exited the curve */
  lastNameSignalChange: Scalars['Int'];
  linkedEntity?: Maybe<Network__NameSignal>;
  /** Shares of the name pool (GNS) that the curator has from signaling their GRT */
  nameSignal: Scalars['BigInt'];
  /** Curator average cost basis for this name signal on this subgraph */
  nameSignalAverageCostBasis: Scalars['NETWORK__BigDecimal'];
  /** nameSignalAverageCostBasis / nameSignal */
  nameSignalAverageCostBasisPerSignal: Scalars['NETWORK__BigDecimal'];
  /** Summation of realized rewards from before the last time the curator entered the curation curve */
  realizedRewards: Scalars['BigInt'];
  /** Actual signal shares that the name pool minted with the GRT provided by the curator */
  signal: Scalars['NETWORK__BigDecimal'];
  /** Curator average cost basis for the version signal on this subgraph name pool */
  signalAverageCostBasis: Scalars['NETWORK__BigDecimal'];
  /** signalAverageCostBasis / signal */
  signalAverageCostBasisPerSignal: Scalars['NETWORK__BigDecimal'];
  /** CUMULATIVE number of tokens the curator has signalled */
  signalledTokens: Scalars['BigInt'];
  /** Subgraph being signalled */
  subgraph: Network__Subgraph;
  /** CUMULATIVE number of tokens the curator has unsignalled */
  unsignalledTokens: Scalars['BigInt'];
  /** Tokens the curator has withdrawn from a deprecated name curve */
  withdrawnTokens: Scalars['BigInt'];
};

/** Auxiliary entity to be able to batch update NameSignal entities */
export type Network__NameSignalSubgraphRelation = {
  __typename?: 'NETWORK__NameSignalSubgraphRelation';
  /** Subgraph ID + index */
  id: Scalars['ID'];
  nameSignal: Network__NameSignal;
  subgraph: Network__Subgraph;
};

export type Network__NameSignalSubgraphRelation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nameSignal?: InputMaybe<Scalars['String']>;
  nameSignal_?: InputMaybe<Network__NameSignal_Filter>;
  nameSignal_contains?: InputMaybe<Scalars['String']>;
  nameSignal_contains_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_ends_with?: InputMaybe<Scalars['String']>;
  nameSignal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_gt?: InputMaybe<Scalars['String']>;
  nameSignal_gte?: InputMaybe<Scalars['String']>;
  nameSignal_in?: InputMaybe<Array<Scalars['String']>>;
  nameSignal_lt?: InputMaybe<Scalars['String']>;
  nameSignal_lte?: InputMaybe<Scalars['String']>;
  nameSignal_not?: InputMaybe<Scalars['String']>;
  nameSignal_not_contains?: InputMaybe<Scalars['String']>;
  nameSignal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_not_ends_with?: InputMaybe<Scalars['String']>;
  nameSignal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['String']>>;
  nameSignal_not_starts_with?: InputMaybe<Scalars['String']>;
  nameSignal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_starts_with?: InputMaybe<Scalars['String']>;
  nameSignal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Network__Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Network__NameSignalSubgraphRelation_OrderBy {
  Id = 'id',
  NameSignal = 'nameSignal',
  Subgraph = 'subgraph'
}

/** All relevant data for a Name Signal Transaction in The Graph Network */
export type Network__NameSignalTransaction = Network__Transaction & {
  __typename?: 'NETWORK__NameSignalTransaction';
  blockNumber: Scalars['Int'];
  id: Scalars['ID'];
  /** Amount of name signal updated */
  nameSignal: Scalars['BigInt'];
  signer: Network__GraphAccount;
  /** Subgraph where name signal was updated */
  subgraph: Network__Subgraph;
  timestamp: Scalars['Int'];
  /** Tokens used */
  tokens: Scalars['BigInt'];
  type: Network__TransactionType;
  /** Amount of version signal updated */
  versionSignal: Scalars['BigInt'];
};

export type Network__NameSignalTransaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nameSignal?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignal_lt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_lte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_not?: InputMaybe<Scalars['BigInt']>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<Network__GraphAccount_Filter>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Network__Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  tokens?: InputMaybe<Scalars['BigInt']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens_lt?: InputMaybe<Scalars['BigInt']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']>;
  tokens_not?: InputMaybe<Scalars['BigInt']>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<Network__TransactionType>;
  type_in?: InputMaybe<Array<Network__TransactionType>>;
  type_not?: InputMaybe<Network__TransactionType>;
  type_not_in?: InputMaybe<Array<Network__TransactionType>>;
  versionSignal?: InputMaybe<Scalars['BigInt']>;
  versionSignal_gt?: InputMaybe<Scalars['BigInt']>;
  versionSignal_gte?: InputMaybe<Scalars['BigInt']>;
  versionSignal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versionSignal_lt?: InputMaybe<Scalars['BigInt']>;
  versionSignal_lte?: InputMaybe<Scalars['BigInt']>;
  versionSignal_not?: InputMaybe<Scalars['BigInt']>;
  versionSignal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Network__NameSignalTransaction_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  NameSignal = 'nameSignal',
  Signer = 'signer',
  Subgraph = 'subgraph',
  Timestamp = 'timestamp',
  Tokens = 'tokens',
  Type = 'type',
  VersionSignal = 'versionSignal'
}

export type Network__NameSignal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  averageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  averageCostBasisPerSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  averageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  averageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  curator?: InputMaybe<Scalars['String']>;
  curator_?: InputMaybe<Network__Curator_Filter>;
  curator_contains?: InputMaybe<Scalars['String']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_ends_with?: InputMaybe<Scalars['String']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_gt?: InputMaybe<Scalars['String']>;
  curator_gte?: InputMaybe<Scalars['String']>;
  curator_in?: InputMaybe<Array<Scalars['String']>>;
  curator_lt?: InputMaybe<Scalars['String']>;
  curator_lte?: InputMaybe<Scalars['String']>;
  curator_not?: InputMaybe<Scalars['String']>;
  curator_not_contains?: InputMaybe<Scalars['String']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_in?: InputMaybe<Array<Scalars['String']>>;
  curator_not_starts_with?: InputMaybe<Scalars['String']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_starts_with?: InputMaybe<Scalars['String']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entityVersion?: InputMaybe<Scalars['Int']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  entityVersion_lt?: InputMaybe<Scalars['Int']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']>;
  entityVersion_not?: InputMaybe<Scalars['Int']>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastNameSignalChange?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_gt?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_gte?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_in?: InputMaybe<Array<Scalars['Int']>>;
  lastNameSignalChange_lt?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_lte?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_not?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_not_in?: InputMaybe<Array<Scalars['Int']>>;
  linkedEntity?: InputMaybe<Scalars['String']>;
  linkedEntity_?: InputMaybe<Network__NameSignal_Filter>;
  linkedEntity_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_lt?: InputMaybe<Scalars['String']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']>;
  linkedEntity_not?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal?: InputMaybe<Scalars['BigInt']>;
  nameSignalAverageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasisPerSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  nameSignalAverageCostBasisPerSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  nameSignalAverageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  nameSignalAverageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  nameSignal_gt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignal_lt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_lte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_not?: InputMaybe<Scalars['BigInt']>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasisPerSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasisPerSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasisPerSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  signalAverageCostBasisPerSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasisPerSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasisPerSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  signalAverageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  signalAverageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  signal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  signal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Network__Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Network__NameSignal_OrderBy {
  AverageCostBasis = 'averageCostBasis',
  AverageCostBasisPerSignal = 'averageCostBasisPerSignal',
  Curator = 'curator',
  EntityVersion = 'entityVersion',
  Id = 'id',
  LastNameSignalChange = 'lastNameSignalChange',
  LinkedEntity = 'linkedEntity',
  NameSignal = 'nameSignal',
  NameSignalAverageCostBasis = 'nameSignalAverageCostBasis',
  NameSignalAverageCostBasisPerSignal = 'nameSignalAverageCostBasisPerSignal',
  RealizedRewards = 'realizedRewards',
  Signal = 'signal',
  SignalAverageCostBasis = 'signalAverageCostBasis',
  SignalAverageCostBasisPerSignal = 'signalAverageCostBasisPerSignal',
  SignalledTokens = 'signalledTokens',
  Subgraph = 'subgraph',
  UnsignalledTokens = 'unsignalledTokens',
  WithdrawnTokens = 'withdrawnTokens'
}

export enum Network__NameSystem {
  Ens = 'ENS'
}

export type Network__Network = {
  __typename?: 'NETWORK__Network';
  deployments: Array<Network__SubgraphDeployment>;
  id: Scalars['ID'];
};


export type Network__NetworkDeploymentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__SubgraphDeployment_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__SubgraphDeployment_Filter>;
};

export type Network__Network_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  deployments_?: InputMaybe<Network__SubgraphDeployment_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum Network__Network_OrderBy {
  Deployments = 'deployments',
  Id = 'id'
}

/** Defines the order direction, either ascending or descending */
export enum Network__OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

/**
 * Global pool of query fees for closed state channels. Each Epoch has a single pool,
 * hence why they share the same IDs.
 */
export type Network__Pool = {
  __typename?: 'NETWORK__Pool';
  /** Total effective allocation tokens from all allocations closed in this epoch */
  allocation: Scalars['BigInt'];
  /** Total query fees claimed in this epoch. Can be smaller than totalFees because of cobbs douglas function  */
  claimedFees: Scalars['BigInt'];
  /** Allocations that were closed during this epoch */
  closedAllocations: Array<Network__Allocation>;
  /** Total rewards from query fees deposited to all curator bonding curves during the epoch */
  curatorRewards: Scalars['BigInt'];
  /** Epoch number of the pool */
  id: Scalars['ID'];
  /** Total query fees collected in this epoch */
  totalQueryFees: Scalars['BigInt'];
};


/**
 * Global pool of query fees for closed state channels. Each Epoch has a single pool,
 * hence why they share the same IDs.
 */
export type Network__PoolClosedAllocationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__Allocation_Filter>;
};

export type Network__Pool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  allocation?: InputMaybe<Scalars['BigInt']>;
  allocation_gt?: InputMaybe<Scalars['BigInt']>;
  allocation_gte?: InputMaybe<Scalars['BigInt']>;
  allocation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocation_lt?: InputMaybe<Scalars['BigInt']>;
  allocation_lte?: InputMaybe<Scalars['BigInt']>;
  allocation_not?: InputMaybe<Scalars['BigInt']>;
  allocation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimedFees?: InputMaybe<Scalars['BigInt']>;
  claimedFees_gt?: InputMaybe<Scalars['BigInt']>;
  claimedFees_gte?: InputMaybe<Scalars['BigInt']>;
  claimedFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimedFees_lt?: InputMaybe<Scalars['BigInt']>;
  claimedFees_lte?: InputMaybe<Scalars['BigInt']>;
  claimedFees_not?: InputMaybe<Scalars['BigInt']>;
  claimedFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closedAllocations_?: InputMaybe<Network__Allocation_Filter>;
  curatorRewards?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Network__Pool_OrderBy {
  Allocation = 'allocation',
  ClaimedFees = 'claimedFees',
  ClosedAllocations = 'closedAllocations',
  CuratorRewards = 'curatorRewards',
  Id = 'id',
  TotalQueryFees = 'totalQueryFees'
}

/** TokenLockWallet Revocability Enum */
export enum Network__Revocability {
  Disabled = 'Disabled',
  Enabled = 'Enabled',
  NotSet = 'NotSet'
}

/** Curator Signal for a single SubgraphDeployment */
export type Network__Signal = {
  __typename?: 'NETWORK__Signal';
  /** Curator average cost basis for this signal on this subgraph */
  averageCostBasis: Scalars['NETWORK__BigDecimal'];
  /** averageCostBasis / signal */
  averageCostBasisPerSignal: Scalars['NETWORK__BigDecimal'];
  /** Timetamp when this entity was created */
  createdAt: Scalars['Int'];
  /** Block number where this entity was created */
  createdAtBlock: Scalars['Int'];
  /** Eth address of the curator */
  curator: Network__Curator;
  /** Eth address + subgraph deployment ID */
  id: Scalars['ID'];
  /** Block for which the curator last entered or exited the curve */
  lastSignalChange: Scalars['Int'];
  /** Timetamp when this entity was last updated */
  lastUpdatedAt: Scalars['Int'];
  /** Block number where this entity was last updated */
  lastUpdatedAtBlock: Scalars['Int'];
  /** Summation of realized rewards from before the last time the curator entered the curation curve */
  realizedRewards: Scalars['BigInt'];
  /** Signal that the curator has from signaling their GRT */
  signal: Scalars['BigInt'];
  /** CUMULATIVE number of tokens the curator has signalled */
  signalledTokens: Scalars['BigInt'];
  /** Subgraph being signalled */
  subgraphDeployment: Network__SubgraphDeployment;
  /** CUMULATIVE number of tokens the curator has unsignalled */
  unsignalledTokens: Scalars['BigInt'];
};

/** All relevant data for a Signal Transaction in The Graph Network */
export type Network__SignalTransaction = Network__Transaction & {
  __typename?: 'NETWORK__SignalTransaction';
  blockNumber: Scalars['Int'];
  id: Scalars['ID'];
  /** Amount of signal updated */
  signal: Scalars['BigInt'];
  signer: Network__GraphAccount;
  /** Subgraph where signal was updated */
  subgraphDeployment: Network__SubgraphDeployment;
  timestamp: Scalars['Int'];
  /** Tokens used */
  tokens: Scalars['BigInt'];
  type: Network__TransactionType;
  /** Withdrawal fees. On minting only */
  withdrawalFees: Scalars['BigInt'];
};

export type Network__SignalTransaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  signal?: InputMaybe<Scalars['BigInt']>;
  signal_gt?: InputMaybe<Scalars['BigInt']>;
  signal_gte?: InputMaybe<Scalars['BigInt']>;
  signal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal_lt?: InputMaybe<Scalars['BigInt']>;
  signal_lte?: InputMaybe<Scalars['BigInt']>;
  signal_not?: InputMaybe<Scalars['BigInt']>;
  signal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<Network__GraphAccount_Filter>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<Network__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  tokens?: InputMaybe<Scalars['BigInt']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens_lt?: InputMaybe<Scalars['BigInt']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']>;
  tokens_not?: InputMaybe<Scalars['BigInt']>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<Network__TransactionType>;
  type_in?: InputMaybe<Array<Network__TransactionType>>;
  type_not?: InputMaybe<Network__TransactionType>;
  type_not_in?: InputMaybe<Array<Network__TransactionType>>;
  withdrawalFees?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawalFees_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_not?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Network__SignalTransaction_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  Signal = 'signal',
  Signer = 'signer',
  SubgraphDeployment = 'subgraphDeployment',
  Timestamp = 'timestamp',
  Tokens = 'tokens',
  Type = 'type',
  WithdrawalFees = 'withdrawalFees'
}

export type Network__Signal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  averageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  averageCostBasisPerSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  averageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  averageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAtBlock?: InputMaybe<Scalars['Int']>;
  createdAtBlock_gt?: InputMaybe<Scalars['Int']>;
  createdAtBlock_gte?: InputMaybe<Scalars['Int']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtBlock_lt?: InputMaybe<Scalars['Int']>;
  createdAtBlock_lte?: InputMaybe<Scalars['Int']>;
  createdAtBlock_not?: InputMaybe<Scalars['Int']>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  curator?: InputMaybe<Scalars['String']>;
  curator_?: InputMaybe<Network__Curator_Filter>;
  curator_contains?: InputMaybe<Scalars['String']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_ends_with?: InputMaybe<Scalars['String']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_gt?: InputMaybe<Scalars['String']>;
  curator_gte?: InputMaybe<Scalars['String']>;
  curator_in?: InputMaybe<Array<Scalars['String']>>;
  curator_lt?: InputMaybe<Scalars['String']>;
  curator_lte?: InputMaybe<Scalars['String']>;
  curator_not?: InputMaybe<Scalars['String']>;
  curator_not_contains?: InputMaybe<Scalars['String']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_in?: InputMaybe<Array<Scalars['String']>>;
  curator_not_starts_with?: InputMaybe<Scalars['String']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_starts_with?: InputMaybe<Scalars['String']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastSignalChange?: InputMaybe<Scalars['Int']>;
  lastSignalChange_gt?: InputMaybe<Scalars['Int']>;
  lastSignalChange_gte?: InputMaybe<Scalars['Int']>;
  lastSignalChange_in?: InputMaybe<Array<Scalars['Int']>>;
  lastSignalChange_lt?: InputMaybe<Scalars['Int']>;
  lastSignalChange_lte?: InputMaybe<Scalars['Int']>;
  lastSignalChange_not?: InputMaybe<Scalars['Int']>;
  lastSignalChange_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdatedAt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_gt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_gte?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdatedAtBlock_lt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_lte?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_not?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_not?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  realizedRewards?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal?: InputMaybe<Scalars['BigInt']>;
  signal_gt?: InputMaybe<Scalars['BigInt']>;
  signal_gte?: InputMaybe<Scalars['BigInt']>;
  signal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal_lt?: InputMaybe<Scalars['BigInt']>;
  signal_lte?: InputMaybe<Scalars['BigInt']>;
  signal_not?: InputMaybe<Scalars['BigInt']>;
  signal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<Network__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Network__Signal_OrderBy {
  AverageCostBasis = 'averageCostBasis',
  AverageCostBasisPerSignal = 'averageCostBasisPerSignal',
  CreatedAt = 'createdAt',
  CreatedAtBlock = 'createdAtBlock',
  Curator = 'curator',
  Id = 'id',
  LastSignalChange = 'lastSignalChange',
  LastUpdatedAt = 'lastUpdatedAt',
  LastUpdatedAtBlock = 'lastUpdatedAtBlock',
  RealizedRewards = 'realizedRewards',
  Signal = 'signal',
  SignalledTokens = 'signalledTokens',
  SubgraphDeployment = 'subgraphDeployment',
  UnsignalledTokens = 'unsignalledTokens'
}

/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 */
export type Network__Subgraph = {
  __typename?: 'NETWORK__Subgraph';
  /** Whether the subgraph is active or deprecated */
  active: Scalars['Boolean'];
  /** Categories that the subgraph belongs to. Modelled with a relation to allow for many-to-many relationship querying */
  categories: Array<Network__SubgraphCategoryRelation>;
  /** Location of the code for this project */
  codeRepository?: Maybe<Scalars['String']>;
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** Address used to create the ID. Only available for Subgraphs created pre-migration */
  creatorAddress?: Maybe<Scalars['NETWORK__Bytes']>;
  /** CURRENT amount of tokens signalled on this subgraph latest version. Mirrors the total amount signalled towards the current deployment. */
  currentSignalledTokens: Scalars['BigInt'];
  /** Current version. Null if the subgraph is deprecated */
  currentVersion?: Maybe<Network__SubgraphVersion>;
  currentVersionRelationEntity?: Maybe<Network__CurrentSubgraphDeploymentRelation>;
  /** Short description of the subgraph */
  description?: Maybe<Scalars['String']>;
  /** Display name */
  displayName?: Maybe<Scalars['String']>;
  /** Version of the entity. Subgraph entities are changing the way their ID is generated when the new GNS v2 rolls out so we need to differnetiate them */
  entityVersion: Scalars['Int'];
  /** Subgraph ID - which is derived from the Organization/Individual graph accountID */
  id: Scalars['ID'];
  /** Image in string format */
  image?: Maybe<Scalars['String']>;
  /** Auxiliary field to denote whether the subgraph is handling the initialization order on V2 events. Doesn't matter for V1 events. */
  initializing: Scalars['Boolean'];
  /** Subgraph metadata ipfs hash */
  ipfsMetadataHash?: Maybe<Scalars['String']>;
  /** Subgraph entities might have 'duplicate' entities so that old IDs can be persisted and still queried properly. If that happens we have to link both duplicate entities to be able to update them properly. */
  linkedEntity?: Maybe<Network__Subgraph>;
  /** Subgraph metadata */
  metadataHash: Scalars['NETWORK__Bytes'];
  /** Whether the subgraph has been claimed/migrated. Can only be false for subgraphs created with V1 contracts that have not been claimed/migrated */
  migrated: Scalars['Boolean'];
  /** The CURRENT name signal amount for this subgraph */
  nameSignalAmount: Scalars['BigInt'];
  /** Total amount of NameSignal entities */
  nameSignalCount: Scalars['Int'];
  /** Curators of this subgraph deployment */
  nameSignals: Array<Network__NameSignal>;
  /** The actual ID of the subgraph on the contracts subgraph NFT implementation. BigInt represented as a String. It's only actually valid once the subgraph is migrated (migrated == true) */
  nftID?: Maybe<Scalars['String']>;
  /** NFT Image representation */
  nftImage?: Maybe<Scalars['String']>;
  /** ID of the subgraph that was used on the old version of this The Graph Network Subgraph. Null for Subgraphs created with the new GNS implementation or for version 1 entities (since they use the old id) */
  oldID?: Maybe<Scalars['String']>;
  /** Graph account that owns this subgraph */
  owner: Network__GraphAccount;
  /** [DEPRECATED] Past versions. Has the same data as 'versions' but keeps the old naming for backwards compatibility */
  pastVersions: Array<Network__SubgraphVersion>;
  /** Reserve ratio of the name curation curve. In parts per million */
  reserveRatio: Scalars['Int'];
  /** Current amount of version signal managed by the name pool */
  signalAmount: Scalars['BigInt'];
  /** CUMULATIVE signaled tokens on this subgraph all time */
  signalledTokens: Scalars['BigInt'];
  /** Subgraph number used to create the ID. Only available for Subgraphs created pre-migration */
  subgraphNumber?: Maybe<Scalars['BigInt']>;
  /** CUMULATIVE unsignalled tokens on this subgraph all time */
  unsignalledTokens: Scalars['BigInt'];
  /** Updated timestamp */
  updatedAt: Scalars['Int'];
  /** Version counter */
  versionCount: Scalars['BigInt'];
  /** List of all the subgraph versions included the current one */
  versions: Array<Network__SubgraphVersion>;
  /** Projects website */
  website?: Maybe<Scalars['String']>;
  /** Tokens that can be withdrawn once the Subgraph is deprecated */
  withdrawableTokens: Scalars['BigInt'];
  /** Tokens the curators have withdrawn from the deprecated Subgraph */
  withdrawnTokens: Scalars['BigInt'];
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 */
export type Network__SubgraphCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__SubgraphCategoryRelation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__SubgraphCategoryRelation_Filter>;
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 */
export type Network__SubgraphNameSignalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__NameSignal_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__NameSignal_Filter>;
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 */
export type Network__SubgraphPastVersionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__SubgraphVersion_Filter>;
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 */
export type Network__SubgraphVersionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__SubgraphVersion_Filter>;
};

export type Network__SubgraphCategory = {
  __typename?: 'NETWORK__SubgraphCategory';
  id: Scalars['ID'];
  subgraphs: Array<Network__SubgraphCategoryRelation>;
};


export type Network__SubgraphCategorySubgraphsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__SubgraphCategoryRelation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__SubgraphCategoryRelation_Filter>;
};

export type Network__SubgraphCategoryRelation = {
  __typename?: 'NETWORK__SubgraphCategoryRelation';
  category: Network__SubgraphCategory;
  id: Scalars['ID'];
  subgraph: Network__Subgraph;
};

export type Network__SubgraphCategoryRelation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  category?: InputMaybe<Scalars['String']>;
  category_?: InputMaybe<Network__SubgraphCategory_Filter>;
  category_contains?: InputMaybe<Scalars['String']>;
  category_contains_nocase?: InputMaybe<Scalars['String']>;
  category_ends_with?: InputMaybe<Scalars['String']>;
  category_ends_with_nocase?: InputMaybe<Scalars['String']>;
  category_gt?: InputMaybe<Scalars['String']>;
  category_gte?: InputMaybe<Scalars['String']>;
  category_in?: InputMaybe<Array<Scalars['String']>>;
  category_lt?: InputMaybe<Scalars['String']>;
  category_lte?: InputMaybe<Scalars['String']>;
  category_not?: InputMaybe<Scalars['String']>;
  category_not_contains?: InputMaybe<Scalars['String']>;
  category_not_contains_nocase?: InputMaybe<Scalars['String']>;
  category_not_ends_with?: InputMaybe<Scalars['String']>;
  category_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  category_not_in?: InputMaybe<Array<Scalars['String']>>;
  category_not_starts_with?: InputMaybe<Scalars['String']>;
  category_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  category_starts_with?: InputMaybe<Scalars['String']>;
  category_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Network__Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Network__SubgraphCategoryRelation_OrderBy {
  Category = 'category',
  Id = 'id',
  Subgraph = 'subgraph'
}

export type Network__SubgraphCategory_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  subgraphs_?: InputMaybe<Network__SubgraphCategoryRelation_Filter>;
};

export enum Network__SubgraphCategory_OrderBy {
  Id = 'id',
  Subgraphs = 'subgraphs'
}

/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 */
export type Network__SubgraphDeployment = {
  __typename?: 'NETWORK__SubgraphDeployment';
  /** Amount of active Subgraph entities that are currently using this deployment. Deprecated subgraph entities are not counted */
  activeSubgraphCount: Scalars['Int'];
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** Total curator rewards from fees */
  curatorFeeRewards: Scalars['BigInt'];
  /** Curators of this subgraph deployment */
  curatorSignals: Array<Network__Signal>;
  /** The block at which this deployment was denied for rewards. Null if not denied */
  deniedAt: Scalars['Int'];
  /** Amount of Subgraph entities that were currently using this deployment when they got deprecated */
  deprecatedSubgraphCount: Scalars['Int'];
  /** Subgraph Deployment ID. The IPFS hash with Qm removed to fit into 32 bytes */
  id: Scalars['ID'];
  /** Allocations created by indexers for this Subgraph */
  indexerAllocations: Array<Network__Allocation>;
  /** Total rewards accrued all time by delegators */
  indexingDelegatorRewardAmount: Scalars['BigInt'];
  /** Total rewards accrued all time by indexers */
  indexingIndexerRewardAmount: Scalars['BigInt'];
  /** Total rewards accrued all time by this Subgraph Deployment. Includes delegator and indexer rewards */
  indexingRewardAmount: Scalars['BigInt'];
  /** IPFS hash of the subgraph manifest */
  ipfsHash: Scalars['String'];
  /** Manifest file for this subgraph deployment */
  manifest?: Maybe<Scalars['String']>;
  /** Network where the contracts that the subgraph indexes are located */
  network?: Maybe<Network__Network>;
  /** The original Subgraph that was deployed through GNS. Can be null if never created through GNS. Used for filtering in the Explorer */
  originalName?: Maybe<Scalars['String']>;
  /** signalledTokens / signalAmount */
  pricePerShare: Scalars['NETWORK__BigDecimal'];
  /** Total query fee rebates earned from the protocol, through the cobbs douglas formula. Does not include delegation fees */
  queryFeeRebates: Scalars['BigInt'];
  /** Total query fees earned by this Subgraph Deployment, without curator query fees */
  queryFeesAmount: Scalars['BigInt'];
  /** Bonding curve reserve ratio. In parts per million */
  reserveRatio: Scalars['Int'];
  /** Schema file for this subgraph deployment */
  schema?: Maybe<Scalars['String']>;
  /** IPFS hash of the schema file */
  schemaIpfsHash?: Maybe<Scalars['String']>;
  /** CURRENT curation signal for this subgraph deployment */
  signalAmount: Scalars['BigInt'];
  /** CURRENT signalled tokens in the bonding curve */
  signalledTokens: Scalars['BigInt'];
  /** CURRENT total stake of all indexers on this Subgraph Deployment */
  stakedTokens: Scalars['BigInt'];
  /** Total amount of Subgraph entities that used this deployment at some point. subgraphCount >= activeSubgraphCount + deprecatedSubgraphCount */
  subgraphCount: Scalars['Int'];
  /** NOT IMPLEMENTED - CURRENT signalled tokens in the bonding curve */
  unsignalledTokens: Scalars['BigInt'];
  /** The versions this subgraph deployment relates to */
  versions: Array<Network__SubgraphVersion>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 */
export type Network__SubgraphDeploymentCuratorSignalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Signal_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__Signal_Filter>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 */
export type Network__SubgraphDeploymentIndexerAllocationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__Allocation_Filter>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 */
export type Network__SubgraphDeploymentVersionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__SubgraphVersion_Filter>;
};

export type Network__SubgraphDeployment_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  activeSubgraphCount?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_gt?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_gte?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSubgraphCount_lt?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_lte?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_not?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  curatorFeeRewards?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorFeeRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorSignals_?: InputMaybe<Network__Signal_Filter>;
  deniedAt?: InputMaybe<Scalars['Int']>;
  deniedAt_gt?: InputMaybe<Scalars['Int']>;
  deniedAt_gte?: InputMaybe<Scalars['Int']>;
  deniedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  deniedAt_lt?: InputMaybe<Scalars['Int']>;
  deniedAt_lte?: InputMaybe<Scalars['Int']>;
  deniedAt_not?: InputMaybe<Scalars['Int']>;
  deniedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deprecatedSubgraphCount?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_gt?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_gte?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  deprecatedSubgraphCount_lt?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_lte?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_not?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexerAllocations_?: InputMaybe<Network__Allocation_Filter>;
  indexingDelegatorRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ipfsHash?: InputMaybe<Scalars['String']>;
  ipfsHash_contains?: InputMaybe<Scalars['String']>;
  ipfsHash_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_ends_with?: InputMaybe<Scalars['String']>;
  ipfsHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_gt?: InputMaybe<Scalars['String']>;
  ipfsHash_gte?: InputMaybe<Scalars['String']>;
  ipfsHash_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsHash_lt?: InputMaybe<Scalars['String']>;
  ipfsHash_lte?: InputMaybe<Scalars['String']>;
  ipfsHash_not?: InputMaybe<Scalars['String']>;
  ipfsHash_not_contains?: InputMaybe<Scalars['String']>;
  ipfsHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsHash_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_starts_with?: InputMaybe<Scalars['String']>;
  ipfsHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manifest?: InputMaybe<Scalars['String']>;
  manifest_contains?: InputMaybe<Scalars['String']>;
  manifest_contains_nocase?: InputMaybe<Scalars['String']>;
  manifest_ends_with?: InputMaybe<Scalars['String']>;
  manifest_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manifest_gt?: InputMaybe<Scalars['String']>;
  manifest_gte?: InputMaybe<Scalars['String']>;
  manifest_in?: InputMaybe<Array<Scalars['String']>>;
  manifest_lt?: InputMaybe<Scalars['String']>;
  manifest_lte?: InputMaybe<Scalars['String']>;
  manifest_not?: InputMaybe<Scalars['String']>;
  manifest_not_contains?: InputMaybe<Scalars['String']>;
  manifest_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manifest_not_ends_with?: InputMaybe<Scalars['String']>;
  manifest_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manifest_not_in?: InputMaybe<Array<Scalars['String']>>;
  manifest_not_starts_with?: InputMaybe<Scalars['String']>;
  manifest_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manifest_starts_with?: InputMaybe<Scalars['String']>;
  manifest_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
  network_?: InputMaybe<Network__Network_Filter>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  originalName?: InputMaybe<Scalars['String']>;
  originalName_contains?: InputMaybe<Scalars['String']>;
  originalName_contains_nocase?: InputMaybe<Scalars['String']>;
  originalName_ends_with?: InputMaybe<Scalars['String']>;
  originalName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  originalName_gt?: InputMaybe<Scalars['String']>;
  originalName_gte?: InputMaybe<Scalars['String']>;
  originalName_in?: InputMaybe<Array<Scalars['String']>>;
  originalName_lt?: InputMaybe<Scalars['String']>;
  originalName_lte?: InputMaybe<Scalars['String']>;
  originalName_not?: InputMaybe<Scalars['String']>;
  originalName_not_contains?: InputMaybe<Scalars['String']>;
  originalName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  originalName_not_ends_with?: InputMaybe<Scalars['String']>;
  originalName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  originalName_not_in?: InputMaybe<Array<Scalars['String']>>;
  originalName_not_starts_with?: InputMaybe<Scalars['String']>;
  originalName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  originalName_starts_with?: InputMaybe<Scalars['String']>;
  originalName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pricePerShare?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  pricePerShare_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  pricePerShare_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  pricePerShare_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  pricePerShare_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  pricePerShare_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  pricePerShare_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  pricePerShare_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesAmount?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesAmount_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveRatio?: InputMaybe<Scalars['Int']>;
  reserveRatio_gt?: InputMaybe<Scalars['Int']>;
  reserveRatio_gte?: InputMaybe<Scalars['Int']>;
  reserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  reserveRatio_lt?: InputMaybe<Scalars['Int']>;
  reserveRatio_lte?: InputMaybe<Scalars['Int']>;
  reserveRatio_not?: InputMaybe<Scalars['Int']>;
  reserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  schema?: InputMaybe<Scalars['String']>;
  schemaIpfsHash?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_contains?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_ends_with?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_gt?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_gte?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_in?: InputMaybe<Array<Scalars['String']>>;
  schemaIpfsHash_lt?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_lte?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_contains?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_ends_with?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  schemaIpfsHash_not_starts_with?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_starts_with?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schema_contains?: InputMaybe<Scalars['String']>;
  schema_contains_nocase?: InputMaybe<Scalars['String']>;
  schema_ends_with?: InputMaybe<Scalars['String']>;
  schema_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schema_gt?: InputMaybe<Scalars['String']>;
  schema_gte?: InputMaybe<Scalars['String']>;
  schema_in?: InputMaybe<Array<Scalars['String']>>;
  schema_lt?: InputMaybe<Scalars['String']>;
  schema_lte?: InputMaybe<Scalars['String']>;
  schema_not?: InputMaybe<Scalars['String']>;
  schema_not_contains?: InputMaybe<Scalars['String']>;
  schema_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schema_not_ends_with?: InputMaybe<Scalars['String']>;
  schema_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schema_not_in?: InputMaybe<Array<Scalars['String']>>;
  schema_not_starts_with?: InputMaybe<Scalars['String']>;
  schema_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schema_starts_with?: InputMaybe<Scalars['String']>;
  schema_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signalAmount?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphCount?: InputMaybe<Scalars['Int']>;
  subgraphCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphCount_not?: InputMaybe<Scalars['Int']>;
  subgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versions_?: InputMaybe<Network__SubgraphVersion_Filter>;
};

export enum Network__SubgraphDeployment_OrderBy {
  ActiveSubgraphCount = 'activeSubgraphCount',
  CreatedAt = 'createdAt',
  CuratorFeeRewards = 'curatorFeeRewards',
  CuratorSignals = 'curatorSignals',
  DeniedAt = 'deniedAt',
  DeprecatedSubgraphCount = 'deprecatedSubgraphCount',
  Id = 'id',
  IndexerAllocations = 'indexerAllocations',
  IndexingDelegatorRewardAmount = 'indexingDelegatorRewardAmount',
  IndexingIndexerRewardAmount = 'indexingIndexerRewardAmount',
  IndexingRewardAmount = 'indexingRewardAmount',
  IpfsHash = 'ipfsHash',
  Manifest = 'manifest',
  Network = 'network',
  OriginalName = 'originalName',
  PricePerShare = 'pricePerShare',
  QueryFeeRebates = 'queryFeeRebates',
  QueryFeesAmount = 'queryFeesAmount',
  ReserveRatio = 'reserveRatio',
  Schema = 'schema',
  SchemaIpfsHash = 'schemaIpfsHash',
  SignalAmount = 'signalAmount',
  SignalledTokens = 'signalledTokens',
  StakedTokens = 'stakedTokens',
  SubgraphCount = 'subgraphCount',
  UnsignalledTokens = 'unsignalledTokens',
  Versions = 'versions'
}

/**
 * The SubgraphVersion entity represents a version of the Subgraph. A new SubgraphVersion is created
 * whenever there is an update to the Subgraph triggered by the owner. The new SubgraphVersion can
 * then point to a new SubgraphDeployment, thus allowing the Subgraph to resolve to a different
 * deployment, while keeping the same endpoint. The metadata and label are stored on IPFS. The label
 * is for the developer to provide a semantic version. This is different from the version, which is
 * just a counter than increases each time a new SubgraphVersion is created for a Subgraph.
 */
export type Network__SubgraphVersion = {
  __typename?: 'NETWORK__SubgraphVersion';
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** Short description of the version */
  description?: Maybe<Scalars['String']>;
  entityVersion: Scalars['Int'];
  /** Concatenation of subgraph, subgraph deployment, and version ID */
  id: Scalars['ID'];
  /** Semantic versioning label */
  label?: Maybe<Scalars['String']>;
  linkedEntity?: Maybe<Network__SubgraphVersion>;
  /** Subgraph version metadata content address */
  metadataHash?: Maybe<Scalars['NETWORK__Bytes']>;
  /** Subgraph of this version */
  subgraph: Network__Subgraph;
  /** Subgraph deployment of this version */
  subgraphDeployment: Network__SubgraphDeployment;
  /** Version number */
  version: Scalars['Int'];
};

export type Network__SubgraphVersion_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entityVersion?: InputMaybe<Scalars['Int']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  entityVersion_lt?: InputMaybe<Scalars['Int']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']>;
  entityVersion_not?: InputMaybe<Scalars['Int']>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_contains_nocase?: InputMaybe<Scalars['String']>;
  label_ends_with?: InputMaybe<Scalars['String']>;
  label_ends_with_nocase?: InputMaybe<Scalars['String']>;
  label_gt?: InputMaybe<Scalars['String']>;
  label_gte?: InputMaybe<Scalars['String']>;
  label_in?: InputMaybe<Array<Scalars['String']>>;
  label_lt?: InputMaybe<Scalars['String']>;
  label_lte?: InputMaybe<Scalars['String']>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_contains_nocase?: InputMaybe<Scalars['String']>;
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  label_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<Scalars['String']>>;
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  label_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  label_starts_with?: InputMaybe<Scalars['String']>;
  label_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity?: InputMaybe<Scalars['String']>;
  linkedEntity_?: InputMaybe<Network__SubgraphVersion_Filter>;
  linkedEntity_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_lt?: InputMaybe<Scalars['String']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']>;
  linkedEntity_not?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  metadataHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<Network__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<Network__Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Network__SubgraphVersion_OrderBy {
  CreatedAt = 'createdAt',
  Description = 'description',
  EntityVersion = 'entityVersion',
  Id = 'id',
  Label = 'label',
  LinkedEntity = 'linkedEntity',
  MetadataHash = 'metadataHash',
  Subgraph = 'subgraph',
  SubgraphDeployment = 'subgraphDeployment',
  Version = 'version'
}

export type Network__Subgraph_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  categories_?: InputMaybe<Network__SubgraphCategoryRelation_Filter>;
  codeRepository?: InputMaybe<Scalars['String']>;
  codeRepository_contains?: InputMaybe<Scalars['String']>;
  codeRepository_contains_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_ends_with?: InputMaybe<Scalars['String']>;
  codeRepository_ends_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_gt?: InputMaybe<Scalars['String']>;
  codeRepository_gte?: InputMaybe<Scalars['String']>;
  codeRepository_in?: InputMaybe<Array<Scalars['String']>>;
  codeRepository_lt?: InputMaybe<Scalars['String']>;
  codeRepository_lte?: InputMaybe<Scalars['String']>;
  codeRepository_not?: InputMaybe<Scalars['String']>;
  codeRepository_not_contains?: InputMaybe<Scalars['String']>;
  codeRepository_not_contains_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_ends_with?: InputMaybe<Scalars['String']>;
  codeRepository_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_in?: InputMaybe<Array<Scalars['String']>>;
  codeRepository_not_starts_with?: InputMaybe<Scalars['String']>;
  codeRepository_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_starts_with?: InputMaybe<Scalars['String']>;
  codeRepository_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  creatorAddress?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creatorAddress_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creatorAddress_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creatorAddress_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creatorAddress_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  creatorAddress_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creatorAddress_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creatorAddress_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creatorAddress_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creatorAddress_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  currentSignalledTokens?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentSignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentVersion?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_?: InputMaybe<Network__CurrentSubgraphDeploymentRelation_Filter>;
  currentVersionRelationEntity_contains?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_ends_with?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_gt?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_gte?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersionRelationEntity_lt?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_lte?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_contains?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersionRelationEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_starts_with?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_?: InputMaybe<Network__SubgraphVersion_Filter>;
  currentVersion_contains?: InputMaybe<Scalars['String']>;
  currentVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_ends_with?: InputMaybe<Scalars['String']>;
  currentVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_gt?: InputMaybe<Scalars['String']>;
  currentVersion_gte?: InputMaybe<Scalars['String']>;
  currentVersion_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersion_lt?: InputMaybe<Scalars['String']>;
  currentVersion_lte?: InputMaybe<Scalars['String']>;
  currentVersion_not?: InputMaybe<Scalars['String']>;
  currentVersion_not_contains?: InputMaybe<Scalars['String']>;
  currentVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  currentVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  currentVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_starts_with?: InputMaybe<Scalars['String']>;
  currentVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  displayName_contains?: InputMaybe<Scalars['String']>;
  displayName_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_ends_with?: InputMaybe<Scalars['String']>;
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_gt?: InputMaybe<Scalars['String']>;
  displayName_gte?: InputMaybe<Scalars['String']>;
  displayName_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_lt?: InputMaybe<Scalars['String']>;
  displayName_lte?: InputMaybe<Scalars['String']>;
  displayName_not?: InputMaybe<Scalars['String']>;
  displayName_not_contains?: InputMaybe<Scalars['String']>;
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_not_starts_with?: InputMaybe<Scalars['String']>;
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_starts_with?: InputMaybe<Scalars['String']>;
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entityVersion?: InputMaybe<Scalars['Int']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  entityVersion_lt?: InputMaybe<Scalars['Int']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']>;
  entityVersion_not?: InputMaybe<Scalars['Int']>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  image?: InputMaybe<Scalars['String']>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  initializing?: InputMaybe<Scalars['Boolean']>;
  initializing_in?: InputMaybe<Array<Scalars['Boolean']>>;
  initializing_not?: InputMaybe<Scalars['Boolean']>;
  initializing_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  ipfsMetadataHash?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_contains?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_ends_with?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_gt?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_gte?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsMetadataHash_lt?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_lte?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_contains?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsMetadataHash_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_starts_with?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity?: InputMaybe<Scalars['String']>;
  linkedEntity_?: InputMaybe<Network__Subgraph_Filter>;
  linkedEntity_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_lt?: InputMaybe<Scalars['String']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']>;
  linkedEntity_not?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataHash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  metadataHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  migrated?: InputMaybe<Scalars['Boolean']>;
  migrated_in?: InputMaybe<Array<Scalars['Boolean']>>;
  migrated_not?: InputMaybe<Scalars['Boolean']>;
  migrated_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  nameSignalAmount?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_not?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignalCount?: InputMaybe<Scalars['Int']>;
  nameSignalCount_gt?: InputMaybe<Scalars['Int']>;
  nameSignalCount_gte?: InputMaybe<Scalars['Int']>;
  nameSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  nameSignalCount_lt?: InputMaybe<Scalars['Int']>;
  nameSignalCount_lte?: InputMaybe<Scalars['Int']>;
  nameSignalCount_not?: InputMaybe<Scalars['Int']>;
  nameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  nameSignals_?: InputMaybe<Network__NameSignal_Filter>;
  nftID?: InputMaybe<Scalars['String']>;
  nftID_contains?: InputMaybe<Scalars['String']>;
  nftID_contains_nocase?: InputMaybe<Scalars['String']>;
  nftID_ends_with?: InputMaybe<Scalars['String']>;
  nftID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftID_gt?: InputMaybe<Scalars['String']>;
  nftID_gte?: InputMaybe<Scalars['String']>;
  nftID_in?: InputMaybe<Array<Scalars['String']>>;
  nftID_lt?: InputMaybe<Scalars['String']>;
  nftID_lte?: InputMaybe<Scalars['String']>;
  nftID_not?: InputMaybe<Scalars['String']>;
  nftID_not_contains?: InputMaybe<Scalars['String']>;
  nftID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nftID_not_ends_with?: InputMaybe<Scalars['String']>;
  nftID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftID_not_in?: InputMaybe<Array<Scalars['String']>>;
  nftID_not_starts_with?: InputMaybe<Scalars['String']>;
  nftID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftID_starts_with?: InputMaybe<Scalars['String']>;
  nftID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftImage?: InputMaybe<Scalars['String']>;
  nftImage_contains?: InputMaybe<Scalars['String']>;
  nftImage_contains_nocase?: InputMaybe<Scalars['String']>;
  nftImage_ends_with?: InputMaybe<Scalars['String']>;
  nftImage_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftImage_gt?: InputMaybe<Scalars['String']>;
  nftImage_gte?: InputMaybe<Scalars['String']>;
  nftImage_in?: InputMaybe<Array<Scalars['String']>>;
  nftImage_lt?: InputMaybe<Scalars['String']>;
  nftImage_lte?: InputMaybe<Scalars['String']>;
  nftImage_not?: InputMaybe<Scalars['String']>;
  nftImage_not_contains?: InputMaybe<Scalars['String']>;
  nftImage_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nftImage_not_ends_with?: InputMaybe<Scalars['String']>;
  nftImage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftImage_not_in?: InputMaybe<Array<Scalars['String']>>;
  nftImage_not_starts_with?: InputMaybe<Scalars['String']>;
  nftImage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftImage_starts_with?: InputMaybe<Scalars['String']>;
  nftImage_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldID?: InputMaybe<Scalars['String']>;
  oldID_contains?: InputMaybe<Scalars['String']>;
  oldID_contains_nocase?: InputMaybe<Scalars['String']>;
  oldID_ends_with?: InputMaybe<Scalars['String']>;
  oldID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oldID_gt?: InputMaybe<Scalars['String']>;
  oldID_gte?: InputMaybe<Scalars['String']>;
  oldID_in?: InputMaybe<Array<Scalars['String']>>;
  oldID_lt?: InputMaybe<Scalars['String']>;
  oldID_lte?: InputMaybe<Scalars['String']>;
  oldID_not?: InputMaybe<Scalars['String']>;
  oldID_not_contains?: InputMaybe<Scalars['String']>;
  oldID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  oldID_not_ends_with?: InputMaybe<Scalars['String']>;
  oldID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oldID_not_in?: InputMaybe<Array<Scalars['String']>>;
  oldID_not_starts_with?: InputMaybe<Scalars['String']>;
  oldID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldID_starts_with?: InputMaybe<Scalars['String']>;
  oldID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Network__GraphAccount_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pastVersions_?: InputMaybe<Network__SubgraphVersion_Filter>;
  reserveRatio?: InputMaybe<Scalars['Int']>;
  reserveRatio_gt?: InputMaybe<Scalars['Int']>;
  reserveRatio_gte?: InputMaybe<Scalars['Int']>;
  reserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  reserveRatio_lt?: InputMaybe<Scalars['Int']>;
  reserveRatio_lte?: InputMaybe<Scalars['Int']>;
  reserveRatio_not?: InputMaybe<Scalars['Int']>;
  reserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signalAmount?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphNumber?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_gt?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_gte?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphNumber_lt?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_lte?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_not?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['Int']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt_lt?: InputMaybe<Scalars['Int']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']>;
  updatedAt_not?: InputMaybe<Scalars['Int']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  versionCount?: InputMaybe<Scalars['BigInt']>;
  versionCount_gt?: InputMaybe<Scalars['BigInt']>;
  versionCount_gte?: InputMaybe<Scalars['BigInt']>;
  versionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versionCount_lt?: InputMaybe<Scalars['BigInt']>;
  versionCount_lte?: InputMaybe<Scalars['BigInt']>;
  versionCount_not?: InputMaybe<Scalars['BigInt']>;
  versionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versions_?: InputMaybe<Network__SubgraphVersion_Filter>;
  website?: InputMaybe<Scalars['String']>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_contains_nocase?: InputMaybe<Scalars['String']>;
  website_ends_with?: InputMaybe<Scalars['String']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_gt?: InputMaybe<Scalars['String']>;
  website_gte?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<Scalars['String']>>;
  website_lt?: InputMaybe<Scalars['String']>;
  website_lte?: InputMaybe<Scalars['String']>;
  website_not?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']>;
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_starts_with?: InputMaybe<Scalars['String']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawableTokens?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawableTokens_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_not?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Network__Subgraph_OrderBy {
  Active = 'active',
  Categories = 'categories',
  CodeRepository = 'codeRepository',
  CreatedAt = 'createdAt',
  CreatorAddress = 'creatorAddress',
  CurrentSignalledTokens = 'currentSignalledTokens',
  CurrentVersion = 'currentVersion',
  CurrentVersionRelationEntity = 'currentVersionRelationEntity',
  Description = 'description',
  DisplayName = 'displayName',
  EntityVersion = 'entityVersion',
  Id = 'id',
  Image = 'image',
  Initializing = 'initializing',
  IpfsMetadataHash = 'ipfsMetadataHash',
  LinkedEntity = 'linkedEntity',
  MetadataHash = 'metadataHash',
  Migrated = 'migrated',
  NameSignalAmount = 'nameSignalAmount',
  NameSignalCount = 'nameSignalCount',
  NameSignals = 'nameSignals',
  NftId = 'nftID',
  NftImage = 'nftImage',
  OldId = 'oldID',
  Owner = 'owner',
  PastVersions = 'pastVersions',
  ReserveRatio = 'reserveRatio',
  SignalAmount = 'signalAmount',
  SignalledTokens = 'signalledTokens',
  SubgraphNumber = 'subgraphNumber',
  UnsignalledTokens = 'unsignalledTokens',
  UpdatedAt = 'updatedAt',
  VersionCount = 'versionCount',
  Versions = 'versions',
  Website = 'website',
  WithdrawableTokens = 'withdrawableTokens',
  WithdrawnTokens = 'withdrawnTokens'
}

/** Token Lock Wallets which hold locked GRT */
export type Network__TokenLockWallet = {
  __typename?: 'NETWORK__TokenLockWallet';
  /** Address of the beneficiary of locked tokens */
  beneficiary: Scalars['NETWORK__Bytes'];
  /** The block this wlalet was created */
  blockNumberCreated: Scalars['BigInt'];
  /** End time of the release schedule */
  endTime: Scalars['BigInt'];
  /** The address of the token lock wallet */
  id: Scalars['ID'];
  /** The hash of the initializer */
  initHash: Scalars['NETWORK__Bytes'];
  /** Amount of tokens to be managed by the lock contract */
  managedAmount: Scalars['BigInt'];
  /** The Manager address */
  manager: Scalars['NETWORK__Bytes'];
  /** Number of periods between start time and end time */
  periods: Scalars['BigInt'];
  /** Time when the releases start */
  releaseStartTime: Scalars['BigInt'];
  /** Whether or not the contract is revocable */
  revocable?: Maybe<Network__Revocability>;
  /** Start time of the release schedule */
  startTime: Scalars['BigInt'];
  /** The token being used (GRT) */
  token: Scalars['NETWORK__Bytes'];
  /** True if the beneficiary has approved addresses that the manager has approved */
  tokenDestinationsApproved: Scalars['Boolean'];
  /** The amount of tokens that have been resleased */
  tokensReleased: Scalars['BigInt'];
  /** The amount of tokens that have been revoked */
  tokensRevoked: Scalars['BigInt'];
  /** The amount of tokens that have been withdrawn */
  tokensWithdrawn: Scalars['BigInt'];
  /** The creation tx hash of the wallet */
  txHash: Scalars['NETWORK__Bytes'];
  /** Time the cliff vests, 0 if no cliff */
  vestingCliffTime: Scalars['BigInt'];
};

export type Network__TokenLockWallet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  beneficiary?: InputMaybe<Scalars['NETWORK__Bytes']>;
  beneficiary_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  beneficiary_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  beneficiary_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  beneficiary_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  beneficiary_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  blockNumberCreated?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberCreated_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_not?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime?: InputMaybe<Scalars['BigInt']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime_lt?: InputMaybe<Scalars['BigInt']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']>;
  endTime_not?: InputMaybe<Scalars['BigInt']>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  initHash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  initHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  initHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  initHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  initHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  initHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  initHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  initHash_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  initHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  initHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  managedAmount?: InputMaybe<Scalars['BigInt']>;
  managedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  managedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  managedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  managedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  managedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  managedAmount_not?: InputMaybe<Scalars['BigInt']>;
  managedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  manager?: InputMaybe<Scalars['NETWORK__Bytes']>;
  manager_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  manager_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  manager_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  manager_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  manager_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  manager_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  manager_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  manager_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  manager_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  periods?: InputMaybe<Scalars['BigInt']>;
  periods_gt?: InputMaybe<Scalars['BigInt']>;
  periods_gte?: InputMaybe<Scalars['BigInt']>;
  periods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  periods_lt?: InputMaybe<Scalars['BigInt']>;
  periods_lte?: InputMaybe<Scalars['BigInt']>;
  periods_not?: InputMaybe<Scalars['BigInt']>;
  periods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  releaseStartTime?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_gt?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_gte?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  releaseStartTime_lt?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_lte?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_not?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  revocable?: InputMaybe<Network__Revocability>;
  revocable_in?: InputMaybe<Array<Network__Revocability>>;
  revocable_not?: InputMaybe<Network__Revocability>;
  revocable_not_in?: InputMaybe<Array<Network__Revocability>>;
  startTime?: InputMaybe<Scalars['BigInt']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime_lt?: InputMaybe<Scalars['BigInt']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']>;
  startTime_not?: InputMaybe<Scalars['BigInt']>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['NETWORK__Bytes']>;
  tokenDestinationsApproved?: InputMaybe<Scalars['Boolean']>;
  tokenDestinationsApproved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  tokenDestinationsApproved_not?: InputMaybe<Scalars['Boolean']>;
  tokenDestinationsApproved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  token_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  token_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  token_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  token_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  token_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  token_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  token_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  token_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  tokensReleased?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_gt?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_gte?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensReleased_lt?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_lte?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_not?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensRevoked?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_gt?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_gte?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensRevoked_lt?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_lte?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_not?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensWithdrawn?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_gt?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_gte?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensWithdrawn_lt?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_lte?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_not?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  txHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  txHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  txHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  txHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  txHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  txHash_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  vestingCliffTime?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_gt?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_gte?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vestingCliffTime_lt?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_lte?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_not?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Network__TokenLockWallet_OrderBy {
  Beneficiary = 'beneficiary',
  BlockNumberCreated = 'blockNumberCreated',
  EndTime = 'endTime',
  Id = 'id',
  InitHash = 'initHash',
  ManagedAmount = 'managedAmount',
  Manager = 'manager',
  Periods = 'periods',
  ReleaseStartTime = 'releaseStartTime',
  Revocable = 'revocable',
  StartTime = 'startTime',
  Token = 'token',
  TokenDestinationsApproved = 'tokenDestinationsApproved',
  TokensReleased = 'tokensReleased',
  TokensRevoked = 'tokensRevoked',
  TokensWithdrawn = 'tokensWithdrawn',
  TxHash = 'txHash',
  VestingCliffTime = 'vestingCliffTime'
}

/** The Token manager data */
export type Network__TokenManager = {
  __typename?: 'NETWORK__TokenManager';
  /** List of function call authorizations */
  authorizedFunctions?: Maybe<Array<Network__AuthorizedFunction>>;
  /** Token manager address */
  id: Scalars['ID'];
  /** Master copy address */
  masterCopy: Scalars['NETWORK__Bytes'];
  /** List of addresses that are allowed to pull funds */
  tokenDestinations?: Maybe<Array<Scalars['NETWORK__Bytes']>>;
  /** Token lock count of contracts created */
  tokenLockCount: Scalars['BigInt'];
  /** Tokens stored in manger through deposit or withdraw */
  tokens: Scalars['BigInt'];
};


/** The Token manager data */
export type Network__TokenManagerAuthorizedFunctionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__AuthorizedFunction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Network__AuthorizedFunction_Filter>;
};

export type Network__TokenManager_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  authorizedFunctions_?: InputMaybe<Network__AuthorizedFunction_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  masterCopy?: InputMaybe<Scalars['NETWORK__Bytes']>;
  masterCopy_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  masterCopy_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  masterCopy_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  masterCopy_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  masterCopy_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  masterCopy_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  masterCopy_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  masterCopy_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  masterCopy_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  tokenDestinations?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  tokenDestinations_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  tokenDestinations_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  tokenDestinations_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  tokenDestinations_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  tokenDestinations_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  tokenLockCount?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_gt?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_gte?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenLockCount_lt?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_lte?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_not?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens?: InputMaybe<Scalars['BigInt']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens_lt?: InputMaybe<Scalars['BigInt']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']>;
  tokens_not?: InputMaybe<Scalars['BigInt']>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Network__TokenManager_OrderBy {
  AuthorizedFunctions = 'authorizedFunctions',
  Id = 'id',
  MasterCopy = 'masterCopy',
  TokenDestinations = 'tokenDestinations',
  TokenLockCount = 'tokenLockCount',
  Tokens = 'tokens'
}

/** A generic transaction in The Graph Network */
export type Network__Transaction = {
  /** Block number for the transaction */
  blockNumber: Scalars['Int'];
  /** Transaction hash concatenated with event log index */
  id: Scalars['ID'];
  /** Signer of the transaction */
  signer: Network__GraphAccount;
  /** Timestamp for the transaction */
  timestamp: Scalars['Int'];
  /** Type of Graph Network transaction */
  type: Network__TransactionType;
};

export enum Network__TransactionType {
  BurnNSignal = 'BurnNSignal',
  BurnSignal = 'BurnSignal',
  MintNSignal = 'MintNSignal',
  MintSignal = 'MintSignal',
  Stake = 'Stake',
  Unstake = 'Unstake'
}

export type Network__Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<Network__GraphAccount_Filter>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  type?: InputMaybe<Network__TransactionType>;
  type_in?: InputMaybe<Array<Network__TransactionType>>;
  type_not?: InputMaybe<Network__TransactionType>;
  type_not_in?: InputMaybe<Array<Network__TransactionType>>;
};

export enum Network__Transaction_OrderBy {
  BlockNumber = 'blockNumber',
  Id = 'id',
  Signer = 'signer',
  Timestamp = 'timestamp',
  Type = 'type'
}

export type Network___Block_ = {
  __typename?: 'NETWORK___Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['NETWORK__Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type Network___Meta_ = {
  __typename?: 'NETWORK___Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: Network___Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum Network___SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  ANALYTICS___meta?: Maybe<Analytics___Meta_>;
  ANALYTICS__allocation?: Maybe<Analytics__Allocation>;
  ANALYTICS__allocations: Array<Analytics__Allocation>;
  ANALYTICS__curator?: Maybe<Analytics__Curator>;
  ANALYTICS__curators: Array<Analytics__Curator>;
  ANALYTICS__delegatedStake?: Maybe<Analytics__DelegatedStake>;
  ANALYTICS__delegatedStakeDailyData?: Maybe<Analytics__DelegatedStakeDailyData>;
  ANALYTICS__delegatedStakeDailyDatas: Array<Analytics__DelegatedStakeDailyData>;
  ANALYTICS__delegatedStakes: Array<Analytics__DelegatedStake>;
  ANALYTICS__delegator?: Maybe<Analytics__Delegator>;
  ANALYTICS__delegatorDailyData?: Maybe<Analytics__DelegatorDailyData>;
  ANALYTICS__delegatorDailyDatas: Array<Analytics__DelegatorDailyData>;
  ANALYTICS__delegatorDelegatedStakeDailyRelation?: Maybe<Analytics__DelegatorDelegatedStakeDailyRelation>;
  ANALYTICS__delegatorDelegatedStakeDailyRelations: Array<Analytics__DelegatorDelegatedStakeDailyRelation>;
  ANALYTICS__delegatorSearch: Array<Analytics__Delegator>;
  ANALYTICS__delegators: Array<Analytics__Delegator>;
  ANALYTICS__graphAccount?: Maybe<Analytics__GraphAccount>;
  ANALYTICS__graphAccountName?: Maybe<Analytics__GraphAccountName>;
  ANALYTICS__graphAccountNames: Array<Analytics__GraphAccountName>;
  ANALYTICS__graphAccounts: Array<Analytics__GraphAccount>;
  ANALYTICS__graphNetwork?: Maybe<Analytics__GraphNetwork>;
  ANALYTICS__graphNetworkDailyData?: Maybe<Analytics__GraphNetworkDailyData>;
  ANALYTICS__graphNetworkDailyDatas: Array<Analytics__GraphNetworkDailyData>;
  ANALYTICS__graphNetworks: Array<Analytics__GraphNetwork>;
  ANALYTICS__indexer?: Maybe<Analytics__Indexer>;
  ANALYTICS__indexerDailyData?: Maybe<Analytics__IndexerDailyData>;
  ANALYTICS__indexerDailyDatas: Array<Analytics__IndexerDailyData>;
  ANALYTICS__indexerDelegatedStakeRelation?: Maybe<Analytics__IndexerDelegatedStakeRelation>;
  ANALYTICS__indexerDelegatedStakeRelations: Array<Analytics__IndexerDelegatedStakeRelation>;
  ANALYTICS__indexers: Array<Analytics__Indexer>;
  ANALYTICS__nameSignal?: Maybe<Analytics__NameSignal>;
  ANALYTICS__nameSignalTransaction?: Maybe<Analytics__NameSignalTransaction>;
  ANALYTICS__nameSignalTransactions: Array<Analytics__NameSignalTransaction>;
  ANALYTICS__nameSignals: Array<Analytics__NameSignal>;
  ANALYTICS__pool?: Maybe<Analytics__Pool>;
  ANALYTICS__pools: Array<Analytics__Pool>;
  ANALYTICS__signal?: Maybe<Analytics__Signal>;
  ANALYTICS__signalTransaction?: Maybe<Analytics__SignalTransaction>;
  ANALYTICS__signalTransactions: Array<Analytics__SignalTransaction>;
  ANALYTICS__signals: Array<Analytics__Signal>;
  ANALYTICS__subgraph?: Maybe<Analytics__Subgraph>;
  ANALYTICS__subgraphDeployment?: Maybe<Analytics__SubgraphDeployment>;
  ANALYTICS__subgraphDeploymentDailyData?: Maybe<Analytics__SubgraphDeploymentDailyData>;
  ANALYTICS__subgraphDeploymentDailyDatas: Array<Analytics__SubgraphDeploymentDailyData>;
  ANALYTICS__subgraphDeployments: Array<Analytics__SubgraphDeployment>;
  ANALYTICS__subgraphVersion?: Maybe<Analytics__SubgraphVersion>;
  ANALYTICS__subgraphVersions: Array<Analytics__SubgraphVersion>;
  ANALYTICS__subgraphs: Array<Analytics__Subgraph>;
  ANALYTICS__transaction?: Maybe<Analytics__Transaction>;
  ANALYTICS__transactions: Array<Analytics__Transaction>;
  /** Access to subgraph metadata */
  BILLING___meta?: Maybe<Billing___Meta_>;
  BILLING__billing?: Maybe<Billing__Billing>;
  BILLING__billingDailyData?: Maybe<Billing__BillingDailyData>;
  BILLING__billingDailyDatas: Array<Billing__BillingDailyData>;
  BILLING__billings: Array<Billing__Billing>;
  BILLING__tokensAdded?: Maybe<Billing__TokensAdded>;
  BILLING__tokensAddeds: Array<Billing__TokensAdded>;
  BILLING__tokensPulled?: Maybe<Billing__TokensPulled>;
  BILLING__tokensPulleds: Array<Billing__TokensPulled>;
  BILLING__tokensRemoved?: Maybe<Billing__TokensRemoved>;
  BILLING__tokensRemoveds: Array<Billing__TokensRemoved>;
  BILLING__transaction?: Maybe<Billing__Transaction>;
  BILLING__transactions: Array<Billing__Transaction>;
  BILLING__user?: Maybe<Billing__User>;
  BILLING__userDailyData?: Maybe<Billing__UserDailyData>;
  BILLING__userDailyDatas: Array<Billing__UserDailyData>;
  BILLING__users: Array<Billing__User>;
  /** Access to subgraph metadata */
  ENS___meta?: Maybe<Ens___Meta_>;
  ENS__abiChanged?: Maybe<Ens__AbiChanged>;
  ENS__abiChangeds: Array<Ens__AbiChanged>;
  ENS__account?: Maybe<Ens__Account>;
  ENS__accounts: Array<Ens__Account>;
  ENS__addrChanged?: Maybe<Ens__AddrChanged>;
  ENS__addrChangeds: Array<Ens__AddrChanged>;
  ENS__authorisationChanged?: Maybe<Ens__AuthorisationChanged>;
  ENS__authorisationChangeds: Array<Ens__AuthorisationChanged>;
  ENS__contenthashChanged?: Maybe<Ens__ContenthashChanged>;
  ENS__contenthashChangeds: Array<Ens__ContenthashChanged>;
  ENS__domain?: Maybe<Ens__Domain>;
  ENS__domainEvent?: Maybe<Ens__DomainEvent>;
  ENS__domainEvents: Array<Ens__DomainEvent>;
  ENS__domains: Array<Ens__Domain>;
  ENS__interfaceChanged?: Maybe<Ens__InterfaceChanged>;
  ENS__interfaceChangeds: Array<Ens__InterfaceChanged>;
  ENS__multicoinAddrChanged?: Maybe<Ens__MulticoinAddrChanged>;
  ENS__multicoinAddrChangeds: Array<Ens__MulticoinAddrChanged>;
  ENS__nameChanged?: Maybe<Ens__NameChanged>;
  ENS__nameChangeds: Array<Ens__NameChanged>;
  ENS__nameRegistered?: Maybe<Ens__NameRegistered>;
  ENS__nameRegistereds: Array<Ens__NameRegistered>;
  ENS__nameRenewed?: Maybe<Ens__NameRenewed>;
  ENS__nameReneweds: Array<Ens__NameRenewed>;
  ENS__nameTransferred?: Maybe<Ens__NameTransferred>;
  ENS__nameTransferreds: Array<Ens__NameTransferred>;
  ENS__newOwner?: Maybe<Ens__NewOwner>;
  ENS__newOwners: Array<Ens__NewOwner>;
  ENS__newResolver?: Maybe<Ens__NewResolver>;
  ENS__newResolvers: Array<Ens__NewResolver>;
  ENS__newTTL?: Maybe<Ens__NewTtl>;
  ENS__newTTLs: Array<Ens__NewTtl>;
  ENS__pubkeyChanged?: Maybe<Ens__PubkeyChanged>;
  ENS__pubkeyChangeds: Array<Ens__PubkeyChanged>;
  ENS__registration?: Maybe<Ens__Registration>;
  ENS__registrationEvent?: Maybe<Ens__RegistrationEvent>;
  ENS__registrationEvents: Array<Ens__RegistrationEvent>;
  ENS__registrations: Array<Ens__Registration>;
  ENS__resolver?: Maybe<Ens__Resolver>;
  ENS__resolverEvent?: Maybe<Ens__ResolverEvent>;
  ENS__resolverEvents: Array<Ens__ResolverEvent>;
  ENS__resolvers: Array<Ens__Resolver>;
  ENS__textChanged?: Maybe<Ens__TextChanged>;
  ENS__textChangeds: Array<Ens__TextChanged>;
  ENS__transfer?: Maybe<Ens__Transfer>;
  ENS__transfers: Array<Ens__Transfer>;
  /** Access to subgraph metadata */
  NETWORK___meta?: Maybe<Network___Meta_>;
  NETWORK__allocation?: Maybe<Network__Allocation>;
  NETWORK__allocations: Array<Network__Allocation>;
  NETWORK__attestation?: Maybe<Network__Attestation>;
  NETWORK__attestations: Array<Network__Attestation>;
  NETWORK__authorizedFunction?: Maybe<Network__AuthorizedFunction>;
  NETWORK__authorizedFunctions: Array<Network__AuthorizedFunction>;
  NETWORK__curator?: Maybe<Network__Curator>;
  NETWORK__curatorSearch: Array<Network__Curator>;
  NETWORK__curators: Array<Network__Curator>;
  NETWORK__currentSubgraphDeploymentRelation?: Maybe<Network__CurrentSubgraphDeploymentRelation>;
  NETWORK__currentSubgraphDeploymentRelations: Array<Network__CurrentSubgraphDeploymentRelation>;
  NETWORK__delegatedStake?: Maybe<Network__DelegatedStake>;
  NETWORK__delegatedStakes: Array<Network__DelegatedStake>;
  NETWORK__delegator?: Maybe<Network__Delegator>;
  NETWORK__delegatorSearch: Array<Network__Delegator>;
  NETWORK__delegators: Array<Network__Delegator>;
  NETWORK__dispute?: Maybe<Network__Dispute>;
  NETWORK__disputes: Array<Network__Dispute>;
  NETWORK__epoch?: Maybe<Network__Epoch>;
  NETWORK__epoches: Array<Network__Epoch>;
  NETWORK__graphAccount?: Maybe<Network__GraphAccount>;
  NETWORK__graphAccountName?: Maybe<Network__GraphAccountName>;
  NETWORK__graphAccountNames: Array<Network__GraphAccountName>;
  NETWORK__graphAccounts: Array<Network__GraphAccount>;
  NETWORK__graphNetwork?: Maybe<Network__GraphNetwork>;
  NETWORK__graphNetworks: Array<Network__GraphNetwork>;
  NETWORK__indexer?: Maybe<Network__Indexer>;
  NETWORK__indexers: Array<Network__Indexer>;
  NETWORK__nameSignal?: Maybe<Network__NameSignal>;
  NETWORK__nameSignalSubgraphRelation?: Maybe<Network__NameSignalSubgraphRelation>;
  NETWORK__nameSignalSubgraphRelations: Array<Network__NameSignalSubgraphRelation>;
  NETWORK__nameSignalTransaction?: Maybe<Network__NameSignalTransaction>;
  NETWORK__nameSignalTransactions: Array<Network__NameSignalTransaction>;
  NETWORK__nameSignals: Array<Network__NameSignal>;
  NETWORK__network?: Maybe<Network__Network>;
  NETWORK__networks: Array<Network__Network>;
  NETWORK__pool?: Maybe<Network__Pool>;
  NETWORK__pools: Array<Network__Pool>;
  NETWORK__signal?: Maybe<Network__Signal>;
  NETWORK__signalTransaction?: Maybe<Network__SignalTransaction>;
  NETWORK__signalTransactions: Array<Network__SignalTransaction>;
  NETWORK__signals: Array<Network__Signal>;
  NETWORK__subgraph?: Maybe<Network__Subgraph>;
  NETWORK__subgraphCategories: Array<Network__SubgraphCategory>;
  NETWORK__subgraphCategory?: Maybe<Network__SubgraphCategory>;
  NETWORK__subgraphCategoryRelation?: Maybe<Network__SubgraphCategoryRelation>;
  NETWORK__subgraphCategoryRelations: Array<Network__SubgraphCategoryRelation>;
  NETWORK__subgraphDeployment?: Maybe<Network__SubgraphDeployment>;
  NETWORK__subgraphDeployments: Array<Network__SubgraphDeployment>;
  NETWORK__subgraphSearch: Array<Network__Subgraph>;
  NETWORK__subgraphVersion?: Maybe<Network__SubgraphVersion>;
  NETWORK__subgraphVersions: Array<Network__SubgraphVersion>;
  NETWORK__subgraphs: Array<Network__Subgraph>;
  NETWORK__tokenLockWallet?: Maybe<Network__TokenLockWallet>;
  NETWORK__tokenLockWallets: Array<Network__TokenLockWallet>;
  NETWORK__tokenManager?: Maybe<Network__TokenManager>;
  NETWORK__tokenManagers: Array<Network__TokenManager>;
  NETWORK__transaction?: Maybe<Network__Transaction>;
  NETWORK__transactions: Array<Network__Transaction>;
};


export type QueryAnalytics___MetaArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
};


export type QueryAnalytics__AllocationArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__AllocationsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__Allocation_Filter>;
};


export type QueryAnalytics__CuratorArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__CuratorsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Curator_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__Curator_Filter>;
};


export type QueryAnalytics__DelegatedStakeArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__DelegatedStakeDailyDataArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__DelegatedStakeDailyDatasArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__DelegatedStakeDailyData_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__DelegatedStakeDailyData_Filter>;
};


export type QueryAnalytics__DelegatedStakesArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__DelegatedStake_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__DelegatedStake_Filter>;
};


export type QueryAnalytics__DelegatorArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__DelegatorDailyDataArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__DelegatorDailyDatasArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__DelegatorDailyData_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__DelegatorDailyData_Filter>;
};


export type QueryAnalytics__DelegatorDelegatedStakeDailyRelationArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__DelegatorDelegatedStakeDailyRelationsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__DelegatorDelegatedStakeDailyRelation_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__DelegatorDelegatedStakeDailyRelation_Filter>;
};


export type QueryAnalytics__DelegatorSearchArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QueryAnalytics__DelegatorsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Delegator_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__Delegator_Filter>;
};


export type QueryAnalytics__GraphAccountArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__GraphAccountNameArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__GraphAccountNamesArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__GraphAccountName_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__GraphAccountName_Filter>;
};


export type QueryAnalytics__GraphAccountsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__GraphAccount_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__GraphAccount_Filter>;
};


export type QueryAnalytics__GraphNetworkArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__GraphNetworkDailyDataArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__GraphNetworkDailyDatasArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__GraphNetworkDailyData_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__GraphNetworkDailyData_Filter>;
};


export type QueryAnalytics__GraphNetworksArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__GraphNetwork_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__GraphNetwork_Filter>;
};


export type QueryAnalytics__IndexerArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__IndexerDailyDataArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__IndexerDailyDatasArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__IndexerDailyData_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__IndexerDailyData_Filter>;
};


export type QueryAnalytics__IndexerDelegatedStakeRelationArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__IndexerDelegatedStakeRelationsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__IndexerDelegatedStakeRelation_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__IndexerDelegatedStakeRelation_Filter>;
};


export type QueryAnalytics__IndexersArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Indexer_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__Indexer_Filter>;
};


export type QueryAnalytics__NameSignalArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__NameSignalTransactionArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__NameSignalTransactionsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__NameSignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__NameSignalTransaction_Filter>;
};


export type QueryAnalytics__NameSignalsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__NameSignal_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__NameSignal_Filter>;
};


export type QueryAnalytics__PoolArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__PoolsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Pool_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__Pool_Filter>;
};


export type QueryAnalytics__SignalArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__SignalTransactionArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__SignalTransactionsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__SignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__SignalTransaction_Filter>;
};


export type QueryAnalytics__SignalsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Signal_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__Signal_Filter>;
};


export type QueryAnalytics__SubgraphArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__SubgraphDeploymentArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__SubgraphDeploymentDailyDataArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__SubgraphDeploymentDailyDatasArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__SubgraphDeploymentDailyData_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__SubgraphDeploymentDailyData_Filter>;
};


export type QueryAnalytics__SubgraphDeploymentsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__SubgraphDeployment_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__SubgraphDeployment_Filter>;
};


export type QueryAnalytics__SubgraphVersionArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__SubgraphVersionsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__SubgraphVersion_Filter>;
};


export type QueryAnalytics__SubgraphsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Subgraph_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__Subgraph_Filter>;
};


export type QueryAnalytics__TransactionArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type QueryAnalytics__TransactionsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Transaction_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__Transaction_Filter>;
};


export type QueryBilling___MetaArgs = {
  block?: InputMaybe<Billing__Block_Height>;
};


export type QueryBilling__BillingArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Billing___SubgraphErrorPolicy_;
};


export type QueryBilling__BillingDailyDataArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Billing___SubgraphErrorPolicy_;
};


export type QueryBilling__BillingDailyDatasArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__BillingDailyData_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Billing___SubgraphErrorPolicy_;
  where?: InputMaybe<Billing__BillingDailyData_Filter>;
};


export type QueryBilling__BillingsArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__Billing_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Billing___SubgraphErrorPolicy_;
  where?: InputMaybe<Billing__Billing_Filter>;
};


export type QueryBilling__TokensAddedArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Billing___SubgraphErrorPolicy_;
};


export type QueryBilling__TokensAddedsArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__TokensAdded_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Billing___SubgraphErrorPolicy_;
  where?: InputMaybe<Billing__TokensAdded_Filter>;
};


export type QueryBilling__TokensPulledArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Billing___SubgraphErrorPolicy_;
};


export type QueryBilling__TokensPulledsArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__TokensPulled_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Billing___SubgraphErrorPolicy_;
  where?: InputMaybe<Billing__TokensPulled_Filter>;
};


export type QueryBilling__TokensRemovedArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Billing___SubgraphErrorPolicy_;
};


export type QueryBilling__TokensRemovedsArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__TokensRemoved_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Billing___SubgraphErrorPolicy_;
  where?: InputMaybe<Billing__TokensRemoved_Filter>;
};


export type QueryBilling__TransactionArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Billing___SubgraphErrorPolicy_;
};


export type QueryBilling__TransactionsArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__Transaction_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Billing___SubgraphErrorPolicy_;
  where?: InputMaybe<Billing__Transaction_Filter>;
};


export type QueryBilling__UserArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Billing___SubgraphErrorPolicy_;
};


export type QueryBilling__UserDailyDataArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Billing___SubgraphErrorPolicy_;
};


export type QueryBilling__UserDailyDatasArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__UserDailyData_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Billing___SubgraphErrorPolicy_;
  where?: InputMaybe<Billing__UserDailyData_Filter>;
};


export type QueryBilling__UsersArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__User_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Billing___SubgraphErrorPolicy_;
  where?: InputMaybe<Billing__User_Filter>;
};


export type QueryEns___MetaArgs = {
  block?: InputMaybe<Ens__Block_Height>;
};


export type QueryEns__AbiChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__AbiChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__AbiChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__AbiChanged_Filter>;
};


export type QueryEns__AccountArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__AccountsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__Account_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__Account_Filter>;
};


export type QueryEns__AddrChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__AddrChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__AddrChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__AddrChanged_Filter>;
};


export type QueryEns__AuthorisationChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__AuthorisationChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__AuthorisationChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__AuthorisationChanged_Filter>;
};


export type QueryEns__ContenthashChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__ContenthashChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__ContenthashChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__ContenthashChanged_Filter>;
};


export type QueryEns__DomainArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__DomainEventArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__DomainEventsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__DomainEvent_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__DomainEvent_Filter>;
};


export type QueryEns__DomainsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__Domain_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__Domain_Filter>;
};


export type QueryEns__InterfaceChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__InterfaceChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__InterfaceChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__InterfaceChanged_Filter>;
};


export type QueryEns__MulticoinAddrChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__MulticoinAddrChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__MulticoinAddrChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__MulticoinAddrChanged_Filter>;
};


export type QueryEns__NameChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__NameChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__NameChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__NameChanged_Filter>;
};


export type QueryEns__NameRegisteredArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__NameRegisteredsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__NameRegistered_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__NameRegistered_Filter>;
};


export type QueryEns__NameRenewedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__NameRenewedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__NameRenewed_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__NameRenewed_Filter>;
};


export type QueryEns__NameTransferredArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__NameTransferredsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__NameTransferred_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__NameTransferred_Filter>;
};


export type QueryEns__NewOwnerArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__NewOwnersArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__NewOwner_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__NewOwner_Filter>;
};


export type QueryEns__NewResolverArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__NewResolversArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__NewResolver_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__NewResolver_Filter>;
};


export type QueryEns__NewTtlArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__NewTtLsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__NewTtl_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__NewTtl_Filter>;
};


export type QueryEns__PubkeyChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__PubkeyChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__PubkeyChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__PubkeyChanged_Filter>;
};


export type QueryEns__RegistrationArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__RegistrationEventArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__RegistrationEventsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__RegistrationEvent_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__RegistrationEvent_Filter>;
};


export type QueryEns__RegistrationsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__Registration_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__Registration_Filter>;
};


export type QueryEns__ResolverArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__ResolverEventArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__ResolverEventsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__ResolverEvent_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__ResolverEvent_Filter>;
};


export type QueryEns__ResolversArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__Resolver_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__Resolver_Filter>;
};


export type QueryEns__TextChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__TextChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__TextChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__TextChanged_Filter>;
};


export type QueryEns__TransferArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type QueryEns__TransfersArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__Transfer_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__Transfer_Filter>;
};


export type QueryNetwork___MetaArgs = {
  block?: InputMaybe<Network__Block_Height>;
};


export type QueryNetwork__AllocationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__AllocationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Allocation_Filter>;
};


export type QueryNetwork__AttestationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__AttestationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Attestation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Attestation_Filter>;
};


export type QueryNetwork__AuthorizedFunctionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__AuthorizedFunctionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__AuthorizedFunction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__AuthorizedFunction_Filter>;
};


export type QueryNetwork__CuratorArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__CuratorSearchArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QueryNetwork__CuratorsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Curator_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Curator_Filter>;
};


export type QueryNetwork__CurrentSubgraphDeploymentRelationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__CurrentSubgraphDeploymentRelationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__CurrentSubgraphDeploymentRelation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__CurrentSubgraphDeploymentRelation_Filter>;
};


export type QueryNetwork__DelegatedStakeArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__DelegatedStakesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__DelegatedStake_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__DelegatedStake_Filter>;
};


export type QueryNetwork__DelegatorArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__DelegatorSearchArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QueryNetwork__DelegatorsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Delegator_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Delegator_Filter>;
};


export type QueryNetwork__DisputeArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__DisputesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Dispute_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Dispute_Filter>;
};


export type QueryNetwork__EpochArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__EpochesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Epoch_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Epoch_Filter>;
};


export type QueryNetwork__GraphAccountArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__GraphAccountNameArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__GraphAccountNamesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__GraphAccountName_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__GraphAccountName_Filter>;
};


export type QueryNetwork__GraphAccountsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__GraphAccount_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__GraphAccount_Filter>;
};


export type QueryNetwork__GraphNetworkArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__GraphNetworksArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__GraphNetwork_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__GraphNetwork_Filter>;
};


export type QueryNetwork__IndexerArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__IndexersArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Indexer_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Indexer_Filter>;
};


export type QueryNetwork__NameSignalArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__NameSignalSubgraphRelationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__NameSignalSubgraphRelationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__NameSignalSubgraphRelation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__NameSignalSubgraphRelation_Filter>;
};


export type QueryNetwork__NameSignalTransactionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__NameSignalTransactionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__NameSignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__NameSignalTransaction_Filter>;
};


export type QueryNetwork__NameSignalsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__NameSignal_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__NameSignal_Filter>;
};


export type QueryNetwork__NetworkArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__NetworksArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Network_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Network_Filter>;
};


export type QueryNetwork__PoolArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__PoolsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Pool_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Pool_Filter>;
};


export type QueryNetwork__SignalArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__SignalTransactionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__SignalTransactionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__SignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SignalTransaction_Filter>;
};


export type QueryNetwork__SignalsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Signal_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Signal_Filter>;
};


export type QueryNetwork__SubgraphArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__SubgraphCategoriesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__SubgraphCategory_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SubgraphCategory_Filter>;
};


export type QueryNetwork__SubgraphCategoryArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__SubgraphCategoryRelationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__SubgraphCategoryRelationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__SubgraphCategoryRelation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SubgraphCategoryRelation_Filter>;
};


export type QueryNetwork__SubgraphDeploymentArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__SubgraphDeploymentsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__SubgraphDeployment_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SubgraphDeployment_Filter>;
};


export type QueryNetwork__SubgraphSearchArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QueryNetwork__SubgraphVersionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__SubgraphVersionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SubgraphVersion_Filter>;
};


export type QueryNetwork__SubgraphsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Subgraph_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Subgraph_Filter>;
};


export type QueryNetwork__TokenLockWalletArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__TokenLockWalletsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__TokenLockWallet_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__TokenLockWallet_Filter>;
};


export type QueryNetwork__TokenManagerArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__TokenManagersArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__TokenManager_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__TokenManager_Filter>;
};


export type QueryNetwork__TransactionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type QueryNetwork__TransactionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Transaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Transaction_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  ANALYTICS___meta?: Maybe<Analytics___Meta_>;
  ANALYTICS__allocation?: Maybe<Analytics__Allocation>;
  ANALYTICS__allocations: Array<Analytics__Allocation>;
  ANALYTICS__curator?: Maybe<Analytics__Curator>;
  ANALYTICS__curators: Array<Analytics__Curator>;
  ANALYTICS__delegatedStake?: Maybe<Analytics__DelegatedStake>;
  ANALYTICS__delegatedStakeDailyData?: Maybe<Analytics__DelegatedStakeDailyData>;
  ANALYTICS__delegatedStakeDailyDatas: Array<Analytics__DelegatedStakeDailyData>;
  ANALYTICS__delegatedStakes: Array<Analytics__DelegatedStake>;
  ANALYTICS__delegator?: Maybe<Analytics__Delegator>;
  ANALYTICS__delegatorDailyData?: Maybe<Analytics__DelegatorDailyData>;
  ANALYTICS__delegatorDailyDatas: Array<Analytics__DelegatorDailyData>;
  ANALYTICS__delegatorDelegatedStakeDailyRelation?: Maybe<Analytics__DelegatorDelegatedStakeDailyRelation>;
  ANALYTICS__delegatorDelegatedStakeDailyRelations: Array<Analytics__DelegatorDelegatedStakeDailyRelation>;
  ANALYTICS__delegators: Array<Analytics__Delegator>;
  ANALYTICS__graphAccount?: Maybe<Analytics__GraphAccount>;
  ANALYTICS__graphAccountName?: Maybe<Analytics__GraphAccountName>;
  ANALYTICS__graphAccountNames: Array<Analytics__GraphAccountName>;
  ANALYTICS__graphAccounts: Array<Analytics__GraphAccount>;
  ANALYTICS__graphNetwork?: Maybe<Analytics__GraphNetwork>;
  ANALYTICS__graphNetworkDailyData?: Maybe<Analytics__GraphNetworkDailyData>;
  ANALYTICS__graphNetworkDailyDatas: Array<Analytics__GraphNetworkDailyData>;
  ANALYTICS__graphNetworks: Array<Analytics__GraphNetwork>;
  ANALYTICS__indexer?: Maybe<Analytics__Indexer>;
  ANALYTICS__indexerDailyData?: Maybe<Analytics__IndexerDailyData>;
  ANALYTICS__indexerDailyDatas: Array<Analytics__IndexerDailyData>;
  ANALYTICS__indexerDelegatedStakeRelation?: Maybe<Analytics__IndexerDelegatedStakeRelation>;
  ANALYTICS__indexerDelegatedStakeRelations: Array<Analytics__IndexerDelegatedStakeRelation>;
  ANALYTICS__indexers: Array<Analytics__Indexer>;
  ANALYTICS__nameSignal?: Maybe<Analytics__NameSignal>;
  ANALYTICS__nameSignalTransaction?: Maybe<Analytics__NameSignalTransaction>;
  ANALYTICS__nameSignalTransactions: Array<Analytics__NameSignalTransaction>;
  ANALYTICS__nameSignals: Array<Analytics__NameSignal>;
  ANALYTICS__pool?: Maybe<Analytics__Pool>;
  ANALYTICS__pools: Array<Analytics__Pool>;
  ANALYTICS__signal?: Maybe<Analytics__Signal>;
  ANALYTICS__signalTransaction?: Maybe<Analytics__SignalTransaction>;
  ANALYTICS__signalTransactions: Array<Analytics__SignalTransaction>;
  ANALYTICS__signals: Array<Analytics__Signal>;
  ANALYTICS__subgraph?: Maybe<Analytics__Subgraph>;
  ANALYTICS__subgraphDeployment?: Maybe<Analytics__SubgraphDeployment>;
  ANALYTICS__subgraphDeploymentDailyData?: Maybe<Analytics__SubgraphDeploymentDailyData>;
  ANALYTICS__subgraphDeploymentDailyDatas: Array<Analytics__SubgraphDeploymentDailyData>;
  ANALYTICS__subgraphDeployments: Array<Analytics__SubgraphDeployment>;
  ANALYTICS__subgraphVersion?: Maybe<Analytics__SubgraphVersion>;
  ANALYTICS__subgraphVersions: Array<Analytics__SubgraphVersion>;
  ANALYTICS__subgraphs: Array<Analytics__Subgraph>;
  ANALYTICS__transaction?: Maybe<Analytics__Transaction>;
  ANALYTICS__transactions: Array<Analytics__Transaction>;
  /** Access to subgraph metadata */
  BILLING___meta?: Maybe<Billing___Meta_>;
  BILLING__billing?: Maybe<Billing__Billing>;
  BILLING__billingDailyData?: Maybe<Billing__BillingDailyData>;
  BILLING__billingDailyDatas: Array<Billing__BillingDailyData>;
  BILLING__billings: Array<Billing__Billing>;
  BILLING__tokensAdded?: Maybe<Billing__TokensAdded>;
  BILLING__tokensAddeds: Array<Billing__TokensAdded>;
  BILLING__tokensPulled?: Maybe<Billing__TokensPulled>;
  BILLING__tokensPulleds: Array<Billing__TokensPulled>;
  BILLING__tokensRemoved?: Maybe<Billing__TokensRemoved>;
  BILLING__tokensRemoveds: Array<Billing__TokensRemoved>;
  BILLING__transaction?: Maybe<Billing__Transaction>;
  BILLING__transactions: Array<Billing__Transaction>;
  BILLING__user?: Maybe<Billing__User>;
  BILLING__userDailyData?: Maybe<Billing__UserDailyData>;
  BILLING__userDailyDatas: Array<Billing__UserDailyData>;
  BILLING__users: Array<Billing__User>;
  /** Access to subgraph metadata */
  ENS___meta?: Maybe<Ens___Meta_>;
  ENS__abiChanged?: Maybe<Ens__AbiChanged>;
  ENS__abiChangeds: Array<Ens__AbiChanged>;
  ENS__account?: Maybe<Ens__Account>;
  ENS__accounts: Array<Ens__Account>;
  ENS__addrChanged?: Maybe<Ens__AddrChanged>;
  ENS__addrChangeds: Array<Ens__AddrChanged>;
  ENS__authorisationChanged?: Maybe<Ens__AuthorisationChanged>;
  ENS__authorisationChangeds: Array<Ens__AuthorisationChanged>;
  ENS__contenthashChanged?: Maybe<Ens__ContenthashChanged>;
  ENS__contenthashChangeds: Array<Ens__ContenthashChanged>;
  ENS__domain?: Maybe<Ens__Domain>;
  ENS__domainEvent?: Maybe<Ens__DomainEvent>;
  ENS__domainEvents: Array<Ens__DomainEvent>;
  ENS__domains: Array<Ens__Domain>;
  ENS__interfaceChanged?: Maybe<Ens__InterfaceChanged>;
  ENS__interfaceChangeds: Array<Ens__InterfaceChanged>;
  ENS__multicoinAddrChanged?: Maybe<Ens__MulticoinAddrChanged>;
  ENS__multicoinAddrChangeds: Array<Ens__MulticoinAddrChanged>;
  ENS__nameChanged?: Maybe<Ens__NameChanged>;
  ENS__nameChangeds: Array<Ens__NameChanged>;
  ENS__nameRegistered?: Maybe<Ens__NameRegistered>;
  ENS__nameRegistereds: Array<Ens__NameRegistered>;
  ENS__nameRenewed?: Maybe<Ens__NameRenewed>;
  ENS__nameReneweds: Array<Ens__NameRenewed>;
  ENS__nameTransferred?: Maybe<Ens__NameTransferred>;
  ENS__nameTransferreds: Array<Ens__NameTransferred>;
  ENS__newOwner?: Maybe<Ens__NewOwner>;
  ENS__newOwners: Array<Ens__NewOwner>;
  ENS__newResolver?: Maybe<Ens__NewResolver>;
  ENS__newResolvers: Array<Ens__NewResolver>;
  ENS__newTTL?: Maybe<Ens__NewTtl>;
  ENS__newTTLs: Array<Ens__NewTtl>;
  ENS__pubkeyChanged?: Maybe<Ens__PubkeyChanged>;
  ENS__pubkeyChangeds: Array<Ens__PubkeyChanged>;
  ENS__registration?: Maybe<Ens__Registration>;
  ENS__registrationEvent?: Maybe<Ens__RegistrationEvent>;
  ENS__registrationEvents: Array<Ens__RegistrationEvent>;
  ENS__registrations: Array<Ens__Registration>;
  ENS__resolver?: Maybe<Ens__Resolver>;
  ENS__resolverEvent?: Maybe<Ens__ResolverEvent>;
  ENS__resolverEvents: Array<Ens__ResolverEvent>;
  ENS__resolvers: Array<Ens__Resolver>;
  ENS__textChanged?: Maybe<Ens__TextChanged>;
  ENS__textChangeds: Array<Ens__TextChanged>;
  ENS__transfer?: Maybe<Ens__Transfer>;
  ENS__transfers: Array<Ens__Transfer>;
  /** Access to subgraph metadata */
  NETWORK___meta?: Maybe<Network___Meta_>;
  NETWORK__allocation?: Maybe<Network__Allocation>;
  NETWORK__allocations: Array<Network__Allocation>;
  NETWORK__attestation?: Maybe<Network__Attestation>;
  NETWORK__attestations: Array<Network__Attestation>;
  NETWORK__authorizedFunction?: Maybe<Network__AuthorizedFunction>;
  NETWORK__authorizedFunctions: Array<Network__AuthorizedFunction>;
  NETWORK__curator?: Maybe<Network__Curator>;
  NETWORK__curators: Array<Network__Curator>;
  NETWORK__currentSubgraphDeploymentRelation?: Maybe<Network__CurrentSubgraphDeploymentRelation>;
  NETWORK__currentSubgraphDeploymentRelations: Array<Network__CurrentSubgraphDeploymentRelation>;
  NETWORK__delegatedStake?: Maybe<Network__DelegatedStake>;
  NETWORK__delegatedStakes: Array<Network__DelegatedStake>;
  NETWORK__delegator?: Maybe<Network__Delegator>;
  NETWORK__delegators: Array<Network__Delegator>;
  NETWORK__dispute?: Maybe<Network__Dispute>;
  NETWORK__disputes: Array<Network__Dispute>;
  NETWORK__epoch?: Maybe<Network__Epoch>;
  NETWORK__epoches: Array<Network__Epoch>;
  NETWORK__graphAccount?: Maybe<Network__GraphAccount>;
  NETWORK__graphAccountName?: Maybe<Network__GraphAccountName>;
  NETWORK__graphAccountNames: Array<Network__GraphAccountName>;
  NETWORK__graphAccounts: Array<Network__GraphAccount>;
  NETWORK__graphNetwork?: Maybe<Network__GraphNetwork>;
  NETWORK__graphNetworks: Array<Network__GraphNetwork>;
  NETWORK__indexer?: Maybe<Network__Indexer>;
  NETWORK__indexers: Array<Network__Indexer>;
  NETWORK__nameSignal?: Maybe<Network__NameSignal>;
  NETWORK__nameSignalSubgraphRelation?: Maybe<Network__NameSignalSubgraphRelation>;
  NETWORK__nameSignalSubgraphRelations: Array<Network__NameSignalSubgraphRelation>;
  NETWORK__nameSignalTransaction?: Maybe<Network__NameSignalTransaction>;
  NETWORK__nameSignalTransactions: Array<Network__NameSignalTransaction>;
  NETWORK__nameSignals: Array<Network__NameSignal>;
  NETWORK__network?: Maybe<Network__Network>;
  NETWORK__networks: Array<Network__Network>;
  NETWORK__pool?: Maybe<Network__Pool>;
  NETWORK__pools: Array<Network__Pool>;
  NETWORK__signal?: Maybe<Network__Signal>;
  NETWORK__signalTransaction?: Maybe<Network__SignalTransaction>;
  NETWORK__signalTransactions: Array<Network__SignalTransaction>;
  NETWORK__signals: Array<Network__Signal>;
  NETWORK__subgraph?: Maybe<Network__Subgraph>;
  NETWORK__subgraphCategories: Array<Network__SubgraphCategory>;
  NETWORK__subgraphCategory?: Maybe<Network__SubgraphCategory>;
  NETWORK__subgraphCategoryRelation?: Maybe<Network__SubgraphCategoryRelation>;
  NETWORK__subgraphCategoryRelations: Array<Network__SubgraphCategoryRelation>;
  NETWORK__subgraphDeployment?: Maybe<Network__SubgraphDeployment>;
  NETWORK__subgraphDeployments: Array<Network__SubgraphDeployment>;
  NETWORK__subgraphVersion?: Maybe<Network__SubgraphVersion>;
  NETWORK__subgraphVersions: Array<Network__SubgraphVersion>;
  NETWORK__subgraphs: Array<Network__Subgraph>;
  NETWORK__tokenLockWallet?: Maybe<Network__TokenLockWallet>;
  NETWORK__tokenLockWallets: Array<Network__TokenLockWallet>;
  NETWORK__tokenManager?: Maybe<Network__TokenManager>;
  NETWORK__tokenManagers: Array<Network__TokenManager>;
  NETWORK__transaction?: Maybe<Network__Transaction>;
  NETWORK__transactions: Array<Network__Transaction>;
};


export type SubscriptionAnalytics___MetaArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
};


export type SubscriptionAnalytics__AllocationArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__AllocationsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__Allocation_Filter>;
};


export type SubscriptionAnalytics__CuratorArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__CuratorsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Curator_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__Curator_Filter>;
};


export type SubscriptionAnalytics__DelegatedStakeArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__DelegatedStakeDailyDataArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__DelegatedStakeDailyDatasArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__DelegatedStakeDailyData_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__DelegatedStakeDailyData_Filter>;
};


export type SubscriptionAnalytics__DelegatedStakesArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__DelegatedStake_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__DelegatedStake_Filter>;
};


export type SubscriptionAnalytics__DelegatorArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__DelegatorDailyDataArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__DelegatorDailyDatasArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__DelegatorDailyData_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__DelegatorDailyData_Filter>;
};


export type SubscriptionAnalytics__DelegatorDelegatedStakeDailyRelationArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__DelegatorDelegatedStakeDailyRelationsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__DelegatorDelegatedStakeDailyRelation_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__DelegatorDelegatedStakeDailyRelation_Filter>;
};


export type SubscriptionAnalytics__DelegatorsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Delegator_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__Delegator_Filter>;
};


export type SubscriptionAnalytics__GraphAccountArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__GraphAccountNameArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__GraphAccountNamesArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__GraphAccountName_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__GraphAccountName_Filter>;
};


export type SubscriptionAnalytics__GraphAccountsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__GraphAccount_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__GraphAccount_Filter>;
};


export type SubscriptionAnalytics__GraphNetworkArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__GraphNetworkDailyDataArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__GraphNetworkDailyDatasArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__GraphNetworkDailyData_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__GraphNetworkDailyData_Filter>;
};


export type SubscriptionAnalytics__GraphNetworksArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__GraphNetwork_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__GraphNetwork_Filter>;
};


export type SubscriptionAnalytics__IndexerArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__IndexerDailyDataArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__IndexerDailyDatasArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__IndexerDailyData_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__IndexerDailyData_Filter>;
};


export type SubscriptionAnalytics__IndexerDelegatedStakeRelationArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__IndexerDelegatedStakeRelationsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__IndexerDelegatedStakeRelation_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__IndexerDelegatedStakeRelation_Filter>;
};


export type SubscriptionAnalytics__IndexersArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Indexer_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__Indexer_Filter>;
};


export type SubscriptionAnalytics__NameSignalArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__NameSignalTransactionArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__NameSignalTransactionsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__NameSignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__NameSignalTransaction_Filter>;
};


export type SubscriptionAnalytics__NameSignalsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__NameSignal_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__NameSignal_Filter>;
};


export type SubscriptionAnalytics__PoolArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__PoolsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Pool_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__Pool_Filter>;
};


export type SubscriptionAnalytics__SignalArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__SignalTransactionArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__SignalTransactionsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__SignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__SignalTransaction_Filter>;
};


export type SubscriptionAnalytics__SignalsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Signal_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__Signal_Filter>;
};


export type SubscriptionAnalytics__SubgraphArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__SubgraphDeploymentArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__SubgraphDeploymentDailyDataArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__SubgraphDeploymentDailyDatasArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__SubgraphDeploymentDailyData_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__SubgraphDeploymentDailyData_Filter>;
};


export type SubscriptionAnalytics__SubgraphDeploymentsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__SubgraphDeployment_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__SubgraphDeployment_Filter>;
};


export type SubscriptionAnalytics__SubgraphVersionArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__SubgraphVersionsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__SubgraphVersion_Filter>;
};


export type SubscriptionAnalytics__SubgraphsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Subgraph_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__Subgraph_Filter>;
};


export type SubscriptionAnalytics__TransactionArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Analytics___SubgraphErrorPolicy_;
};


export type SubscriptionAnalytics__TransactionsArgs = {
  block?: InputMaybe<Analytics__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Analytics__Transaction_OrderBy>;
  orderDirection?: InputMaybe<Analytics__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Analytics___SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics__Transaction_Filter>;
};


export type SubscriptionBilling___MetaArgs = {
  block?: InputMaybe<Billing__Block_Height>;
};


export type SubscriptionBilling__BillingArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Billing___SubgraphErrorPolicy_;
};


export type SubscriptionBilling__BillingDailyDataArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Billing___SubgraphErrorPolicy_;
};


export type SubscriptionBilling__BillingDailyDatasArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__BillingDailyData_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Billing___SubgraphErrorPolicy_;
  where?: InputMaybe<Billing__BillingDailyData_Filter>;
};


export type SubscriptionBilling__BillingsArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__Billing_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Billing___SubgraphErrorPolicy_;
  where?: InputMaybe<Billing__Billing_Filter>;
};


export type SubscriptionBilling__TokensAddedArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Billing___SubgraphErrorPolicy_;
};


export type SubscriptionBilling__TokensAddedsArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__TokensAdded_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Billing___SubgraphErrorPolicy_;
  where?: InputMaybe<Billing__TokensAdded_Filter>;
};


export type SubscriptionBilling__TokensPulledArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Billing___SubgraphErrorPolicy_;
};


export type SubscriptionBilling__TokensPulledsArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__TokensPulled_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Billing___SubgraphErrorPolicy_;
  where?: InputMaybe<Billing__TokensPulled_Filter>;
};


export type SubscriptionBilling__TokensRemovedArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Billing___SubgraphErrorPolicy_;
};


export type SubscriptionBilling__TokensRemovedsArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__TokensRemoved_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Billing___SubgraphErrorPolicy_;
  where?: InputMaybe<Billing__TokensRemoved_Filter>;
};


export type SubscriptionBilling__TransactionArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Billing___SubgraphErrorPolicy_;
};


export type SubscriptionBilling__TransactionsArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__Transaction_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Billing___SubgraphErrorPolicy_;
  where?: InputMaybe<Billing__Transaction_Filter>;
};


export type SubscriptionBilling__UserArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Billing___SubgraphErrorPolicy_;
};


export type SubscriptionBilling__UserDailyDataArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Billing___SubgraphErrorPolicy_;
};


export type SubscriptionBilling__UserDailyDatasArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__UserDailyData_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Billing___SubgraphErrorPolicy_;
  where?: InputMaybe<Billing__UserDailyData_Filter>;
};


export type SubscriptionBilling__UsersArgs = {
  block?: InputMaybe<Billing__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Billing__User_OrderBy>;
  orderDirection?: InputMaybe<Billing__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Billing___SubgraphErrorPolicy_;
  where?: InputMaybe<Billing__User_Filter>;
};


export type SubscriptionEns___MetaArgs = {
  block?: InputMaybe<Ens__Block_Height>;
};


export type SubscriptionEns__AbiChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__AbiChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__AbiChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__AbiChanged_Filter>;
};


export type SubscriptionEns__AccountArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__AccountsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__Account_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__Account_Filter>;
};


export type SubscriptionEns__AddrChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__AddrChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__AddrChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__AddrChanged_Filter>;
};


export type SubscriptionEns__AuthorisationChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__AuthorisationChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__AuthorisationChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__AuthorisationChanged_Filter>;
};


export type SubscriptionEns__ContenthashChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__ContenthashChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__ContenthashChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__ContenthashChanged_Filter>;
};


export type SubscriptionEns__DomainArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__DomainEventArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__DomainEventsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__DomainEvent_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__DomainEvent_Filter>;
};


export type SubscriptionEns__DomainsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__Domain_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__Domain_Filter>;
};


export type SubscriptionEns__InterfaceChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__InterfaceChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__InterfaceChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__InterfaceChanged_Filter>;
};


export type SubscriptionEns__MulticoinAddrChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__MulticoinAddrChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__MulticoinAddrChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__MulticoinAddrChanged_Filter>;
};


export type SubscriptionEns__NameChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__NameChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__NameChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__NameChanged_Filter>;
};


export type SubscriptionEns__NameRegisteredArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__NameRegisteredsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__NameRegistered_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__NameRegistered_Filter>;
};


export type SubscriptionEns__NameRenewedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__NameRenewedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__NameRenewed_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__NameRenewed_Filter>;
};


export type SubscriptionEns__NameTransferredArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__NameTransferredsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__NameTransferred_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__NameTransferred_Filter>;
};


export type SubscriptionEns__NewOwnerArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__NewOwnersArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__NewOwner_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__NewOwner_Filter>;
};


export type SubscriptionEns__NewResolverArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__NewResolversArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__NewResolver_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__NewResolver_Filter>;
};


export type SubscriptionEns__NewTtlArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__NewTtLsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__NewTtl_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__NewTtl_Filter>;
};


export type SubscriptionEns__PubkeyChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__PubkeyChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__PubkeyChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__PubkeyChanged_Filter>;
};


export type SubscriptionEns__RegistrationArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__RegistrationEventArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__RegistrationEventsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__RegistrationEvent_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__RegistrationEvent_Filter>;
};


export type SubscriptionEns__RegistrationsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__Registration_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__Registration_Filter>;
};


export type SubscriptionEns__ResolverArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__ResolverEventArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__ResolverEventsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__ResolverEvent_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__ResolverEvent_Filter>;
};


export type SubscriptionEns__ResolversArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__Resolver_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__Resolver_Filter>;
};


export type SubscriptionEns__TextChangedArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__TextChangedsArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__TextChanged_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__TextChanged_Filter>;
};


export type SubscriptionEns__TransferArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Ens___SubgraphErrorPolicy_;
};


export type SubscriptionEns__TransfersArgs = {
  block?: InputMaybe<Ens__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ens__Transfer_OrderBy>;
  orderDirection?: InputMaybe<Ens__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Ens___SubgraphErrorPolicy_;
  where?: InputMaybe<Ens__Transfer_Filter>;
};


export type SubscriptionNetwork___MetaArgs = {
  block?: InputMaybe<Network__Block_Height>;
};


export type SubscriptionNetwork__AllocationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__AllocationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Allocation_Filter>;
};


export type SubscriptionNetwork__AttestationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__AttestationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Attestation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Attestation_Filter>;
};


export type SubscriptionNetwork__AuthorizedFunctionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__AuthorizedFunctionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__AuthorizedFunction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__AuthorizedFunction_Filter>;
};


export type SubscriptionNetwork__CuratorArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__CuratorsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Curator_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Curator_Filter>;
};


export type SubscriptionNetwork__CurrentSubgraphDeploymentRelationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__CurrentSubgraphDeploymentRelationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__CurrentSubgraphDeploymentRelation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__CurrentSubgraphDeploymentRelation_Filter>;
};


export type SubscriptionNetwork__DelegatedStakeArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__DelegatedStakesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__DelegatedStake_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__DelegatedStake_Filter>;
};


export type SubscriptionNetwork__DelegatorArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__DelegatorsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Delegator_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Delegator_Filter>;
};


export type SubscriptionNetwork__DisputeArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__DisputesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Dispute_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Dispute_Filter>;
};


export type SubscriptionNetwork__EpochArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__EpochesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Epoch_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Epoch_Filter>;
};


export type SubscriptionNetwork__GraphAccountArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__GraphAccountNameArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__GraphAccountNamesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__GraphAccountName_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__GraphAccountName_Filter>;
};


export type SubscriptionNetwork__GraphAccountsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__GraphAccount_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__GraphAccount_Filter>;
};


export type SubscriptionNetwork__GraphNetworkArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__GraphNetworksArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__GraphNetwork_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__GraphNetwork_Filter>;
};


export type SubscriptionNetwork__IndexerArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__IndexersArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Indexer_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Indexer_Filter>;
};


export type SubscriptionNetwork__NameSignalArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__NameSignalSubgraphRelationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__NameSignalSubgraphRelationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__NameSignalSubgraphRelation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__NameSignalSubgraphRelation_Filter>;
};


export type SubscriptionNetwork__NameSignalTransactionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__NameSignalTransactionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__NameSignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__NameSignalTransaction_Filter>;
};


export type SubscriptionNetwork__NameSignalsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__NameSignal_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__NameSignal_Filter>;
};


export type SubscriptionNetwork__NetworkArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__NetworksArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Network_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Network_Filter>;
};


export type SubscriptionNetwork__PoolArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__PoolsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Pool_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Pool_Filter>;
};


export type SubscriptionNetwork__SignalArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__SignalTransactionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__SignalTransactionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__SignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SignalTransaction_Filter>;
};


export type SubscriptionNetwork__SignalsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Signal_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Signal_Filter>;
};


export type SubscriptionNetwork__SubgraphArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__SubgraphCategoriesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__SubgraphCategory_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SubgraphCategory_Filter>;
};


export type SubscriptionNetwork__SubgraphCategoryArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__SubgraphCategoryRelationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__SubgraphCategoryRelationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__SubgraphCategoryRelation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SubgraphCategoryRelation_Filter>;
};


export type SubscriptionNetwork__SubgraphDeploymentArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__SubgraphDeploymentsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__SubgraphDeployment_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SubgraphDeployment_Filter>;
};


export type SubscriptionNetwork__SubgraphVersionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__SubgraphVersionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SubgraphVersion_Filter>;
};


export type SubscriptionNetwork__SubgraphsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Subgraph_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Subgraph_Filter>;
};


export type SubscriptionNetwork__TokenLockWalletArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__TokenLockWalletsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__TokenLockWallet_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__TokenLockWallet_Filter>;
};


export type SubscriptionNetwork__TokenManagerArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__TokenManagersArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__TokenManager_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__TokenManager_Filter>;
};


export type SubscriptionNetwork__TransactionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};


export type SubscriptionNetwork__TransactionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Network__Transaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Transaction_Filter>;
};

export type MetaQueryVariables = Exact<{ [key: string]: never; }>;


export type MetaQuery = { __typename?: 'Query', meta?: { __typename?: 'NETWORK___Meta_', block: { __typename?: 'NETWORK___Block_', hash?: string | null, timestamp?: number | null, number: number } } | null };


export const MetaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"meta"},"name":{"kind":"Name","value":"NETWORK___meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]}}]}}]} as unknown as DocumentNode<MetaQuery, MetaQueryVariables>;