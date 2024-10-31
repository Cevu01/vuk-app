import { Platform } from "react-native";
import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.vuk-app",
  projectId: "672388980017d2a93c0e",
  databaseId: "67238c6e001d3223c138",
  userCollectionId: "67238c980016578da0c9",
  videoCollectionId: "67238cc90007aae94aca",
  storageId: "67238f59002154e4c959",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw new Error();
    const avatarUrl = avatars.getInitials(username);
    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique({
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      })
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
}
