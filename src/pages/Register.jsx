import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components/index.js";

const Login = () => {
    return (
        <section className="h-screen grid place-items-center">
            <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
                <h4 className="text-center text-3xl font-bold">Register</h4>
                <FormInput type="text" label="username" name="username" />
                <FormInput type="email" label="email" name="email" />
                <FormInput type="password" label="password" name="password" />

                <div className="mt-4">
                    <SubmitBtn text="Register" />
                </div>

                <button type="button" className="btn btn-secondary btn-block">guest user</button>
                <p className="text-center">
                    Already a member?
                    <Link to="/auth/login" className="ml-2 link link-hover link-primary capitalize">Login</Link>
                </p>
            </Form>
        </section>
    )
}
export default Login
