let users

export default class UsersDAO {
    static async injectDB(conn) {
        if (users) {
            return
        }
        try {
            users = await conn.db(process.env.STUDIO_NS).collection("users")
        } catch(e) {
            console.error(
                `Unable to establish collection handle in usersDAO: ${e}`
            )
        }
    }
}

// add more methods (get, set, etc)