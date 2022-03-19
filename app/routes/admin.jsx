/* eslint-disable no-undef */
import { json, useLoaderData, redirect, Link, Outlet } from "remix";

export default function Admin() {

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
