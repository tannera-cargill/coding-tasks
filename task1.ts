/**
 *
 * TypeScript
 *
 * Part 1.
 * Let's model the following scenario:
 * For a banking app, we receive from the server an "account". This "account" can be of different types: Current, Savings, Insurance. This "account"
 * always contains a 'name' and 'type' field.
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
 * When it is a "current" account it has a 'currentAmount': number field.
 * When it is a "savings" account it has a 'savingsAmount': number field.
 * When it is an "insurance" account it has a 'insuranceAmount': number field.
 *
 * Let's implement a "getUnderlyingAmount(account: Account): number" function which returns:
 * - currentAmount when given a CurrentAccount as input.
 * - savingsAmount when given a SavingsAccount as input.
 * - insuranceAmount when given an InsuranceAccount as input.
 **/
