
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model AccountBalances
 */

export type AccountBalances = {
  id: number
  label: string
  owner_address: string
  mint: string
  balance: Prisma.Decimal
  time_created: Date
}

/**
 * Model Owners
 */

export type Owners = {
  owner: string
  label: string | null
  time_created: Date
}

/**
 * Model TokenMints
 */

export type TokenMints = {
  mint_address: string
  mint_name: string
  time_created: Date
}

/**
 * Model DatabaseKeys
 */

export type DatabaseKeys = {
  id: string
  description: string
  stringKey: string | null
  intKey: number | null
  boolKey: boolean | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AccountBalances
 * const accountBalances = await prisma.accountBalances.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AccountBalances
   * const accountBalances = await prisma.accountBalances.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.$executeRaw``, values will be escaped automatically
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.$executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.$queryRaw``, values will be escaped automatically
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.$queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.accountBalances`: Exposes CRUD operations for the **AccountBalances** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountBalances
    * const accountBalances = await prisma.accountBalances.findMany()
    * ```
    */
  get accountBalances(): Prisma.AccountBalancesDelegate<GlobalReject>;

  /**
   * `prisma.owners`: Exposes CRUD operations for the **Owners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owners.findMany()
    * ```
    */
  get owners(): Prisma.OwnersDelegate<GlobalReject>;

  /**
   * `prisma.tokenMints`: Exposes CRUD operations for the **TokenMints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenMints
    * const tokenMints = await prisma.tokenMints.findMany()
    * ```
    */
  get tokenMints(): Prisma.TokenMintsDelegate<GlobalReject>;

  /**
   * `prisma.databaseKeys`: Exposes CRUD operations for the **DatabaseKeys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatabaseKeys
    * const databaseKeys = await prisma.databaseKeys.findMany()
    * ```
    */
  get databaseKeys(): Prisma.DatabaseKeysDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 2.30.3
   * Query Engine version: da41d2bb3406da22087b849f0e911199ba4fbf11
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    AccountBalances: 'AccountBalances',
    Owners: 'Owners',
    TokenMints: 'TokenMints',
    DatabaseKeys: 'DatabaseKeys'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TokenMintsCountOutputType
   */


  export type TokenMintsCountOutputType = {
    AccountBalances: number
  }

  export type TokenMintsCountOutputTypeSelect = {
    AccountBalances?: boolean
  }

  export type TokenMintsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TokenMintsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TokenMintsCountOutputType
    : S extends undefined
    ? never
    : S extends TokenMintsCountOutputTypeArgs
    ?'include' extends U
    ? TokenMintsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof TokenMintsCountOutputType ?TokenMintsCountOutputType [P]
  : 
     never
  } 
    : TokenMintsCountOutputType
  : TokenMintsCountOutputType




  // Custom InputTypes

  /**
   * TokenMintsCountOutputType without action
   */
  export type TokenMintsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TokenMintsCountOutputType
     * 
    **/
    select?: TokenMintsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model AccountBalances
   */


  export type AggregateAccountBalances = {
    _count: AccountBalancesCountAggregateOutputType | null
    _avg: AccountBalancesAvgAggregateOutputType | null
    _sum: AccountBalancesSumAggregateOutputType | null
    _min: AccountBalancesMinAggregateOutputType | null
    _max: AccountBalancesMaxAggregateOutputType | null
  }

  export type AccountBalancesAvgAggregateOutputType = {
    id: number | null
    balance: Decimal | null
  }

  export type AccountBalancesSumAggregateOutputType = {
    id: number | null
    balance: Decimal | null
  }

  export type AccountBalancesMinAggregateOutputType = {
    id: number | null
    label: string | null
    owner_address: string | null
    mint: string | null
    balance: Decimal | null
    time_created: Date | null
  }

  export type AccountBalancesMaxAggregateOutputType = {
    id: number | null
    label: string | null
    owner_address: string | null
    mint: string | null
    balance: Decimal | null
    time_created: Date | null
  }

  export type AccountBalancesCountAggregateOutputType = {
    id: number
    label: number
    owner_address: number
    mint: number
    balance: number
    time_created: number
    _all: number
  }


  export type AccountBalancesAvgAggregateInputType = {
    id?: true
    balance?: true
  }

  export type AccountBalancesSumAggregateInputType = {
    id?: true
    balance?: true
  }

  export type AccountBalancesMinAggregateInputType = {
    id?: true
    label?: true
    owner_address?: true
    mint?: true
    balance?: true
    time_created?: true
  }

  export type AccountBalancesMaxAggregateInputType = {
    id?: true
    label?: true
    owner_address?: true
    mint?: true
    balance?: true
    time_created?: true
  }

  export type AccountBalancesCountAggregateInputType = {
    id?: true
    label?: true
    owner_address?: true
    mint?: true
    balance?: true
    time_created?: true
    _all?: true
  }

  export type AccountBalancesAggregateArgs = {
    /**
     * Filter which AccountBalances to aggregate.
     * 
    **/
    where?: AccountBalancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBalances to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountBalancesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AccountBalancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBalances from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBalances.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountBalances
    **/
    _count?: true | AccountBalancesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountBalancesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountBalancesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountBalancesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountBalancesMaxAggregateInputType
  }

  export type GetAccountBalancesAggregateType<T extends AccountBalancesAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountBalances]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountBalances[P]>
      : GetScalarType<T[P], AggregateAccountBalances[P]>
  }


    
    
  export type AccountBalancesGroupByArgs = {
    where?: AccountBalancesWhereInput
    orderBy?: Enumerable<AccountBalancesOrderByWithAggregationInput>
    by: Array<AccountBalancesScalarFieldEnum>
    having?: AccountBalancesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountBalancesCountAggregateInputType | true
    _avg?: AccountBalancesAvgAggregateInputType
    _sum?: AccountBalancesSumAggregateInputType
    _min?: AccountBalancesMinAggregateInputType
    _max?: AccountBalancesMaxAggregateInputType
  }


  export type AccountBalancesGroupByOutputType = {
    id: number
    label: string
    owner_address: string
    mint: string
    balance: Decimal
    time_created: Date
    _count: AccountBalancesCountAggregateOutputType | null
    _avg: AccountBalancesAvgAggregateOutputType | null
    _sum: AccountBalancesSumAggregateOutputType | null
    _min: AccountBalancesMinAggregateOutputType | null
    _max: AccountBalancesMaxAggregateOutputType | null
  }

  type GetAccountBalancesGroupByPayload<T extends AccountBalancesGroupByArgs> = Promise<
    Array<
      PickArray<AccountBalancesGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof AccountBalancesGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], AccountBalancesGroupByOutputType[P]> 
            : GetScalarType<T[P], AccountBalancesGroupByOutputType[P]>
        }
      > 
    >


  export type AccountBalancesSelect = {
    id?: boolean
    label?: boolean
    owner_address?: boolean
    mint?: boolean
    balance?: boolean
    time_created?: boolean
    Mint?: boolean | TokenMintsArgs
  }

  export type AccountBalancesInclude = {
    Mint?: boolean | TokenMintsArgs
  }

  export type AccountBalancesGetPayload<
    S extends boolean | null | undefined | AccountBalancesArgs,
    U = keyof S
      > = S extends true
        ? AccountBalances
    : S extends undefined
    ? never
    : S extends AccountBalancesArgs | AccountBalancesFindManyArgs
    ?'include' extends U
    ? AccountBalances  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Mint'
        ? TokenMintsGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof AccountBalances ?AccountBalances [P]
  : 
          P extends 'Mint'
        ? TokenMintsGetPayload<S['select'][P]> | null : never
  } 
    : AccountBalances
  : AccountBalances


  type AccountBalancesCountArgs = Merge<
    Omit<AccountBalancesFindManyArgs, 'select' | 'include'> & {
      select?: AccountBalancesCountAggregateInputType | true
    }
  >

  export interface AccountBalancesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one AccountBalances that matches the filter.
     * @param {AccountBalancesFindUniqueArgs} args - Arguments to find a AccountBalances
     * @example
     * // Get one AccountBalances
     * const accountBalances = await prisma.accountBalances.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountBalancesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountBalancesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AccountBalances'> extends True ? CheckSelect<T, Prisma__AccountBalancesClient<AccountBalances>, Prisma__AccountBalancesClient<AccountBalancesGetPayload<T>>> : CheckSelect<T, Prisma__AccountBalancesClient<AccountBalances | null >, Prisma__AccountBalancesClient<AccountBalancesGetPayload<T> | null >>

    /**
     * Find the first AccountBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBalancesFindFirstArgs} args - Arguments to find a AccountBalances
     * @example
     * // Get one AccountBalances
     * const accountBalances = await prisma.accountBalances.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountBalancesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountBalancesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AccountBalances'> extends True ? CheckSelect<T, Prisma__AccountBalancesClient<AccountBalances>, Prisma__AccountBalancesClient<AccountBalancesGetPayload<T>>> : CheckSelect<T, Prisma__AccountBalancesClient<AccountBalances | null >, Prisma__AccountBalancesClient<AccountBalancesGetPayload<T> | null >>

    /**
     * Find zero or more AccountBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBalancesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountBalances
     * const accountBalances = await prisma.accountBalances.findMany()
     * 
     * // Get first 10 AccountBalances
     * const accountBalances = await prisma.accountBalances.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountBalancesWithIdOnly = await prisma.accountBalances.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountBalancesFindManyArgs>(
      args?: SelectSubset<T, AccountBalancesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<AccountBalances>>, PrismaPromise<Array<AccountBalancesGetPayload<T>>>>

    /**
     * Create a AccountBalances.
     * @param {AccountBalancesCreateArgs} args - Arguments to create a AccountBalances.
     * @example
     * // Create one AccountBalances
     * const AccountBalances = await prisma.accountBalances.create({
     *   data: {
     *     // ... data to create a AccountBalances
     *   }
     * })
     * 
    **/
    create<T extends AccountBalancesCreateArgs>(
      args: SelectSubset<T, AccountBalancesCreateArgs>
    ): CheckSelect<T, Prisma__AccountBalancesClient<AccountBalances>, Prisma__AccountBalancesClient<AccountBalancesGetPayload<T>>>

    /**
     * Create many AccountBalances.
     *     @param {AccountBalancesCreateManyArgs} args - Arguments to create many AccountBalances.
     *     @example
     *     // Create many AccountBalances
     *     const accountBalances = await prisma.accountBalances.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountBalancesCreateManyArgs>(
      args?: SelectSubset<T, AccountBalancesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a AccountBalances.
     * @param {AccountBalancesDeleteArgs} args - Arguments to delete one AccountBalances.
     * @example
     * // Delete one AccountBalances
     * const AccountBalances = await prisma.accountBalances.delete({
     *   where: {
     *     // ... filter to delete one AccountBalances
     *   }
     * })
     * 
    **/
    delete<T extends AccountBalancesDeleteArgs>(
      args: SelectSubset<T, AccountBalancesDeleteArgs>
    ): CheckSelect<T, Prisma__AccountBalancesClient<AccountBalances>, Prisma__AccountBalancesClient<AccountBalancesGetPayload<T>>>

    /**
     * Update one AccountBalances.
     * @param {AccountBalancesUpdateArgs} args - Arguments to update one AccountBalances.
     * @example
     * // Update one AccountBalances
     * const accountBalances = await prisma.accountBalances.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountBalancesUpdateArgs>(
      args: SelectSubset<T, AccountBalancesUpdateArgs>
    ): CheckSelect<T, Prisma__AccountBalancesClient<AccountBalances>, Prisma__AccountBalancesClient<AccountBalancesGetPayload<T>>>

    /**
     * Delete zero or more AccountBalances.
     * @param {AccountBalancesDeleteManyArgs} args - Arguments to filter AccountBalances to delete.
     * @example
     * // Delete a few AccountBalances
     * const { count } = await prisma.accountBalances.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountBalancesDeleteManyArgs>(
      args?: SelectSubset<T, AccountBalancesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBalancesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountBalances
     * const accountBalances = await prisma.accountBalances.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountBalancesUpdateManyArgs>(
      args: SelectSubset<T, AccountBalancesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one AccountBalances.
     * @param {AccountBalancesUpsertArgs} args - Arguments to update or create a AccountBalances.
     * @example
     * // Update or create a AccountBalances
     * const accountBalances = await prisma.accountBalances.upsert({
     *   create: {
     *     // ... data to create a AccountBalances
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountBalances we want to update
     *   }
     * })
    **/
    upsert<T extends AccountBalancesUpsertArgs>(
      args: SelectSubset<T, AccountBalancesUpsertArgs>
    ): CheckSelect<T, Prisma__AccountBalancesClient<AccountBalances>, Prisma__AccountBalancesClient<AccountBalancesGetPayload<T>>>

    /**
     * Count the number of AccountBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBalancesCountArgs} args - Arguments to filter AccountBalances to count.
     * @example
     * // Count the number of AccountBalances
     * const count = await prisma.accountBalances.count({
     *   where: {
     *     // ... the filter for the AccountBalances we want to count
     *   }
     * })
    **/
    count<T extends AccountBalancesCountArgs>(
      args?: Subset<T, AccountBalancesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountBalancesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBalancesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountBalancesAggregateArgs>(args: Subset<T, AccountBalancesAggregateArgs>): PrismaPromise<GetAccountBalancesAggregateType<T>>

    /**
     * Group by AccountBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBalancesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountBalancesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountBalancesGroupByArgs['orderBy'] }
        : { orderBy?: AccountBalancesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountBalancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountBalancesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountBalances.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountBalancesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Mint<T extends TokenMintsArgs = {}>(args?: Subset<T, TokenMintsArgs>): CheckSelect<T, Prisma__TokenMintsClient<TokenMints | null >, Prisma__TokenMintsClient<TokenMintsGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * AccountBalances findUnique
   */
  export type AccountBalancesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the AccountBalances
     * 
    **/
    select?: AccountBalancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountBalancesInclude | null
    /**
     * Throw an Error if a AccountBalances can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AccountBalances to fetch.
     * 
    **/
    where: AccountBalancesWhereUniqueInput
  }


  /**
   * AccountBalances findFirst
   */
  export type AccountBalancesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the AccountBalances
     * 
    **/
    select?: AccountBalancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountBalancesInclude | null
    /**
     * Throw an Error if a AccountBalances can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AccountBalances to fetch.
     * 
    **/
    where?: AccountBalancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBalances to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountBalancesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountBalances.
     * 
    **/
    cursor?: AccountBalancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBalances from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBalances.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountBalances.
     * 
    **/
    distinct?: Enumerable<AccountBalancesScalarFieldEnum>
  }


  /**
   * AccountBalances findMany
   */
  export type AccountBalancesFindManyArgs = {
    /**
     * Select specific fields to fetch from the AccountBalances
     * 
    **/
    select?: AccountBalancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountBalancesInclude | null
    /**
     * Filter, which AccountBalances to fetch.
     * 
    **/
    where?: AccountBalancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBalances to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountBalancesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountBalances.
     * 
    **/
    cursor?: AccountBalancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBalances from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBalances.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AccountBalancesScalarFieldEnum>
  }


  /**
   * AccountBalances create
   */
  export type AccountBalancesCreateArgs = {
    /**
     * Select specific fields to fetch from the AccountBalances
     * 
    **/
    select?: AccountBalancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountBalancesInclude | null
    /**
     * The data needed to create a AccountBalances.
     * 
    **/
    data: XOR<AccountBalancesCreateInput, AccountBalancesUncheckedCreateInput>
  }


  /**
   * AccountBalances createMany
   */
  export type AccountBalancesCreateManyArgs = {
    data: Enumerable<AccountBalancesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AccountBalances update
   */
  export type AccountBalancesUpdateArgs = {
    /**
     * Select specific fields to fetch from the AccountBalances
     * 
    **/
    select?: AccountBalancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountBalancesInclude | null
    /**
     * The data needed to update a AccountBalances.
     * 
    **/
    data: XOR<AccountBalancesUpdateInput, AccountBalancesUncheckedUpdateInput>
    /**
     * Choose, which AccountBalances to update.
     * 
    **/
    where: AccountBalancesWhereUniqueInput
  }


  /**
   * AccountBalances updateMany
   */
  export type AccountBalancesUpdateManyArgs = {
    data: XOR<AccountBalancesUpdateManyMutationInput, AccountBalancesUncheckedUpdateManyInput>
    where?: AccountBalancesWhereInput
  }


  /**
   * AccountBalances upsert
   */
  export type AccountBalancesUpsertArgs = {
    /**
     * Select specific fields to fetch from the AccountBalances
     * 
    **/
    select?: AccountBalancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountBalancesInclude | null
    /**
     * The filter to search for the AccountBalances to update in case it exists.
     * 
    **/
    where: AccountBalancesWhereUniqueInput
    /**
     * In case the AccountBalances found by the `where` argument doesn't exist, create a new AccountBalances with this data.
     * 
    **/
    create: XOR<AccountBalancesCreateInput, AccountBalancesUncheckedCreateInput>
    /**
     * In case the AccountBalances was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AccountBalancesUpdateInput, AccountBalancesUncheckedUpdateInput>
  }


  /**
   * AccountBalances delete
   */
  export type AccountBalancesDeleteArgs = {
    /**
     * Select specific fields to fetch from the AccountBalances
     * 
    **/
    select?: AccountBalancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountBalancesInclude | null
    /**
     * Filter which AccountBalances to delete.
     * 
    **/
    where: AccountBalancesWhereUniqueInput
  }


  /**
   * AccountBalances deleteMany
   */
  export type AccountBalancesDeleteManyArgs = {
    where?: AccountBalancesWhereInput
  }


  /**
   * AccountBalances without action
   */
  export type AccountBalancesArgs = {
    /**
     * Select specific fields to fetch from the AccountBalances
     * 
    **/
    select?: AccountBalancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountBalancesInclude | null
  }



  /**
   * Model Owners
   */


  export type AggregateOwners = {
    _count: OwnersCountAggregateOutputType | null
    _min: OwnersMinAggregateOutputType | null
    _max: OwnersMaxAggregateOutputType | null
  }

  export type OwnersMinAggregateOutputType = {
    owner: string | null
    label: string | null
    time_created: Date | null
  }

  export type OwnersMaxAggregateOutputType = {
    owner: string | null
    label: string | null
    time_created: Date | null
  }

  export type OwnersCountAggregateOutputType = {
    owner: number
    label: number
    time_created: number
    _all: number
  }


  export type OwnersMinAggregateInputType = {
    owner?: true
    label?: true
    time_created?: true
  }

  export type OwnersMaxAggregateInputType = {
    owner?: true
    label?: true
    time_created?: true
  }

  export type OwnersCountAggregateInputType = {
    owner?: true
    label?: true
    time_created?: true
    _all?: true
  }

  export type OwnersAggregateArgs = {
    /**
     * Filter which Owners to aggregate.
     * 
    **/
    where?: OwnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     * 
    **/
    orderBy?: Enumerable<OwnersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OwnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    _count?: true | OwnersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnersMaxAggregateInputType
  }

  export type GetOwnersAggregateType<T extends OwnersAggregateArgs> = {
        [P in keyof T & keyof AggregateOwners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwners[P]>
      : GetScalarType<T[P], AggregateOwners[P]>
  }


    
    
  export type OwnersGroupByArgs = {
    where?: OwnersWhereInput
    orderBy?: Enumerable<OwnersOrderByWithAggregationInput>
    by: Array<OwnersScalarFieldEnum>
    having?: OwnersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnersCountAggregateInputType | true
    _min?: OwnersMinAggregateInputType
    _max?: OwnersMaxAggregateInputType
  }


  export type OwnersGroupByOutputType = {
    owner: string
    label: string | null
    time_created: Date
    _count: OwnersCountAggregateOutputType | null
    _min: OwnersMinAggregateOutputType | null
    _max: OwnersMaxAggregateOutputType | null
  }

  type GetOwnersGroupByPayload<T extends OwnersGroupByArgs> = Promise<
    Array<
      PickArray<OwnersGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof OwnersGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], OwnersGroupByOutputType[P]> 
            : GetScalarType<T[P], OwnersGroupByOutputType[P]>
        }
      > 
    >


  export type OwnersSelect = {
    owner?: boolean
    label?: boolean
    time_created?: boolean
  }

  export type OwnersGetPayload<
    S extends boolean | null | undefined | OwnersArgs,
    U = keyof S
      > = S extends true
        ? Owners
    : S extends undefined
    ? never
    : S extends OwnersArgs | OwnersFindManyArgs
    ?'include' extends U
    ? Owners 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Owners ?Owners [P]
  : 
     never
  } 
    : Owners
  : Owners


  type OwnersCountArgs = Merge<
    Omit<OwnersFindManyArgs, 'select' | 'include'> & {
      select?: OwnersCountAggregateInputType | true
    }
  >

  export interface OwnersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Owners that matches the filter.
     * @param {OwnersFindUniqueArgs} args - Arguments to find a Owners
     * @example
     * // Get one Owners
     * const owners = await prisma.owners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OwnersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OwnersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Owners'> extends True ? CheckSelect<T, Prisma__OwnersClient<Owners>, Prisma__OwnersClient<OwnersGetPayload<T>>> : CheckSelect<T, Prisma__OwnersClient<Owners | null >, Prisma__OwnersClient<OwnersGetPayload<T> | null >>

    /**
     * Find the first Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnersFindFirstArgs} args - Arguments to find a Owners
     * @example
     * // Get one Owners
     * const owners = await prisma.owners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OwnersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OwnersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Owners'> extends True ? CheckSelect<T, Prisma__OwnersClient<Owners>, Prisma__OwnersClient<OwnersGetPayload<T>>> : CheckSelect<T, Prisma__OwnersClient<Owners | null >, Prisma__OwnersClient<OwnersGetPayload<T> | null >>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owners.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owners.findMany({ take: 10 })
     * 
     * // Only select the `owner`
     * const ownersWithOwnerOnly = await prisma.owners.findMany({ select: { owner: true } })
     * 
    **/
    findMany<T extends OwnersFindManyArgs>(
      args?: SelectSubset<T, OwnersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Owners>>, PrismaPromise<Array<OwnersGetPayload<T>>>>

    /**
     * Create a Owners.
     * @param {OwnersCreateArgs} args - Arguments to create a Owners.
     * @example
     * // Create one Owners
     * const Owners = await prisma.owners.create({
     *   data: {
     *     // ... data to create a Owners
     *   }
     * })
     * 
    **/
    create<T extends OwnersCreateArgs>(
      args: SelectSubset<T, OwnersCreateArgs>
    ): CheckSelect<T, Prisma__OwnersClient<Owners>, Prisma__OwnersClient<OwnersGetPayload<T>>>

    /**
     * Create many Owners.
     *     @param {OwnersCreateManyArgs} args - Arguments to create many Owners.
     *     @example
     *     // Create many Owners
     *     const owners = await prisma.owners.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OwnersCreateManyArgs>(
      args?: SelectSubset<T, OwnersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Owners.
     * @param {OwnersDeleteArgs} args - Arguments to delete one Owners.
     * @example
     * // Delete one Owners
     * const Owners = await prisma.owners.delete({
     *   where: {
     *     // ... filter to delete one Owners
     *   }
     * })
     * 
    **/
    delete<T extends OwnersDeleteArgs>(
      args: SelectSubset<T, OwnersDeleteArgs>
    ): CheckSelect<T, Prisma__OwnersClient<Owners>, Prisma__OwnersClient<OwnersGetPayload<T>>>

    /**
     * Update one Owners.
     * @param {OwnersUpdateArgs} args - Arguments to update one Owners.
     * @example
     * // Update one Owners
     * const owners = await prisma.owners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OwnersUpdateArgs>(
      args: SelectSubset<T, OwnersUpdateArgs>
    ): CheckSelect<T, Prisma__OwnersClient<Owners>, Prisma__OwnersClient<OwnersGetPayload<T>>>

    /**
     * Delete zero or more Owners.
     * @param {OwnersDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OwnersDeleteManyArgs>(
      args?: SelectSubset<T, OwnersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owners = await prisma.owners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OwnersUpdateManyArgs>(
      args: SelectSubset<T, OwnersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Owners.
     * @param {OwnersUpsertArgs} args - Arguments to update or create a Owners.
     * @example
     * // Update or create a Owners
     * const owners = await prisma.owners.upsert({
     *   create: {
     *     // ... data to create a Owners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owners we want to update
     *   }
     * })
    **/
    upsert<T extends OwnersUpsertArgs>(
      args: SelectSubset<T, OwnersUpsertArgs>
    ): CheckSelect<T, Prisma__OwnersClient<Owners>, Prisma__OwnersClient<OwnersGetPayload<T>>>

    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnersCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owners.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnersCountArgs>(
      args?: Subset<T, OwnersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OwnersAggregateArgs>(args: Subset<T, OwnersAggregateArgs>): PrismaPromise<GetOwnersAggregateType<T>>

    /**
     * Group by Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OwnersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnersGroupByArgs['orderBy'] }
        : { orderBy?: OwnersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OwnersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OwnersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Owners findUnique
   */
  export type OwnersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Owners
     * 
    **/
    select?: OwnersSelect | null
    /**
     * Throw an Error if a Owners can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Owners to fetch.
     * 
    **/
    where: OwnersWhereUniqueInput
  }


  /**
   * Owners findFirst
   */
  export type OwnersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Owners
     * 
    **/
    select?: OwnersSelect | null
    /**
     * Throw an Error if a Owners can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Owners to fetch.
     * 
    **/
    where?: OwnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     * 
    **/
    orderBy?: Enumerable<OwnersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     * 
    **/
    cursor?: OwnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     * 
    **/
    distinct?: Enumerable<OwnersScalarFieldEnum>
  }


  /**
   * Owners findMany
   */
  export type OwnersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Owners
     * 
    **/
    select?: OwnersSelect | null
    /**
     * Filter, which Owners to fetch.
     * 
    **/
    where?: OwnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     * 
    **/
    orderBy?: Enumerable<OwnersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
     * 
    **/
    cursor?: OwnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OwnersScalarFieldEnum>
  }


  /**
   * Owners create
   */
  export type OwnersCreateArgs = {
    /**
     * Select specific fields to fetch from the Owners
     * 
    **/
    select?: OwnersSelect | null
    /**
     * The data needed to create a Owners.
     * 
    **/
    data: XOR<OwnersCreateInput, OwnersUncheckedCreateInput>
  }


  /**
   * Owners createMany
   */
  export type OwnersCreateManyArgs = {
    data: Enumerable<OwnersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Owners update
   */
  export type OwnersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Owners
     * 
    **/
    select?: OwnersSelect | null
    /**
     * The data needed to update a Owners.
     * 
    **/
    data: XOR<OwnersUpdateInput, OwnersUncheckedUpdateInput>
    /**
     * Choose, which Owners to update.
     * 
    **/
    where: OwnersWhereUniqueInput
  }


  /**
   * Owners updateMany
   */
  export type OwnersUpdateManyArgs = {
    data: XOR<OwnersUpdateManyMutationInput, OwnersUncheckedUpdateManyInput>
    where?: OwnersWhereInput
  }


  /**
   * Owners upsert
   */
  export type OwnersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Owners
     * 
    **/
    select?: OwnersSelect | null
    /**
     * The filter to search for the Owners to update in case it exists.
     * 
    **/
    where: OwnersWhereUniqueInput
    /**
     * In case the Owners found by the `where` argument doesn't exist, create a new Owners with this data.
     * 
    **/
    create: XOR<OwnersCreateInput, OwnersUncheckedCreateInput>
    /**
     * In case the Owners was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OwnersUpdateInput, OwnersUncheckedUpdateInput>
  }


  /**
   * Owners delete
   */
  export type OwnersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Owners
     * 
    **/
    select?: OwnersSelect | null
    /**
     * Filter which Owners to delete.
     * 
    **/
    where: OwnersWhereUniqueInput
  }


  /**
   * Owners deleteMany
   */
  export type OwnersDeleteManyArgs = {
    where?: OwnersWhereInput
  }


  /**
   * Owners without action
   */
  export type OwnersArgs = {
    /**
     * Select specific fields to fetch from the Owners
     * 
    **/
    select?: OwnersSelect | null
  }



  /**
   * Model TokenMints
   */


  export type AggregateTokenMints = {
    _count: TokenMintsCountAggregateOutputType | null
    _min: TokenMintsMinAggregateOutputType | null
    _max: TokenMintsMaxAggregateOutputType | null
  }

  export type TokenMintsMinAggregateOutputType = {
    mint_address: string | null
    mint_name: string | null
    time_created: Date | null
  }

  export type TokenMintsMaxAggregateOutputType = {
    mint_address: string | null
    mint_name: string | null
    time_created: Date | null
  }

  export type TokenMintsCountAggregateOutputType = {
    mint_address: number
    mint_name: number
    time_created: number
    _all: number
  }


  export type TokenMintsMinAggregateInputType = {
    mint_address?: true
    mint_name?: true
    time_created?: true
  }

  export type TokenMintsMaxAggregateInputType = {
    mint_address?: true
    mint_name?: true
    time_created?: true
  }

  export type TokenMintsCountAggregateInputType = {
    mint_address?: true
    mint_name?: true
    time_created?: true
    _all?: true
  }

  export type TokenMintsAggregateArgs = {
    /**
     * Filter which TokenMints to aggregate.
     * 
    **/
    where?: TokenMintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenMints to fetch.
     * 
    **/
    orderBy?: Enumerable<TokenMintsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TokenMintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenMints from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenMints.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenMints
    **/
    _count?: true | TokenMintsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMintsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMintsMaxAggregateInputType
  }

  export type GetTokenMintsAggregateType<T extends TokenMintsAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenMints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenMints[P]>
      : GetScalarType<T[P], AggregateTokenMints[P]>
  }


    
    
  export type TokenMintsGroupByArgs = {
    where?: TokenMintsWhereInput
    orderBy?: Enumerable<TokenMintsOrderByWithAggregationInput>
    by: Array<TokenMintsScalarFieldEnum>
    having?: TokenMintsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenMintsCountAggregateInputType | true
    _min?: TokenMintsMinAggregateInputType
    _max?: TokenMintsMaxAggregateInputType
  }


  export type TokenMintsGroupByOutputType = {
    mint_address: string
    mint_name: string
    time_created: Date
    _count: TokenMintsCountAggregateOutputType | null
    _min: TokenMintsMinAggregateOutputType | null
    _max: TokenMintsMaxAggregateOutputType | null
  }

  type GetTokenMintsGroupByPayload<T extends TokenMintsGroupByArgs> = Promise<
    Array<
      PickArray<TokenMintsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof TokenMintsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], TokenMintsGroupByOutputType[P]> 
            : GetScalarType<T[P], TokenMintsGroupByOutputType[P]>
        }
      > 
    >


  export type TokenMintsSelect = {
    mint_address?: boolean
    mint_name?: boolean
    time_created?: boolean
    AccountBalances?: boolean | AccountBalancesFindManyArgs
    _count?: boolean | TokenMintsCountOutputTypeArgs
  }

  export type TokenMintsInclude = {
    AccountBalances?: boolean | AccountBalancesFindManyArgs
    _count?: boolean | TokenMintsCountOutputTypeArgs
  }

  export type TokenMintsGetPayload<
    S extends boolean | null | undefined | TokenMintsArgs,
    U = keyof S
      > = S extends true
        ? TokenMints
    : S extends undefined
    ? never
    : S extends TokenMintsArgs | TokenMintsFindManyArgs
    ?'include' extends U
    ? TokenMints  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'AccountBalances'
        ? Array < AccountBalancesGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? TokenMintsCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof TokenMints ?TokenMints [P]
  : 
          P extends 'AccountBalances'
        ? Array < AccountBalancesGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? TokenMintsCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : TokenMints
  : TokenMints


  type TokenMintsCountArgs = Merge<
    Omit<TokenMintsFindManyArgs, 'select' | 'include'> & {
      select?: TokenMintsCountAggregateInputType | true
    }
  >

  export interface TokenMintsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one TokenMints that matches the filter.
     * @param {TokenMintsFindUniqueArgs} args - Arguments to find a TokenMints
     * @example
     * // Get one TokenMints
     * const tokenMints = await prisma.tokenMints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TokenMintsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TokenMintsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TokenMints'> extends True ? CheckSelect<T, Prisma__TokenMintsClient<TokenMints>, Prisma__TokenMintsClient<TokenMintsGetPayload<T>>> : CheckSelect<T, Prisma__TokenMintsClient<TokenMints | null >, Prisma__TokenMintsClient<TokenMintsGetPayload<T> | null >>

    /**
     * Find the first TokenMints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenMintsFindFirstArgs} args - Arguments to find a TokenMints
     * @example
     * // Get one TokenMints
     * const tokenMints = await prisma.tokenMints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TokenMintsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TokenMintsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TokenMints'> extends True ? CheckSelect<T, Prisma__TokenMintsClient<TokenMints>, Prisma__TokenMintsClient<TokenMintsGetPayload<T>>> : CheckSelect<T, Prisma__TokenMintsClient<TokenMints | null >, Prisma__TokenMintsClient<TokenMintsGetPayload<T> | null >>

    /**
     * Find zero or more TokenMints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenMintsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenMints
     * const tokenMints = await prisma.tokenMints.findMany()
     * 
     * // Get first 10 TokenMints
     * const tokenMints = await prisma.tokenMints.findMany({ take: 10 })
     * 
     * // Only select the `mint_address`
     * const tokenMintsWithMint_addressOnly = await prisma.tokenMints.findMany({ select: { mint_address: true } })
     * 
    **/
    findMany<T extends TokenMintsFindManyArgs>(
      args?: SelectSubset<T, TokenMintsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<TokenMints>>, PrismaPromise<Array<TokenMintsGetPayload<T>>>>

    /**
     * Create a TokenMints.
     * @param {TokenMintsCreateArgs} args - Arguments to create a TokenMints.
     * @example
     * // Create one TokenMints
     * const TokenMints = await prisma.tokenMints.create({
     *   data: {
     *     // ... data to create a TokenMints
     *   }
     * })
     * 
    **/
    create<T extends TokenMintsCreateArgs>(
      args: SelectSubset<T, TokenMintsCreateArgs>
    ): CheckSelect<T, Prisma__TokenMintsClient<TokenMints>, Prisma__TokenMintsClient<TokenMintsGetPayload<T>>>

    /**
     * Create many TokenMints.
     *     @param {TokenMintsCreateManyArgs} args - Arguments to create many TokenMints.
     *     @example
     *     // Create many TokenMints
     *     const tokenMints = await prisma.tokenMints.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TokenMintsCreateManyArgs>(
      args?: SelectSubset<T, TokenMintsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a TokenMints.
     * @param {TokenMintsDeleteArgs} args - Arguments to delete one TokenMints.
     * @example
     * // Delete one TokenMints
     * const TokenMints = await prisma.tokenMints.delete({
     *   where: {
     *     // ... filter to delete one TokenMints
     *   }
     * })
     * 
    **/
    delete<T extends TokenMintsDeleteArgs>(
      args: SelectSubset<T, TokenMintsDeleteArgs>
    ): CheckSelect<T, Prisma__TokenMintsClient<TokenMints>, Prisma__TokenMintsClient<TokenMintsGetPayload<T>>>

    /**
     * Update one TokenMints.
     * @param {TokenMintsUpdateArgs} args - Arguments to update one TokenMints.
     * @example
     * // Update one TokenMints
     * const tokenMints = await prisma.tokenMints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TokenMintsUpdateArgs>(
      args: SelectSubset<T, TokenMintsUpdateArgs>
    ): CheckSelect<T, Prisma__TokenMintsClient<TokenMints>, Prisma__TokenMintsClient<TokenMintsGetPayload<T>>>

    /**
     * Delete zero or more TokenMints.
     * @param {TokenMintsDeleteManyArgs} args - Arguments to filter TokenMints to delete.
     * @example
     * // Delete a few TokenMints
     * const { count } = await prisma.tokenMints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TokenMintsDeleteManyArgs>(
      args?: SelectSubset<T, TokenMintsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenMints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenMintsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenMints
     * const tokenMints = await prisma.tokenMints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TokenMintsUpdateManyArgs>(
      args: SelectSubset<T, TokenMintsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one TokenMints.
     * @param {TokenMintsUpsertArgs} args - Arguments to update or create a TokenMints.
     * @example
     * // Update or create a TokenMints
     * const tokenMints = await prisma.tokenMints.upsert({
     *   create: {
     *     // ... data to create a TokenMints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenMints we want to update
     *   }
     * })
    **/
    upsert<T extends TokenMintsUpsertArgs>(
      args: SelectSubset<T, TokenMintsUpsertArgs>
    ): CheckSelect<T, Prisma__TokenMintsClient<TokenMints>, Prisma__TokenMintsClient<TokenMintsGetPayload<T>>>

    /**
     * Count the number of TokenMints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenMintsCountArgs} args - Arguments to filter TokenMints to count.
     * @example
     * // Count the number of TokenMints
     * const count = await prisma.tokenMints.count({
     *   where: {
     *     // ... the filter for the TokenMints we want to count
     *   }
     * })
    **/
    count<T extends TokenMintsCountArgs>(
      args?: Subset<T, TokenMintsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenMintsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenMints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenMintsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenMintsAggregateArgs>(args: Subset<T, TokenMintsAggregateArgs>): PrismaPromise<GetTokenMintsAggregateType<T>>

    /**
     * Group by TokenMints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenMintsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenMintsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenMintsGroupByArgs['orderBy'] }
        : { orderBy?: TokenMintsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenMintsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenMintsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenMints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TokenMintsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    AccountBalances<T extends AccountBalancesFindManyArgs = {}>(args?: Subset<T, AccountBalancesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<AccountBalances>>, PrismaPromise<Array<AccountBalancesGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * TokenMints findUnique
   */
  export type TokenMintsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the TokenMints
     * 
    **/
    select?: TokenMintsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenMintsInclude | null
    /**
     * Throw an Error if a TokenMints can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TokenMints to fetch.
     * 
    **/
    where: TokenMintsWhereUniqueInput
  }


  /**
   * TokenMints findFirst
   */
  export type TokenMintsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the TokenMints
     * 
    **/
    select?: TokenMintsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenMintsInclude | null
    /**
     * Throw an Error if a TokenMints can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TokenMints to fetch.
     * 
    **/
    where?: TokenMintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenMints to fetch.
     * 
    **/
    orderBy?: Enumerable<TokenMintsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenMints.
     * 
    **/
    cursor?: TokenMintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenMints from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenMints.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenMints.
     * 
    **/
    distinct?: Enumerable<TokenMintsScalarFieldEnum>
  }


  /**
   * TokenMints findMany
   */
  export type TokenMintsFindManyArgs = {
    /**
     * Select specific fields to fetch from the TokenMints
     * 
    **/
    select?: TokenMintsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenMintsInclude | null
    /**
     * Filter, which TokenMints to fetch.
     * 
    **/
    where?: TokenMintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenMints to fetch.
     * 
    **/
    orderBy?: Enumerable<TokenMintsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenMints.
     * 
    **/
    cursor?: TokenMintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenMints from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenMints.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TokenMintsScalarFieldEnum>
  }


  /**
   * TokenMints create
   */
  export type TokenMintsCreateArgs = {
    /**
     * Select specific fields to fetch from the TokenMints
     * 
    **/
    select?: TokenMintsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenMintsInclude | null
    /**
     * The data needed to create a TokenMints.
     * 
    **/
    data: XOR<TokenMintsCreateInput, TokenMintsUncheckedCreateInput>
  }


  /**
   * TokenMints createMany
   */
  export type TokenMintsCreateManyArgs = {
    data: Enumerable<TokenMintsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TokenMints update
   */
  export type TokenMintsUpdateArgs = {
    /**
     * Select specific fields to fetch from the TokenMints
     * 
    **/
    select?: TokenMintsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenMintsInclude | null
    /**
     * The data needed to update a TokenMints.
     * 
    **/
    data: XOR<TokenMintsUpdateInput, TokenMintsUncheckedUpdateInput>
    /**
     * Choose, which TokenMints to update.
     * 
    **/
    where: TokenMintsWhereUniqueInput
  }


  /**
   * TokenMints updateMany
   */
  export type TokenMintsUpdateManyArgs = {
    data: XOR<TokenMintsUpdateManyMutationInput, TokenMintsUncheckedUpdateManyInput>
    where?: TokenMintsWhereInput
  }


  /**
   * TokenMints upsert
   */
  export type TokenMintsUpsertArgs = {
    /**
     * Select specific fields to fetch from the TokenMints
     * 
    **/
    select?: TokenMintsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenMintsInclude | null
    /**
     * The filter to search for the TokenMints to update in case it exists.
     * 
    **/
    where: TokenMintsWhereUniqueInput
    /**
     * In case the TokenMints found by the `where` argument doesn't exist, create a new TokenMints with this data.
     * 
    **/
    create: XOR<TokenMintsCreateInput, TokenMintsUncheckedCreateInput>
    /**
     * In case the TokenMints was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TokenMintsUpdateInput, TokenMintsUncheckedUpdateInput>
  }


  /**
   * TokenMints delete
   */
  export type TokenMintsDeleteArgs = {
    /**
     * Select specific fields to fetch from the TokenMints
     * 
    **/
    select?: TokenMintsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenMintsInclude | null
    /**
     * Filter which TokenMints to delete.
     * 
    **/
    where: TokenMintsWhereUniqueInput
  }


  /**
   * TokenMints deleteMany
   */
  export type TokenMintsDeleteManyArgs = {
    where?: TokenMintsWhereInput
  }


  /**
   * TokenMints without action
   */
  export type TokenMintsArgs = {
    /**
     * Select specific fields to fetch from the TokenMints
     * 
    **/
    select?: TokenMintsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenMintsInclude | null
  }



  /**
   * Model DatabaseKeys
   */


  export type AggregateDatabaseKeys = {
    _count: DatabaseKeysCountAggregateOutputType | null
    _avg: DatabaseKeysAvgAggregateOutputType | null
    _sum: DatabaseKeysSumAggregateOutputType | null
    _min: DatabaseKeysMinAggregateOutputType | null
    _max: DatabaseKeysMaxAggregateOutputType | null
  }

  export type DatabaseKeysAvgAggregateOutputType = {
    intKey: number | null
  }

  export type DatabaseKeysSumAggregateOutputType = {
    intKey: number | null
  }

  export type DatabaseKeysMinAggregateOutputType = {
    id: string | null
    description: string | null
    stringKey: string | null
    intKey: number | null
    boolKey: boolean | null
  }

  export type DatabaseKeysMaxAggregateOutputType = {
    id: string | null
    description: string | null
    stringKey: string | null
    intKey: number | null
    boolKey: boolean | null
  }

  export type DatabaseKeysCountAggregateOutputType = {
    id: number
    description: number
    stringKey: number
    intKey: number
    boolKey: number
    _all: number
  }


  export type DatabaseKeysAvgAggregateInputType = {
    intKey?: true
  }

  export type DatabaseKeysSumAggregateInputType = {
    intKey?: true
  }

  export type DatabaseKeysMinAggregateInputType = {
    id?: true
    description?: true
    stringKey?: true
    intKey?: true
    boolKey?: true
  }

  export type DatabaseKeysMaxAggregateInputType = {
    id?: true
    description?: true
    stringKey?: true
    intKey?: true
    boolKey?: true
  }

  export type DatabaseKeysCountAggregateInputType = {
    id?: true
    description?: true
    stringKey?: true
    intKey?: true
    boolKey?: true
    _all?: true
  }

  export type DatabaseKeysAggregateArgs = {
    /**
     * Filter which DatabaseKeys to aggregate.
     * 
    **/
    where?: DatabaseKeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseKeys to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseKeysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DatabaseKeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseKeys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseKeys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatabaseKeys
    **/
    _count?: true | DatabaseKeysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatabaseKeysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatabaseKeysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatabaseKeysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatabaseKeysMaxAggregateInputType
  }

  export type GetDatabaseKeysAggregateType<T extends DatabaseKeysAggregateArgs> = {
        [P in keyof T & keyof AggregateDatabaseKeys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatabaseKeys[P]>
      : GetScalarType<T[P], AggregateDatabaseKeys[P]>
  }


    
    
  export type DatabaseKeysGroupByArgs = {
    where?: DatabaseKeysWhereInput
    orderBy?: Enumerable<DatabaseKeysOrderByWithAggregationInput>
    by: Array<DatabaseKeysScalarFieldEnum>
    having?: DatabaseKeysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatabaseKeysCountAggregateInputType | true
    _avg?: DatabaseKeysAvgAggregateInputType
    _sum?: DatabaseKeysSumAggregateInputType
    _min?: DatabaseKeysMinAggregateInputType
    _max?: DatabaseKeysMaxAggregateInputType
  }


  export type DatabaseKeysGroupByOutputType = {
    id: string
    description: string
    stringKey: string | null
    intKey: number | null
    boolKey: boolean | null
    _count: DatabaseKeysCountAggregateOutputType | null
    _avg: DatabaseKeysAvgAggregateOutputType | null
    _sum: DatabaseKeysSumAggregateOutputType | null
    _min: DatabaseKeysMinAggregateOutputType | null
    _max: DatabaseKeysMaxAggregateOutputType | null
  }

  type GetDatabaseKeysGroupByPayload<T extends DatabaseKeysGroupByArgs> = Promise<
    Array<
      PickArray<DatabaseKeysGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof DatabaseKeysGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], DatabaseKeysGroupByOutputType[P]> 
            : GetScalarType<T[P], DatabaseKeysGroupByOutputType[P]>
        }
      > 
    >


  export type DatabaseKeysSelect = {
    id?: boolean
    description?: boolean
    stringKey?: boolean
    intKey?: boolean
    boolKey?: boolean
  }

  export type DatabaseKeysGetPayload<
    S extends boolean | null | undefined | DatabaseKeysArgs,
    U = keyof S
      > = S extends true
        ? DatabaseKeys
    : S extends undefined
    ? never
    : S extends DatabaseKeysArgs | DatabaseKeysFindManyArgs
    ?'include' extends U
    ? DatabaseKeys 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof DatabaseKeys ?DatabaseKeys [P]
  : 
     never
  } 
    : DatabaseKeys
  : DatabaseKeys


  type DatabaseKeysCountArgs = Merge<
    Omit<DatabaseKeysFindManyArgs, 'select' | 'include'> & {
      select?: DatabaseKeysCountAggregateInputType | true
    }
  >

  export interface DatabaseKeysDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one DatabaseKeys that matches the filter.
     * @param {DatabaseKeysFindUniqueArgs} args - Arguments to find a DatabaseKeys
     * @example
     * // Get one DatabaseKeys
     * const databaseKeys = await prisma.databaseKeys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DatabaseKeysFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DatabaseKeysFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DatabaseKeys'> extends True ? CheckSelect<T, Prisma__DatabaseKeysClient<DatabaseKeys>, Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T>>> : CheckSelect<T, Prisma__DatabaseKeysClient<DatabaseKeys | null >, Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T> | null >>

    /**
     * Find the first DatabaseKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseKeysFindFirstArgs} args - Arguments to find a DatabaseKeys
     * @example
     * // Get one DatabaseKeys
     * const databaseKeys = await prisma.databaseKeys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DatabaseKeysFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DatabaseKeysFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DatabaseKeys'> extends True ? CheckSelect<T, Prisma__DatabaseKeysClient<DatabaseKeys>, Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T>>> : CheckSelect<T, Prisma__DatabaseKeysClient<DatabaseKeys | null >, Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T> | null >>

    /**
     * Find zero or more DatabaseKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseKeysFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatabaseKeys
     * const databaseKeys = await prisma.databaseKeys.findMany()
     * 
     * // Get first 10 DatabaseKeys
     * const databaseKeys = await prisma.databaseKeys.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const databaseKeysWithIdOnly = await prisma.databaseKeys.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DatabaseKeysFindManyArgs>(
      args?: SelectSubset<T, DatabaseKeysFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<DatabaseKeys>>, PrismaPromise<Array<DatabaseKeysGetPayload<T>>>>

    /**
     * Create a DatabaseKeys.
     * @param {DatabaseKeysCreateArgs} args - Arguments to create a DatabaseKeys.
     * @example
     * // Create one DatabaseKeys
     * const DatabaseKeys = await prisma.databaseKeys.create({
     *   data: {
     *     // ... data to create a DatabaseKeys
     *   }
     * })
     * 
    **/
    create<T extends DatabaseKeysCreateArgs>(
      args: SelectSubset<T, DatabaseKeysCreateArgs>
    ): CheckSelect<T, Prisma__DatabaseKeysClient<DatabaseKeys>, Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T>>>

    /**
     * Create many DatabaseKeys.
     *     @param {DatabaseKeysCreateManyArgs} args - Arguments to create many DatabaseKeys.
     *     @example
     *     // Create many DatabaseKeys
     *     const databaseKeys = await prisma.databaseKeys.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DatabaseKeysCreateManyArgs>(
      args?: SelectSubset<T, DatabaseKeysCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a DatabaseKeys.
     * @param {DatabaseKeysDeleteArgs} args - Arguments to delete one DatabaseKeys.
     * @example
     * // Delete one DatabaseKeys
     * const DatabaseKeys = await prisma.databaseKeys.delete({
     *   where: {
     *     // ... filter to delete one DatabaseKeys
     *   }
     * })
     * 
    **/
    delete<T extends DatabaseKeysDeleteArgs>(
      args: SelectSubset<T, DatabaseKeysDeleteArgs>
    ): CheckSelect<T, Prisma__DatabaseKeysClient<DatabaseKeys>, Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T>>>

    /**
     * Update one DatabaseKeys.
     * @param {DatabaseKeysUpdateArgs} args - Arguments to update one DatabaseKeys.
     * @example
     * // Update one DatabaseKeys
     * const databaseKeys = await prisma.databaseKeys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DatabaseKeysUpdateArgs>(
      args: SelectSubset<T, DatabaseKeysUpdateArgs>
    ): CheckSelect<T, Prisma__DatabaseKeysClient<DatabaseKeys>, Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T>>>

    /**
     * Delete zero or more DatabaseKeys.
     * @param {DatabaseKeysDeleteManyArgs} args - Arguments to filter DatabaseKeys to delete.
     * @example
     * // Delete a few DatabaseKeys
     * const { count } = await prisma.databaseKeys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DatabaseKeysDeleteManyArgs>(
      args?: SelectSubset<T, DatabaseKeysDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatabaseKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseKeysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatabaseKeys
     * const databaseKeys = await prisma.databaseKeys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DatabaseKeysUpdateManyArgs>(
      args: SelectSubset<T, DatabaseKeysUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one DatabaseKeys.
     * @param {DatabaseKeysUpsertArgs} args - Arguments to update or create a DatabaseKeys.
     * @example
     * // Update or create a DatabaseKeys
     * const databaseKeys = await prisma.databaseKeys.upsert({
     *   create: {
     *     // ... data to create a DatabaseKeys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatabaseKeys we want to update
     *   }
     * })
    **/
    upsert<T extends DatabaseKeysUpsertArgs>(
      args: SelectSubset<T, DatabaseKeysUpsertArgs>
    ): CheckSelect<T, Prisma__DatabaseKeysClient<DatabaseKeys>, Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T>>>

    /**
     * Count the number of DatabaseKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseKeysCountArgs} args - Arguments to filter DatabaseKeys to count.
     * @example
     * // Count the number of DatabaseKeys
     * const count = await prisma.databaseKeys.count({
     *   where: {
     *     // ... the filter for the DatabaseKeys we want to count
     *   }
     * })
    **/
    count<T extends DatabaseKeysCountArgs>(
      args?: Subset<T, DatabaseKeysCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatabaseKeysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatabaseKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseKeysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatabaseKeysAggregateArgs>(args: Subset<T, DatabaseKeysAggregateArgs>): PrismaPromise<GetDatabaseKeysAggregateType<T>>

    /**
     * Group by DatabaseKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseKeysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatabaseKeysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatabaseKeysGroupByArgs['orderBy'] }
        : { orderBy?: DatabaseKeysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatabaseKeysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatabaseKeysGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatabaseKeys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DatabaseKeysClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * DatabaseKeys findUnique
   */
  export type DatabaseKeysFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the DatabaseKeys
     * 
    **/
    select?: DatabaseKeysSelect | null
    /**
     * Throw an Error if a DatabaseKeys can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which DatabaseKeys to fetch.
     * 
    **/
    where: DatabaseKeysWhereUniqueInput
  }


  /**
   * DatabaseKeys findFirst
   */
  export type DatabaseKeysFindFirstArgs = {
    /**
     * Select specific fields to fetch from the DatabaseKeys
     * 
    **/
    select?: DatabaseKeysSelect | null
    /**
     * Throw an Error if a DatabaseKeys can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which DatabaseKeys to fetch.
     * 
    **/
    where?: DatabaseKeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseKeys to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseKeysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatabaseKeys.
     * 
    **/
    cursor?: DatabaseKeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseKeys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseKeys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatabaseKeys.
     * 
    **/
    distinct?: Enumerable<DatabaseKeysScalarFieldEnum>
  }


  /**
   * DatabaseKeys findMany
   */
  export type DatabaseKeysFindManyArgs = {
    /**
     * Select specific fields to fetch from the DatabaseKeys
     * 
    **/
    select?: DatabaseKeysSelect | null
    /**
     * Filter, which DatabaseKeys to fetch.
     * 
    **/
    where?: DatabaseKeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseKeys to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseKeysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatabaseKeys.
     * 
    **/
    cursor?: DatabaseKeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseKeys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseKeys.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DatabaseKeysScalarFieldEnum>
  }


  /**
   * DatabaseKeys create
   */
  export type DatabaseKeysCreateArgs = {
    /**
     * Select specific fields to fetch from the DatabaseKeys
     * 
    **/
    select?: DatabaseKeysSelect | null
    /**
     * The data needed to create a DatabaseKeys.
     * 
    **/
    data: XOR<DatabaseKeysCreateInput, DatabaseKeysUncheckedCreateInput>
  }


  /**
   * DatabaseKeys createMany
   */
  export type DatabaseKeysCreateManyArgs = {
    data: Enumerable<DatabaseKeysCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DatabaseKeys update
   */
  export type DatabaseKeysUpdateArgs = {
    /**
     * Select specific fields to fetch from the DatabaseKeys
     * 
    **/
    select?: DatabaseKeysSelect | null
    /**
     * The data needed to update a DatabaseKeys.
     * 
    **/
    data: XOR<DatabaseKeysUpdateInput, DatabaseKeysUncheckedUpdateInput>
    /**
     * Choose, which DatabaseKeys to update.
     * 
    **/
    where: DatabaseKeysWhereUniqueInput
  }


  /**
   * DatabaseKeys updateMany
   */
  export type DatabaseKeysUpdateManyArgs = {
    data: XOR<DatabaseKeysUpdateManyMutationInput, DatabaseKeysUncheckedUpdateManyInput>
    where?: DatabaseKeysWhereInput
  }


  /**
   * DatabaseKeys upsert
   */
  export type DatabaseKeysUpsertArgs = {
    /**
     * Select specific fields to fetch from the DatabaseKeys
     * 
    **/
    select?: DatabaseKeysSelect | null
    /**
     * The filter to search for the DatabaseKeys to update in case it exists.
     * 
    **/
    where: DatabaseKeysWhereUniqueInput
    /**
     * In case the DatabaseKeys found by the `where` argument doesn't exist, create a new DatabaseKeys with this data.
     * 
    **/
    create: XOR<DatabaseKeysCreateInput, DatabaseKeysUncheckedCreateInput>
    /**
     * In case the DatabaseKeys was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DatabaseKeysUpdateInput, DatabaseKeysUncheckedUpdateInput>
  }


  /**
   * DatabaseKeys delete
   */
  export type DatabaseKeysDeleteArgs = {
    /**
     * Select specific fields to fetch from the DatabaseKeys
     * 
    **/
    select?: DatabaseKeysSelect | null
    /**
     * Filter which DatabaseKeys to delete.
     * 
    **/
    where: DatabaseKeysWhereUniqueInput
  }


  /**
   * DatabaseKeys deleteMany
   */
  export type DatabaseKeysDeleteManyArgs = {
    where?: DatabaseKeysWhereInput
  }


  /**
   * DatabaseKeys without action
   */
  export type DatabaseKeysArgs = {
    /**
     * Select specific fields to fetch from the DatabaseKeys
     * 
    **/
    select?: DatabaseKeysSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountBalancesScalarFieldEnum: {
    id: 'id',
    label: 'label',
    owner_address: 'owner_address',
    mint: 'mint',
    balance: 'balance',
    time_created: 'time_created'
  };

  export type AccountBalancesScalarFieldEnum = (typeof AccountBalancesScalarFieldEnum)[keyof typeof AccountBalancesScalarFieldEnum]


  export const OwnersScalarFieldEnum: {
    owner: 'owner',
    label: 'label',
    time_created: 'time_created'
  };

  export type OwnersScalarFieldEnum = (typeof OwnersScalarFieldEnum)[keyof typeof OwnersScalarFieldEnum]


  export const TokenMintsScalarFieldEnum: {
    mint_address: 'mint_address',
    mint_name: 'mint_name',
    time_created: 'time_created'
  };

  export type TokenMintsScalarFieldEnum = (typeof TokenMintsScalarFieldEnum)[keyof typeof TokenMintsScalarFieldEnum]


  export const DatabaseKeysScalarFieldEnum: {
    id: 'id',
    description: 'description',
    stringKey: 'stringKey',
    intKey: 'intKey',
    boolKey: 'boolKey'
  };

  export type DatabaseKeysScalarFieldEnum = (typeof DatabaseKeysScalarFieldEnum)[keyof typeof DatabaseKeysScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type AccountBalancesWhereInput = {
    AND?: Enumerable<AccountBalancesWhereInput>
    OR?: Enumerable<AccountBalancesWhereInput>
    NOT?: Enumerable<AccountBalancesWhereInput>
    id?: IntFilter | number
    label?: StringFilter | string
    owner_address?: StringFilter | string
    mint?: StringFilter | string
    balance?: DecimalFilter | Decimal | number | string
    time_created?: DateTimeFilter | Date | string
    Mint?: XOR<TokenMintsRelationFilter, TokenMintsWhereInput> | null
  }

  export type AccountBalancesOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    owner_address?: SortOrder
    mint?: SortOrder
    balance?: SortOrder
    time_created?: SortOrder
    Mint?: TokenMintsOrderByWithRelationInput
  }

  export type AccountBalancesWhereUniqueInput = {
    owner_address_mint_time_created?: AccountBalancesOwner_addressMintTime_createdCompoundUniqueInput
  }

  export type AccountBalancesOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    owner_address?: SortOrder
    mint?: SortOrder
    balance?: SortOrder
    time_created?: SortOrder
    _count?: AccountBalancesCountOrderByAggregateInput
    _avg?: AccountBalancesAvgOrderByAggregateInput
    _max?: AccountBalancesMaxOrderByAggregateInput
    _min?: AccountBalancesMinOrderByAggregateInput
    _sum?: AccountBalancesSumOrderByAggregateInput
  }

  export type AccountBalancesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountBalancesScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountBalancesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountBalancesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    label?: StringWithAggregatesFilter | string
    owner_address?: StringWithAggregatesFilter | string
    mint?: StringWithAggregatesFilter | string
    balance?: DecimalWithAggregatesFilter | Decimal | number | string
    time_created?: DateTimeWithAggregatesFilter | Date | string
  }

  export type OwnersWhereInput = {
    AND?: Enumerable<OwnersWhereInput>
    OR?: Enumerable<OwnersWhereInput>
    NOT?: Enumerable<OwnersWhereInput>
    owner?: StringFilter | string
    label?: StringNullableFilter | string | null
    time_created?: DateTimeFilter | Date | string
  }

  export type OwnersOrderByWithRelationInput = {
    owner?: SortOrder
    label?: SortOrder
    time_created?: SortOrder
  }

  export type OwnersWhereUniqueInput = {
    owner?: string
  }

  export type OwnersOrderByWithAggregationInput = {
    owner?: SortOrder
    label?: SortOrder
    time_created?: SortOrder
    _count?: OwnersCountOrderByAggregateInput
    _max?: OwnersMaxOrderByAggregateInput
    _min?: OwnersMinOrderByAggregateInput
  }

  export type OwnersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OwnersScalarWhereWithAggregatesInput>
    OR?: Enumerable<OwnersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OwnersScalarWhereWithAggregatesInput>
    owner?: StringWithAggregatesFilter | string
    label?: StringNullableWithAggregatesFilter | string | null
    time_created?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TokenMintsWhereInput = {
    AND?: Enumerable<TokenMintsWhereInput>
    OR?: Enumerable<TokenMintsWhereInput>
    NOT?: Enumerable<TokenMintsWhereInput>
    mint_address?: StringFilter | string
    mint_name?: StringFilter | string
    time_created?: DateTimeFilter | Date | string
    AccountBalances?: AccountBalancesListRelationFilter
  }

  export type TokenMintsOrderByWithRelationInput = {
    mint_address?: SortOrder
    mint_name?: SortOrder
    time_created?: SortOrder
    AccountBalances?: AccountBalancesOrderByRelationAggregateInput
  }

  export type TokenMintsWhereUniqueInput = {
    mint_address?: string
    mint_name?: string
  }

  export type TokenMintsOrderByWithAggregationInput = {
    mint_address?: SortOrder
    mint_name?: SortOrder
    time_created?: SortOrder
    _count?: TokenMintsCountOrderByAggregateInput
    _max?: TokenMintsMaxOrderByAggregateInput
    _min?: TokenMintsMinOrderByAggregateInput
  }

  export type TokenMintsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TokenMintsScalarWhereWithAggregatesInput>
    OR?: Enumerable<TokenMintsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TokenMintsScalarWhereWithAggregatesInput>
    mint_address?: StringWithAggregatesFilter | string
    mint_name?: StringWithAggregatesFilter | string
    time_created?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DatabaseKeysWhereInput = {
    AND?: Enumerable<DatabaseKeysWhereInput>
    OR?: Enumerable<DatabaseKeysWhereInput>
    NOT?: Enumerable<DatabaseKeysWhereInput>
    id?: StringFilter | string
    description?: StringFilter | string
    stringKey?: StringNullableFilter | string | null
    intKey?: IntNullableFilter | number | null
    boolKey?: BoolNullableFilter | boolean | null
  }

  export type DatabaseKeysOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    stringKey?: SortOrder
    intKey?: SortOrder
    boolKey?: SortOrder
  }

  export type DatabaseKeysWhereUniqueInput = {
    id?: string
  }

  export type DatabaseKeysOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    stringKey?: SortOrder
    intKey?: SortOrder
    boolKey?: SortOrder
    _count?: DatabaseKeysCountOrderByAggregateInput
    _avg?: DatabaseKeysAvgOrderByAggregateInput
    _max?: DatabaseKeysMaxOrderByAggregateInput
    _min?: DatabaseKeysMinOrderByAggregateInput
    _sum?: DatabaseKeysSumOrderByAggregateInput
  }

  export type DatabaseKeysScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DatabaseKeysScalarWhereWithAggregatesInput>
    OR?: Enumerable<DatabaseKeysScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DatabaseKeysScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    stringKey?: StringNullableWithAggregatesFilter | string | null
    intKey?: IntNullableWithAggregatesFilter | number | null
    boolKey?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type AccountBalancesCreateInput = {
    id?: number
    label: string
    owner_address: string
    balance: Decimal | number | string
    time_created?: Date | string
    Mint?: TokenMintsCreateNestedOneWithoutAccountBalancesInput
  }

  export type AccountBalancesUncheckedCreateInput = {
    id?: number
    label: string
    owner_address: string
    mint: string
    balance: Decimal | number | string
    time_created?: Date | string
  }

  export type AccountBalancesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    owner_address?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    Mint?: TokenMintsUpdateOneWithoutAccountBalancesNestedInput
  }

  export type AccountBalancesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    owner_address?: StringFieldUpdateOperationsInput | string
    mint?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBalancesCreateManyInput = {
    id?: number
    label: string
    owner_address: string
    mint: string
    balance: Decimal | number | string
    time_created?: Date | string
  }

  export type AccountBalancesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    owner_address?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBalancesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    owner_address?: StringFieldUpdateOperationsInput | string
    mint?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnersCreateInput = {
    owner: string
    label?: string | null
    time_created?: Date | string
  }

  export type OwnersUncheckedCreateInput = {
    owner: string
    label?: string | null
    time_created?: Date | string
  }

  export type OwnersUpdateInput = {
    owner?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnersUncheckedUpdateInput = {
    owner?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnersCreateManyInput = {
    owner: string
    label?: string | null
    time_created?: Date | string
  }

  export type OwnersUpdateManyMutationInput = {
    owner?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnersUncheckedUpdateManyInput = {
    owner?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenMintsCreateInput = {
    mint_address: string
    mint_name: string
    time_created?: Date | string
    AccountBalances?: AccountBalancesCreateNestedManyWithoutMintInput
  }

  export type TokenMintsUncheckedCreateInput = {
    mint_address: string
    mint_name: string
    time_created?: Date | string
    AccountBalances?: AccountBalancesUncheckedCreateNestedManyWithoutMintInput
  }

  export type TokenMintsUpdateInput = {
    mint_address?: StringFieldUpdateOperationsInput | string
    mint_name?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    AccountBalances?: AccountBalancesUpdateManyWithoutMintNestedInput
  }

  export type TokenMintsUncheckedUpdateInput = {
    mint_address?: StringFieldUpdateOperationsInput | string
    mint_name?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    AccountBalances?: AccountBalancesUncheckedUpdateManyWithoutMintNestedInput
  }

  export type TokenMintsCreateManyInput = {
    mint_address: string
    mint_name: string
    time_created?: Date | string
  }

  export type TokenMintsUpdateManyMutationInput = {
    mint_address?: StringFieldUpdateOperationsInput | string
    mint_name?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenMintsUncheckedUpdateManyInput = {
    mint_address?: StringFieldUpdateOperationsInput | string
    mint_name?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatabaseKeysCreateInput = {
    id: string
    description: string
    stringKey?: string | null
    intKey?: number | null
    boolKey?: boolean | null
  }

  export type DatabaseKeysUncheckedCreateInput = {
    id: string
    description: string
    stringKey?: string | null
    intKey?: number | null
    boolKey?: boolean | null
  }

  export type DatabaseKeysUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    stringKey?: NullableStringFieldUpdateOperationsInput | string | null
    intKey?: NullableIntFieldUpdateOperationsInput | number | null
    boolKey?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DatabaseKeysUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    stringKey?: NullableStringFieldUpdateOperationsInput | string | null
    intKey?: NullableIntFieldUpdateOperationsInput | number | null
    boolKey?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DatabaseKeysCreateManyInput = {
    id: string
    description: string
    stringKey?: string | null
    intKey?: number | null
    boolKey?: boolean | null
  }

  export type DatabaseKeysUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    stringKey?: NullableStringFieldUpdateOperationsInput | string | null
    intKey?: NullableIntFieldUpdateOperationsInput | number | null
    boolKey?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DatabaseKeysUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    stringKey?: NullableStringFieldUpdateOperationsInput | string | null
    intKey?: NullableIntFieldUpdateOperationsInput | number | null
    boolKey?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DecimalFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalFilter | Decimal | number | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type TokenMintsRelationFilter = {
    is?: TokenMintsWhereInput | null
    isNot?: TokenMintsWhereInput | null
  }

  export type AccountBalancesOwner_addressMintTime_createdCompoundUniqueInput = {
    owner_address: string
    mint: string
    time_created: Date | string
  }

  export type AccountBalancesCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    owner_address?: SortOrder
    mint?: SortOrder
    balance?: SortOrder
    time_created?: SortOrder
  }

  export type AccountBalancesAvgOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
  }

  export type AccountBalancesMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    owner_address?: SortOrder
    mint?: SortOrder
    balance?: SortOrder
    time_created?: SortOrder
  }

  export type AccountBalancesMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    owner_address?: SortOrder
    mint?: SortOrder
    balance?: SortOrder
    time_created?: SortOrder
  }

  export type AccountBalancesSumOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type OwnersCountOrderByAggregateInput = {
    owner?: SortOrder
    label?: SortOrder
    time_created?: SortOrder
  }

  export type OwnersMaxOrderByAggregateInput = {
    owner?: SortOrder
    label?: SortOrder
    time_created?: SortOrder
  }

  export type OwnersMinOrderByAggregateInput = {
    owner?: SortOrder
    label?: SortOrder
    time_created?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type AccountBalancesListRelationFilter = {
    every?: AccountBalancesWhereInput
    some?: AccountBalancesWhereInput
    none?: AccountBalancesWhereInput
  }

  export type AccountBalancesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenMintsCountOrderByAggregateInput = {
    mint_address?: SortOrder
    mint_name?: SortOrder
    time_created?: SortOrder
  }

  export type TokenMintsMaxOrderByAggregateInput = {
    mint_address?: SortOrder
    mint_name?: SortOrder
    time_created?: SortOrder
  }

  export type TokenMintsMinOrderByAggregateInput = {
    mint_address?: SortOrder
    mint_name?: SortOrder
    time_created?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type DatabaseKeysCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    stringKey?: SortOrder
    intKey?: SortOrder
    boolKey?: SortOrder
  }

  export type DatabaseKeysAvgOrderByAggregateInput = {
    intKey?: SortOrder
  }

  export type DatabaseKeysMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    stringKey?: SortOrder
    intKey?: SortOrder
    boolKey?: SortOrder
  }

  export type DatabaseKeysMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    stringKey?: SortOrder
    intKey?: SortOrder
    boolKey?: SortOrder
  }

  export type DatabaseKeysSumOrderByAggregateInput = {
    intKey?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type TokenMintsCreateNestedOneWithoutAccountBalancesInput = {
    create?: XOR<TokenMintsCreateWithoutAccountBalancesInput, TokenMintsUncheckedCreateWithoutAccountBalancesInput>
    connectOrCreate?: TokenMintsCreateOrConnectWithoutAccountBalancesInput
    connect?: TokenMintsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | number | string
    increment?: Decimal | number | string
    decrement?: Decimal | number | string
    multiply?: Decimal | number | string
    divide?: Decimal | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TokenMintsUpdateOneWithoutAccountBalancesNestedInput = {
    create?: XOR<TokenMintsCreateWithoutAccountBalancesInput, TokenMintsUncheckedCreateWithoutAccountBalancesInput>
    connectOrCreate?: TokenMintsCreateOrConnectWithoutAccountBalancesInput
    upsert?: TokenMintsUpsertWithoutAccountBalancesInput
    disconnect?: boolean
    delete?: boolean
    connect?: TokenMintsWhereUniqueInput
    update?: XOR<TokenMintsUpdateWithoutAccountBalancesInput, TokenMintsUncheckedUpdateWithoutAccountBalancesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AccountBalancesCreateNestedManyWithoutMintInput = {
    create?: XOR<Enumerable<AccountBalancesCreateWithoutMintInput>, Enumerable<AccountBalancesUncheckedCreateWithoutMintInput>>
    connectOrCreate?: Enumerable<AccountBalancesCreateOrConnectWithoutMintInput>
    createMany?: AccountBalancesCreateManyMintInputEnvelope
    connect?: Enumerable<AccountBalancesWhereUniqueInput>
  }

  export type AccountBalancesUncheckedCreateNestedManyWithoutMintInput = {
    create?: XOR<Enumerable<AccountBalancesCreateWithoutMintInput>, Enumerable<AccountBalancesUncheckedCreateWithoutMintInput>>
    connectOrCreate?: Enumerable<AccountBalancesCreateOrConnectWithoutMintInput>
    createMany?: AccountBalancesCreateManyMintInputEnvelope
    connect?: Enumerable<AccountBalancesWhereUniqueInput>
  }

  export type AccountBalancesUpdateManyWithoutMintNestedInput = {
    create?: XOR<Enumerable<AccountBalancesCreateWithoutMintInput>, Enumerable<AccountBalancesUncheckedCreateWithoutMintInput>>
    connectOrCreate?: Enumerable<AccountBalancesCreateOrConnectWithoutMintInput>
    upsert?: Enumerable<AccountBalancesUpsertWithWhereUniqueWithoutMintInput>
    createMany?: AccountBalancesCreateManyMintInputEnvelope
    set?: Enumerable<AccountBalancesWhereUniqueInput>
    disconnect?: Enumerable<AccountBalancesWhereUniqueInput>
    delete?: Enumerable<AccountBalancesWhereUniqueInput>
    connect?: Enumerable<AccountBalancesWhereUniqueInput>
    update?: Enumerable<AccountBalancesUpdateWithWhereUniqueWithoutMintInput>
    updateMany?: Enumerable<AccountBalancesUpdateManyWithWhereWithoutMintInput>
    deleteMany?: Enumerable<AccountBalancesScalarWhereInput>
  }

  export type AccountBalancesUncheckedUpdateManyWithoutMintNestedInput = {
    create?: XOR<Enumerable<AccountBalancesCreateWithoutMintInput>, Enumerable<AccountBalancesUncheckedCreateWithoutMintInput>>
    connectOrCreate?: Enumerable<AccountBalancesCreateOrConnectWithoutMintInput>
    upsert?: Enumerable<AccountBalancesUpsertWithWhereUniqueWithoutMintInput>
    createMany?: AccountBalancesCreateManyMintInputEnvelope
    set?: Enumerable<AccountBalancesWhereUniqueInput>
    disconnect?: Enumerable<AccountBalancesWhereUniqueInput>
    delete?: Enumerable<AccountBalancesWhereUniqueInput>
    connect?: Enumerable<AccountBalancesWhereUniqueInput>
    update?: Enumerable<AccountBalancesUpdateWithWhereUniqueWithoutMintInput>
    updateMany?: Enumerable<AccountBalancesUpdateManyWithWhereWithoutMintInput>
    deleteMany?: Enumerable<AccountBalancesScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalFilter | Decimal | number | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type TokenMintsCreateWithoutAccountBalancesInput = {
    mint_address: string
    mint_name: string
    time_created?: Date | string
  }

  export type TokenMintsUncheckedCreateWithoutAccountBalancesInput = {
    mint_address: string
    mint_name: string
    time_created?: Date | string
  }

  export type TokenMintsCreateOrConnectWithoutAccountBalancesInput = {
    where: TokenMintsWhereUniqueInput
    create: XOR<TokenMintsCreateWithoutAccountBalancesInput, TokenMintsUncheckedCreateWithoutAccountBalancesInput>
  }

  export type TokenMintsUpsertWithoutAccountBalancesInput = {
    update: XOR<TokenMintsUpdateWithoutAccountBalancesInput, TokenMintsUncheckedUpdateWithoutAccountBalancesInput>
    create: XOR<TokenMintsCreateWithoutAccountBalancesInput, TokenMintsUncheckedCreateWithoutAccountBalancesInput>
  }

  export type TokenMintsUpdateWithoutAccountBalancesInput = {
    mint_address?: StringFieldUpdateOperationsInput | string
    mint_name?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenMintsUncheckedUpdateWithoutAccountBalancesInput = {
    mint_address?: StringFieldUpdateOperationsInput | string
    mint_name?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBalancesCreateWithoutMintInput = {
    id?: number
    label: string
    owner_address: string
    balance: Decimal | number | string
    time_created?: Date | string
  }

  export type AccountBalancesUncheckedCreateWithoutMintInput = {
    id?: number
    label: string
    owner_address: string
    balance: Decimal | number | string
    time_created?: Date | string
  }

  export type AccountBalancesCreateOrConnectWithoutMintInput = {
    where: AccountBalancesWhereUniqueInput
    create: XOR<AccountBalancesCreateWithoutMintInput, AccountBalancesUncheckedCreateWithoutMintInput>
  }

  export type AccountBalancesCreateManyMintInputEnvelope = {
    data: Enumerable<AccountBalancesCreateManyMintInput>
    skipDuplicates?: boolean
  }

  export type AccountBalancesUpsertWithWhereUniqueWithoutMintInput = {
    where: AccountBalancesWhereUniqueInput
    update: XOR<AccountBalancesUpdateWithoutMintInput, AccountBalancesUncheckedUpdateWithoutMintInput>
    create: XOR<AccountBalancesCreateWithoutMintInput, AccountBalancesUncheckedCreateWithoutMintInput>
  }

  export type AccountBalancesUpdateWithWhereUniqueWithoutMintInput = {
    where: AccountBalancesWhereUniqueInput
    data: XOR<AccountBalancesUpdateWithoutMintInput, AccountBalancesUncheckedUpdateWithoutMintInput>
  }

  export type AccountBalancesUpdateManyWithWhereWithoutMintInput = {
    where: AccountBalancesScalarWhereInput
    data: XOR<AccountBalancesUpdateManyMutationInput, AccountBalancesUncheckedUpdateManyWithoutAccountBalancesInput>
  }

  export type AccountBalancesScalarWhereInput = {
    AND?: Enumerable<AccountBalancesScalarWhereInput>
    OR?: Enumerable<AccountBalancesScalarWhereInput>
    NOT?: Enumerable<AccountBalancesScalarWhereInput>
    id?: IntFilter | number
    label?: StringFilter | string
    owner_address?: StringFilter | string
    mint?: StringFilter | string
    balance?: DecimalFilter | Decimal | number | string
    time_created?: DateTimeFilter | Date | string
  }

  export type AccountBalancesCreateManyMintInput = {
    id?: number
    label: string
    owner_address: string
    balance: Decimal | number | string
    time_created?: Date | string
  }

  export type AccountBalancesUpdateWithoutMintInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    owner_address?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBalancesUncheckedUpdateWithoutMintInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    owner_address?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBalancesUncheckedUpdateManyWithoutAccountBalancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    owner_address?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}