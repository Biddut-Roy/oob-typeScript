{
    // Type Guard Using Typeof & In
     type Alphametical = string | number

     const add = (param1 : Alphametical , param2 : Alphametical) => {
        if (typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param1;
        } else {
            return param1.toString() + param2.toString();
        }
     }

     add(3,4)

     type NormalUser = {
        name: string;
     }

     type AdminUser = {
        name: string;
        role: "admin";
     }

     const getUser = (user: AdminUser | NormalUser)=>{
        if ('role' in user) {
            console.log(`My name is ${user.name} and role ${user.role}`);           
        }else{
            console.log(`My name is ${user.name}.`);    
        }
     }
} 