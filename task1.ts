/**
 *
 * TypeScript
 *
 * Part 1.
 * Let's model using TS the following models:
 * For a banking app, we receive from the server an "Account". This "Account" contains a 'name' and 'type' field.
 * The 'type' field represents the different types that the account can be:
 * - 'current' account.
 * - 'savings' account
 * - 'insurance' account
 **/


/** *
 * Add typings here
 */


/**
 * Part 2.
 * Let's enrich our models,
 * the "CurrentAccount" has a 'currentAmount': number field.
 * the "SavingsAccount" has a 'savingsAmount': number field.
 * the "InsuranceAccount" has a 'insuranceAmount': number field.
 *
 * Let's implement a "getUnderlyingAmount(account: Account): number" function which returns:
 * - currentAmount when given a CurrentAccount as input.
 * - savingsAmount when given a SavingsAccount as input.
 * - insuranceAmount when given an InsuranceAccount as input.
 **/
