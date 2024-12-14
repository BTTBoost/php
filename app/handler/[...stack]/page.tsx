import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack";
import React, { Suspense } from 'react';

export default function Handler(props: any) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/** @ts-ignore */}
      <StackHandler fullPage app={stackServerApp} {...props} />
    </Suspense>
  );
}
