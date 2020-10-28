/* Copyright 2020 the Deno authors. All rights reserved. MIT license. */

const xBasepath = "https://raw.githubusercontent.com/Laysi/deno-docs-tw/";
const githubBasepath = "https://raw.githubusercontent.com/Laysi/deno-docs-tw/";
const docpath = "https://github.com//Laysi/deno-docs-tw/blob/";
import VERSIONS from "../versions.json";

export const versions = VERSIONS.cli;

export interface TableOfContents {
  [slug: string]: {
    name: string;
    children?: {
      [slug: string]: string;
    };
  };
}

function basepath(version: string) {
  return VERSIONS.cli.find((v) => v === version) === undefined
    ? githubBasepath
    : xBasepath;
}

export async function getTableOfContents(
  version: string
): Promise<TableOfContents> {
  const res = await fetch(`${basepath(version)}${version}/toc.json`);
  if (res.status !== 200) {
    throw Error(
      `Got an error (${
        res.status
      }) while getting the manual table of contents:\n${await res.text()}`
    );
  }
  return await res.json();
}

export function getFileURL(version: string, path: string): string {
  return `${basepath(version)}${version}${path}.md`;
}

export function getDocURL(version: string, path: string): string {
  return `${docpath}${version}${path}.md`;
}
