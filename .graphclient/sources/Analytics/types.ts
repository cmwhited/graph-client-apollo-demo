// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace AnalyticsTypes {
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
  ANALYTICS__BigDecimal: any;
  BigInt: any;
  ANALYTICS__Bytes: any;
};

/**
 * A state channel Allocation representing a single Indexer-SubgraphDeployment stake
 *
 */
export type ANALYTICS__Allocation = {
  /** Channel Address */
  id: Scalars['ID'];
  /** Indexer of this allocation */
  indexer: ANALYTICS__Indexer;
  /** Creator of the allocation - can be the operator or the indexer */
  creator: Scalars['ANALYTICS__Bytes'];
  /** If the Allocation is active it shows the indexer. If closed, it is null */
  activeForIndexer?: Maybe<ANALYTICS__Indexer>;
  /** Subgraph deployment that is being allocated to */
  subgraphDeployment: ANALYTICS__SubgraphDeployment;
  /** Tokens allocation in this allocation */
  allocatedTokens: Scalars['BigInt'];
  /** Effective allocation that is realized upon closing */
  effectiveAllocation: Scalars['BigInt'];
  /** Epoch this allocation was created */
  createdAtEpoch: Scalars['Int'];
  /** Block at which this allocation was created */
  createdAtBlockHash: Scalars['ANALYTICS__Bytes'];
  /** Epoch this allocation was closed in */
  closedAtEpoch: Scalars['Int'];
  /** Block hash at which this allocation was closed */
  closedAtBlockHash?: Maybe<Scalars['ANALYTICS__Bytes']>;
  /** Block number at which this allocation was closed */
  closedAtBlockNumber?: Maybe<Scalars['Int']>;
  /** Fees this allocation collected from query fees upon closing. Excludes curator reward and protocol tax */
  queryFeesCollected: Scalars['BigInt'];
  /** Query fee rebate amount claimed from the protocol through cobbs douglas. Does not include portion given to delegators */
  queryFeeRebates: Scalars['BigInt'];
  /** Curator rewards deposited to the curating bonding curve */
  curatorRewards: Scalars['BigInt'];
  /** Indexing rewards earned by this allocation. Includes delegator and indexer rewards */
  indexingRewards: Scalars['BigInt'];
  /** Indexing rewards earned by this allocation by indexers */
  indexingIndexerRewards: Scalars['BigInt'];
  /** Indexing rewards earned by this allocation by delegators */
  indexingDelegatorRewards: Scalars['BigInt'];
  /** Pool in which this allocation was closed */
  poolClosedIn?: Maybe<ANALYTICS__Pool>;
  /** Fees paid out to delegators */
  delegationFees: Scalars['BigInt'];
  /** Status of the allocation */
  status: ANALYTICS__AllocationStatus;
  /** Timestamp this allocation was created at */
  createdAt: Scalars['Int'];
  /** POI submitted with a closed allocation */
  poi?: Maybe<Scalars['ANALYTICS__Bytes']>;
  /** NOT IMPLEMENTED - Return for this allocation */
  totalReturn: Scalars['ANALYTICS__BigDecimal'];
  /** NOT IMPLEMENTED - Yearly annualzied return */
  annualizedReturn: Scalars['ANALYTICS__BigDecimal'];
};

export type ANALYTICS__AllocationStatus =
  | 'Null'
  | 'Active'
  | 'Closed'
  | 'Finalized'
  | 'Claimed';

export type ANALYTICS__Allocation_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<ANALYTICS__Indexer_filter>;
  creator?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creator_not?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creator_gt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creator_lt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creator_gte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creator_lte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creator_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  creator_not_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  creator_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creator_not_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  activeForIndexer?: InputMaybe<Scalars['String']>;
  activeForIndexer_not?: InputMaybe<Scalars['String']>;
  activeForIndexer_gt?: InputMaybe<Scalars['String']>;
  activeForIndexer_lt?: InputMaybe<Scalars['String']>;
  activeForIndexer_gte?: InputMaybe<Scalars['String']>;
  activeForIndexer_lte?: InputMaybe<Scalars['String']>;
  activeForIndexer_in?: InputMaybe<Array<Scalars['String']>>;
  activeForIndexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  activeForIndexer_contains?: InputMaybe<Scalars['String']>;
  activeForIndexer_contains_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_contains?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_starts_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_starts_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_ends_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_ends_with?: InputMaybe<Scalars['String']>;
  activeForIndexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activeForIndexer_?: InputMaybe<ANALYTICS__Indexer_filter>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<ANALYTICS__SubgraphDeployment_filter>;
  allocatedTokens?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  effectiveAllocation?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_not?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_gt?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_lt?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_gte?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_lte?: InputMaybe<Scalars['BigInt']>;
  effectiveAllocation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  effectiveAllocation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtEpoch?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_not?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_gt?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_lt?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_gte?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_lte?: InputMaybe<Scalars['Int']>;
  createdAtEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtBlockHash?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  createdAtBlockHash_not?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  createdAtBlockHash_gt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  createdAtBlockHash_lt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  createdAtBlockHash_gte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  createdAtBlockHash_lte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  createdAtBlockHash_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  createdAtBlockHash_not_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  createdAtBlockHash_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  createdAtBlockHash_not_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtEpoch?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_not?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_gt?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_lt?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_gte?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_lte?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtBlockHash?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtBlockHash_not?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtBlockHash_gt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtBlockHash_lt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtBlockHash_gte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtBlockHash_lte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtBlockHash_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  closedAtBlockHash_not_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  closedAtBlockHash_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtBlockHash_not_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  closedAtBlockNumber?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_not?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_gt?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_lt?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_gte?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_lte?: InputMaybe<Scalars['Int']>;
  closedAtBlockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorRewards?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewards?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewards?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewards?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolClosedIn?: InputMaybe<Scalars['String']>;
  poolClosedIn_not?: InputMaybe<Scalars['String']>;
  poolClosedIn_gt?: InputMaybe<Scalars['String']>;
  poolClosedIn_lt?: InputMaybe<Scalars['String']>;
  poolClosedIn_gte?: InputMaybe<Scalars['String']>;
  poolClosedIn_lte?: InputMaybe<Scalars['String']>;
  poolClosedIn_in?: InputMaybe<Array<Scalars['String']>>;
  poolClosedIn_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolClosedIn_contains?: InputMaybe<Scalars['String']>;
  poolClosedIn_contains_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_contains?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_starts_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_starts_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_ends_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_ends_with?: InputMaybe<Scalars['String']>;
  poolClosedIn_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolClosedIn_?: InputMaybe<ANALYTICS__Pool_filter>;
  delegationFees?: InputMaybe<Scalars['BigInt']>;
  delegationFees_not?: InputMaybe<Scalars['BigInt']>;
  delegationFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegationFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegationFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegationFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegationFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<ANALYTICS__AllocationStatus>;
  status_not?: InputMaybe<ANALYTICS__AllocationStatus>;
  status_in?: InputMaybe<Array<ANALYTICS__AllocationStatus>>;
  status_not_in?: InputMaybe<Array<ANALYTICS__AllocationStatus>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  poi?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  poi_not?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  poi_gt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  poi_lt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  poi_gte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  poi_lte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  poi_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  poi_not_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  poi_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  poi_not_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  totalReturn?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  annualizedReturn?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__Allocation_orderBy =
  | 'id'
  | 'indexer'
  | 'creator'
  | 'activeForIndexer'
  | 'subgraphDeployment'
  | 'allocatedTokens'
  | 'effectiveAllocation'
  | 'createdAtEpoch'
  | 'createdAtBlockHash'
  | 'closedAtEpoch'
  | 'closedAtBlockHash'
  | 'closedAtBlockNumber'
  | 'queryFeesCollected'
  | 'queryFeeRebates'
  | 'curatorRewards'
  | 'indexingRewards'
  | 'indexingIndexerRewards'
  | 'indexingDelegatorRewards'
  | 'poolClosedIn'
  | 'delegationFees'
  | 'status'
  | 'createdAt'
  | 'poi'
  | 'totalReturn'
  | 'annualizedReturn';

export type ANALYTICS__BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type ANALYTICS__Block_height = {
  hash?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/**
 * Curator with all Signals and metrics
 *
 */
export type ANALYTICS__Curator = {
  /** Eth address of the Curator */
  id: Scalars['ID'];
  /** Time this curator was created */
  createdAt: Scalars['Int'];
  /** CUMULATIVE tokens signalled on all the subgraphs */
  totalSignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens unsignalled on all the subgraphs */
  totalUnsignalledTokens: Scalars['BigInt'];
  /** Subgraphs the curator is curating */
  signals: Array<ANALYTICS__Signal>;
  /** CUMULATIVE tokens signalled on all names */
  totalNameSignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens unsignalled on all names */
  totalNameUnsignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE withdrawn tokens from deprecated subgraphs */
  totalWithdrawnTokens: Scalars['BigInt'];
  /** Subgraphs the curator is curating */
  nameSignals: Array<ANALYTICS__NameSignal>;
  /** NOT IMPLEMENTED - Summation of realized rewards from all Signals */
  realizedRewards: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Annualized rate of return on curator signal */
  annualizedReturn: Scalars['ANALYTICS__BigDecimal'];
  /** NOT IMPLEMENTED - Total return of the curator */
  totalReturn: Scalars['ANALYTICS__BigDecimal'];
  /** NOT IMPLEMENTED - Signaling efficiency of the curator */
  signalingEfficiency: Scalars['ANALYTICS__BigDecimal'];
  /** CURRENT summed name signal for all bonding curves */
  totalNameSignal: Scalars['ANALYTICS__BigDecimal'];
  /** Total curator cost basis of all shares purchased on all bonding curves */
  totalNameSignalAverageCostBasis: Scalars['ANALYTICS__BigDecimal'];
  /** totalNameSignalCostBasis / totalNameSignal */
  totalAverageCostBasisPerNameSignal: Scalars['ANALYTICS__BigDecimal'];
};


/**
 * Curator with all Signals and metrics
 *
 */
export type ANALYTICS__CuratorsignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Signal_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Signal_filter>;
};


/**
 * Curator with all Signals and metrics
 *
 */
export type ANALYTICS__CuratornameSignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__NameSignal_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__NameSignal_filter>;
};

export type ANALYTICS__Curator_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signals_?: InputMaybe<ANALYTICS__Signal_filter>;
  totalNameSignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalNameSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNameSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNameUnsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalNameUnsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalNameUnsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalWithdrawnTokens?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalWithdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalWithdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignals_?: InputMaybe<ANALYTICS__NameSignal_filter>;
  realizedRewards?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  annualizedReturn?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalReturn?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalReturn_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  signalingEfficiency?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  signalingEfficiency_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  signalingEfficiency_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  signalingEfficiency_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  signalingEfficiency_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  signalingEfficiency_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  signalingEfficiency_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  signalingEfficiency_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalNameSignal?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignal_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignal_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignal_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignal_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignal_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignal_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalNameSignal_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalNameSignalAverageCostBasis?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignalAverageCostBasis_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignalAverageCostBasis_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignalAverageCostBasis_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignalAverageCostBasis_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignalAverageCostBasis_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalNameSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalNameSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalAverageCostBasisPerNameSignal?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalAverageCostBasisPerNameSignal_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__Curator_orderBy =
  | 'id'
  | 'createdAt'
  | 'totalSignalledTokens'
  | 'totalUnsignalledTokens'
  | 'signals'
  | 'totalNameSignalledTokens'
  | 'totalNameUnsignalledTokens'
  | 'totalWithdrawnTokens'
  | 'nameSignals'
  | 'realizedRewards'
  | 'annualizedReturn'
  | 'totalReturn'
  | 'signalingEfficiency'
  | 'totalNameSignal'
  | 'totalNameSignalAverageCostBasis'
  | 'totalAverageCostBasisPerNameSignal';

/**
 * Delegator stake for a single Indexer
 *
 */
export type ANALYTICS__DelegatedStake = {
  /** Concatenation of Delegator address and Indexer address */
  id: Scalars['ID'];
  /** Index the stake is delegated to */
  indexer: ANALYTICS__Indexer;
  /** Delegator */
  delegator: ANALYTICS__Delegator;
  /** [POSSIBLE DEPRECATION] CURRENT tokens staked. Old stakedTokens implementation renamed to totalStakedTokens (19/03/21) */
  stakedTokens: Scalars['BigInt'];
  /** CURRENT tokens locked */
  lockedTokens: Scalars['BigInt'];
  /** Epoch the locked tokens get unlocked */
  lockedUntil: Scalars['Int'];
  /** Shares owned in the delegator pool. Used to calculate total amount delegated */
  shareAmount: Scalars['BigInt'];
  /** The rate this delegator paid for their shares (calculated using average cost basis). Used for rewards calculations */
  personalExchangeRate: Scalars['ANALYTICS__BigDecimal'];
  /** Realized rewards from undelegating and realizing a reward */
  realizedRewards: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Latest known value for share exchange rate. Should reflect the same value as 'delegationExchangeRate' on the related Indexer */
  latestIndexerExchangeRate: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Rewards not yet withdrawn, but already distributed. */
  unrealizedRewards: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Original value of the delegation shares. Should be sharesAmount * personalExchangeRate */
  originalDelegation: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Current value of the delegation shares. Should be sharesAmount * latestIndexerExchangeRate */
  currentDelegation: Scalars['ANALYTICS__BigDecimal'];
  /** CUMULATIVE tokens delegated */
  totalStakedTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens undelegated */
  totalUnstakedTokens: Scalars['BigInt'];
  /** Time this delegator first delegated to an indexer */
  createdAt: Scalars['Int'];
  /** Last time this delegator delegated towards this indexer */
  lastDelegatedAt?: Maybe<Scalars['Int']>;
  /** Last time this delegator undelegated from this indexer */
  lastUndelegatedAt?: Maybe<Scalars['Int']>;
  /** Auxiliary entity used for batch updates */
  relation: ANALYTICS__IndexerDelegatedStakeRelation;
};

export type ANALYTICS__DelegatedStakeDailyData = {
  /** <DELEGATOR ADDRESS>-<INDEXER ADDRESS>-<DAY NUMBER> */
  id: Scalars['ID'];
  /** Timestamp for the start of the day that this entity represents. UTC+0 */
  dayStart: Scalars['BigInt'];
  /** Timestamp for the end of the day that this entity represents. UTC+0 */
  dayEnd: Scalars['BigInt'];
  /** Number of the day this entity represents. Day 0 is the network launch day. */
  dayNumber: Scalars['Int'];
  /** Original entity that this daily data tracks */
  stake: ANALYTICS__DelegatedStake;
  /** Delegator entity that owns the original entity */
  delegator: ANALYTICS__Delegator;
  /** Indexer entity where the delegation resides */
  indexer: ANALYTICS__Indexer;
  /** [CURRENT] Amount of staked tokens for this day and this indexer */
  stakedTokens: Scalars['BigInt'];
  /** [CURRENT] Amount of locked tokens (undelegating) for this day and this indexer */
  lockedTokens: Scalars['BigInt'];
  /** [CURRENT] Amount of shares for this day and this indexer */
  shareAmount: Scalars['BigInt'];
  /** [CURRENT] Initial exchange rate for this delegator in this indexer at this day. It will increase as an average cost basis if the delegator adds more delegation. */
  personalExchangeRate: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Latest delegationExchangeRate value for the indexer */
  latestIndexerExchangeRate: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Unrealized rewards for the delegator on this particular stake */
  unrealizedRewards: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Realized rewards for the delegator on this particular stake */
  realizedRewards: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Original delegation for the delegator on this particular stake */
  originalDelegation: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Current delegation for the delegator on this particular stake */
  currentDelegation: Scalars['ANALYTICS__BigDecimal'];
};

export type ANALYTICS__DelegatedStakeDailyData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  dayStart?: InputMaybe<Scalars['BigInt']>;
  dayStart_not?: InputMaybe<Scalars['BigInt']>;
  dayStart_gt?: InputMaybe<Scalars['BigInt']>;
  dayStart_lt?: InputMaybe<Scalars['BigInt']>;
  dayStart_gte?: InputMaybe<Scalars['BigInt']>;
  dayStart_lte?: InputMaybe<Scalars['BigInt']>;
  dayStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayNumber?: InputMaybe<Scalars['Int']>;
  dayNumber_not?: InputMaybe<Scalars['Int']>;
  dayNumber_gt?: InputMaybe<Scalars['Int']>;
  dayNumber_lt?: InputMaybe<Scalars['Int']>;
  dayNumber_gte?: InputMaybe<Scalars['Int']>;
  dayNumber_lte?: InputMaybe<Scalars['Int']>;
  dayNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  dayNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stake?: InputMaybe<Scalars['String']>;
  stake_not?: InputMaybe<Scalars['String']>;
  stake_gt?: InputMaybe<Scalars['String']>;
  stake_lt?: InputMaybe<Scalars['String']>;
  stake_gte?: InputMaybe<Scalars['String']>;
  stake_lte?: InputMaybe<Scalars['String']>;
  stake_in?: InputMaybe<Array<Scalars['String']>>;
  stake_not_in?: InputMaybe<Array<Scalars['String']>>;
  stake_contains?: InputMaybe<Scalars['String']>;
  stake_contains_nocase?: InputMaybe<Scalars['String']>;
  stake_not_contains?: InputMaybe<Scalars['String']>;
  stake_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stake_starts_with?: InputMaybe<Scalars['String']>;
  stake_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stake_not_starts_with?: InputMaybe<Scalars['String']>;
  stake_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stake_ends_with?: InputMaybe<Scalars['String']>;
  stake_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stake_not_ends_with?: InputMaybe<Scalars['String']>;
  stake_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stake_?: InputMaybe<ANALYTICS__DelegatedStake_filter>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<ANALYTICS__Delegator_filter>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<ANALYTICS__Indexer_filter>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shareAmount?: InputMaybe<Scalars['BigInt']>;
  shareAmount_not?: InputMaybe<Scalars['BigInt']>;
  shareAmount_gt?: InputMaybe<Scalars['BigInt']>;
  shareAmount_lt?: InputMaybe<Scalars['BigInt']>;
  shareAmount_gte?: InputMaybe<Scalars['BigInt']>;
  shareAmount_lte?: InputMaybe<Scalars['BigInt']>;
  shareAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shareAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  personalExchangeRate?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  personalExchangeRate_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  latestIndexerExchangeRate?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  latestIndexerExchangeRate_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  unrealizedRewards?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  unrealizedRewards_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  realizedRewards?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  originalDelegation?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  originalDelegation_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  currentDelegation?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  currentDelegation_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__DelegatedStakeDailyData_orderBy =
  | 'id'
  | 'dayStart'
  | 'dayEnd'
  | 'dayNumber'
  | 'stake'
  | 'delegator'
  | 'indexer'
  | 'stakedTokens'
  | 'lockedTokens'
  | 'shareAmount'
  | 'personalExchangeRate'
  | 'latestIndexerExchangeRate'
  | 'unrealizedRewards'
  | 'realizedRewards'
  | 'originalDelegation'
  | 'currentDelegation';

export type ANALYTICS__DelegatedStake_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<ANALYTICS__Indexer_filter>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<ANALYTICS__Delegator_filter>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedUntil?: InputMaybe<Scalars['Int']>;
  lockedUntil_not?: InputMaybe<Scalars['Int']>;
  lockedUntil_gt?: InputMaybe<Scalars['Int']>;
  lockedUntil_lt?: InputMaybe<Scalars['Int']>;
  lockedUntil_gte?: InputMaybe<Scalars['Int']>;
  lockedUntil_lte?: InputMaybe<Scalars['Int']>;
  lockedUntil_in?: InputMaybe<Array<Scalars['Int']>>;
  lockedUntil_not_in?: InputMaybe<Array<Scalars['Int']>>;
  shareAmount?: InputMaybe<Scalars['BigInt']>;
  shareAmount_not?: InputMaybe<Scalars['BigInt']>;
  shareAmount_gt?: InputMaybe<Scalars['BigInt']>;
  shareAmount_lt?: InputMaybe<Scalars['BigInt']>;
  shareAmount_gte?: InputMaybe<Scalars['BigInt']>;
  shareAmount_lte?: InputMaybe<Scalars['BigInt']>;
  shareAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shareAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  personalExchangeRate?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  personalExchangeRate_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  personalExchangeRate_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  realizedRewards?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  latestIndexerExchangeRate?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  latestIndexerExchangeRate_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  latestIndexerExchangeRate_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  unrealizedRewards?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  unrealizedRewards_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  unrealizedRewards_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  originalDelegation?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  originalDelegation_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  currentDelegation?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  currentDelegation_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalStakedTokens?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalStakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokens?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegatedAt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_not?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUndelegatedAt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_not?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUndelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  relation?: InputMaybe<Scalars['String']>;
  relation_not?: InputMaybe<Scalars['String']>;
  relation_gt?: InputMaybe<Scalars['String']>;
  relation_lt?: InputMaybe<Scalars['String']>;
  relation_gte?: InputMaybe<Scalars['String']>;
  relation_lte?: InputMaybe<Scalars['String']>;
  relation_in?: InputMaybe<Array<Scalars['String']>>;
  relation_not_in?: InputMaybe<Array<Scalars['String']>>;
  relation_contains?: InputMaybe<Scalars['String']>;
  relation_contains_nocase?: InputMaybe<Scalars['String']>;
  relation_not_contains?: InputMaybe<Scalars['String']>;
  relation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  relation_starts_with?: InputMaybe<Scalars['String']>;
  relation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  relation_not_starts_with?: InputMaybe<Scalars['String']>;
  relation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  relation_ends_with?: InputMaybe<Scalars['String']>;
  relation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  relation_not_ends_with?: InputMaybe<Scalars['String']>;
  relation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  relation_?: InputMaybe<ANALYTICS__IndexerDelegatedStakeRelation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__DelegatedStake_orderBy =
  | 'id'
  | 'indexer'
  | 'delegator'
  | 'stakedTokens'
  | 'lockedTokens'
  | 'lockedUntil'
  | 'shareAmount'
  | 'personalExchangeRate'
  | 'realizedRewards'
  | 'latestIndexerExchangeRate'
  | 'unrealizedRewards'
  | 'originalDelegation'
  | 'currentDelegation'
  | 'totalStakedTokens'
  | 'totalUnstakedTokens'
  | 'createdAt'
  | 'lastDelegatedAt'
  | 'lastUndelegatedAt'
  | 'relation';

/**
 * Delegator with all their delegated stakes towards Indexers
 *
 */
export type ANALYTICS__Delegator = {
  /** Delegator address */
  id: Scalars['ID'];
  account: ANALYTICS__GraphAccount;
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** Stakes of this delegator */
  stakes: Array<ANALYTICS__DelegatedStake>;
  /** Time created at */
  createdAt: Scalars['Int'];
  /** [POSSIBLE DEPRECATION] Current amount of staked tokens across all DelegatedStakes */
  stakedTokens: Scalars['BigInt'];
  /** Current amount of locked tokens (undelegating) across all DelegatedStakes */
  lockedTokens: Scalars['BigInt'];
  /** [CURRENT] Total realized rewards across all delegated stakes. Realized rewards are added when undelegating and realizing a profit */
  totalRealizedRewards: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Total unrealized rewards across all delegated stakes. */
  totalUnrealizedRewards: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Original amount delegated across all delegated stakes. */
  originalDelegation: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Current delegation amount across all delegated stakes. This is updated based on the continuous restake from delegation */
  currentDelegation: Scalars['ANALYTICS__BigDecimal'];
  /** List of all the daily data entities that exists for this delegator */
  dailyData: Array<ANALYTICS__DelegatorDailyData>;
  /** CUMULATIVE staked tokens in DelegatorStakes of this Delegator */
  totalStakedTokens: Scalars['BigInt'];
  /** CUMULATIVE unstaked tokens in DelegatorStakes of this Delegator */
  totalUnstakedTokens: Scalars['BigInt'];
  /** Total DelegatedStake entity count (Active and inactive) */
  stakesCount: Scalars['Int'];
  /** Active DelegatedStake entity count. Active means it still has GRT delegated */
  activeStakesCount: Scalars['Int'];
  /** Last time this delegator delegated towards any indexer */
  lastDelegatedAt?: Maybe<Scalars['Int']>;
  /** Last time this delegator undelegated from any indexer */
  lastUndelegatedAt?: Maybe<Scalars['Int']>;
  /** DelegatedStake entity related to the lastDelegatedAt field */
  lastDelegation?: Maybe<ANALYTICS__DelegatedStake>;
  /** DelegatedStake entity related to the lastUndelegatedAt field */
  lastUndelegation?: Maybe<ANALYTICS__DelegatedStake>;
};


/**
 * Delegator with all their delegated stakes towards Indexers
 *
 */
export type ANALYTICS__DelegatorstakesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__DelegatedStake_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__DelegatedStake_filter>;
};


/**
 * Delegator with all their delegated stakes towards Indexers
 *
 */
export type ANALYTICS__DelegatordailyDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__DelegatorDailyData_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__DelegatorDailyData_filter>;
};

export type ANALYTICS__DelegatorDailyData = {
  /** <DELEGATOR ADDRESS>-<DAY NUMBER> */
  id: Scalars['ID'];
  /** Timestamp for the start of the day that this entity represents. UTC+0 */
  dayStart: Scalars['BigInt'];
  /** Timestamp for the end of the day that this entity represents. UTC+0 */
  dayEnd: Scalars['BigInt'];
  /** Number of the day this entity represents. Day 0 is the network launch day. */
  dayNumber: Scalars['Int'];
  /** Original entity that this daily data tracks */
  delegator: ANALYTICS__Delegator;
  /** [CURRENT] Amount of staked tokens for this day across all stakes */
  stakedTokens: Scalars['BigInt'];
  /** [CURRENT] Amount of locked (undelegating) tokens for this day across all stakes */
  lockedTokens: Scalars['BigInt'];
  /** [CURRENT] Aggregation of unrealized rewards across all stakes */
  totalUnrealizedRewards: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Aggregation of realized rewards across all stakes */
  totalRealizedRewards: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Current delegation for the delegator across all stakes */
  currentDelegation: Scalars['ANALYTICS__BigDecimal'];
  /** [CURRENT] Total amount of DelegatedStake entities this Delegator historically had at this point in time */
  stakesCount: Scalars['Int'];
  /** [CURRENT] Amount of active DelegatedStake entities this Delegator had at this point in time */
  activeStakesCount: Scalars['Int'];
};

export type ANALYTICS__DelegatorDailyData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  dayStart?: InputMaybe<Scalars['BigInt']>;
  dayStart_not?: InputMaybe<Scalars['BigInt']>;
  dayStart_gt?: InputMaybe<Scalars['BigInt']>;
  dayStart_lt?: InputMaybe<Scalars['BigInt']>;
  dayStart_gte?: InputMaybe<Scalars['BigInt']>;
  dayStart_lte?: InputMaybe<Scalars['BigInt']>;
  dayStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayNumber?: InputMaybe<Scalars['Int']>;
  dayNumber_not?: InputMaybe<Scalars['Int']>;
  dayNumber_gt?: InputMaybe<Scalars['Int']>;
  dayNumber_lt?: InputMaybe<Scalars['Int']>;
  dayNumber_gte?: InputMaybe<Scalars['Int']>;
  dayNumber_lte?: InputMaybe<Scalars['Int']>;
  dayNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  dayNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<ANALYTICS__Delegator_filter>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnrealizedRewards?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalUnrealizedRewards_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalRealizedRewards?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalRealizedRewards_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  currentDelegation?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  currentDelegation_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  stakesCount?: InputMaybe<Scalars['Int']>;
  stakesCount_not?: InputMaybe<Scalars['Int']>;
  stakesCount_gt?: InputMaybe<Scalars['Int']>;
  stakesCount_lt?: InputMaybe<Scalars['Int']>;
  stakesCount_gte?: InputMaybe<Scalars['Int']>;
  stakesCount_lte?: InputMaybe<Scalars['Int']>;
  stakesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  stakesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeStakesCount?: InputMaybe<Scalars['Int']>;
  activeStakesCount_not?: InputMaybe<Scalars['Int']>;
  activeStakesCount_gt?: InputMaybe<Scalars['Int']>;
  activeStakesCount_lt?: InputMaybe<Scalars['Int']>;
  activeStakesCount_gte?: InputMaybe<Scalars['Int']>;
  activeStakesCount_lte?: InputMaybe<Scalars['Int']>;
  activeStakesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeStakesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__DelegatorDailyData_orderBy =
  | 'id'
  | 'dayStart'
  | 'dayEnd'
  | 'dayNumber'
  | 'delegator'
  | 'stakedTokens'
  | 'lockedTokens'
  | 'totalUnrealizedRewards'
  | 'totalRealizedRewards'
  | 'currentDelegation'
  | 'stakesCount'
  | 'activeStakesCount';

export type ANALYTICS__DelegatorDelegatedStakeDailyRelation = {
  /** Auxiliary entity to avoid using arrays for many-to-many relation tracking. Compounds the delegator id with an autoincremental number. */
  id: Scalars['ID'];
  /** Timestamp for the start of the day that this entity represents. UTC+0 */
  dayStart: Scalars['BigInt'];
  /** Timestamp for the end of the day that this entity represents. UTC+0 */
  dayEnd: Scalars['BigInt'];
  /** Number of the day this entity represents. Day 0 is the network launch day. */
  dayNumber: Scalars['Int'];
  /** Delegator entity that forms the relation. */
  delegator: ANALYTICS__Delegator;
  /** DelegatedStake entity that forms the relation */
  stake: ANALYTICS__DelegatedStake;
  /** DailyData entity that tracks the Delegator for this specific day */
  delegatorDailyData: ANALYTICS__DelegatorDailyData;
  /** DailyData entity that tracks the DelegatedStake for this specific day */
  delegatedStakeDailyData: ANALYTICS__DelegatedStakeDailyData;
};

export type ANALYTICS__DelegatorDelegatedStakeDailyRelation_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  dayStart?: InputMaybe<Scalars['BigInt']>;
  dayStart_not?: InputMaybe<Scalars['BigInt']>;
  dayStart_gt?: InputMaybe<Scalars['BigInt']>;
  dayStart_lt?: InputMaybe<Scalars['BigInt']>;
  dayStart_gte?: InputMaybe<Scalars['BigInt']>;
  dayStart_lte?: InputMaybe<Scalars['BigInt']>;
  dayStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayNumber?: InputMaybe<Scalars['Int']>;
  dayNumber_not?: InputMaybe<Scalars['Int']>;
  dayNumber_gt?: InputMaybe<Scalars['Int']>;
  dayNumber_lt?: InputMaybe<Scalars['Int']>;
  dayNumber_gte?: InputMaybe<Scalars['Int']>;
  dayNumber_lte?: InputMaybe<Scalars['Int']>;
  dayNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  dayNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<ANALYTICS__Delegator_filter>;
  stake?: InputMaybe<Scalars['String']>;
  stake_not?: InputMaybe<Scalars['String']>;
  stake_gt?: InputMaybe<Scalars['String']>;
  stake_lt?: InputMaybe<Scalars['String']>;
  stake_gte?: InputMaybe<Scalars['String']>;
  stake_lte?: InputMaybe<Scalars['String']>;
  stake_in?: InputMaybe<Array<Scalars['String']>>;
  stake_not_in?: InputMaybe<Array<Scalars['String']>>;
  stake_contains?: InputMaybe<Scalars['String']>;
  stake_contains_nocase?: InputMaybe<Scalars['String']>;
  stake_not_contains?: InputMaybe<Scalars['String']>;
  stake_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stake_starts_with?: InputMaybe<Scalars['String']>;
  stake_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stake_not_starts_with?: InputMaybe<Scalars['String']>;
  stake_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stake_ends_with?: InputMaybe<Scalars['String']>;
  stake_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stake_not_ends_with?: InputMaybe<Scalars['String']>;
  stake_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stake_?: InputMaybe<ANALYTICS__DelegatedStake_filter>;
  delegatorDailyData?: InputMaybe<Scalars['String']>;
  delegatorDailyData_not?: InputMaybe<Scalars['String']>;
  delegatorDailyData_gt?: InputMaybe<Scalars['String']>;
  delegatorDailyData_lt?: InputMaybe<Scalars['String']>;
  delegatorDailyData_gte?: InputMaybe<Scalars['String']>;
  delegatorDailyData_lte?: InputMaybe<Scalars['String']>;
  delegatorDailyData_in?: InputMaybe<Array<Scalars['String']>>;
  delegatorDailyData_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegatorDailyData_contains?: InputMaybe<Scalars['String']>;
  delegatorDailyData_contains_nocase?: InputMaybe<Scalars['String']>;
  delegatorDailyData_not_contains?: InputMaybe<Scalars['String']>;
  delegatorDailyData_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegatorDailyData_starts_with?: InputMaybe<Scalars['String']>;
  delegatorDailyData_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegatorDailyData_not_starts_with?: InputMaybe<Scalars['String']>;
  delegatorDailyData_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegatorDailyData_ends_with?: InputMaybe<Scalars['String']>;
  delegatorDailyData_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegatorDailyData_not_ends_with?: InputMaybe<Scalars['String']>;
  delegatorDailyData_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegatorDailyData_?: InputMaybe<ANALYTICS__DelegatorDailyData_filter>;
  delegatedStakeDailyData?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_not?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_gt?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_lt?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_gte?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_lte?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_in?: InputMaybe<Array<Scalars['String']>>;
  delegatedStakeDailyData_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegatedStakeDailyData_contains?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_contains_nocase?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_not_contains?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_starts_with?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_not_starts_with?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_ends_with?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_not_ends_with?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegatedStakeDailyData_?: InputMaybe<ANALYTICS__DelegatedStakeDailyData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__DelegatorDelegatedStakeDailyRelation_orderBy =
  | 'id'
  | 'dayStart'
  | 'dayEnd'
  | 'dayNumber'
  | 'delegator'
  | 'stake'
  | 'delegatorDailyData'
  | 'delegatedStakeDailyData';

export type ANALYTICS__Delegator_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<ANALYTICS__GraphAccount_filter>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakes_?: InputMaybe<ANALYTICS__DelegatedStake_filter>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRealizedRewards?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalRealizedRewards_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalRealizedRewards_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalUnrealizedRewards?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  totalUnrealizedRewards_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  totalUnrealizedRewards_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  originalDelegation?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  originalDelegation_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  originalDelegation_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  currentDelegation?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  currentDelegation_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  currentDelegation_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  dailyData_?: InputMaybe<ANALYTICS__DelegatorDailyData_filter>;
  totalStakedTokens?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalStakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalStakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokens?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakesCount?: InputMaybe<Scalars['Int']>;
  stakesCount_not?: InputMaybe<Scalars['Int']>;
  stakesCount_gt?: InputMaybe<Scalars['Int']>;
  stakesCount_lt?: InputMaybe<Scalars['Int']>;
  stakesCount_gte?: InputMaybe<Scalars['Int']>;
  stakesCount_lte?: InputMaybe<Scalars['Int']>;
  stakesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  stakesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeStakesCount?: InputMaybe<Scalars['Int']>;
  activeStakesCount_not?: InputMaybe<Scalars['Int']>;
  activeStakesCount_gt?: InputMaybe<Scalars['Int']>;
  activeStakesCount_lt?: InputMaybe<Scalars['Int']>;
  activeStakesCount_gte?: InputMaybe<Scalars['Int']>;
  activeStakesCount_lte?: InputMaybe<Scalars['Int']>;
  activeStakesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeStakesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegatedAt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_not?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastDelegatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUndelegatedAt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_not?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastUndelegatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUndelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegation?: InputMaybe<Scalars['String']>;
  lastDelegation_not?: InputMaybe<Scalars['String']>;
  lastDelegation_gt?: InputMaybe<Scalars['String']>;
  lastDelegation_lt?: InputMaybe<Scalars['String']>;
  lastDelegation_gte?: InputMaybe<Scalars['String']>;
  lastDelegation_lte?: InputMaybe<Scalars['String']>;
  lastDelegation_in?: InputMaybe<Array<Scalars['String']>>;
  lastDelegation_not_in?: InputMaybe<Array<Scalars['String']>>;
  lastDelegation_contains?: InputMaybe<Scalars['String']>;
  lastDelegation_contains_nocase?: InputMaybe<Scalars['String']>;
  lastDelegation_not_contains?: InputMaybe<Scalars['String']>;
  lastDelegation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lastDelegation_starts_with?: InputMaybe<Scalars['String']>;
  lastDelegation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lastDelegation_not_starts_with?: InputMaybe<Scalars['String']>;
  lastDelegation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lastDelegation_ends_with?: InputMaybe<Scalars['String']>;
  lastDelegation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lastDelegation_not_ends_with?: InputMaybe<Scalars['String']>;
  lastDelegation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lastDelegation_?: InputMaybe<ANALYTICS__DelegatedStake_filter>;
  lastUndelegation?: InputMaybe<Scalars['String']>;
  lastUndelegation_not?: InputMaybe<Scalars['String']>;
  lastUndelegation_gt?: InputMaybe<Scalars['String']>;
  lastUndelegation_lt?: InputMaybe<Scalars['String']>;
  lastUndelegation_gte?: InputMaybe<Scalars['String']>;
  lastUndelegation_lte?: InputMaybe<Scalars['String']>;
  lastUndelegation_in?: InputMaybe<Array<Scalars['String']>>;
  lastUndelegation_not_in?: InputMaybe<Array<Scalars['String']>>;
  lastUndelegation_contains?: InputMaybe<Scalars['String']>;
  lastUndelegation_contains_nocase?: InputMaybe<Scalars['String']>;
  lastUndelegation_not_contains?: InputMaybe<Scalars['String']>;
  lastUndelegation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lastUndelegation_starts_with?: InputMaybe<Scalars['String']>;
  lastUndelegation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lastUndelegation_not_starts_with?: InputMaybe<Scalars['String']>;
  lastUndelegation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lastUndelegation_ends_with?: InputMaybe<Scalars['String']>;
  lastUndelegation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lastUndelegation_not_ends_with?: InputMaybe<Scalars['String']>;
  lastUndelegation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lastUndelegation_?: InputMaybe<ANALYTICS__DelegatedStake_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__Delegator_orderBy =
  | 'id'
  | 'account'
  | 'defaultDisplayName'
  | 'stakes'
  | 'createdAt'
  | 'stakedTokens'
  | 'lockedTokens'
  | 'totalRealizedRewards'
  | 'totalUnrealizedRewards'
  | 'originalDelegation'
  | 'currentDelegation'
  | 'dailyData'
  | 'totalStakedTokens'
  | 'totalUnstakedTokens'
  | 'stakesCount'
  | 'activeStakesCount'
  | 'lastDelegatedAt'
  | 'lastUndelegatedAt'
  | 'lastDelegation'
  | 'lastUndelegation';

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type ANALYTICS__GraphAccount = {
  /** Graph account ID */
  id: Scalars['ID'];
  /** All names this graph account has claimed from all name systems */
  names: Array<ANALYTICS__GraphAccountName>;
  /** Default name the graph account has chosen */
  defaultName?: Maybe<ANALYTICS__GraphAccountName>;
  /** Time the account was created */
  createdAt: Scalars['Int'];
  /** Default display name is the current default name. Used for filtered queries in the explorer */
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** True if it is an organization. False if it is an individual */
  isOrganization?: Maybe<Scalars['Boolean']>;
  /** IPFS hash with account metadata details */
  metadataHash?: Maybe<Scalars['ANALYTICS__Bytes']>;
  /** Main repository of code for the graph account */
  codeRepository?: Maybe<Scalars['String']>;
  /** Description of the graph account */
  description?: Maybe<Scalars['String']>;
  /** Image URL */
  image?: Maybe<Scalars['String']>;
  /** Website URL */
  website?: Maybe<Scalars['String']>;
  /** Display name. Not unique */
  displayName?: Maybe<Scalars['String']>;
  /** Operator of other Graph Accounts */
  operatorOf: Array<ANALYTICS__GraphAccount>;
  /** Operators of this Graph Accounts */
  operators: Array<ANALYTICS__GraphAccount>;
  /** Graph token balance */
  balance: Scalars['BigInt'];
  /** Amount this account has approved staking to transfer their GRT */
  curationApproval: Scalars['BigInt'];
  /** Amount this account has approved curation to transfer their GRT */
  stakingApproval: Scalars['BigInt'];
  /** Amount this account has approved the GNS to transfer their GRT */
  gnsApproval: Scalars['BigInt'];
  /** Subgraphs the graph account owns */
  subgraphs: Array<ANALYTICS__Subgraph>;
  /** Time that this graph account became a developer */
  developerCreatedAt?: Maybe<Scalars['Int']>;
  /** Curator fields for this GraphAccount. Null if never curated */
  curator?: Maybe<ANALYTICS__Curator>;
  /** Indexer fields for this GraphAccount. Null if never indexed */
  indexer?: Maybe<ANALYTICS__Indexer>;
  /** Delegator fields for this GraphAccount. Null if never delegated */
  delegator?: Maybe<ANALYTICS__Delegator>;
  /** Name signal transactions created by this GraphAccount */
  nameSignalTransactions: Array<ANALYTICS__NameSignalTransaction>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type ANALYTICS__GraphAccountnamesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__GraphAccountName_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__GraphAccountName_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type ANALYTICS__GraphAccountoperatorOfArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__GraphAccount_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__GraphAccount_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type ANALYTICS__GraphAccountoperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__GraphAccount_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__GraphAccount_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type ANALYTICS__GraphAccountsubgraphsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Subgraph_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Subgraph_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type ANALYTICS__GraphAccountnameSignalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__NameSignalTransaction_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__NameSignalTransaction_filter>;
};

/**
 * A name chosen by a Graph Account from a Name System such as ENS. This allows Graph Accounts to be
 * recognized by name, rather than just an Ethereum address
 *
 */
export type ANALYTICS__GraphAccountName = {
  /** Name system concatenated with the unique ID of the name system */
  id: Scalars['ID'];
  /** Name system for this name */
  nameSystem: ANALYTICS__NameSystem;
  /** Name from the system */
  name: Scalars['String'];
  /** The graph account that owned the name when it was linked in the graph network */
  graphAccount?: Maybe<ANALYTICS__GraphAccount>;
};

export type ANALYTICS__GraphAccountName_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nameSystem?: InputMaybe<ANALYTICS__NameSystem>;
  nameSystem_not?: InputMaybe<ANALYTICS__NameSystem>;
  nameSystem_in?: InputMaybe<Array<ANALYTICS__NameSystem>>;
  nameSystem_not_in?: InputMaybe<Array<ANALYTICS__NameSystem>>;
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
  graphAccount?: InputMaybe<Scalars['String']>;
  graphAccount_not?: InputMaybe<Scalars['String']>;
  graphAccount_gt?: InputMaybe<Scalars['String']>;
  graphAccount_lt?: InputMaybe<Scalars['String']>;
  graphAccount_gte?: InputMaybe<Scalars['String']>;
  graphAccount_lte?: InputMaybe<Scalars['String']>;
  graphAccount_in?: InputMaybe<Array<Scalars['String']>>;
  graphAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  graphAccount_contains?: InputMaybe<Scalars['String']>;
  graphAccount_contains_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_not_contains?: InputMaybe<Scalars['String']>;
  graphAccount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_starts_with?: InputMaybe<Scalars['String']>;
  graphAccount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_not_starts_with?: InputMaybe<Scalars['String']>;
  graphAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_ends_with?: InputMaybe<Scalars['String']>;
  graphAccount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_not_ends_with?: InputMaybe<Scalars['String']>;
  graphAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  graphAccount_?: InputMaybe<ANALYTICS__GraphAccount_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__GraphAccountName_orderBy =
  | 'id'
  | 'nameSystem'
  | 'name'
  | 'graphAccount';

export type ANALYTICS__GraphAccount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  names_?: InputMaybe<ANALYTICS__GraphAccountName_filter>;
  defaultName?: InputMaybe<Scalars['String']>;
  defaultName_not?: InputMaybe<Scalars['String']>;
  defaultName_gt?: InputMaybe<Scalars['String']>;
  defaultName_lt?: InputMaybe<Scalars['String']>;
  defaultName_gte?: InputMaybe<Scalars['String']>;
  defaultName_lte?: InputMaybe<Scalars['String']>;
  defaultName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultName_contains?: InputMaybe<Scalars['String']>;
  defaultName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultName_not_contains?: InputMaybe<Scalars['String']>;
  defaultName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultName_starts_with?: InputMaybe<Scalars['String']>;
  defaultName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_ends_with?: InputMaybe<Scalars['String']>;
  defaultName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultName_?: InputMaybe<ANALYTICS__GraphAccountName_filter>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  isOrganization?: InputMaybe<Scalars['Boolean']>;
  isOrganization_not?: InputMaybe<Scalars['Boolean']>;
  isOrganization_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isOrganization_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  metadataHash?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_lt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  metadataHash_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  codeRepository?: InputMaybe<Scalars['String']>;
  codeRepository_not?: InputMaybe<Scalars['String']>;
  codeRepository_gt?: InputMaybe<Scalars['String']>;
  codeRepository_lt?: InputMaybe<Scalars['String']>;
  codeRepository_gte?: InputMaybe<Scalars['String']>;
  codeRepository_lte?: InputMaybe<Scalars['String']>;
  codeRepository_in?: InputMaybe<Array<Scalars['String']>>;
  codeRepository_not_in?: InputMaybe<Array<Scalars['String']>>;
  codeRepository_contains?: InputMaybe<Scalars['String']>;
  codeRepository_contains_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_contains?: InputMaybe<Scalars['String']>;
  codeRepository_not_contains_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_starts_with?: InputMaybe<Scalars['String']>;
  codeRepository_starts_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_starts_with?: InputMaybe<Scalars['String']>;
  codeRepository_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_ends_with?: InputMaybe<Scalars['String']>;
  codeRepository_ends_with_nocase?: InputMaybe<Scalars['String']>;
  codeRepository_not_ends_with?: InputMaybe<Scalars['String']>;
  codeRepository_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  website_not?: InputMaybe<Scalars['String']>;
  website_gt?: InputMaybe<Scalars['String']>;
  website_lt?: InputMaybe<Scalars['String']>;
  website_gte?: InputMaybe<Scalars['String']>;
  website_lte?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<Scalars['String']>>;
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_contains_nocase?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']>;
  website_starts_with?: InputMaybe<Scalars['String']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_ends_with?: InputMaybe<Scalars['String']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  displayName_not?: InputMaybe<Scalars['String']>;
  displayName_gt?: InputMaybe<Scalars['String']>;
  displayName_lt?: InputMaybe<Scalars['String']>;
  displayName_gte?: InputMaybe<Scalars['String']>;
  displayName_lte?: InputMaybe<Scalars['String']>;
  displayName_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_contains?: InputMaybe<Scalars['String']>;
  displayName_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_contains?: InputMaybe<Scalars['String']>;
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_starts_with?: InputMaybe<Scalars['String']>;
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_starts_with?: InputMaybe<Scalars['String']>;
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_ends_with?: InputMaybe<Scalars['String']>;
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  operatorOf_?: InputMaybe<ANALYTICS__GraphAccount_filter>;
  operators?: InputMaybe<Array<Scalars['String']>>;
  operators_not?: InputMaybe<Array<Scalars['String']>>;
  operators_contains?: InputMaybe<Array<Scalars['String']>>;
  operators_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  operators_not_contains?: InputMaybe<Array<Scalars['String']>>;
  operators_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  operators_?: InputMaybe<ANALYTICS__GraphAccount_filter>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curationApproval?: InputMaybe<Scalars['BigInt']>;
  curationApproval_not?: InputMaybe<Scalars['BigInt']>;
  curationApproval_gt?: InputMaybe<Scalars['BigInt']>;
  curationApproval_lt?: InputMaybe<Scalars['BigInt']>;
  curationApproval_gte?: InputMaybe<Scalars['BigInt']>;
  curationApproval_lte?: InputMaybe<Scalars['BigInt']>;
  curationApproval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curationApproval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingApproval?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_not?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_gt?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_lt?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_gte?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_lte?: InputMaybe<Scalars['BigInt']>;
  stakingApproval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingApproval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gnsApproval?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_not?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_gt?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_lt?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_gte?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_lte?: InputMaybe<Scalars['BigInt']>;
  gnsApproval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gnsApproval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphs_?: InputMaybe<ANALYTICS__Subgraph_filter>;
  developerCreatedAt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_not?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_gt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_lt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_gte?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_lte?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  developerCreatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  curator?: InputMaybe<Scalars['String']>;
  curator_not?: InputMaybe<Scalars['String']>;
  curator_gt?: InputMaybe<Scalars['String']>;
  curator_lt?: InputMaybe<Scalars['String']>;
  curator_gte?: InputMaybe<Scalars['String']>;
  curator_lte?: InputMaybe<Scalars['String']>;
  curator_in?: InputMaybe<Array<Scalars['String']>>;
  curator_not_in?: InputMaybe<Array<Scalars['String']>>;
  curator_contains?: InputMaybe<Scalars['String']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_not_contains?: InputMaybe<Scalars['String']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_starts_with?: InputMaybe<Scalars['String']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_starts_with?: InputMaybe<Scalars['String']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_ends_with?: InputMaybe<Scalars['String']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_?: InputMaybe<ANALYTICS__Curator_filter>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<ANALYTICS__Indexer_filter>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<ANALYTICS__Delegator_filter>;
  nameSignalTransactions_?: InputMaybe<ANALYTICS__NameSignalTransaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__GraphAccount_orderBy =
  | 'id'
  | 'names'
  | 'defaultName'
  | 'createdAt'
  | 'defaultDisplayName'
  | 'isOrganization'
  | 'metadataHash'
  | 'codeRepository'
  | 'description'
  | 'image'
  | 'website'
  | 'displayName'
  | 'operatorOf'
  | 'operators'
  | 'balance'
  | 'curationApproval'
  | 'stakingApproval'
  | 'gnsApproval'
  | 'subgraphs'
  | 'developerCreatedAt'
  | 'curator'
  | 'indexer'
  | 'delegator'
  | 'nameSignalTransactions';

/**
 * Graph Network global parameters and contract addresses
 *
 */
export type ANALYTICS__GraphNetwork = {
  /** ID is set to 1 */
  id: Scalars['ID'];
  /** Ratio of max staked delegation tokens to indexers stake that earns rewards */
  delegationRatio: Scalars['Int'];
  /** The total amount of GRT staked in the staking contract */
  totalTokensStaked: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Total tokens that are settled and waiting to be claimed */
  totalTokensClaimable: Scalars['BigInt'];
  /** Total tokens that are currently locked or withdrawable in the network from unstaking */
  totalUnstakedTokensLocked: Scalars['BigInt'];
  /** Total GRT currently in allocation */
  totalTokensAllocated: Scalars['BigInt'];
  /** Total delegated tokens in the protocol */
  totalDelegatedTokens: Scalars['BigInt'];
  /** Total query fees generated in the network */
  totalQueryFees: Scalars['BigInt'];
  /** Total query fees collected by indexers */
  totalIndexerQueryFeesCollected: Scalars['BigInt'];
  /** Total query fees rebates claimed by indexers */
  totalIndexerQueryFeeRebates: Scalars['BigInt'];
  /** Total query fees rebates claimed by delegators */
  totalDelegatorQueryFeeRebates: Scalars['BigInt'];
  /** Total query fees payed to curators */
  totalCuratorQueryFees: Scalars['BigInt'];
  /** Total protocol taxes applied to the query fees */
  totalTaxedQueryFees: Scalars['BigInt'];
  /** Total unclaimed rebates. Includes unclaimed rebates and rebates lost in cobbs douglas  */
  totalUnclaimedQueryFeeRebates: Scalars['BigInt'];
  /** Total indexing rewards minted */
  totalIndexingRewards: Scalars['BigInt'];
  /** Total indexing rewards minted to Delegators */
  totalIndexingDelegatorRewards: Scalars['BigInt'];
  /** Total indexing rewards minted to Indexers */
  totalIndexingIndexerRewards: Scalars['BigInt'];
  /** The total amount of GRT signalled in the Curation contract */
  totalTokensSignalled: Scalars['BigInt'];
  /** Default reserve ratio for all subgraphs. In parts per million */
  defaultReserveRatio: Scalars['Int'];
  /** Total indexers */
  indexerCount: Scalars['Int'];
  /** Number of indexers that currently have some stake in the protocol */
  stakedIndexersCount: Scalars['Int'];
  /** Total delegators */
  delegatorCount: Scalars['Int'];
  /** Total curators */
  curatorCount: Scalars['Int'];
  /** Total subgraphs */
  subgraphCount: Scalars['Int'];
  /** Total subgraphs */
  subgraphDeploymentCount: Scalars['Int'];
};

export type ANALYTICS__GraphNetworkDailyData = {
  /** <SUBGRAPH ID>-<DAY NUMBER> */
  id: Scalars['ID'];
  /** Timestamp for the start of the day that this entity represents. UTC+0 */
  dayStart: Scalars['BigInt'];
  /** Timestamp for the end of the day that this entity represents. UTC+0 */
  dayEnd: Scalars['BigInt'];
  /** Number of the day this entity represents. Day 0 is the network launch day. */
  dayNumber: Scalars['Int'];
  /** Original entity that the daily data entity tracks */
  network: ANALYTICS__GraphNetwork;
  /** [CUMULATIVE] Ratio of max staked delegation tokens to indexers stake that earns rewards */
  delegationRatio: Scalars['Int'];
  /** [CUMULATIVE] The total amount of GRT staked in the staking contract */
  totalTokensStaked: Scalars['BigInt'];
  /** [CUMULATIVE] Total tokens that are currently locked or withdrawable in the network from unstaking */
  totalUnstakedTokensLocked: Scalars['BigInt'];
  /** [CUMULATIVE] Total GRT currently in allocation */
  totalTokensAllocated: Scalars['BigInt'];
  /** [CUMULATIVE] Total delegated tokens in the protocol */
  totalDelegatedTokens: Scalars['BigInt'];
  /** [CUMULATIVE] Total query fees generated in the network */
  totalQueryFees: Scalars['BigInt'];
  /** [CUMULATIVE] Total query fees collected by indexers */
  totalIndexerQueryFeesCollected: Scalars['BigInt'];
  /** [CUMULATIVE] Total query fees rebates claimed by indexers */
  totalIndexerQueryFeeRebates: Scalars['BigInt'];
  /** [CUMULATIVE] Total query fees rebates claimed by delegators */
  totalDelegatorQueryFeeRebates: Scalars['BigInt'];
  /** [CUMULATIVE] Total query fees payed to curators */
  totalCuratorQueryFees: Scalars['BigInt'];
  /** [CUMULATIVE] Total protocol taxes applied to the query fees */
  totalTaxedQueryFees: Scalars['BigInt'];
  /** [CUMULATIVE] Total unclaimed rebates. Includes unclaimed rebates and rebates lost in cobbs douglas  */
  totalUnclaimedQueryFeeRebates: Scalars['BigInt'];
  /** [CUMULATIVE] Total indexing rewards minted */
  totalIndexingRewards: Scalars['BigInt'];
  /** [CUMULATIVE] Total indexing rewards minted to Delegators */
  totalIndexingDelegatorRewards: Scalars['BigInt'];
  /** [CUMULATIVE] Total indexing rewards minted to Indexers */
  totalIndexingIndexerRewards: Scalars['BigInt'];
  /** [CUMULATIVE] The total amount of GRT signalled in the Curation contract */
  totalTokensSignalled: Scalars['BigInt'];
  /** [CUMULATIVE] Default reserve ratio for all subgraphs. In parts per million */
  defaultReserveRatio: Scalars['Int'];
  /** [CUMULATIVE] Total indexers */
  indexerCount: Scalars['Int'];
  /** [CUMULATIVE] Number of indexers that currently have some stake in the protocol */
  stakedIndexersCount: Scalars['Int'];
  /** [CUMULATIVE] Total delegators */
  delegatorCount: Scalars['Int'];
  /** [CUMULATIVE] Total curators */
  curatorCount: Scalars['Int'];
  /** [CUMULATIVE] Total subgraphs */
  subgraphCount: Scalars['Int'];
  /** [CUMULATIVE] Total subgraphs */
  subgraphDeploymentCount: Scalars['Int'];
};

export type ANALYTICS__GraphNetworkDailyData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  dayStart?: InputMaybe<Scalars['BigInt']>;
  dayStart_not?: InputMaybe<Scalars['BigInt']>;
  dayStart_gt?: InputMaybe<Scalars['BigInt']>;
  dayStart_lt?: InputMaybe<Scalars['BigInt']>;
  dayStart_gte?: InputMaybe<Scalars['BigInt']>;
  dayStart_lte?: InputMaybe<Scalars['BigInt']>;
  dayStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayNumber?: InputMaybe<Scalars['Int']>;
  dayNumber_not?: InputMaybe<Scalars['Int']>;
  dayNumber_gt?: InputMaybe<Scalars['Int']>;
  dayNumber_lt?: InputMaybe<Scalars['Int']>;
  dayNumber_gte?: InputMaybe<Scalars['Int']>;
  dayNumber_lte?: InputMaybe<Scalars['Int']>;
  dayNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  dayNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  network?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_?: InputMaybe<ANALYTICS__GraphNetwork_filter>;
  delegationRatio?: InputMaybe<Scalars['Int']>;
  delegationRatio_not?: InputMaybe<Scalars['Int']>;
  delegationRatio_gt?: InputMaybe<Scalars['Int']>;
  delegationRatio_lt?: InputMaybe<Scalars['Int']>;
  delegationRatio_gte?: InputMaybe<Scalars['Int']>;
  delegationRatio_lte?: InputMaybe<Scalars['Int']>;
  delegationRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalTokensStaked?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensStaked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokensLocked?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_not?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokensLocked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAllocated?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAllocated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokens?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCuratorQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCuratorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTaxedQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTaxedQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnclaimedQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnclaimedQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingDelegatorRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingIndexerRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalled?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  defaultReserveRatio?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_not?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_gt?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_lt?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_gte?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_lte?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultReserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexerCount?: InputMaybe<Scalars['Int']>;
  indexerCount_not?: InputMaybe<Scalars['Int']>;
  indexerCount_gt?: InputMaybe<Scalars['Int']>;
  indexerCount_lt?: InputMaybe<Scalars['Int']>;
  indexerCount_gte?: InputMaybe<Scalars['Int']>;
  indexerCount_lte?: InputMaybe<Scalars['Int']>;
  indexerCount_in?: InputMaybe<Array<Scalars['Int']>>;
  indexerCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stakedIndexersCount?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_not?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_gt?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_lt?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_gte?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_lte?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_in?: InputMaybe<Array<Scalars['Int']>>;
  stakedIndexersCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorCount?: InputMaybe<Scalars['Int']>;
  delegatorCount_not?: InputMaybe<Scalars['Int']>;
  delegatorCount_gt?: InputMaybe<Scalars['Int']>;
  delegatorCount_lt?: InputMaybe<Scalars['Int']>;
  delegatorCount_gte?: InputMaybe<Scalars['Int']>;
  delegatorCount_lte?: InputMaybe<Scalars['Int']>;
  delegatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  curatorCount?: InputMaybe<Scalars['Int']>;
  curatorCount_not?: InputMaybe<Scalars['Int']>;
  curatorCount_gt?: InputMaybe<Scalars['Int']>;
  curatorCount_lt?: InputMaybe<Scalars['Int']>;
  curatorCount_gte?: InputMaybe<Scalars['Int']>;
  curatorCount_lte?: InputMaybe<Scalars['Int']>;
  curatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  curatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount?: InputMaybe<Scalars['Int']>;
  subgraphCount_not?: InputMaybe<Scalars['Int']>;
  subgraphCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeploymentCount?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_not?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeploymentCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__GraphNetworkDailyData_orderBy =
  | 'id'
  | 'dayStart'
  | 'dayEnd'
  | 'dayNumber'
  | 'network'
  | 'delegationRatio'
  | 'totalTokensStaked'
  | 'totalUnstakedTokensLocked'
  | 'totalTokensAllocated'
  | 'totalDelegatedTokens'
  | 'totalQueryFees'
  | 'totalIndexerQueryFeesCollected'
  | 'totalIndexerQueryFeeRebates'
  | 'totalDelegatorQueryFeeRebates'
  | 'totalCuratorQueryFees'
  | 'totalTaxedQueryFees'
  | 'totalUnclaimedQueryFeeRebates'
  | 'totalIndexingRewards'
  | 'totalIndexingDelegatorRewards'
  | 'totalIndexingIndexerRewards'
  | 'totalTokensSignalled'
  | 'defaultReserveRatio'
  | 'indexerCount'
  | 'stakedIndexersCount'
  | 'delegatorCount'
  | 'curatorCount'
  | 'subgraphCount'
  | 'subgraphDeploymentCount';

export type ANALYTICS__GraphNetwork_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  delegationRatio?: InputMaybe<Scalars['Int']>;
  delegationRatio_not?: InputMaybe<Scalars['Int']>;
  delegationRatio_gt?: InputMaybe<Scalars['Int']>;
  delegationRatio_lt?: InputMaybe<Scalars['Int']>;
  delegationRatio_gte?: InputMaybe<Scalars['Int']>;
  delegationRatio_lte?: InputMaybe<Scalars['Int']>;
  delegationRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalTokensStaked?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensStaked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensStaked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensClaimable?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensClaimable_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensClaimable_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokensLocked?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_not?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnstakedTokensLocked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnstakedTokensLocked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAllocated?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAllocated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAllocated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokens?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCuratorQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalCuratorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCuratorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTaxedQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalTaxedQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTaxedQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnclaimedQueryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  totalUnclaimedQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalUnclaimedQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingDelegatorRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingIndexerRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalled?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  defaultReserveRatio?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_not?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_gt?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_lt?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_gte?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_lte?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultReserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexerCount?: InputMaybe<Scalars['Int']>;
  indexerCount_not?: InputMaybe<Scalars['Int']>;
  indexerCount_gt?: InputMaybe<Scalars['Int']>;
  indexerCount_lt?: InputMaybe<Scalars['Int']>;
  indexerCount_gte?: InputMaybe<Scalars['Int']>;
  indexerCount_lte?: InputMaybe<Scalars['Int']>;
  indexerCount_in?: InputMaybe<Array<Scalars['Int']>>;
  indexerCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stakedIndexersCount?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_not?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_gt?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_lt?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_gte?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_lte?: InputMaybe<Scalars['Int']>;
  stakedIndexersCount_in?: InputMaybe<Array<Scalars['Int']>>;
  stakedIndexersCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorCount?: InputMaybe<Scalars['Int']>;
  delegatorCount_not?: InputMaybe<Scalars['Int']>;
  delegatorCount_gt?: InputMaybe<Scalars['Int']>;
  delegatorCount_lt?: InputMaybe<Scalars['Int']>;
  delegatorCount_gte?: InputMaybe<Scalars['Int']>;
  delegatorCount_lte?: InputMaybe<Scalars['Int']>;
  delegatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  curatorCount?: InputMaybe<Scalars['Int']>;
  curatorCount_not?: InputMaybe<Scalars['Int']>;
  curatorCount_gt?: InputMaybe<Scalars['Int']>;
  curatorCount_lt?: InputMaybe<Scalars['Int']>;
  curatorCount_gte?: InputMaybe<Scalars['Int']>;
  curatorCount_lte?: InputMaybe<Scalars['Int']>;
  curatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  curatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount?: InputMaybe<Scalars['Int']>;
  subgraphCount_not?: InputMaybe<Scalars['Int']>;
  subgraphCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeploymentCount?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_not?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeploymentCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__GraphNetwork_orderBy =
  | 'id'
  | 'delegationRatio'
  | 'totalTokensStaked'
  | 'totalTokensClaimable'
  | 'totalUnstakedTokensLocked'
  | 'totalTokensAllocated'
  | 'totalDelegatedTokens'
  | 'totalQueryFees'
  | 'totalIndexerQueryFeesCollected'
  | 'totalIndexerQueryFeeRebates'
  | 'totalDelegatorQueryFeeRebates'
  | 'totalCuratorQueryFees'
  | 'totalTaxedQueryFees'
  | 'totalUnclaimedQueryFeeRebates'
  | 'totalIndexingRewards'
  | 'totalIndexingDelegatorRewards'
  | 'totalIndexingIndexerRewards'
  | 'totalTokensSignalled'
  | 'defaultReserveRatio'
  | 'indexerCount'
  | 'stakedIndexersCount'
  | 'delegatorCount'
  | 'curatorCount'
  | 'subgraphCount'
  | 'subgraphDeploymentCount';

/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type ANALYTICS__Indexer = {
  /** Eth address of Indexer */
  id: Scalars['ID'];
  /** Time this indexer was created */
  createdAt: Scalars['Int'];
  /** Service registry URL for the indexer */
  url?: Maybe<Scalars['String']>;
  /** Geohash of the indexer. Shows where their indexer is located in the world */
  geoHash?: Maybe<Scalars['String']>;
  account: ANALYTICS__GraphAccount;
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** CURRENT tokens staked in the protocol. Decreases on withdraw, not on lock */
  stakedTokens: Scalars['BigInt'];
  /** CURRENT  tokens allocated on all subgraphs */
  allocatedTokens: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Tokens that have been unstaked and withdrawn */
  unstakedTokens: Scalars['BigInt'];
  /** CURRENT tokens locked */
  lockedTokens: Scalars['BigInt'];
  /** The block when the Indexers tokens unlock */
  tokensLockedUntil: Scalars['Int'];
  /** Active allocations of stake for this Indexer */
  allocations: Array<ANALYTICS__Allocation>;
  /** All allocations of stake for this Indexer (i.e. closed and active) */
  totalAllocations: Array<ANALYTICS__Allocation>;
  /** Number of active allocations of stake for this Indexer */
  allocationCount: Scalars['Int'];
  /** All allocations for this Indexer (i.e. closed and active) */
  totalAllocationCount: Scalars['BigInt'];
  /** Total query fees collected. Includes the portion given to delegators */
  queryFeesCollected: Scalars['BigInt'];
  /** Query fee rebate amount claimed from the protocol through cobbs douglas. Does not include portion given to delegators */
  queryFeeRebates: Scalars['BigInt'];
  /** Total indexing rewards earned by this indexer from inflation. Including delegation rewards */
  rewardsEarned: Scalars['BigInt'];
  /** The total amount of indexing rewards the indexer kept */
  indexerIndexingRewards: Scalars['BigInt'];
  /** The total amount of indexing rewards given to delegators */
  delegatorIndexingRewards: Scalars['BigInt'];
  /** Percentage of indexers' own rewards received in relation to its own stake. 1 (100%) means that the indexer is receiving the exact amount that is generated by his own stake */
  indexerRewardsOwnGenerationRatio: Scalars['ANALYTICS__BigDecimal'];
  /** Amount of delegated tokens that can be eligible for rewards */
  delegatedCapacity: Scalars['BigInt'];
  /** Total token capacity = delegatedCapacity + stakedTokens */
  tokenCapacity: Scalars['BigInt'];
  /** Stake available to earn rewards. tokenCapacity - allocationTokens - lockedTokens */
  availableStake: Scalars['BigInt'];
  /** Delegators to this Indexer */
  delegators: Array<ANALYTICS__DelegatedStake>;
  /** CURRENT tokens delegated to the indexer */
  delegatedTokens: Scalars['BigInt'];
  /** Ratio between the amount of the indexers own stake over the total usable stake. */
  ownStakeRatio: Scalars['ANALYTICS__BigDecimal'];
  /** Ratio between the amount of delegated stake over the total usable stake. */
  delegatedStakeRatio: Scalars['ANALYTICS__BigDecimal'];
  /** Total shares of the delegator pool */
  delegatorShares: Scalars['BigInt'];
  /** Exchange rate of of tokens received for each share */
  delegationExchangeRate: Scalars['ANALYTICS__BigDecimal'];
  /** The percent of indexing rewards generated by the total stake that the Indexer keeps for itself. In parts per million */
  indexingRewardCut: Scalars['Int'];
  /** The percent of indexing rewards generated by the delegated stake that the Indexer keeps for itself */
  indexingRewardEffectiveCut: Scalars['ANALYTICS__BigDecimal'];
  /** The percent of reward dilution delegators experience because of overdelegation. Overdelegated stake can't be used to generate rewards but still gets accounted while distributing the generated rewards. This causes dilution of the rewards for the rest of the pool. */
  overDelegationDilution: Scalars['ANALYTICS__BigDecimal'];
  /** The total amount of query fees given to delegators */
  delegatorQueryFees: Scalars['BigInt'];
  /** The percent of query rebate rewards the Indexer keeps for itself. In parts per million */
  queryFeeCut: Scalars['Int'];
  /** The percent of query rebate rewards generated by the delegated stake that the Indexer keeps for itself */
  queryFeeEffectiveCut: Scalars['ANALYTICS__BigDecimal'];
  /** Amount of blocks a delegator chooses for the waiting period for changing their params */
  delegatorParameterCooldown: Scalars['Int'];
  /** Block number for the last time the delegator updated their parameters */
  lastDelegationParameterUpdate: Scalars['Int'];
  /** Count of how many times this indexer has been forced to close an allocation */
  forcedClosures: Scalars['Int'];
  delegatorsCount: Scalars['BigInt'];
  dailyData: Array<ANALYTICS__IndexerDailyData>;
};


/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type ANALYTICS__IndexerallocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Allocation_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Allocation_filter>;
};


/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type ANALYTICS__IndexertotalAllocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Allocation_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Allocation_filter>;
};


/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type ANALYTICS__IndexerdelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__DelegatedStake_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__DelegatedStake_filter>;
};


/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type ANALYTICS__IndexerdailyDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__IndexerDailyData_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__IndexerDailyData_filter>;
};

export type ANALYTICS__IndexerDailyData = {
  /** <INDEXER ADDRESS>-<DAY NUMBER> */
  id: Scalars['ID'];
  /** Timestamp for the start of the day that this entity represents. UTC+0 */
  dayStart: Scalars['BigInt'];
  /** Timestamp for the end of the day that this entity represents. UTC+0 */
  dayEnd: Scalars['BigInt'];
  /** Number of the day this entity represents. Day 0 is the network launch day. */
  dayNumber: Scalars['Int'];
  /** Original entity that this daily data tracks */
  indexer: ANALYTICS__Indexer;
  /** [CURRENT] Value of stakedTokens for that day */
  stakedTokens: Scalars['BigInt'];
  /** [CURRENT] Value of delegatedTokens for that day */
  delegatedTokens: Scalars['BigInt'];
  /** [CURRENT] Value of allocatedTokens for that day */
  allocatedTokens: Scalars['BigInt'];
  /** [CURRENT] Value of availableStake for that day */
  availableStake: Scalars['BigInt'];
  /** [CURRENT] Amount of delegated tokens moved that day. Negative means more tokens were undelegated than delegated */
  netDailyDelegatedTokens: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of query fees collected by the indexer and sent to the rebate pool */
  queryFeesCollected: Scalars['BigInt'];
  /** [CUMULATIVE]Total amount of query fees that the indexer got from rebates */
  queryFeeRebates: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of query fees that the delegation pool received */
  delegatorQueryFees: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of indexing rewards generated on this indexer */
  totalIndexingRewards: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of indexing rewards that the indexer kept */
  indexerIndexingRewards: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of indexing rewards sent to the delegation pool */
  delegatorIndexingRewards: Scalars['BigInt'];
  /** [CURRENT] Exchange rate for shares of the delegation pool for this specific day */
  delegationExchangeRate: Scalars['ANALYTICS__BigDecimal'];
  delegatorsCount: Scalars['BigInt'];
};

export type ANALYTICS__IndexerDailyData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  dayStart?: InputMaybe<Scalars['BigInt']>;
  dayStart_not?: InputMaybe<Scalars['BigInt']>;
  dayStart_gt?: InputMaybe<Scalars['BigInt']>;
  dayStart_lt?: InputMaybe<Scalars['BigInt']>;
  dayStart_gte?: InputMaybe<Scalars['BigInt']>;
  dayStart_lte?: InputMaybe<Scalars['BigInt']>;
  dayStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayNumber?: InputMaybe<Scalars['Int']>;
  dayNumber_not?: InputMaybe<Scalars['Int']>;
  dayNumber_gt?: InputMaybe<Scalars['Int']>;
  dayNumber_lt?: InputMaybe<Scalars['Int']>;
  dayNumber_gte?: InputMaybe<Scalars['Int']>;
  dayNumber_lte?: InputMaybe<Scalars['Int']>;
  dayNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  dayNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<ANALYTICS__Indexer_filter>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedTokens?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocatedTokens?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableStake?: InputMaybe<Scalars['BigInt']>;
  availableStake_not?: InputMaybe<Scalars['BigInt']>;
  availableStake_gt?: InputMaybe<Scalars['BigInt']>;
  availableStake_lt?: InputMaybe<Scalars['BigInt']>;
  availableStake_gte?: InputMaybe<Scalars['BigInt']>;
  availableStake_lte?: InputMaybe<Scalars['BigInt']>;
  availableStake_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableStake_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netDailyDelegatedTokens?: InputMaybe<Scalars['BigInt']>;
  netDailyDelegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  netDailyDelegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  netDailyDelegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  netDailyDelegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  netDailyDelegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  netDailyDelegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netDailyDelegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorQueryFees?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationExchangeRate?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  delegationExchangeRate_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  delegatorsCount?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_not?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorsCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__IndexerDailyData_orderBy =
  | 'id'
  | 'dayStart'
  | 'dayEnd'
  | 'dayNumber'
  | 'indexer'
  | 'stakedTokens'
  | 'delegatedTokens'
  | 'allocatedTokens'
  | 'availableStake'
  | 'netDailyDelegatedTokens'
  | 'queryFeesCollected'
  | 'queryFeeRebates'
  | 'delegatorQueryFees'
  | 'totalIndexingRewards'
  | 'indexerIndexingRewards'
  | 'delegatorIndexingRewards'
  | 'delegationExchangeRate'
  | 'delegatorsCount';

/**
 * Analytics
 *
 */
export type ANALYTICS__IndexerDelegatedStakeRelation = {
  /** Auxiliary entity to DelegatedStake to make it easier to batch update those delegations */
  id: Scalars['ID'];
  /** Indexer entity where the delegation resides */
  indexer: ANALYTICS__Indexer;
  /** Delegator entity owner of said delegation stake */
  delegator: ANALYTICS__Delegator;
  /** DelegatedStake entity that represents the delegation */
  stake: ANALYTICS__DelegatedStake;
  /** Whether the delegation is active or not. Useful to avoid updating non-active delegations without deleting the entity. */
  active: Scalars['Boolean'];
};

export type ANALYTICS__IndexerDelegatedStakeRelation_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexer?: InputMaybe<Scalars['String']>;
  indexer_not?: InputMaybe<Scalars['String']>;
  indexer_gt?: InputMaybe<Scalars['String']>;
  indexer_lt?: InputMaybe<Scalars['String']>;
  indexer_gte?: InputMaybe<Scalars['String']>;
  indexer_lte?: InputMaybe<Scalars['String']>;
  indexer_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexer_contains?: InputMaybe<Scalars['String']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_contains?: InputMaybe<Scalars['String']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexer_starts_with?: InputMaybe<Scalars['String']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_ends_with?: InputMaybe<Scalars['String']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexer_?: InputMaybe<ANALYTICS__Indexer_filter>;
  delegator?: InputMaybe<Scalars['String']>;
  delegator_not?: InputMaybe<Scalars['String']>;
  delegator_gt?: InputMaybe<Scalars['String']>;
  delegator_lt?: InputMaybe<Scalars['String']>;
  delegator_gte?: InputMaybe<Scalars['String']>;
  delegator_lte?: InputMaybe<Scalars['String']>;
  delegator_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegator_contains?: InputMaybe<Scalars['String']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_contains?: InputMaybe<Scalars['String']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegator_starts_with?: InputMaybe<Scalars['String']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_ends_with?: InputMaybe<Scalars['String']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegator_?: InputMaybe<ANALYTICS__Delegator_filter>;
  stake?: InputMaybe<Scalars['String']>;
  stake_not?: InputMaybe<Scalars['String']>;
  stake_gt?: InputMaybe<Scalars['String']>;
  stake_lt?: InputMaybe<Scalars['String']>;
  stake_gte?: InputMaybe<Scalars['String']>;
  stake_lte?: InputMaybe<Scalars['String']>;
  stake_in?: InputMaybe<Array<Scalars['String']>>;
  stake_not_in?: InputMaybe<Array<Scalars['String']>>;
  stake_contains?: InputMaybe<Scalars['String']>;
  stake_contains_nocase?: InputMaybe<Scalars['String']>;
  stake_not_contains?: InputMaybe<Scalars['String']>;
  stake_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stake_starts_with?: InputMaybe<Scalars['String']>;
  stake_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stake_not_starts_with?: InputMaybe<Scalars['String']>;
  stake_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stake_ends_with?: InputMaybe<Scalars['String']>;
  stake_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stake_not_ends_with?: InputMaybe<Scalars['String']>;
  stake_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stake_?: InputMaybe<ANALYTICS__DelegatedStake_filter>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__IndexerDelegatedStakeRelation_orderBy =
  | 'id'
  | 'indexer'
  | 'delegator'
  | 'stake'
  | 'active';

export type ANALYTICS__Indexer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  url?: InputMaybe<Scalars['String']>;
  url_not?: InputMaybe<Scalars['String']>;
  url_gt?: InputMaybe<Scalars['String']>;
  url_lt?: InputMaybe<Scalars['String']>;
  url_gte?: InputMaybe<Scalars['String']>;
  url_lte?: InputMaybe<Scalars['String']>;
  url_in?: InputMaybe<Array<Scalars['String']>>;
  url_not_in?: InputMaybe<Array<Scalars['String']>>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_contains_nocase?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_contains_nocase?: InputMaybe<Scalars['String']>;
  url_starts_with?: InputMaybe<Scalars['String']>;
  url_starts_with_nocase?: InputMaybe<Scalars['String']>;
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  url_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  url_ends_with?: InputMaybe<Scalars['String']>;
  url_ends_with_nocase?: InputMaybe<Scalars['String']>;
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  url_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash?: InputMaybe<Scalars['String']>;
  geoHash_not?: InputMaybe<Scalars['String']>;
  geoHash_gt?: InputMaybe<Scalars['String']>;
  geoHash_lt?: InputMaybe<Scalars['String']>;
  geoHash_gte?: InputMaybe<Scalars['String']>;
  geoHash_lte?: InputMaybe<Scalars['String']>;
  geoHash_in?: InputMaybe<Array<Scalars['String']>>;
  geoHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  geoHash_contains?: InputMaybe<Scalars['String']>;
  geoHash_contains_nocase?: InputMaybe<Scalars['String']>;
  geoHash_not_contains?: InputMaybe<Scalars['String']>;
  geoHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  geoHash_starts_with?: InputMaybe<Scalars['String']>;
  geoHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash_not_starts_with?: InputMaybe<Scalars['String']>;
  geoHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash_ends_with?: InputMaybe<Scalars['String']>;
  geoHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  geoHash_not_ends_with?: InputMaybe<Scalars['String']>;
  geoHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<ANALYTICS__GraphAccount_filter>;
  defaultDisplayName?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocatedTokens?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  allocatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakedTokens?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensLockedUntil?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_not?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_gt?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_lt?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_gte?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_lte?: InputMaybe<Scalars['Int']>;
  tokensLockedUntil_in?: InputMaybe<Array<Scalars['Int']>>;
  tokensLockedUntil_not_in?: InputMaybe<Array<Scalars['Int']>>;
  allocations_?: InputMaybe<ANALYTICS__Allocation_filter>;
  totalAllocations_?: InputMaybe<ANALYTICS__Allocation_filter>;
  allocationCount?: InputMaybe<Scalars['Int']>;
  allocationCount_not?: InputMaybe<Scalars['Int']>;
  allocationCount_gt?: InputMaybe<Scalars['Int']>;
  allocationCount_lt?: InputMaybe<Scalars['Int']>;
  allocationCount_gte?: InputMaybe<Scalars['Int']>;
  allocationCount_lte?: InputMaybe<Scalars['Int']>;
  allocationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  allocationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalAllocationCount?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_not?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalAllocationCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAllocationCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardsEarned?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_not?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_gt?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_lt?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_gte?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_lte?: InputMaybe<Scalars['BigInt']>;
  rewardsEarned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardsEarned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  indexerIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorIndexingRewards?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_not?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerRewardsOwnGenerationRatio?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  indexerRewardsOwnGenerationRatio_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  delegatedCapacity?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_not?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedCapacity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedCapacity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCapacity?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_not?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_gt?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_lt?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_gte?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_lte?: InputMaybe<Scalars['BigInt']>;
  tokenCapacity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCapacity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableStake?: InputMaybe<Scalars['BigInt']>;
  availableStake_not?: InputMaybe<Scalars['BigInt']>;
  availableStake_gt?: InputMaybe<Scalars['BigInt']>;
  availableStake_lt?: InputMaybe<Scalars['BigInt']>;
  availableStake_gte?: InputMaybe<Scalars['BigInt']>;
  availableStake_lte?: InputMaybe<Scalars['BigInt']>;
  availableStake_in?: InputMaybe<Array<Scalars['BigInt']>>;
  availableStake_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegators_?: InputMaybe<ANALYTICS__DelegatedStake_filter>;
  delegatedTokens?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ownStakeRatio?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  ownStakeRatio_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  ownStakeRatio_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  ownStakeRatio_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  ownStakeRatio_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  ownStakeRatio_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  ownStakeRatio_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  ownStakeRatio_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  delegatedStakeRatio?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegatedStakeRatio_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegatedStakeRatio_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegatedStakeRatio_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegatedStakeRatio_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegatedStakeRatio_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegatedStakeRatio_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  delegatedStakeRatio_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  delegatorShares?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_not?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationExchangeRate?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  delegationExchangeRate_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  delegationExchangeRate_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  indexingRewardCut?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_not?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_gt?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_lt?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_gte?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_lte?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCut_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardEffectiveCut?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexingRewardEffectiveCut_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexingRewardEffectiveCut_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexingRewardEffectiveCut_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexingRewardEffectiveCut_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexingRewardEffectiveCut_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  indexingRewardEffectiveCut_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  indexingRewardEffectiveCut_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  overDelegationDilution?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  overDelegationDilution_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  overDelegationDilution_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  overDelegationDilution_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  overDelegationDilution_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  overDelegationDilution_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  overDelegationDilution_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  overDelegationDilution_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  delegatorQueryFees?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeCut?: InputMaybe<Scalars['Int']>;
  queryFeeCut_not?: InputMaybe<Scalars['Int']>;
  queryFeeCut_gt?: InputMaybe<Scalars['Int']>;
  queryFeeCut_lt?: InputMaybe<Scalars['Int']>;
  queryFeeCut_gte?: InputMaybe<Scalars['Int']>;
  queryFeeCut_lte?: InputMaybe<Scalars['Int']>;
  queryFeeCut_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeCut_not_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeEffectiveCut?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  queryFeeEffectiveCut_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  queryFeeEffectiveCut_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  queryFeeEffectiveCut_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  queryFeeEffectiveCut_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  queryFeeEffectiveCut_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  queryFeeEffectiveCut_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  queryFeeEffectiveCut_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  delegatorParameterCooldown?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_not?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_gt?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_lt?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_gte?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_lte?: InputMaybe<Scalars['Int']>;
  delegatorParameterCooldown_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorParameterCooldown_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegationParameterUpdate?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_not?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_gt?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_lt?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_gte?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_lte?: InputMaybe<Scalars['Int']>;
  lastDelegationParameterUpdate_in?: InputMaybe<Array<Scalars['Int']>>;
  lastDelegationParameterUpdate_not_in?: InputMaybe<Array<Scalars['Int']>>;
  forcedClosures?: InputMaybe<Scalars['Int']>;
  forcedClosures_not?: InputMaybe<Scalars['Int']>;
  forcedClosures_gt?: InputMaybe<Scalars['Int']>;
  forcedClosures_lt?: InputMaybe<Scalars['Int']>;
  forcedClosures_gte?: InputMaybe<Scalars['Int']>;
  forcedClosures_lte?: InputMaybe<Scalars['Int']>;
  forcedClosures_in?: InputMaybe<Array<Scalars['Int']>>;
  forcedClosures_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatorsCount?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_not?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorsCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorsCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyData_?: InputMaybe<ANALYTICS__IndexerDailyData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__Indexer_orderBy =
  | 'id'
  | 'createdAt'
  | 'url'
  | 'geoHash'
  | 'account'
  | 'defaultDisplayName'
  | 'stakedTokens'
  | 'allocatedTokens'
  | 'unstakedTokens'
  | 'lockedTokens'
  | 'tokensLockedUntil'
  | 'allocations'
  | 'totalAllocations'
  | 'allocationCount'
  | 'totalAllocationCount'
  | 'queryFeesCollected'
  | 'queryFeeRebates'
  | 'rewardsEarned'
  | 'indexerIndexingRewards'
  | 'delegatorIndexingRewards'
  | 'indexerRewardsOwnGenerationRatio'
  | 'delegatedCapacity'
  | 'tokenCapacity'
  | 'availableStake'
  | 'delegators'
  | 'delegatedTokens'
  | 'ownStakeRatio'
  | 'delegatedStakeRatio'
  | 'delegatorShares'
  | 'delegationExchangeRate'
  | 'indexingRewardCut'
  | 'indexingRewardEffectiveCut'
  | 'overDelegationDilution'
  | 'delegatorQueryFees'
  | 'queryFeeCut'
  | 'queryFeeEffectiveCut'
  | 'delegatorParameterCooldown'
  | 'lastDelegationParameterUpdate'
  | 'forcedClosures'
  | 'delegatorsCount'
  | 'dailyData';

/**
 * Curator Name Signal for a single Subgraph
 *
 */
export type ANALYTICS__NameSignal = {
  /** Eth address + subgraph ID */
  id: Scalars['ID'];
  /** Eth address of the curator */
  curator: ANALYTICS__Curator;
  /** Subgraph being signalled */
  subgraph: ANALYTICS__Subgraph;
  /** CUMULATIVE number of tokens the curator has signalled */
  signalledTokens: Scalars['BigInt'];
  /** CUMULATIVE number of tokens the curator has unsignalled */
  unsignalledTokens: Scalars['BigInt'];
  /** Tokens the curator has withdrawn from a deprecated name curve */
  withdrawnTokens: Scalars['BigInt'];
  /** Signal that the curator has from signaling their GRT */
  nameSignal: Scalars['BigInt'];
  /** Block for which the curator last entered or exited the curve */
  lastNameSignalChange: Scalars['Int'];
  /** Summation of realized rewards from before the last time the curator entered the curation curve */
  realizedRewards: Scalars['BigInt'];
  /** Curator average cost basis for this name signal on this subgraph */
  averageCostBasis: Scalars['ANALYTICS__BigDecimal'];
  /** averageCostBasis / nameSignal */
  averageCostBasisPerSignal: Scalars['ANALYTICS__BigDecimal'];
  entityVersion: Scalars['Int'];
  linkedEntity?: Maybe<ANALYTICS__NameSignal>;
};

/**
 * All relevant data for a Name Signal Transaction in The Graph Network
 *
 */
export type ANALYTICS__NameSignalTransaction = ANALYTICS__Transaction & {
  id: Scalars['ID'];
  blockNumber: Scalars['Int'];
  timestamp: Scalars['Int'];
  signer: ANALYTICS__GraphAccount;
  type: ANALYTICS__TransactionType;
  /** Amount of name signal updated */
  nameSignal: Scalars['BigInt'];
  /** Amount of version signal updated */
  versionSignal: Scalars['BigInt'];
  /** Tokens used */
  tokens: Scalars['BigInt'];
  /** Subgraph where name signal was updated */
  subgraph: ANALYTICS__Subgraph;
};

export type ANALYTICS__NameSignalTransaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<ANALYTICS__GraphAccount_filter>;
  type?: InputMaybe<ANALYTICS__TransactionType>;
  type_not?: InputMaybe<ANALYTICS__TransactionType>;
  type_in?: InputMaybe<Array<ANALYTICS__TransactionType>>;
  type_not_in?: InputMaybe<Array<ANALYTICS__TransactionType>>;
  nameSignal?: InputMaybe<Scalars['BigInt']>;
  nameSignal_not?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_lt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_lte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versionSignal?: InputMaybe<Scalars['BigInt']>;
  versionSignal_not?: InputMaybe<Scalars['BigInt']>;
  versionSignal_gt?: InputMaybe<Scalars['BigInt']>;
  versionSignal_lt?: InputMaybe<Scalars['BigInt']>;
  versionSignal_gte?: InputMaybe<Scalars['BigInt']>;
  versionSignal_lte?: InputMaybe<Scalars['BigInt']>;
  versionSignal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versionSignal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens?: InputMaybe<Scalars['BigInt']>;
  tokens_not?: InputMaybe<Scalars['BigInt']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']>;
  tokens_lt?: InputMaybe<Scalars['BigInt']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<ANALYTICS__Subgraph_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__NameSignalTransaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'signer'
  | 'type'
  | 'nameSignal'
  | 'versionSignal'
  | 'tokens'
  | 'subgraph';

export type ANALYTICS__NameSignal_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  curator?: InputMaybe<Scalars['String']>;
  curator_not?: InputMaybe<Scalars['String']>;
  curator_gt?: InputMaybe<Scalars['String']>;
  curator_lt?: InputMaybe<Scalars['String']>;
  curator_gte?: InputMaybe<Scalars['String']>;
  curator_lte?: InputMaybe<Scalars['String']>;
  curator_in?: InputMaybe<Array<Scalars['String']>>;
  curator_not_in?: InputMaybe<Array<Scalars['String']>>;
  curator_contains?: InputMaybe<Scalars['String']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_not_contains?: InputMaybe<Scalars['String']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_starts_with?: InputMaybe<Scalars['String']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_starts_with?: InputMaybe<Scalars['String']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_ends_with?: InputMaybe<Scalars['String']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_?: InputMaybe<ANALYTICS__Curator_filter>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<ANALYTICS__Subgraph_filter>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignal?: InputMaybe<Scalars['BigInt']>;
  nameSignal_not?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_lt?: InputMaybe<Scalars['BigInt']>;
  nameSignal_gte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_lte?: InputMaybe<Scalars['BigInt']>;
  nameSignal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastNameSignalChange?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_not?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_gt?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_lt?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_gte?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_lte?: InputMaybe<Scalars['Int']>;
  lastNameSignalChange_in?: InputMaybe<Array<Scalars['Int']>>;
  lastNameSignalChange_not_in?: InputMaybe<Array<Scalars['Int']>>;
  realizedRewards?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageCostBasis?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasis_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasis_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasis_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasis_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasis_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasis_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  averageCostBasis_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  averageCostBasisPerSignal?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasisPerSignal_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasisPerSignal_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasisPerSignal_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasisPerSignal_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasisPerSignal_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  averageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  averageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  entityVersion?: InputMaybe<Scalars['Int']>;
  entityVersion_not?: InputMaybe<Scalars['Int']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']>;
  entityVersion_lt?: InputMaybe<Scalars['Int']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
  linkedEntity?: InputMaybe<Scalars['String']>;
  linkedEntity_not?: InputMaybe<Scalars['String']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']>;
  linkedEntity_lt?: InputMaybe<Scalars['String']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_?: InputMaybe<ANALYTICS__NameSignal_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__NameSignal_orderBy =
  | 'id'
  | 'curator'
  | 'subgraph'
  | 'signalledTokens'
  | 'unsignalledTokens'
  | 'withdrawnTokens'
  | 'nameSignal'
  | 'lastNameSignalChange'
  | 'realizedRewards'
  | 'averageCostBasis'
  | 'averageCostBasisPerSignal'
  | 'entityVersion'
  | 'linkedEntity';

export type ANALYTICS__NameSystem =
  | 'ENS';

/** Defines the order direction, either ascending or descending */
export type ANALYTICS__OrderDirection =
  | 'asc'
  | 'desc';

/**
 * Global pool of query fees for closed state channels. Each Epoch has a single pool,
 * hence why they share the same IDs.
 *
 */
export type ANALYTICS__Pool = {
  /** Epoch number of the pool */
  id: Scalars['ID'];
  /** Total effective allocation tokens from all allocations closed in this epoch */
  allocation: Scalars['BigInt'];
  /** Total query fees collected in this epoch */
  totalQueryFees: Scalars['BigInt'];
  /** Total query fees claimed in this epoch. Can be smaller than totalFees because of cobbs douglas function  */
  claimedFees: Scalars['BigInt'];
  /** Total rewards from query fees deposited to all curator bonding curves during the epoch */
  curatorRewards: Scalars['BigInt'];
  /** Allocations that were closed during this epoch */
  closedAllocations: Array<ANALYTICS__Allocation>;
};


/**
 * Global pool of query fees for closed state channels. Each Epoch has a single pool,
 * hence why they share the same IDs.
 *
 */
export type ANALYTICS__PoolclosedAllocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Allocation_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Allocation_filter>;
};

export type ANALYTICS__Pool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  allocation?: InputMaybe<Scalars['BigInt']>;
  allocation_not?: InputMaybe<Scalars['BigInt']>;
  allocation_gt?: InputMaybe<Scalars['BigInt']>;
  allocation_lt?: InputMaybe<Scalars['BigInt']>;
  allocation_gte?: InputMaybe<Scalars['BigInt']>;
  allocation_lte?: InputMaybe<Scalars['BigInt']>;
  allocation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimedFees?: InputMaybe<Scalars['BigInt']>;
  claimedFees_not?: InputMaybe<Scalars['BigInt']>;
  claimedFees_gt?: InputMaybe<Scalars['BigInt']>;
  claimedFees_lt?: InputMaybe<Scalars['BigInt']>;
  claimedFees_gte?: InputMaybe<Scalars['BigInt']>;
  claimedFees_lte?: InputMaybe<Scalars['BigInt']>;
  claimedFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimedFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorRewards?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closedAllocations_?: InputMaybe<ANALYTICS__Allocation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__Pool_orderBy =
  | 'id'
  | 'allocation'
  | 'totalQueryFees'
  | 'claimedFees'
  | 'curatorRewards'
  | 'closedAllocations';

export type Query = {
  ANALYTICS__graphNetwork?: Maybe<ANALYTICS__GraphNetwork>;
  ANALYTICS__graphNetworks: Array<ANALYTICS__GraphNetwork>;
  ANALYTICS__graphAccount?: Maybe<ANALYTICS__GraphAccount>;
  ANALYTICS__graphAccounts: Array<ANALYTICS__GraphAccount>;
  ANALYTICS__graphAccountName?: Maybe<ANALYTICS__GraphAccountName>;
  ANALYTICS__graphAccountNames: Array<ANALYTICS__GraphAccountName>;
  ANALYTICS__subgraph?: Maybe<ANALYTICS__Subgraph>;
  ANALYTICS__subgraphs: Array<ANALYTICS__Subgraph>;
  ANALYTICS__subgraphVersion?: Maybe<ANALYTICS__SubgraphVersion>;
  ANALYTICS__subgraphVersions: Array<ANALYTICS__SubgraphVersion>;
  ANALYTICS__subgraphDeployment?: Maybe<ANALYTICS__SubgraphDeployment>;
  ANALYTICS__subgraphDeployments: Array<ANALYTICS__SubgraphDeployment>;
  ANALYTICS__indexer?: Maybe<ANALYTICS__Indexer>;
  ANALYTICS__indexers: Array<ANALYTICS__Indexer>;
  ANALYTICS__allocation?: Maybe<ANALYTICS__Allocation>;
  ANALYTICS__allocations: Array<ANALYTICS__Allocation>;
  ANALYTICS__pool?: Maybe<ANALYTICS__Pool>;
  ANALYTICS__pools: Array<ANALYTICS__Pool>;
  ANALYTICS__delegator?: Maybe<ANALYTICS__Delegator>;
  ANALYTICS__delegators: Array<ANALYTICS__Delegator>;
  ANALYTICS__delegatedStake?: Maybe<ANALYTICS__DelegatedStake>;
  ANALYTICS__delegatedStakes: Array<ANALYTICS__DelegatedStake>;
  ANALYTICS__curator?: Maybe<ANALYTICS__Curator>;
  ANALYTICS__curators: Array<ANALYTICS__Curator>;
  ANALYTICS__signal?: Maybe<ANALYTICS__Signal>;
  ANALYTICS__signals: Array<ANALYTICS__Signal>;
  ANALYTICS__nameSignal?: Maybe<ANALYTICS__NameSignal>;
  ANALYTICS__nameSignals: Array<ANALYTICS__NameSignal>;
  ANALYTICS__nameSignalTransaction?: Maybe<ANALYTICS__NameSignalTransaction>;
  ANALYTICS__nameSignalTransactions: Array<ANALYTICS__NameSignalTransaction>;
  ANALYTICS__signalTransaction?: Maybe<ANALYTICS__SignalTransaction>;
  ANALYTICS__signalTransactions: Array<ANALYTICS__SignalTransaction>;
  ANALYTICS__indexerDelegatedStakeRelation?: Maybe<ANALYTICS__IndexerDelegatedStakeRelation>;
  ANALYTICS__indexerDelegatedStakeRelations: Array<ANALYTICS__IndexerDelegatedStakeRelation>;
  ANALYTICS__indexerDailyData?: Maybe<ANALYTICS__IndexerDailyData>;
  ANALYTICS__indexerDailyDatas: Array<ANALYTICS__IndexerDailyData>;
  ANALYTICS__delegatorDailyData?: Maybe<ANALYTICS__DelegatorDailyData>;
  ANALYTICS__delegatorDailyDatas: Array<ANALYTICS__DelegatorDailyData>;
  ANALYTICS__delegatedStakeDailyData?: Maybe<ANALYTICS__DelegatedStakeDailyData>;
  ANALYTICS__delegatedStakeDailyDatas: Array<ANALYTICS__DelegatedStakeDailyData>;
  ANALYTICS__delegatorDelegatedStakeDailyRelation?: Maybe<ANALYTICS__DelegatorDelegatedStakeDailyRelation>;
  ANALYTICS__delegatorDelegatedStakeDailyRelations: Array<ANALYTICS__DelegatorDelegatedStakeDailyRelation>;
  ANALYTICS__subgraphDeploymentDailyData?: Maybe<ANALYTICS__SubgraphDeploymentDailyData>;
  ANALYTICS__subgraphDeploymentDailyDatas: Array<ANALYTICS__SubgraphDeploymentDailyData>;
  ANALYTICS__graphNetworkDailyData?: Maybe<ANALYTICS__GraphNetworkDailyData>;
  ANALYTICS__graphNetworkDailyDatas: Array<ANALYTICS__GraphNetworkDailyData>;
  ANALYTICS__transaction?: Maybe<ANALYTICS__Transaction>;
  ANALYTICS__transactions: Array<ANALYTICS__Transaction>;
  ANALYTICS__delegatorSearch: Array<ANALYTICS__Delegator>;
  /** Access to subgraph metadata */
  ANALYTICS___meta?: Maybe<ANALYTICS___Meta_>;
};


export type QueryANALYTICS__graphNetworkArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__graphNetworksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__GraphNetwork_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__GraphNetwork_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__graphAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__graphAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__GraphAccount_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__GraphAccount_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__graphAccountNameArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__graphAccountNamesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__GraphAccountName_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__GraphAccountName_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__subgraphArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__subgraphsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Subgraph_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Subgraph_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__subgraphVersionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__subgraphVersionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__SubgraphVersion_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__SubgraphVersion_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__subgraphDeploymentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__subgraphDeploymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__SubgraphDeployment_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__SubgraphDeployment_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__indexerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__indexersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Indexer_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Indexer_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__allocationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__allocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Allocation_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Allocation_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Pool_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Pool_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__delegatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__delegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Delegator_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Delegator_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__delegatedStakeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__delegatedStakesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__DelegatedStake_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__DelegatedStake_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__curatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__curatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Curator_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Curator_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__signalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__signalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Signal_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Signal_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__nameSignalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__nameSignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__NameSignal_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__NameSignal_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__nameSignalTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__nameSignalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__NameSignalTransaction_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__NameSignalTransaction_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__signalTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__signalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__SignalTransaction_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__SignalTransaction_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__indexerDelegatedStakeRelationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__indexerDelegatedStakeRelationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__IndexerDelegatedStakeRelation_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__IndexerDelegatedStakeRelation_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__indexerDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__indexerDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__IndexerDailyData_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__IndexerDailyData_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__delegatorDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__delegatorDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__DelegatorDailyData_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__DelegatorDailyData_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__delegatedStakeDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__delegatedStakeDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__DelegatedStakeDailyData_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__DelegatedStakeDailyData_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__delegatorDelegatedStakeDailyRelationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__delegatorDelegatedStakeDailyRelationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__DelegatorDelegatedStakeDailyRelation_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__DelegatorDelegatedStakeDailyRelation_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__subgraphDeploymentDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__subgraphDeploymentDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__SubgraphDeploymentDailyData_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__SubgraphDeploymentDailyData_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__graphNetworkDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__graphNetworkDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__GraphNetworkDailyData_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__GraphNetworkDailyData_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Transaction_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Transaction_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS__delegatorSearchArgs = {
  text: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type QueryANALYTICS___metaArgs = {
  block?: InputMaybe<ANALYTICS__Block_height>;
};

/**
 * Curator Signal for a single SubgraphDeployment
 *
 */
export type ANALYTICS__Signal = {
  /** Eth address + subgraph deployment ID */
  id: Scalars['ID'];
  /** Eth address of the curator */
  curator: ANALYTICS__Curator;
  /** Subgraph being signalled */
  subgraphDeployment: ANALYTICS__SubgraphDeployment;
  /** CUMULATIVE number of tokens the curator has signalled */
  signalledTokens: Scalars['BigInt'];
  /** CUMULATIVE number of tokens the curator has unsignalled */
  unsignalledTokens: Scalars['BigInt'];
  /** Signal that the curator has from signaling their GRT */
  signal: Scalars['BigInt'];
  /** Block for which the curator last entered or exited the curve */
  lastSignalChange: Scalars['Int'];
  /** Summation of realized rewards from before the last time the curator entered the curation curve */
  realizedRewards: Scalars['BigInt'];
};

/**
 * All relevant data for a Signal Transaction in The Graph Network
 *
 */
export type ANALYTICS__SignalTransaction = ANALYTICS__Transaction & {
  id: Scalars['ID'];
  blockNumber: Scalars['Int'];
  timestamp: Scalars['Int'];
  signer: ANALYTICS__GraphAccount;
  type: ANALYTICS__TransactionType;
  /** Amount of signal updated */
  signal: Scalars['BigInt'];
  /** Tokens used */
  tokens: Scalars['BigInt'];
  /** Subgraph where signal was updated */
  subgraphDeployment: ANALYTICS__SubgraphDeployment;
  /** Withdrawal fees. On minting only */
  withdrawalFees: Scalars['BigInt'];
};

export type ANALYTICS__SignalTransaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<ANALYTICS__GraphAccount_filter>;
  type?: InputMaybe<ANALYTICS__TransactionType>;
  type_not?: InputMaybe<ANALYTICS__TransactionType>;
  type_in?: InputMaybe<Array<ANALYTICS__TransactionType>>;
  type_not_in?: InputMaybe<Array<ANALYTICS__TransactionType>>;
  signal?: InputMaybe<Scalars['BigInt']>;
  signal_not?: InputMaybe<Scalars['BigInt']>;
  signal_gt?: InputMaybe<Scalars['BigInt']>;
  signal_lt?: InputMaybe<Scalars['BigInt']>;
  signal_gte?: InputMaybe<Scalars['BigInt']>;
  signal_lte?: InputMaybe<Scalars['BigInt']>;
  signal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens?: InputMaybe<Scalars['BigInt']>;
  tokens_not?: InputMaybe<Scalars['BigInt']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']>;
  tokens_lt?: InputMaybe<Scalars['BigInt']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<ANALYTICS__SubgraphDeployment_filter>;
  withdrawalFees?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_not?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawalFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__SignalTransaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'signer'
  | 'type'
  | 'signal'
  | 'tokens'
  | 'subgraphDeployment'
  | 'withdrawalFees';

export type ANALYTICS__Signal_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  curator?: InputMaybe<Scalars['String']>;
  curator_not?: InputMaybe<Scalars['String']>;
  curator_gt?: InputMaybe<Scalars['String']>;
  curator_lt?: InputMaybe<Scalars['String']>;
  curator_gte?: InputMaybe<Scalars['String']>;
  curator_lte?: InputMaybe<Scalars['String']>;
  curator_in?: InputMaybe<Array<Scalars['String']>>;
  curator_not_in?: InputMaybe<Array<Scalars['String']>>;
  curator_contains?: InputMaybe<Scalars['String']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_not_contains?: InputMaybe<Scalars['String']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  curator_starts_with?: InputMaybe<Scalars['String']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_starts_with?: InputMaybe<Scalars['String']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curator_ends_with?: InputMaybe<Scalars['String']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curator_?: InputMaybe<ANALYTICS__Curator_filter>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<ANALYTICS__SubgraphDeployment_filter>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal?: InputMaybe<Scalars['BigInt']>;
  signal_not?: InputMaybe<Scalars['BigInt']>;
  signal_gt?: InputMaybe<Scalars['BigInt']>;
  signal_lt?: InputMaybe<Scalars['BigInt']>;
  signal_gte?: InputMaybe<Scalars['BigInt']>;
  signal_lte?: InputMaybe<Scalars['BigInt']>;
  signal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastSignalChange?: InputMaybe<Scalars['Int']>;
  lastSignalChange_not?: InputMaybe<Scalars['Int']>;
  lastSignalChange_gt?: InputMaybe<Scalars['Int']>;
  lastSignalChange_lt?: InputMaybe<Scalars['Int']>;
  lastSignalChange_gte?: InputMaybe<Scalars['Int']>;
  lastSignalChange_lte?: InputMaybe<Scalars['Int']>;
  lastSignalChange_in?: InputMaybe<Array<Scalars['Int']>>;
  lastSignalChange_not_in?: InputMaybe<Array<Scalars['Int']>>;
  realizedRewards?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__Signal_orderBy =
  | 'id'
  | 'curator'
  | 'subgraphDeployment'
  | 'signalledTokens'
  | 'unsignalledTokens'
  | 'signal'
  | 'lastSignalChange'
  | 'realizedRewards';

/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 *
 */
export type ANALYTICS__Subgraph = {
  /** Subgraph ID - which is derived from the Organization/Individual graph accountID */
  id: Scalars['ID'];
  /** Graph account that owns this subgraph */
  owner: ANALYTICS__GraphAccount;
  /** Current version */
  currentVersion?: Maybe<ANALYTICS__SubgraphVersion>;
  /** [DEPRECATED] Past versions. Has the same data as 'versions' but keeps the old naming for backwards compatibility */
  pastVersions: Array<ANALYTICS__SubgraphVersion>;
  /** List of all the subgraph versions included the current one */
  versions: Array<ANALYTICS__SubgraphVersion>;
  /** Version counter */
  versionCount: Scalars['BigInt'];
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** Updated timestamp */
  updatedAt: Scalars['Int'];
  /** Whether the subgraph is active or deprecated */
  active: Scalars['Boolean'];
  /** Whether the subgraph has been migrated to the NFT implementation */
  migrated: Scalars['Boolean'];
  /** Auxiliary field to denote whether the subgraph is handling the initialization order on V2 events. Doesn't matter for V1 events. */
  initializing: Scalars['Boolean'];
  /** The actual ID of the subgraph on the contracts subgraph NFT implementation. BigInt represented as a String. It's only actually valid once the subgraph is migrated (migrated == true) */
  nftID: Scalars['String'];
  /** ID of the subgraph that was used on the old version of this The Graph Network Subgraph. Null for Subgraphs created with the new GNS implementation */
  oldID?: Maybe<Scalars['String']>;
  /** Address used to create the ID. Only available for Subgraphs created pre-migration */
  creatorAddress?: Maybe<Scalars['ANALYTICS__Bytes']>;
  /** Subgraph number used to create the ID. Only available for Subgraphs created pre-migration */
  subgraphNumber?: Maybe<Scalars['BigInt']>;
  /** Version of the entity. Subgraph entities are changing the way their ID is generated when the new GNS v2 rolls out so we need to differnetiate them */
  entityVersion: Scalars['Int'];
  /** Subgraph entities might have 'duplicate' entities so that old IDs can be persisted and still queried properly. If that happens we have to link both duplicate entities to be able to update them properly. */
  linkedEntity?: Maybe<ANALYTICS__Subgraph>;
  /** CUMULATIVE signaled tokens on this subgraph all time */
  signalledTokens: Scalars['BigInt'];
  /** CUMULATIVE unsignalled tokens on this subgraph all time */
  unsignalledTokens: Scalars['BigInt'];
  /** The CURRENT name signal amount for this subgraph */
  nameSignalAmount: Scalars['BigInt'];
  /** Reserve ratio of the name curation curve. In parts per million */
  reserveRatio: Scalars['Int'];
  /** Tokens that can be withdrawn once the Subgraph is deprecated */
  withdrawableTokens: Scalars['BigInt'];
  /** Tokens the curators have withdrawn from the deprecated Subgraph */
  withdrawnTokens: Scalars['BigInt'];
  /** Curators of this subgraph deployment */
  nameSignals: Array<ANALYTICS__NameSignal>;
  /** Subgraph metadata */
  metadataHash?: Maybe<Scalars['ANALYTICS__Bytes']>;
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 *
 */
export type ANALYTICS__SubgraphpastVersionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__SubgraphVersion_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__SubgraphVersion_filter>;
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 *
 */
export type ANALYTICS__SubgraphversionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__SubgraphVersion_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__SubgraphVersion_filter>;
};


/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 *
 */
export type ANALYTICS__SubgraphnameSignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__NameSignal_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__NameSignal_filter>;
};

/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type ANALYTICS__SubgraphDeployment = {
  /** Subgraph Deployment ID. The IPFS hash with Qm removed to fit into 32 bytes */
  id: Scalars['ID'];
  /** The versions this subgraph deployment relates to */
  versions: Array<ANALYTICS__SubgraphVersion>;
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** The block at which this deployment was denied for rewards. Null if not denied */
  deniedAt: Scalars['Int'];
  /** CURRENT total stake of all indexers on this Subgraph Deployment */
  stakedTokens: Scalars['BigInt'];
  /** Allocations created by indexers for this Subgraph */
  indexerAllocations: Array<ANALYTICS__Allocation>;
  /** Total rewards accrued all time by this Subgraph Deployment. Includes delegator and indexer rewards */
  indexingRewardAmount: Scalars['BigInt'];
  /** Total rewards accrued all time by indexers */
  indexingIndexerRewardAmount: Scalars['BigInt'];
  /** Total rewards accrued all time by delegators */
  indexingDelegatorRewardAmount: Scalars['BigInt'];
  /** Total query fees earned by this Subgraph Deployment, without curator query fees */
  queryFeesAmount: Scalars['BigInt'];
  /** Total query fee rebates for indexers earned from the protocol, through the cobbs douglas formula. */
  queryFeeRebates: Scalars['BigInt'];
  /** Total query fee rebates for delegators earned from the protocol, through the cobbs douglas formula. */
  delegatorQueryFees: Scalars['BigInt'];
  /** Total curator rewards from fees */
  curatorFeeRewards: Scalars['BigInt'];
  /** CURRENT signalled tokens in the bonding curve */
  signalledTokens: Scalars['BigInt'];
  /** NOT IMPLEMENTED - CURRENT signalled tokens in the bonding curve */
  unsignalledTokens: Scalars['BigInt'];
  /** CURRENT curation signal for this subgraph deployment */
  signalAmount: Scalars['BigInt'];
  /** signalledTokens / signalAmount */
  pricePerShare: Scalars['ANALYTICS__BigDecimal'];
  /** Curators of this subgraph deployment */
  curatorSignals: Array<ANALYTICS__Signal>;
  /** Bonding curve reserve ratio. In parts per million */
  reserveRatio: Scalars['Int'];
  dailyData: Array<ANALYTICS__SubgraphDeploymentDailyData>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type ANALYTICS__SubgraphDeploymentversionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__SubgraphVersion_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__SubgraphVersion_filter>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type ANALYTICS__SubgraphDeploymentindexerAllocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Allocation_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Allocation_filter>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type ANALYTICS__SubgraphDeploymentcuratorSignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Signal_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Signal_filter>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type ANALYTICS__SubgraphDeploymentdailyDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__SubgraphDeploymentDailyData_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__SubgraphDeploymentDailyData_filter>;
};

export type ANALYTICS__SubgraphDeploymentDailyData = {
  /** <SUBGRAPH ID>-<DAY NUMBER> */
  id: Scalars['ID'];
  /** Timestamp for the start of the day that this entity represents. UTC+0 */
  dayStart: Scalars['BigInt'];
  /** Timestamp for the end of the day that this entity represents. UTC+0 */
  dayEnd: Scalars['BigInt'];
  /** Number of the day this entity represents. Day 0 is the network launch day. */
  dayNumber: Scalars['Int'];
  /** Original entity that the daily data entity tracks */
  subgraphDeployment: ANALYTICS__SubgraphDeployment;
  /** [CURRENT] Amount of allocated/staked tokens on this deployment at this specific day */
  stakedTokens: Scalars['BigInt'];
  /** [CURRENT] Amount of signalled tokens on this deployment at this specific day */
  signalledTokens: Scalars['BigInt'];
  /** [CURRENT] Amount of signal on this deployment at this specific day */
  signalAmount: Scalars['BigInt'];
  /** [CURRENT] Value of pricePerShare for the original entity at this specific day */
  pricePerShare: Scalars['ANALYTICS__BigDecimal'];
  /** [CUMULATIVE] Total rewards accrued all time by this Subgraph Deployment. Includes delegator and indexer rewards */
  indexingRewardAmount: Scalars['BigInt'];
  /** [CUMULATIVE] Total rewards accrued all time by indexers */
  indexingIndexerRewardAmount: Scalars['BigInt'];
  /** [CUMULATIVE] Total rewards accrued all time by delegators */
  indexingDelegatorRewardAmount: Scalars['BigInt'];
  /** [CUMULATIVE] Total query fees earned by this Subgraph Deployment, without curator query fees */
  queryFeesAmount: Scalars['BigInt'];
  /** [CUMULATIVE] Total query fee rebates for indexers earned from the protocol, through the cobbs douglas formula. */
  queryFeeRebates: Scalars['BigInt'];
  /** [CUMULATIVE] Total query fee rebates for delegators earned from the protocol, through the cobbs douglas formula. */
  delegatorQueryFees: Scalars['BigInt'];
  /** [CUMULATIVE] Total curator rewards from fees */
  curatorFeeRewards: Scalars['BigInt'];
};

export type ANALYTICS__SubgraphDeploymentDailyData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  dayStart?: InputMaybe<Scalars['BigInt']>;
  dayStart_not?: InputMaybe<Scalars['BigInt']>;
  dayStart_gt?: InputMaybe<Scalars['BigInt']>;
  dayStart_lt?: InputMaybe<Scalars['BigInt']>;
  dayStart_gte?: InputMaybe<Scalars['BigInt']>;
  dayStart_lte?: InputMaybe<Scalars['BigInt']>;
  dayStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd?: InputMaybe<Scalars['BigInt']>;
  dayEnd_not?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lt?: InputMaybe<Scalars['BigInt']>;
  dayEnd_gte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_lte?: InputMaybe<Scalars['BigInt']>;
  dayEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dayNumber?: InputMaybe<Scalars['Int']>;
  dayNumber_not?: InputMaybe<Scalars['Int']>;
  dayNumber_gt?: InputMaybe<Scalars['Int']>;
  dayNumber_lt?: InputMaybe<Scalars['Int']>;
  dayNumber_gte?: InputMaybe<Scalars['Int']>;
  dayNumber_lte?: InputMaybe<Scalars['Int']>;
  dayNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  dayNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<ANALYTICS__SubgraphDeployment_filter>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pricePerShare?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  pricePerShare_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  indexingRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesAmount?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorQueryFees?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorFeeRewards?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorFeeRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__SubgraphDeploymentDailyData_orderBy =
  | 'id'
  | 'dayStart'
  | 'dayEnd'
  | 'dayNumber'
  | 'subgraphDeployment'
  | 'stakedTokens'
  | 'signalledTokens'
  | 'signalAmount'
  | 'pricePerShare'
  | 'indexingRewardAmount'
  | 'indexingIndexerRewardAmount'
  | 'indexingDelegatorRewardAmount'
  | 'queryFeesAmount'
  | 'queryFeeRebates'
  | 'delegatorQueryFees'
  | 'curatorFeeRewards';

export type ANALYTICS__SubgraphDeployment_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  versions_?: InputMaybe<ANALYTICS__SubgraphVersion_filter>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deniedAt?: InputMaybe<Scalars['Int']>;
  deniedAt_not?: InputMaybe<Scalars['Int']>;
  deniedAt_gt?: InputMaybe<Scalars['Int']>;
  deniedAt_lt?: InputMaybe<Scalars['Int']>;
  deniedAt_gte?: InputMaybe<Scalars['Int']>;
  deniedAt_lte?: InputMaybe<Scalars['Int']>;
  deniedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  deniedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerAllocations_?: InputMaybe<ANALYTICS__Allocation_filter>;
  indexingRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingIndexerRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingIndexerRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewardAmount?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  indexingDelegatorRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexingDelegatorRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesAmount?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorQueryFees?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorFeeRewards?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_not?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_gt?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_lt?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_gte?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_lte?: InputMaybe<Scalars['BigInt']>;
  curatorFeeRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorFeeRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pricePerShare?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_not?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_gt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_lt?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_gte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_lte?: InputMaybe<Scalars['ANALYTICS__BigDecimal']>;
  pricePerShare_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  pricePerShare_not_in?: InputMaybe<Array<Scalars['ANALYTICS__BigDecimal']>>;
  curatorSignals_?: InputMaybe<ANALYTICS__Signal_filter>;
  reserveRatio?: InputMaybe<Scalars['Int']>;
  reserveRatio_not?: InputMaybe<Scalars['Int']>;
  reserveRatio_gt?: InputMaybe<Scalars['Int']>;
  reserveRatio_lt?: InputMaybe<Scalars['Int']>;
  reserveRatio_gte?: InputMaybe<Scalars['Int']>;
  reserveRatio_lte?: InputMaybe<Scalars['Int']>;
  reserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  reserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyData_?: InputMaybe<ANALYTICS__SubgraphDeploymentDailyData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__SubgraphDeployment_orderBy =
  | 'id'
  | 'versions'
  | 'createdAt'
  | 'deniedAt'
  | 'stakedTokens'
  | 'indexerAllocations'
  | 'indexingRewardAmount'
  | 'indexingIndexerRewardAmount'
  | 'indexingDelegatorRewardAmount'
  | 'queryFeesAmount'
  | 'queryFeeRebates'
  | 'delegatorQueryFees'
  | 'curatorFeeRewards'
  | 'signalledTokens'
  | 'unsignalledTokens'
  | 'signalAmount'
  | 'pricePerShare'
  | 'curatorSignals'
  | 'reserveRatio'
  | 'dailyData';

/**
 * The SubgraphVersion entity represents a version of the Subgraph. A new SubgraphVersion is created
 * whenever there is an update to the Subgraph triggered by the owner. The new SubgraphVersion can
 * then point to a new SubgraphDeployment, thus allowing the Subgraph to resolve to a different
 * deployment, while keeping the same endpoint. The metadata and label are stored on IPFS. The label
 * is for the developer to provide a semantic version. This is different from the version, which is
 * just a counter than increases each time a new SubgraphVersion is created for a Subgraph.
 *
 */
export type ANALYTICS__SubgraphVersion = {
  /** Concatenation of subgraph, subgraph deployment, and version ID */
  id: Scalars['ID'];
  /** Subgraph of this version */
  subgraph: ANALYTICS__Subgraph;
  /** Subgraph deployment of this version */
  subgraphDeployment: ANALYTICS__SubgraphDeployment;
  /** Version number */
  version: Scalars['Int'];
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** Subgraph version metadata content address */
  metadataHash?: Maybe<Scalars['ANALYTICS__Bytes']>;
  entityVersion: Scalars['Int'];
  linkedEntity?: Maybe<ANALYTICS__SubgraphVersion>;
};

export type ANALYTICS__SubgraphVersion_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  subgraph?: InputMaybe<Scalars['String']>;
  subgraph_not?: InputMaybe<Scalars['String']>;
  subgraph_gt?: InputMaybe<Scalars['String']>;
  subgraph_lt?: InputMaybe<Scalars['String']>;
  subgraph_gte?: InputMaybe<Scalars['String']>;
  subgraph_lte?: InputMaybe<Scalars['String']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraph_contains?: InputMaybe<Scalars['String']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraph_?: InputMaybe<ANALYTICS__Subgraph_filter>;
  subgraphDeployment?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphDeployment_?: InputMaybe<ANALYTICS__SubgraphDeployment_filter>;
  version?: InputMaybe<Scalars['Int']>;
  version_not?: InputMaybe<Scalars['Int']>;
  version_gt?: InputMaybe<Scalars['Int']>;
  version_lt?: InputMaybe<Scalars['Int']>;
  version_gte?: InputMaybe<Scalars['Int']>;
  version_lte?: InputMaybe<Scalars['Int']>;
  version_in?: InputMaybe<Array<Scalars['Int']>>;
  version_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  metadataHash?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_lt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  metadataHash_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  entityVersion?: InputMaybe<Scalars['Int']>;
  entityVersion_not?: InputMaybe<Scalars['Int']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']>;
  entityVersion_lt?: InputMaybe<Scalars['Int']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
  linkedEntity?: InputMaybe<Scalars['String']>;
  linkedEntity_not?: InputMaybe<Scalars['String']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']>;
  linkedEntity_lt?: InputMaybe<Scalars['String']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_?: InputMaybe<ANALYTICS__SubgraphVersion_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__SubgraphVersion_orderBy =
  | 'id'
  | 'subgraph'
  | 'subgraphDeployment'
  | 'version'
  | 'createdAt'
  | 'metadataHash'
  | 'entityVersion'
  | 'linkedEntity';

export type ANALYTICS__Subgraph_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  owner_?: InputMaybe<ANALYTICS__GraphAccount_filter>;
  currentVersion?: InputMaybe<Scalars['String']>;
  currentVersion_not?: InputMaybe<Scalars['String']>;
  currentVersion_gt?: InputMaybe<Scalars['String']>;
  currentVersion_lt?: InputMaybe<Scalars['String']>;
  currentVersion_gte?: InputMaybe<Scalars['String']>;
  currentVersion_lte?: InputMaybe<Scalars['String']>;
  currentVersion_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersion_contains?: InputMaybe<Scalars['String']>;
  currentVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_not_contains?: InputMaybe<Scalars['String']>;
  currentVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_starts_with?: InputMaybe<Scalars['String']>;
  currentVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  currentVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_ends_with?: InputMaybe<Scalars['String']>;
  currentVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  currentVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersion_?: InputMaybe<ANALYTICS__SubgraphVersion_filter>;
  pastVersions_?: InputMaybe<ANALYTICS__SubgraphVersion_filter>;
  versions_?: InputMaybe<ANALYTICS__SubgraphVersion_filter>;
  versionCount?: InputMaybe<Scalars['BigInt']>;
  versionCount_not?: InputMaybe<Scalars['BigInt']>;
  versionCount_gt?: InputMaybe<Scalars['BigInt']>;
  versionCount_lt?: InputMaybe<Scalars['BigInt']>;
  versionCount_gte?: InputMaybe<Scalars['BigInt']>;
  versionCount_lte?: InputMaybe<Scalars['BigInt']>;
  versionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  versionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt?: InputMaybe<Scalars['Int']>;
  updatedAt_not?: InputMaybe<Scalars['Int']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']>;
  updatedAt_lt?: InputMaybe<Scalars['Int']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  migrated?: InputMaybe<Scalars['Boolean']>;
  migrated_not?: InputMaybe<Scalars['Boolean']>;
  migrated_in?: InputMaybe<Array<Scalars['Boolean']>>;
  migrated_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  initializing?: InputMaybe<Scalars['Boolean']>;
  initializing_not?: InputMaybe<Scalars['Boolean']>;
  initializing_in?: InputMaybe<Array<Scalars['Boolean']>>;
  initializing_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  nftID?: InputMaybe<Scalars['String']>;
  nftID_not?: InputMaybe<Scalars['String']>;
  nftID_gt?: InputMaybe<Scalars['String']>;
  nftID_lt?: InputMaybe<Scalars['String']>;
  nftID_gte?: InputMaybe<Scalars['String']>;
  nftID_lte?: InputMaybe<Scalars['String']>;
  nftID_in?: InputMaybe<Array<Scalars['String']>>;
  nftID_not_in?: InputMaybe<Array<Scalars['String']>>;
  nftID_contains?: InputMaybe<Scalars['String']>;
  nftID_contains_nocase?: InputMaybe<Scalars['String']>;
  nftID_not_contains?: InputMaybe<Scalars['String']>;
  nftID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nftID_starts_with?: InputMaybe<Scalars['String']>;
  nftID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftID_not_starts_with?: InputMaybe<Scalars['String']>;
  nftID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftID_ends_with?: InputMaybe<Scalars['String']>;
  nftID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftID_not_ends_with?: InputMaybe<Scalars['String']>;
  nftID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oldID?: InputMaybe<Scalars['String']>;
  oldID_not?: InputMaybe<Scalars['String']>;
  oldID_gt?: InputMaybe<Scalars['String']>;
  oldID_lt?: InputMaybe<Scalars['String']>;
  oldID_gte?: InputMaybe<Scalars['String']>;
  oldID_lte?: InputMaybe<Scalars['String']>;
  oldID_in?: InputMaybe<Array<Scalars['String']>>;
  oldID_not_in?: InputMaybe<Array<Scalars['String']>>;
  oldID_contains?: InputMaybe<Scalars['String']>;
  oldID_contains_nocase?: InputMaybe<Scalars['String']>;
  oldID_not_contains?: InputMaybe<Scalars['String']>;
  oldID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  oldID_starts_with?: InputMaybe<Scalars['String']>;
  oldID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldID_not_starts_with?: InputMaybe<Scalars['String']>;
  oldID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldID_ends_with?: InputMaybe<Scalars['String']>;
  oldID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oldID_not_ends_with?: InputMaybe<Scalars['String']>;
  oldID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creatorAddress?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creatorAddress_not?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creatorAddress_gt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creatorAddress_lt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creatorAddress_gte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creatorAddress_lte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creatorAddress_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  creatorAddress_not_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  creatorAddress_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  creatorAddress_not_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  subgraphNumber?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_not?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_gt?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_lt?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_gte?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_lte?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  entityVersion?: InputMaybe<Scalars['Int']>;
  entityVersion_not?: InputMaybe<Scalars['Int']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']>;
  entityVersion_lt?: InputMaybe<Scalars['Int']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
  linkedEntity?: InputMaybe<Scalars['String']>;
  linkedEntity_not?: InputMaybe<Scalars['String']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']>;
  linkedEntity_lt?: InputMaybe<Scalars['String']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedEntity_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedEntity_?: InputMaybe<ANALYTICS__Subgraph_filter>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignalAmount?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_not?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveRatio?: InputMaybe<Scalars['Int']>;
  reserveRatio_not?: InputMaybe<Scalars['Int']>;
  reserveRatio_gt?: InputMaybe<Scalars['Int']>;
  reserveRatio_lt?: InputMaybe<Scalars['Int']>;
  reserveRatio_gte?: InputMaybe<Scalars['Int']>;
  reserveRatio_lte?: InputMaybe<Scalars['Int']>;
  reserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  reserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawableTokens?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_not?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawableTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawableTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignals_?: InputMaybe<ANALYTICS__NameSignal_filter>;
  metadataHash?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_lt?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['ANALYTICS__Bytes']>>;
  metadataHash_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['ANALYTICS__Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__Subgraph_orderBy =
  | 'id'
  | 'owner'
  | 'currentVersion'
  | 'pastVersions'
  | 'versions'
  | 'versionCount'
  | 'createdAt'
  | 'updatedAt'
  | 'active'
  | 'migrated'
  | 'initializing'
  | 'nftID'
  | 'oldID'
  | 'creatorAddress'
  | 'subgraphNumber'
  | 'entityVersion'
  | 'linkedEntity'
  | 'signalledTokens'
  | 'unsignalledTokens'
  | 'nameSignalAmount'
  | 'reserveRatio'
  | 'withdrawableTokens'
  | 'withdrawnTokens'
  | 'nameSignals'
  | 'metadataHash';

export type Subscription = {
  ANALYTICS__graphNetwork?: Maybe<ANALYTICS__GraphNetwork>;
  ANALYTICS__graphNetworks: Array<ANALYTICS__GraphNetwork>;
  ANALYTICS__graphAccount?: Maybe<ANALYTICS__GraphAccount>;
  ANALYTICS__graphAccounts: Array<ANALYTICS__GraphAccount>;
  ANALYTICS__graphAccountName?: Maybe<ANALYTICS__GraphAccountName>;
  ANALYTICS__graphAccountNames: Array<ANALYTICS__GraphAccountName>;
  ANALYTICS__subgraph?: Maybe<ANALYTICS__Subgraph>;
  ANALYTICS__subgraphs: Array<ANALYTICS__Subgraph>;
  ANALYTICS__subgraphVersion?: Maybe<ANALYTICS__SubgraphVersion>;
  ANALYTICS__subgraphVersions: Array<ANALYTICS__SubgraphVersion>;
  ANALYTICS__subgraphDeployment?: Maybe<ANALYTICS__SubgraphDeployment>;
  ANALYTICS__subgraphDeployments: Array<ANALYTICS__SubgraphDeployment>;
  ANALYTICS__indexer?: Maybe<ANALYTICS__Indexer>;
  ANALYTICS__indexers: Array<ANALYTICS__Indexer>;
  ANALYTICS__allocation?: Maybe<ANALYTICS__Allocation>;
  ANALYTICS__allocations: Array<ANALYTICS__Allocation>;
  ANALYTICS__pool?: Maybe<ANALYTICS__Pool>;
  ANALYTICS__pools: Array<ANALYTICS__Pool>;
  ANALYTICS__delegator?: Maybe<ANALYTICS__Delegator>;
  ANALYTICS__delegators: Array<ANALYTICS__Delegator>;
  ANALYTICS__delegatedStake?: Maybe<ANALYTICS__DelegatedStake>;
  ANALYTICS__delegatedStakes: Array<ANALYTICS__DelegatedStake>;
  ANALYTICS__curator?: Maybe<ANALYTICS__Curator>;
  ANALYTICS__curators: Array<ANALYTICS__Curator>;
  ANALYTICS__signal?: Maybe<ANALYTICS__Signal>;
  ANALYTICS__signals: Array<ANALYTICS__Signal>;
  ANALYTICS__nameSignal?: Maybe<ANALYTICS__NameSignal>;
  ANALYTICS__nameSignals: Array<ANALYTICS__NameSignal>;
  ANALYTICS__nameSignalTransaction?: Maybe<ANALYTICS__NameSignalTransaction>;
  ANALYTICS__nameSignalTransactions: Array<ANALYTICS__NameSignalTransaction>;
  ANALYTICS__signalTransaction?: Maybe<ANALYTICS__SignalTransaction>;
  ANALYTICS__signalTransactions: Array<ANALYTICS__SignalTransaction>;
  ANALYTICS__indexerDelegatedStakeRelation?: Maybe<ANALYTICS__IndexerDelegatedStakeRelation>;
  ANALYTICS__indexerDelegatedStakeRelations: Array<ANALYTICS__IndexerDelegatedStakeRelation>;
  ANALYTICS__indexerDailyData?: Maybe<ANALYTICS__IndexerDailyData>;
  ANALYTICS__indexerDailyDatas: Array<ANALYTICS__IndexerDailyData>;
  ANALYTICS__delegatorDailyData?: Maybe<ANALYTICS__DelegatorDailyData>;
  ANALYTICS__delegatorDailyDatas: Array<ANALYTICS__DelegatorDailyData>;
  ANALYTICS__delegatedStakeDailyData?: Maybe<ANALYTICS__DelegatedStakeDailyData>;
  ANALYTICS__delegatedStakeDailyDatas: Array<ANALYTICS__DelegatedStakeDailyData>;
  ANALYTICS__delegatorDelegatedStakeDailyRelation?: Maybe<ANALYTICS__DelegatorDelegatedStakeDailyRelation>;
  ANALYTICS__delegatorDelegatedStakeDailyRelations: Array<ANALYTICS__DelegatorDelegatedStakeDailyRelation>;
  ANALYTICS__subgraphDeploymentDailyData?: Maybe<ANALYTICS__SubgraphDeploymentDailyData>;
  ANALYTICS__subgraphDeploymentDailyDatas: Array<ANALYTICS__SubgraphDeploymentDailyData>;
  ANALYTICS__graphNetworkDailyData?: Maybe<ANALYTICS__GraphNetworkDailyData>;
  ANALYTICS__graphNetworkDailyDatas: Array<ANALYTICS__GraphNetworkDailyData>;
  ANALYTICS__transaction?: Maybe<ANALYTICS__Transaction>;
  ANALYTICS__transactions: Array<ANALYTICS__Transaction>;
  /** Access to subgraph metadata */
  ANALYTICS___meta?: Maybe<ANALYTICS___Meta_>;
};


export type SubscriptionANALYTICS__graphNetworkArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__graphNetworksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__GraphNetwork_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__GraphNetwork_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__graphAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__graphAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__GraphAccount_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__GraphAccount_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__graphAccountNameArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__graphAccountNamesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__GraphAccountName_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__GraphAccountName_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__subgraphArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__subgraphsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Subgraph_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Subgraph_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__subgraphVersionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__subgraphVersionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__SubgraphVersion_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__SubgraphVersion_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__subgraphDeploymentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__subgraphDeploymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__SubgraphDeployment_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__SubgraphDeployment_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__indexerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__indexersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Indexer_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Indexer_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__allocationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__allocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Allocation_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Allocation_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Pool_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Pool_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__delegatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__delegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Delegator_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Delegator_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__delegatedStakeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__delegatedStakesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__DelegatedStake_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__DelegatedStake_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__curatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__curatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Curator_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Curator_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__signalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__signalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Signal_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Signal_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__nameSignalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__nameSignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__NameSignal_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__NameSignal_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__nameSignalTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__nameSignalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__NameSignalTransaction_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__NameSignalTransaction_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__signalTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__signalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__SignalTransaction_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__SignalTransaction_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__indexerDelegatedStakeRelationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__indexerDelegatedStakeRelationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__IndexerDelegatedStakeRelation_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__IndexerDelegatedStakeRelation_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__indexerDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__indexerDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__IndexerDailyData_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__IndexerDailyData_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__delegatorDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__delegatorDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__DelegatorDailyData_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__DelegatorDailyData_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__delegatedStakeDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__delegatedStakeDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__DelegatedStakeDailyData_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__DelegatedStakeDailyData_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__delegatorDelegatedStakeDailyRelationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__delegatorDelegatedStakeDailyRelationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__DelegatorDelegatedStakeDailyRelation_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__DelegatorDelegatedStakeDailyRelation_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__subgraphDeploymentDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__subgraphDeploymentDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__SubgraphDeploymentDailyData_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__SubgraphDeploymentDailyData_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__graphNetworkDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__graphNetworkDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__GraphNetworkDailyData_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__GraphNetworkDailyData_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS__transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ANALYTICS__Transaction_orderBy>;
  orderDirection?: InputMaybe<ANALYTICS__OrderDirection>;
  where?: InputMaybe<ANALYTICS__Transaction_filter>;
  block?: InputMaybe<ANALYTICS__Block_height>;
  subgraphError?: ANALYTICS___SubgraphErrorPolicy_;
};


export type SubscriptionANALYTICS___metaArgs = {
  block?: InputMaybe<ANALYTICS__Block_height>;
};

/**
 * A generic transaction in The Graph Network
 *
 */
export type ANALYTICS__Transaction = {
  /** Transaction hash concatenated with event log index */
  id: Scalars['ID'];
  /** Block number for the transaction */
  blockNumber: Scalars['Int'];
  /** Timestamp for the transaction */
  timestamp: Scalars['Int'];
  /** Signer of the transaction */
  signer: ANALYTICS__GraphAccount;
  /** Type of Graph Network transaction */
  type: ANALYTICS__TransactionType;
};

export type ANALYTICS__TransactionType =
  | 'Stake'
  | 'Unstake'
  | 'MintSignal'
  | 'BurnSignal'
  | 'MintNSignal'
  | 'BurnNSignal';

export type ANALYTICS__Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<ANALYTICS__GraphAccount_filter>;
  type?: InputMaybe<ANALYTICS__TransactionType>;
  type_not?: InputMaybe<ANALYTICS__TransactionType>;
  type_in?: InputMaybe<Array<ANALYTICS__TransactionType>>;
  type_not_in?: InputMaybe<Array<ANALYTICS__TransactionType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ANALYTICS__BlockChangedFilter>;
};

export type ANALYTICS__Transaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'signer'
  | 'type';

export type ANALYTICS___Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['ANALYTICS__Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type ANALYTICS___Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: ANALYTICS___Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type ANALYTICS___SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  ANALYTICS__graphNetwork: InContextSdkMethod<Query['ANALYTICS__graphNetwork'], QueryANALYTICS__graphNetworkArgs, MeshContext>,
  /** null **/
  ANALYTICS__graphNetworks: InContextSdkMethod<Query['ANALYTICS__graphNetworks'], QueryANALYTICS__graphNetworksArgs, MeshContext>,
  /** null **/
  ANALYTICS__graphAccount: InContextSdkMethod<Query['ANALYTICS__graphAccount'], QueryANALYTICS__graphAccountArgs, MeshContext>,
  /** null **/
  ANALYTICS__graphAccounts: InContextSdkMethod<Query['ANALYTICS__graphAccounts'], QueryANALYTICS__graphAccountsArgs, MeshContext>,
  /** null **/
  ANALYTICS__graphAccountName: InContextSdkMethod<Query['ANALYTICS__graphAccountName'], QueryANALYTICS__graphAccountNameArgs, MeshContext>,
  /** null **/
  ANALYTICS__graphAccountNames: InContextSdkMethod<Query['ANALYTICS__graphAccountNames'], QueryANALYTICS__graphAccountNamesArgs, MeshContext>,
  /** null **/
  ANALYTICS__subgraph: InContextSdkMethod<Query['ANALYTICS__subgraph'], QueryANALYTICS__subgraphArgs, MeshContext>,
  /** null **/
  ANALYTICS__subgraphs: InContextSdkMethod<Query['ANALYTICS__subgraphs'], QueryANALYTICS__subgraphsArgs, MeshContext>,
  /** null **/
  ANALYTICS__subgraphVersion: InContextSdkMethod<Query['ANALYTICS__subgraphVersion'], QueryANALYTICS__subgraphVersionArgs, MeshContext>,
  /** null **/
  ANALYTICS__subgraphVersions: InContextSdkMethod<Query['ANALYTICS__subgraphVersions'], QueryANALYTICS__subgraphVersionsArgs, MeshContext>,
  /** null **/
  ANALYTICS__subgraphDeployment: InContextSdkMethod<Query['ANALYTICS__subgraphDeployment'], QueryANALYTICS__subgraphDeploymentArgs, MeshContext>,
  /** null **/
  ANALYTICS__subgraphDeployments: InContextSdkMethod<Query['ANALYTICS__subgraphDeployments'], QueryANALYTICS__subgraphDeploymentsArgs, MeshContext>,
  /** null **/
  ANALYTICS__indexer: InContextSdkMethod<Query['ANALYTICS__indexer'], QueryANALYTICS__indexerArgs, MeshContext>,
  /** null **/
  ANALYTICS__indexers: InContextSdkMethod<Query['ANALYTICS__indexers'], QueryANALYTICS__indexersArgs, MeshContext>,
  /** null **/
  ANALYTICS__allocation: InContextSdkMethod<Query['ANALYTICS__allocation'], QueryANALYTICS__allocationArgs, MeshContext>,
  /** null **/
  ANALYTICS__allocations: InContextSdkMethod<Query['ANALYTICS__allocations'], QueryANALYTICS__allocationsArgs, MeshContext>,
  /** null **/
  ANALYTICS__pool: InContextSdkMethod<Query['ANALYTICS__pool'], QueryANALYTICS__poolArgs, MeshContext>,
  /** null **/
  ANALYTICS__pools: InContextSdkMethod<Query['ANALYTICS__pools'], QueryANALYTICS__poolsArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegator: InContextSdkMethod<Query['ANALYTICS__delegator'], QueryANALYTICS__delegatorArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegators: InContextSdkMethod<Query['ANALYTICS__delegators'], QueryANALYTICS__delegatorsArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatedStake: InContextSdkMethod<Query['ANALYTICS__delegatedStake'], QueryANALYTICS__delegatedStakeArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatedStakes: InContextSdkMethod<Query['ANALYTICS__delegatedStakes'], QueryANALYTICS__delegatedStakesArgs, MeshContext>,
  /** null **/
  ANALYTICS__curator: InContextSdkMethod<Query['ANALYTICS__curator'], QueryANALYTICS__curatorArgs, MeshContext>,
  /** null **/
  ANALYTICS__curators: InContextSdkMethod<Query['ANALYTICS__curators'], QueryANALYTICS__curatorsArgs, MeshContext>,
  /** null **/
  ANALYTICS__signal: InContextSdkMethod<Query['ANALYTICS__signal'], QueryANALYTICS__signalArgs, MeshContext>,
  /** null **/
  ANALYTICS__signals: InContextSdkMethod<Query['ANALYTICS__signals'], QueryANALYTICS__signalsArgs, MeshContext>,
  /** null **/
  ANALYTICS__nameSignal: InContextSdkMethod<Query['ANALYTICS__nameSignal'], QueryANALYTICS__nameSignalArgs, MeshContext>,
  /** null **/
  ANALYTICS__nameSignals: InContextSdkMethod<Query['ANALYTICS__nameSignals'], QueryANALYTICS__nameSignalsArgs, MeshContext>,
  /** null **/
  ANALYTICS__nameSignalTransaction: InContextSdkMethod<Query['ANALYTICS__nameSignalTransaction'], QueryANALYTICS__nameSignalTransactionArgs, MeshContext>,
  /** null **/
  ANALYTICS__nameSignalTransactions: InContextSdkMethod<Query['ANALYTICS__nameSignalTransactions'], QueryANALYTICS__nameSignalTransactionsArgs, MeshContext>,
  /** null **/
  ANALYTICS__signalTransaction: InContextSdkMethod<Query['ANALYTICS__signalTransaction'], QueryANALYTICS__signalTransactionArgs, MeshContext>,
  /** null **/
  ANALYTICS__signalTransactions: InContextSdkMethod<Query['ANALYTICS__signalTransactions'], QueryANALYTICS__signalTransactionsArgs, MeshContext>,
  /** null **/
  ANALYTICS__indexerDelegatedStakeRelation: InContextSdkMethod<Query['ANALYTICS__indexerDelegatedStakeRelation'], QueryANALYTICS__indexerDelegatedStakeRelationArgs, MeshContext>,
  /** null **/
  ANALYTICS__indexerDelegatedStakeRelations: InContextSdkMethod<Query['ANALYTICS__indexerDelegatedStakeRelations'], QueryANALYTICS__indexerDelegatedStakeRelationsArgs, MeshContext>,
  /** null **/
  ANALYTICS__indexerDailyData: InContextSdkMethod<Query['ANALYTICS__indexerDailyData'], QueryANALYTICS__indexerDailyDataArgs, MeshContext>,
  /** null **/
  ANALYTICS__indexerDailyDatas: InContextSdkMethod<Query['ANALYTICS__indexerDailyDatas'], QueryANALYTICS__indexerDailyDatasArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatorDailyData: InContextSdkMethod<Query['ANALYTICS__delegatorDailyData'], QueryANALYTICS__delegatorDailyDataArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatorDailyDatas: InContextSdkMethod<Query['ANALYTICS__delegatorDailyDatas'], QueryANALYTICS__delegatorDailyDatasArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatedStakeDailyData: InContextSdkMethod<Query['ANALYTICS__delegatedStakeDailyData'], QueryANALYTICS__delegatedStakeDailyDataArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatedStakeDailyDatas: InContextSdkMethod<Query['ANALYTICS__delegatedStakeDailyDatas'], QueryANALYTICS__delegatedStakeDailyDatasArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatorDelegatedStakeDailyRelation: InContextSdkMethod<Query['ANALYTICS__delegatorDelegatedStakeDailyRelation'], QueryANALYTICS__delegatorDelegatedStakeDailyRelationArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatorDelegatedStakeDailyRelations: InContextSdkMethod<Query['ANALYTICS__delegatorDelegatedStakeDailyRelations'], QueryANALYTICS__delegatorDelegatedStakeDailyRelationsArgs, MeshContext>,
  /** null **/
  ANALYTICS__subgraphDeploymentDailyData: InContextSdkMethod<Query['ANALYTICS__subgraphDeploymentDailyData'], QueryANALYTICS__subgraphDeploymentDailyDataArgs, MeshContext>,
  /** null **/
  ANALYTICS__subgraphDeploymentDailyDatas: InContextSdkMethod<Query['ANALYTICS__subgraphDeploymentDailyDatas'], QueryANALYTICS__subgraphDeploymentDailyDatasArgs, MeshContext>,
  /** null **/
  ANALYTICS__graphNetworkDailyData: InContextSdkMethod<Query['ANALYTICS__graphNetworkDailyData'], QueryANALYTICS__graphNetworkDailyDataArgs, MeshContext>,
  /** null **/
  ANALYTICS__graphNetworkDailyDatas: InContextSdkMethod<Query['ANALYTICS__graphNetworkDailyDatas'], QueryANALYTICS__graphNetworkDailyDatasArgs, MeshContext>,
  /** null **/
  ANALYTICS__transaction: InContextSdkMethod<Query['ANALYTICS__transaction'], QueryANALYTICS__transactionArgs, MeshContext>,
  /** null **/
  ANALYTICS__transactions: InContextSdkMethod<Query['ANALYTICS__transactions'], QueryANALYTICS__transactionsArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatorSearch: InContextSdkMethod<Query['ANALYTICS__delegatorSearch'], QueryANALYTICS__delegatorSearchArgs, MeshContext>,
  /** Access to subgraph metadata **/
  ANALYTICS___meta: InContextSdkMethod<Query['ANALYTICS___meta'], QueryANALYTICS___metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  ANALYTICS__graphNetwork: InContextSdkMethod<Subscription['ANALYTICS__graphNetwork'], SubscriptionANALYTICS__graphNetworkArgs, MeshContext>,
  /** null **/
  ANALYTICS__graphNetworks: InContextSdkMethod<Subscription['ANALYTICS__graphNetworks'], SubscriptionANALYTICS__graphNetworksArgs, MeshContext>,
  /** null **/
  ANALYTICS__graphAccount: InContextSdkMethod<Subscription['ANALYTICS__graphAccount'], SubscriptionANALYTICS__graphAccountArgs, MeshContext>,
  /** null **/
  ANALYTICS__graphAccounts: InContextSdkMethod<Subscription['ANALYTICS__graphAccounts'], SubscriptionANALYTICS__graphAccountsArgs, MeshContext>,
  /** null **/
  ANALYTICS__graphAccountName: InContextSdkMethod<Subscription['ANALYTICS__graphAccountName'], SubscriptionANALYTICS__graphAccountNameArgs, MeshContext>,
  /** null **/
  ANALYTICS__graphAccountNames: InContextSdkMethod<Subscription['ANALYTICS__graphAccountNames'], SubscriptionANALYTICS__graphAccountNamesArgs, MeshContext>,
  /** null **/
  ANALYTICS__subgraph: InContextSdkMethod<Subscription['ANALYTICS__subgraph'], SubscriptionANALYTICS__subgraphArgs, MeshContext>,
  /** null **/
  ANALYTICS__subgraphs: InContextSdkMethod<Subscription['ANALYTICS__subgraphs'], SubscriptionANALYTICS__subgraphsArgs, MeshContext>,
  /** null **/
  ANALYTICS__subgraphVersion: InContextSdkMethod<Subscription['ANALYTICS__subgraphVersion'], SubscriptionANALYTICS__subgraphVersionArgs, MeshContext>,
  /** null **/
  ANALYTICS__subgraphVersions: InContextSdkMethod<Subscription['ANALYTICS__subgraphVersions'], SubscriptionANALYTICS__subgraphVersionsArgs, MeshContext>,
  /** null **/
  ANALYTICS__subgraphDeployment: InContextSdkMethod<Subscription['ANALYTICS__subgraphDeployment'], SubscriptionANALYTICS__subgraphDeploymentArgs, MeshContext>,
  /** null **/
  ANALYTICS__subgraphDeployments: InContextSdkMethod<Subscription['ANALYTICS__subgraphDeployments'], SubscriptionANALYTICS__subgraphDeploymentsArgs, MeshContext>,
  /** null **/
  ANALYTICS__indexer: InContextSdkMethod<Subscription['ANALYTICS__indexer'], SubscriptionANALYTICS__indexerArgs, MeshContext>,
  /** null **/
  ANALYTICS__indexers: InContextSdkMethod<Subscription['ANALYTICS__indexers'], SubscriptionANALYTICS__indexersArgs, MeshContext>,
  /** null **/
  ANALYTICS__allocation: InContextSdkMethod<Subscription['ANALYTICS__allocation'], SubscriptionANALYTICS__allocationArgs, MeshContext>,
  /** null **/
  ANALYTICS__allocations: InContextSdkMethod<Subscription['ANALYTICS__allocations'], SubscriptionANALYTICS__allocationsArgs, MeshContext>,
  /** null **/
  ANALYTICS__pool: InContextSdkMethod<Subscription['ANALYTICS__pool'], SubscriptionANALYTICS__poolArgs, MeshContext>,
  /** null **/
  ANALYTICS__pools: InContextSdkMethod<Subscription['ANALYTICS__pools'], SubscriptionANALYTICS__poolsArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegator: InContextSdkMethod<Subscription['ANALYTICS__delegator'], SubscriptionANALYTICS__delegatorArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegators: InContextSdkMethod<Subscription['ANALYTICS__delegators'], SubscriptionANALYTICS__delegatorsArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatedStake: InContextSdkMethod<Subscription['ANALYTICS__delegatedStake'], SubscriptionANALYTICS__delegatedStakeArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatedStakes: InContextSdkMethod<Subscription['ANALYTICS__delegatedStakes'], SubscriptionANALYTICS__delegatedStakesArgs, MeshContext>,
  /** null **/
  ANALYTICS__curator: InContextSdkMethod<Subscription['ANALYTICS__curator'], SubscriptionANALYTICS__curatorArgs, MeshContext>,
  /** null **/
  ANALYTICS__curators: InContextSdkMethod<Subscription['ANALYTICS__curators'], SubscriptionANALYTICS__curatorsArgs, MeshContext>,
  /** null **/
  ANALYTICS__signal: InContextSdkMethod<Subscription['ANALYTICS__signal'], SubscriptionANALYTICS__signalArgs, MeshContext>,
  /** null **/
  ANALYTICS__signals: InContextSdkMethod<Subscription['ANALYTICS__signals'], SubscriptionANALYTICS__signalsArgs, MeshContext>,
  /** null **/
  ANALYTICS__nameSignal: InContextSdkMethod<Subscription['ANALYTICS__nameSignal'], SubscriptionANALYTICS__nameSignalArgs, MeshContext>,
  /** null **/
  ANALYTICS__nameSignals: InContextSdkMethod<Subscription['ANALYTICS__nameSignals'], SubscriptionANALYTICS__nameSignalsArgs, MeshContext>,
  /** null **/
  ANALYTICS__nameSignalTransaction: InContextSdkMethod<Subscription['ANALYTICS__nameSignalTransaction'], SubscriptionANALYTICS__nameSignalTransactionArgs, MeshContext>,
  /** null **/
  ANALYTICS__nameSignalTransactions: InContextSdkMethod<Subscription['ANALYTICS__nameSignalTransactions'], SubscriptionANALYTICS__nameSignalTransactionsArgs, MeshContext>,
  /** null **/
  ANALYTICS__signalTransaction: InContextSdkMethod<Subscription['ANALYTICS__signalTransaction'], SubscriptionANALYTICS__signalTransactionArgs, MeshContext>,
  /** null **/
  ANALYTICS__signalTransactions: InContextSdkMethod<Subscription['ANALYTICS__signalTransactions'], SubscriptionANALYTICS__signalTransactionsArgs, MeshContext>,
  /** null **/
  ANALYTICS__indexerDelegatedStakeRelation: InContextSdkMethod<Subscription['ANALYTICS__indexerDelegatedStakeRelation'], SubscriptionANALYTICS__indexerDelegatedStakeRelationArgs, MeshContext>,
  /** null **/
  ANALYTICS__indexerDelegatedStakeRelations: InContextSdkMethod<Subscription['ANALYTICS__indexerDelegatedStakeRelations'], SubscriptionANALYTICS__indexerDelegatedStakeRelationsArgs, MeshContext>,
  /** null **/
  ANALYTICS__indexerDailyData: InContextSdkMethod<Subscription['ANALYTICS__indexerDailyData'], SubscriptionANALYTICS__indexerDailyDataArgs, MeshContext>,
  /** null **/
  ANALYTICS__indexerDailyDatas: InContextSdkMethod<Subscription['ANALYTICS__indexerDailyDatas'], SubscriptionANALYTICS__indexerDailyDatasArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatorDailyData: InContextSdkMethod<Subscription['ANALYTICS__delegatorDailyData'], SubscriptionANALYTICS__delegatorDailyDataArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatorDailyDatas: InContextSdkMethod<Subscription['ANALYTICS__delegatorDailyDatas'], SubscriptionANALYTICS__delegatorDailyDatasArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatedStakeDailyData: InContextSdkMethod<Subscription['ANALYTICS__delegatedStakeDailyData'], SubscriptionANALYTICS__delegatedStakeDailyDataArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatedStakeDailyDatas: InContextSdkMethod<Subscription['ANALYTICS__delegatedStakeDailyDatas'], SubscriptionANALYTICS__delegatedStakeDailyDatasArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatorDelegatedStakeDailyRelation: InContextSdkMethod<Subscription['ANALYTICS__delegatorDelegatedStakeDailyRelation'], SubscriptionANALYTICS__delegatorDelegatedStakeDailyRelationArgs, MeshContext>,
  /** null **/
  ANALYTICS__delegatorDelegatedStakeDailyRelations: InContextSdkMethod<Subscription['ANALYTICS__delegatorDelegatedStakeDailyRelations'], SubscriptionANALYTICS__delegatorDelegatedStakeDailyRelationsArgs, MeshContext>,
  /** null **/
  ANALYTICS__subgraphDeploymentDailyData: InContextSdkMethod<Subscription['ANALYTICS__subgraphDeploymentDailyData'], SubscriptionANALYTICS__subgraphDeploymentDailyDataArgs, MeshContext>,
  /** null **/
  ANALYTICS__subgraphDeploymentDailyDatas: InContextSdkMethod<Subscription['ANALYTICS__subgraphDeploymentDailyDatas'], SubscriptionANALYTICS__subgraphDeploymentDailyDatasArgs, MeshContext>,
  /** null **/
  ANALYTICS__graphNetworkDailyData: InContextSdkMethod<Subscription['ANALYTICS__graphNetworkDailyData'], SubscriptionANALYTICS__graphNetworkDailyDataArgs, MeshContext>,
  /** null **/
  ANALYTICS__graphNetworkDailyDatas: InContextSdkMethod<Subscription['ANALYTICS__graphNetworkDailyDatas'], SubscriptionANALYTICS__graphNetworkDailyDatasArgs, MeshContext>,
  /** null **/
  ANALYTICS__transaction: InContextSdkMethod<Subscription['ANALYTICS__transaction'], SubscriptionANALYTICS__transactionArgs, MeshContext>,
  /** null **/
  ANALYTICS__transactions: InContextSdkMethod<Subscription['ANALYTICS__transactions'], SubscriptionANALYTICS__transactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  ANALYTICS___meta: InContextSdkMethod<Subscription['ANALYTICS___meta'], SubscriptionANALYTICS___metaArgs, MeshContext>
  };

  export type Context = {
      ["Analytics"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["analytics"]: Scalars['ID']
    };
}
