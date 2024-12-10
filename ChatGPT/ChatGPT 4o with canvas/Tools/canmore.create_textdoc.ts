/**
 * Tool: canmore.create_textdoc
 * 
 * Description: Creates a new text document to display in the "canvas". This function should be used when you are creating a new text document, or deriving a related text document from an existing one. Do not use this function to update an existing document.
 */

interface CreateTextDocInput {
    name: string; // The name of the text document displayed as a title above the contents. It should be unique to the conversation and not already used by any other text document.
    type: "document" | "webview" | "code/bash" | "code/zsh" | "code/javascript" | "code/typescript" | "code/html" | "code/css" | "code/python" | "code/json" | "code/sql" | "code/go" | "code/yaml" | "code/java" | "code/rust" | "code/cpp" | "code/swift" | "code/php" | "code/xml" | "code/ruby" | "code/haskell" | "code/kotlin" | "code/csharp" | "code/c" | "code/objectivec" | "code/r" | "code/lua" | "code/dart" | "code/scala" | "code/perl" | "code/commonlisp" | "code/clojure" | "code/ocaml" | "code/powershell" | "code/verilog" | "code/dockerfile" | "code/vue" | "code/react" | "code/other"; // The text document content type to be displayed.
    content: string; // The content of the text document. This should be a string that is formatted according to the content type.
};
