import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Codeblock({ code, language = "javascript" }) {
  return (
    <div className="rounded-xl overflow-hidden w-fit h-full border border-slate-700 hover:border-amber-400 shadow-lg">
      <SyntaxHighlighter 
        language={language} 
        style={vscDarkPlus}
        customStyle={{ 
          margin: 0, 
          // padding: '.5rem', 
          background: '#0f172a', 
          minHeight: '100%',
          overflowX: 'hidden'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}