-- CREATE EXTENSION IF NOT EXISTS timescaledb CASCADE;

-- CreateTable
CREATE TABLE "account_balances" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "owner_address" TEXT NOT NULL,
    "mint" TEXT NOT NULL,
    "balance" DECIMAL(65,30) NOT NULL,
    "time_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "owners" (
    "owner" TEXT NOT NULL,
    "label" TEXT,
    "time_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "token_mints" (
    "mint_address" TEXT NOT NULL,
    "mint_name" TEXT NOT NULL,
    "time_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "database_keys" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "stringKey" TEXT DEFAULT E'',
    "intKey" INTEGER DEFAULT 0,
    "boolKey" BOOLEAN DEFAULT false,

    CONSTRAINT "database_keys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_balances_owner_address_mint_address_time_created_key" ON "account_balances"("owner_address", "mint_address", "time_created");

-- CreateIndex
CREATE UNIQUE INDEX "owners_owner_key" ON "owners"("owner");

-- CreateIndex
CREATE UNIQUE INDEX "token_mints_mint_address_key" ON "token_mints"("mint_address");

INSERT INTO "owners" ("owner", "label") VALUES ('CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq', 'Alameda');
INSERT INTO "owners" ("owner", "label") VALUES ('CwyQtt6xGptR7PaxrrksgqBSRCZ3Zb2GjUYjKD9jH3tf', 'Wintermute');
INSERT INTO "owners" ("owner", "label") VALUES ('5xoBq7f7CDgZwqHrDBdRWM84ExRetg4gZq93dyJtoSwp', 'Jump');
INSERT INTO "owners" ("owner", "label") VALUES ('4STrWijMVAamUhbKWALVs1M97Wy4R2CodwGcnbKFY2F4', 'Roshaan');

INSERT INTO "token_mints" ("mint_address", "mint_name") VALUES ('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', 'USDC');
-- INSERT INTO "token_mints" ("mint_address", "mint_name") VALUES ('BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW', 'Sollet USDC');
INSERT INTO "token_mints" ("mint_address", "mint_name") VALUES ('9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E', 'Sollet BTC');
-- INSERT INTO "token_mints" ("mint_address", "mint_name") VALUES ('qfnqNqs3nCAHjnyCgLRDbBtq4p2MtHZxw8YjSyYhPoL', 'Wormhole BTC');
INSERT INTO "token_mints" ("mint_address", "mint_name") VALUES ('So11111111111111111111111111111111111111112', 'WSOL');
INSERT INTO "token_mints" ("mint_address", "mint_name") VALUES ('2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk', 'Sollet ETH');



-- SELECT create_hypertable('account_balances', 'time_created');
