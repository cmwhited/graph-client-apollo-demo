// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace NetworkTypes {
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
  NETWORK__BigDecimal: any;
  BigInt: any;
  NETWORK__Bytes: any;
};

/**
 * A state channel Allocation representing a single Indexer-SubgraphDeployment stake
 *
 */
export type NETWORK__Allocation = {
  /** Channel Address */
  id: Scalars['ID'];
  /** Indexer of this allocation */
  indexer: NETWORK__Indexer;
  /** Creator of the allocation - can be the operator or the indexer */
  creator: Scalars['NETWORK__Bytes'];
  /** If the Allocation is active it shows the indexer. If closed, it is null */
  activeForIndexer?: Maybe<NETWORK__Indexer>;
  /** Subgraph deployment that is being allocated to */
  subgraphDeployment: NETWORK__SubgraphDeployment;
  /** Tokens allocation in this allocation */
  allocatedTokens: Scalars['BigInt'];
  /** Effective allocation that is realized upon closing */
  effectiveAllocation: Scalars['BigInt'];
  /** Epoch this allocation was created */
  createdAtEpoch: Scalars['Int'];
  /** Block at which this allocation was created */
  createdAtBlockHash: Scalars['NETWORK__Bytes'];
  /** Block number at which this allocation was created */
  createdAtBlockNumber: Scalars['Int'];
  /** Epoch this allocation was closed in */
  closedAtEpoch?: Maybe<Scalars['Int']>;
  /** Block hash at which this allocation was closed */
  closedAtBlockHash?: Maybe<Scalars['NETWORK__Bytes']>;
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
  poolClosedIn?: Maybe<NETWORK__Pool>;
  /** Fees paid out to delegators */
  delegationFees: Scalars['BigInt'];
  /** Status of the allocation */
  status: NETWORK__AllocationStatus;
  /** Timestamp this allocation was created at */
  createdAt: Scalars['Int'];
  /** Timestamp this allocation was closed at */
  closedAt?: Maybe<Scalars['Int']>;
  /** POI submitted with a closed allocation */
  poi?: Maybe<Scalars['NETWORK__Bytes']>;
  indexingRewardCutAtStart: Scalars['Int'];
  indexingRewardEffectiveCutAtStart: Scalars['NETWORK__BigDecimal'];
  queryFeeCutAtStart: Scalars['Int'];
  queryFeeEffectiveCutAtStart: Scalars['NETWORK__BigDecimal'];
  indexingRewardCutAtClose?: Maybe<Scalars['Int']>;
  indexingRewardEffectiveCutAtClose?: Maybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeCutAtClose?: Maybe<Scalars['Int']>;
  queryFeeEffectiveCutAtClose?: Maybe<Scalars['NETWORK__BigDecimal']>;
  /** NOT IMPLEMENTED - Return for this allocation */
  totalReturn: Scalars['NETWORK__BigDecimal'];
  /** NOT IMPLEMENTED - Yearly annualzied return */
  annualizedReturn: Scalars['NETWORK__BigDecimal'];
};

export type NETWORK__AllocationStatus =
  | 'Null'
  | 'Active'
  | 'Closed'
  | 'Finalized'
  | 'Claimed';

export type NETWORK__Allocation_filter = {
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
  indexer_?: InputMaybe<NETWORK__Indexer_filter>;
  creator?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creator_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creator_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creator_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creator_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creator_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creator_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  creator_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  creator_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creator_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
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
  activeForIndexer_?: InputMaybe<NETWORK__Indexer_filter>;
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
  subgraphDeployment_?: InputMaybe<NETWORK__SubgraphDeployment_filter>;
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
  createdAtBlockHash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  createdAtBlockHash_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  createdAtBlockHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  createdAtBlockHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  createdAtBlockHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  createdAtBlockHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  createdAtBlockHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  createdAtBlockHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  createdAtBlockHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  createdAtBlockHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  createdAtBlockNumber?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['Int']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtEpoch?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_not?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_gt?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_lt?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_gte?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_lte?: InputMaybe<Scalars['Int']>;
  closedAtEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAtBlockHash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  closedAtBlockHash_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  closedAtBlockHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  closedAtBlockHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  closedAtBlockHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  closedAtBlockHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  closedAtBlockHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  closedAtBlockHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  closedAtBlockHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  closedAtBlockHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
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
  poolClosedIn_?: InputMaybe<NETWORK__Pool_filter>;
  delegationFees?: InputMaybe<Scalars['BigInt']>;
  delegationFees_not?: InputMaybe<Scalars['BigInt']>;
  delegationFees_gt?: InputMaybe<Scalars['BigInt']>;
  delegationFees_lt?: InputMaybe<Scalars['BigInt']>;
  delegationFees_gte?: InputMaybe<Scalars['BigInt']>;
  delegationFees_lte?: InputMaybe<Scalars['BigInt']>;
  delegationFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<NETWORK__AllocationStatus>;
  status_not?: InputMaybe<NETWORK__AllocationStatus>;
  status_in?: InputMaybe<Array<NETWORK__AllocationStatus>>;
  status_not_in?: InputMaybe<Array<NETWORK__AllocationStatus>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAt?: InputMaybe<Scalars['Int']>;
  closedAt_not?: InputMaybe<Scalars['Int']>;
  closedAt_gt?: InputMaybe<Scalars['Int']>;
  closedAt_lt?: InputMaybe<Scalars['Int']>;
  closedAt_gte?: InputMaybe<Scalars['Int']>;
  closedAt_lte?: InputMaybe<Scalars['Int']>;
  closedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  poi?: InputMaybe<Scalars['NETWORK__Bytes']>;
  poi_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  poi_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  poi_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  poi_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  poi_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  poi_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  poi_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  poi_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  poi_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  indexingRewardCutAtStart?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_not?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_gt?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_lt?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_gte?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_lte?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtStart_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCutAtStart_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardEffectiveCutAtStart?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtStart_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtStart_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtStart_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtStart_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtStart_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtStart_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  indexingRewardEffectiveCutAtStart_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  queryFeeCutAtStart?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_not?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_gt?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_lt?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_gte?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_lte?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtStart_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeCutAtStart_not_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeEffectiveCutAtStart?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtStart_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtStart_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtStart_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtStart_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtStart_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtStart_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  queryFeeEffectiveCutAtStart_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  indexingRewardCutAtClose?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_not?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_gt?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_lt?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_gte?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_lte?: InputMaybe<Scalars['Int']>;
  indexingRewardCutAtClose_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCutAtClose_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardEffectiveCutAtClose?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtClose_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtClose_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtClose_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtClose_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtClose_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCutAtClose_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  indexingRewardEffectiveCutAtClose_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  queryFeeCutAtClose?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_not?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_gt?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_lt?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_gte?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_lte?: InputMaybe<Scalars['Int']>;
  queryFeeCutAtClose_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeCutAtClose_not_in?: InputMaybe<Array<Scalars['Int']>>;
  queryFeeEffectiveCutAtClose?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtClose_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtClose_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtClose_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtClose_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtClose_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCutAtClose_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  queryFeeEffectiveCutAtClose_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  annualizedReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__Allocation_orderBy =
  | 'id'
  | 'indexer'
  | 'creator'
  | 'activeForIndexer'
  | 'subgraphDeployment'
  | 'allocatedTokens'
  | 'effectiveAllocation'
  | 'createdAtEpoch'
  | 'createdAtBlockHash'
  | 'createdAtBlockNumber'
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
  | 'closedAt'
  | 'poi'
  | 'indexingRewardCutAtStart'
  | 'indexingRewardEffectiveCutAtStart'
  | 'queryFeeCutAtStart'
  | 'queryFeeEffectiveCutAtStart'
  | 'indexingRewardCutAtClose'
  | 'indexingRewardEffectiveCutAtClose'
  | 'queryFeeCutAtClose'
  | 'queryFeeEffectiveCutAtClose'
  | 'totalReturn'
  | 'annualizedReturn';

/**
 * Attestation of a dispute
 *
 */
export type NETWORK__Attestation = {
  /** Concatenation of the requestCID and responseCID */
  id: Scalars['ID'];
  /** Subgraph deployment being disputed */
  subgraphDeployment: NETWORK__SubgraphDeployment;
  /** RequestCID */
  requestCID: Scalars['String'];
  /** ResponseCID */
  responseCID: Scalars['String'];
  /** NOT IMPLEMENTED - Gas used by the attested query */
  gasUsed?: Maybe<Scalars['BigInt']>;
  /** NOT IMPLEMENTED - Bytes of attested query */
  responseNumBytes?: Maybe<Scalars['BigInt']>;
  /** V of the indexers signature */
  v: Scalars['Int'];
  /** R of the indexers signature */
  r: Scalars['String'];
  /** S of the indexers signature */
  s: Scalars['String'];
};

export type NETWORK__Attestation_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  subgraphDeployment_?: InputMaybe<NETWORK__SubgraphDeployment_filter>;
  requestCID?: InputMaybe<Scalars['String']>;
  requestCID_not?: InputMaybe<Scalars['String']>;
  requestCID_gt?: InputMaybe<Scalars['String']>;
  requestCID_lt?: InputMaybe<Scalars['String']>;
  requestCID_gte?: InputMaybe<Scalars['String']>;
  requestCID_lte?: InputMaybe<Scalars['String']>;
  requestCID_in?: InputMaybe<Array<Scalars['String']>>;
  requestCID_not_in?: InputMaybe<Array<Scalars['String']>>;
  requestCID_contains?: InputMaybe<Scalars['String']>;
  requestCID_contains_nocase?: InputMaybe<Scalars['String']>;
  requestCID_not_contains?: InputMaybe<Scalars['String']>;
  requestCID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  requestCID_starts_with?: InputMaybe<Scalars['String']>;
  requestCID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  requestCID_not_starts_with?: InputMaybe<Scalars['String']>;
  requestCID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  requestCID_ends_with?: InputMaybe<Scalars['String']>;
  requestCID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  requestCID_not_ends_with?: InputMaybe<Scalars['String']>;
  requestCID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  responseCID?: InputMaybe<Scalars['String']>;
  responseCID_not?: InputMaybe<Scalars['String']>;
  responseCID_gt?: InputMaybe<Scalars['String']>;
  responseCID_lt?: InputMaybe<Scalars['String']>;
  responseCID_gte?: InputMaybe<Scalars['String']>;
  responseCID_lte?: InputMaybe<Scalars['String']>;
  responseCID_in?: InputMaybe<Array<Scalars['String']>>;
  responseCID_not_in?: InputMaybe<Array<Scalars['String']>>;
  responseCID_contains?: InputMaybe<Scalars['String']>;
  responseCID_contains_nocase?: InputMaybe<Scalars['String']>;
  responseCID_not_contains?: InputMaybe<Scalars['String']>;
  responseCID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  responseCID_starts_with?: InputMaybe<Scalars['String']>;
  responseCID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  responseCID_not_starts_with?: InputMaybe<Scalars['String']>;
  responseCID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  responseCID_ends_with?: InputMaybe<Scalars['String']>;
  responseCID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  responseCID_not_ends_with?: InputMaybe<Scalars['String']>;
  responseCID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  responseNumBytes?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_not?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_gt?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_lt?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_gte?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_lte?: InputMaybe<Scalars['BigInt']>;
  responseNumBytes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  responseNumBytes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  v?: InputMaybe<Scalars['Int']>;
  v_not?: InputMaybe<Scalars['Int']>;
  v_gt?: InputMaybe<Scalars['Int']>;
  v_lt?: InputMaybe<Scalars['Int']>;
  v_gte?: InputMaybe<Scalars['Int']>;
  v_lte?: InputMaybe<Scalars['Int']>;
  v_in?: InputMaybe<Array<Scalars['Int']>>;
  v_not_in?: InputMaybe<Array<Scalars['Int']>>;
  r?: InputMaybe<Scalars['String']>;
  r_not?: InputMaybe<Scalars['String']>;
  r_gt?: InputMaybe<Scalars['String']>;
  r_lt?: InputMaybe<Scalars['String']>;
  r_gte?: InputMaybe<Scalars['String']>;
  r_lte?: InputMaybe<Scalars['String']>;
  r_in?: InputMaybe<Array<Scalars['String']>>;
  r_not_in?: InputMaybe<Array<Scalars['String']>>;
  r_contains?: InputMaybe<Scalars['String']>;
  r_contains_nocase?: InputMaybe<Scalars['String']>;
  r_not_contains?: InputMaybe<Scalars['String']>;
  r_not_contains_nocase?: InputMaybe<Scalars['String']>;
  r_starts_with?: InputMaybe<Scalars['String']>;
  r_starts_with_nocase?: InputMaybe<Scalars['String']>;
  r_not_starts_with?: InputMaybe<Scalars['String']>;
  r_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  r_ends_with?: InputMaybe<Scalars['String']>;
  r_ends_with_nocase?: InputMaybe<Scalars['String']>;
  r_not_ends_with?: InputMaybe<Scalars['String']>;
  r_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  s?: InputMaybe<Scalars['String']>;
  s_not?: InputMaybe<Scalars['String']>;
  s_gt?: InputMaybe<Scalars['String']>;
  s_lt?: InputMaybe<Scalars['String']>;
  s_gte?: InputMaybe<Scalars['String']>;
  s_lte?: InputMaybe<Scalars['String']>;
  s_in?: InputMaybe<Array<Scalars['String']>>;
  s_not_in?: InputMaybe<Array<Scalars['String']>>;
  s_contains?: InputMaybe<Scalars['String']>;
  s_contains_nocase?: InputMaybe<Scalars['String']>;
  s_not_contains?: InputMaybe<Scalars['String']>;
  s_not_contains_nocase?: InputMaybe<Scalars['String']>;
  s_starts_with?: InputMaybe<Scalars['String']>;
  s_starts_with_nocase?: InputMaybe<Scalars['String']>;
  s_not_starts_with?: InputMaybe<Scalars['String']>;
  s_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  s_ends_with?: InputMaybe<Scalars['String']>;
  s_ends_with_nocase?: InputMaybe<Scalars['String']>;
  s_not_ends_with?: InputMaybe<Scalars['String']>;
  s_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__Attestation_orderBy =
  | 'id'
  | 'subgraphDeployment'
  | 'requestCID'
  | 'responseCID'
  | 'gasUsed'
  | 'responseNumBytes'
  | 'v'
  | 'r'
  | 's';

/**
 * Authorized functions for the Manager
 *
 */
export type NETWORK__AuthorizedFunction = {
  /** Function signature (string) */
  id: Scalars['ID'];
  /** The contract address that is authorized to have this function called on itself */
  target: Scalars['NETWORK__Bytes'];
  /** Hash of the function signature */
  sigHash: Scalars['NETWORK__Bytes'];
  /** Token lock Manager */
  manager: NETWORK__TokenManager;
};

export type NETWORK__AuthorizedFunction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  target?: InputMaybe<Scalars['NETWORK__Bytes']>;
  target_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  target_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  target_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  target_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  target_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  target_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  target_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  target_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  target_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  sigHash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  sigHash_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  sigHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  sigHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  sigHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  sigHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  sigHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  sigHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  sigHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  sigHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  manager?: InputMaybe<Scalars['String']>;
  manager_not?: InputMaybe<Scalars['String']>;
  manager_gt?: InputMaybe<Scalars['String']>;
  manager_lt?: InputMaybe<Scalars['String']>;
  manager_gte?: InputMaybe<Scalars['String']>;
  manager_lte?: InputMaybe<Scalars['String']>;
  manager_in?: InputMaybe<Array<Scalars['String']>>;
  manager_not_in?: InputMaybe<Array<Scalars['String']>>;
  manager_contains?: InputMaybe<Scalars['String']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_not_contains?: InputMaybe<Scalars['String']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_starts_with?: InputMaybe<Scalars['String']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manager_not_starts_with?: InputMaybe<Scalars['String']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manager_ends_with?: InputMaybe<Scalars['String']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_?: InputMaybe<NETWORK__TokenManager_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__AuthorizedFunction_orderBy =
  | 'id'
  | 'target'
  | 'sigHash'
  | 'manager';

export type NETWORK__BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type NETWORK__Block_height = {
  hash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/**
 * Curator with all Signals and metrics
 *
 */
export type NETWORK__Curator = {
  /** Eth address of the Curator */
  id: Scalars['ID'];
  /** Time this curator was created */
  createdAt: Scalars['Int'];
  /** Graph account of this curator */
  account: NETWORK__GraphAccount;
  /** CUMULATIVE tokens signalled on all the subgraphs */
  totalSignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens unsignalled on all the subgraphs */
  totalUnsignalledTokens: Scalars['BigInt'];
  /** Subgraphs the curator is curating */
  signals: Array<NETWORK__Signal>;
  /** Default display name is the current default name. Used for filtered queries */
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** CUMULATIVE tokens signalled on all names */
  totalNameSignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens unsignalled on all names */
  totalNameUnsignalledTokens: Scalars['BigInt'];
  /** CUMULATIVE withdrawn tokens from deprecated subgraphs */
  totalWithdrawnTokens: Scalars['BigInt'];
  /** Subgraphs the curator is curating */
  nameSignals: Array<NETWORK__NameSignal>;
  /** NOT IMPLEMENTED - Summation of realized rewards from all Signals */
  realizedRewards: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Annualized rate of return on curator signal */
  annualizedReturn: Scalars['NETWORK__BigDecimal'];
  /** NOT IMPLEMENTED - Total return of the curator */
  totalReturn: Scalars['NETWORK__BigDecimal'];
  /** NOT IMPLEMENTED - Signaling efficiency of the curator */
  signalingEfficiency: Scalars['NETWORK__BigDecimal'];
  /** CURRENT summed name signal for all bonding curves */
  totalNameSignal: Scalars['NETWORK__BigDecimal'];
  /** Total curator cost basis of all shares of name pools purchased on all bonding curves */
  totalNameSignalAverageCostBasis: Scalars['NETWORK__BigDecimal'];
  /** totalNameSignalAverageCostBasis / totalNameSignal */
  totalAverageCostBasisPerNameSignal: Scalars['NETWORK__BigDecimal'];
  /** CURRENT summed signal for all bonding curves */
  totalSignal: Scalars['NETWORK__BigDecimal'];
  /** Total curator cost basis of all version signal shares purchased on all bonding curves. Includes those purchased through GNS name pools */
  totalSignalAverageCostBasis: Scalars['NETWORK__BigDecimal'];
  /** totalSignalAverageCostBasis / totalSignal */
  totalAverageCostBasisPerSignal: Scalars['NETWORK__BigDecimal'];
  /** Total amount of signals created by this user */
  signalCount: Scalars['Int'];
  /** Amount of active signals for this user */
  activeSignalCount: Scalars['Int'];
  /** Total amount of name signals created by this user */
  nameSignalCount: Scalars['Int'];
  /** Amount of active name signals for this user */
  activeNameSignalCount: Scalars['Int'];
  /** Total amount of name signals and signals created by this user. signalCount + nameSignalCount */
  combinedSignalCount: Scalars['Int'];
  /** Amount of active name signals and signals for this user. signalCount + nameSignalCount */
  activeCombinedSignalCount: Scalars['Int'];
};


/**
 * Curator with all Signals and metrics
 *
 */
export type NETWORK__CuratorsignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Signal_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Signal_filter>;
};


/**
 * Curator with all Signals and metrics
 *
 */
export type NETWORK__CuratornameSignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__NameSignal_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__NameSignal_filter>;
};

export type NETWORK__Curator_filter = {
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
  account_?: InputMaybe<NETWORK__GraphAccount_filter>;
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
  signals_?: InputMaybe<NETWORK__Signal_filter>;
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
  nameSignals_?: InputMaybe<NETWORK__NameSignal_filter>;
  realizedRewards?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  annualizedReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  signalingEfficiency?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalingEfficiency_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalingEfficiency_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalingEfficiency_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalingEfficiency_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalingEfficiency_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalingEfficiency_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  signalingEfficiency_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalNameSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalNameSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalNameSignalAverageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignalAverageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignalAverageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignalAverageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignalAverageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignalAverageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalNameSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalNameSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalAverageCostBasisPerNameSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerNameSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalAverageCostBasisPerNameSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalSignalAverageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignalAverageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignalAverageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignalAverageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignalAverageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignalAverageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalAverageCostBasisPerSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalAverageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalAverageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  signalCount?: InputMaybe<Scalars['Int']>;
  signalCount_not?: InputMaybe<Scalars['Int']>;
  signalCount_gt?: InputMaybe<Scalars['Int']>;
  signalCount_lt?: InputMaybe<Scalars['Int']>;
  signalCount_gte?: InputMaybe<Scalars['Int']>;
  signalCount_lte?: InputMaybe<Scalars['Int']>;
  signalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  signalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSignalCount?: InputMaybe<Scalars['Int']>;
  activeSignalCount_not?: InputMaybe<Scalars['Int']>;
  activeSignalCount_gt?: InputMaybe<Scalars['Int']>;
  activeSignalCount_lt?: InputMaybe<Scalars['Int']>;
  activeSignalCount_gte?: InputMaybe<Scalars['Int']>;
  activeSignalCount_lte?: InputMaybe<Scalars['Int']>;
  activeSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  nameSignalCount?: InputMaybe<Scalars['Int']>;
  nameSignalCount_not?: InputMaybe<Scalars['Int']>;
  nameSignalCount_gt?: InputMaybe<Scalars['Int']>;
  nameSignalCount_lt?: InputMaybe<Scalars['Int']>;
  nameSignalCount_gte?: InputMaybe<Scalars['Int']>;
  nameSignalCount_lte?: InputMaybe<Scalars['Int']>;
  nameSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  nameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeNameSignalCount?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_not?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_gt?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_lt?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_gte?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_lte?: InputMaybe<Scalars['Int']>;
  activeNameSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeNameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  combinedSignalCount?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_not?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_gt?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_lt?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_gte?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_lte?: InputMaybe<Scalars['Int']>;
  combinedSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  combinedSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeCombinedSignalCount?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_not?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_gt?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_lt?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_gte?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_lte?: InputMaybe<Scalars['Int']>;
  activeCombinedSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeCombinedSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__Curator_orderBy =
  | 'id'
  | 'createdAt'
  | 'account'
  | 'totalSignalledTokens'
  | 'totalUnsignalledTokens'
  | 'signals'
  | 'defaultDisplayName'
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
  | 'totalAverageCostBasisPerNameSignal'
  | 'totalSignal'
  | 'totalSignalAverageCostBasis'
  | 'totalAverageCostBasisPerSignal'
  | 'signalCount'
  | 'activeSignalCount'
  | 'nameSignalCount'
  | 'activeNameSignalCount'
  | 'combinedSignalCount'
  | 'activeCombinedSignalCount';

export type NETWORK__CurrentSubgraphDeploymentRelation = {
  /** Auxiliary entity used to batch update Subgraph entities when signalling on the deployment changes. ID replicates the deployment ID and adds a counter, to make it easy to reproduce. */
  id: Scalars['ID'];
  subgraph: NETWORK__Subgraph;
  deployment: NETWORK__SubgraphDeployment;
  /** Indicates whether this relation is active. This means that the deployment is still the current deployment for the named Subgraph */
  active: Scalars['Boolean'];
};

export type NETWORK__CurrentSubgraphDeploymentRelation_filter = {
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
  subgraph_?: InputMaybe<NETWORK__Subgraph_filter>;
  deployment?: InputMaybe<Scalars['String']>;
  deployment_not?: InputMaybe<Scalars['String']>;
  deployment_gt?: InputMaybe<Scalars['String']>;
  deployment_lt?: InputMaybe<Scalars['String']>;
  deployment_gte?: InputMaybe<Scalars['String']>;
  deployment_lte?: InputMaybe<Scalars['String']>;
  deployment_in?: InputMaybe<Array<Scalars['String']>>;
  deployment_not_in?: InputMaybe<Array<Scalars['String']>>;
  deployment_contains?: InputMaybe<Scalars['String']>;
  deployment_contains_nocase?: InputMaybe<Scalars['String']>;
  deployment_not_contains?: InputMaybe<Scalars['String']>;
  deployment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  deployment_starts_with?: InputMaybe<Scalars['String']>;
  deployment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  deployment_not_starts_with?: InputMaybe<Scalars['String']>;
  deployment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  deployment_ends_with?: InputMaybe<Scalars['String']>;
  deployment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deployment_not_ends_with?: InputMaybe<Scalars['String']>;
  deployment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deployment_?: InputMaybe<NETWORK__SubgraphDeployment_filter>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__CurrentSubgraphDeploymentRelation_orderBy =
  | 'id'
  | 'subgraph'
  | 'deployment'
  | 'active';

/**
 * Delegator stake for a single Indexer
 *
 */
export type NETWORK__DelegatedStake = {
  /** Concatenation of Delegator address and Indexer address */
  id: Scalars['ID'];
  /** Index the stake is delegated to */
  indexer: NETWORK__Indexer;
  /** Delegator */
  delegator: NETWORK__Delegator;
  /** CUMULATIVE tokens delegated */
  stakedTokens: Scalars['BigInt'];
  /** CUMULATIVE tokens undelegated */
  unstakedTokens: Scalars['BigInt'];
  /** CURRENT tokens locked */
  lockedTokens: Scalars['BigInt'];
  /** Epoch the locked tokens get unlocked */
  lockedUntil: Scalars['Int'];
  /** Shares owned in the delegator pool. Used to calculate total amount delegated */
  shareAmount: Scalars['BigInt'];
  /** The rate this delegator paid for their shares (calculated using average cost basis). Used for rewards calculations */
  personalExchangeRate: Scalars['NETWORK__BigDecimal'];
  /** Realized rewards from undelegating and realizing a reward */
  realizedRewards: Scalars['NETWORK__BigDecimal'];
  /** Time this delegator first delegated to an indexer */
  createdAt: Scalars['Int'];
  /** Last time this delegator delegated towards this indexer */
  lastDelegatedAt?: Maybe<Scalars['Int']>;
  /** Last time this delegator undelegated from this indexer */
  lastUndelegatedAt?: Maybe<Scalars['Int']>;
};

export type NETWORK__DelegatedStake_filter = {
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
  indexer_?: InputMaybe<NETWORK__Indexer_filter>;
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
  delegator_?: InputMaybe<NETWORK__Delegator_filter>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  personalExchangeRate?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  personalExchangeRate_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  personalExchangeRate_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  personalExchangeRate_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  personalExchangeRate_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  personalExchangeRate_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  personalExchangeRate_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  personalExchangeRate_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  realizedRewards?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  realizedRewards_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  realizedRewards_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  realizedRewards_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  realizedRewards_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  realizedRewards_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__DelegatedStake_orderBy =
  | 'id'
  | 'indexer'
  | 'delegator'
  | 'stakedTokens'
  | 'unstakedTokens'
  | 'lockedTokens'
  | 'lockedUntil'
  | 'shareAmount'
  | 'personalExchangeRate'
  | 'realizedRewards'
  | 'createdAt'
  | 'lastDelegatedAt'
  | 'lastUndelegatedAt';

/**
 * Delegator with all their delegated stakes towards Indexers
 *
 */
export type NETWORK__Delegator = {
  /** Delegator address */
  id: Scalars['ID'];
  /** Graph account of the delegator */
  account: NETWORK__GraphAccount;
  /** Stakes of this delegator */
  stakes: Array<NETWORK__DelegatedStake>;
  /** CUMULATIVE staked tokens in DelegatorStakes of this Delegator */
  totalStakedTokens: Scalars['BigInt'];
  /** CUMULATIVE unstaked tokens in DelegatorStakes of this Delegator */
  totalUnstakedTokens: Scalars['BigInt'];
  /** Time created at */
  createdAt: Scalars['Int'];
  /** Total realized rewards on all delegated stakes. Realized rewards are added when undelegating and realizing a profit */
  totalRealizedRewards: Scalars['NETWORK__BigDecimal'];
  /** Total DelegatedStake entity count (Active and inactive) */
  stakesCount: Scalars['Int'];
  /** Active DelegatedStake entity count. Active means it still has GRT delegated */
  activeStakesCount: Scalars['Int'];
  /** Default display name is the current default name. Used for filtered queries */
  defaultDisplayName?: Maybe<Scalars['String']>;
};


/**
 * Delegator with all their delegated stakes towards Indexers
 *
 */
export type NETWORK__DelegatorstakesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__DelegatedStake_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__DelegatedStake_filter>;
};

export type NETWORK__Delegator_filter = {
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
  account_?: InputMaybe<NETWORK__GraphAccount_filter>;
  stakes_?: InputMaybe<NETWORK__DelegatedStake_filter>;
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
  totalRealizedRewards?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalRealizedRewards_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalRealizedRewards_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalRealizedRewards_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalRealizedRewards_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalRealizedRewards_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalRealizedRewards_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalRealizedRewards_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__Delegator_orderBy =
  | 'id'
  | 'account'
  | 'stakes'
  | 'totalStakedTokens'
  | 'totalUnstakedTokens'
  | 'createdAt'
  | 'totalRealizedRewards'
  | 'stakesCount'
  | 'activeStakesCount'
  | 'defaultDisplayName';

/**
 * Dispute of a query. Includes single query, conflicting attestation, and indexing disputes
 *
 */
export type NETWORK__Dispute = {
  /** Dispute ID */
  id: Scalars['ID'];
  /** Subgraph deployment being disputed */
  subgraphDeployment: NETWORK__SubgraphDeployment;
  /** Fisherman address */
  fisherman: NETWORK__GraphAccount;
  /** Fisherman deposit */
  deposit: Scalars['BigInt'];
  /** Time dispute was created */
  createdAt: Scalars['Int'];
  /** Time dispute was closed at */
  closedAt: Scalars['Int'];
  /** Status of the dispute. Accepted means the Indexer was slashed */
  status: NETWORK__DisputeStatus;
  /** Total amount of tokens slashed on the dispute */
  tokensSlashed: Scalars['NETWORK__BigDecimal'];
  /** Amount of the slashed tokens that was burned */
  tokensBurned: Scalars['NETWORK__BigDecimal'];
  /** Amount of the slashed tokens that was payed as reward to the fisherman */
  tokensRewarded: Scalars['BigInt'];
  /** Type of dispute */
  type: NETWORK__DisputeType;
  /** Indexer disputed */
  indexer: NETWORK__GraphAccount;
  /** Attestation. Only for single query and conflicting attestations */
  attestation?: Maybe<NETWORK__Attestation>;
  /** Linked dispute of other Indexer. Only for conflicting attestation */
  linkedDispute?: Maybe<NETWORK__Dispute>;
  /** Allocation ID. Only for Indexing Disputes */
  allocation?: Maybe<NETWORK__Allocation>;
};

export type NETWORK__DisputeStatus =
  | 'Undecided'
  | 'Accepted'
  | 'Rejected'
  | 'Draw';

export type NETWORK__DisputeType =
  | 'SingleQuery'
  | 'Conflicting'
  | 'Indexing';

export type NETWORK__Dispute_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  subgraphDeployment_?: InputMaybe<NETWORK__SubgraphDeployment_filter>;
  fisherman?: InputMaybe<Scalars['String']>;
  fisherman_not?: InputMaybe<Scalars['String']>;
  fisherman_gt?: InputMaybe<Scalars['String']>;
  fisherman_lt?: InputMaybe<Scalars['String']>;
  fisherman_gte?: InputMaybe<Scalars['String']>;
  fisherman_lte?: InputMaybe<Scalars['String']>;
  fisherman_in?: InputMaybe<Array<Scalars['String']>>;
  fisherman_not_in?: InputMaybe<Array<Scalars['String']>>;
  fisherman_contains?: InputMaybe<Scalars['String']>;
  fisherman_contains_nocase?: InputMaybe<Scalars['String']>;
  fisherman_not_contains?: InputMaybe<Scalars['String']>;
  fisherman_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fisherman_starts_with?: InputMaybe<Scalars['String']>;
  fisherman_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fisherman_not_starts_with?: InputMaybe<Scalars['String']>;
  fisherman_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fisherman_ends_with?: InputMaybe<Scalars['String']>;
  fisherman_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fisherman_not_ends_with?: InputMaybe<Scalars['String']>;
  fisherman_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fisherman_?: InputMaybe<NETWORK__GraphAccount_filter>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAt?: InputMaybe<Scalars['Int']>;
  closedAt_not?: InputMaybe<Scalars['Int']>;
  closedAt_gt?: InputMaybe<Scalars['Int']>;
  closedAt_lt?: InputMaybe<Scalars['Int']>;
  closedAt_gte?: InputMaybe<Scalars['Int']>;
  closedAt_lte?: InputMaybe<Scalars['Int']>;
  closedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  closedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  status?: InputMaybe<NETWORK__DisputeStatus>;
  status_not?: InputMaybe<NETWORK__DisputeStatus>;
  status_in?: InputMaybe<Array<NETWORK__DisputeStatus>>;
  status_not_in?: InputMaybe<Array<NETWORK__DisputeStatus>>;
  tokensSlashed?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensSlashed_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensSlashed_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensSlashed_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensSlashed_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensSlashed_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensSlashed_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  tokensSlashed_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  tokensBurned?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensBurned_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensBurned_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensBurned_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensBurned_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensBurned_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  tokensBurned_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  tokensBurned_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  tokensRewarded?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_not?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_gt?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_lt?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_gte?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_lte?: InputMaybe<Scalars['BigInt']>;
  tokensRewarded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensRewarded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<NETWORK__DisputeType>;
  type_not?: InputMaybe<NETWORK__DisputeType>;
  type_in?: InputMaybe<Array<NETWORK__DisputeType>>;
  type_not_in?: InputMaybe<Array<NETWORK__DisputeType>>;
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
  indexer_?: InputMaybe<NETWORK__GraphAccount_filter>;
  attestation?: InputMaybe<Scalars['String']>;
  attestation_not?: InputMaybe<Scalars['String']>;
  attestation_gt?: InputMaybe<Scalars['String']>;
  attestation_lt?: InputMaybe<Scalars['String']>;
  attestation_gte?: InputMaybe<Scalars['String']>;
  attestation_lte?: InputMaybe<Scalars['String']>;
  attestation_in?: InputMaybe<Array<Scalars['String']>>;
  attestation_not_in?: InputMaybe<Array<Scalars['String']>>;
  attestation_contains?: InputMaybe<Scalars['String']>;
  attestation_contains_nocase?: InputMaybe<Scalars['String']>;
  attestation_not_contains?: InputMaybe<Scalars['String']>;
  attestation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  attestation_starts_with?: InputMaybe<Scalars['String']>;
  attestation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  attestation_not_starts_with?: InputMaybe<Scalars['String']>;
  attestation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  attestation_ends_with?: InputMaybe<Scalars['String']>;
  attestation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  attestation_not_ends_with?: InputMaybe<Scalars['String']>;
  attestation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  attestation_?: InputMaybe<NETWORK__Attestation_filter>;
  linkedDispute?: InputMaybe<Scalars['String']>;
  linkedDispute_not?: InputMaybe<Scalars['String']>;
  linkedDispute_gt?: InputMaybe<Scalars['String']>;
  linkedDispute_lt?: InputMaybe<Scalars['String']>;
  linkedDispute_gte?: InputMaybe<Scalars['String']>;
  linkedDispute_lte?: InputMaybe<Scalars['String']>;
  linkedDispute_in?: InputMaybe<Array<Scalars['String']>>;
  linkedDispute_not_in?: InputMaybe<Array<Scalars['String']>>;
  linkedDispute_contains?: InputMaybe<Scalars['String']>;
  linkedDispute_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_not_contains?: InputMaybe<Scalars['String']>;
  linkedDispute_not_contains_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_starts_with?: InputMaybe<Scalars['String']>;
  linkedDispute_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_not_starts_with?: InputMaybe<Scalars['String']>;
  linkedDispute_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_ends_with?: InputMaybe<Scalars['String']>;
  linkedDispute_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_not_ends_with?: InputMaybe<Scalars['String']>;
  linkedDispute_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  linkedDispute_?: InputMaybe<NETWORK__Dispute_filter>;
  allocation?: InputMaybe<Scalars['String']>;
  allocation_not?: InputMaybe<Scalars['String']>;
  allocation_gt?: InputMaybe<Scalars['String']>;
  allocation_lt?: InputMaybe<Scalars['String']>;
  allocation_gte?: InputMaybe<Scalars['String']>;
  allocation_lte?: InputMaybe<Scalars['String']>;
  allocation_in?: InputMaybe<Array<Scalars['String']>>;
  allocation_not_in?: InputMaybe<Array<Scalars['String']>>;
  allocation_contains?: InputMaybe<Scalars['String']>;
  allocation_contains_nocase?: InputMaybe<Scalars['String']>;
  allocation_not_contains?: InputMaybe<Scalars['String']>;
  allocation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  allocation_starts_with?: InputMaybe<Scalars['String']>;
  allocation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  allocation_not_starts_with?: InputMaybe<Scalars['String']>;
  allocation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  allocation_ends_with?: InputMaybe<Scalars['String']>;
  allocation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  allocation_not_ends_with?: InputMaybe<Scalars['String']>;
  allocation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  allocation_?: InputMaybe<NETWORK__Allocation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__Dispute_orderBy =
  | 'id'
  | 'subgraphDeployment'
  | 'fisherman'
  | 'deposit'
  | 'createdAt'
  | 'closedAt'
  | 'status'
  | 'tokensSlashed'
  | 'tokensBurned'
  | 'tokensRewarded'
  | 'type'
  | 'indexer'
  | 'attestation'
  | 'linkedDispute'
  | 'allocation';

/**
 * Epoch aggregate data for network statistics on signaling, rewards, and query fees
 *
 */
export type NETWORK__Epoch = {
  /** Epoch number */
  id: Scalars['ID'];
  /** Start block of the epoch */
  startBlock: Scalars['Int'];
  /** End block of the epoch */
  endBlock: Scalars['Int'];
  /** Signaled tokens during this epoch */
  signalledTokens: Scalars['BigInt'];
  /** Stake deposited during this epoch */
  stakeDeposited: Scalars['BigInt'];
  /** Total amount of query fees generated during this epoch (Includes everything) */
  totalQueryFees: Scalars['BigInt'];
  /** Amount of query fees generated that were burnt by the 1% protocol tax during this epoch */
  taxedQueryFees: Scalars['BigInt'];
  /** Amount of query fees generated that are going to the rebate pool for indexers during this epoch */
  queryFeesCollected: Scalars['BigInt'];
  /** Amount of query fees generated that are going to curators during this epoch */
  curatorQueryFees: Scalars['BigInt'];
  /** Rebate amount claimed from the protocol through cobbs douglas during this epoch (Doesn't correlate to the queryFeesCollected for this epoch since there's a 7 day period before claiming) */
  queryFeeRebates: Scalars['BigInt'];
  /** Total indexing rewards earned in this epoch. Includes both delegator and indexer rewards */
  totalRewards: Scalars['BigInt'];
  /** Total indexing rewards earned in this epoch by indexers */
  totalIndexerRewards: Scalars['BigInt'];
  /** Total indexing rewards earned in this epoch by delegators */
  totalDelegatorRewards: Scalars['BigInt'];
};

export type NETWORK__Epoch_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  startBlock?: InputMaybe<Scalars['Int']>;
  startBlock_not?: InputMaybe<Scalars['Int']>;
  startBlock_gt?: InputMaybe<Scalars['Int']>;
  startBlock_lt?: InputMaybe<Scalars['Int']>;
  startBlock_gte?: InputMaybe<Scalars['Int']>;
  startBlock_lte?: InputMaybe<Scalars['Int']>;
  startBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  startBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  endBlock?: InputMaybe<Scalars['Int']>;
  endBlock_not?: InputMaybe<Scalars['Int']>;
  endBlock_gt?: InputMaybe<Scalars['Int']>;
  endBlock_lt?: InputMaybe<Scalars['Int']>;
  endBlock_gte?: InputMaybe<Scalars['Int']>;
  endBlock_lte?: InputMaybe<Scalars['Int']>;
  endBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  endBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeDeposited?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_not?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_gt?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_lt?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_gte?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_lte?: InputMaybe<Scalars['BigInt']>;
  stakeDeposited_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeDeposited_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  taxedQueryFees?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  taxedQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  taxedQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorQueryFees?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  curatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRewards?: InputMaybe<Scalars['BigInt']>;
  totalRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerRewards?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorRewards?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__Epoch_orderBy =
  | 'id'
  | 'startBlock'
  | 'endBlock'
  | 'signalledTokens'
  | 'stakeDeposited'
  | 'totalQueryFees'
  | 'taxedQueryFees'
  | 'queryFeesCollected'
  | 'curatorQueryFees'
  | 'queryFeeRebates'
  | 'totalRewards'
  | 'totalIndexerRewards'
  | 'totalDelegatorRewards';

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type NETWORK__GraphAccount = {
  /** Graph account ID */
  id: Scalars['ID'];
  /** All names this graph account has claimed from all name systems */
  names: Array<NETWORK__GraphAccountName>;
  /** Default name the graph account has chosen */
  defaultName?: Maybe<NETWORK__GraphAccountName>;
  /** Time the account was created */
  createdAt: Scalars['Int'];
  /** Default display name is the current default name. Used for filtered queries in the explorer */
  defaultDisplayName?: Maybe<Scalars['String']>;
  /** True if it is an organization. False if it is an individual */
  isOrganization?: Maybe<Scalars['Boolean']>;
  /** IPFS hash with account metadata details */
  metadataHash?: Maybe<Scalars['NETWORK__Bytes']>;
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
  operatorOf: Array<NETWORK__GraphAccount>;
  /** Operators of this Graph Accounts */
  operators: Array<NETWORK__GraphAccount>;
  /** Graph token balance */
  balance: Scalars['BigInt'];
  /** Amount this account has approved staking to transfer their GRT */
  curationApproval: Scalars['BigInt'];
  /** Amount this account has approved curation to transfer their GRT */
  stakingApproval: Scalars['BigInt'];
  /** Amount this account has approved the GNS to transfer their GRT */
  gnsApproval: Scalars['BigInt'];
  /** Subgraphs the graph account owns */
  subgraphs: Array<NETWORK__Subgraph>;
  /** Time that this graph account became a developer */
  developerCreatedAt?: Maybe<Scalars['Int']>;
  /** NOT IMPLEMENTED - Total query fees the subgraphs created by this account have accumulated in GRT */
  subgraphQueryFees: Scalars['BigInt'];
  /** Disputes this graph account has created */
  createdDisputes: Array<NETWORK__Dispute>;
  /** Disputes against this graph account */
  disputesAgainst: Array<NETWORK__Dispute>;
  /** Curator fields for this GraphAccount. Null if never curated */
  curator?: Maybe<NETWORK__Curator>;
  /** Indexer fields for this GraphAccount. Null if never indexed */
  indexer?: Maybe<NETWORK__Indexer>;
  /** Delegator fields for this GraphAccount. Null if never delegated */
  delegator?: Maybe<NETWORK__Delegator>;
  /** Name signal transactions created by this GraphAccount */
  nameSignalTransactions: Array<NETWORK__NameSignalTransaction>;
  tokenLockWallets: Array<NETWORK__TokenLockWallet>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type NETWORK__GraphAccountnamesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__GraphAccountName_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__GraphAccountName_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type NETWORK__GraphAccountoperatorOfArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__GraphAccount_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__GraphAccount_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type NETWORK__GraphAccountoperatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__GraphAccount_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__GraphAccount_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type NETWORK__GraphAccountsubgraphsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Subgraph_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Subgraph_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type NETWORK__GraphAccountcreatedDisputesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Dispute_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Dispute_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type NETWORK__GraphAccountdisputesAgainstArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Dispute_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Dispute_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type NETWORK__GraphAccountnameSignalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__NameSignalTransaction_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__NameSignalTransaction_filter>;
};


/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 *
 */
export type NETWORK__GraphAccounttokenLockWalletsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__TokenLockWallet_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__TokenLockWallet_filter>;
};

/**
 * A name chosen by a Graph Account from a Name System such as ENS. This allows Graph Accounts to be
 * recognized by name, rather than just an Ethereum address
 *
 */
export type NETWORK__GraphAccountName = {
  /** Name system concatenated with the unique ID of the name system */
  id: Scalars['ID'];
  /** Name system for this name */
  nameSystem: NETWORK__NameSystem;
  /** Name from the system */
  name: Scalars['String'];
  /** The graph account that owned the name when it was linked in the graph network */
  graphAccount?: Maybe<NETWORK__GraphAccount>;
};

export type NETWORK__GraphAccountName_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nameSystem?: InputMaybe<NETWORK__NameSystem>;
  nameSystem_not?: InputMaybe<NETWORK__NameSystem>;
  nameSystem_in?: InputMaybe<Array<NETWORK__NameSystem>>;
  nameSystem_not_in?: InputMaybe<Array<NETWORK__NameSystem>>;
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
  graphAccount_?: InputMaybe<NETWORK__GraphAccount_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__GraphAccountName_orderBy =
  | 'id'
  | 'nameSystem'
  | 'name'
  | 'graphAccount';

export type NETWORK__GraphAccount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  names_?: InputMaybe<NETWORK__GraphAccountName_filter>;
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
  defaultName_?: InputMaybe<NETWORK__GraphAccountName_filter>;
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
  metadataHash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  metadataHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
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
  operatorOf_?: InputMaybe<NETWORK__GraphAccount_filter>;
  operators?: InputMaybe<Array<Scalars['String']>>;
  operators_not?: InputMaybe<Array<Scalars['String']>>;
  operators_contains?: InputMaybe<Array<Scalars['String']>>;
  operators_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  operators_not_contains?: InputMaybe<Array<Scalars['String']>>;
  operators_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  operators_?: InputMaybe<NETWORK__GraphAccount_filter>;
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
  subgraphs_?: InputMaybe<NETWORK__Subgraph_filter>;
  developerCreatedAt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_not?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_gt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_lt?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_gte?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_lte?: InputMaybe<Scalars['Int']>;
  developerCreatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  developerCreatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphQueryFees?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_not?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_gt?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_lt?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_gte?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_lte?: InputMaybe<Scalars['BigInt']>;
  subgraphQueryFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdDisputes_?: InputMaybe<NETWORK__Dispute_filter>;
  disputesAgainst_?: InputMaybe<NETWORK__Dispute_filter>;
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
  curator_?: InputMaybe<NETWORK__Curator_filter>;
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
  indexer_?: InputMaybe<NETWORK__Indexer_filter>;
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
  delegator_?: InputMaybe<NETWORK__Delegator_filter>;
  nameSignalTransactions_?: InputMaybe<NETWORK__NameSignalTransaction_filter>;
  tokenLockWallets?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_not?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_not_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokenLockWallets_?: InputMaybe<NETWORK__TokenLockWallet_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__GraphAccount_orderBy =
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
  | 'subgraphQueryFees'
  | 'createdDisputes'
  | 'disputesAgainst'
  | 'curator'
  | 'indexer'
  | 'delegator'
  | 'nameSignalTransactions'
  | 'tokenLockWallets';

/**
 * Graph Network global parameters and contract addresses
 *
 */
export type NETWORK__GraphNetwork = {
  /** ID is set to 1 */
  id: Scalars['ID'];
  /** Controller address */
  controller: Scalars['NETWORK__Bytes'];
  /** Graph token address */
  graphToken: Scalars['NETWORK__Bytes'];
  /** Epoch manager address */
  epochManager: Scalars['NETWORK__Bytes'];
  /** Epoch Manager implementations. Last in the array is current */
  epochManagerImplementations: Array<Scalars['NETWORK__Bytes']>;
  /** Curation address */
  curation: Scalars['NETWORK__Bytes'];
  /** Curation implementations. Last in the array is current */
  curationImplementations: Array<Scalars['NETWORK__Bytes']>;
  /** Staking address */
  staking: Scalars['NETWORK__Bytes'];
  /** Graph token implementations. Last in the array is current */
  stakingImplementations: Array<Scalars['NETWORK__Bytes']>;
  /** Dispute manager address */
  disputeManager: Scalars['NETWORK__Bytes'];
  /** GNS address */
  gns: Scalars['NETWORK__Bytes'];
  /** Service registry address */
  serviceRegistry: Scalars['NETWORK__Bytes'];
  /** Rewards manager address */
  rewardsManager: Scalars['NETWORK__Bytes'];
  /** Rewards Manager implementations. Last in the array is current */
  rewardsManagerImplementations: Array<Scalars['NETWORK__Bytes']>;
  /** True if the protocol is paused */
  isPaused: Scalars['Boolean'];
  /** True if the protocol is partially paused */
  isPartialPaused: Scalars['Boolean'];
  /** Governor of the controller (i.e. the whole protocol) */
  governor: Scalars['NETWORK__Bytes'];
  /** Pause guardian address */
  pauseGuardian: Scalars['NETWORK__Bytes'];
  /** Percentage of fees going to curators. In parts per million */
  curationPercentage: Scalars['Int'];
  /** Percentage of fees burn as protocol fee. In parts per million */
  protocolFeePercentage: Scalars['Int'];
  /** Ratio of max staked delegation tokens to indexers stake that earns rewards */
  delegationRatio: Scalars['Int'];
  /** Epochs to wait before fees can be claimed in rebate pool */
  channelDisputeEpochs: Scalars['Int'];
  /** Epochs to wait before delegators can settle */
  maxAllocationEpochs: Scalars['Int'];
  /** Time in blocks needed to wait to unstake */
  thawingPeriod: Scalars['Int'];
  /** Minimum time an Indexer must use for resetting their Delegation parameters */
  delegationParametersCooldown: Scalars['Int'];
  /** Minimum GRT an indexer must stake */
  minimumIndexerStake: Scalars['BigInt'];
  /** Contracts that have been approved to be a slasher */
  slashers?: Maybe<Array<Scalars['NETWORK__Bytes']>>;
  /** Time in epochs a delegator needs to wait to withdraw delegated stake */
  delegationUnbondingPeriod: Scalars['Int'];
  /** Alpha in the cobbs douglas formula */
  rebateRatio: Scalars['NETWORK__BigDecimal'];
  /** Tax that delegators pay to deposit. In Parts per million */
  delegationTaxPercentage: Scalars['Int'];
  /** Asset holder for the protocol */
  assetHolders?: Maybe<Array<Scalars['NETWORK__Bytes']>>;
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
  /** The total amount of GRT signalled in the Curation contract */
  totalTokensSignalled: Scalars['BigInt'];
  /** Total GRT currently curating via the Auto-Migrate function */
  totalTokensSignalledAutoMigrate: Scalars['NETWORK__BigDecimal'];
  /** Total GRT currently curating to a specific version */
  totalTokensSignalledDirectly: Scalars['NETWORK__BigDecimal'];
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
  /** Total unclaimed rebates. Includes unclaimed rebates, and rebates lost in cobbs douglas  */
  totalUnclaimedQueryFeeRebates: Scalars['BigInt'];
  /** Total indexing rewards minted */
  totalIndexingRewards: Scalars['BigInt'];
  /** Total indexing rewards minted to Delegators */
  totalIndexingDelegatorRewards: Scalars['BigInt'];
  /** Total indexing rewards minted to Indexers */
  totalIndexingIndexerRewards: Scalars['BigInt'];
  /** The issuance rate of GRT per block. To get annual rate do (networkGRTIssuance * 10^-18)^(blocksPerYear) */
  networkGRTIssuance: Scalars['BigInt'];
  /** Address of the availability oracle */
  subgraphAvailabilityOracle: Scalars['NETWORK__Bytes'];
  /** Default reserve ratio for all subgraphs. In parts per million */
  defaultReserveRatio: Scalars['Int'];
  /** Minimum amount of tokens needed to start curating */
  minimumCurationDeposit: Scalars['BigInt'];
  /** The fee charged when a curator withdraws signal. In parts per million */
  curationTaxPercentage: Scalars['Int'];
  /** Percentage of the GNS migration tax payed by the subgraph owner */
  ownerTaxPercentage: Scalars['Int'];
  /** Graph Token supply */
  totalSupply: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Price of one GRT in USD */
  GRTinUSD: Scalars['NETWORK__BigDecimal'];
  /** NOT IMPLEMENTED - Price of one GRT in ETH */
  GRTinETH?: Maybe<Scalars['NETWORK__BigDecimal']>;
  /** Total amount of GRT minted */
  totalGRTMinted: Scalars['BigInt'];
  /** Total amount of GRT burned */
  totalGRTBurned: Scalars['BigInt'];
  /** Epoch Length in blocks */
  epochLength: Scalars['Int'];
  /** Epoch that was last run */
  lastRunEpoch: Scalars['Int'];
  /** Epoch when epoch length was last updated */
  lastLengthUpdateEpoch: Scalars['Int'];
  /** Block when epoch length was last updated */
  lastLengthUpdateBlock: Scalars['Int'];
  /** Current epoch the protocol is in */
  currentEpoch: Scalars['Int'];
  /** Total indexers */
  indexerCount: Scalars['Int'];
  /** Number of indexers that currently have some stake in the protocol */
  stakedIndexersCount: Scalars['Int'];
  /** Total amount of delegators historically */
  delegatorCount: Scalars['Int'];
  /** Total active delegators. Those that still have at least one active delegation. */
  activeDelegatorCount: Scalars['Int'];
  /** Total amount of delegations historically */
  delegationCount: Scalars['Int'];
  /** Total active delegations. Those delegations that still have GRT staked towards an indexer */
  activeDelegationCount: Scalars['Int'];
  /** Total amount of curators historically */
  curatorCount: Scalars['Int'];
  /** Total amount of curators historically */
  activeCuratorCount: Scalars['Int'];
  /** Total amount of Subgraph entities */
  subgraphCount: Scalars['Int'];
  /** Amount of active Subgraph entities */
  activeSubgraphCount: Scalars['Int'];
  /** Total amount of SubgraphDeployment entities */
  subgraphDeploymentCount: Scalars['Int'];
  /** Total epochs */
  epochCount: Scalars['Int'];
  /** Dispute arbitrator */
  arbitrator: Scalars['NETWORK__Bytes'];
  /** Penalty to Indexer on successful disputes for query disputes. In parts per million */
  querySlashingPercentage: Scalars['Int'];
  /** Penalty to Indexer on successful disputes for indexing disputes. In parts per million */
  indexingSlashingPercentage: Scalars['Int'];
  /** [DEPRECATED] Penalty to Indexer on successful disputes for indexing disputes. In parts per million */
  slashingPercentage: Scalars['Int'];
  /** Minimum deposit to create a dispute */
  minimumDisputeDeposit: Scalars['BigInt'];
  /** Reward to Fisherman on successful disputes. In parts per million */
  fishermanRewardPercentage: Scalars['Int'];
  /** Total amount of GRT deposited to the L1 gateway. Note that the actual amount claimed in L2 might be lower due to tickets not redeemed. */
  totalGRTDeposited: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Total amount of GRT withdrawn from the L2 gateway and claimed in L1. */
  totalGRTWithdrawnConfirmed: Scalars['BigInt'];
  /** NOT IMPLEMENTED - Total amount of GRT deposited to the L1 gateway and redeemed in L2. */
  totalGRTDepositedConfirmed: Scalars['BigInt'];
  /** Total amount of GRT withdrawn from the L2 gateway. Note that the actual amount claimed in L1 might be lower due to outbound transactions not finalized. */
  totalGRTWithdrawn: Scalars['BigInt'];
  /** Block number for L1. Only implemented for L2 deployments to properly reflect the L1 block used for timings */
  currentL1BlockNumber?: Maybe<Scalars['BigInt']>;
};

export type NETWORK__GraphNetwork_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  controller?: InputMaybe<Scalars['NETWORK__Bytes']>;
  controller_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  controller_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  controller_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  controller_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  controller_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  controller_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  controller_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  controller_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  controller_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  graphToken?: InputMaybe<Scalars['NETWORK__Bytes']>;
  graphToken_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  graphToken_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  graphToken_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  graphToken_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  graphToken_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  graphToken_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  graphToken_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  graphToken_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  graphToken_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManager?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManager_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManager_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManager_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManager_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManager_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManager_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  epochManager_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  epochManager_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManager_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  epochManagerImplementations?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  epochManagerImplementations_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  epochManagerImplementations_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  epochManagerImplementations_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  epochManagerImplementations_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  epochManagerImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curation?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curation_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curation_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curation_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curation_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curation_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curation_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curation_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curation_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curation_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curationImplementations?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curationImplementations_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curationImplementations_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curationImplementations_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curationImplementations_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  curationImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  staking?: InputMaybe<Scalars['NETWORK__Bytes']>;
  staking_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  staking_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  staking_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  staking_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  staking_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  staking_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  staking_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  staking_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  staking_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  stakingImplementations?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  stakingImplementations_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  stakingImplementations_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  stakingImplementations_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  stakingImplementations_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  stakingImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  disputeManager?: InputMaybe<Scalars['NETWORK__Bytes']>;
  disputeManager_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  disputeManager_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  disputeManager_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  disputeManager_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  disputeManager_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  disputeManager_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  disputeManager_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  disputeManager_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  disputeManager_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  gns?: InputMaybe<Scalars['NETWORK__Bytes']>;
  gns_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  gns_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  gns_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  gns_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  gns_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  gns_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  gns_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  gns_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  gns_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  serviceRegistry?: InputMaybe<Scalars['NETWORK__Bytes']>;
  serviceRegistry_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  serviceRegistry_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  serviceRegistry_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  serviceRegistry_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  serviceRegistry_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  serviceRegistry_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  serviceRegistry_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  serviceRegistry_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  serviceRegistry_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManager?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManager_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManager_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManager_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManager_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManager_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManager_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  rewardsManager_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  rewardsManager_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManager_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  rewardsManagerImplementations?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  rewardsManagerImplementations_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  rewardsManagerImplementations_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  rewardsManagerImplementations_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  rewardsManagerImplementations_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  rewardsManagerImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  isPaused?: InputMaybe<Scalars['Boolean']>;
  isPaused_not?: InputMaybe<Scalars['Boolean']>;
  isPaused_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPaused_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPartialPaused?: InputMaybe<Scalars['Boolean']>;
  isPartialPaused_not?: InputMaybe<Scalars['Boolean']>;
  isPartialPaused_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPartialPaused_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  governor?: InputMaybe<Scalars['NETWORK__Bytes']>;
  governor_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  governor_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  governor_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  governor_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  governor_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  governor_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  governor_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  governor_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  governor_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  pauseGuardian?: InputMaybe<Scalars['NETWORK__Bytes']>;
  pauseGuardian_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  pauseGuardian_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  pauseGuardian_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  pauseGuardian_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  pauseGuardian_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  pauseGuardian_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  pauseGuardian_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  pauseGuardian_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  pauseGuardian_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  curationPercentage?: InputMaybe<Scalars['Int']>;
  curationPercentage_not?: InputMaybe<Scalars['Int']>;
  curationPercentage_gt?: InputMaybe<Scalars['Int']>;
  curationPercentage_lt?: InputMaybe<Scalars['Int']>;
  curationPercentage_gte?: InputMaybe<Scalars['Int']>;
  curationPercentage_lte?: InputMaybe<Scalars['Int']>;
  curationPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  curationPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocolFeePercentage?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_not?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_gt?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_lt?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_gte?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_lte?: InputMaybe<Scalars['Int']>;
  protocolFeePercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  protocolFeePercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationRatio?: InputMaybe<Scalars['Int']>;
  delegationRatio_not?: InputMaybe<Scalars['Int']>;
  delegationRatio_gt?: InputMaybe<Scalars['Int']>;
  delegationRatio_lt?: InputMaybe<Scalars['Int']>;
  delegationRatio_gte?: InputMaybe<Scalars['Int']>;
  delegationRatio_lte?: InputMaybe<Scalars['Int']>;
  delegationRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  channelDisputeEpochs?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_not?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_gt?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_lt?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_gte?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_lte?: InputMaybe<Scalars['Int']>;
  channelDisputeEpochs_in?: InputMaybe<Array<Scalars['Int']>>;
  channelDisputeEpochs_not_in?: InputMaybe<Array<Scalars['Int']>>;
  maxAllocationEpochs?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_not?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_gt?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_lt?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_gte?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_lte?: InputMaybe<Scalars['Int']>;
  maxAllocationEpochs_in?: InputMaybe<Array<Scalars['Int']>>;
  maxAllocationEpochs_not_in?: InputMaybe<Array<Scalars['Int']>>;
  thawingPeriod?: InputMaybe<Scalars['Int']>;
  thawingPeriod_not?: InputMaybe<Scalars['Int']>;
  thawingPeriod_gt?: InputMaybe<Scalars['Int']>;
  thawingPeriod_lt?: InputMaybe<Scalars['Int']>;
  thawingPeriod_gte?: InputMaybe<Scalars['Int']>;
  thawingPeriod_lte?: InputMaybe<Scalars['Int']>;
  thawingPeriod_in?: InputMaybe<Array<Scalars['Int']>>;
  thawingPeriod_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationParametersCooldown?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_not?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_gt?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_lt?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_gte?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_lte?: InputMaybe<Scalars['Int']>;
  delegationParametersCooldown_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationParametersCooldown_not_in?: InputMaybe<Array<Scalars['Int']>>;
  minimumIndexerStake?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_not?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_gt?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_lt?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_gte?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_lte?: InputMaybe<Scalars['BigInt']>;
  minimumIndexerStake_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumIndexerStake_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slashers?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  slashers_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  slashers_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  slashers_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  slashers_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  slashers_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  delegationUnbondingPeriod?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_not?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_gt?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_lt?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_gte?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_lte?: InputMaybe<Scalars['Int']>;
  delegationUnbondingPeriod_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationUnbondingPeriod_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rebateRatio?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  rebateRatio_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  rebateRatio_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  rebateRatio_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  rebateRatio_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  rebateRatio_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  rebateRatio_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  rebateRatio_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  delegationTaxPercentage?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_not?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_gt?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_lt?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_gte?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_lte?: InputMaybe<Scalars['Int']>;
  delegationTaxPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationTaxPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  assetHolders?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  assetHolders_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  assetHolders_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  assetHolders_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  assetHolders_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  assetHolders_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
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
  totalTokensSignalled?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensSignalled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensSignalledAutoMigrate?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledAutoMigrate_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledAutoMigrate_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledAutoMigrate_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledAutoMigrate_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledAutoMigrate_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledAutoMigrate_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalTokensSignalledAutoMigrate_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalTokensSignalledDirectly?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledDirectly_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledDirectly_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledDirectly_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledDirectly_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledDirectly_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalTokensSignalledDirectly_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalTokensSignalledDirectly_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
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
  networkGRTIssuance?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_not?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_gt?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_lt?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_gte?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_lte?: InputMaybe<Scalars['BigInt']>;
  networkGRTIssuance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  networkGRTIssuance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphAvailabilityOracle?: InputMaybe<Scalars['NETWORK__Bytes']>;
  subgraphAvailabilityOracle_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  subgraphAvailabilityOracle_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  subgraphAvailabilityOracle_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  subgraphAvailabilityOracle_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  subgraphAvailabilityOracle_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  subgraphAvailabilityOracle_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  subgraphAvailabilityOracle_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  subgraphAvailabilityOracle_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  subgraphAvailabilityOracle_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  defaultReserveRatio?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_not?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_gt?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_lt?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_gte?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_lte?: InputMaybe<Scalars['Int']>;
  defaultReserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  defaultReserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  minimumCurationDeposit?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_not?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  minimumCurationDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumCurationDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curationTaxPercentage?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_not?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_gt?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_lt?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_gte?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_lte?: InputMaybe<Scalars['Int']>;
  curationTaxPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  curationTaxPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  ownerTaxPercentage?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_not?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_gt?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_lt?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_gte?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_lte?: InputMaybe<Scalars['Int']>;
  ownerTaxPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  ownerTaxPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  GRTinUSD?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinUSD_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinUSD_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinUSD_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinUSD_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinUSD_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinUSD_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  GRTinUSD_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  GRTinETH?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinETH_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinETH_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinETH_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinETH_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinETH_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  GRTinETH_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  GRTinETH_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalGRTMinted?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTMinted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTMinted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTBurned?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTBurned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTBurned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  epochLength?: InputMaybe<Scalars['Int']>;
  epochLength_not?: InputMaybe<Scalars['Int']>;
  epochLength_gt?: InputMaybe<Scalars['Int']>;
  epochLength_lt?: InputMaybe<Scalars['Int']>;
  epochLength_gte?: InputMaybe<Scalars['Int']>;
  epochLength_lte?: InputMaybe<Scalars['Int']>;
  epochLength_in?: InputMaybe<Array<Scalars['Int']>>;
  epochLength_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastRunEpoch?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_not?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_gt?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_lt?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_gte?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_lte?: InputMaybe<Scalars['Int']>;
  lastRunEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  lastRunEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastLengthUpdateEpoch?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_not?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_gt?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_lt?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_gte?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_lte?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  lastLengthUpdateEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastLengthUpdateBlock?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_not?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_gt?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_lt?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_gte?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_lte?: InputMaybe<Scalars['Int']>;
  lastLengthUpdateBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  lastLengthUpdateBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  currentEpoch?: InputMaybe<Scalars['Int']>;
  currentEpoch_not?: InputMaybe<Scalars['Int']>;
  currentEpoch_gt?: InputMaybe<Scalars['Int']>;
  currentEpoch_lt?: InputMaybe<Scalars['Int']>;
  currentEpoch_gte?: InputMaybe<Scalars['Int']>;
  currentEpoch_lte?: InputMaybe<Scalars['Int']>;
  currentEpoch_in?: InputMaybe<Array<Scalars['Int']>>;
  currentEpoch_not_in?: InputMaybe<Array<Scalars['Int']>>;
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
  activeDelegatorCount?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_not?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_gt?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_lt?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_gte?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_lte?: InputMaybe<Scalars['Int']>;
  activeDelegatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeDelegatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationCount?: InputMaybe<Scalars['Int']>;
  delegationCount_not?: InputMaybe<Scalars['Int']>;
  delegationCount_gt?: InputMaybe<Scalars['Int']>;
  delegationCount_lt?: InputMaybe<Scalars['Int']>;
  delegationCount_gte?: InputMaybe<Scalars['Int']>;
  delegationCount_lte?: InputMaybe<Scalars['Int']>;
  delegationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  delegationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeDelegationCount?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_not?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_gt?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_lt?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_gte?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_lte?: InputMaybe<Scalars['Int']>;
  activeDelegationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeDelegationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  curatorCount?: InputMaybe<Scalars['Int']>;
  curatorCount_not?: InputMaybe<Scalars['Int']>;
  curatorCount_gt?: InputMaybe<Scalars['Int']>;
  curatorCount_lt?: InputMaybe<Scalars['Int']>;
  curatorCount_gte?: InputMaybe<Scalars['Int']>;
  curatorCount_lte?: InputMaybe<Scalars['Int']>;
  curatorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  curatorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeCuratorCount?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_not?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_gt?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_lt?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_gte?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_lte?: InputMaybe<Scalars['Int']>;
  activeCuratorCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeCuratorCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount?: InputMaybe<Scalars['Int']>;
  subgraphCount_not?: InputMaybe<Scalars['Int']>;
  subgraphCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSubgraphCount?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_not?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_gt?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_lt?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_gte?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_lte?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSubgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeploymentCount?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_not?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphDeploymentCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphDeploymentCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  epochCount?: InputMaybe<Scalars['Int']>;
  epochCount_not?: InputMaybe<Scalars['Int']>;
  epochCount_gt?: InputMaybe<Scalars['Int']>;
  epochCount_lt?: InputMaybe<Scalars['Int']>;
  epochCount_gte?: InputMaybe<Scalars['Int']>;
  epochCount_lte?: InputMaybe<Scalars['Int']>;
  epochCount_in?: InputMaybe<Array<Scalars['Int']>>;
  epochCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  arbitrator?: InputMaybe<Scalars['NETWORK__Bytes']>;
  arbitrator_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  arbitrator_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  arbitrator_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  arbitrator_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  arbitrator_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  arbitrator_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  arbitrator_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  arbitrator_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  arbitrator_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  querySlashingPercentage?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_not?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_gt?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_lt?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_gte?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_lte?: InputMaybe<Scalars['Int']>;
  querySlashingPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  querySlashingPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingSlashingPercentage?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_not?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_gt?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_lt?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_gte?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_lte?: InputMaybe<Scalars['Int']>;
  indexingSlashingPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingSlashingPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  slashingPercentage?: InputMaybe<Scalars['Int']>;
  slashingPercentage_not?: InputMaybe<Scalars['Int']>;
  slashingPercentage_gt?: InputMaybe<Scalars['Int']>;
  slashingPercentage_lt?: InputMaybe<Scalars['Int']>;
  slashingPercentage_gte?: InputMaybe<Scalars['Int']>;
  slashingPercentage_lte?: InputMaybe<Scalars['Int']>;
  slashingPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  slashingPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  minimumDisputeDeposit?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_not?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  minimumDisputeDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumDisputeDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fishermanRewardPercentage?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_not?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_gt?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_lt?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_gte?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_lte?: InputMaybe<Scalars['Int']>;
  fishermanRewardPercentage_in?: InputMaybe<Array<Scalars['Int']>>;
  fishermanRewardPercentage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalGRTDeposited?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTDeposited_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTDeposited_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTWithdrawnConfirmed?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawnConfirmed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTWithdrawnConfirmed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTDepositedConfirmed?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTDepositedConfirmed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTDepositedConfirmed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTWithdrawn?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_not?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_gt?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_lt?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_gte?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_lte?: InputMaybe<Scalars['BigInt']>;
  totalGRTWithdrawn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalGRTWithdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentL1BlockNumber?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  currentL1BlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentL1BlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__GraphNetwork_orderBy =
  | 'id'
  | 'controller'
  | 'graphToken'
  | 'epochManager'
  | 'epochManagerImplementations'
  | 'curation'
  | 'curationImplementations'
  | 'staking'
  | 'stakingImplementations'
  | 'disputeManager'
  | 'gns'
  | 'serviceRegistry'
  | 'rewardsManager'
  | 'rewardsManagerImplementations'
  | 'isPaused'
  | 'isPartialPaused'
  | 'governor'
  | 'pauseGuardian'
  | 'curationPercentage'
  | 'protocolFeePercentage'
  | 'delegationRatio'
  | 'channelDisputeEpochs'
  | 'maxAllocationEpochs'
  | 'thawingPeriod'
  | 'delegationParametersCooldown'
  | 'minimumIndexerStake'
  | 'slashers'
  | 'delegationUnbondingPeriod'
  | 'rebateRatio'
  | 'delegationTaxPercentage'
  | 'assetHolders'
  | 'totalTokensStaked'
  | 'totalTokensClaimable'
  | 'totalUnstakedTokensLocked'
  | 'totalTokensAllocated'
  | 'totalDelegatedTokens'
  | 'totalTokensSignalled'
  | 'totalTokensSignalledAutoMigrate'
  | 'totalTokensSignalledDirectly'
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
  | 'networkGRTIssuance'
  | 'subgraphAvailabilityOracle'
  | 'defaultReserveRatio'
  | 'minimumCurationDeposit'
  | 'curationTaxPercentage'
  | 'ownerTaxPercentage'
  | 'totalSupply'
  | 'GRTinUSD'
  | 'GRTinETH'
  | 'totalGRTMinted'
  | 'totalGRTBurned'
  | 'epochLength'
  | 'lastRunEpoch'
  | 'lastLengthUpdateEpoch'
  | 'lastLengthUpdateBlock'
  | 'currentEpoch'
  | 'indexerCount'
  | 'stakedIndexersCount'
  | 'delegatorCount'
  | 'activeDelegatorCount'
  | 'delegationCount'
  | 'activeDelegationCount'
  | 'curatorCount'
  | 'activeCuratorCount'
  | 'subgraphCount'
  | 'activeSubgraphCount'
  | 'subgraphDeploymentCount'
  | 'epochCount'
  | 'arbitrator'
  | 'querySlashingPercentage'
  | 'indexingSlashingPercentage'
  | 'slashingPercentage'
  | 'minimumDisputeDeposit'
  | 'fishermanRewardPercentage'
  | 'totalGRTDeposited'
  | 'totalGRTWithdrawnConfirmed'
  | 'totalGRTDepositedConfirmed'
  | 'totalGRTWithdrawn'
  | 'currentL1BlockNumber';

/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type NETWORK__Indexer = {
  /** Eth address of Indexer */
  id: Scalars['ID'];
  /** Time this indexer was created */
  createdAt: Scalars['Int'];
  /** Graph account of this indexer */
  account: NETWORK__GraphAccount;
  /** Service registry URL for the indexer */
  url?: Maybe<Scalars['String']>;
  /** Geohash of the indexer. Shows where their indexer is located in the world */
  geoHash?: Maybe<Scalars['String']>;
  /** Default display name is the current default name. Used for filtered queries */
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
  allocations: Array<NETWORK__Allocation>;
  /** All allocations of stake for this Indexer (i.e. closed and active) */
  totalAllocations: Array<NETWORK__Allocation>;
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
  indexerRewardsOwnGenerationRatio: Scalars['NETWORK__BigDecimal'];
  /** Amount of delegated tokens that can be eligible for rewards */
  delegatedCapacity: Scalars['BigInt'];
  /** Total token capacity = delegatedCapacity + stakedTokens */
  tokenCapacity: Scalars['BigInt'];
  /** Stake available to earn rewards. tokenCapacity - allocationTokens - lockedTokens */
  availableStake: Scalars['BigInt'];
  /** Delegators to this Indexer */
  delegators: Array<NETWORK__DelegatedStake>;
  /** CURRENT tokens delegated to the indexer */
  delegatedTokens: Scalars['BigInt'];
  /** Ratio between the amount of the indexers own stake over the total usable stake. */
  ownStakeRatio: Scalars['NETWORK__BigDecimal'];
  /** Ratio between the amount of delegated stake over the total usable stake. */
  delegatedStakeRatio: Scalars['NETWORK__BigDecimal'];
  /** Total shares of the delegator pool */
  delegatorShares: Scalars['BigInt'];
  /** Exchange rate of of tokens received for each share */
  delegationExchangeRate: Scalars['NETWORK__BigDecimal'];
  /** The percent of indexing rewards generated by the total stake that the Indexer keeps for itself. In parts per million */
  indexingRewardCut: Scalars['Int'];
  /** The percent of indexing rewards generated by the delegated stake that the Indexer keeps for itself */
  indexingRewardEffectiveCut: Scalars['NETWORK__BigDecimal'];
  /** The percent of reward dilution delegators experience because of overdelegation. Overdelegated stake can't be used to generate rewards but still gets accounted while distributing the generated rewards. This causes dilution of the rewards for the rest of the pool. */
  overDelegationDilution: Scalars['NETWORK__BigDecimal'];
  /** The total amount of query fees given to delegators */
  delegatorQueryFees: Scalars['BigInt'];
  /** The percent of query rebate rewards the Indexer keeps for itself. In parts per million */
  queryFeeCut: Scalars['Int'];
  /** The percent of query rebate rewards generated by the delegated stake that the Indexer keeps for itself */
  queryFeeEffectiveCut: Scalars['NETWORK__BigDecimal'];
  /** Amount of blocks a delegator chooses for the waiting period for changing their params */
  delegatorParameterCooldown: Scalars['Int'];
  /** Block number for the last time the delegator updated their parameters */
  lastDelegationParameterUpdate: Scalars['Int'];
  /** Count of how many times this indexer has been forced to close an allocation */
  forcedClosures: Scalars['Int'];
  /** NOT IMPLEMENTED - Total return this indexer has earned */
  totalReturn: Scalars['NETWORK__BigDecimal'];
  /** NOT IMPLEMENTED - Annualized rate of return for the indexer */
  annualizedReturn: Scalars['NETWORK__BigDecimal'];
  /** NOT IMPLEMENTED - Staking efficiency of the indexer */
  stakingEfficiency: Scalars['NETWORK__BigDecimal'];
};


/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type NETWORK__IndexerallocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Allocation_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Allocation_filter>;
};


/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type NETWORK__IndexertotalAllocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Allocation_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Allocation_filter>;
};


/**
 * Metadata for the Indexer along with parameters and staking data
 *
 */
export type NETWORK__IndexerdelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__DelegatedStake_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__DelegatedStake_filter>;
};

export type NETWORK__Indexer_filter = {
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
  account_?: InputMaybe<NETWORK__GraphAccount_filter>;
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
  allocations_?: InputMaybe<NETWORK__Allocation_filter>;
  totalAllocations_?: InputMaybe<NETWORK__Allocation_filter>;
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
  indexerRewardsOwnGenerationRatio?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexerRewardsOwnGenerationRatio_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  indexerRewardsOwnGenerationRatio_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
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
  delegators_?: InputMaybe<NETWORK__DelegatedStake_filter>;
  delegatedTokens?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_not?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ownStakeRatio?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  ownStakeRatio_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  ownStakeRatio_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  ownStakeRatio_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  ownStakeRatio_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  ownStakeRatio_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  ownStakeRatio_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  ownStakeRatio_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  delegatedStakeRatio?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegatedStakeRatio_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegatedStakeRatio_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegatedStakeRatio_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegatedStakeRatio_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegatedStakeRatio_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegatedStakeRatio_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  delegatedStakeRatio_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  delegatorShares?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_not?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_gt?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_lt?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_gte?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_lte?: InputMaybe<Scalars['BigInt']>;
  delegatorShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatorShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegationExchangeRate?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegationExchangeRate_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegationExchangeRate_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegationExchangeRate_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegationExchangeRate_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegationExchangeRate_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  delegationExchangeRate_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  delegationExchangeRate_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  indexingRewardCut?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_not?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_gt?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_lt?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_gte?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_lte?: InputMaybe<Scalars['Int']>;
  indexingRewardCut_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardCut_not_in?: InputMaybe<Array<Scalars['Int']>>;
  indexingRewardEffectiveCut?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCut_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCut_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCut_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCut_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCut_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  indexingRewardEffectiveCut_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  indexingRewardEffectiveCut_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  overDelegationDilution?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  overDelegationDilution_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  overDelegationDilution_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  overDelegationDilution_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  overDelegationDilution_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  overDelegationDilution_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  overDelegationDilution_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  overDelegationDilution_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
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
  queryFeeEffectiveCut?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCut_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCut_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCut_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCut_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCut_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  queryFeeEffectiveCut_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  queryFeeEffectiveCut_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
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
  totalReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  totalReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  annualizedReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  stakingEfficiency?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  stakingEfficiency_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  stakingEfficiency_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  stakingEfficiency_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  stakingEfficiency_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  stakingEfficiency_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  stakingEfficiency_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  stakingEfficiency_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__Indexer_orderBy =
  | 'id'
  | 'createdAt'
  | 'account'
  | 'url'
  | 'geoHash'
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
  | 'totalReturn'
  | 'annualizedReturn'
  | 'stakingEfficiency';

/**
 * Curator Name Signal for a single Subgraph
 *
 */
export type NETWORK__NameSignal = {
  /** Eth address + subgraph ID */
  id: Scalars['ID'];
  /** Eth address of the curator */
  curator: NETWORK__Curator;
  /** Subgraph being signalled */
  subgraph: NETWORK__Subgraph;
  /** CUMULATIVE number of tokens the curator has signalled */
  signalledTokens: Scalars['BigInt'];
  /** CUMULATIVE number of tokens the curator has unsignalled */
  unsignalledTokens: Scalars['BigInt'];
  /** Tokens the curator has withdrawn from a deprecated name curve */
  withdrawnTokens: Scalars['BigInt'];
  /** Shares of the name pool (GNS) that the curator has from signaling their GRT */
  nameSignal: Scalars['BigInt'];
  /** Actual signal shares that the name pool minted with the GRT provided by the curator */
  signal: Scalars['NETWORK__BigDecimal'];
  /** Block for which the curator last entered or exited the curve */
  lastNameSignalChange: Scalars['Int'];
  /** Summation of realized rewards from before the last time the curator entered the curation curve */
  realizedRewards: Scalars['BigInt'];
  /** [DEPRECATED] Curator average cost basis for this name signal on this subgraph. New field for further versions will be nameSignalAverageCostBasis */
  averageCostBasis: Scalars['NETWORK__BigDecimal'];
  /** [DEPRECATED] nameSignalAverageCostBasis / nameSignal. New field for further versions will be nameSignalAverageCostBasisPerSignal */
  averageCostBasisPerSignal: Scalars['NETWORK__BigDecimal'];
  /** Curator average cost basis for this name signal on this subgraph */
  nameSignalAverageCostBasis: Scalars['NETWORK__BigDecimal'];
  /** nameSignalAverageCostBasis / nameSignal */
  nameSignalAverageCostBasisPerSignal: Scalars['NETWORK__BigDecimal'];
  /** Curator average cost basis for the version signal on this subgraph name pool */
  signalAverageCostBasis: Scalars['NETWORK__BigDecimal'];
  /** signalAverageCostBasis / signal */
  signalAverageCostBasisPerSignal: Scalars['NETWORK__BigDecimal'];
  entityVersion: Scalars['Int'];
  linkedEntity?: Maybe<NETWORK__NameSignal>;
};

/**
 * Auxiliary entity to be able to batch update NameSignal entities
 *
 */
export type NETWORK__NameSignalSubgraphRelation = {
  /** Subgraph ID + index */
  id: Scalars['ID'];
  nameSignal: NETWORK__NameSignal;
  subgraph: NETWORK__Subgraph;
};

export type NETWORK__NameSignalSubgraphRelation_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nameSignal?: InputMaybe<Scalars['String']>;
  nameSignal_not?: InputMaybe<Scalars['String']>;
  nameSignal_gt?: InputMaybe<Scalars['String']>;
  nameSignal_lt?: InputMaybe<Scalars['String']>;
  nameSignal_gte?: InputMaybe<Scalars['String']>;
  nameSignal_lte?: InputMaybe<Scalars['String']>;
  nameSignal_in?: InputMaybe<Array<Scalars['String']>>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['String']>>;
  nameSignal_contains?: InputMaybe<Scalars['String']>;
  nameSignal_contains_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_not_contains?: InputMaybe<Scalars['String']>;
  nameSignal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_starts_with?: InputMaybe<Scalars['String']>;
  nameSignal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_not_starts_with?: InputMaybe<Scalars['String']>;
  nameSignal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_ends_with?: InputMaybe<Scalars['String']>;
  nameSignal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_not_ends_with?: InputMaybe<Scalars['String']>;
  nameSignal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nameSignal_?: InputMaybe<NETWORK__NameSignal_filter>;
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
  subgraph_?: InputMaybe<NETWORK__Subgraph_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__NameSignalSubgraphRelation_orderBy =
  | 'id'
  | 'nameSignal'
  | 'subgraph';

/**
 * All relevant data for a Name Signal Transaction in The Graph Network
 *
 */
export type NETWORK__NameSignalTransaction = NETWORK__Transaction & {
  id: Scalars['ID'];
  blockNumber: Scalars['Int'];
  timestamp: Scalars['Int'];
  signer: NETWORK__GraphAccount;
  type: NETWORK__TransactionType;
  /** Amount of name signal updated */
  nameSignal: Scalars['BigInt'];
  /** Amount of version signal updated */
  versionSignal: Scalars['BigInt'];
  /** Tokens used */
  tokens: Scalars['BigInt'];
  /** Subgraph where name signal was updated */
  subgraph: NETWORK__Subgraph;
};

export type NETWORK__NameSignalTransaction_filter = {
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
  signer_?: InputMaybe<NETWORK__GraphAccount_filter>;
  type?: InputMaybe<NETWORK__TransactionType>;
  type_not?: InputMaybe<NETWORK__TransactionType>;
  type_in?: InputMaybe<Array<NETWORK__TransactionType>>;
  type_not_in?: InputMaybe<Array<NETWORK__TransactionType>>;
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
  subgraph_?: InputMaybe<NETWORK__Subgraph_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__NameSignalTransaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'signer'
  | 'type'
  | 'nameSignal'
  | 'versionSignal'
  | 'tokens'
  | 'subgraph';

export type NETWORK__NameSignal_filter = {
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
  curator_?: InputMaybe<NETWORK__Curator_filter>;
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
  subgraph_?: InputMaybe<NETWORK__Subgraph_filter>;
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
  signal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  signal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
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
  averageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  averageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  averageCostBasisPerSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  averageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  nameSignalAverageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  nameSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  nameSignalAverageCostBasisPerSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  nameSignalAverageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  nameSignalAverageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  signalAverageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  signalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  signalAverageCostBasisPerSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasisPerSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasisPerSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasisPerSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasisPerSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasisPerSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  signalAverageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  signalAverageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
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
  linkedEntity_?: InputMaybe<NETWORK__NameSignal_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__NameSignal_orderBy =
  | 'id'
  | 'curator'
  | 'subgraph'
  | 'signalledTokens'
  | 'unsignalledTokens'
  | 'withdrawnTokens'
  | 'nameSignal'
  | 'signal'
  | 'lastNameSignalChange'
  | 'realizedRewards'
  | 'averageCostBasis'
  | 'averageCostBasisPerSignal'
  | 'nameSignalAverageCostBasis'
  | 'nameSignalAverageCostBasisPerSignal'
  | 'signalAverageCostBasis'
  | 'signalAverageCostBasisPerSignal'
  | 'entityVersion'
  | 'linkedEntity';

export type NETWORK__NameSystem =
  | 'ENS';

export type NETWORK__Network = {
  id: Scalars['ID'];
  deployments: Array<NETWORK__SubgraphDeployment>;
};


export type NETWORK__NetworkdeploymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__SubgraphDeployment_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__SubgraphDeployment_filter>;
};

export type NETWORK__Network_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  deployments_?: InputMaybe<NETWORK__SubgraphDeployment_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__Network_orderBy =
  | 'id'
  | 'deployments';

/** Defines the order direction, either ascending or descending */
export type NETWORK__OrderDirection =
  | 'asc'
  | 'desc';

/**
 * Global pool of query fees for closed state channels. Each Epoch has a single pool,
 * hence why they share the same IDs.
 *
 */
export type NETWORK__Pool = {
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
  closedAllocations: Array<NETWORK__Allocation>;
};


/**
 * Global pool of query fees for closed state channels. Each Epoch has a single pool,
 * hence why they share the same IDs.
 *
 */
export type NETWORK__PoolclosedAllocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Allocation_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Allocation_filter>;
};

export type NETWORK__Pool_filter = {
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
  closedAllocations_?: InputMaybe<NETWORK__Allocation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__Pool_orderBy =
  | 'id'
  | 'allocation'
  | 'totalQueryFees'
  | 'claimedFees'
  | 'curatorRewards'
  | 'closedAllocations';

export type Query = {
  NETWORK__graphNetwork?: Maybe<NETWORK__GraphNetwork>;
  NETWORK__graphNetworks: Array<NETWORK__GraphNetwork>;
  NETWORK__graphAccount?: Maybe<NETWORK__GraphAccount>;
  NETWORK__graphAccounts: Array<NETWORK__GraphAccount>;
  NETWORK__graphAccountName?: Maybe<NETWORK__GraphAccountName>;
  NETWORK__graphAccountNames: Array<NETWORK__GraphAccountName>;
  NETWORK__subgraph?: Maybe<NETWORK__Subgraph>;
  NETWORK__subgraphs: Array<NETWORK__Subgraph>;
  NETWORK__currentSubgraphDeploymentRelation?: Maybe<NETWORK__CurrentSubgraphDeploymentRelation>;
  NETWORK__currentSubgraphDeploymentRelations: Array<NETWORK__CurrentSubgraphDeploymentRelation>;
  NETWORK__network?: Maybe<NETWORK__Network>;
  NETWORK__networks: Array<NETWORK__Network>;
  NETWORK__subgraphCategoryRelation?: Maybe<NETWORK__SubgraphCategoryRelation>;
  NETWORK__subgraphCategoryRelations: Array<NETWORK__SubgraphCategoryRelation>;
  NETWORK__subgraphCategory?: Maybe<NETWORK__SubgraphCategory>;
  NETWORK__subgraphCategories: Array<NETWORK__SubgraphCategory>;
  NETWORK__subgraphVersion?: Maybe<NETWORK__SubgraphVersion>;
  NETWORK__subgraphVersions: Array<NETWORK__SubgraphVersion>;
  NETWORK__subgraphDeployment?: Maybe<NETWORK__SubgraphDeployment>;
  NETWORK__subgraphDeployments: Array<NETWORK__SubgraphDeployment>;
  NETWORK__indexer?: Maybe<NETWORK__Indexer>;
  NETWORK__indexers: Array<NETWORK__Indexer>;
  NETWORK__allocation?: Maybe<NETWORK__Allocation>;
  NETWORK__allocations: Array<NETWORK__Allocation>;
  NETWORK__pool?: Maybe<NETWORK__Pool>;
  NETWORK__pools: Array<NETWORK__Pool>;
  NETWORK__delegator?: Maybe<NETWORK__Delegator>;
  NETWORK__delegators: Array<NETWORK__Delegator>;
  NETWORK__delegatedStake?: Maybe<NETWORK__DelegatedStake>;
  NETWORK__delegatedStakes: Array<NETWORK__DelegatedStake>;
  NETWORK__curator?: Maybe<NETWORK__Curator>;
  NETWORK__curators: Array<NETWORK__Curator>;
  NETWORK__signal?: Maybe<NETWORK__Signal>;
  NETWORK__signals: Array<NETWORK__Signal>;
  NETWORK__nameSignal?: Maybe<NETWORK__NameSignal>;
  NETWORK__nameSignals: Array<NETWORK__NameSignal>;
  NETWORK__nameSignalSubgraphRelation?: Maybe<NETWORK__NameSignalSubgraphRelation>;
  NETWORK__nameSignalSubgraphRelations: Array<NETWORK__NameSignalSubgraphRelation>;
  NETWORK__dispute?: Maybe<NETWORK__Dispute>;
  NETWORK__disputes: Array<NETWORK__Dispute>;
  NETWORK__attestation?: Maybe<NETWORK__Attestation>;
  NETWORK__attestations: Array<NETWORK__Attestation>;
  NETWORK__epoch?: Maybe<NETWORK__Epoch>;
  NETWORK__epoches: Array<NETWORK__Epoch>;
  NETWORK__nameSignalTransaction?: Maybe<NETWORK__NameSignalTransaction>;
  NETWORK__nameSignalTransactions: Array<NETWORK__NameSignalTransaction>;
  NETWORK__signalTransaction?: Maybe<NETWORK__SignalTransaction>;
  NETWORK__signalTransactions: Array<NETWORK__SignalTransaction>;
  NETWORK__tokenManager?: Maybe<NETWORK__TokenManager>;
  NETWORK__tokenManagers: Array<NETWORK__TokenManager>;
  NETWORK__authorizedFunction?: Maybe<NETWORK__AuthorizedFunction>;
  NETWORK__authorizedFunctions: Array<NETWORK__AuthorizedFunction>;
  NETWORK__tokenLockWallet?: Maybe<NETWORK__TokenLockWallet>;
  NETWORK__tokenLockWallets: Array<NETWORK__TokenLockWallet>;
  NETWORK__transaction?: Maybe<NETWORK__Transaction>;
  NETWORK__transactions: Array<NETWORK__Transaction>;
  NETWORK__subgraphSearch: Array<NETWORK__Subgraph>;
  NETWORK__curatorSearch: Array<NETWORK__Curator>;
  NETWORK__delegatorSearch: Array<NETWORK__Delegator>;
  /** Access to subgraph metadata */
  NETWORK___meta?: Maybe<NETWORK___Meta_>;
};


export type QueryNETWORK__graphNetworkArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__graphNetworksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__GraphNetwork_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__GraphNetwork_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__graphAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__graphAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__GraphAccount_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__GraphAccount_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__graphAccountNameArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__graphAccountNamesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__GraphAccountName_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__GraphAccountName_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__subgraphArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__subgraphsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Subgraph_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Subgraph_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__currentSubgraphDeploymentRelationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__currentSubgraphDeploymentRelationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__CurrentSubgraphDeploymentRelation_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__CurrentSubgraphDeploymentRelation_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__networkArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__networksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Network_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Network_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__subgraphCategoryRelationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__subgraphCategoryRelationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__SubgraphCategoryRelation_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__SubgraphCategoryRelation_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__subgraphCategoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__subgraphCategoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__SubgraphCategory_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__SubgraphCategory_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__subgraphVersionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__subgraphVersionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__SubgraphVersion_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__SubgraphVersion_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__subgraphDeploymentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__subgraphDeploymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__SubgraphDeployment_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__SubgraphDeployment_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__indexerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__indexersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Indexer_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Indexer_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__allocationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__allocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Allocation_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Allocation_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Pool_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Pool_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__delegatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__delegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Delegator_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Delegator_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__delegatedStakeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__delegatedStakesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__DelegatedStake_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__DelegatedStake_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__curatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__curatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Curator_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Curator_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__signalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__signalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Signal_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Signal_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__nameSignalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__nameSignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__NameSignal_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__NameSignal_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__nameSignalSubgraphRelationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__nameSignalSubgraphRelationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__NameSignalSubgraphRelation_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__NameSignalSubgraphRelation_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__disputeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__disputesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Dispute_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Dispute_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__attestationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__attestationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Attestation_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Attestation_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__epochArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__epochesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Epoch_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Epoch_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__nameSignalTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__nameSignalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__NameSignalTransaction_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__NameSignalTransaction_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__signalTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__signalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__SignalTransaction_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__SignalTransaction_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__tokenManagerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__tokenManagersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__TokenManager_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__TokenManager_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__authorizedFunctionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__authorizedFunctionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__AuthorizedFunction_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__AuthorizedFunction_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__tokenLockWalletArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__tokenLockWalletsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__TokenLockWallet_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__TokenLockWallet_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Transaction_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Transaction_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__subgraphSearchArgs = {
  text: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__curatorSearchArgs = {
  text: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK__delegatorSearchArgs = {
  text: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type QueryNETWORK___metaArgs = {
  block?: InputMaybe<NETWORK__Block_height>;
};

/**
 * TokenLockWallet Revocability Enum
 *
 */
export type NETWORK__Revocability =
  | 'NotSet'
  | 'Enabled'
  | 'Disabled';

/**
 * Curator Signal for a single SubgraphDeployment
 *
 */
export type NETWORK__Signal = {
  /** Eth address + subgraph deployment ID */
  id: Scalars['ID'];
  /** Eth address of the curator */
  curator: NETWORK__Curator;
  /** Subgraph being signalled */
  subgraphDeployment: NETWORK__SubgraphDeployment;
  /** CUMULATIVE number of tokens the curator has signalled */
  signalledTokens: Scalars['BigInt'];
  /** CUMULATIVE number of tokens the curator has unsignalled */
  unsignalledTokens: Scalars['BigInt'];
  /** Signal that the curator has from signaling their GRT */
  signal: Scalars['BigInt'];
  /** Curator average cost basis for this signal on this subgraph */
  averageCostBasis: Scalars['NETWORK__BigDecimal'];
  /** averageCostBasis / signal */
  averageCostBasisPerSignal: Scalars['NETWORK__BigDecimal'];
  /** Block for which the curator last entered or exited the curve */
  lastSignalChange: Scalars['Int'];
  /** Summation of realized rewards from before the last time the curator entered the curation curve */
  realizedRewards: Scalars['BigInt'];
  /** Timetamp when this entity was created */
  createdAt: Scalars['Int'];
  /** Timetamp when this entity was last updated */
  lastUpdatedAt: Scalars['Int'];
  /** Block number where this entity was created */
  createdAtBlock: Scalars['Int'];
  /** Block number where this entity was last updated */
  lastUpdatedAtBlock: Scalars['Int'];
};

/**
 * All relevant data for a Signal Transaction in The Graph Network
 *
 */
export type NETWORK__SignalTransaction = NETWORK__Transaction & {
  id: Scalars['ID'];
  blockNumber: Scalars['Int'];
  timestamp: Scalars['Int'];
  signer: NETWORK__GraphAccount;
  type: NETWORK__TransactionType;
  /** Amount of signal updated */
  signal: Scalars['BigInt'];
  /** Tokens used */
  tokens: Scalars['BigInt'];
  /** Subgraph where signal was updated */
  subgraphDeployment: NETWORK__SubgraphDeployment;
  /** Withdrawal fees. On minting only */
  withdrawalFees: Scalars['BigInt'];
};

export type NETWORK__SignalTransaction_filter = {
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
  signer_?: InputMaybe<NETWORK__GraphAccount_filter>;
  type?: InputMaybe<NETWORK__TransactionType>;
  type_not?: InputMaybe<NETWORK__TransactionType>;
  type_in?: InputMaybe<Array<NETWORK__TransactionType>>;
  type_not_in?: InputMaybe<Array<NETWORK__TransactionType>>;
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
  subgraphDeployment_?: InputMaybe<NETWORK__SubgraphDeployment_filter>;
  withdrawalFees?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_not?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawalFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawalFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__SignalTransaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'signer'
  | 'type'
  | 'signal'
  | 'tokens'
  | 'subgraphDeployment'
  | 'withdrawalFees';

export type NETWORK__Signal_filter = {
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
  curator_?: InputMaybe<NETWORK__Curator_filter>;
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
  subgraphDeployment_?: InputMaybe<NETWORK__SubgraphDeployment_filter>;
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
  averageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  averageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  averageCostBasisPerSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  averageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  averageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
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
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdatedAt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_not?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['Int']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtBlock?: InputMaybe<Scalars['Int']>;
  createdAtBlock_not?: InputMaybe<Scalars['Int']>;
  createdAtBlock_gt?: InputMaybe<Scalars['Int']>;
  createdAtBlock_lt?: InputMaybe<Scalars['Int']>;
  createdAtBlock_gte?: InputMaybe<Scalars['Int']>;
  createdAtBlock_lte?: InputMaybe<Scalars['Int']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdatedAtBlock?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_not?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_gt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_lt?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_gte?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_lte?: InputMaybe<Scalars['Int']>;
  lastUpdatedAtBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdatedAtBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__Signal_orderBy =
  | 'id'
  | 'curator'
  | 'subgraphDeployment'
  | 'signalledTokens'
  | 'unsignalledTokens'
  | 'signal'
  | 'averageCostBasis'
  | 'averageCostBasisPerSignal'
  | 'lastSignalChange'
  | 'realizedRewards'
  | 'createdAt'
  | 'lastUpdatedAt'
  | 'createdAtBlock'
  | 'lastUpdatedAtBlock';

/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 *
 */
export type NETWORK__Subgraph = {
  /** Subgraph ID - which is derived from the Organization/Individual graph accountID */
  id: Scalars['ID'];
  /** Graph account that owns this subgraph */
  owner: NETWORK__GraphAccount;
  /** Current version. Null if the subgraph is deprecated */
  currentVersion?: Maybe<NETWORK__SubgraphVersion>;
  /** [DEPRECATED] Past versions. Has the same data as 'versions' but keeps the old naming for backwards compatibility */
  pastVersions: Array<NETWORK__SubgraphVersion>;
  /** List of all the subgraph versions included the current one */
  versions: Array<NETWORK__SubgraphVersion>;
  /** Version counter */
  versionCount: Scalars['BigInt'];
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** Updated timestamp */
  updatedAt: Scalars['Int'];
  /** Whether the subgraph is active or deprecated */
  active: Scalars['Boolean'];
  /** Whether the subgraph has been claimed/migrated. Can only be false for subgraphs created with V1 contracts that have not been claimed/migrated */
  migrated: Scalars['Boolean'];
  /** The actual ID of the subgraph on the contracts subgraph NFT implementation. BigInt represented as a String. It's only actually valid once the subgraph is migrated (migrated == true) */
  nftID?: Maybe<Scalars['String']>;
  /** ID of the subgraph that was used on the old version of this The Graph Network Subgraph. Null for Subgraphs created with the new GNS implementation or for version 1 entities (since they use the old id) */
  oldID?: Maybe<Scalars['String']>;
  /** Address used to create the ID. Only available for Subgraphs created pre-migration */
  creatorAddress?: Maybe<Scalars['NETWORK__Bytes']>;
  /** Subgraph number used to create the ID. Only available for Subgraphs created pre-migration */
  subgraphNumber?: Maybe<Scalars['BigInt']>;
  /** Auxiliary field to denote whether the subgraph is handling the initialization order on V2 events. Doesn't matter for V1 events. */
  initializing: Scalars['Boolean'];
  /** Version of the entity. Subgraph entities are changing the way their ID is generated when the new GNS v2 rolls out so we need to differnetiate them */
  entityVersion: Scalars['Int'];
  /** Subgraph entities might have 'duplicate' entities so that old IDs can be persisted and still queried properly. If that happens we have to link both duplicate entities to be able to update them properly. */
  linkedEntity?: Maybe<NETWORK__Subgraph>;
  /** CUMULATIVE signaled tokens on this subgraph all time */
  signalledTokens: Scalars['BigInt'];
  /** CUMULATIVE unsignalled tokens on this subgraph all time */
  unsignalledTokens: Scalars['BigInt'];
  /** CURRENT amount of tokens signalled on this subgraph latest version. Mirrors the total amount signalled towards the current deployment. */
  currentSignalledTokens: Scalars['BigInt'];
  /** The CURRENT name signal amount for this subgraph */
  nameSignalAmount: Scalars['BigInt'];
  /** Current amount of version signal managed by the name pool */
  signalAmount: Scalars['BigInt'];
  /** Reserve ratio of the name curation curve. In parts per million */
  reserveRatio: Scalars['Int'];
  /** Tokens that can be withdrawn once the Subgraph is deprecated */
  withdrawableTokens: Scalars['BigInt'];
  /** Tokens the curators have withdrawn from the deprecated Subgraph */
  withdrawnTokens: Scalars['BigInt'];
  /** Curators of this subgraph deployment */
  nameSignals: Array<NETWORK__NameSignal>;
  /** Total amount of NameSignal entities */
  nameSignalCount: Scalars['Int'];
  /** Subgraph metadata */
  metadataHash: Scalars['NETWORK__Bytes'];
  /** Subgraph metadata ipfs hash */
  ipfsMetadataHash?: Maybe<Scalars['String']>;
  /** Short description of the subgraph */
  description?: Maybe<Scalars['String']>;
  /** Image in string format */
  image?: Maybe<Scalars['String']>;
  /** NFT Image representation */
  nftImage?: Maybe<Scalars['String']>;
  /** Location of the code for this project */
  codeRepository?: Maybe<Scalars['String']>;
  /** Projects website */
  website?: Maybe<Scalars['String']>;
  /** Display name */
  displayName?: Maybe<Scalars['String']>;
  /** Categories that the subgraph belongs to. Modelled with a relation to allow for many-to-many relationship querying */
  categories: Array<NETWORK__SubgraphCategoryRelation>;
  currentVersionRelationEntity?: Maybe<NETWORK__CurrentSubgraphDeploymentRelation>;
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
export type NETWORK__SubgraphpastVersionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__SubgraphVersion_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__SubgraphVersion_filter>;
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
export type NETWORK__SubgraphversionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__SubgraphVersion_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__SubgraphVersion_filter>;
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
export type NETWORK__SubgraphnameSignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__NameSignal_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__NameSignal_filter>;
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
export type NETWORK__SubgraphcategoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__SubgraphCategoryRelation_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__SubgraphCategoryRelation_filter>;
};

export type NETWORK__SubgraphCategory = {
  id: Scalars['ID'];
  subgraphs: Array<NETWORK__SubgraphCategoryRelation>;
};


export type NETWORK__SubgraphCategorysubgraphsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__SubgraphCategoryRelation_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__SubgraphCategoryRelation_filter>;
};

export type NETWORK__SubgraphCategoryRelation = {
  id: Scalars['ID'];
  subgraph: NETWORK__Subgraph;
  category: NETWORK__SubgraphCategory;
};

export type NETWORK__SubgraphCategoryRelation_filter = {
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
  subgraph_?: InputMaybe<NETWORK__Subgraph_filter>;
  category?: InputMaybe<Scalars['String']>;
  category_not?: InputMaybe<Scalars['String']>;
  category_gt?: InputMaybe<Scalars['String']>;
  category_lt?: InputMaybe<Scalars['String']>;
  category_gte?: InputMaybe<Scalars['String']>;
  category_lte?: InputMaybe<Scalars['String']>;
  category_in?: InputMaybe<Array<Scalars['String']>>;
  category_not_in?: InputMaybe<Array<Scalars['String']>>;
  category_contains?: InputMaybe<Scalars['String']>;
  category_contains_nocase?: InputMaybe<Scalars['String']>;
  category_not_contains?: InputMaybe<Scalars['String']>;
  category_not_contains_nocase?: InputMaybe<Scalars['String']>;
  category_starts_with?: InputMaybe<Scalars['String']>;
  category_starts_with_nocase?: InputMaybe<Scalars['String']>;
  category_not_starts_with?: InputMaybe<Scalars['String']>;
  category_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  category_ends_with?: InputMaybe<Scalars['String']>;
  category_ends_with_nocase?: InputMaybe<Scalars['String']>;
  category_not_ends_with?: InputMaybe<Scalars['String']>;
  category_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  category_?: InputMaybe<NETWORK__SubgraphCategory_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__SubgraphCategoryRelation_orderBy =
  | 'id'
  | 'subgraph'
  | 'category';

export type NETWORK__SubgraphCategory_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  subgraphs_?: InputMaybe<NETWORK__SubgraphCategoryRelation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__SubgraphCategory_orderBy =
  | 'id'
  | 'subgraphs';

/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type NETWORK__SubgraphDeployment = {
  /** Subgraph Deployment ID. The IPFS hash with Qm removed to fit into 32 bytes */
  id: Scalars['ID'];
  /** IPFS hash of the subgraph manifest */
  ipfsHash: Scalars['String'];
  /** The versions this subgraph deployment relates to */
  versions: Array<NETWORK__SubgraphVersion>;
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** The block at which this deployment was denied for rewards. Null if not denied */
  deniedAt: Scalars['Int'];
  /** The original Subgraph that was deployed through GNS. Can be null if never created through GNS. Used for filtering in the Explorer */
  originalName?: Maybe<Scalars['String']>;
  /** CURRENT total stake of all indexers on this Subgraph Deployment */
  stakedTokens: Scalars['BigInt'];
  /** Allocations created by indexers for this Subgraph */
  indexerAllocations: Array<NETWORK__Allocation>;
  /** Total rewards accrued all time by this Subgraph Deployment. Includes delegator and indexer rewards */
  indexingRewardAmount: Scalars['BigInt'];
  /** Total rewards accrued all time by indexers */
  indexingIndexerRewardAmount: Scalars['BigInt'];
  /** Total rewards accrued all time by delegators */
  indexingDelegatorRewardAmount: Scalars['BigInt'];
  /** Total query fees earned by this Subgraph Deployment, without curator query fees */
  queryFeesAmount: Scalars['BigInt'];
  /** Total query fee rebates earned from the protocol, through the cobbs douglas formula. Does not include delegation fees */
  queryFeeRebates: Scalars['BigInt'];
  /** Total curator rewards from fees */
  curatorFeeRewards: Scalars['BigInt'];
  /** CURRENT signalled tokens in the bonding curve */
  signalledTokens: Scalars['BigInt'];
  /** NOT IMPLEMENTED - CURRENT signalled tokens in the bonding curve */
  unsignalledTokens: Scalars['BigInt'];
  /** CURRENT curation signal for this subgraph deployment */
  signalAmount: Scalars['BigInt'];
  /** signalledTokens / signalAmount */
  pricePerShare: Scalars['NETWORK__BigDecimal'];
  /** Curators of this subgraph deployment */
  curatorSignals: Array<NETWORK__Signal>;
  /** Bonding curve reserve ratio. In parts per million */
  reserveRatio: Scalars['Int'];
  /** Manifest file for this subgraph deployment */
  manifest?: Maybe<Scalars['String']>;
  /** Network where the contracts that the subgraph indexes are located */
  network?: Maybe<NETWORK__Network>;
  /** Schema file for this subgraph deployment */
  schema?: Maybe<Scalars['String']>;
  /** IPFS hash of the schema file */
  schemaIpfsHash?: Maybe<Scalars['String']>;
  /** Total amount of Subgraph entities that used this deployment at some point. subgraphCount >= activeSubgraphCount + deprecatedSubgraphCount */
  subgraphCount: Scalars['Int'];
  /** Amount of active Subgraph entities that are currently using this deployment. Deprecated subgraph entities are not counted */
  activeSubgraphCount: Scalars['Int'];
  /** Amount of Subgraph entities that were currently using this deployment when they got deprecated */
  deprecatedSubgraphCount: Scalars['Int'];
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type NETWORK__SubgraphDeploymentversionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__SubgraphVersion_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__SubgraphVersion_filter>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type NETWORK__SubgraphDeploymentindexerAllocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Allocation_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Allocation_filter>;
};


/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 *
 */
export type NETWORK__SubgraphDeploymentcuratorSignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Signal_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Signal_filter>;
};

export type NETWORK__SubgraphDeployment_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ipfsHash?: InputMaybe<Scalars['String']>;
  ipfsHash_not?: InputMaybe<Scalars['String']>;
  ipfsHash_gt?: InputMaybe<Scalars['String']>;
  ipfsHash_lt?: InputMaybe<Scalars['String']>;
  ipfsHash_gte?: InputMaybe<Scalars['String']>;
  ipfsHash_lte?: InputMaybe<Scalars['String']>;
  ipfsHash_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsHash_contains?: InputMaybe<Scalars['String']>;
  ipfsHash_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_contains?: InputMaybe<Scalars['String']>;
  ipfsHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_starts_with?: InputMaybe<Scalars['String']>;
  ipfsHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_ends_with?: InputMaybe<Scalars['String']>;
  ipfsHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  versions_?: InputMaybe<NETWORK__SubgraphVersion_filter>;
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
  originalName?: InputMaybe<Scalars['String']>;
  originalName_not?: InputMaybe<Scalars['String']>;
  originalName_gt?: InputMaybe<Scalars['String']>;
  originalName_lt?: InputMaybe<Scalars['String']>;
  originalName_gte?: InputMaybe<Scalars['String']>;
  originalName_lte?: InputMaybe<Scalars['String']>;
  originalName_in?: InputMaybe<Array<Scalars['String']>>;
  originalName_not_in?: InputMaybe<Array<Scalars['String']>>;
  originalName_contains?: InputMaybe<Scalars['String']>;
  originalName_contains_nocase?: InputMaybe<Scalars['String']>;
  originalName_not_contains?: InputMaybe<Scalars['String']>;
  originalName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  originalName_starts_with?: InputMaybe<Scalars['String']>;
  originalName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  originalName_not_starts_with?: InputMaybe<Scalars['String']>;
  originalName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  originalName_ends_with?: InputMaybe<Scalars['String']>;
  originalName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  originalName_not_ends_with?: InputMaybe<Scalars['String']>;
  originalName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stakedTokens?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexerAllocations_?: InputMaybe<NETWORK__Allocation_filter>;
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
  pricePerShare?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  pricePerShare_not?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  pricePerShare_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  pricePerShare_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  pricePerShare_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  pricePerShare_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']>;
  pricePerShare_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  pricePerShare_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']>>;
  curatorSignals_?: InputMaybe<NETWORK__Signal_filter>;
  reserveRatio?: InputMaybe<Scalars['Int']>;
  reserveRatio_not?: InputMaybe<Scalars['Int']>;
  reserveRatio_gt?: InputMaybe<Scalars['Int']>;
  reserveRatio_lt?: InputMaybe<Scalars['Int']>;
  reserveRatio_gte?: InputMaybe<Scalars['Int']>;
  reserveRatio_lte?: InputMaybe<Scalars['Int']>;
  reserveRatio_in?: InputMaybe<Array<Scalars['Int']>>;
  reserveRatio_not_in?: InputMaybe<Array<Scalars['Int']>>;
  manifest?: InputMaybe<Scalars['String']>;
  manifest_not?: InputMaybe<Scalars['String']>;
  manifest_gt?: InputMaybe<Scalars['String']>;
  manifest_lt?: InputMaybe<Scalars['String']>;
  manifest_gte?: InputMaybe<Scalars['String']>;
  manifest_lte?: InputMaybe<Scalars['String']>;
  manifest_in?: InputMaybe<Array<Scalars['String']>>;
  manifest_not_in?: InputMaybe<Array<Scalars['String']>>;
  manifest_contains?: InputMaybe<Scalars['String']>;
  manifest_contains_nocase?: InputMaybe<Scalars['String']>;
  manifest_not_contains?: InputMaybe<Scalars['String']>;
  manifest_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manifest_starts_with?: InputMaybe<Scalars['String']>;
  manifest_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manifest_not_starts_with?: InputMaybe<Scalars['String']>;
  manifest_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manifest_ends_with?: InputMaybe<Scalars['String']>;
  manifest_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manifest_not_ends_with?: InputMaybe<Scalars['String']>;
  manifest_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  network_?: InputMaybe<NETWORK__Network_filter>;
  schema?: InputMaybe<Scalars['String']>;
  schema_not?: InputMaybe<Scalars['String']>;
  schema_gt?: InputMaybe<Scalars['String']>;
  schema_lt?: InputMaybe<Scalars['String']>;
  schema_gte?: InputMaybe<Scalars['String']>;
  schema_lte?: InputMaybe<Scalars['String']>;
  schema_in?: InputMaybe<Array<Scalars['String']>>;
  schema_not_in?: InputMaybe<Array<Scalars['String']>>;
  schema_contains?: InputMaybe<Scalars['String']>;
  schema_contains_nocase?: InputMaybe<Scalars['String']>;
  schema_not_contains?: InputMaybe<Scalars['String']>;
  schema_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schema_starts_with?: InputMaybe<Scalars['String']>;
  schema_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schema_not_starts_with?: InputMaybe<Scalars['String']>;
  schema_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schema_ends_with?: InputMaybe<Scalars['String']>;
  schema_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schema_not_ends_with?: InputMaybe<Scalars['String']>;
  schema_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_gt?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_lt?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_gte?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_lte?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_in?: InputMaybe<Array<Scalars['String']>>;
  schemaIpfsHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  schemaIpfsHash_contains?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_contains?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_starts_with?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_starts_with?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_ends_with?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_ends_with?: InputMaybe<Scalars['String']>;
  schemaIpfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphCount?: InputMaybe<Scalars['Int']>;
  subgraphCount_not?: InputMaybe<Scalars['Int']>;
  subgraphCount_gt?: InputMaybe<Scalars['Int']>;
  subgraphCount_lt?: InputMaybe<Scalars['Int']>;
  subgraphCount_gte?: InputMaybe<Scalars['Int']>;
  subgraphCount_lte?: InputMaybe<Scalars['Int']>;
  subgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSubgraphCount?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_not?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_gt?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_lt?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_gte?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_lte?: InputMaybe<Scalars['Int']>;
  activeSubgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  activeSubgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deprecatedSubgraphCount?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_not?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_gt?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_lt?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_gte?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_lte?: InputMaybe<Scalars['Int']>;
  deprecatedSubgraphCount_in?: InputMaybe<Array<Scalars['Int']>>;
  deprecatedSubgraphCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__SubgraphDeployment_orderBy =
  | 'id'
  | 'ipfsHash'
  | 'versions'
  | 'createdAt'
  | 'deniedAt'
  | 'originalName'
  | 'stakedTokens'
  | 'indexerAllocations'
  | 'indexingRewardAmount'
  | 'indexingIndexerRewardAmount'
  | 'indexingDelegatorRewardAmount'
  | 'queryFeesAmount'
  | 'queryFeeRebates'
  | 'curatorFeeRewards'
  | 'signalledTokens'
  | 'unsignalledTokens'
  | 'signalAmount'
  | 'pricePerShare'
  | 'curatorSignals'
  | 'reserveRatio'
  | 'manifest'
  | 'network'
  | 'schema'
  | 'schemaIpfsHash'
  | 'subgraphCount'
  | 'activeSubgraphCount'
  | 'deprecatedSubgraphCount';

/**
 * The SubgraphVersion entity represents a version of the Subgraph. A new SubgraphVersion is created
 * whenever there is an update to the Subgraph triggered by the owner. The new SubgraphVersion can
 * then point to a new SubgraphDeployment, thus allowing the Subgraph to resolve to a different
 * deployment, while keeping the same endpoint. The metadata and label are stored on IPFS. The label
 * is for the developer to provide a semantic version. This is different from the version, which is
 * just a counter than increases each time a new SubgraphVersion is created for a Subgraph.
 *
 */
export type NETWORK__SubgraphVersion = {
  /** Concatenation of subgraph, subgraph deployment, and version ID */
  id: Scalars['ID'];
  /** Subgraph of this version */
  subgraph: NETWORK__Subgraph;
  /** Subgraph deployment of this version */
  subgraphDeployment: NETWORK__SubgraphDeployment;
  /** Version number */
  version: Scalars['Int'];
  /** Creation timestamp */
  createdAt: Scalars['Int'];
  /** Subgraph version metadata content address */
  metadataHash?: Maybe<Scalars['NETWORK__Bytes']>;
  /** Short description of the version */
  description?: Maybe<Scalars['String']>;
  /** Semantic versioning label */
  label?: Maybe<Scalars['String']>;
  entityVersion: Scalars['Int'];
  linkedEntity?: Maybe<NETWORK__SubgraphVersion>;
};

export type NETWORK__SubgraphVersion_filter = {
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
  subgraph_?: InputMaybe<NETWORK__Subgraph_filter>;
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
  subgraphDeployment_?: InputMaybe<NETWORK__SubgraphDeployment_filter>;
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
  metadataHash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  metadataHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
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
  label?: InputMaybe<Scalars['String']>;
  label_not?: InputMaybe<Scalars['String']>;
  label_gt?: InputMaybe<Scalars['String']>;
  label_lt?: InputMaybe<Scalars['String']>;
  label_gte?: InputMaybe<Scalars['String']>;
  label_lte?: InputMaybe<Scalars['String']>;
  label_in?: InputMaybe<Array<Scalars['String']>>;
  label_not_in?: InputMaybe<Array<Scalars['String']>>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_contains_nocase?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_contains_nocase?: InputMaybe<Scalars['String']>;
  label_starts_with?: InputMaybe<Scalars['String']>;
  label_starts_with_nocase?: InputMaybe<Scalars['String']>;
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  label_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  label_ends_with?: InputMaybe<Scalars['String']>;
  label_ends_with_nocase?: InputMaybe<Scalars['String']>;
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  label_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  linkedEntity_?: InputMaybe<NETWORK__SubgraphVersion_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__SubgraphVersion_orderBy =
  | 'id'
  | 'subgraph'
  | 'subgraphDeployment'
  | 'version'
  | 'createdAt'
  | 'metadataHash'
  | 'description'
  | 'label'
  | 'entityVersion'
  | 'linkedEntity';

export type NETWORK__Subgraph_filter = {
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
  owner_?: InputMaybe<NETWORK__GraphAccount_filter>;
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
  currentVersion_?: InputMaybe<NETWORK__SubgraphVersion_filter>;
  pastVersions_?: InputMaybe<NETWORK__SubgraphVersion_filter>;
  versions_?: InputMaybe<NETWORK__SubgraphVersion_filter>;
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
  creatorAddress?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creatorAddress_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creatorAddress_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creatorAddress_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creatorAddress_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creatorAddress_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creatorAddress_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  creatorAddress_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  creatorAddress_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  creatorAddress_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  subgraphNumber?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_not?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_gt?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_lt?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_gte?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_lte?: InputMaybe<Scalars['BigInt']>;
  subgraphNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subgraphNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initializing?: InputMaybe<Scalars['Boolean']>;
  initializing_not?: InputMaybe<Scalars['Boolean']>;
  initializing_in?: InputMaybe<Array<Scalars['Boolean']>>;
  initializing_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
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
  linkedEntity_?: InputMaybe<NETWORK__Subgraph_filter>;
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
  currentSignalledTokens?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_not?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_gt?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_lt?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_gte?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_lte?: InputMaybe<Scalars['BigInt']>;
  currentSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignalAmount?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_not?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  nameSignalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nameSignalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount?: InputMaybe<Scalars['BigInt']>;
  signalAmount_not?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  signalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  signalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  nameSignals_?: InputMaybe<NETWORK__NameSignal_filter>;
  nameSignalCount?: InputMaybe<Scalars['Int']>;
  nameSignalCount_not?: InputMaybe<Scalars['Int']>;
  nameSignalCount_gt?: InputMaybe<Scalars['Int']>;
  nameSignalCount_lt?: InputMaybe<Scalars['Int']>;
  nameSignalCount_gte?: InputMaybe<Scalars['Int']>;
  nameSignalCount_lte?: InputMaybe<Scalars['Int']>;
  nameSignalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  nameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  metadataHash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  metadataHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  metadataHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  ipfsMetadataHash?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_gt?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_lt?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_gte?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_lte?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsMetadataHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsMetadataHash_contains?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_contains?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_starts_with?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_ends_with?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsMetadataHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  nftImage?: InputMaybe<Scalars['String']>;
  nftImage_not?: InputMaybe<Scalars['String']>;
  nftImage_gt?: InputMaybe<Scalars['String']>;
  nftImage_lt?: InputMaybe<Scalars['String']>;
  nftImage_gte?: InputMaybe<Scalars['String']>;
  nftImage_lte?: InputMaybe<Scalars['String']>;
  nftImage_in?: InputMaybe<Array<Scalars['String']>>;
  nftImage_not_in?: InputMaybe<Array<Scalars['String']>>;
  nftImage_contains?: InputMaybe<Scalars['String']>;
  nftImage_contains_nocase?: InputMaybe<Scalars['String']>;
  nftImage_not_contains?: InputMaybe<Scalars['String']>;
  nftImage_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nftImage_starts_with?: InputMaybe<Scalars['String']>;
  nftImage_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftImage_not_starts_with?: InputMaybe<Scalars['String']>;
  nftImage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nftImage_ends_with?: InputMaybe<Scalars['String']>;
  nftImage_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftImage_not_ends_with?: InputMaybe<Scalars['String']>;
  nftImage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  categories_?: InputMaybe<NETWORK__SubgraphCategoryRelation_filter>;
  currentVersionRelationEntity?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_gt?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_lt?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_gte?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_lte?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersionRelationEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentVersionRelationEntity_contains?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_contains?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_starts_with?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_ends_with?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentVersionRelationEntity_?: InputMaybe<NETWORK__CurrentSubgraphDeploymentRelation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__Subgraph_orderBy =
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
  | 'nftID'
  | 'oldID'
  | 'creatorAddress'
  | 'subgraphNumber'
  | 'initializing'
  | 'entityVersion'
  | 'linkedEntity'
  | 'signalledTokens'
  | 'unsignalledTokens'
  | 'currentSignalledTokens'
  | 'nameSignalAmount'
  | 'signalAmount'
  | 'reserveRatio'
  | 'withdrawableTokens'
  | 'withdrawnTokens'
  | 'nameSignals'
  | 'nameSignalCount'
  | 'metadataHash'
  | 'ipfsMetadataHash'
  | 'description'
  | 'image'
  | 'nftImage'
  | 'codeRepository'
  | 'website'
  | 'displayName'
  | 'categories'
  | 'currentVersionRelationEntity';

export type Subscription = {
  NETWORK__graphNetwork?: Maybe<NETWORK__GraphNetwork>;
  NETWORK__graphNetworks: Array<NETWORK__GraphNetwork>;
  NETWORK__graphAccount?: Maybe<NETWORK__GraphAccount>;
  NETWORK__graphAccounts: Array<NETWORK__GraphAccount>;
  NETWORK__graphAccountName?: Maybe<NETWORK__GraphAccountName>;
  NETWORK__graphAccountNames: Array<NETWORK__GraphAccountName>;
  NETWORK__subgraph?: Maybe<NETWORK__Subgraph>;
  NETWORK__subgraphs: Array<NETWORK__Subgraph>;
  NETWORK__currentSubgraphDeploymentRelation?: Maybe<NETWORK__CurrentSubgraphDeploymentRelation>;
  NETWORK__currentSubgraphDeploymentRelations: Array<NETWORK__CurrentSubgraphDeploymentRelation>;
  NETWORK__network?: Maybe<NETWORK__Network>;
  NETWORK__networks: Array<NETWORK__Network>;
  NETWORK__subgraphCategoryRelation?: Maybe<NETWORK__SubgraphCategoryRelation>;
  NETWORK__subgraphCategoryRelations: Array<NETWORK__SubgraphCategoryRelation>;
  NETWORK__subgraphCategory?: Maybe<NETWORK__SubgraphCategory>;
  NETWORK__subgraphCategories: Array<NETWORK__SubgraphCategory>;
  NETWORK__subgraphVersion?: Maybe<NETWORK__SubgraphVersion>;
  NETWORK__subgraphVersions: Array<NETWORK__SubgraphVersion>;
  NETWORK__subgraphDeployment?: Maybe<NETWORK__SubgraphDeployment>;
  NETWORK__subgraphDeployments: Array<NETWORK__SubgraphDeployment>;
  NETWORK__indexer?: Maybe<NETWORK__Indexer>;
  NETWORK__indexers: Array<NETWORK__Indexer>;
  NETWORK__allocation?: Maybe<NETWORK__Allocation>;
  NETWORK__allocations: Array<NETWORK__Allocation>;
  NETWORK__pool?: Maybe<NETWORK__Pool>;
  NETWORK__pools: Array<NETWORK__Pool>;
  NETWORK__delegator?: Maybe<NETWORK__Delegator>;
  NETWORK__delegators: Array<NETWORK__Delegator>;
  NETWORK__delegatedStake?: Maybe<NETWORK__DelegatedStake>;
  NETWORK__delegatedStakes: Array<NETWORK__DelegatedStake>;
  NETWORK__curator?: Maybe<NETWORK__Curator>;
  NETWORK__curators: Array<NETWORK__Curator>;
  NETWORK__signal?: Maybe<NETWORK__Signal>;
  NETWORK__signals: Array<NETWORK__Signal>;
  NETWORK__nameSignal?: Maybe<NETWORK__NameSignal>;
  NETWORK__nameSignals: Array<NETWORK__NameSignal>;
  NETWORK__nameSignalSubgraphRelation?: Maybe<NETWORK__NameSignalSubgraphRelation>;
  NETWORK__nameSignalSubgraphRelations: Array<NETWORK__NameSignalSubgraphRelation>;
  NETWORK__dispute?: Maybe<NETWORK__Dispute>;
  NETWORK__disputes: Array<NETWORK__Dispute>;
  NETWORK__attestation?: Maybe<NETWORK__Attestation>;
  NETWORK__attestations: Array<NETWORK__Attestation>;
  NETWORK__epoch?: Maybe<NETWORK__Epoch>;
  NETWORK__epoches: Array<NETWORK__Epoch>;
  NETWORK__nameSignalTransaction?: Maybe<NETWORK__NameSignalTransaction>;
  NETWORK__nameSignalTransactions: Array<NETWORK__NameSignalTransaction>;
  NETWORK__signalTransaction?: Maybe<NETWORK__SignalTransaction>;
  NETWORK__signalTransactions: Array<NETWORK__SignalTransaction>;
  NETWORK__tokenManager?: Maybe<NETWORK__TokenManager>;
  NETWORK__tokenManagers: Array<NETWORK__TokenManager>;
  NETWORK__authorizedFunction?: Maybe<NETWORK__AuthorizedFunction>;
  NETWORK__authorizedFunctions: Array<NETWORK__AuthorizedFunction>;
  NETWORK__tokenLockWallet?: Maybe<NETWORK__TokenLockWallet>;
  NETWORK__tokenLockWallets: Array<NETWORK__TokenLockWallet>;
  NETWORK__transaction?: Maybe<NETWORK__Transaction>;
  NETWORK__transactions: Array<NETWORK__Transaction>;
  /** Access to subgraph metadata */
  NETWORK___meta?: Maybe<NETWORK___Meta_>;
};


export type SubscriptionNETWORK__graphNetworkArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__graphNetworksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__GraphNetwork_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__GraphNetwork_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__graphAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__graphAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__GraphAccount_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__GraphAccount_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__graphAccountNameArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__graphAccountNamesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__GraphAccountName_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__GraphAccountName_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__subgraphArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__subgraphsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Subgraph_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Subgraph_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__currentSubgraphDeploymentRelationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__currentSubgraphDeploymentRelationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__CurrentSubgraphDeploymentRelation_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__CurrentSubgraphDeploymentRelation_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__networkArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__networksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Network_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Network_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__subgraphCategoryRelationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__subgraphCategoryRelationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__SubgraphCategoryRelation_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__SubgraphCategoryRelation_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__subgraphCategoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__subgraphCategoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__SubgraphCategory_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__SubgraphCategory_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__subgraphVersionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__subgraphVersionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__SubgraphVersion_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__SubgraphVersion_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__subgraphDeploymentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__subgraphDeploymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__SubgraphDeployment_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__SubgraphDeployment_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__indexerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__indexersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Indexer_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Indexer_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__allocationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__allocationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Allocation_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Allocation_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Pool_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Pool_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__delegatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__delegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Delegator_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Delegator_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__delegatedStakeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__delegatedStakesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__DelegatedStake_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__DelegatedStake_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__curatorArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__curatorsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Curator_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Curator_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__signalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__signalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Signal_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Signal_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__nameSignalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__nameSignalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__NameSignal_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__NameSignal_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__nameSignalSubgraphRelationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__nameSignalSubgraphRelationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__NameSignalSubgraphRelation_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__NameSignalSubgraphRelation_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__disputeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__disputesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Dispute_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Dispute_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__attestationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__attestationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Attestation_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Attestation_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__epochArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__epochesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Epoch_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Epoch_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__nameSignalTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__nameSignalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__NameSignalTransaction_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__NameSignalTransaction_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__signalTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__signalTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__SignalTransaction_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__SignalTransaction_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__tokenManagerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__tokenManagersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__TokenManager_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__TokenManager_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__authorizedFunctionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__authorizedFunctionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__AuthorizedFunction_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__AuthorizedFunction_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__tokenLockWalletArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__tokenLockWalletsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__TokenLockWallet_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__TokenLockWallet_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK__transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__Transaction_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__Transaction_filter>;
  block?: InputMaybe<NETWORK__Block_height>;
  subgraphError?: NETWORK___SubgraphErrorPolicy_;
};


export type SubscriptionNETWORK___metaArgs = {
  block?: InputMaybe<NETWORK__Block_height>;
};

/**
 * Token Lock Wallets which hold locked GRT
 *
 */
export type NETWORK__TokenLockWallet = {
  /** The address of the token lock wallet */
  id: Scalars['ID'];
  /** The Manager address */
  manager: Scalars['NETWORK__Bytes'];
  /** The hash of the initializer */
  initHash: Scalars['NETWORK__Bytes'];
  /** Address of the beneficiary of locked tokens */
  beneficiary: Scalars['NETWORK__Bytes'];
  /** The token being used (GRT) */
  token: Scalars['NETWORK__Bytes'];
  /** Amount of tokens to be managed by the lock contract */
  managedAmount: Scalars['BigInt'];
  /** Start time of the release schedule */
  startTime: Scalars['BigInt'];
  /** End time of the release schedule */
  endTime: Scalars['BigInt'];
  /** Number of periods between start time and end time */
  periods: Scalars['BigInt'];
  /** Time when the releases start */
  releaseStartTime: Scalars['BigInt'];
  /** Time the cliff vests, 0 if no cliff */
  vestingCliffTime: Scalars['BigInt'];
  /** Whether or not the contract is revocable */
  revocable?: Maybe<NETWORK__Revocability>;
  /** True if the beneficiary has approved addresses that the manager has approved */
  tokenDestinationsApproved: Scalars['Boolean'];
  /** The amount of tokens that have been resleased */
  tokensReleased: Scalars['BigInt'];
  /** The amount of tokens that have been withdrawn */
  tokensWithdrawn: Scalars['BigInt'];
  /** The amount of tokens that have been revoked */
  tokensRevoked: Scalars['BigInt'];
  /** The block this wlalet was created */
  blockNumberCreated: Scalars['BigInt'];
  /** The creation tx hash of the wallet */
  txHash: Scalars['NETWORK__Bytes'];
};

export type NETWORK__TokenLockWallet_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  manager?: InputMaybe<Scalars['NETWORK__Bytes']>;
  manager_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  manager_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  manager_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  manager_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  manager_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  manager_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  manager_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  manager_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  manager_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  initHash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  initHash_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  initHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  initHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  initHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  initHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  initHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  initHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  initHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  initHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  beneficiary?: InputMaybe<Scalars['NETWORK__Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  beneficiary_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  beneficiary_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  beneficiary_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  beneficiary_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  token?: InputMaybe<Scalars['NETWORK__Bytes']>;
  token_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  token_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  token_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  token_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  token_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  token_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  token_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  token_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  managedAmount?: InputMaybe<Scalars['BigInt']>;
  managedAmount_not?: InputMaybe<Scalars['BigInt']>;
  managedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  managedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  managedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  managedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  managedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  managedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime?: InputMaybe<Scalars['BigInt']>;
  startTime_not?: InputMaybe<Scalars['BigInt']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']>;
  startTime_lt?: InputMaybe<Scalars['BigInt']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime?: InputMaybe<Scalars['BigInt']>;
  endTime_not?: InputMaybe<Scalars['BigInt']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']>;
  endTime_lt?: InputMaybe<Scalars['BigInt']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  periods?: InputMaybe<Scalars['BigInt']>;
  periods_not?: InputMaybe<Scalars['BigInt']>;
  periods_gt?: InputMaybe<Scalars['BigInt']>;
  periods_lt?: InputMaybe<Scalars['BigInt']>;
  periods_gte?: InputMaybe<Scalars['BigInt']>;
  periods_lte?: InputMaybe<Scalars['BigInt']>;
  periods_in?: InputMaybe<Array<Scalars['BigInt']>>;
  periods_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  releaseStartTime?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_not?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_gt?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_lt?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_gte?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_lte?: InputMaybe<Scalars['BigInt']>;
  releaseStartTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  releaseStartTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vestingCliffTime?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_not?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_gt?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_lt?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_gte?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_lte?: InputMaybe<Scalars['BigInt']>;
  vestingCliffTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vestingCliffTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  revocable?: InputMaybe<NETWORK__Revocability>;
  revocable_not?: InputMaybe<NETWORK__Revocability>;
  revocable_in?: InputMaybe<Array<NETWORK__Revocability>>;
  revocable_not_in?: InputMaybe<Array<NETWORK__Revocability>>;
  tokenDestinationsApproved?: InputMaybe<Scalars['Boolean']>;
  tokenDestinationsApproved_not?: InputMaybe<Scalars['Boolean']>;
  tokenDestinationsApproved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  tokenDestinationsApproved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  tokensReleased?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_not?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_gt?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_lt?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_gte?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_lte?: InputMaybe<Scalars['BigInt']>;
  tokensReleased_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensReleased_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensWithdrawn?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_not?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_gt?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_lt?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_gte?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_lte?: InputMaybe<Scalars['BigInt']>;
  tokensWithdrawn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensWithdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensRevoked?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_not?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_gt?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_lt?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_gte?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_lte?: InputMaybe<Scalars['BigInt']>;
  tokensRevoked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensRevoked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberCreated?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_not?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumberCreated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberCreated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['NETWORK__Bytes']>;
  txHash_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  txHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  txHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  txHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  txHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__TokenLockWallet_orderBy =
  | 'id'
  | 'manager'
  | 'initHash'
  | 'beneficiary'
  | 'token'
  | 'managedAmount'
  | 'startTime'
  | 'endTime'
  | 'periods'
  | 'releaseStartTime'
  | 'vestingCliffTime'
  | 'revocable'
  | 'tokenDestinationsApproved'
  | 'tokensReleased'
  | 'tokensWithdrawn'
  | 'tokensRevoked'
  | 'blockNumberCreated'
  | 'txHash';

/**
 * The Token manager data
 *
 */
export type NETWORK__TokenManager = {
  /** Token manager address */
  id: Scalars['ID'];
  /** Master copy address */
  masterCopy: Scalars['NETWORK__Bytes'];
  /** Tokens stored in manger through deposit or withdraw */
  tokens: Scalars['BigInt'];
  /** List of addresses that are allowed to pull funds */
  tokenDestinations?: Maybe<Array<Scalars['NETWORK__Bytes']>>;
  /** List of function call authorizations */
  authorizedFunctions?: Maybe<Array<NETWORK__AuthorizedFunction>>;
  /** Token lock count of contracts created */
  tokenLockCount: Scalars['BigInt'];
};


/**
 * The Token manager data
 *
 */
export type NETWORK__TokenManagerauthorizedFunctionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NETWORK__AuthorizedFunction_orderBy>;
  orderDirection?: InputMaybe<NETWORK__OrderDirection>;
  where?: InputMaybe<NETWORK__AuthorizedFunction_filter>;
};

export type NETWORK__TokenManager_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  masterCopy?: InputMaybe<Scalars['NETWORK__Bytes']>;
  masterCopy_not?: InputMaybe<Scalars['NETWORK__Bytes']>;
  masterCopy_gt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  masterCopy_lt?: InputMaybe<Scalars['NETWORK__Bytes']>;
  masterCopy_gte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  masterCopy_lte?: InputMaybe<Scalars['NETWORK__Bytes']>;
  masterCopy_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  masterCopy_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  masterCopy_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  masterCopy_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']>;
  tokens?: InputMaybe<Scalars['BigInt']>;
  tokens_not?: InputMaybe<Scalars['BigInt']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']>;
  tokens_lt?: InputMaybe<Scalars['BigInt']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenDestinations?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  tokenDestinations_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  tokenDestinations_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  tokenDestinations_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  tokenDestinations_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  tokenDestinations_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']>>;
  authorizedFunctions_?: InputMaybe<NETWORK__AuthorizedFunction_filter>;
  tokenLockCount?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_not?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_gt?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_lt?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_gte?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_lte?: InputMaybe<Scalars['BigInt']>;
  tokenLockCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenLockCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__TokenManager_orderBy =
  | 'id'
  | 'masterCopy'
  | 'tokens'
  | 'tokenDestinations'
  | 'authorizedFunctions'
  | 'tokenLockCount';

/**
 * A generic transaction in The Graph Network
 *
 */
export type NETWORK__Transaction = {
  /** Transaction hash concatenated with event log index */
  id: Scalars['ID'];
  /** Block number for the transaction */
  blockNumber: Scalars['Int'];
  /** Timestamp for the transaction */
  timestamp: Scalars['Int'];
  /** Signer of the transaction */
  signer: NETWORK__GraphAccount;
  /** Type of Graph Network transaction */
  type: NETWORK__TransactionType;
};

export type NETWORK__TransactionType =
  | 'Stake'
  | 'Unstake'
  | 'MintSignal'
  | 'BurnSignal'
  | 'MintNSignal'
  | 'BurnNSignal';

export type NETWORK__Transaction_filter = {
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
  signer_?: InputMaybe<NETWORK__GraphAccount_filter>;
  type?: InputMaybe<NETWORK__TransactionType>;
  type_not?: InputMaybe<NETWORK__TransactionType>;
  type_in?: InputMaybe<Array<NETWORK__TransactionType>>;
  type_not_in?: InputMaybe<Array<NETWORK__TransactionType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<NETWORK__BlockChangedFilter>;
};

export type NETWORK__Transaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'signer'
  | 'type';

export type NETWORK___Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['NETWORK__Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type NETWORK___Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: NETWORK___Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type NETWORK___SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  NETWORK__graphNetwork: InContextSdkMethod<Query['NETWORK__graphNetwork'], QueryNETWORK__graphNetworkArgs, MeshContext>,
  /** null **/
  NETWORK__graphNetworks: InContextSdkMethod<Query['NETWORK__graphNetworks'], QueryNETWORK__graphNetworksArgs, MeshContext>,
  /** null **/
  NETWORK__graphAccount: InContextSdkMethod<Query['NETWORK__graphAccount'], QueryNETWORK__graphAccountArgs, MeshContext>,
  /** null **/
  NETWORK__graphAccounts: InContextSdkMethod<Query['NETWORK__graphAccounts'], QueryNETWORK__graphAccountsArgs, MeshContext>,
  /** null **/
  NETWORK__graphAccountName: InContextSdkMethod<Query['NETWORK__graphAccountName'], QueryNETWORK__graphAccountNameArgs, MeshContext>,
  /** null **/
  NETWORK__graphAccountNames: InContextSdkMethod<Query['NETWORK__graphAccountNames'], QueryNETWORK__graphAccountNamesArgs, MeshContext>,
  /** null **/
  NETWORK__subgraph: InContextSdkMethod<Query['NETWORK__subgraph'], QueryNETWORK__subgraphArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphs: InContextSdkMethod<Query['NETWORK__subgraphs'], QueryNETWORK__subgraphsArgs, MeshContext>,
  /** null **/
  NETWORK__currentSubgraphDeploymentRelation: InContextSdkMethod<Query['NETWORK__currentSubgraphDeploymentRelation'], QueryNETWORK__currentSubgraphDeploymentRelationArgs, MeshContext>,
  /** null **/
  NETWORK__currentSubgraphDeploymentRelations: InContextSdkMethod<Query['NETWORK__currentSubgraphDeploymentRelations'], QueryNETWORK__currentSubgraphDeploymentRelationsArgs, MeshContext>,
  /** null **/
  NETWORK__network: InContextSdkMethod<Query['NETWORK__network'], QueryNETWORK__networkArgs, MeshContext>,
  /** null **/
  NETWORK__networks: InContextSdkMethod<Query['NETWORK__networks'], QueryNETWORK__networksArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphCategoryRelation: InContextSdkMethod<Query['NETWORK__subgraphCategoryRelation'], QueryNETWORK__subgraphCategoryRelationArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphCategoryRelations: InContextSdkMethod<Query['NETWORK__subgraphCategoryRelations'], QueryNETWORK__subgraphCategoryRelationsArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphCategory: InContextSdkMethod<Query['NETWORK__subgraphCategory'], QueryNETWORK__subgraphCategoryArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphCategories: InContextSdkMethod<Query['NETWORK__subgraphCategories'], QueryNETWORK__subgraphCategoriesArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphVersion: InContextSdkMethod<Query['NETWORK__subgraphVersion'], QueryNETWORK__subgraphVersionArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphVersions: InContextSdkMethod<Query['NETWORK__subgraphVersions'], QueryNETWORK__subgraphVersionsArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphDeployment: InContextSdkMethod<Query['NETWORK__subgraphDeployment'], QueryNETWORK__subgraphDeploymentArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphDeployments: InContextSdkMethod<Query['NETWORK__subgraphDeployments'], QueryNETWORK__subgraphDeploymentsArgs, MeshContext>,
  /** null **/
  NETWORK__indexer: InContextSdkMethod<Query['NETWORK__indexer'], QueryNETWORK__indexerArgs, MeshContext>,
  /** null **/
  NETWORK__indexers: InContextSdkMethod<Query['NETWORK__indexers'], QueryNETWORK__indexersArgs, MeshContext>,
  /** null **/
  NETWORK__allocation: InContextSdkMethod<Query['NETWORK__allocation'], QueryNETWORK__allocationArgs, MeshContext>,
  /** null **/
  NETWORK__allocations: InContextSdkMethod<Query['NETWORK__allocations'], QueryNETWORK__allocationsArgs, MeshContext>,
  /** null **/
  NETWORK__pool: InContextSdkMethod<Query['NETWORK__pool'], QueryNETWORK__poolArgs, MeshContext>,
  /** null **/
  NETWORK__pools: InContextSdkMethod<Query['NETWORK__pools'], QueryNETWORK__poolsArgs, MeshContext>,
  /** null **/
  NETWORK__delegator: InContextSdkMethod<Query['NETWORK__delegator'], QueryNETWORK__delegatorArgs, MeshContext>,
  /** null **/
  NETWORK__delegators: InContextSdkMethod<Query['NETWORK__delegators'], QueryNETWORK__delegatorsArgs, MeshContext>,
  /** null **/
  NETWORK__delegatedStake: InContextSdkMethod<Query['NETWORK__delegatedStake'], QueryNETWORK__delegatedStakeArgs, MeshContext>,
  /** null **/
  NETWORK__delegatedStakes: InContextSdkMethod<Query['NETWORK__delegatedStakes'], QueryNETWORK__delegatedStakesArgs, MeshContext>,
  /** null **/
  NETWORK__curator: InContextSdkMethod<Query['NETWORK__curator'], QueryNETWORK__curatorArgs, MeshContext>,
  /** null **/
  NETWORK__curators: InContextSdkMethod<Query['NETWORK__curators'], QueryNETWORK__curatorsArgs, MeshContext>,
  /** null **/
  NETWORK__signal: InContextSdkMethod<Query['NETWORK__signal'], QueryNETWORK__signalArgs, MeshContext>,
  /** null **/
  NETWORK__signals: InContextSdkMethod<Query['NETWORK__signals'], QueryNETWORK__signalsArgs, MeshContext>,
  /** null **/
  NETWORK__nameSignal: InContextSdkMethod<Query['NETWORK__nameSignal'], QueryNETWORK__nameSignalArgs, MeshContext>,
  /** null **/
  NETWORK__nameSignals: InContextSdkMethod<Query['NETWORK__nameSignals'], QueryNETWORK__nameSignalsArgs, MeshContext>,
  /** null **/
  NETWORK__nameSignalSubgraphRelation: InContextSdkMethod<Query['NETWORK__nameSignalSubgraphRelation'], QueryNETWORK__nameSignalSubgraphRelationArgs, MeshContext>,
  /** null **/
  NETWORK__nameSignalSubgraphRelations: InContextSdkMethod<Query['NETWORK__nameSignalSubgraphRelations'], QueryNETWORK__nameSignalSubgraphRelationsArgs, MeshContext>,
  /** null **/
  NETWORK__dispute: InContextSdkMethod<Query['NETWORK__dispute'], QueryNETWORK__disputeArgs, MeshContext>,
  /** null **/
  NETWORK__disputes: InContextSdkMethod<Query['NETWORK__disputes'], QueryNETWORK__disputesArgs, MeshContext>,
  /** null **/
  NETWORK__attestation: InContextSdkMethod<Query['NETWORK__attestation'], QueryNETWORK__attestationArgs, MeshContext>,
  /** null **/
  NETWORK__attestations: InContextSdkMethod<Query['NETWORK__attestations'], QueryNETWORK__attestationsArgs, MeshContext>,
  /** null **/
  NETWORK__epoch: InContextSdkMethod<Query['NETWORK__epoch'], QueryNETWORK__epochArgs, MeshContext>,
  /** null **/
  NETWORK__epoches: InContextSdkMethod<Query['NETWORK__epoches'], QueryNETWORK__epochesArgs, MeshContext>,
  /** null **/
  NETWORK__nameSignalTransaction: InContextSdkMethod<Query['NETWORK__nameSignalTransaction'], QueryNETWORK__nameSignalTransactionArgs, MeshContext>,
  /** null **/
  NETWORK__nameSignalTransactions: InContextSdkMethod<Query['NETWORK__nameSignalTransactions'], QueryNETWORK__nameSignalTransactionsArgs, MeshContext>,
  /** null **/
  NETWORK__signalTransaction: InContextSdkMethod<Query['NETWORK__signalTransaction'], QueryNETWORK__signalTransactionArgs, MeshContext>,
  /** null **/
  NETWORK__signalTransactions: InContextSdkMethod<Query['NETWORK__signalTransactions'], QueryNETWORK__signalTransactionsArgs, MeshContext>,
  /** null **/
  NETWORK__tokenManager: InContextSdkMethod<Query['NETWORK__tokenManager'], QueryNETWORK__tokenManagerArgs, MeshContext>,
  /** null **/
  NETWORK__tokenManagers: InContextSdkMethod<Query['NETWORK__tokenManagers'], QueryNETWORK__tokenManagersArgs, MeshContext>,
  /** null **/
  NETWORK__authorizedFunction: InContextSdkMethod<Query['NETWORK__authorizedFunction'], QueryNETWORK__authorizedFunctionArgs, MeshContext>,
  /** null **/
  NETWORK__authorizedFunctions: InContextSdkMethod<Query['NETWORK__authorizedFunctions'], QueryNETWORK__authorizedFunctionsArgs, MeshContext>,
  /** null **/
  NETWORK__tokenLockWallet: InContextSdkMethod<Query['NETWORK__tokenLockWallet'], QueryNETWORK__tokenLockWalletArgs, MeshContext>,
  /** null **/
  NETWORK__tokenLockWallets: InContextSdkMethod<Query['NETWORK__tokenLockWallets'], QueryNETWORK__tokenLockWalletsArgs, MeshContext>,
  /** null **/
  NETWORK__transaction: InContextSdkMethod<Query['NETWORK__transaction'], QueryNETWORK__transactionArgs, MeshContext>,
  /** null **/
  NETWORK__transactions: InContextSdkMethod<Query['NETWORK__transactions'], QueryNETWORK__transactionsArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphSearch: InContextSdkMethod<Query['NETWORK__subgraphSearch'], QueryNETWORK__subgraphSearchArgs, MeshContext>,
  /** null **/
  NETWORK__curatorSearch: InContextSdkMethod<Query['NETWORK__curatorSearch'], QueryNETWORK__curatorSearchArgs, MeshContext>,
  /** null **/
  NETWORK__delegatorSearch: InContextSdkMethod<Query['NETWORK__delegatorSearch'], QueryNETWORK__delegatorSearchArgs, MeshContext>,
  /** Access to subgraph metadata **/
  NETWORK___meta: InContextSdkMethod<Query['NETWORK___meta'], QueryNETWORK___metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  NETWORK__graphNetwork: InContextSdkMethod<Subscription['NETWORK__graphNetwork'], SubscriptionNETWORK__graphNetworkArgs, MeshContext>,
  /** null **/
  NETWORK__graphNetworks: InContextSdkMethod<Subscription['NETWORK__graphNetworks'], SubscriptionNETWORK__graphNetworksArgs, MeshContext>,
  /** null **/
  NETWORK__graphAccount: InContextSdkMethod<Subscription['NETWORK__graphAccount'], SubscriptionNETWORK__graphAccountArgs, MeshContext>,
  /** null **/
  NETWORK__graphAccounts: InContextSdkMethod<Subscription['NETWORK__graphAccounts'], SubscriptionNETWORK__graphAccountsArgs, MeshContext>,
  /** null **/
  NETWORK__graphAccountName: InContextSdkMethod<Subscription['NETWORK__graphAccountName'], SubscriptionNETWORK__graphAccountNameArgs, MeshContext>,
  /** null **/
  NETWORK__graphAccountNames: InContextSdkMethod<Subscription['NETWORK__graphAccountNames'], SubscriptionNETWORK__graphAccountNamesArgs, MeshContext>,
  /** null **/
  NETWORK__subgraph: InContextSdkMethod<Subscription['NETWORK__subgraph'], SubscriptionNETWORK__subgraphArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphs: InContextSdkMethod<Subscription['NETWORK__subgraphs'], SubscriptionNETWORK__subgraphsArgs, MeshContext>,
  /** null **/
  NETWORK__currentSubgraphDeploymentRelation: InContextSdkMethod<Subscription['NETWORK__currentSubgraphDeploymentRelation'], SubscriptionNETWORK__currentSubgraphDeploymentRelationArgs, MeshContext>,
  /** null **/
  NETWORK__currentSubgraphDeploymentRelations: InContextSdkMethod<Subscription['NETWORK__currentSubgraphDeploymentRelations'], SubscriptionNETWORK__currentSubgraphDeploymentRelationsArgs, MeshContext>,
  /** null **/
  NETWORK__network: InContextSdkMethod<Subscription['NETWORK__network'], SubscriptionNETWORK__networkArgs, MeshContext>,
  /** null **/
  NETWORK__networks: InContextSdkMethod<Subscription['NETWORK__networks'], SubscriptionNETWORK__networksArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphCategoryRelation: InContextSdkMethod<Subscription['NETWORK__subgraphCategoryRelation'], SubscriptionNETWORK__subgraphCategoryRelationArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphCategoryRelations: InContextSdkMethod<Subscription['NETWORK__subgraphCategoryRelations'], SubscriptionNETWORK__subgraphCategoryRelationsArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphCategory: InContextSdkMethod<Subscription['NETWORK__subgraphCategory'], SubscriptionNETWORK__subgraphCategoryArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphCategories: InContextSdkMethod<Subscription['NETWORK__subgraphCategories'], SubscriptionNETWORK__subgraphCategoriesArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphVersion: InContextSdkMethod<Subscription['NETWORK__subgraphVersion'], SubscriptionNETWORK__subgraphVersionArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphVersions: InContextSdkMethod<Subscription['NETWORK__subgraphVersions'], SubscriptionNETWORK__subgraphVersionsArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphDeployment: InContextSdkMethod<Subscription['NETWORK__subgraphDeployment'], SubscriptionNETWORK__subgraphDeploymentArgs, MeshContext>,
  /** null **/
  NETWORK__subgraphDeployments: InContextSdkMethod<Subscription['NETWORK__subgraphDeployments'], SubscriptionNETWORK__subgraphDeploymentsArgs, MeshContext>,
  /** null **/
  NETWORK__indexer: InContextSdkMethod<Subscription['NETWORK__indexer'], SubscriptionNETWORK__indexerArgs, MeshContext>,
  /** null **/
  NETWORK__indexers: InContextSdkMethod<Subscription['NETWORK__indexers'], SubscriptionNETWORK__indexersArgs, MeshContext>,
  /** null **/
  NETWORK__allocation: InContextSdkMethod<Subscription['NETWORK__allocation'], SubscriptionNETWORK__allocationArgs, MeshContext>,
  /** null **/
  NETWORK__allocations: InContextSdkMethod<Subscription['NETWORK__allocations'], SubscriptionNETWORK__allocationsArgs, MeshContext>,
  /** null **/
  NETWORK__pool: InContextSdkMethod<Subscription['NETWORK__pool'], SubscriptionNETWORK__poolArgs, MeshContext>,
  /** null **/
  NETWORK__pools: InContextSdkMethod<Subscription['NETWORK__pools'], SubscriptionNETWORK__poolsArgs, MeshContext>,
  /** null **/
  NETWORK__delegator: InContextSdkMethod<Subscription['NETWORK__delegator'], SubscriptionNETWORK__delegatorArgs, MeshContext>,
  /** null **/
  NETWORK__delegators: InContextSdkMethod<Subscription['NETWORK__delegators'], SubscriptionNETWORK__delegatorsArgs, MeshContext>,
  /** null **/
  NETWORK__delegatedStake: InContextSdkMethod<Subscription['NETWORK__delegatedStake'], SubscriptionNETWORK__delegatedStakeArgs, MeshContext>,
  /** null **/
  NETWORK__delegatedStakes: InContextSdkMethod<Subscription['NETWORK__delegatedStakes'], SubscriptionNETWORK__delegatedStakesArgs, MeshContext>,
  /** null **/
  NETWORK__curator: InContextSdkMethod<Subscription['NETWORK__curator'], SubscriptionNETWORK__curatorArgs, MeshContext>,
  /** null **/
  NETWORK__curators: InContextSdkMethod<Subscription['NETWORK__curators'], SubscriptionNETWORK__curatorsArgs, MeshContext>,
  /** null **/
  NETWORK__signal: InContextSdkMethod<Subscription['NETWORK__signal'], SubscriptionNETWORK__signalArgs, MeshContext>,
  /** null **/
  NETWORK__signals: InContextSdkMethod<Subscription['NETWORK__signals'], SubscriptionNETWORK__signalsArgs, MeshContext>,
  /** null **/
  NETWORK__nameSignal: InContextSdkMethod<Subscription['NETWORK__nameSignal'], SubscriptionNETWORK__nameSignalArgs, MeshContext>,
  /** null **/
  NETWORK__nameSignals: InContextSdkMethod<Subscription['NETWORK__nameSignals'], SubscriptionNETWORK__nameSignalsArgs, MeshContext>,
  /** null **/
  NETWORK__nameSignalSubgraphRelation: InContextSdkMethod<Subscription['NETWORK__nameSignalSubgraphRelation'], SubscriptionNETWORK__nameSignalSubgraphRelationArgs, MeshContext>,
  /** null **/
  NETWORK__nameSignalSubgraphRelations: InContextSdkMethod<Subscription['NETWORK__nameSignalSubgraphRelations'], SubscriptionNETWORK__nameSignalSubgraphRelationsArgs, MeshContext>,
  /** null **/
  NETWORK__dispute: InContextSdkMethod<Subscription['NETWORK__dispute'], SubscriptionNETWORK__disputeArgs, MeshContext>,
  /** null **/
  NETWORK__disputes: InContextSdkMethod<Subscription['NETWORK__disputes'], SubscriptionNETWORK__disputesArgs, MeshContext>,
  /** null **/
  NETWORK__attestation: InContextSdkMethod<Subscription['NETWORK__attestation'], SubscriptionNETWORK__attestationArgs, MeshContext>,
  /** null **/
  NETWORK__attestations: InContextSdkMethod<Subscription['NETWORK__attestations'], SubscriptionNETWORK__attestationsArgs, MeshContext>,
  /** null **/
  NETWORK__epoch: InContextSdkMethod<Subscription['NETWORK__epoch'], SubscriptionNETWORK__epochArgs, MeshContext>,
  /** null **/
  NETWORK__epoches: InContextSdkMethod<Subscription['NETWORK__epoches'], SubscriptionNETWORK__epochesArgs, MeshContext>,
  /** null **/
  NETWORK__nameSignalTransaction: InContextSdkMethod<Subscription['NETWORK__nameSignalTransaction'], SubscriptionNETWORK__nameSignalTransactionArgs, MeshContext>,
  /** null **/
  NETWORK__nameSignalTransactions: InContextSdkMethod<Subscription['NETWORK__nameSignalTransactions'], SubscriptionNETWORK__nameSignalTransactionsArgs, MeshContext>,
  /** null **/
  NETWORK__signalTransaction: InContextSdkMethod<Subscription['NETWORK__signalTransaction'], SubscriptionNETWORK__signalTransactionArgs, MeshContext>,
  /** null **/
  NETWORK__signalTransactions: InContextSdkMethod<Subscription['NETWORK__signalTransactions'], SubscriptionNETWORK__signalTransactionsArgs, MeshContext>,
  /** null **/
  NETWORK__tokenManager: InContextSdkMethod<Subscription['NETWORK__tokenManager'], SubscriptionNETWORK__tokenManagerArgs, MeshContext>,
  /** null **/
  NETWORK__tokenManagers: InContextSdkMethod<Subscription['NETWORK__tokenManagers'], SubscriptionNETWORK__tokenManagersArgs, MeshContext>,
  /** null **/
  NETWORK__authorizedFunction: InContextSdkMethod<Subscription['NETWORK__authorizedFunction'], SubscriptionNETWORK__authorizedFunctionArgs, MeshContext>,
  /** null **/
  NETWORK__authorizedFunctions: InContextSdkMethod<Subscription['NETWORK__authorizedFunctions'], SubscriptionNETWORK__authorizedFunctionsArgs, MeshContext>,
  /** null **/
  NETWORK__tokenLockWallet: InContextSdkMethod<Subscription['NETWORK__tokenLockWallet'], SubscriptionNETWORK__tokenLockWalletArgs, MeshContext>,
  /** null **/
  NETWORK__tokenLockWallets: InContextSdkMethod<Subscription['NETWORK__tokenLockWallets'], SubscriptionNETWORK__tokenLockWalletsArgs, MeshContext>,
  /** null **/
  NETWORK__transaction: InContextSdkMethod<Subscription['NETWORK__transaction'], SubscriptionNETWORK__transactionArgs, MeshContext>,
  /** null **/
  NETWORK__transactions: InContextSdkMethod<Subscription['NETWORK__transactions'], SubscriptionNETWORK__transactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  NETWORK___meta: InContextSdkMethod<Subscription['NETWORK___meta'], SubscriptionNETWORK___metaArgs, MeshContext>
  };

  export type Context = {
      ["Network"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["network"]: Scalars['ID']
    };
}
