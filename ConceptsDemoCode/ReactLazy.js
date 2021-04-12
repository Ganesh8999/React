// Before
import MyComponent from "./LazyComponent";

function MyComponent() {
  return (
    <div>
      <LazyComponent />
    </div>
  );
}

// after
// this feature is not still not availbale for SSR
import React, { lazy, Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

function MyComponent() {
  return (
    <Suspense fallback={<div>loading................</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// React.lazy takes a function that must call a dynamic import().
// This must return a Promise which resolves to a module with a default export containing a React component.

// Which means that your LazyComponent should be exported like below

export default function LazyComponent() {
  return <div>LazyComponent</div>;
}

// what to do if LazyComponent is not exported as default
// showing shortcut :)
const LazyComponent = React.lazy(() =>
  import("./LazyComponent").then((module) => ({
    default: module.LazyComponent,
  }))
);
