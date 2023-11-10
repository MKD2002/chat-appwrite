import { Client,Databases,Account } from 'appwrite';

export const PROJECT_ID='65225c83142d31396be3';
export const DATABASE_ID='65225cae19696898d69b';
export const COLLECTION_ID_MESSAGES='65225cb80726d4a2fe16';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65225c83142d31396be3');


export const databases = new Databases(client);
export const account = new Account(client);

export default client;