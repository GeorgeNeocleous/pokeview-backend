# pokeview-backend

## Database design
User
    Username: {
        type: string,
        unique: true,


    }
    Password: {
        type: string,
        
    }
    List: Foreign key to a List

Pokemon likes can potentially be handled in the front-end

List
    {
        Pokemon:
    }