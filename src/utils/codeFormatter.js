import React from "react";

const highlightStyles = {
    keyword: "color: #c084fc; font-weight: 700;",
    string: "color: #60a5fa; font-weight: 600;",
    comment: "color: #9ca3af; font-style: italic;",
    number: "color: #2dd4bf; font-weight: 600;",
    functionCall: "font-weight: 700;",
};

const codeFormatter = (code, language = "javascript") => {
    if (!code) {
        return <p className="text-[color:var(--text-secondary)]">No code available.</p>;
    }

    const lines = code.split("\n");

    const getLanguageConfig = () => {
        const baseKeywords = [
            // JS/TS
            "import", "export", "const", "let", "var", "function", "return", "if", "else", "for", "while",
            "class", "extends", "try", "catch", "throw", "async", "await", "from", "default", "new", "this",
            "super", "static", "get", "set", "typeof", "instanceof", "delete", "in", "of", "with", "debugger",
            "break", "continue", "switch", "case", "do", "finally", "yield", "true", "false", "null", "undefined",

            // TS
            "interface", "type", "enum", "namespace", "module", "declare", "abstract", "implements",
            "public", "private", "protected", "readonly", "override",

            // Java
            "package", "synchronized", "transient", "volatile", "extends", "implements", "instanceof",
            "throws", "throw", "import", "return", "public", "private", "protected", "static", "final",
            "try", "catch", "finally", "new", "class", "interface", "enum", "abstract", "super", "this",
            "if", "else", "switch", "case", "default", "for", "while", "do", "break", "continue", "void",
            "boolean", "byte", "char", "double", "float", "int", "long", "short", "null", "true", "false"
        ];

        return { keywords: [...new Set(baseKeywords)] }; // remove duplicates
    };

    // Escape HTML chars in text
    const escapeHTML = (text) =>
        text.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Highlight a single line of code
    const highlightLine = (line) => {
        const { keywords } = getLanguageConfig();

        // Regexes for token types
        const commentRegex = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/;
        const stringRegex = /(["'`])(?:\\.|(?!\1)[^\\\n])*/;
        const keywordRegex = new RegExp(`\\b(${keywords.join("|")})\\b`);
        const numberRegex = /\b\d+(\.\d+)?\b/;
        const functionCallRegex = /\b(\w+)(?=\s*\()/;

        // Combine all regexes, order matters
        const combinedRegex = new RegExp(
            `${commentRegex.source}|${stringRegex.source}|${keywordRegex.source}|${functionCallRegex.source}|${numberRegex.source}`,
            "g"
        );

        let result = "";
        let lastIndex = 0;

        line.replace(combinedRegex, (match, ...args) => {
            const offset = args[args.length - 2];

            // Escape text before the match
            result += escapeHTML(line.slice(lastIndex, offset));
            lastIndex = offset + match.length;

            let highlighted = escapeHTML(match);

            if (stringRegex.test(match)) {
                highlighted = `<span style="${highlightStyles.string}">${escapeHTML(match)}</span>`;
            }
            else if (commentRegex.test(match)) {
                highlighted = `<span style="${highlightStyles.comment}">${escapeHTML(match)}</span>`;
            } else if (keywordRegex.test(match) && keywords.includes(match)) {
                highlighted = `<span style="${highlightStyles.keyword}">${escapeHTML(match)}</span>`;
            } else if (numberRegex.test(match)) {
                highlighted = `<span style="${highlightStyles.number}">${escapeHTML(match)}</span>`;
            } else {
                highlighted = `<span style="${highlightStyles.functionCall}">${escapeHTML(match)}</span>`;
            }

            result += highlighted;
            return match;
        });

        // Escape remaining text after last match
        result += escapeHTML(line.slice(lastIndex));

        return result || "&nbsp;";
    };

    return (
        <div className="overflow-x-auto pb-4">
            <div
                className="border border-[color:var(--text-secondary)]"
                style={{
                    backgroundColor: "var(--header)",
                    color: "var(--text-primary)",
                }}
            >
                <div
                    className="px-4 py-2 border-b border-[color:var(--text-secondary)]"
                    style={{ backgroundColor: "var(--bg-primary)" }}
                >
                    <span
                        className="text-sm font-medium uppercase"
                        style={{ color: "var(--text-link)" }}
                    >
                        {language}
                    </span>
                </div>

                <div className="flex">
                    {/* Line numbers */}
                    <div
                        className="flex flex-col text-right px-3 py-4 border-r border-[color:var(--text-secondary)] select-none"
                        style={{
                            backgroundColor: "var(--bg-primary)",
                            color: "var(--text-secondary)",
                            minWidth: "3rem",
                        }}
                    >
                        {lines.map((_, index) => (
                            <div key={index} className="leading-6 text-sm">
                                {index + 1}
                            </div>
                        ))}
                    </div>

                    {/* Code lines */}
                    <div className="flex-1 px-4 py-4 overflow-x-auto">
                        <pre className="text-sm leading-6 m-0">
                            {lines.map((line, index) => (
                                <div
                                    key={index}
                                    className="min-h-[1.5rem]"
                                    dangerouslySetInnerHTML={{ __html: highlightLine(line) }}
                                />
                            ))}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default codeFormatter;
