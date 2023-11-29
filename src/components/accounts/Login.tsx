import { Box, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { ILoginDto } from "../../types/login-user";
import { AuthService } from "../../services/auth.service";
import { setTokenFromLocalStorage } from "../../services/localStorage.helper";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate=useNavigate();
    const {
        register,//to attrack changes of form inputs
        handleSubmit, //onSubmit event handler
        formState:{errors},

    }=useForm<ILoginDto>();

    const onSubmit=async (user:ILoginDto)=>{
            // alert(user.username);
            const token=await AuthService.login(user);
            if (token){
                setTokenFromLocalStorage("token",token);
                alert(token);
                navigate("/movies");
            }
    }
    return (
        <>
            <div className="Login">
                <h2> Login Form</h2>
                <Box sx={{width: '100%'}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            {...register("username")}
                            id="uaername"
                            label="username"
                            type="username"
                            variant="filled"
                        />
                        <TextField 
                            {...register("password")}
                            id="password" 
                            label="Password" 
                            type="password" 
                            variant="filled" 
                        />
                    <Button variant="contained" type="submit">Login</Button>
                    </form>

                </Box>
            </div>
        </>
    )
        ;
}

export default Login;