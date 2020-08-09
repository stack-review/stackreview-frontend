import React from 'react'
import Link from 'next/link'

import { Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <>
      <Typography variant="h6">API Examples</Typography>
      <ul>
        <li>
          <Link href="/example/languages">
            <a>Languages</a>
          </Link>
        </li>
        <li>
          <Link href="/example/create-code-review">
            <a>Create a code review</a>
          </Link>
        </li>
        <li>
          <Link href="/example/get-code-review-list">
            <a>Get the list of code review ordered desc</a>
          </Link>
        </li>
      </ul>
    </>
  )
};

export default Footer;
