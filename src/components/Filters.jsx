import { Form, useLoaderData, Link } from "react-router-dom";
import {FormInput} from "./index.js";
import FormSelect from "./FormSelect.jsx";
import FormRange from "./FormRange.jsx";
import FormCheckbox from "./FormCheckbox.jsx";

const Filters = () => {
    const {meta, params} = useLoaderData();
    const {search,company,category,shipping,order,price} = params

    return <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        <FormInput type="search" label="Search Product" name="search" size="input-sm" defaultValue={search} />

        <FormSelect label="Select Category" name="category" list={meta.categories} defaultValue={category} size="select-sm" />
        <FormSelect label="Select Company" name="company" list={meta.companies} defaultValue={company} size="select-sm" />
        <FormSelect label="Sort By" name="order" list={['a-z','z-a','high','low']} defaultValue={order} size="select-sm" />

        <FormRange name="price" label="Select Price" size="range-sm" price={price} />
        <FormCheckbox name="shipping" label="Free Shipping" size="checkbox-sm" defaultValue={shipping} />

        <button type="submit" className="btn btn-primary btn-sm">
            Search
        </button>
        <Link to="/products" className="btn btn-accent btn-sm">Reset</Link>
    </Form>
}
export default Filters
