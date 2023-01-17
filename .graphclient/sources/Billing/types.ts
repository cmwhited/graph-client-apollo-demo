// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BillingTypes {
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
  BILLING__BigDecimal: any;
  BigInt: any;
  BILLING__Bytes: any;
};

/**
 * Billing holds global variables
 *
 */
export type BILLING__Billing = {
  /** Set to 1 */
  id: Scalars['ID'];
  /** Address of the gateway */
  gateway: Scalars['BILLING__Bytes'];
  /** Address of the governor */
  governor: Scalars['BILLING__Bytes'];
  /** [CUMULATIVE] Total amount of tokens added */
  totalTokensAdded: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens pulled */
  totalTokensPulled: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens removed/withdrawn */
  totalTokensRemoved: Scalars['BigInt'];
  /** [CURRENT] Total amount of currently available balance (totalTokensAdded - totalTokensPulled - totalTokensRemoved) */
  totalCurrentBalance: Scalars['BigInt'];
  /** Current BillingDailyData entity created */
  currentDailyDataEntity?: Maybe<BILLING__BillingDailyData>;
  /** Previous BillingDailyData entity created */
  previousDailyDataEntity?: Maybe<BILLING__BillingDailyData>;
};

export type BILLING__BillingDailyData = {
  /** <SUBGRAPH ID>-<DAY NUMBER> */
  id: Scalars['ID'];
  /** Timestamp for the start of the day that this entity represents. UTC+0 */
  dayStart: Scalars['BigInt'];
  /** Timestamp for the end of the day that this entity represents. UTC+0 */
  dayEnd: Scalars['BigInt'];
  /** Number of the day this entity represents. Day 0 is the network launch day. */
  dayNumber: Scalars['Int'];
  /** Original entity that the daily data entity tracks */
  entity: BILLING__Billing;
  /** [CUMULATIVE] Total amount of tokens added */
  totalTokensAdded: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens pulled */
  totalTokensPulled: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens removed/withdrawn */
  totalTokensRemoved: Scalars['BigInt'];
  /** [CURRENT] Total amount of currently available balance (totalTokensAdded - totalTokensPulled - totalTokensRemoved) */
  totalCurrentBalance: Scalars['BigInt'];
  /** Address of the gateway */
  gateway: Scalars['BILLING__Bytes'];
  /** Address of the governor */
  governor: Scalars['BILLING__Bytes'];
  /** [DELTA] Chage in total tokens added since the last DailyData point */
  totalTokensAddedDelta: Scalars['BigInt'];
  /** [DELTA] Chage in total tokens pulled since the last DailyData point */
  totalTokensPulledDelta: Scalars['BigInt'];
  /** [DELTA] Chage in total tokens removed/withdrawn since the last DailyData point */
  totalTokensRemovedDelta: Scalars['BigInt'];
  /** [DELTA] Chage in total currently available balance since the last DailyData point */
  totalCurrentBalanceDelta: Scalars['BigInt'];
};

export type BILLING__BillingDailyData_filter = {
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
  entity?: InputMaybe<Scalars['String']>;
  entity_not?: InputMaybe<Scalars['String']>;
  entity_gt?: InputMaybe<Scalars['String']>;
  entity_lt?: InputMaybe<Scalars['String']>;
  entity_gte?: InputMaybe<Scalars['String']>;
  entity_lte?: InputMaybe<Scalars['String']>;
  entity_in?: InputMaybe<Array<Scalars['String']>>;
  entity_not_in?: InputMaybe<Array<Scalars['String']>>;
  entity_contains?: InputMaybe<Scalars['String']>;
  entity_contains_nocase?: InputMaybe<Scalars['String']>;
  entity_not_contains?: InputMaybe<Scalars['String']>;
  entity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  entity_starts_with?: InputMaybe<Scalars['String']>;
  entity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entity_not_starts_with?: InputMaybe<Scalars['String']>;
  entity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entity_ends_with?: InputMaybe<Scalars['String']>;
  entity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  entity_not_ends_with?: InputMaybe<Scalars['String']>;
  entity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  entity_?: InputMaybe<BILLING__Billing_filter>;
  totalTokensAdded?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAdded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCurrentBalance?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_not?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_gt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_lt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_gte?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_lte?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCurrentBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gateway?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  gateway_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  gateway_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  governor_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  governor_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  totalTokensAddedDelta?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAddedDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulledDelta?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulledDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemovedDelta?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemovedDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCurrentBalanceDelta?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalanceDelta_not?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalanceDelta_gt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalanceDelta_lt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalanceDelta_gte?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalanceDelta_lte?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalanceDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCurrentBalanceDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BILLING__BlockChangedFilter>;
};

export type BILLING__BillingDailyData_orderBy =
  | 'id'
  | 'dayStart'
  | 'dayEnd'
  | 'dayNumber'
  | 'entity'
  | 'totalTokensAdded'
  | 'totalTokensPulled'
  | 'totalTokensRemoved'
  | 'totalCurrentBalance'
  | 'gateway'
  | 'governor'
  | 'totalTokensAddedDelta'
  | 'totalTokensPulledDelta'
  | 'totalTokensRemovedDelta'
  | 'totalCurrentBalanceDelta';

export type BILLING__Billing_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  gateway?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  gateway_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  gateway_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  gateway_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  governor_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  governor_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  governor_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  totalTokensAdded?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAdded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCurrentBalance?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_not?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_gt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_lt?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_gte?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_lte?: InputMaybe<Scalars['BigInt']>;
  totalCurrentBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCurrentBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentDailyDataEntity?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_gt?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_lt?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_gte?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_lte?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_in?: InputMaybe<Array<Scalars['String']>>;
  currentDailyDataEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentDailyDataEntity_contains?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_contains?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_starts_with?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_ends_with?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_?: InputMaybe<BILLING__BillingDailyData_filter>;
  previousDailyDataEntity?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_gt?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_lt?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_gte?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_lte?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_in?: InputMaybe<Array<Scalars['String']>>;
  previousDailyDataEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  previousDailyDataEntity_contains?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_contains?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_starts_with?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_ends_with?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_?: InputMaybe<BILLING__BillingDailyData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BILLING__BlockChangedFilter>;
};

export type BILLING__Billing_orderBy =
  | 'id'
  | 'gateway'
  | 'governor'
  | 'totalTokensAdded'
  | 'totalTokensPulled'
  | 'totalTokensRemoved'
  | 'totalCurrentBalance'
  | 'currentDailyDataEntity'
  | 'previousDailyDataEntity';

export type BILLING__BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type BILLING__Block_height = {
  hash?: InputMaybe<Scalars['BILLING__Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/** Defines the order direction, either ascending or descending */
export type BILLING__OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  BILLING__billing?: Maybe<BILLING__Billing>;
  BILLING__billings: Array<BILLING__Billing>;
  BILLING__user?: Maybe<BILLING__User>;
  BILLING__users: Array<BILLING__User>;
  BILLING__tokensAdded?: Maybe<BILLING__TokensAdded>;
  BILLING__tokensAddeds: Array<BILLING__TokensAdded>;
  BILLING__tokensRemoved?: Maybe<BILLING__TokensRemoved>;
  BILLING__tokensRemoveds: Array<BILLING__TokensRemoved>;
  BILLING__tokensPulled?: Maybe<BILLING__TokensPulled>;
  BILLING__tokensPulleds: Array<BILLING__TokensPulled>;
  BILLING__billingDailyData?: Maybe<BILLING__BillingDailyData>;
  BILLING__billingDailyDatas: Array<BILLING__BillingDailyData>;
  BILLING__userDailyData?: Maybe<BILLING__UserDailyData>;
  BILLING__userDailyDatas: Array<BILLING__UserDailyData>;
  BILLING__transaction?: Maybe<BILLING__Transaction>;
  BILLING__transactions: Array<BILLING__Transaction>;
  /** Access to subgraph metadata */
  BILLING___meta?: Maybe<BILLING___Meta_>;
};


export type QueryBILLING__billingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type QueryBILLING__billingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__Billing_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__Billing_filter>;
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type QueryBILLING__userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type QueryBILLING__usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__User_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__User_filter>;
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type QueryBILLING__tokensAddedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type QueryBILLING__tokensAddedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__TokensAdded_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__TokensAdded_filter>;
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type QueryBILLING__tokensRemovedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type QueryBILLING__tokensRemovedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__TokensRemoved_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__TokensRemoved_filter>;
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type QueryBILLING__tokensPulledArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type QueryBILLING__tokensPulledsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__TokensPulled_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__TokensPulled_filter>;
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type QueryBILLING__billingDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type QueryBILLING__billingDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__BillingDailyData_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__BillingDailyData_filter>;
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type QueryBILLING__userDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type QueryBILLING__userDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__UserDailyData_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__UserDailyData_filter>;
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type QueryBILLING__transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type QueryBILLING__transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__Transaction_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__Transaction_filter>;
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type QueryBILLING___metaArgs = {
  block?: InputMaybe<BILLING__Block_height>;
};

export type Subscription = {
  BILLING__billing?: Maybe<BILLING__Billing>;
  BILLING__billings: Array<BILLING__Billing>;
  BILLING__user?: Maybe<BILLING__User>;
  BILLING__users: Array<BILLING__User>;
  BILLING__tokensAdded?: Maybe<BILLING__TokensAdded>;
  BILLING__tokensAddeds: Array<BILLING__TokensAdded>;
  BILLING__tokensRemoved?: Maybe<BILLING__TokensRemoved>;
  BILLING__tokensRemoveds: Array<BILLING__TokensRemoved>;
  BILLING__tokensPulled?: Maybe<BILLING__TokensPulled>;
  BILLING__tokensPulleds: Array<BILLING__TokensPulled>;
  BILLING__billingDailyData?: Maybe<BILLING__BillingDailyData>;
  BILLING__billingDailyDatas: Array<BILLING__BillingDailyData>;
  BILLING__userDailyData?: Maybe<BILLING__UserDailyData>;
  BILLING__userDailyDatas: Array<BILLING__UserDailyData>;
  BILLING__transaction?: Maybe<BILLING__Transaction>;
  BILLING__transactions: Array<BILLING__Transaction>;
  /** Access to subgraph metadata */
  BILLING___meta?: Maybe<BILLING___Meta_>;
};


export type SubscriptionBILLING__billingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type SubscriptionBILLING__billingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__Billing_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__Billing_filter>;
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type SubscriptionBILLING__userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type SubscriptionBILLING__usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__User_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__User_filter>;
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type SubscriptionBILLING__tokensAddedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type SubscriptionBILLING__tokensAddedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__TokensAdded_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__TokensAdded_filter>;
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type SubscriptionBILLING__tokensRemovedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type SubscriptionBILLING__tokensRemovedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__TokensRemoved_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__TokensRemoved_filter>;
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type SubscriptionBILLING__tokensPulledArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type SubscriptionBILLING__tokensPulledsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__TokensPulled_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__TokensPulled_filter>;
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type SubscriptionBILLING__billingDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type SubscriptionBILLING__billingDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__BillingDailyData_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__BillingDailyData_filter>;
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type SubscriptionBILLING__userDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type SubscriptionBILLING__userDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__UserDailyData_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__UserDailyData_filter>;
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type SubscriptionBILLING__transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type SubscriptionBILLING__transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__Transaction_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__Transaction_filter>;
  block?: InputMaybe<BILLING__Block_height>;
  subgraphError?: BILLING___SubgraphErrorPolicy_;
};


export type SubscriptionBILLING___metaArgs = {
  block?: InputMaybe<BILLING__Block_height>;
};

/**
 * TokensAdded Transaction
 *
 */
export type BILLING__TokensAdded = BILLING__Transaction & {
  id: Scalars['ID'];
  hash: Scalars['BILLING__Bytes'];
  blockNumber: Scalars['Int'];
  timestamp: Scalars['Int'];
  user: BILLING__User;
  amount: Scalars['BigInt'];
  type: BILLING__TransactionType;
};

export type BILLING__TokensAdded_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  hash_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
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
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<BILLING__User_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<BILLING__TransactionType>;
  type_not?: InputMaybe<BILLING__TransactionType>;
  type_in?: InputMaybe<Array<BILLING__TransactionType>>;
  type_not_in?: InputMaybe<Array<BILLING__TransactionType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BILLING__BlockChangedFilter>;
};

export type BILLING__TokensAdded_orderBy =
  | 'id'
  | 'hash'
  | 'blockNumber'
  | 'timestamp'
  | 'user'
  | 'amount'
  | 'type';

/**
 * TokensPulled Transaction. Where the gateway pulls tokens from the user
 *
 */
export type BILLING__TokensPulled = BILLING__Transaction & {
  id: Scalars['ID'];
  hash: Scalars['BILLING__Bytes'];
  blockNumber: Scalars['Int'];
  timestamp: Scalars['Int'];
  user: BILLING__User;
  amount: Scalars['BigInt'];
  type: BILLING__TransactionType;
};

export type BILLING__TokensPulled_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  hash_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
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
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<BILLING__User_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<BILLING__TransactionType>;
  type_not?: InputMaybe<BILLING__TransactionType>;
  type_in?: InputMaybe<Array<BILLING__TransactionType>>;
  type_not_in?: InputMaybe<Array<BILLING__TransactionType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BILLING__BlockChangedFilter>;
};

export type BILLING__TokensPulled_orderBy =
  | 'id'
  | 'hash'
  | 'blockNumber'
  | 'timestamp'
  | 'user'
  | 'amount'
  | 'type';

/**
 * TokensRemoved Transaction
 *
 */
export type BILLING__TokensRemoved = BILLING__Transaction & {
  id: Scalars['ID'];
  hash: Scalars['BILLING__Bytes'];
  blockNumber: Scalars['Int'];
  timestamp: Scalars['Int'];
  user: BILLING__User;
  amount: Scalars['BigInt'];
  type: BILLING__TransactionType;
  /** User that the tokens are withdrawn to */
  to: Scalars['BILLING__Bytes'];
};

export type BILLING__TokensRemoved_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  hash_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
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
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<BILLING__User_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<BILLING__TransactionType>;
  type_not?: InputMaybe<BILLING__TransactionType>;
  type_in?: InputMaybe<Array<BILLING__TransactionType>>;
  type_not_in?: InputMaybe<Array<BILLING__TransactionType>>;
  to?: InputMaybe<Scalars['BILLING__Bytes']>;
  to_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  to_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  to_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  to_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  to_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  to_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  to_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  to_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BILLING__BlockChangedFilter>;
};

export type BILLING__TokensRemoved_orderBy =
  | 'id'
  | 'hash'
  | 'blockNumber'
  | 'timestamp'
  | 'user'
  | 'amount'
  | 'type'
  | 'to';

/**
 * A generic transaction
 *
 */
export type BILLING__Transaction = {
  /** Transaction hash concatenated with event log index */
  id: Scalars['ID'];
  /** Transaction hash */
  hash: Scalars['BILLING__Bytes'];
  /** Block number for the transaction */
  blockNumber: Scalars['Int'];
  /** Timestamp for the transaction */
  timestamp: Scalars['Int'];
  /** User of the transaction */
  user: BILLING__User;
  /** Amount of tokens used in the transaction */
  amount: Scalars['BigInt'];
  /** Type of Graph Network transaction */
  type: BILLING__TransactionType;
};

export type BILLING__TransactionType =
  | 'TokensAdded'
  | 'TokensRemoved'
  | 'TokensPulled';

export type BILLING__Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_gt?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_lt?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_gte?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_lte?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['BILLING__Bytes']>>;
  hash_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
  hash_not_contains?: InputMaybe<Scalars['BILLING__Bytes']>;
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
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<BILLING__User_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<BILLING__TransactionType>;
  type_not?: InputMaybe<BILLING__TransactionType>;
  type_in?: InputMaybe<Array<BILLING__TransactionType>>;
  type_not_in?: InputMaybe<Array<BILLING__TransactionType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BILLING__BlockChangedFilter>;
};

export type BILLING__Transaction_orderBy =
  | 'id'
  | 'hash'
  | 'blockNumber'
  | 'timestamp'
  | 'user'
  | 'amount'
  | 'type';

/**
 * Curator Name Signal for a single Subgraph
 *
 */
export type BILLING__User = {
  /** Polygon address */
  id: Scalars['ID'];
  /** Balance of the user in the Billing contract */
  billingBalance: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens added */
  totalTokensAdded: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens pulled */
  totalTokensPulled: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens removed/withdrawn */
  totalTokensRemoved: Scalars['BigInt'];
  /** All transactions of this user */
  transactions: Array<BILLING__Transaction>;
  /** Current UserDailyData entity created */
  currentDailyDataEntity?: Maybe<BILLING__UserDailyData>;
  /** Previous UserDailyData entity created */
  previousDailyDataEntity?: Maybe<BILLING__UserDailyData>;
  /** [DEPRECATED] Total polygonGRT balance */
  polygonGRTBalance: Scalars['BigInt'];
};


/**
 * Curator Name Signal for a single Subgraph
 *
 */
export type BILLING__UsertransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BILLING__Transaction_orderBy>;
  orderDirection?: InputMaybe<BILLING__OrderDirection>;
  where?: InputMaybe<BILLING__Transaction_filter>;
};

export type BILLING__UserDailyData = {
  /** <SUBGRAPH ID>-<DAY NUMBER> */
  id: Scalars['ID'];
  /** Timestamp for the start of the day that this entity represents. UTC+0 */
  dayStart: Scalars['BigInt'];
  /** Timestamp for the end of the day that this entity represents. UTC+0 */
  dayEnd: Scalars['BigInt'];
  /** Number of the day this entity represents. Day 0 is the network launch day. */
  dayNumber: Scalars['Int'];
  /** Original entity that the daily data entity tracks */
  entity: BILLING__User;
  /** [CUMULATIVE] Total amount of tokens added */
  totalTokensAdded: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens pulled */
  totalTokensPulled: Scalars['BigInt'];
  /** [CUMULATIVE] Total amount of tokens removed/withdrawn */
  totalTokensRemoved: Scalars['BigInt'];
  /** [CURRENT] Amount of currently available balance */
  billingBalance: Scalars['BigInt'];
  /** [DELTA] Chage in total tokens added since the last DailyData point */
  totalTokensAddedDelta: Scalars['BigInt'];
  /** [DELTA] Chage in total tokens pulled since the last DailyData point */
  totalTokensPulledDelta: Scalars['BigInt'];
  /** [DELTA] Chage in total tokens removed/withdrawn since the last DailyData point */
  totalTokensRemovedDelta: Scalars['BigInt'];
  /** [DELTA] Chage in total currently available balance since the last DailyData point */
  billingBalanceDelta: Scalars['BigInt'];
};

export type BILLING__UserDailyData_filter = {
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
  entity?: InputMaybe<Scalars['String']>;
  entity_not?: InputMaybe<Scalars['String']>;
  entity_gt?: InputMaybe<Scalars['String']>;
  entity_lt?: InputMaybe<Scalars['String']>;
  entity_gte?: InputMaybe<Scalars['String']>;
  entity_lte?: InputMaybe<Scalars['String']>;
  entity_in?: InputMaybe<Array<Scalars['String']>>;
  entity_not_in?: InputMaybe<Array<Scalars['String']>>;
  entity_contains?: InputMaybe<Scalars['String']>;
  entity_contains_nocase?: InputMaybe<Scalars['String']>;
  entity_not_contains?: InputMaybe<Scalars['String']>;
  entity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  entity_starts_with?: InputMaybe<Scalars['String']>;
  entity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entity_not_starts_with?: InputMaybe<Scalars['String']>;
  entity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  entity_ends_with?: InputMaybe<Scalars['String']>;
  entity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  entity_not_ends_with?: InputMaybe<Scalars['String']>;
  entity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  entity_?: InputMaybe<BILLING__User_filter>;
  totalTokensAdded?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAdded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  billingBalance?: InputMaybe<Scalars['BigInt']>;
  billingBalance_not?: InputMaybe<Scalars['BigInt']>;
  billingBalance_gt?: InputMaybe<Scalars['BigInt']>;
  billingBalance_lt?: InputMaybe<Scalars['BigInt']>;
  billingBalance_gte?: InputMaybe<Scalars['BigInt']>;
  billingBalance_lte?: InputMaybe<Scalars['BigInt']>;
  billingBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  billingBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAddedDelta?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAddedDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAddedDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulledDelta?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulledDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulledDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemovedDelta?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemovedDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemovedDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  billingBalanceDelta?: InputMaybe<Scalars['BigInt']>;
  billingBalanceDelta_not?: InputMaybe<Scalars['BigInt']>;
  billingBalanceDelta_gt?: InputMaybe<Scalars['BigInt']>;
  billingBalanceDelta_lt?: InputMaybe<Scalars['BigInt']>;
  billingBalanceDelta_gte?: InputMaybe<Scalars['BigInt']>;
  billingBalanceDelta_lte?: InputMaybe<Scalars['BigInt']>;
  billingBalanceDelta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  billingBalanceDelta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BILLING__BlockChangedFilter>;
};

export type BILLING__UserDailyData_orderBy =
  | 'id'
  | 'dayStart'
  | 'dayEnd'
  | 'dayNumber'
  | 'entity'
  | 'totalTokensAdded'
  | 'totalTokensPulled'
  | 'totalTokensRemoved'
  | 'billingBalance'
  | 'totalTokensAddedDelta'
  | 'totalTokensPulledDelta'
  | 'totalTokensRemovedDelta'
  | 'billingBalanceDelta';

export type BILLING__User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  billingBalance?: InputMaybe<Scalars['BigInt']>;
  billingBalance_not?: InputMaybe<Scalars['BigInt']>;
  billingBalance_gt?: InputMaybe<Scalars['BigInt']>;
  billingBalance_lt?: InputMaybe<Scalars['BigInt']>;
  billingBalance_gte?: InputMaybe<Scalars['BigInt']>;
  billingBalance_lte?: InputMaybe<Scalars['BigInt']>;
  billingBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  billingBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAdded?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensAdded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensAdded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensPulled_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensPulled_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensRemoved_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensRemoved_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactions_?: InputMaybe<BILLING__Transaction_filter>;
  currentDailyDataEntity?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_gt?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_lt?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_gte?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_lte?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_in?: InputMaybe<Array<Scalars['String']>>;
  currentDailyDataEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentDailyDataEntity_contains?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_contains?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_starts_with?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_ends_with?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentDailyDataEntity_?: InputMaybe<BILLING__UserDailyData_filter>;
  previousDailyDataEntity?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_gt?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_lt?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_gte?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_lte?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_in?: InputMaybe<Array<Scalars['String']>>;
  previousDailyDataEntity_not_in?: InputMaybe<Array<Scalars['String']>>;
  previousDailyDataEntity_contains?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_contains_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_contains?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_starts_with?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_starts_with?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_ends_with?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_ends_with?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  previousDailyDataEntity_?: InputMaybe<BILLING__UserDailyData_filter>;
  polygonGRTBalance?: InputMaybe<Scalars['BigInt']>;
  polygonGRTBalance_not?: InputMaybe<Scalars['BigInt']>;
  polygonGRTBalance_gt?: InputMaybe<Scalars['BigInt']>;
  polygonGRTBalance_lt?: InputMaybe<Scalars['BigInt']>;
  polygonGRTBalance_gte?: InputMaybe<Scalars['BigInt']>;
  polygonGRTBalance_lte?: InputMaybe<Scalars['BigInt']>;
  polygonGRTBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  polygonGRTBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BILLING__BlockChangedFilter>;
};

export type BILLING__User_orderBy =
  | 'id'
  | 'billingBalance'
  | 'totalTokensAdded'
  | 'totalTokensPulled'
  | 'totalTokensRemoved'
  | 'transactions'
  | 'currentDailyDataEntity'
  | 'previousDailyDataEntity'
  | 'polygonGRTBalance';

export type BILLING___Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['BILLING__Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type BILLING___Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: BILLING___Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type BILLING___SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  BILLING__billing: InContextSdkMethod<Query['BILLING__billing'], QueryBILLING__billingArgs, MeshContext>,
  /** null **/
  BILLING__billings: InContextSdkMethod<Query['BILLING__billings'], QueryBILLING__billingsArgs, MeshContext>,
  /** null **/
  BILLING__user: InContextSdkMethod<Query['BILLING__user'], QueryBILLING__userArgs, MeshContext>,
  /** null **/
  BILLING__users: InContextSdkMethod<Query['BILLING__users'], QueryBILLING__usersArgs, MeshContext>,
  /** null **/
  BILLING__tokensAdded: InContextSdkMethod<Query['BILLING__tokensAdded'], QueryBILLING__tokensAddedArgs, MeshContext>,
  /** null **/
  BILLING__tokensAddeds: InContextSdkMethod<Query['BILLING__tokensAddeds'], QueryBILLING__tokensAddedsArgs, MeshContext>,
  /** null **/
  BILLING__tokensRemoved: InContextSdkMethod<Query['BILLING__tokensRemoved'], QueryBILLING__tokensRemovedArgs, MeshContext>,
  /** null **/
  BILLING__tokensRemoveds: InContextSdkMethod<Query['BILLING__tokensRemoveds'], QueryBILLING__tokensRemovedsArgs, MeshContext>,
  /** null **/
  BILLING__tokensPulled: InContextSdkMethod<Query['BILLING__tokensPulled'], QueryBILLING__tokensPulledArgs, MeshContext>,
  /** null **/
  BILLING__tokensPulleds: InContextSdkMethod<Query['BILLING__tokensPulleds'], QueryBILLING__tokensPulledsArgs, MeshContext>,
  /** null **/
  BILLING__billingDailyData: InContextSdkMethod<Query['BILLING__billingDailyData'], QueryBILLING__billingDailyDataArgs, MeshContext>,
  /** null **/
  BILLING__billingDailyDatas: InContextSdkMethod<Query['BILLING__billingDailyDatas'], QueryBILLING__billingDailyDatasArgs, MeshContext>,
  /** null **/
  BILLING__userDailyData: InContextSdkMethod<Query['BILLING__userDailyData'], QueryBILLING__userDailyDataArgs, MeshContext>,
  /** null **/
  BILLING__userDailyDatas: InContextSdkMethod<Query['BILLING__userDailyDatas'], QueryBILLING__userDailyDatasArgs, MeshContext>,
  /** null **/
  BILLING__transaction: InContextSdkMethod<Query['BILLING__transaction'], QueryBILLING__transactionArgs, MeshContext>,
  /** null **/
  BILLING__transactions: InContextSdkMethod<Query['BILLING__transactions'], QueryBILLING__transactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  BILLING___meta: InContextSdkMethod<Query['BILLING___meta'], QueryBILLING___metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  BILLING__billing: InContextSdkMethod<Subscription['BILLING__billing'], SubscriptionBILLING__billingArgs, MeshContext>,
  /** null **/
  BILLING__billings: InContextSdkMethod<Subscription['BILLING__billings'], SubscriptionBILLING__billingsArgs, MeshContext>,
  /** null **/
  BILLING__user: InContextSdkMethod<Subscription['BILLING__user'], SubscriptionBILLING__userArgs, MeshContext>,
  /** null **/
  BILLING__users: InContextSdkMethod<Subscription['BILLING__users'], SubscriptionBILLING__usersArgs, MeshContext>,
  /** null **/
  BILLING__tokensAdded: InContextSdkMethod<Subscription['BILLING__tokensAdded'], SubscriptionBILLING__tokensAddedArgs, MeshContext>,
  /** null **/
  BILLING__tokensAddeds: InContextSdkMethod<Subscription['BILLING__tokensAddeds'], SubscriptionBILLING__tokensAddedsArgs, MeshContext>,
  /** null **/
  BILLING__tokensRemoved: InContextSdkMethod<Subscription['BILLING__tokensRemoved'], SubscriptionBILLING__tokensRemovedArgs, MeshContext>,
  /** null **/
  BILLING__tokensRemoveds: InContextSdkMethod<Subscription['BILLING__tokensRemoveds'], SubscriptionBILLING__tokensRemovedsArgs, MeshContext>,
  /** null **/
  BILLING__tokensPulled: InContextSdkMethod<Subscription['BILLING__tokensPulled'], SubscriptionBILLING__tokensPulledArgs, MeshContext>,
  /** null **/
  BILLING__tokensPulleds: InContextSdkMethod<Subscription['BILLING__tokensPulleds'], SubscriptionBILLING__tokensPulledsArgs, MeshContext>,
  /** null **/
  BILLING__billingDailyData: InContextSdkMethod<Subscription['BILLING__billingDailyData'], SubscriptionBILLING__billingDailyDataArgs, MeshContext>,
  /** null **/
  BILLING__billingDailyDatas: InContextSdkMethod<Subscription['BILLING__billingDailyDatas'], SubscriptionBILLING__billingDailyDatasArgs, MeshContext>,
  /** null **/
  BILLING__userDailyData: InContextSdkMethod<Subscription['BILLING__userDailyData'], SubscriptionBILLING__userDailyDataArgs, MeshContext>,
  /** null **/
  BILLING__userDailyDatas: InContextSdkMethod<Subscription['BILLING__userDailyDatas'], SubscriptionBILLING__userDailyDatasArgs, MeshContext>,
  /** null **/
  BILLING__transaction: InContextSdkMethod<Subscription['BILLING__transaction'], SubscriptionBILLING__transactionArgs, MeshContext>,
  /** null **/
  BILLING__transactions: InContextSdkMethod<Subscription['BILLING__transactions'], SubscriptionBILLING__transactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  BILLING___meta: InContextSdkMethod<Subscription['BILLING___meta'], SubscriptionBILLING___metaArgs, MeshContext>
  };

  export type Context = {
      ["Billing"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["billing"]: Scalars['ID']
    };
}
