import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ActivityItem, Check, Competitor, CompetitorInput, CompetitorUpdate, DashboardSummary, Digest, HealthStatus, ListActivityParams, ListChecksParams, Settings, SettingsUpdate } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListCompetitorsUrl: () => string;
/**
 * @summary List all competitors
 */
export declare const listCompetitors: (options?: RequestInit) => Promise<Competitor[]>;
export declare const getListCompetitorsQueryKey: () => readonly ["/api/competitors"];
export declare const getListCompetitorsQueryOptions: <TData = Awaited<ReturnType<typeof listCompetitors>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCompetitors>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listCompetitors>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListCompetitorsQueryResult = NonNullable<Awaited<ReturnType<typeof listCompetitors>>>;
export type ListCompetitorsQueryError = ErrorType<unknown>;
/**
 * @summary List all competitors
 */
export declare function useListCompetitors<TData = Awaited<ReturnType<typeof listCompetitors>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCompetitors>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateCompetitorUrl: () => string;
/**
 * @summary Add a new competitor
 */
export declare const createCompetitor: (competitorInput: CompetitorInput, options?: RequestInit) => Promise<Competitor>;
export declare const getCreateCompetitorMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createCompetitor>>, TError, {
        data: BodyType<CompetitorInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createCompetitor>>, TError, {
    data: BodyType<CompetitorInput>;
}, TContext>;
export type CreateCompetitorMutationResult = NonNullable<Awaited<ReturnType<typeof createCompetitor>>>;
export type CreateCompetitorMutationBody = BodyType<CompetitorInput>;
export type CreateCompetitorMutationError = ErrorType<unknown>;
/**
* @summary Add a new competitor
*/
export declare const useCreateCompetitor: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createCompetitor>>, TError, {
        data: BodyType<CompetitorInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createCompetitor>>, TError, {
    data: BodyType<CompetitorInput>;
}, TContext>;
export declare const getGetCompetitorUrl: (id: number) => string;
/**
 * @summary Get a competitor by ID
 */
export declare const getCompetitor: (id: number, options?: RequestInit) => Promise<Competitor>;
export declare const getGetCompetitorQueryKey: (id: number) => readonly [`/api/competitors/${number}`];
export declare const getGetCompetitorQueryOptions: <TData = Awaited<ReturnType<typeof getCompetitor>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCompetitor>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCompetitor>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCompetitorQueryResult = NonNullable<Awaited<ReturnType<typeof getCompetitor>>>;
export type GetCompetitorQueryError = ErrorType<void>;
/**
 * @summary Get a competitor by ID
 */
export declare function useGetCompetitor<TData = Awaited<ReturnType<typeof getCompetitor>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCompetitor>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateCompetitorUrl: (id: number) => string;
/**
 * @summary Update a competitor
 */
export declare const updateCompetitor: (id: number, competitorUpdate: CompetitorUpdate, options?: RequestInit) => Promise<Competitor>;
export declare const getUpdateCompetitorMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateCompetitor>>, TError, {
        id: number;
        data: BodyType<CompetitorUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateCompetitor>>, TError, {
    id: number;
    data: BodyType<CompetitorUpdate>;
}, TContext>;
export type UpdateCompetitorMutationResult = NonNullable<Awaited<ReturnType<typeof updateCompetitor>>>;
export type UpdateCompetitorMutationBody = BodyType<CompetitorUpdate>;
export type UpdateCompetitorMutationError = ErrorType<unknown>;
/**
* @summary Update a competitor
*/
export declare const useUpdateCompetitor: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateCompetitor>>, TError, {
        id: number;
        data: BodyType<CompetitorUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateCompetitor>>, TError, {
    id: number;
    data: BodyType<CompetitorUpdate>;
}, TContext>;
export declare const getDeleteCompetitorUrl: (id: number) => string;
/**
 * @summary Delete a competitor
 */
export declare const deleteCompetitor: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteCompetitorMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteCompetitor>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteCompetitor>>, TError, {
    id: number;
}, TContext>;
export type DeleteCompetitorMutationResult = NonNullable<Awaited<ReturnType<typeof deleteCompetitor>>>;
export type DeleteCompetitorMutationError = ErrorType<unknown>;
/**
* @summary Delete a competitor
*/
export declare const useDeleteCompetitor: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteCompetitor>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteCompetitor>>, TError, {
    id: number;
}, TContext>;
export declare const getListCompetitorChecksUrl: (id: number) => string;
/**
 * @summary List check results for a competitor
 */
export declare const listCompetitorChecks: (id: number, options?: RequestInit) => Promise<Check[]>;
export declare const getListCompetitorChecksQueryKey: (id: number) => readonly [`/api/competitors/${number}/checks`];
export declare const getListCompetitorChecksQueryOptions: <TData = Awaited<ReturnType<typeof listCompetitorChecks>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCompetitorChecks>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listCompetitorChecks>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListCompetitorChecksQueryResult = NonNullable<Awaited<ReturnType<typeof listCompetitorChecks>>>;
export type ListCompetitorChecksQueryError = ErrorType<unknown>;
/**
 * @summary List check results for a competitor
 */
export declare function useListCompetitorChecks<TData = Awaited<ReturnType<typeof listCompetitorChecks>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCompetitorChecks>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getRunCheckUrl: (id: number) => string;
/**
 * @summary Manually trigger a competitor check
 */
export declare const runCheck: (id: number, options?: RequestInit) => Promise<Check>;
export declare const getRunCheckMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof runCheck>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof runCheck>>, TError, {
    id: number;
}, TContext>;
export type RunCheckMutationResult = NonNullable<Awaited<ReturnType<typeof runCheck>>>;
export type RunCheckMutationError = ErrorType<unknown>;
/**
* @summary Manually trigger a competitor check
*/
export declare const useRunCheck: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof runCheck>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof runCheck>>, TError, {
    id: number;
}, TContext>;
export declare const getListChecksUrl: (params?: ListChecksParams) => string;
/**
 * @summary List all recent checks across all competitors
 */
export declare const listChecks: (params?: ListChecksParams, options?: RequestInit) => Promise<Check[]>;
export declare const getListChecksQueryKey: (params?: ListChecksParams) => readonly ["/api/checks", ...ListChecksParams[]];
export declare const getListChecksQueryOptions: <TData = Awaited<ReturnType<typeof listChecks>>, TError = ErrorType<unknown>>(params?: ListChecksParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listChecks>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listChecks>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListChecksQueryResult = NonNullable<Awaited<ReturnType<typeof listChecks>>>;
export type ListChecksQueryError = ErrorType<unknown>;
/**
 * @summary List all recent checks across all competitors
 */
export declare function useListChecks<TData = Awaited<ReturnType<typeof listChecks>>, TError = ErrorType<unknown>>(params?: ListChecksParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listChecks>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListDigestsUrl: () => string;
/**
 * @summary List all sent digests
 */
export declare const listDigests: (options?: RequestInit) => Promise<Digest[]>;
export declare const getListDigestsQueryKey: () => readonly ["/api/digests"];
export declare const getListDigestsQueryOptions: <TData = Awaited<ReturnType<typeof listDigests>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listDigests>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listDigests>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListDigestsQueryResult = NonNullable<Awaited<ReturnType<typeof listDigests>>>;
export type ListDigestsQueryError = ErrorType<unknown>;
/**
 * @summary List all sent digests
 */
export declare function useListDigests<TData = Awaited<ReturnType<typeof listDigests>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listDigests>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSendDigestUrl: () => string;
/**
 * @summary Manually send a digest to Slack
 */
export declare const sendDigest: (options?: RequestInit) => Promise<Digest>;
export declare const getSendDigestMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendDigest>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendDigest>>, TError, void, TContext>;
export type SendDigestMutationResult = NonNullable<Awaited<ReturnType<typeof sendDigest>>>;
export type SendDigestMutationError = ErrorType<unknown>;
/**
* @summary Manually send a digest to Slack
*/
export declare const useSendDigest: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendDigest>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendDigest>>, TError, void, TContext>;
export declare const getGetDigestUrl: (id: number) => string;
/**
 * @summary Get a specific digest
 */
export declare const getDigest: (id: number, options?: RequestInit) => Promise<Digest>;
export declare const getGetDigestQueryKey: (id: number) => readonly [`/api/digests/${number}`];
export declare const getGetDigestQueryOptions: <TData = Awaited<ReturnType<typeof getDigest>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDigest>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDigest>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDigestQueryResult = NonNullable<Awaited<ReturnType<typeof getDigest>>>;
export type GetDigestQueryError = ErrorType<unknown>;
/**
 * @summary Get a specific digest
 */
export declare function useGetDigest<TData = Awaited<ReturnType<typeof getDigest>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDigest>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetSettingsUrl: () => string;
/**
 * @summary Get app settings
 */
export declare const getSettings: (options?: RequestInit) => Promise<Settings>;
export declare const getGetSettingsQueryKey: () => readonly ["/api/settings"];
export declare const getGetSettingsQueryOptions: <TData = Awaited<ReturnType<typeof getSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSettings>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSettingsQueryResult = NonNullable<Awaited<ReturnType<typeof getSettings>>>;
export type GetSettingsQueryError = ErrorType<unknown>;
/**
 * @summary Get app settings
 */
export declare function useGetSettings<TData = Awaited<ReturnType<typeof getSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateSettingsUrl: () => string;
/**
 * @summary Update app settings
 */
export declare const updateSettings: (settingsUpdate: SettingsUpdate, options?: RequestInit) => Promise<Settings>;
export declare const getUpdateSettingsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSettings>>, TError, {
        data: BodyType<SettingsUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateSettings>>, TError, {
    data: BodyType<SettingsUpdate>;
}, TContext>;
export type UpdateSettingsMutationResult = NonNullable<Awaited<ReturnType<typeof updateSettings>>>;
export type UpdateSettingsMutationBody = BodyType<SettingsUpdate>;
export type UpdateSettingsMutationError = ErrorType<unknown>;
/**
* @summary Update app settings
*/
export declare const useUpdateSettings: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSettings>>, TError, {
        data: BodyType<SettingsUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateSettings>>, TError, {
    data: BodyType<SettingsUpdate>;
}, TContext>;
export declare const getGetDashboardSummaryUrl: () => string;
/**
 * @summary Get dashboard summary stats
 */
export declare const getDashboardSummary: (options?: RequestInit) => Promise<DashboardSummary>;
export declare const getGetDashboardSummaryQueryKey: () => readonly ["/api/dashboard/summary"];
export declare const getGetDashboardSummaryQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardSummary>>>;
export type GetDashboardSummaryQueryError = ErrorType<unknown>;
/**
 * @summary Get dashboard summary stats
 */
export declare function useGetDashboardSummary<TData = Awaited<ReturnType<typeof getDashboardSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListActivityUrl: (params?: ListActivityParams) => string;
/**
 * @summary Get recent activity feed across all competitors
 */
export declare const listActivity: (params?: ListActivityParams, options?: RequestInit) => Promise<ActivityItem[]>;
export declare const getListActivityQueryKey: (params?: ListActivityParams) => readonly ["/api/activity", ...ListActivityParams[]];
export declare const getListActivityQueryOptions: <TData = Awaited<ReturnType<typeof listActivity>>, TError = ErrorType<unknown>>(params?: ListActivityParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listActivity>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listActivity>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListActivityQueryResult = NonNullable<Awaited<ReturnType<typeof listActivity>>>;
export type ListActivityQueryError = ErrorType<unknown>;
/**
 * @summary Get recent activity feed across all competitors
 */
export declare function useListActivity<TData = Awaited<ReturnType<typeof listActivity>>, TError = ErrorType<unknown>>(params?: ListActivityParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listActivity>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map