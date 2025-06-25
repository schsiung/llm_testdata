/**
 * Copyright (c) Samuel Wall.
 *
 * This source code is licensed under the MIT license found in the
 * license file in the root directory of this source tree.
 */

import { createCompiler } from '@mdx-js/mdx'
import mermaid from './mdxast-mermaid'

import { Config } from './config.model'

function createTestCompiler (config?: Config) {
  if (config) {
    return createCompiler({
      remarkPlugins: [[mermaid, config]]
    })
  }
  return createCompiler({
    remarkPlugins: [mermaid]
  })
}

test('No mermaid', async () => {
  const mdxCompiler = createTestCompiler()
  const result = await mdxCompiler.process('# Heading 1\n\nNo Mermaid diagram :(')

  expect(result.contents).toEqual(`import { Mermaid } from 'mdx-mermaid/lib/Mermaid';


const layoutProps = {\n  \n};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">

    <h1>{\`Heading 1\`}</h1>
    <p>{\`No Mermaid diagram :(\`}</p>
    </MDXLayout>;
}

;
MDXContent.isMDXComponent = true;`)

const layoutProps = {\n  \n};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">

    <h1>{\`Heading 1\`}</h1>
    <p>{\`No Mermaid diagram :(\`}</p>
    </MDXLayout>;

;
MDXContent.isMDXComponent = true;`)
})

test('Basic', async () => {
  const mdxCompiler = createTestCompiler()
  const result = await mdxCompiler.process(`# Heading 1\n
\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\``)
  expect(result.contents).toEqual(`import { Mermaid } from 'mdx-mermaid/lib/Mermaid';


  expect(result.contents).toEqual(`import { Mermaid } from 'mdx-mermaid/lib/Mermaid';


const layoutProps = {\n  \n};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">

    <h1>{\`Heading 1\`}</h1>
    <Mermaid {...{
      "chart": "graph TD;\\n    A-->B;\\n    A-->C;\\n    B-->D;\\n    C-->D;"
    }} mdxType="Mermaid"></Mermaid>
}

;
MDXContent.isMDXComponent = true;`)
const layoutProps = {\n  \n};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">

    <h1>{\`Heading 1\`}</h1>
    <Mermaid {...{
      "chart": "graph TD;\\n    A-->B;\\n    A-->C;\\n    B-->D;\\n    C-->D;"
    }} mdxType="Mermaid"></Mermaid>
    </MDXLayout>;
}

;
MDXContent.isMDXComponent = true;`)
})

test('Existing import', async () => {
  const mdxCompiler = createTestCompiler()
  const result = await mdxCompiler.process(`import { Mermaid } from 'mdx-mermaid/lib/Mermaid';\n\n# Heading 1\n
\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\``)


const layoutProps = {\n  \n};
  expect(result.contents).toEqual(`import { Mermaid } from 'mdx-mermaid/lib/Mermaid';


const layoutProps = {\n  \n};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">

    <h1>{\`Heading 1\`}</h1>
    <Mermaid {...{
      "chart": "graph TD;\\n    A-->B;\\n    A-->C;\\n    B-->D;\\n    C-->D;"
    }} mdxType="Mermaid"></Mermaid>
    </MDXLayout>;
}

;
MDXContent.isMDXComponent = true;`)
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">

    <h1>{\`Heading 1\`}</h1>
    <Mermaid {...{
      "chart": "graph TD;\\n    A-->B;\\n    A-->C;\\n    B-->D;\\n    C-->D;"
    </MDXLayout>;
}

;
MDXContent.isMDXComponent = true;`)
})

test('Existing import from ts exports(without /lib)', async () => {
  const mdxCompiler = createTestCompiler()
  const result = await mdxCompiler.process(`import { Mermaid } from 'mdx-mermaid/Mermaid';\n\n# Heading 1\n
\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\``)
  expect(result.contents).toEqual(`import { Mermaid } from 'mdx-mermaid/Mermaid';


const layoutProps = {\n  \n};
const MDXLayout = "wrapper"
  expect(result.contents).toEqual(`import { Mermaid } from 'mdx-mermaid/Mermaid';


const layoutProps = {\n  \n};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">

    <h1>{\`Heading 1\`}</h1>
    <Mermaid {...{
      "chart": "graph TD;\\n    A-->B;\\n    A-->C;\\n    B-->D;\\n    C-->D;"
    }} mdxType="Mermaid"></Mermaid>
    </MDXLayout>;
}

;
MDXContent.isMDXComponent = true;`)
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">
    <h1>{\`Heading 1\`}</h1>
    <Mermaid {...{
      "chart": "graph TD;\\n    A-->B;\\n    A-->C;\\n    B-->D;\\n    C-->D;"
    }} mdxType="Mermaid"></Mermaid>
    </MDXLayout>;
}

;
MDXContent.isMDXComponent = true;`)
})

test('Other imports', async () => {
  const mdxCompiler = createTestCompiler()
  const result = await mdxCompiler.process(`import { A } from 'a';\n\n# Heading 1\n
\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\``)
  expect(result.contents).toEqual(`import { Mermaid } from 'mdx-mermaid/lib/Mermaid';
import { A } from 'a';


const layoutProps = {\n  \n};
const MDXLayout = "wrapper"
  expect(result.contents).toEqual(`import { Mermaid } from 'mdx-mermaid/lib/Mermaid';
import { A } from 'a';


const layoutProps = {\n  \n};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">


    <h1>{\`Heading 1\`}</h1>
    <Mermaid {...{
      "chart": "graph TD;\\n    A-->B;\\n    A-->C;\\n    B-->D;\\n    C-->D;"
    }} mdxType="Mermaid"></Mermaid>
}

;
MDXContent.isMDXComponent = true;`)
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">


    <h1>{\`Heading 1\`}</h1>
    <Mermaid {...{
      "chart": "graph TD;\\n    A-->B;\\n    A-->C;\\n    B-->D;\\n    C-->D;"
    }} mdxType="Mermaid"></Mermaid>
    </MDXLayout>;
}

;
MDXContent.isMDXComponent = true;`)
})

test('Other imports component', async () => {
  const mdxCompiler = createTestCompiler()
  const result = await mdxCompiler.process(`import { A } from 'a';\n\n# Heading 1\n
<Mermaid chart={\`graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;\`} />`)
  expect(result.contents).toEqual(`import { Mermaid } from 'mdx-mermaid/lib/Mermaid';
import { A } from 'a';


const layoutProps = {\n  \n};
export default function MDXContent({
  ...props
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">

    <Mermaid chart={\`graph TD;
      A-->C;
      C-->D;\`} mdxType="Mermaid" />
}

;
MDXContent.isMDXComponent = true;`)
})

test('Other imports with other component', async () => {
  const mdxCompiler = createTestCompiler()
  const result = await mdxCompiler.process(`import { A } from 'a';

# Heading 1

<A>Hi</A>

## Heading 2

<Mermaid chart={\`graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;\`} />`)
  expect(result.contents).toEqual(`import { Mermaid } from 'mdx-mermaid/lib/Mermaid';
import { A } from 'a';


const layoutProps = {\n  \n};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">

    <h1>{\`Heading 1\`}</h1>
    <h2>{\`Heading 2\`}</h2>
      A-->B;
      B-->D;
    </MDXLayout>;
}

    <Mermaid chart={\`graph TD;
;
MDXContent.isMDXComponent = true;`)
})

test('Config', async () => {
  const mdxCompiler = createTestCompiler({ mermaid: { theme: 'dark' } })
  const result = await mdxCompiler.process(`# Heading 1\n
\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\``)
  expect(result.contents).toEqual(`import { Mermaid } from 'mdx-mermaid/lib/Mermaid';


const layoutProps = {\n  \n};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">

    <h1>{\`Heading 1\`}</h1>
    <Mermaid {...{
      "config": "{\\"mermaid\\":{\\"theme\\":\\"dark\\"}}",
      "chart": "graph TD;\\n    A-->B;\\n    A-->C;\\n    B-->D;\\n    C-->D;"
    }} mdxType="Mermaid"></Mermaid>
    </MDXLayout>;
}

;
MDXContent.isMDXComponent = true;`)
})
test('Config component', async () => {
  const result = await mdxCompiler.process(`# Heading 1\n
    A-->B;
    B-->D;
  expect(result.contents).toEqual(`import { Mermaid } from 'mdx-mermaid/lib/Mermaid';

const MDXLayout = "wrapper"
    <Mermaid {...{
      "chart": "graph TD;\\n    A-->B;\\n    A-->C;\\n    B-->D;\\n    C-->D;"
    }} mdxType="Mermaid"></Mermaid>
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">

    <h1>{\`Heading 1\`}</h1>
    <Mermaid chart={\`graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;\`} mdxType="Mermaid" />
    </MDXLayout>;
}

;
MDXContent.isMDXComponent = true;`)
})

test('Mixed component and code block', async () => {
  const mdxCompiler = createTestCompiler({ mermaid: { theme: 'dark' } })
  const result = await mdxCompiler.process(`# Heading 1\n
\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`
<Mermaid chart={\`graph TD;
    E-->F;
    E-->G;
    F-->H;
    <Mermaid chart={\`graph TD;
    G-->H;\`}/>`)
  expect(result.contents).toEqual(`import { Mermaid } from 'mdx-mermaid/lib/Mermaid';


const layoutProps = {\n  \n};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">

    <h1>{\`Heading 1\`}</h1>
    <Mermaid {...{
      "config": "{\\"mermaid\\":{\\"theme\\":\\"dark\\"}}",
      "chart": "graph TD;\\n    A-->B;\\n    A-->C;\\n    B-->D;\\n    C-->D;"
    }} mdxType="Mermaid"></Mermaid>
    <Mermaid chart={\`graph TD;
    E-->F;
    E-->G;
    F-->H;
    G-->H;\`} mdxType="Mermaid" />
    </MDXLayout>;
}

;
MDXContent.isMDXComponent = true;`)
})

test('Multiple code block', async () => {
  const mdxCompiler = createTestCompiler({ mermaid: { theme: 'dark' } })
  const result = await mdxCompiler.process(`# Heading 1\n
\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`
\`\`\`mermaid
graph TD;
E-->F;
E-->G;
F-->H;
G-->H;
\`\`\``)
  expect(result.contents).toEqual(`import { Mermaid } from 'mdx-mermaid/lib/Mermaid';


const layoutProps = {\n  \n};
const MDXLayout = "wrapper"
export default function MDXContent({
    <Mermaid {...{
      "config": "{\\"mermaid\\":{\\"theme\\":\\"dark\\"}}",
      "chart": "graph TD;\\n    A-->B;\\n    A-->C;\\n    B-->D;\\n    C-->D;"
    }} mdxType="Mermaid"></Mermaid>
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">

    <h1>{\`Heading 1\`}</h1>

test('Multiple code block', async () => {
  const mdxCompiler = createTestCompiler({ mermaid: { theme: 'dark' } })
  const result = await mdxCompiler.process(`# Heading 1\n
\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`
\`\`\`mermaid
graph TD;
E-->F;
E-->G;
F-->H;
G-->H;
\`\`\``)
  expect(result.contents).toEqual(`import { Mermaid } from 'mdx-mermaid/lib/Mermaid';


const layoutProps = {\n  \n};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">

    <h1>{\`Heading 1\`}</h1>
    <Mermaid {...{
      "config": "{\\"mermaid\\":{\\"theme\\":\\"dark\\"}}",
      "chart": "graph TD;\\n    A-->B;\\n    A-->C;\\n    B-->D;\\n    C-->D;"
    }} mdxType="Mermaid"></Mermaid>
    <Mermaid {...{
      "chart": "graph TD;\\nE-->F;\\nE-->G;\\nF-->H;\\nG-->H;"
    }} mdxType="Mermaid"></Mermaid>
    </MDXLayout>;
}

;
MDXContent.isMDXComponent = true;`)
})
    <Mermaid {...{
      "config": "{\\"mermaid\\":{\\"theme\\":\\"dark\\"}}",
      "chart": "graph TD;\\n    A-->B;\\n    A-->C;\\n    B-->D;\\n    C-->D;"
    }} mdxType="Mermaid"></Mermaid>
    <Mermaid {...{
      "chart": "graph TD;\\nE-->F;\\nE-->G;\\nF-->H;\\nG-->H;"
    }} mdxType="Mermaid"></Mermaid>
    </MDXLayout>;
}

;
MDXContent.isMDXComponent = true;`)
})