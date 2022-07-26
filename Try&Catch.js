
    /*

                try and catch in javascript.

                whats the difference between try and catch?
                try:
                    try to do something.
                catch:
                    catch the error.
                finally:
                    finally do something.




        */
                   function alert(msg){
                    try{
                        return(msg.toUpperCase().repeat(3));
                    }catch (e){
                        console.log (e);
                        console.log("Please enter a string next time"); 
                    }
                   
                   }
