'use client';
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "@/components/Toolbar";
import TextAlign from "@tiptap/extension-text-align";

function TipTap({ description, onChange }) {


    const editor = useEditor({
        extensions: [
            StarterKit.configure(),
            TextAlign.configure({
                types: ['heading', 'paragraph'],

            })
        ],
        content: description,
        editorProps: {
            attributes: {
                class: "p-4 max-h-[320px] border border-light-texto dark:border-dark-texto rounded-md overflow-y-auto min-h-[150px]"
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getText())
        }
    })

    return (
        <div className="flex flex-col gap-2 justify-stretch min-h-[250px] overflow-y-auto resize-none">
            {/* <Toolbar editor={editor} /> */}
            <EditorContent editor={editor} />
        </div>
    )
}

export default TipTap