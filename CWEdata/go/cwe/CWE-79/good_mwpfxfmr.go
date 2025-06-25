import { describe, expect, test } from "@jest/globals";
import { marked } from ".";
describe("test marked parser", () => {
    const tests = [
        markdown: `---
___
***
        want: `<hr><p>This is some text after the horizontal rule.</p><hr><p>This is some text after the horizontal rule.</p><hr><p>This is some text after the horizontal rule.</p>`,
    ];
      expect(unescape(marked(t.markdown))).toBe(t.want);
  });
    const tests = [
        markdown: `\`\`\`
\`\`\``,
</code></pre>`,
      {

console.log("hello world!")
        want: `<p>test code block</p><br><pre><button class="codeblock-copy-btn">copy</button><code class="language-js"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"hello world!"</span>)
      },

      expect(unescape(marked(t.markdown))).toBe(t.want);
  });
    const tests = [
        markdown: `My task:
- [x] yahaha`,
      },

      expect(unescape(marked(t.markdown))).toBe(t.want);
  });
    const tests = [
        markdown: `This is a list
1. 123123`,
      },

      expect(unescape(marked(t.markdown))).toBe(t.want);
  });
    const tests = [
        markdown: `Link: [baidu](https://baidu.com#1231)`,
      },

      expect(unescape(marked(t.markdown))).toBe(t.want);
  });
    const tests = [
        markdown: `Link: [\`baidu\`](https://baidu.com)`,
      },

      expect(unescape(marked(t.markdown))).toBe(t.want);
  });
    const tests = [
        markdown: `Link:https://baidu.com#1231`,
      },

      expect(unescape(marked(t.markdown))).toBe(t.want);
  });
    const tests = [
        markdown: `Code: \`console.log("Hello world!")\``,
      },

      expect(unescape(marked(t.markdown))).toBe(t.want);
  });
    const tests = [
        markdown: `Important: **Minecraft**`,
      },
        markdown: `Em: *Minecraft*`,
      },
        markdown: `Important: ***Minecraft/123***`,
      },
        markdown: `Important: ***[baidu](https://baidu.com)***`,
      },

      expect(unescape(marked(t.markdown))).toBe(t.want);
  });
    const tests = [
        markdown: `　　line1
        want: `<p>　　line1</p><p>　　line2</p>`,
    ];
      expect(unescape(marked(t.markdown))).toBe(t.want);
  });
    const tests = [
        markdown: `# 123 `,
      },
        markdown: `## 123 `,
      },
    for (const t of tests) {
    }
});