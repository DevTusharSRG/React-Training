import { Client,ID ,Databases,Storage,Query} from 'appwrite';
import conf from '../conf/conf';

export class Service {
    Client = new Client()
    Databases;
    Bucket;

    constructor (){
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.Databases = new Databases(this.Client)
        this.Bucket = new Storage(this.Client)
    }

    async createPost ({title,slug,content,featuredImage,status,userId}) {
        try {
            return await this.Databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,

                }
            )
        } catch (error) {
            console.log("error occured : ",error );
        }
    }

    async updatePost (slug,{title,content,featuredImage,status}) {
        try {
            return await this.Databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("error occured : ",error );
        }
    }

    async deletePost (slug) {
        try {
            return await this.Databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("error occured : ",error );
        }
    }

    async getPost (slug) {
        try {
            return await this.Databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("error occured : ",error );
        }
    }

    async getPosts (queries = Query.equal("status","active")) {
        try {
            return await this.Databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
            
        } catch (error) {
            console.log("error occured : ",error );
        }
    }

    // File upload

    async uploadFile (file) {
        try {
            return await this.Bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("error occured : ",error );
        }
    }

    async deleteFile (fileId) {
        try {
            return await this.Bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            
        } catch (error) {
            console.log("error occured : ",error );
        }
    }

    getFilePreview (fileId) {
        return this.Bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            fileId
        )
    }
}

const service = new Service();

export default service