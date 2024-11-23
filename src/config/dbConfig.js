import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConecxao) {

    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConecxao);
        console.log("Conectando ao Cluster do banco de dados...");
        await mongoClient.connect();
        console.log("Conectado ao MongoDB Atlas com sucesso!");

        return mongoClient;
        
        
    } catch (error) {
        console.error("Falha na conexão com o Banco!");
        process.exit();
        
    }
    
}