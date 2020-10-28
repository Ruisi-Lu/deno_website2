/* Copyright 2020 the Deno authors. All rights reserved. MIT license. */

import React from "react";
import Head from "next/head";
import Link from "next/link";
import CodeBlock from "../components/CodeBlock";
import Footer from "../components/Footer";
import versions from "../versions.json";
import { NextPage, GetStaticProps } from "next";
import InlineCode from "../components/InlineCode";
import Header from "../components/Header";
import { CookieBanner } from "../components/CookieBanner";

interface HomeProps {
  latestStd: string;
}

const Home: NextPage<HomeProps> = ({ latestStd }) => {
  const complexExampleProgram = `import { serve } from "https://deno.land/std@${latestStd}/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\\n" });
}`;

  return (
    <>
      <Head>
        <title>Deno - 一個安全的JavaScript與TypeScript運行環境</title>
      </Head>
      <CookieBanner />
      <div className="bg-white">
        <div className="bg-gray-50 border-b border-gray-200">
          <Header />
          <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col items-center">
            <h1 className="font-extrabold text-5xl leading-10 tracking-tight text-gray-900">
              Deno
            </h1>
            <h2 className="mt-4 sm:mt-5 font-light text-2xl text-center leading-tight text-gray-900">
              一個 <strong className="font-semibold">安全的 </strong>
              <strong className="font-semibold">JavaScript</strong> 與{" "}
              <strong className="font-semibold">TypeScript</strong> 執行環境{" "}
            </h2>
          </div>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <p className="my-4 text-gray-700">
            Deno 是一個簡單、現代且安全的JavaScript與TypeScript執行環境，使用V8並建立在Rust語言上。
          </p>
          <ol className="ml-8 list-disc text-gray-700">
            <li>
              預設安全設置，除非啟用否則無法訪問檔案、網路或運行環境
            </li>
            <li>原生支援TypeScript</li>
            <li>單一的執行檔</li>
            <li>
              內建實用工具，例如 依賴檢查工具 (
              <InlineCode>deno info</InlineCode>)及程式碼格式化工具 (
              <InlineCode>deno fmt</InlineCode>)
            </li>
            <li>
              有一套審查模組的標準，確保所有模組與Deno相容:{" "}
              <a href="https://deno.land/std" className="link">
                deno.land/std
              </a>
            </li>
          </ol>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <Link href="#installation">
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="installation">
                安裝 Deno
              </h3>
            </a>
          </Link>
          <InstallSection />
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <Link href="#getting-started">
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="getting-started">
                入門
              </h3>
            </a>
          </Link>
          <p className="my-4 text-gray-700">嘗試運行一個簡單的程式:</p>
          <CodeBlock
            code="deno run https://deno.land/std/examples/welcome.ts"
            language="bash"
          />
          <p className="my-4 text-gray-700">或是一個複雜一點的:</p>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8">
          <CodeBlock
            code={complexExampleProgram}
            language="typescript"
            disablePrefixes
          />
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8">
          <p className="my-4 text-gray-700">
            你可以在
            <Link href="/[...rest]" as="/manual">
              <a className="link">操作手冊</a>
            </Link>
            中找到更深入的介紹、範例及環境配置。
          </p>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <Link href="#runtime-documentation">
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="runtime-documentation">
                運行文件
              </h3>
            </a>
          </Link>
          <p className="my-4 text-gray-700">
            基本的Deno運行文件可以在{" "}
            <a href="https://doc.deno.land/builtin/stable" className="link">
              doc.deno.land
            </a>
            找到。
          </p>
          <p className="my-4 text-gray-700">
            Deno 帶有一本{" "}
            <Link href="/[...rest]" as="/manual">
              <a className="link">操作手冊</a>
            </Link>{" "}
            其中包含更複雜的運行函數、建構Deno的基礎概念、Deno的內部結構、如何在自己的應用程式中嵌入Deno以及如何使用Rust插件擴展Deno。
          </p>
          <p className="my-4 text-gray-700">
           操作手冊中還包含了有關Deno提供的內建工具的說明。
          </p>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <Link href="#standard-modules">
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="standard-modules">
                標準模組
              </h3>
            </a>
          </Link>
          <p className="my-4 text-gray-700">
            Deno提供了一系列經過審查的標準模組，Deno維護人員將對這樣模組進行審查，
            並確保他們可以用於特定版本的Deon。
            他們與Deno源碼一起被存放在
            <a href="https://github.com/denoland/deno" className="link">
              denoland/deno
            </a>{" "}
            倉庫中。
          </p>
          <p className="my-4 text-gray-700">
           這些標準模組託管在{" "}
            <Link href="/[...rest]" as="/std">
              <a className="link">deno.land/std</a>
            </Link>{" "}
            中，就像其他ES模組一樣，透過URL進行分發。
          </p>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <Link href="#third-party-modules">
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="third-party-modules">
                第三方模組
              </h3>
            </a>
          </Link>
          <p className="my-4 text-gray-700">
            Deno 可以從任何地方導入模組，例如Gitub、個人網頁服務器或CDN服務(
            <a href="https://www.skypack.dev" className="link">
              Skypack
            </a>{" "}
            或{" "}
            <a href="https://jspm.io" className="link">
              jspm.io
            </a>
            等)。
          </p>
          <p className="my-4 text-gray-700">
            為了更容易使用第三方模組，Deno提供了一些內建工具，例如<InlineCode>deno info</InlineCode>{" "} 和
            <InlineCode>deno doc</InlineCode>。 deno.land提供了一個網站，用於查看模組文件。 可以在{" "}
            <a href="https://doc.deno.land" className="link">
              doc.deno.land
            </a>
            查看。
          </p>
          <p className="my-4 text-gray-700">
            deno.land 提供了一個公共的ES模組託管服務器。可以在{" "}
            <Link href="/x">
              <a className="link">deno.land/x</a>
            </Link>
            找到。
          </p>
        </div>
        <div className="mt-20">
          <Footer simple />
        </div>
      </div>
    </>
  );
};

const InstallSection = () => {
  const shell = (
    <div key="shell" className="my-4 text-gray-700">
      <p className="py-2">Shell (Mac, Linux):</p>
      <CodeBlock
        language="bash"
        code={`curl -fsSL https://deno.land/x/install/install.sh | sh`}
      />
    </div>
  );
  const homebrew = (
    <div key="homebrew" className="my-4 text-gray-700">
      <p className="mb-2">
        <a href="https://formulae.brew.sh/formula/deno" className="link">
          Homebrew
        </a>{" "}
        (Mac):
      </p>
      <CodeBlock language="bash" code={`brew install deno`} />
    </div>
  );
  const powershell = (
    <div key="powershell" className="my-4 text-gray-700">
      <p className="mb-2">PowerShell (Windows):</p>
      <CodeBlock
        language="bash"
        code={`iwr https://deno.land/x/install/install.ps1 -useb | iex`}
      />
    </div>
  );
  const chocolatey = (
    <div key="chocolatey" className="my-4 text-gray-700">
      <p className="mb-2">
        <a href="https://chocolatey.org/packages/deno" className="link">
          Chocolatey
        </a>{" "}
        (Windows):
      </p>
      <CodeBlock language="bash" code={`choco install deno`} />
    </div>
  );
  const scoop = (
    <div key="scoop" className="my-4 text-gray-700">
      <p className="mb-2">
        <a href="https://scoop.sh/" className="link">
          Scoop
        </a>{" "}
        (Windows):
      </p>
      <CodeBlock language="bash" code={`scoop install deno`} />
    </div>
  );
  const cargo = (
    <div key="cargo" className="my-4 text-gray-700">
      <p className="py-2">
        使用
        <a href="https://crates.io/crates/deno" className="link">
          Cargo
        </a>
        建構並安裝Deno{" "}
      </p>
      <CodeBlock language="bash" code={`cargo install deno`} />
    </div>
  );

  return (
    <>
      <p className="my-4 text-gray-700">
        Deno是一個沒有依賴性的單一執行檔，你可以使用下面的方法安裝，
        或是透過 
        <a href="https://github.com/denoland/deno/releases" className="link">
          發行頁面
        </a>
        來下載已發行的二進制檔案{" "}
      </p>
      {shell}
      {powershell}
      {homebrew}
      {chocolatey}
      {scoop}
      {cargo}
      <p className="my-4 text-gray-700">
        查看{" "}
        <a className="link" href="https://github.com/denoland/deno_install">
          deno_install
        </a>{" "}
        了解更多安裝選項
      </p>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      latestStd: versions.std[0],
    },
  };
};

export default Home;
