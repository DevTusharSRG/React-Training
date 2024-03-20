import { Client, Account,ID} from 'appwrite';
import conf from '../conf/conf';

export class AuthService {
    Client = new Client()
    account;

    constructor (){
        this.Client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account=new Account(this.Client)
    }

    async createAccount ({email,password,name}){
        const userAccount = await this.account.create(ID.unique(), email, password, name);
        if (userAccount) {
            //
            return this.login({email,password})
        } else {
            return userAccount
        }
    }

    async login ({email,password}) {
        return await this.account.createEmailSession(email,password);
    }

    async getCurrentUser () {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("error:getCurrent User : ",error);
        }
        return null
    }

    async logout (){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("session logout error: ",error);
        }
    }

}

const authService = new AuthService();

export default authService