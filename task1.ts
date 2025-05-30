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
 * When it is an account of type 'current': it has a 'currentAmount': number field.
 * When it is an account of type 'savings': it has a 'savingsAmount': number field.
 * When it is an account of type 'insurance': it has a 'insuranceAmount': number field.
 *
 * Let's implement a "getUnderlyingAmount(account)" function which returns:
 * - currentAmount when given an account that is of type 'current' as input.
 * - savingsAmount when given an account that is of type 'savings' as input.
 * - insuranceAmount when given an account that is of type 'insurance' as input.
 **/
