import {Form, Link, redirect} from "react-router-dom";
import { FormInput, SubmitBtn } from "../components/index.js";
import {customFetch} from "../utils/index.jsx";
import {toast} from "react-toastify";
import {loginUser} from "../features/user/userSlice.js";

export const action = (store) => async ({request}) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
        const response = await customFetch.post('/auth/local', data);
        store.dispatch(loginUser(response.data));
        toast.success('Logged in successfully')
        return redirect('/')
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || 'Invalid request';
        toast.error(errorMessage)
        return null;
    }
}

const Login = () => {
    return (
        <section className="h-screen grid place-items-center">
            <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
                <h4 className="text-center text-3xl font-bold">Login</h4>
                <FormInput type="email" label="email" name="identifier" defaultValue="test@test.com" />
                <FormInput type="password" label="password" name="password" defaultValue="secret" />

                <div className="mt-4">
                    <SubmitBtn text="Login" />
                </div>

                <button type="button" className="btn btn-secondary btn-block">guest user</button>
                <p className="text-center">
                    Not a member yet?
                    <Link to="/auth/register" className="ml-2 link link-hover link-primary capitalize">Register</Link>
                </p>
            </Form>
        </section>
    )
}
export default Login
