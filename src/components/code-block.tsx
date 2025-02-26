"use client";
import { Highlight, themes } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  return (
    <Highlight theme={themes.shadesOfPurple} language={language} code={code}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={{ ...style, padding: "16px", borderRadius: "8px", overflowX: "auto" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
