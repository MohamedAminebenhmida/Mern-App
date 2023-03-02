/** Validate username **/
import { toast } from "react-hot-toast";

/* validate login page username*/
export async function usernamevalidate(values){
    const errors=usernameVerify({},values);
    return errors
}
function usernameVerify(error={},values){
    if(!values.username){
        error.username=toast.error('Username required...!')
    }else if (values.username.include(" ")){
        error.username=toast.error('invalid username')
    }
return error
}
